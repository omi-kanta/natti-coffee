import { client } from './microcms'
import { AboutContent } from '@/types/about'

export const getAboutContent = async () => {
  try {
    const data = await client.get<AboutContent>({
      endpoint: 'about us',
    })
    return data
  } catch (error) {
    console.error('about fetch error:', error)
    return null
  }
}
