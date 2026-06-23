import Image from "next/image";

type Props = {
  image?: { url: string; width: number; height: number };
};

export default function CalendarSection({ image }: Props) {
  if (!image) return null;

  return (
    <section
      className="py-20 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: "#FAF7F2" }}
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
          CALENDAR
        </h2>
        <div className="flex justify-center">
          <div style={{ maxWidth: "800px", width: "100%" }}>
            <Image
              src={image.url}
              alt="カレンダー"
              width={image.width}
              height={image.height}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
