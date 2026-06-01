'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Cloud from './Cloud';

type HeroProps = {
  image?: string
}

export default function Hero({ image }: HeroProps) {
  return (
    <section
      style={{
        backgroundColor: '#F5F0EB',
        minHeight: '90vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <Cloud width={180} opacity={0.65} style={{ bottom: '15%', left: '-20px' }} duration={6} />
      <Cloud width={120} opacity={0.5} style={{ top: '10%', left: '5%' }} duration={9} />
      <Cloud width={100} opacity={0.45} style={{ bottom: '30%', left: '8%' }} duration={7} />
      <Cloud width={80} opacity={0.4} style={{ top: '25%', left: '2%' }} duration={5} />

      <div className="flex flex-col md:flex-row" style={{ width: '100%', minHeight: '90vh' }}>
        <motion.div
          className="flex flex-col justify-center"
          style={{
            flex: '0 0 50%',
            padding: 'clamp(40px, 10%, 80px) clamp(24px, 8%, 64px)',
            position: 'relative',
            zIndex: 10,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
              fontSize: '14px',
              letterSpacing: '0.1em',
              color: '#3D3D3D',
              opacity: 0.4,
              marginBottom: '16px',
            }}
          >
            Concept
          </p>
          <h1
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              color: '#3D3D3D',
              fontSize: 'clamp(32px, 4vw, 64px)',
              lineHeight: 1.4,
            }}
          >
            私たちの想い
          </h1>
        </motion.div>

        <div style={{ flex: '0 0 50%', position: 'relative', minHeight: '300px' }}>
          {image && (
            <Image
              src={image}
              alt="story"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}