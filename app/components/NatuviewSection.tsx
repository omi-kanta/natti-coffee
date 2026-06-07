"use client";
import { useState } from "react";
import Image from "next/image";

type NatuviewProps = {
  title?: string
  text?: string
  image?: string
}

export default function NatuviewSection({ title, text, image }: NatuviewProps) {
  const [hovered, setHovered] = useState(false);

  if (!title && !text && !image) return null;

  return (
    <section className="py-20 px-6 md:px-10">
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
            {title && (
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
                {title}
              </h2>
            )}
            {text && (
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
                <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
              </div>
            )}
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
          {image && (
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
                  src={image}
                  alt="NATUVIEW online shop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
