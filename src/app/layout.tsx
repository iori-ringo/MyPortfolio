import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { BalloonBackground } from "@/components/ui/balloon-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "清宮 伊織 | Frontend Engineer",
  description:
    "フロントエンド開発と体験設計を武器に、迷いなく使えるUIと納得感ある体験を積み重ね、世界中のユーザーに届くサービスで人と人をつなぎます。",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "清宮 伊織 | Frontend Engineer",
    description:
      "フロントエンド開発と体験設計を武器に、迷いなく使えるUIと納得感ある体験を積み重ね、世界中のユーザーに届くサービスで人と人をつなぎます。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}
      >
        <BalloonBackground />
        <Navigation />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
