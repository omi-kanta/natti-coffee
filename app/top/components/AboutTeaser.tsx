"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutTeaser() {
  return (
    <motion.section
      id="about-us"
      className="relative w-full"
      style={{ height: "480px" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 背景画像 */}
      <Image
        src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80"
        alt="natti coffee about"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* オーバーレイ */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(45,74,45,0.50)" }}
      />

      {/* コンテンツ（左下寄せ） */}
      <div
        className="absolute bottom-12 left-0 w-full px-8 md:px-16"
        style={{ maxWidth: "100%" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            ABOUT US
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 max-w-lg"
            style={{
              color: "#FFFFFF",
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.5,
            }}
          >
            「食の歓び」と「カラダへの優しさ」を、ひとつの空間に。
          </h2>
          <p
            className="text-sm mb-8 max-w-md"
            style={{
              color: "rgba(255,255,255,0.80)",
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
              lineHeight: 1.9,
            }}
          >
            分子栄養学・グルテンフリー・自家焙煎コーヒー——
            <br />
            体にやさしく、心に豊かな時間をお届けします。
          </p>
          <Link href="/top/about">
            <button
              className="text-sm px-6 py-3 rounded-full tracking-widest transition duration-300"
              style={{
                border: "1px solid #FFFFFF",
                color: "#FFFFFF",
                backgroundColor: "transparent",
                cursor: "pointer",
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.color = "#2D4A2D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#FFFFFF";
              }}
            >
              READ MORE →
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
