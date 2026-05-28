import { client } from './microcms'
import { Settings } from '@/types/settings'

export const getSettings = async () => {
  try {
    const data = await client.get<Settings>({
      endpoint: 'settings',
    })
    return data
  } catch (error) {
    console.error('settings fetch error:', error)
    return null
  }
}