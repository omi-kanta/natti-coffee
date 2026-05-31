"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramPost } from "@/types/instagram";

type Props = {
  posts: InstagramPost[];
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function InstagramGradientIcon({ size = 24 }: { size?: number }) {
  const id = "ig-grad";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={id} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="30%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill={`url(#${id})`} />
      <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" />
    </svg>
  );
}

export default function Instagram({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="py-24" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-6"
        >
          {/* 左: アイコン＋テキスト */}
          <a
            href="https://www.instagram.com/natti_coffee/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
            style={{ textDecoration: "none" }}
          >
            <InstagramGradientIcon size={36} />
            <div>
              <p
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 500,
                  color: "#1A1A1A",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                  lineHeight: 1.2,
                  transition: "opacity 0.2s",
                }}
                className="group-hover:opacity-70"
              >
                Instagram
              </p>
              <p
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: "12px",
                  color: "#2D4A2D",
                  opacity: 0.6,
                  letterSpacing: "0.06em",
                  marginTop: "2px",
                  transition: "opacity 0.2s",
                }}
                className="group-hover:opacity-40"
              >
                @natti_coffee
              </p>
            </div>
          </a>

          {/* 右: Follow us リンク */}
          <a
            href="https://www.instagram.com/natti_coffee/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.1em",
              color: "#2D4A2D",
              textDecoration: "none",
              opacity: 0.7,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
          >
            Follow us →
          </a>
        </motion.div>
      </div>

      {/* ウォールグリッド（gap-0、フルブリード） */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {posts.map((post, i) => (
          <motion.div key={post.id} variants={itemVariants}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden group"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src={post.image.url}
                alt={`Instagram photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              {/* ホバーオーバーレイ */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(253,212,100,0.45) 0%, rgba(214,36,159,0.45) 50%, rgba(40,90,235,0.45) 100%)",
                }}
              >
                <svg
                  width="32"
                  height="32"
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
