"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MenuGrid from "./MenuGrid";

const items = [
  {
    slug: "galette",
    name: "Galette",
    desc: "そば粉・グルテンフリー",
    image: "https://images.unsplash.com/photo-1577953589629-446f28f0d8c1?w=800&q=80",
  },
  {
    slug: "low-carb-wrap",
    name: "Salad Wrap",
    desc: "低糖質トルティーヤ×彩り野菜",
    image: "https://images.unsplash.com/photo-1655017976653-55a06c602d11?w=800&q=80",
  },
  {
    slug: "salad-bowl",
    name: "Salad Bowl",
    desc: "旬の野菜たっぷり",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    slug: "gluten-free-cake",
    name: "Cake",
    desc: "グルテンフリーの本日のケーキ",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
  },
  {
    slug: "mushroom-egg",
    name: "Mushroom Egg",
    desc: "マッシュルームと卵のフレンチスタイル",
    image: "https://images.unsplash.com/photo-1655017976653-55a06c602d11?w=800&q=80",
  },
  {
    slug: "rice-flour-scone",
    name: "Rice Scone",
    desc: "米粉サクサクスコーン",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
  },
  {
    slug: "avocado-toast",
    name: "Avocado Toast",
    desc: "低糖質パン×濃厚アボカド",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
  },
  {
    slug: "quinoa-bowl",
    name: "Quinoa Bowl",
    desc: "キヌア×スーパーフード盛り",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
  },
];

function FoodCard({ item }: { item: (typeof items)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/top/menu/${item.slug}`}
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

export default function FoodMenu() {
  return (
    <section
      id="food-menu"
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
            FOOD MENU
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
            低糖質・グルテンフリーのフードラインナップ
          </p>
        </motion.div>

        <MenuGrid items={items} renderItem={(item) => <FoodCard item={item} />} />
      </div>
    </section>
  );
}
