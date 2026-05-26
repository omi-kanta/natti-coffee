'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import Cloud from './Cloud';

const cards = [
  {
    title: '自分にやさしく',
    imageSrc: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    imageAlt: 'コーヒーと笑顔',
    body: '甘くて幸せな味がするのに、\n体への負担はそっと控えめ。\n彼らが届けるのは、ちょっと不思議なおやつ。\n自分を大切にする、やさしい一杯。',
  },
  {
    title: 'あなたにやさしく',
    imageSrc: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
    imageAlt: 'おやつとコーヒー',
    body: '姿は、見る人によって少しずつ違います。\n犬にも、ひつじにも、雲にも見える。\nそれは、その人の心にそっと寄り添って、\n形を変えるから。',
  },
  {
    title: '未来にやさしく',
    imageSrc: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    imageAlt: 'コーヒーの香り',
    body: '役目はひとつ。\n"Be Happy（幸せでいてね）" を届けること。\n心も体もやわらかくなる瞬間をつくりたい、\nという想いから、natti Coffee は生まれました。',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function ThreeCards() {
  return (
    <section
      id="three-cards"
      style={{
        backgroundColor: '#F5F0EB',
        paddingTop: 'clamp(48px, 6vw, 80px)',
        paddingBottom: 'clamp(48px, 6vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 雲 */}
      <Cloud width={120} opacity={0.45} style={{ top: '5%', left: '-10px' }} duration={8} />
      <Cloud width={90} opacity={0.4} style={{ bottom: '10%', right: '2%' }} duration={6} />

      <div
        style={{
          maxWidth: '896px',
          margin: '0 auto',
          padding: '0 clamp(24px, 5%, 40px)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* 見出し */}
        <motion.h2
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            color: '#3D3D3D',
            fontSize: 'clamp(20px, 3vw, 32px)',
            lineHeight: 1.8,
            textAlign: 'center',
            marginBottom: '48px',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          natti のちいさな友だちが届ける、
          <br />
          3つのこと。
        </motion.h2>

        {/* カード一覧 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              style={{
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.6)',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  display: 'block',
                }}
              />
              <h3
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  color: '#3D3D3D',
                  fontSize: '20px',
                  marginBottom: '12px',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 300,
                  color: '#3D3D3D',
                  fontSize: '14px',
                  lineHeight: 2,
                  whiteSpace: 'pre-line',
                  margin: 0,
                }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
