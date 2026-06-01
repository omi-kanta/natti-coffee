import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "NATUVIEWの想いを受け継ぎ、新コンセプトカフェnatti coffeeが誕生した背景とストーリーをご紹介します。",
  alternates: {
    canonical: "https://natticoffee.com/story",
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
