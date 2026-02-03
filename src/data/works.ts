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
      "ノートの好きな箇所に各メモを作成",
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
      "ブラウザ版、モバイル版の実装",
      "タグ機能によるメモの分類",
      "エクスポート機能（PDF/Markdown）",
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio Site",
    description: "このポートフォリオサイト",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
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
      {
        title: "動的メタデータ生成",
        description:
          "generateMetadata 関数により各作品ページで適切な SEO メタデータを自動生成し、検索エンジン最適化とSNSシェア対応を実現",
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

export const highlights = [
  {
    title: "長期インターンでの実務経験",
    description:
      "HAX株式会社での長期インターンにて、要件定義から実装まで一貫して携わり、商用レベルの開発を経験しています。",
    icon: "Briefcase",
  },
  {
    title: "作り手としてのプロ意識",
    description:
      "ものづくりのプロとして、お客様・利用者のことをお客様以上に、深く理解し、期待を超えるものを作り上げることに責任を持っています。",
    icon: "UserCheck",
  },
  {
    title: "責務分離を徹底したコンポーネント設計",
    description:
      "UI、ロジック、データ取得の責務を明確に分離し、デザインシステムに基づいた再利用性の高いコンポーネント開発を実践しています。",
    icon: "Boxes",
  },
  {
    title: "UI/UXへのこだわり",
    description:
      "迷いなく使える直感的な UI と、納得感のある体験設計を追求しています。",
    icon: "Palette",
  },
  {
    title: "AI活用による開発効率化",
    description:
      "Claude Code, Cursor, Codex などを活用し、設計・実装・レビューを高速化しています。",
    icon: "Sparkles",
  },
  {
    title: "能動的な技術キャッチアップ",
    description:
      "最新の技術動向を常に追い、目的（Why）に合わせた最適な技術選定と学習を継続しています。",
    icon: "Zap",
  },
];

// Experience（経験）- モックデータ
export const experiences = [
  {
    title: "長期インターンシップ (HAX株式会社)",
    period: "2025-05 ~ 現在",
    description:
      "フロントエンドエンジニアをメインとして、社内システムの開発や新規Webサービスの要件定義、画面設計、クライアント商談まで幅広く担当しています。",
  },
  {
    title: "個人開発",
    period: "2025-11 ~ 現在",
    description:
      "macOS用デスクトップメモアプリや、このポートフォリオサイトなどの制作しました。モダンな技術スタックを用いた開発を通じ、質の高いアウトプットを意識しています。",
  },
];
