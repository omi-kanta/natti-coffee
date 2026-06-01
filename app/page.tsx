import LoadingWrapper from "./components/LoadingWrapper";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import CoffeeMenu from "./components/CoffeeMenu";
import FoodMenu from "./components/FoodMenu";
import MenuPdfBanner from "./components/MenuPdfBanner";
import OurPhilosophy from "./components/OurPhilosophy";
import Instagram from "./components/Instagram";
import NatuviewSection from "./components/NatuviewSection";
import VisitUs from "./components/VisitUs";
import Footer from "./components/Footer";
import { getMenuList } from "@/lib/menu";
import { getSettings } from "@/lib/settings";
import { getStoryContent } from "@/lib/story";
import { getInstagramPosts } from "@/lib/instagram";
import { getAboutContent } from "@/lib/about";

export default async function Top({ searchParams }: { searchParams: Promise<{ preview?: string }> }) {
  const settings = await getSettings();
  const params = await searchParams;
  const isPreview = params.preview === 'natti2026';

  if (!settings?.isPublished && !isPreview) {
    return (
      <div style={{
        backgroundColor: '#FAF7F2',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
      }}>
        <img src="/natti_logo.png" alt="natti coffee" style={{ width: '180px', height: 'auto' }} />
        <p style={{ fontSize: '1.25rem', fontWeight: 600, color: '#3a2e1e', letterSpacing: '0.1em' }}>Coming Soon</p>
        <p style={{ fontSize: '0.95rem', color: '#7a6a56', letterSpacing: '0.05em' }}>もうしばらくお待ちください</p>
      </div>
    );
  }

  const drinkItems = await getMenuList('drink');
  const foodItems = await getMenuList('food');
  const story = await getStoryContent();
  const posts = await getInstagramPosts();
  const about = await getAboutContent();

  return (
    <LoadingWrapper>
      <main style={{ backgroundColor: '#FAF7F2' }}>
        <AnnouncementBar
          businessHours={settings?.infoBusinessHours}
          closed={settings?.infoClosed}
        />
        <Header />
        <HeroSlider catchcopy={settings?.catchCopy} />
        <OurPhilosophy
          storyImage={story?.topImage?.url}
          storyTitle={story?.topTitle}
          storyBody={story?.topSubTitle}
          aboutImage={about?.topImage?.url}
          aboutTitle={about?.topTitle}
          aboutBody={about?.topSubTitle}
        />
        <CoffeeMenu items={drinkItems} />
        <FoodMenu items={foodItems} />
        <MenuPdfBanner menuPdfUrl={settings?.menuPdfUrl} />
        <Instagram posts={posts} />
        <NatuviewSection />
        <VisitUs
          address={settings?.infoAddress}
          tel={settings?.infoTel}
          businessHours={settings?.infoBusinessHours}
          closed={settings?.infoClosed}
          payment={settings?.infoPayment}
          seats={settings?.infoSeats}
          parking={settings?.infoParking}
          dog={settings?.infoDog}
          mapUrl={settings?.infoMap}
        />
        <Footer />
      </main>
    </LoadingWrapper>
  );
}