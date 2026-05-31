import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "natti coffee | ジョンソンタウンにある本格コーヒー",
  description: "埼玉県入間市ジョンソンタウンにある本格カフェ。自家焙煎コーヒー、低糖質・グルテンフリーのスイーツ、発芽発酵玄米おはぎをご提供。愛犬と一緒にお越しいただけるテラス席あり。",
  alternates: {
    canonical: "https://natticoffee.com/top",
  },
};

export default function TopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
