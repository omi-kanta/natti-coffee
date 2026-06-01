"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="about"
      className="pt-20 md:pt-24 pb-10 md:pb-12 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

          {/* Left: Text (50%) */}
          <div className="w-full md:w-1/2">
            <p
              className="mb-4 text-xs"
              style={{
                letterSpacing: "0.2em",
                color: "rgba(26,26,26,0.4)",
                textTransform: "uppercase",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              OUR STORY
            </p>
            <h2
              className="mb-6 text-3xl md:text-4xl"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.4,
              }}
            >
              ふわっとした、小さな友だち。
            </h2>
            <p
              className="mb-8 text-sm leading-loose"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 300,
                color: "#1A1A1A",
                opacity: 0.7,
              }}
            >
              natti のロゴにいる、あの生き物。
              <br />
              役目はひとつ。Be Happy を届けること。
            </p>
            <Link
              href="/top/story"
              style={{
                display: "inline-block",
                padding: "13px 32px",
                borderRadius: "9999px",
                backgroundColor: "#1A1A1A",
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "system-ui, -apple-system, sans-serif",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              READ MORE →
            </Link>
          </div>

          {/* Right: Image (50%) */}
          <div
            className="w-full md:w-1/2 overflow-hidden"
            style={{ aspectRatio: "4 / 3", borderRadius: "8px", position: "relative" }}
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
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80"
                alt="natti coffee story"
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
