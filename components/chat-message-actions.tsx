'use client'

import { type Message } from 'ai'

import { Button } from '@/components/ui/button'
import { IconCheck, IconCopy } from '@/components/ui/icons'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'

interface ChatMessageActionsProps extends React.ComponentProps<'div'> {
  message: Message
  coachMessage?: Message
}

export function ChatMessageActions({
  message,
  coachMessage,
  className,
  ...props
}: ChatMessageActionsProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-end transition-opacity',
        className
      )}
      {...props}
    >
    </div>
  )
}
