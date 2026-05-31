import { client } from './microcms'
import { InstagramPost } from '@/types/instagram'

export const getInstagramPosts = async () => {
  try {
    const data = await client.getList<InstagramPost>({
      endpoint: 'instagram',
      queries: { limit: 8 },
    })
    return data.contents
  } catch (error) {
    console.error('instagram fetch error:', error)
    return []
  }
}
