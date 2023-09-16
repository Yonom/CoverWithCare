import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { initialMessages, initialCoachMessages } from '../lib/initialMessages'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return (
    <Chat
      id={id}
      initialMessages={initialMessages}
      initialCoachMessages={initialCoachMessages}
    />
  )
}
