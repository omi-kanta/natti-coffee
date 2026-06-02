"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Card({
  image,
  label,
  title,
  body,
  href,
  animateX,
  delay = 0,
}: {
  image: string;
  label: string;
  title: string;
  body: string;
  href: string;
  animateX: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative rounded-3xl overflow-hidden"
      style={{ height: "520px" }}
      initial={{ opacity: 0, x: animateX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(45,74,45,0.85) 0%, transparent 50%)",
        }}
      />
      <div className="absolute bottom-8 left-8 right-8">
        <p
          className="text-[10px] tracking-[0.25em] uppercase mb-2"
          style={{ color: "rgba(255,255,255,0.60)" }}
        >
          {label}
        </p>
        <h3
          className="text-lg font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
          style={{
            color: "#FFFFFF",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {title}
        </h3>
        <p
          className="text-xs mb-5 leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.75)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {body}
        </p>
        <Link href={href}>
          <span
            className="inline-block text-xs tracking-widest px-5 py-2 rounded-full transition duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.60)",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#FFFFFF";
              el.style.color = "#2D4A2D";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#FFFFFF";
            }}
          >
            READ MORE →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function OurPhilosophy({
  storyImage,
  storyTitle,
  storyBody,
  aboutImage,
  aboutTitle,
  aboutBody,
}: {
  storyImage?: string
  storyTitle?: string
  storyBody?: string
  aboutImage?: string
  aboutTitle?: string
  aboutBody?: string
}) {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "#FAF7F2" }}>
      <p
        className="text-xs tracking-[0.3em] uppercase text-center mb-4"
        style={{ color: "#E8453C", fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        OUR PHILOSOPHY
      </p>

      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-16"
        style={{
          color: "#2D4A2D",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        私たちについて
      </h2>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          image={storyImage || "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"}
          label="OUR STORY"
          title={storyTitle || "ふわっとした、小さな友だち。"}
          body={storyBody || "nattiのロゴにいる、あの生き物。Be Happyを届けること。"}
          href="/story"
          animateX={-30}
          delay={0}
        />
        <Card
          image={aboutImage || "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80"}
          label="ABOUT US"
          title={aboutTitle || "食の歓びと、カラダへの優しさを。"}
          body={aboutBody || "体にやさしく、心に豊かな時間をお届けします。"}
          href="/about"
          animateX={30}
          delay={0.15}
        />
      </div>
    </section>
  );
}