'use client';

import Image from 'next/image';
import Link from 'next/link';

function TreeSVG() {
  return (
    <svg viewBox="0 0 60 100" style={{ width: 48, display: 'block', opacity: 0.4 }}>
      <rect x="26" y="60" width="8" height="35" rx="4" fill="#2D4A2D" />
      <circle cx="30" cy="45" r="28" fill="#2D4A2D" />
      <circle cx="15" cy="55" r="18" fill="#3D6B3D" />
      <circle cx="45" cy="55" r="18" fill="#3D6B3D" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#F5F0EB',
        borderTop: '1px solid rgba(61,61,61,0.1)',
        padding: '32px clamp(24px, 5%, 40px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* イラスト＋ロゴ */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '24px',
          marginBottom: '24px',
        }}
      >
        <TreeSVG />
        <Image
          src="/natti_logo.png"
          alt="natti Coffee"
          width={32}
          height={32}
          style={{ objectFit: 'contain', marginBottom: '4px' }}
        />
        <TreeSVG />
      </div>

      {/* テキスト */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
            fontSize: '12px',
            color: 'rgba(61,61,61,0.3)',
            margin: 0,
          }}
        >
          © 2025 natti Coffee
        </p>

        <Link
          href="/top"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
            fontSize: '12px',
            color: 'rgba(61,61,61,0.4)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(61,61,61,0.7)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(61,61,61,0.4)')}
        >
          ← TOPに戻る
        </Link>
      </div>
    </footer>
  );
}
