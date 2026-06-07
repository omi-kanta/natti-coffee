'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type ConceptSectionProps = {
  text?: string
  image?: string
}

export default function ConceptSection({ text, image }: ConceptSectionProps) {
  if (!text && !image) return null

  const lines = text ? text.split('\n').filter(line => line.trim() !== '') : []

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

      {/* 画像 SP: max-w内・4/3 */}
      {image && (
        <motion.div
          className="md:hidden px-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="w-full overflow-hidden"
            style={{ borderRadius: '8px' }}
          >
            <Image
              src={image.split('?')[0]}
              alt="concept"
              width={1920}
              height={1080}
              className="w-full h-auto"
              style={{ display: "block" }}
              sizes="100vw"
              unoptimized
            />
          </div>
        </motion.div>
      )}

      {/* 画像 PC: フルワイド・16/7 */}
      {image && (
        <motion.div
          className="hidden md:block px-10"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="w-full overflow-hidden"
            style={{ borderRadius: '8px' }}
          >
            <Image
              src={image.split('?')[0]}
              alt="concept"
              width={1920}
              height={1080}
              className="w-full h-auto"
              style={{ display: "block" }}
              sizes="100vw"
              unoptimized
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
