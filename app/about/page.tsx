import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutPageContent from './AboutPageContent';
import { getAboutContent } from '@/lib/about';

export default async function About1Page() {
  const about = await getAboutContent();

  return (
    <main style={{ backgroundColor: '#FAF7F2' }}>
      <Header />
      <AboutPageContent
        heroHeading={about?.aboutHeading}
        heroSubHeading={about?.aboutSubHeading}
        aboutImage={about?.aboutImage?.url}
        text1={about?.aboutText1}
        text2={about?.aboutText2}
        block0Title={about?.aboutLeftTitle}
        block0Body={about?.aboutLeftText}
        block0Image={about?.aboutRightImage?.url}
        block1Title={about?.aboutRightTitle}
        block1Body={about?.aboutRightText}
        block1Image={about?.aboutLeftImage?.url}
        closingText={about?.aboutEndingText}
      />
      <Footer />
    </main>
  );
}
