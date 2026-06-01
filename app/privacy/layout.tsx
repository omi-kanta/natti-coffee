import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "natti coffeeのプライバシーポリシーについてご説明します。",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://natticoffee.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
