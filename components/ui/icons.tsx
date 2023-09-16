'use client'

import * as React from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

import Logo from '../../assets/icons/icon.png'

function IconNextChat({
  className,
  inverted,
  ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean }) {
  const id = React.useId()

  return (
    <Image
      src={Logo}
      alt="Your Image Description"
      width={70} // Set the desired width
      height={70} // Set the desired height
    />
  )
}

function IconOpenAI({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <div
      className={cn(
        'flex mt-3 ml-2 h-8 w-8 shrink-0 select-none items-center justify-center rounded-md overflow-clip border shadow bg-background'
      )}
      // style={{'marginTop': '6px', 'width': '37px'}}
    >
      <img src="data:image/jpeg;base64,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"></img>
    </div>
  )
}

function IconVercel({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-label="Vercel logomark"
      role="img"
      viewBox="0 0 74 64"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

function IconGitHub({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconSeparator({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  )
}

function IconArrowDown({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconMicrophone({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5h2Z"
      />
    </svg>
  )
}

function IconArrowRight({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  )
}

function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <div
      className={cn(
        'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow bg-background'
      )}
    >
      <img src="https://icon-library.com/images/customer-icon/customer-icon-29.jpg"></img>
    </div>
  )
}

function IconPlus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  )
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <img src="data:image/png;base64,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"></img>
  )
}

function IconSpinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4 animate-spin', className)}
      {...props}
    >
      <path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" />
    </svg>
  )
}

function IconMessage({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" />
    </svg>
  )
}

function IconTrash({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconRefresh({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconStop({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" />
    </svg>
  )
}

function IconSidebar({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" />
    </svg>
  )
}

function IconMoon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
    </svg>
  )
}

function IconSun({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
    </svg>
  )
}

function IconCopy({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  )
}

function IconCheck({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconDownload({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" />
    </svg>
  )
}

function IconClose({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
    </svg>
  )
}

function IconEdit({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  )
}

function IconShare({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" />
    </svg>
  )
}

function IconUsers({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" />
    </svg>
  )
}

function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconChevronUpDown({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z" />
    </svg>
  )
}

export {
  IconEdit,
  IconNextChat,
  IconOpenAI,
  IconVercel,
  IconGitHub,
  IconSeparator,
  IconArrowDown,
  IconArrowRight,
  IconUser,
  IconPlus,
  IconArrowElbow,
  IconSpinner,
  IconMessage,
  IconTrash,
  IconRefresh,
  IconStop,
  IconSidebar,
  IconMoon,
  IconSun,
  IconCopy,
  IconCheck,
  IconDownload,
  IconClose,
  IconShare,
  IconUsers,
  IconExternalLink,
  IconChevronUpDown,
  IconMicrophone
}
