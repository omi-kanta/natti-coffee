const badges = [
  { ja: "低糖質", en: "Low Carb" },
  { ja: "グルテンフリー", en: "Gluten Free" },
  { ja: "本格コーヒー", en: "Specialty Coffee" },
];

export default function Cares() {
  return (
    <section
      className="py-20 md:py-24 px-6 md:px-10"

    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="mb-6"
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 700,
            color: "#1A1A1A",
            letterSpacing: "0.06em",
            fontFamily: "'Josefin Sans', sans-serif",
          }}
        >
          natti Coffee のこだわり
        </h2>
        <p
          className="mb-10"
          style={{
            fontSize: "14px",
            lineHeight: 2,
            color: "#1A1A1A",
            opacity: 0.7,
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
          }}
        >
          低糖質・グルテンフリーでも、本当に美味しいものを。
          <br />
          私たちは食材・製法・コーヒーのすべてにこだわり、
          <br />
          体に優しく、心を満たす一杯とフードをご提供しています。
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {badges.map((badge) => (
            <div
              key={badge.en}
              style={{
                padding: "10px 20px",
                borderRadius: "9999px",
                backgroundColor: "#2D4A2D",
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              {badge.ja}&nbsp;&nbsp;{badge.en}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
