import { client } from './microcms'
import { StoryContent } from '@/types/story'

export const getStoryContent = async () => {
  try {
    const data = await client.get<StoryContent>({
      endpoint: 'story',
    })
    return data
  } catch (error) {
    console.error('story fetch error:', error)
    return null
  }
}
