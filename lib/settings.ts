import { client } from './microcms'
import { Settings } from '@/types/settings'

export const getSettings = async (draftKey?: string) => {
  try {
    const data = await client.get<Settings>({
      endpoint: 'settings',
      queries: draftKey ? { draftKey } : undefined,
      customRequestInit: {
        next: { revalidate: 60 },
      },
    })
    return data
  } catch (error) {
    console.error('settings fetch error:', error)
    return null
  }
}