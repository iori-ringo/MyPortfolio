// Works データ（作品情報）
// 後から編集しやすいようにデータを分離

export type Work = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demoUrl?: string;
  role: string;
  highlight: string;
  // 詳細ページ用
  problem?: string;
  solution?: string;
  outcome?: string;
  features?: string[];
  decisions?: {
    title: string;
    description: string;
  }[];
  challenges?: {
    title: string;
    description: string;
  }[];
  improvements?: string[];
};

export const works: Work[] = [
  {
    slug: "memo-app",
    title: "Memo App",
    description: "macOS用デスクトップメモアプリ",
    techStack: ["Next.js", "Electron", "TypeScript", "Tailwind CSS", "Zustand"],
    github: "https://github.com/iori-ringo/memo_app",
    role: "個人開発",
    highlight: "Electron × Next.js の統合開発",
    problem: "Appleの標準のメモアプリでは物足りないさがあった",
    solution:
      "Next.js と Electron を組み合わせ、モダンな UI と快適な操作性を実現",
    outcome: "日常的に使える実用的なメモアプリを完成",
    features: [
      "ドキュメント形式ではない新しい「メモ体験」",
      "ノートブック形式での整理",
      "その時の思考を、そのまま",
      "メモを知的財産に",
      "自動保存機能",
    ],
    decisions: [
      {
        title: "状態管理に Zustand を採用",
        description:
          "シンプルな API と TypeScript との親和性を重視し、Redux ではなく Zustand を選択",
      },
      {
        title: "Electron との IPC 通信設計",
        description: "型安全な IPC 通信を実現するため、共通の型定義を設置",
      },
      {
        title: "Feature-Based Architecture",
        description: "機能ごとにフォルダを分割し、保守性と拡張性を向上",
      },
    ],
    challenges: [
      {
        title: "Electron と Next.js の統合",
        description:
          "開発環境とプロダクション環境での動作の違いに苦労。プリロードスクリプトとコンテキストブリッジを適切に設定して解決",
      },
    ],
    improvements: [
      "クラウド同期機能の追加",
      "タグ機能によるメモの分類",
      "エクスポート機能（PDF/Markdown）",
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio Site",
    description: "このポートフォリオサイト",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    github: "https://github.com/iori-ringo/MyPortfolio",
    role: "個人開発",
    highlight: "モダンな UI/UX とインタラクティブなアニメーション",
    problem: "技術力と実務適性を短時間で伝えられるポートフォリオが必要だった",
    solution:
      "Next.js + shadcn/ui で高品質な UI を構築し、Framer Motion でインタラクティブな演出を追加",
    outcome: "30秒で得意領域・代表作・実務経験が理解できるサイトを構築",
    features: [
      "ライト/ダークモード切り替え",
      "タイプライターアニメーション",
      "インタラクティブな背景エフェクト",
      "レスポンシブデザイン",
    ],
    decisions: [
      {
        title: "Next.js 15 App Router 採用",
        description:
          "Server Components を活用し、パフォーマンスと SEO を最適化",
      },
      {
        title: "shadcn/ui によるコンポーネント設計",
        description:
          "カスタマイズ性の高いコンポーネントを採用し、一貫したデザインシステムを構築",
      },
      {
        title: "データ駆動型コンテンツ管理",
        description:
          "作品やスキル情報をデータファイルに分離し、編集の容易さを確保",
      },
    ],
    challenges: [
      {
        title: "",
        description: "",
      },
    ],
    improvements: [
      "ブログ機能の追加",
      "アナリティクス導入",
      "多言語対応（英語版）",
    ],
  },
];

// Highlights（強み3点）- モックデータ
export const highlights = [
  {
    title: "UI/UXへのこだわり",
    description:
      "迷いなく使える直感的な UI と、納得感のある体験設計を追求しています。",
    icon: "Palette",
  },
  {
    title: "AI活用による開発効率化",
    description:
      "ChatGPT, Cursor, Codex を活用し、設計・実装・レビューを高速化しています。",
    icon: "Sparkles",
  },
  {
    title: "型安全な設計",
    description:
      "TypeScript と Zod を活用し、堅牢で保守性の高いコードを書いています。",
    icon: "Shield",
  },
];

// Experience（経験）- モックデータ
export const experiences = [
  {
    title: "フロントエンド開発",
    period: "2025-05 ~ 現在",
    description:
      "React/Next.js を使用した Web アプリケーション開発。TypeScript による型安全な実装を心がけています。",
  },
  {
    title: "個人開発",
    period: "2025-11 ~ 現在",
    description:
      "Electron + Next.js でデスクトップアプリを開発。AI ツールを活用した効率的な開発フローを確立。",
  },
];
