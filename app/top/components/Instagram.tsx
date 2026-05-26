"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80",
  "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
  "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=75",
];

const colsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

const colsMapMd: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

const getGridConfig = (count: number) => {
  if (count <= 4) return { topCount: count, bottomCount: 0 };
  if (count === 5) return { topCount: 3, bottomCount: 2 };
  if (count === 6) return { topCount: 3, bottomCount: 3 };
  if (count === 7) return { topCount: 4, bottomCount: 3 };
  if (count === 8) return { topCount: 4, bottomCount: 4 };
  return {
    topCount: Math.ceil(count / 2),
    bottomCount: Math.floor(count / 2),
  };
};

function ImageCard({ src, index }: { src: string; index: number }) {
  return (
    <a
      href="https://www.instagram.com/natti_coffee/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden group"
      style={{ aspectRatio: "1/1" }}
    >
      <Image
        src={src}
        alt={`Instagram photo ${index + 1}`}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        style={{ objectFit: "cover" }}
        className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: "rgba(45,74,45,0.3)" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
        </svg>
      </div>
    </a>
  );
}

export default function Instagram() {
  const { topCount, bottomCount } = getGridConfig(images.length);
  const topImages = images.slice(0, topCount);
  const bottomImages = images.slice(topCount);

  const topCols = Math.min(topCount, 4);
  const bottomCols = Math.min(bottomCount, 4);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 400,
            color: "#1A1A1A",
            fontSize: "clamp(1.5rem, 3vw, 1.25rem)",
          }}
        >
          Follow our story
        </motion.h2>

        <p
          className="text-xs tracking-widest mt-2 mb-10"
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            color: "#2D4A2D",
            opacity: 0.6,
          }}
        >
          @natti_coffee
        </p>

        {/* 上段 */}
        <div className={`grid grid-cols-2 ${colsMapMd[topCols]} gap-4`}>
          {topImages.map((src, i) => (
            <ImageCard key={i} src={src} index={i} />
          ))}
        </div>

        {/* 下段 */}
        {bottomImages.length > 0 && (
          <div className={`grid grid-cols-2 ${colsMapMd[bottomCols]} gap-4 mt-4`}>
            {bottomImages.map((src, i) => (
              <ImageCard key={i + topCount} src={src} index={i + topCount} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
