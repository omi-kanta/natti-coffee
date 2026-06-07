import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: '#FAF7F2',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      <img
        src="/natti_logo.png"
        alt="natti coffee"
        style={{ width: '80px', height: 'auto', opacity: 0.8 }}
      />
      <p
        style={{
          fontSize: '72px',
          fontWeight: 700,
          color: '#2D4A2D',
          fontFamily: "'Fredoka One', cursive",
          lineHeight: 1,
        }}
      >
        404
      </p>
      <p
        style={{
          fontSize: '16px',
          color: '#1A1A1A',
          opacity: 0.6,
          fontFamily: "'Noto Sans JP', sans-serif",
          fontWeight: 300,
        }}
      >
        ページが見つかりませんでした
      </p>
      <Link
        href="/"
        style={{
          marginTop: '8px',
          display: 'inline-block',
          padding: '12px 32px',
          borderRadius: '9999px',
          backgroundColor: '#2D4A2D',
          color: '#FFFFFF',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontFamily: "'Josefin Sans', sans-serif",
          textDecoration: 'none',
        }}
      >
        TOP へ戻る
      </Link>
    </div>
  )
}
