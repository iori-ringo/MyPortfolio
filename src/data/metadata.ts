// 各ページのメタデータ
// タイトルと説明文を一元管理

import type { Metadata } from "next";

export const pageMetadata: Record<string, Metadata> = {
  about: {
    title: "About | 清宮 伊織",
    description:
      "スキル、興味領域、価値観について。React/Next.js を中心としたフロントエンド開発が専門です。",
    alternates: { canonical: "/about" },
    openGraph: {
      title: "清宮 伊織について | スキルと価値観",
      description:
        "スキル、興味領域、価値観について。React/Next.js を中心としたフロントエンド開発が専門です。",
      url: "/about",
    },
  },
  contact: {
    title: "Contact | 清宮 伊織",
    description:
      "お気軽にご連絡ください。GitHub, Email, LinkedIn, X からコンタクトできます。",
    alternates: { canonical: "/contact" },
    openGraph: {
      title: "お問い合わせ | 清宮 伊織",
      description:
        "お気軽にご連絡ください。GitHub, Email, LinkedIn, X からコンタクトできます。",
      url: "/contact",
    },
  },
  resume: {
    title: "Resume | 清宮 伊織",
    description: "経歴、スキル、プロジェクトの概要。",
    alternates: { canonical: "/resume" },
    openGraph: {
      title: "経歴・職務要約 | 清宮 伊織",
      description: "経歴、スキル、プロジェクトの概要。",
      url: "/resume",
    },
  },
  works: {
    title: "Works | 清宮 伊織",
    description:
      "フロントエンドエンジニア清宮伊織の作品一覧。Next.js・TypeScript・Electron などを用いた Web アプリ・デスクトップアプリの設計判断と技術詳細を紹介します。",
    alternates: { canonical: "/works" },
    openGraph: {
      title: "清宮 伊織の作品一覧 | 設計判断と技術詳細",
      description:
        "フロントエンドエンジニア清宮伊織の作品一覧。Next.js・TypeScript・Electron などを用いた Web アプリ・デスクトップアプリの設計判断と技術詳細を紹介します。",
      url: "/works",
    },
    robots: { index: true, follow: true },
  },
};
