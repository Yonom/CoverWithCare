import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const response = await fetch('https://api.assemblyai.com/v2/realtime/token', {
    method: 'POST',
    headers: {
      Authorization: process.env.ASSEMBLYAI_API_KEY!,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ expires_in: 3600 })
  })

  if (!response.ok) {
    const data = await response.json()
    return NextResponse.json(data, {
      status: response.status
    })
  }

  const data = await response.json()
  return NextResponse.json(data)
}
