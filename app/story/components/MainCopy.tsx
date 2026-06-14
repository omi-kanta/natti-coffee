'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import Cloud from './Cloud';

type MainCopyProps = {
  image?: string
  heading?: string
  description?: string
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

export default function MainCopy({ image, heading, description }: MainCopyProps) {
  const lines = description
    ? description.split('\n').map((text) => ({ text, gap: text === '' }))
    : []

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
        <motion.div
          className="flex-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {heading && (
            <h2
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                color: '#3D3D3D',
                fontSize: 'clamp(20px, 3vw, 32px)',
                lineHeight: 1.8,
                marginBottom: '32px',
                whiteSpace: 'pre-line',
              }}
            >
              {heading}
            </h2>
          )}
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

        <motion.div
          className="w-full md:w-auto"
          style={{ flex: '0 0 auto' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.15 }}
        >
          {image && (
            <>
              <div
                className="md:hidden"
                style={{
                  position: 'relative',
                  width: '100vw',
                  marginLeft: 'calc(-1 * clamp(24px, 5vw, 80px))',
                  height: '280px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={image}
                  alt="story"
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
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
                  src={image}
                  alt="story"
                  fill
                  sizes="460px"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}