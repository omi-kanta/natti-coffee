import { notFound } from 'next/navigation'
import { drinkItems } from '../../menuData'
import DrinkDetailContent from './DrinkDetailContent'

export function generateStaticParams() {
  return drinkItems.map(item => ({ slug: item.slug }))
}

export default async function DrinkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = drinkItems.find(d => d.slug === slug)
  if (!item) notFound()

  return <DrinkDetailContent item={item} />
}
