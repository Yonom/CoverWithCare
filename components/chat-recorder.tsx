import { type UseChatHelpers } from 'ai/react'
import { IconMicrophone } from '@/components/ui/icons'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { assemblyAiListener } from '@/lib/assemblyAi'
import { cn } from '@/lib/utils'

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
  const [isPaused, setIsPaused] = useState(false)
  const recorderRef = useRef<any>()
  useEffect(() => {
    if (recorderRef.current) return
    recorderRef.current = assemblyAiListener({
      onInput: t => setInput(t),
      onInputComplete: async t => {
        setInput('')
        await onSubmit(t)
        await new Promise<void>(r => {
          finishCallbackRef.current = r
        })
      },
      onRecordingStatusChange: paused => {
        console.log('paused', paused)
        setIsPaused(paused)
      }
    })
  }, [])

  return (
    <IconMicrophone
      className={cn(
        'w-5 h-5',
        isStarted && isPaused ? '' : 'cursor-pointer',
        isStarted && isPaused && 'text-gray-500',
        isStarted && !isPaused && 'text-green-500'
      )}
      onClick={() => {
        if (isStarted && isPaused) return
        if (isStarted) {
          setIsStarted(false)
          recorderRef.current.pauseRecording()
        } else {
          setIsStarted(true)
          recorderRef.current.startRecording()
        }
      }}
    />
  )
}
