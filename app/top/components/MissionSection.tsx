"use client";
import Link from "next/link";

const cards = [
  {
    eyebrow: "LOW CARB",
    heading: "低糖質を当たり前に",
    body: "美味しくて安全な低糖質は、ホントに滅多に出会えない。それが、私たちが natti Coffee を始めた理由です。",
    buttonLabel: "OUR STORY →",
    buttonHref: "/top/about",
    isPage: true,
  },
  {
    eyebrow: "SPECIALTY COFFEE",
    heading: "本格コーヒーへのこだわり",
    body: "自家焙煎の豆をレバーマシンで丁寧に抽出。低糖質カフェでも、コーヒーの品質は一切妥協しません。",
    buttonLabel: "MENU →",
    buttonHref: "#menu",
    isPage: false,
  },
];

const outlineBtnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "14px 32px",
  borderRadius: "9999px",
  backgroundColor: "transparent",
  color: "#FFFFFF",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  fontFamily: "'Josefin Sans', sans-serif",
  textDecoration: "none",
  border: "2px solid rgba(255,255,255,0.7)",
  cursor: "pointer",
  transition: "background-color 0.2s ease, color 0.2s ease",
};

export default function MissionSection() {
  return (
    <section
      className="py-20 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: "#2D4A2D" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center mb-12"
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.08em",
            fontFamily: "'Josefin Sans', sans-serif",
          }}
        >
          natti Coffee の想い
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.eyebrow}
              className="p-8 md:p-10"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "8px",
              }}
            >
              <p
                className="mb-3"
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "'Josefin Sans', sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {card.eyebrow}
              </p>
              <h3
                className="mb-5"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontFamily: "'Josefin Sans', sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                {card.heading}
              </h3>
              <p
                className="mb-7"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 300,
                }}
              >
                {card.body}
              </p>
              {card.isPage ? (
                <Link
                  href={card.buttonHref}
                  style={outlineBtnStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.color = "#2D4A2D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                >
                  {card.buttonLabel}
                </Link>
              ) : (
                <a
                  href={card.buttonHref}
                  style={outlineBtnStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.color = "#2D4A2D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                >
                  {card.buttonLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
