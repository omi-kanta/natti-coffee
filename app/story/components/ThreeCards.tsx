'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import Cloud from './Cloud';

type CardData = {
  image?: string
  title?: string
  text?: string
}

type ThreeCardsProps = {
  left?: CardData
  center?: CardData
  right?: CardData
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function ThreeCards({ left, center, right }: ThreeCardsProps) {
  const cards = [
    { title: left?.title, imageSrc: left?.image, body: left?.text },
    { title: center?.title, imageSrc: center?.image, body: center?.text },
    { title: right?.title, imageSrc: right?.image, body: right?.text },
  ];

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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              style={{
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.6)',
                padding: '24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              {card.imageSrc && (
                <Image
                  src={card.imageSrc}
                  alt={card.title || ''}
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
              )}
              {card.title && (
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
              )}
              {card.body && (
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
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}