import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "natti coffeeのコンセプト、こだわり、そして私たちの想いについてご紹介します。",
  alternates: {
    canonical: "https://natticoffee.com/top/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
