"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MenuGrid from "./MenuGrid";
import { MenuItem } from "@/types/menu";

function MenuCard({ item }: { item: MenuItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/menu/drink/${item.id}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "8px", width: "100%", height: "240px" }}
      >
        <Image
          src={item.image.url}
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
          {item.subheading}
        </p>
      </div>
    </Link>
  );
}

export default function CoffeeMenu({ items }: { items: MenuItem[] }) {
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

        {/* SP: MenuGrid（既存）/ PC: 4列固定 */}
        <div className="md:hidden">
          <MenuGrid items={items} renderItem={(item) => <MenuCard item={item} />} />
        </div>
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <MenuCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}