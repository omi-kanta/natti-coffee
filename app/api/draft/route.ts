import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const draftKey = searchParams.get('draftKey')
  const contentId = searchParams.get('contentId')

  if (secret !== process.env.MICROCMS_PREVIEW_SECRET) {
    return new Response('Invalid secret', { status: 401 })
  }

  const d = await draftMode()
  d.enable()

  // contentIdがある場合はmenuのカテゴリーを判定してリダイレクト
  if (contentId) {
    try {
      const res = await fetch(
        `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/menu/${contentId}${draftKey ? `?draftKey=${draftKey}` : ''}`,
        {
          headers: {
            'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
          },
          cache: 'no-store',
        }
      )
      const data = await res.json()
      const category = data.category?.[0]

      if (category === 'food') {
        redirect(`/menu/food/${contentId}${draftKey ? `?draftKey=${draftKey}` : ''}`)
      } else if (category === 'drink') {
        redirect(`/menu/drink/${contentId}${draftKey ? `?draftKey=${draftKey}` : ''}`)
      }
    } catch (e) {
      console.error('preview category fetch error:', e)
    }
  }

  // slug指定がある場合はそちらにリダイレクト
  const redirectUrl = draftKey && slug
    ? `${slug}?draftKey=${draftKey}`
    : (slug || '/')

  redirect(redirectUrl)
}