import type { Metadata } from 'next'
import Header from '../components/Header';
import Hero from './components/Hero';
import MainCopy from './components/MainCopy';
import ThreeCards from './components/ThreeCards';
import Closing from './components/Closing';
import Footer from '../components/Footer';
import { getStoryContent } from '@/lib/story';
import { getMenuList } from '@/lib/menu';
import { draftMode } from 'next/headers';

export const metadata: Metadata = {
  title: 'Story',
  description: 'natti coffee の想い。発酵玄米や野菜、体にやさしい食を通じて、Be Happy をお届けします。',
  openGraph: {
    title: 'Story | natti coffee',
    description: 'natti coffee の想い。発酵玄米や野菜、体にやさしい食を通じて、Be Happy をお届けします。',
    url: 'https://natticoffee.com/story',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'natti coffee story',
      },
    ],
  },
  alternates: {
    canonical: '/story',
  },
}

export default async function StoryPage({
  searchParams,
}: {
  searchParams: Promise<{ draftKey?: string }>
}) {
  const { draftKey } = await searchParams;
  const { isEnabled } = await draftMode();
  const [story, drinkItems, foodItems, lunchItems, dessertItems] = await Promise.all([
    getStoryContent(isEnabled ? draftKey : undefined),
    getMenuList('drink'),
    getMenuList('food'),
    getMenuList('lunch'),
    getMenuList('dessert'),
  ]);

  return (
    <main style={{ backgroundColor: '#F5F0EB' }}>
      <Header
          hasLunch={lunchItems.length > 0}
          hasDrink={drinkItems.length > 0}
          hasFood={foodItems.length > 0}
          hasDessert={dessertItems.length > 0}
        />
      <Hero
        image={story?.topImage?.url}
      />
      <MainCopy
        image={story?.storyImage?.url}
        heading={story?.storyHeading}
        description={story?.storyDescription}
      />
      <ThreeCards
        left={{
          image: story?.storyCardImage1?.url,
          title: story?.storyCardTitle1,
          text: story?.storyCardText1,
          detailedImage: story?.storyCardDetailed1,
          buttonLabel: story?.storyCardButton1,
        }}
        center={{
          image: story?.storyCardImage2?.url,
          title: story?.storyCardTitle2,
          text: story?.storyCardText2,
          detailedImage: story?.storyCardDetailed2,
          buttonLabel: story?.storyCardButton2,
        }}
        right={{
          image: story?.storyCardImage3?.url,
          title: story?.storyCardTitle3,
          text: story?.storyCardText3,
          detailedImage: story?.storyCardDetailed3,
          buttonLabel: story?.storyCardButton3,
        }}
      />
      <Closing
        endingText={story?.storyEndingText}
        endingSubText={story?.storyEndingSubText}
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
