import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  if (secret !== process.env.MICROCMS_PREVIEW_SECRET) {
    return new Response('Invalid secret', { status: 401 })
  }

  const d = await draftMode()
  d.enable()

  redirect(slug || '/')
}