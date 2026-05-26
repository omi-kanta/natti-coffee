import Header from '../components/Header';
import Hero from './components/Hero';
import MainCopy from './components/MainCopy';
import ThreeCards from './components/ThreeCards';
import Closing from './components/Closing';
import StoryFooter from './components/Footer';
import Footer from '../components/Footer';

export default function StoryPage() {
  return (
    <main style={{ backgroundColor: '#F5F0EB' }}>
      {/* ① ヘッダー */}
      <Header />

      {/* ② ヒーロー */}
      <Hero />

      {/* ③ メインコピー */}
      <MainCopy />

      {/* ④ 3つのカード */}
      <ThreeCards />

      {/* ⑤ クロージング */}
      <Closing />

      {/* ⑥ ストーリーフッター */}
      <StoryFooter />

      {/* ⑦ メインフッター */}
      <Footer />
    </main>
  );
}
