// 各ページのメタデータ
// タイトルと説明文を一元管理

export type PageMetadata = {
  title: string;
  description: string;
};

export const pageMetadata: Record<string, PageMetadata> = {
  about: {
    title: "About | 清宮 伊織",
    description:
      "スキル、興味領域、価値観について。React/Next.js を中心としたフロントエンド開発が専門です。",
  },
  contact: {
    title: "Contact | 清宮 伊織",
    description:
      "お気軽にご連絡ください。GitHub, Email, LinkedIn, X からコンタクトできます。",
  },
  resume: {
    title: "Resume | 清宮 伊織",
    description: "経歴、スキル、プロジェクトの概要。",
  },
  works: {
    title: "Works | 清宮 伊織",
    description:
      "開発した作品一覧。設計判断、技術スタック、改善点を詳細に記載。",
  },
};
