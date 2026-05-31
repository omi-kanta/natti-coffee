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

export default async function Top() {
  const drinkItems = await getMenuList('drink');
  const foodItems = await getMenuList('food');
  const settings = await getSettings();
  const story = await getStoryContent();
  const posts = await getInstagramPosts();

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
