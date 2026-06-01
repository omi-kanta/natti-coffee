import { notFound } from 'next/navigation'
import { getMenuItem, getMenuList } from '@/lib/menu'
import MenuDetailContent from './FoodDetailContent'
import { draftMode } from 'next/headers'

export async function generateStaticParams() {
  const items = await getMenuList('food')
  return items.map(item => ({ slug: item.id }))
}

export default async function MenuDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ draftKey?: string }>
}) {
  const { slug } = await params
  const { draftKey } = await searchParams
  const { isEnabled } = await draftMode()

  const item = await getMenuItem(slug, isEnabled ? draftKey : undefined).catch(() => null)
  if (!item) notFound()

  return <MenuDetailContent item={item} />
}