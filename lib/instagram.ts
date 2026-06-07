import { client } from './microcms'
import { InstagramPost } from '@/types/instagram'

export const getInstagramPosts = async () => {
  try {
    const data = await client.getList<InstagramPost>({
      endpoint: 'instagram',
      queries: { limit: 8 },
      customRequestInit: {
        next: { revalidate: 60 },
      },
    })
    return data.contents
  } catch (error) {
    console.error('instagram fetch error:', error)
    return []
  }
}
