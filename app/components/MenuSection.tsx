"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MenuGrid from "./MenuGrid";
import { MenuItem } from "@/types/menu";

type MenuSectionProps = {
  items: MenuItem[];
  sectionId: string;
  basePath: string;
  title: string;
  subtitle: string;
};

function MenuCard({ item, href }: { item: MenuItem; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "8px", width: "100%", aspectRatio: "1/1" }}
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
        <div className="flex items-center gap-2 flex-wrap">
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
          {item.drinkTemperature && item.drinkTemperature.length > 0 && (
            <span className="flex gap-1">
              {item.drinkTemperature.includes('Hot') && (
                <span className="text-xs rounded-full px-2 py-0.5 bg-red-50 text-red-600 border border-red-200">Hot</span>
              )}
              {item.drinkTemperature.includes('Ice') && (
                <span className="text-xs rounded-full px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-200">Ice</span>
              )}
            </span>
          )}
        </div>
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

export default function MenuSection({ items, sectionId, basePath, title, subtitle }: MenuSectionProps) {
  return (
    <section
      id={sectionId}
      className="py-16 md:py-20 px-6 md:px-10"
      style={{ scrollMarginTop: "120px" }}
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
            {title}
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
            {subtitle}
          </p>
        </motion.div>

        {/* SP: MenuGrid / PC: 4列固定 */}
        <div className="md:hidden">
          <MenuGrid items={items} renderItem={(item) => <MenuCard item={item} href={`${basePath}/${item.id}`} />} />
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
              <MenuCard item={item} href={`${basePath}/${item.id}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
