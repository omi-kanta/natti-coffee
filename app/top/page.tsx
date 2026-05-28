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
import { getHeroContent } from "@/lib/hero";

export default async function Top() {
  const drinkItems = await getMenuList('drink');
  const foodItems = await getMenuList('food');
  const heroContent = await getHeroContent();

  return (
    <LoadingWrapper>
      <main style={{ backgroundColor: '#FAF7F2' }}>
        <AnnouncementBar />
        <Header />
        <HeroSlider catchcopy={heroContent?.catchcopy} />
        <OurPhilosophy />
        <CoffeeMenu items={drinkItems} />
        <FoodMenu items={foodItems} />
        <MenuPdfBanner />
        <Instagram />
        <NatuviewSection />
        <VisitUs />
        <Footer />
      </main>
    </LoadingWrapper>
  );
}