import type { Metadata } from "next";
import "./globals.css";
import ReservationButton from "./components/ReservationButton";
import { LoadingProvider } from "./components/LoadingContext";
import { MenuProvider } from "./components/MenuContext";

export const metadata: Metadata = {
  title: {
    default: "natti coffee | ジョンソンタウンにある本格コーヒー",
    template: "%s | natti coffee",
  },
  description: "埼玉県入間市ジョンソンタウンにある本格カフェ。自家焙煎コーヒー、低糖質・グルテンフリーのスイーツ、発芽発酵玄米おはぎをご提供。愛犬・わんちゃんと一緒にお越しいただけるテラス席あり。犬連れ歓迎のドッグフレンドリーカフェです。",
  keywords: ["natti coffee", "ナッティコーヒー", "入間市", "ジョンソンタウン", "カフェ", "自家焙煎", "グルテンフリー", "ペット可", "犬連れ", "愛犬", "ドッグカフェ", "テラス席", "ペットOK", "わんちゃん連れ", "犬と行けるカフェ", "入間市ドッグカフェ"],
  authors: [{ name: "natti coffee" }],
  creator: "natti coffee",
  metadataBase: new URL("https://natticoffee.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://natticoffee.com",
    siteName: "natti coffee",
    title: "natti coffee | ジョンソンタウンにある本格コーヒー",
    description: "埼玉県入間市ジョンソンタウンにある本格カフェ。自家焙煎コーヒー、低糖質・グルテンフリーのスイーツ、発芽発酵玄米おはぎをご提供。愛犬・わんちゃんと一緒にお越しいただけるテラス席あり。犬連れ歓迎のドッグフレンドリーカフェです。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "natti coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "natti coffee | ジョンソンタウンにある本格コーヒー",
    description: "埼玉県入間市ジョンソンタウンにある本格カフェ。自家焙煎コーヒー、低糖質・グルテンフリーのスイーツ、発芽発酵玄米おはぎをご提供。愛犬・わんちゃんと一緒にお越しいただけるテラス席あり。犬連れ歓迎のドッグフレンドリーカフェです。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    verification: {
    google: "HDHJd_QcuxPBn-WOv-il6ZY52ZBAK3i3zBPJi0Wboos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Noto+Sans+JP:wght@300;400&family=Noto+Serif+JP:wght@300;400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Yomogi&family=Zen+Kurenaido&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <MenuProvider>
          <LoadingProvider>
            {children}
            <ReservationButton />
          </LoadingProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
