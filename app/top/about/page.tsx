'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const leadParagraphs = [
  [
    'これまで、低糖質・グルテンフリーのスイーツを通じて、',
    '多くの皆様に',
    '『美味しく安全な食の歓び』をお届けしてきた',
    'NATUVIEW（ナチュビュー）。',
    '砂糖を使わない厳選素材へのこだわりと',
    '『内側からのインナーケア』という約束は、',
    '今も私たちの心の真ん中に深く息づいています。',
  ],
  [
    '忙しい毎日の中で、',
    '心も体もやわらかくなる瞬間をつくりたい。',
    'NATUVIEWからnatti coffeeへと',
    '想いを繋いだ私たちは、',
    '最高の"Be Happy（幸せでいてね）"を',
    '届け続けます。',
  ],
];

const blocks = [
  {
    title: '変わらないこだわりと、新しい挑戦。',
    body: '実店舗の移転をきっかけにひとつの新しい扉を開き、もっと温かくてやわらかな『リアルな空間』として形にしました。それが、新コンセプトカフェ『natti coffee（ナッティコーヒー）』の誕生です。心にそっと寄り添ってくれたのが、ロゴに描かれた"ちいさな友だち"。見る人によって犬にも、ひつじにも、雲にも見える不思議な生き物と一緒に、新しい一歩を踏み出しました。',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
    imageAlt: 'natti coffee',
    reverse: false,
  },
  {
    title: '愛する存在と、心地よく過ごせる空間づくり。',
    body: 'お店のドアを開けた瞬間、五感を心地よく刺激する特別な空気感。重厚なロースターの前で職人が丁寧に仕上げる自家焙煎コーヒー、分子栄養学の智慧から生まれた発芽発酵玄米おはぎ、そしてNATUVIEWで愛されてきた低糖質・グルテンフリーのスイーツ。食べたあとの体も、心と同じように『ふわっ』と軽くあってほしいから。大切な愛犬と一緒に笑顔になれるランチスペースもご用意しています。',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    imageAlt: 'natti coffee space',
    reverse: true,
  },
];

const closingLines = [
  '忙しい毎日の中で、',
  '心も体もやわらかくなる瞬間をつくりたい。',
  'NATUVIEWからnatti coffeeへと想いを繋いだ私たちは、',
  'あの子とともに、今日もあなたと、',
  'あなたの愛する存在に、',
  '最高の"Be Happy（幸せでいてね）"を届け続けます。',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function About1Page() {
  return (
    <main style={{ backgroundColor: '#FAF7F2' }}>
      <Header />

      {/* ① ヒーロー */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: '#FAF7F2' }}
      >
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
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
            About natti coffee
          </p>
          <h1
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
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
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80"
          alt="natti coffee"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* ③ リード文 */}
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
          {leadParagraphs.map((para, i) => (
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
                      fontFamily: 'system-ui, -apple-system, sans-serif',
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
              {i < leadParagraphs.length - 1 && (
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

      {/* ④ 交互レイアウト 2ブロック */}
      {blocks.map((block, i) => (
        <section
          key={i}
          style={{
            backgroundColor: '#FAF7F2',
            paddingTop: 'clamp(48px, 6vw, 80px)',
            paddingBottom: 'clamp(48px, 6vw, 80px)',
            paddingLeft: 'clamp(24px, 5%, 40px)',
            paddingRight: 'clamp(24px, 5%, 40px)',
          }}
        >
          <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <div
              className={`flex flex-col gap-10 items-center ${
                block.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* テキスト */}
              <motion.div
                className="flex-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <h2
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    color: '#3D3D3D',
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    lineHeight: 1.7,
                    marginBottom: '16px',
                  }}
                >
                  {block.title}
                </h2>
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
                  {block.body}
                </p>
              </motion.div>

              {/* 画像 */}
              <motion.div
                className="w-full md:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 } },
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '288px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ⑤ クロージング */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: '#2D4A2D' }}
      >
        <motion.div
          className="max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          {closingLines.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                color: '#FFFFFF',
                fontSize: 'clamp(15px, 2.2vw, 20px)',
                lineHeight: 2.2,
                margin: 0,
              }}
            >
              {line}
            </p>
          ))}
          <div className="mt-10 flex justify-center">
            <Image
              src="/natti_logo.png"
              alt="natti"
              width={48}
              height={48}
              style={{ objectFit: 'contain', filter: 'brightness(200%)' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ⑥ NATUVIEWへの導線 */}
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

      {/* ⑦ フッター */}
      <Footer />
    </main>
  );
}
