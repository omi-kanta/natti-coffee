import LoadingWrapper from "./components/LoadingWrapper";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import CoffeeMenu from "./components/CoffeeMenu";
// import MissionSection from "./components/MissionSection";
import FoodMenu from "./components/FoodMenu";
import MenuPdfBanner from "./components/MenuPdfBanner";
import OurPhilosophy from "./components/OurPhilosophy";
import Instagram from "./components/Instagram";
import NatuviewSection from "./components/NatuviewSection";
import VisitUs from "./components/VisitUs";
import Footer from "./components/Footer";

export default function Top() {
  return (
    <LoadingWrapper>
      <main style={{ backgroundColor: '#FAF7F2' }}>
        <AnnouncementBar />
        <Header />
        <HeroSlider />
        <OurPhilosophy />
        <CoffeeMenu />
        {/* <MissionSection /> */}
        <FoodMenu />
        <MenuPdfBanner />
        <Instagram />
        <NatuviewSection />
        <VisitUs />
        <Footer />
      </main>
    </LoadingWrapper>
  );
}
