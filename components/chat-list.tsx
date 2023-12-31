import { type Message } from 'ai'

import { Separator } from '@/components/ui/separator'
import { ChatMessage } from '@/components/chat-message'

export interface ChatList {
  messages: Message[]
  coachMessages: Message[]
}

export function ChatList({ messages, coachMessages }: ChatList) {
  if (!messages.length) {
    return null
  }

  const filteredCoachMessages = coachMessages.filter(
    c => c.role === 'assistant'
  )

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages
        .filter(m => m.role !== 'system')
        .map((message, index) => {
          const coachMessage =
            message.role === 'user'
              ? filteredCoachMessages[Math.floor(index / 2)]
              : undefined
          return (
            <div key={index}>
              <ChatMessage message={message} coachMessage={coachMessage} />
              {index < messages.length - 1 && (
                <Separator className="my-4 md:my-8" />
              )}
            </div>
          )
        })}
    </div>
  )
}
