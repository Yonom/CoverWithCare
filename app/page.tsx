import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { Message } from 'ai'

export const runtime = 'edge'

const initialMessages: Message[] = [
  {
    id: nanoid(),
    content: 'Hi, my house burned down!',
    createdAt: new Date(),
    role: 'assistant'
  }
]

export default function IndexPage() {
  const id = nanoid()

  return <Chat id={id} initialMessages={initialMessages} />
}
