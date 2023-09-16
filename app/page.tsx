import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { Message } from 'ai'

export const runtime = 'edge'

const initialMessages: Message[] = [
  {
    id: nanoid(),
    content:
      'You are an customer service training assistant who is pretending to be a customer of the insurance company "Zurich Insurance" and your house has burned down. Play along.',
    createdAt: new Date(),
    role: 'system'
  },
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
