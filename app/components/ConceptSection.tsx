'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type ConceptSectionProps = {
  text?: string
  images?: string[]
  concepInfoTitle?: string
  concepInfoText?: string
}

export default function ConceptSection({ text, images, concepInfoTitle, concepInfoText }: ConceptSectionProps) {
  if (!text && (!images || images.length === 0)) return null

  const lines = text ? text.split('\n').filter(line => line.trim() !== '') : []
  const hasMarquee = images && images.length >= 2
  const marqueeImages = hasMarquee ? [...images, ...images] : []
  const showOverlay = Boolean(concepInfoTitle || concepInfoText)

  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      {/* テキストエリア */}
      <div className="px-6 md:px-10 max-w-5xl mx-auto">
        <motion.p
          className="text-xs tracking-[0.3em] uppercase mb-10 md:mb-14"
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 600,
            color: '#2D4A2D',
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          CONCEPT
        </motion.p>

        {lines.length > 0 && (
          <motion.div
            className="flex flex-col gap-5 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {lines.map((line, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontSize: 'clamp(16px, 2.2vw, 22px)',
                  color: '#1A1A1A',
                  lineHeight: 1.8,
                }}
              >
                {line}
              </p>
            ))}
          </motion.div>
        )}
      </div>

      {/* マーキー（2枚以上） */}
      {hasMarquee && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/*
            CSS Grid で横スクロールとオーバーレイを同一セル（1/1）に重ねる。
            overflow: hidden は内側の div のみに適用し、
            パネルはグリッドの align-self: end で下端に固定。
          */}
          <div style={{ display: 'grid' }}>
            {/* 横スクロールのクリップ（グリッドセル 1-1） */}
            <div
              style={{
                gridColumn: '1',
                gridRow: '1',
                overflow: 'hidden',
                width: '100%',
              }}
            >
              <div
                className="marquee-track"
                style={{ display: 'flex', gap: '12px', width: 'max-content' }}
              >
                {marqueeImages.map((url, i) => (
                  <div
                    key={i}
                    className="w-[360px] h-[475px] md:w-[480px] md:h-[580px]"
                    style={{
                      flexShrink: 0,
                      borderRadius: '8px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src={url.split('?')[0]}
                      alt="concept"
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="400px"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* テキストオーバーレイパネル（グリッドセル 1-1 に重ねて下端固定） */}
            {showOverlay && (
              <div
                className="w-[360px] md:w-[480px]"
                style={{
                  gridColumn: '1',
                  gridRow: '1',
                  alignSelf: 'end',
                  justifySelf: 'start',
                  zIndex: 20,
                  backgroundColor: 'rgba(255,255,255,0.82)',
                  padding: 'clamp(20px, 3%, 32px)',
                  pointerEvents: 'none',
                }}
              >
                {concepInfoTitle && (
                  <h3
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontSize: 'clamp(16px, 1.8vw, 22px)',
                      fontWeight: 700,
                      color: '#1A1A1A',
                      lineHeight: 1.5,
                      marginBottom: concepInfoText ? '10px' : 0,
                    }}
                  >
                    {concepInfoTitle}
                  </h3>
                )}
                {concepInfoText && (
                  <p
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 300,
                      fontSize: 'clamp(13px, 1.3vw, 15px)',
                      color: '#3D3D3D',
                      lineHeight: 1.9,
                      whiteSpace: 'pre-line',
                      margin: 0,
                    }}
                  >
                    {concepInfoText}
                  </p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* 静止画（1枚以下） SP */}
      {!hasMarquee && images && images.length === 1 && (
        <motion.div
          className="md:hidden px-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-full overflow-hidden" style={{ borderRadius: '8px' }}>
            <Image
              src={images[0].split('?')[0]}
              alt="concept"
              width={1920}
              height={1080}
              className="w-full h-auto"
              style={{ display: 'block' }}
              sizes="100vw"
              unoptimized
            />
          </div>
        </motion.div>
      )}

      {/* 静止画（1枚以下） PC */}
      {!hasMarquee && images && images.length === 1 && (
        <motion.div
          className="hidden md:block px-10"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-full overflow-hidden" style={{ borderRadius: '8px' }}>
            <Image
              src={images[0].split('?')[0]}
              alt="concept"
              width={1920}
              height={1080}
              className="w-full h-auto"
              style={{ display: 'block' }}
              sizes="100vw"
              unoptimized
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
