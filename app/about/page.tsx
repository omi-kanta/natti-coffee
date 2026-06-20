import type { Metadata } from 'next'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutPageContent from './AboutPageContent';
import { getAboutContent } from '@/lib/about';
import { getMenuList } from '@/lib/menu';
import { draftMode } from 'next/headers';

export const metadata: Metadata = {
  title: 'About Us',
  description: '食の歓びと、カラダへの優しさを。natti coffee のこだわりと想いをご紹介します。',
  openGraph: {
    title: 'About Us | natti coffee',
    description: '食の歓びと、カラダへの優しさを。natti coffee のこだわりと想いをご紹介します。',
    url: 'https://natticoffee.com/about',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'natti coffee about',
      },
    ],
  },
  alternates: {
    canonical: '/about',
  },
}

export default async function About1Page({
  searchParams,
}: {
  searchParams: Promise<{ draftKey?: string }>
}) {
  const { draftKey } = await searchParams;
  const { isEnabled } = await draftMode();
  const [about, drinkItems, foodItems, lunchItems, dessertItems] = await Promise.all([
    getAboutContent(isEnabled ? draftKey : undefined),
    getMenuList('drink'),
    getMenuList('food'),
    getMenuList('lunch'),
    getMenuList('dessert'),
  ]);

  return (
    <main style={{ backgroundColor: '#FAF7F2' }}>
      <Header
          hasLunch={lunchItems.length > 0}
          hasDrink={drinkItems.length > 0}
          hasFood={foodItems.length > 0}
          hasDessert={dessertItems.length > 0}
        />
      <AboutPageContent
        heroHeading={about?.aboutHeading}
        heroSubHeading={about?.aboutSubHeading}
        aboutImage={about?.aboutImage?.url}
        text1={about?.aboutText1}
        aboutImage2={about?.aboutImage2?.url}
        block0Title={about?.aboutLeftTitle}
        block0Body={about?.aboutLeftText}
        block0Image={about?.aboutRightImage?.url}
        block1Title={about?.aboutRightTitle}
        block1Body={about?.aboutRightText}
        block1Image={about?.aboutLeftImage?.url}
        closingText={about?.aboutEndingText}
      />
      <Footer
          hasLunch={lunchItems.length > 0}
          hasDrink={drinkItems.length > 0}
          hasFood={foodItems.length > 0}
          hasDessert={dessertItems.length > 0}
        />
    </main>
  );
}
