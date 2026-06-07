import { client } from './microcms'
import { AboutContent } from '@/types/about'

export const getAboutContent = async (draftKey?: string) => {
  try {
    const data = await client.get<AboutContent>({
      endpoint: 'aboutus',
      queries: draftKey ? { draftKey } : undefined,
      customRequestInit: {
        next: { revalidate: 60 },
      },
    })
    return data
  } catch (error) {
    console.error('about fetch error:', error)
    return null
  }
}
