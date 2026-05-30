import { client } from './microcms'
import { StoryContent } from '@/types/story'

export const getStoryContent = async () => {
  try {
    const data = await client.getList<StoryContent>({
      endpoint: 'story',
    })
    return data.contents[0] ?? null
  } catch (error) {
    console.error('story fetch error:', error)
    return null
  }
}