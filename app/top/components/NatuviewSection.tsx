"use client";
import { useState } from "react";
import Image from "next/image";

export default function NatuviewSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      className="py-20 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Left: Text (50%) */}
          <div className="w-full md:w-1/2">
            <p
              className="mb-4"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                color: "#2D4A2D",
                textTransform: "uppercase",
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              ONLINE SHOP
            </p>
            <h2
              className="mb-7"
              style={{
                fontSize: "clamp(1.6rem, 2.8vw, 2rem)",
                fontWeight: 700,
                color: "#1A1A1A",
                fontFamily: "'Josefin Sans', sans-serif",
                lineHeight: 1.35,
              }}
            >
              おうちでも、natti の味を。
            </h2>
            <div
              className="mb-8 flex flex-col gap-5"
              style={{
                fontSize: "14px",
                lineHeight: 2,
                color: "#1A1A1A",
                opacity: 0.7,
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 300,
              }}
            >
              <p>
                natti Coffee をきっかけに、低糖質・グルテンフリーの
                食生活に興味を持っていただけた方へ。
              </p>
              <p>
                私たちが運営するオンラインショップ NATUVIEW では、
                カフェと同じこだわりで作られたケトフード（低糖質スイーツ）を
                お届けしています。グラスフェッドバターや天然素材にこだわった、
                体に優しくて本当に美味しいスイーツたちです。
              </p>
              <p>
                カフェでの一杯をきっかけに、毎日の食卓にも
                低糖質を取り入れてみませんか？
              </p>
            </div>
            <a
              href="https://www.natuview.jp/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 28px",
                borderRadius: "9999px",
                backgroundColor: "#2D4A2D",
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "'Josefin Sans', sans-serif",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              NATUVIEW をのぞいてみる →
            </a>
          </div>

          {/* Right: Image (50%) */}
          <div
            className="w-full md:w-1/2 overflow-hidden"
            style={{ aspectRatio: "4 / 3", borderRadius: "8px" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className="relative w-full h-full"
              style={{
                transform: hovered ? "scale(1.02)" : "scale(1)",
                transition: "transform 0.5s ease",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1464979681340-bdd28a61699e?w=800&q=80"
                alt="NATUVIEW online shop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
