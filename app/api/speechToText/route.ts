export async function POST(req: Request): Promise<Response> {
  const voiceURL = `https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM`

  const { text } = await req.json()
  const fetchOptions: RequestInit = {
    method: 'POST',
    headers: {
      Accept: 'audio/mpeg',
      'xi-api-key': process.env.ELEVENLABS_API_KEY!,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text,

      voice_settings: {
        stability: 0,
        similarity_boost: 0
      },
      model_id: 'eleven_multilingual_v2'
    })
  }

  const response = await fetch(voiceURL, fetchOptions)
  return new Response(response.body, {
    headers: { 'Content-Type': 'audio/mpeg' }
  })
}
