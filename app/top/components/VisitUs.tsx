const info = [
  {
    label: "ADDRESS",
    content: "〒358-0002 埼玉県入間市東町1-2-12 平成ハウス9号",
  },
  {
    label: "TEL",
    content: "04-2003-2861",
  },
  {
    label: "HOURS",
    content: "水〜日　10:00〜16:00（LO 15:30）\n月・火　定休",
  },
  {
    label: "PAYMENT",
    content:
      "American Express / Diners Club / JCB /\nMastercard / VISA / au PAY / d払い /\nPayPay / 楽天ペイ / 交通系ICカード",
  },
  {
    label: "SEATS",
    content: "20席（テラス席あり）",
  },
  {
    label: "PARKING",
    content: "ジョンソンタウン内に駐車サービス券あり",
  },
  {
    label: "DOG FRIENDLY",
    content: "テラス席はワンちゃん連れでご利用いただけます。\n詳しくは店舗までお問い合わせください。",
  },
];

export default function VisitUs() {
  return (
    <section
      id="visit"
      className="py-20 md:py-24 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center mb-14"
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 700,
            color: "#1A1A1A",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "'Fredoka One', cursive",
          }}
        >
          INFORMATION
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-7">
            {info.map((row) => (
              <div key={row.label}>
                <p
                  className="mb-1"
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    color: "#2D4A2D",
                    textTransform: "uppercase",
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >
                  {row.label}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 2,
                    color: "#1A1A1A",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 300,
                    whiteSpace: "pre-line",
                  }}
                >
                  {row.content}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Google Map */}
          <div
            className="w-full md:w-1/2 overflow-hidden"
            style={{ height: "420px", borderRadius: "8px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=%E5%9F%BC%E7%8E%89%E7%9C%8C%E5%85%A5%E9%96%93%E5%B8%82%E6%9D%B1%E7%94%BA1-2-12+%E5%B9%B3%E6%88%90%E3%83%8F%E3%82%A6%E3%82%B99%E5%8F%B7&output=embed&hl=ja"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="natti coffee location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
