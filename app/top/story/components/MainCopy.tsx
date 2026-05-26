'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import Cloud from './Cloud';

const lines = [
  { text: 'natti のロゴにいる、あのふわっとした生き物。', gap: false },
  { text: '名前はまだないけれど、', gap: false },
  { text: 'みんなからはそっと', gap: false },
  { text: '"natti のちいさな友だち" と呼ばれています。', gap: true },
  { text: '彼らの住まいは、森の奥にある ひだまりの丘。', gap: false },
  { text: '太陽と、やさしい空気と、', gap: false },
  { text: 'いい香りのコーヒーが大好きです。', gap: true },
  { text: '心と体が「かろやか」であること。', gap: false },
  { text: 'それが、彼らの一番大切にしていること。', gap: false },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

export default function MainCopy() {
  return (
    <section
      id="main-copy"
      style={{
        backgroundColor: '#F5F0EB',
        paddingTop: 'clamp(64px, 8vw, 96px)',
        paddingBottom: 'clamp(64px, 8vw, 96px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 雲（右側） */}
      <Cloud width={140} opacity={0.5} style={{ top: '10%', right: '-10px' }} duration={7} />
      <Cloud width={100} opacity={0.45} style={{ bottom: '20%', right: '5%' }} duration={9} />

      <div
        className="flex flex-col md:flex-row items-start gap-12"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 0 0 clamp(24px, 5vw, 80px)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* 左テキスト */}
        <motion.div
          className="flex-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              color: '#3D3D3D',
              fontSize: 'clamp(20px, 3vw, 32px)',
              lineHeight: 1.8,
              marginBottom: '32px',
            }}
          >
            natti のちいさな友だちから広がる、
            <br />
            やさしさ。
          </h2>

          <div>
            {lines.map((line, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 300,
                  color: '#3D3D3D',
                  fontSize: '16px',
                  lineHeight: 2.2,
                  margin: 0,
                  marginBottom: line.gap ? '24px' : '0',
                }}
              >
                {line.text}
              </p>
            ))}
          </div>
        </motion.div>

        {/* 右写真 */}
        <motion.div
          className="w-full md:w-auto"
          style={{ flex: '0 0 auto' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.15 }}
        >
          {/* SP用 */}
          <div
            className="md:hidden"
            style={{
              position: 'relative',
              width: '100%',
              height: '280px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80"
              alt="森・ひだまり"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* PC用 */}
          <div
            className="hidden md:block"
            style={{
              position: 'relative',
              width: '460px',
              height: '440px',
              overflow: 'hidden',
              borderRadius: '12px',
              flexShrink: 0,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80"
              alt="森・ひだまり"
              fill
              sizes="460px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
