type AssemblyAiParams = {
  onInput: (text: string) => void
  onInputComplete: (text: string) => void
}

const assemblyAi = ({ onInput, onInputComplete }: AssemblyAiParams) => {
  let socket: WebSocket

  const setupSocket = async () => {
    const response = await fetch('/api/assemblyAiToken')
    const data = await response.json()

    // if it errors, retry in 1sec
    if (data.error) {
      console.error(data.error)
      await new Promise(r => setTimeout(r, 1000))
      setupSocket()
      return
    }

    const { token } = data
    socket = new WebSocket(
      `wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`
    )

    let lastInput = ''
    socket.onmessage = message => {
      const { text = '', message_type } = JSON.parse(message.data)
      if (message_type === 'FinalTranscript' && !!text) {
        onInputComplete(text)
        lastInput = ''
      } else if (text !== lastInput) {
        onInput(text)
        lastInput = text
      }
    }

    // if socket closes, reconnect in 1sec
    socket.onclose = async () => {
      await new Promise(r => setTimeout(r, 1000))
      setupSocket()
    }
  }
  setupSocket()

  let started = false
  let paused = true
  return {
    getIsPaused: () => paused,
    startRecording: async () => {
      paused = false

      if (started) {
        return
      }
      started = true

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
      })
      const recorder = new (window as any).RecordRTC(stream, {
        type: 'audio',
        mimeType: 'audio/webm;codecs=pcm', // endpoint requires 16bit PCM audio
        recorderType: (window as any).StereoAudioRecorder,
        timeSlice: 250, // set 250 ms intervals of data that sends to AAI
        desiredSampRate: 16000,
        numberOfAudioChannels: 1, // real-time requires only one channel
        bufferSize: 4096,
        audioBitsPerSecond: 128000,
        ondataavailable: (blob: Blob) => {
          if (paused) return

          const reader = new FileReader()
          reader.onload = () => {
            const base64data = reader.result

            // audio data must be sent as a base64 encoded string
            if (
              socket.readyState === WebSocket.OPEN &&
              typeof base64data === 'string'
            ) {
              socket.send(
                JSON.stringify({
                  audio_data: base64data.split('base64,')[1]
                })
              )
            }
          }
          reader.readAsDataURL(blob)
        }
      })
      recorder.startRecording()
    },
    pauseRecording: () => {
      paused = true
    }
  }
}

const messageRepetitionThreshold = 500

type AssemblyAiListenerParams = {
  onInput: (text: string) => void
  onInputComplete: (text: string) => void
}

export const assemblyAiListener = ({
  onInput,
  onInputComplete
}: AssemblyAiListenerParams) => {
  let buffer = ''

  let isBusy = false
  let timeoutHandle: ReturnType<typeof setTimeout>
  const resetTimeout = () => {
    if (isBusy) return
    if (timeoutHandle) clearTimeout(timeoutHandle)
    timeoutHandle = setTimeout(async () => {
      if (!buffer) return
      recorder.pauseRecording()
      isBusy = true
      try {
        await onInputComplete(buffer)
      } finally {
        recorder.startRecording()
        isBusy = false
        buffer = ''
      }
    }, messageRepetitionThreshold)
  }

  const inputHandler = (text: string) => {
    const input = (buffer + ' ' + text).trim()
    if (!text) return input

    onInput(input)
    resetTimeout()
    return input
  }

  const recorder = assemblyAi({
    onInput: inputHandler,
    onInputComplete: text => {
      buffer = inputHandler(text)
    }
  })
  return recorder
}
