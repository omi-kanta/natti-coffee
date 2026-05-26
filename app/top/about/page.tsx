'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const brandStoryParagraphs = [
  [
    'これまで、低糖質・グルテンフリーのスイーツを通じて、',
    '多くの皆様に',
    '『美味しく安全な食の歓び』をお届けしてきた',
    'NATUVIEW（ナチュビュー）。',
    '私たちが『ケト理論』をベースに培ってきた、',
    '砂糖を使わない厳選素材へのこだわりと',
    '『内側からのインナーケア』という約束は、',
    '今も私たちの心の真ん中に',
    '深く息づいています。',
  ],
  [
    '忙しい毎日の中で、',
    '心も体もやわらかくなる瞬間をつくりたい。',
    'NATUVIEWからnatti coffeeへと',
    '想いを繋いだ私たちは、',
    'あの子とともに、今日もあなたと、',
    'あなたの愛する存在に、',
    '最高の"Be Happy（幸せでいてね）"を',
    '届け続けます。',
  ],
];

const wishes = [
  {
    title: 'NATUVIEWから受け継いだこだわり',
    body: 'ケト理論をベースに培った厳選素材へのこだわりと内側からのインナーケアという約束',
  },
  {
    title: '五感で感じるnatti coffeeの空気感',
    body: '重厚なロースター・職人の手仕事・ボーンブロススープや発芽発酵玄米おはぎが織りなす特別な体験',
  },
  {
    title: 'ちいさな友だちと、Be Happyを。',
    body: '食べたあとも心と同じようにふわっと軽く。愛犬と一緒に笑顔になれるランチスペースで、あなたと愛する存在に寄り添い続けます',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#FAF7F2' }}>
      <Header />

      {/* ① ヒーロー */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: '#FAF7F2' }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
              fontSize: '12px',
              letterSpacing: '0.2em',
              color: 'rgba(61,61,61,0.5)',
              marginBottom: '20px',
            }}
          >
            About natti coffee / 私たちについて
          </p>
          <h1
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              color: '#3D3D3D',
              fontSize: 'clamp(22px, 4vw, 44px)',
              lineHeight: 1.7,
              marginBottom: '16px',
            }}
          >
            NATUVIEWの想いをのせて、
            <br />
            新コンセプトカフェ『natti coffee』へ。
          </h1>
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
              fontSize: '14px',
              color: '#3D3D3D',
              opacity: 0.6,
              marginBottom: '28px',
            }}
          >
            変わらないこだわりと、新しい挑戦。
          </p>
          <Image
            src="/natti_logo.png"
            alt="natti"
            width={48}
            height={48}
            style={{ objectFit: 'contain', margin: '0 auto', display: 'block' }}
          />
        </motion.div>
      </section>

      {/* ② フルワイド画像 */}
      <div style={{ position: 'relative', height: '40vh', width: '100%' }}>
        <Image
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80"
          alt="natti coffee"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* ③ ブランドストーリー */}
      <section
        style={{
          backgroundColor: '#FAF7F2',
          paddingTop: 'clamp(64px, 8vw, 96px)',
          paddingBottom: 'clamp(64px, 8vw, 96px)',
        }}
      >
        <div
          style={{
            maxWidth: '672px',
            margin: '0 auto',
            padding: '0 clamp(24px, 5%, 40px)',
            textAlign: 'center',
          }}
        >
          {brandStoryParagraphs.map((para, i) => (
            <div key={i}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                {para.map((line, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      color: '#3D3D3D',
                      fontSize: 'clamp(15px, 2.2vw, 20px)',
                      lineHeight: 2.2,
                      margin: 0,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
              {i < brandStoryParagraphs.length - 1 && (
                <div
                  style={{
                    margin: '36px 0',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src="/natti_logo.png"
                    alt=""
                    width={24}
                    height={24}
                    style={{ objectFit: 'contain', opacity: 0.35 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ④ 3つの想い */}
      <section
        style={{
          backgroundColor: '#FAF7F2',
          paddingTop: 'clamp(48px, 6vw, 80px)',
          paddingBottom: 'clamp(48px, 6vw, 80px)',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 clamp(24px, 5%, 40px)',
          }}
        >
          <motion.h2
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              color: '#3D3D3D',
              fontSize: 'clamp(20px, 3vw, 28px)',
              marginBottom: '48px',
              textAlign: 'center',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            natti Coffee の3つの想い
          </motion.h2>

          {/* タイムライン */}
          <div style={{ position: 'relative' }}>
            {/* 縦線 */}
            <div
              style={{
                position: 'absolute',
                left: '5px',
                top: '12px',
                bottom: '12px',
                width: '2px',
                backgroundColor: 'rgba(45,74,45,0.3)',
              }}
            />

            {wishes.map((wish, i) => (
              <motion.div
                key={i}
                style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: i < wishes.length - 1 ? '40px' : 0,
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.12 },
                  },
                }}
              >
                {/* ドット */}
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#2D4A2D',
                    flexShrink: 0,
                    marginTop: '6px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
                {/* コンテンツ */}
                <div>
                  <h3
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      color: '#3D3D3D',
                      fontSize: '20px',
                      marginBottom: '8px',
                    }}
                  >
                    {wish.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 300,
                      color: '#3D3D3D',
                      fontSize: '14px',
                      lineHeight: 2,
                      opacity: 0.75,
                      margin: 0,
                    }}
                  >
                    {wish.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ NATUVIEWへの導線 */}
      <section
        className="py-20 px-6 md:px-10"
        style={{ backgroundColor: '#FAF7F2' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

            {/* 左: 画像 */}
            <div
              className="w-full md:w-1/2 overflow-hidden"
              style={{ aspectRatio: '4 / 3', borderRadius: '8px', position: 'relative' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1464979681340-bdd28a61699e?w=800&q=80"
                alt="NATUVIEW online shop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* 右: テキスト */}
            <motion.div
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: '#2D4A2D',
                  textTransform: 'uppercase',
                  fontFamily: "'Josefin Sans', sans-serif",
                  marginBottom: '16px',
                }}
              >
                ONLINE SHOP
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  fontFamily: "'Josefin Sans', sans-serif",
                  lineHeight: 1.4,
                  marginBottom: '20px',
                }}
              >
                NATUVIEWでは、同じこだわりをご自宅でも。
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 2,
                  color: '#1A1A1A',
                  opacity: 0.7,
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 300,
                  marginBottom: '28px',
                }}
              >
                カフェと同じケト理論・厳選素材で作られた
                <br />
                低糖質・グルテンフリーのスイーツを
                <br />
                オンラインショップでお届けしています。
              </p>
              <a
                href="https://www.natuview.jp/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#2D4A2D',
                  fontSize: '14px',
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 400,
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                NATUVIEWをのぞいてみる →
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ⑥ フッター */}
      <Footer />
    </main>
  );
}
