import { client } from './microcms'
import { StoryContent } from '@/types/story'

export const getStoryContent = async (draftKey?: string) => {
  try {
    const data = await client.get<StoryContent>({
      endpoint: 'story',
      queries: draftKey ? { draftKey } : undefined,
      customRequestInit: {
        next: { revalidate: 60 },
      },
    })
    return data
  } catch (error) {
    console.error('story fetch error:', error)
    return null
  }
}
