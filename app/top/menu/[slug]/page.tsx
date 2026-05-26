import { notFound } from 'next/navigation'
import { menuItems } from '../menuData'
import MenuDetailContent from './MenuDetailContent'

export function generateStaticParams() {
  return menuItems.map(item => ({ slug: item.slug }))
}

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = menuItems.find(m => m.slug === slug)
  if (!item) notFound()

  return <MenuDetailContent item={item} />
}
