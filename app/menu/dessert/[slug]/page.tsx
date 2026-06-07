import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMenuItem, getMenuList } from '@/lib/menu'
import DessertDetailContent from './DessertDetailContent'
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
      url: `https://natticoffee.com/menu/dessert/${slug}`,
      images: item.image?.url
        ? [{ url: item.image.url, width: 1200, height: 630, alt: item.name }]
        : [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'natti coffee' }],
    },
    alternates: {
      canonical: `/menu/dessert/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const items = await getMenuList('dessert')
  return items.map(item => ({ slug: item.id }))
}

export default async function DessertDetailPage({
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

  return <DessertDetailContent item={item} />
}
