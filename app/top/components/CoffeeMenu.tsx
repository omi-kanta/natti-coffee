"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MenuGrid from "./MenuGrid";

const items = [
  {
    slug: "coffee",
    name: "Coffee",
    desc: "自家焙煎・レバーマシン抽出",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
  },
  {
    slug: "cafe-latte",
    name: "Café Latte",
    desc: "まろやかミルクと深煎りのハーモニー",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
  },
  {
    slug: "espresso",
    name: "Espresso",
    desc: "凝縮されたコーヒーの旨味",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
  },
  {
    slug: "matcha-latte",
    name: "Matcha Latte",
    desc: "国産抹茶×低糖質ミルク",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80",
  },
  {
    slug: "cold-brew",
    name: "Cold Brew",
    desc: "12時間水出し・すっきり低酸味",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
  },
  {
    slug: "chai-latte",
    name: "Chai Latte",
    desc: "スパイス香るミルクティー",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80",
  },
  {
    slug: "lemonade",
    name: "Lemonade",
    desc: "国産レモン×はちみつ",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
  },
  {
    slug: "hojicha-latte",
    name: "Hojicha Latte",
    desc: "深煎り焙じ茶×低糖質ミルク",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
  },
];

function MenuCard({ item }: { item: (typeof items)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/top/menu/drink/${item.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden aspect-square md:aspect-[11/12]"
        style={{ borderRadius: "8px" }}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          style={{
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.4s ease",
            borderRadius: "8px",
          }}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="mt-3 px-1">
        <p
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#1A1A1A",
            letterSpacing: "0.03em",
            fontFamily: "'Josefin Sans', sans-serif",
          }}
        >
          {item.name}
        </p>
        <p
          className="mt-1"
          style={{
            fontSize: "11px",
            color: "#1A1A1A",
            opacity: 0.55,
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
          }}
        >
          {item.desc}
        </p>
      </div>
    </Link>
  );
}

export default function CoffeeMenu() {
  return (
    <section
      id="drink-menu"
      className="py-16 md:py-20 px-6 md:px-10"
      style={{ scrollMarginTop: '120px' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 700,
              color: "#1A1A1A",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontFamily: "'Fredoka One', cursive",
            }}
          >
            DRINK MENU
          </h2>
          <p
            className="mt-2"
            style={{
              fontSize: "13px",
              color: "#1A1A1A",
              opacity: 0.55,
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
            }}
          >
            おすすめドリンクを見る
          </p>
        </motion.div>

        <MenuGrid items={items} renderItem={(item) => <MenuCard item={item} />} />
      </div>
    </section>
  );
}
