'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';



const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

type MenuPdfBannerProps = {
  menuPdfUrl?: string
}

export default function MenuPdfBanner({ menuPdfUrl }: MenuPdfBannerProps) {
  return (
    <section style={{ backgroundColor: '#FAF7F2', padding: '0 0 64px' }}>
      <div
        style={{
          maxWidth: '896px',
          margin: '0 auto',
          padding: '0 clamp(24px, 5%, 40px)',
          textAlign: 'center',
        }}
      >
        {/* 区切り線 */}
        <div
          style={{
            borderTop: '1px solid rgba(45,74,45,0.12)',
            marginBottom: '64px',
          }}
        />

        {/* テキスト */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: '#E8453C',
              marginBottom: '12px',
              textTransform: 'uppercase',
            }}
          >
            FULL MENU
          </p>
          <h2
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 700,
              color: '#2D4A2D',
              marginBottom: '32px',
            }}
          >
            全メニューはこちら
          </h2>
        </motion.div>

        {/* ボタン */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 } },
          }}
        >
          <a
            href={menuPdfUrl || "/menu/natti_menu.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#2D4A2D',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px 40px',
              borderRadius: '9999px',
              fontSize: '14px',
              letterSpacing: '0.05em',
              fontFamily: "'Noto Sans JP', sans-serif",
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <FileText size={16} />
            全メニューを見る
          </a>
        </motion.div>
      </div>
    </section>
  );
}
