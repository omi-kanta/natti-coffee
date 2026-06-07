'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import NatuviewSection from '../components/NatuviewSection';

type Props = {
  heroHeading?: string
  heroSubHeading?: string
  aboutImage?: string
  text1?: string
  text2?: string
  block0Title?: string
  block0Body?: string
  block0Image?: string
  block1Title?: string
  block1Body?: string
  block1Image?: string
  closingText?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function AboutPageContent({
  heroHeading,
  heroSubHeading,
  aboutImage,
  text1,
  text2,
  block0Title,
  block0Body,
  block0Image,
  block1Title,
  block1Body,
  block1Image,
  closingText,
}: Props) {
  const leadParagraphs = [
    text1 ? text1.split('\n') : [],
    text2 ? text2.split('\n') : [],
  ].filter((para) => para.length > 0);

  const blocks = [
    { title: block0Title, body: block0Body, image: block0Image, imageAlt: 'natti coffee', reverse: false },
    { title: block1Title, body: block1Body, image: block1Image, imageAlt: 'natti coffee space', reverse: true },
  ];

  const closingLines = closingText ? closingText.split('\n') : [];

  return (
    <>
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
              whiteSpace: 'pre-line',
            }}
          >
            {heroHeading}
          </h1>
          {heroSubHeading && (
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
              {heroSubHeading}
            </p>
          )}
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
      {aboutImage && (
        <div style={{ position: 'relative', width: '100%' }}>
          <Image
            src={aboutImage}
            alt="natti coffee"
            width={1920}
            height={1080}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </div>
      )}

      {/* ③ リード文 */}
      {leadParagraphs.length > 0 && (
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
      )}

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
                {block.title && (
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
                )}
                {block.body && (
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
                )}
              </motion.div>

              {/* 画像 */}
              {block.image && (
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
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ⑤ クロージング */}
      {closingLines.length > 0 && (
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
      )}

      {/* ⑥ NATUVIEWへの導線 */}
      <NatuviewSection/>
    </>
  );
}
