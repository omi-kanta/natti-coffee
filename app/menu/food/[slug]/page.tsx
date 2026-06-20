import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMenuItem, getMenuList } from '@/lib/menu'
import FoodDetailContent from './FoodDetailContent'
import { draftMode } from 'next/headers'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = await getMenuItem(slug).catch(() => null)
  if (!item) return {}

  return {
    title: item.name,
    description: item.description ?? `natti coffee の${item.name}をご紹介します。`,
    openGraph: {
      title: `${item.name} | natti coffee`,
      description: item.description ?? `natti coffee の${item.name}をご紹介します。`,
      url: `https://natticoffee.com/menu/food/${slug}`,
      images: item.image?.url
        ? [{ url: item.image.url, width: 1200, height: 630, alt: item.name }]
        : [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'natti coffee' }],
    },
    alternates: {
      canonical: `/menu/food/${slug}`,
    },
  }
}

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

  const [item, drinkItems, foodItems, lunchItems, dessertItems] = await Promise.all([
    getMenuItem(slug, isEnabled ? draftKey : undefined).catch(() => null),
    getMenuList('drink'),
    getMenuList('food'),
    getMenuList('lunch'),
    getMenuList('dessert'),
  ])
  if (!item) notFound()

  return (
    <FoodDetailContent
      item={item}
      hasLunch={lunchItems.length > 0}
      hasDrink={drinkItems.length > 0}
      hasFood={foodItems.length > 0}
      hasDessert={dessertItems.length > 0}
    />
  )
}