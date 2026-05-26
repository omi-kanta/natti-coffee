'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Cloud from './Cloud';

export default function Closing() {
  return (
    <section
      style={{
        backgroundColor: '#F5F0EB',
        paddingTop: 'clamp(64px, 8vw, 96px)',
        paddingBottom: 'clamp(64px, 8vw, 96px)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* 雲（左右） */}
      <Cloud width={130} opacity={0.5} style={{ top: '20%', left: '-15px' }} duration={7} />
      <Cloud width={110} opacity={0.45} style={{ bottom: '25%', right: '-10px' }} duration={9} />

      <div
        style={{
          maxWidth: '672px',
          margin: '0 auto',
          padding: '0 clamp(24px, 5%, 40px)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* natti くん（バウンス） */}
        <motion.div
          style={{ marginBottom: '32px', display: 'inline-block' }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/natti_logo.png"
            alt="natti"
            width={80}
            height={80}
            style={{ objectFit: 'contain' }}
          />
        </motion.div>

        {/* メインテキスト */}
        <motion.p
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            color: '#3D3D3D',
            fontSize: 'clamp(16px, 2.5vw, 24px)',
            lineHeight: 2,
            whiteSpace: 'pre-line',
            marginBottom: '24px',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {
            'あなたが手にしたその一杯、ひとくちにも、\nこの "ちいさな友だち" がそっと寄り添っています。'
          }
        </motion.p>

        <motion.p
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
            color: '#3D3D3D',
            opacity: 0.6,
            fontSize: '14px',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          今日も、あなたとあなたの体に、Be Happy を。
        </motion.p>
      </div>
    </section>
  );
}
