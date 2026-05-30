import Header from '../components/Header';
import Hero from './components/Hero';
import MainCopy from './components/MainCopy';
import ThreeCards from './components/ThreeCards';
import Closing from './components/Closing';
import Footer from '../components/Footer';
import { getStoryContent } from '@/lib/story';

export default async function StoryPage() {
  const story = await getStoryContent();

  return (
    <main style={{ backgroundColor: '#F5F0EB' }}>
      <Header />
      <Hero
        image={story?.storyHeroImage?.url}
      />
      <MainCopy
        image={story?.storyImage?.url}
        heading={story?.storyHeading}
        description={story?.storyDescription}
      />
      <ThreeCards
        left={{
          image: story?.storyLeftImage?.url,
          title: story?.storyLeftTitle,
          text: story?.storyLeftText,
        }}
        center={{
          image: story?.storyCenterImage?.url,
          title: story?.storyCenterTitle,
          text: story?.storyCenterText,
        }}
        right={{
          image: story?.storyRightImage?.url,
          title: story?.storyRightTitle,
          text: story?.storyRightText,
        }}
      />
      <Closing
        endingText={story?.storyEndingText}
        endingSubText={story?.storyEndingSubText}
      />
      <Footer />
    </main>
  );
}