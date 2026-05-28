import { notFound } from 'next/navigation'
import { getMenuItem, getMenuList } from '@/lib/menu'
import MenuDetailContent from './FoodDetailContent'

export async function generateStaticParams() {
  const items = await getMenuList('food')
  return items.map(item => ({ slug: item.id }))
}

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = await getMenuItem(slug).catch(() => null)
  if (!item) notFound()

  return <MenuDetailContent item={item} />
}