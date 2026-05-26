import { notFound } from 'next/navigation'
import { getMenuItem, getMenuList } from '@/lib/menu'
import DrinkDetailContent from './DrinkDetailContent'

export async function generateStaticParams() {
  const items = await getMenuList('drink')
  return items.map(item => ({ slug: item.id }))
}

export default async function DrinkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = await getMenuItem(slug).catch(() => null)
  if (!item) notFound()

  return <DrinkDetailContent item={item} />
}