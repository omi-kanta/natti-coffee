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
        }}
        center={{
          image: story?.storyCardImage2?.url,
          title: story?.storyCardTitle2,
          text: story?.storyCardText2,
        }}
        right={{
          image: story?.storyCardImage3?.url,
          title: story?.storyCardTitle3,
          text: story?.storyCardText3,
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
