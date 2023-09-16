import { type UseChatHelpers } from 'ai/react'
import { IconMicrophone } from '@/components/ui/icons'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { assemblyAiListener } from '@/lib/assemblyAi'

interface ChatRecorderProps extends Pick<UseChatHelpers, 'setInput'> {
  onSubmit: (value: string) => Promise<void>
  finishCallbackRef: MutableRefObject<() => void>
}

export function ChatRecorder({
  setInput,
  onSubmit,
  finishCallbackRef
}: ChatRecorderProps) {
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const recorderRef = useRef<any>()
  useEffect(() => {
    if (recorderRef.current) return
    const recorder = (recorderRef.current = assemblyAiListener({
      onInput: t => setInput(t),
      onInputComplete: async t => {
        setInput('')
        await onSubmit(t)
        await new Promise<void>(r => {
          finishCallbackRef.current = r
        })
      },
      onRecordingStatusChange: paused => {
        setIsPaused(paused)
      }
    }))
  }, [])

  return (
    <IconMicrophone
      className="w-5 h-5"
      onClick={() => {
        if (isStarted) return
        setIsStarted(true)
        recorderRef.current.startRecording()
      }}
    />
  )
}
