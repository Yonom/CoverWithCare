'use client'

import { type Message } from 'ai'
import { useEffect } from 'react'

export async function playText(text: string) {
  const response = await fetch('/api/speechToText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text })
  })

  if (!response.ok) {
    throw new Error('Speech generation failed')
  }

  const audioContext = new window.AudioContext()
  const audioData = await response.arrayBuffer()
  const audioBuffer = await audioContext.decodeAudioData(audioData)

  const source = audioContext.createBufferSource()
  source.buffer = audioBuffer
  source.connect(audioContext.destination)

  return new Promise<void>(resolve => {
    source.onended = () => {
      audioContext.close()
      resolve()
    }
    source.start()
  })
}
