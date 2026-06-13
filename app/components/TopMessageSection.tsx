import Image from "next/image";

type Props = {
  topTitle?: string;
  topText?: string;
};

export default function TopMessageSection({ topTitle, topText }: Props) {
  if (!topTitle && !topText) return null;

  return (
    <section
      className="py-20 md:py-24 px-6 text-center"
      style={{ backgroundColor: "#f5f0eb" }}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
        {topTitle && (
          <h2
            className="text-3xl md:text-4xl font-normal whitespace-pre-line leading-relaxed"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              color: "#1A1A1A",
              letterSpacing: "0.08em",
            }}
          >
            {topTitle}
          </h2>
        )}
        {topText && (
          <p
            className="text-sm leading-loose whitespace-pre-line"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              color: "#6b6055",
              letterSpacing: "0.05em",
            }}
          >
            {topText}
          </p>
        )}
        <div className="mt-4">
          <Image
            src="/natti_logo.png"
            alt="natti coffee"
            width={80}
            height={80}
            className="opacity-60"
          />
        </div>
      </div>
    </section>
  );
}
