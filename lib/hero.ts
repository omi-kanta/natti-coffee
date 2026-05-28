import { client } from './microcms'
import { HeroContent } from '@/types/hero'

export const getHeroContent = async () => {
  try {
    const data = await client.get<HeroContent>({
      endpoint: 'hero',
    })
    return data
  } catch (error) {
    console.error('hero fetch error:', error)
    return null
  }
}