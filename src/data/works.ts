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
    highlight: "Apple標準メモの物足りなさを解消する、独自の思考整理ツール",
    problem: "Appleの標準のメモアプリでは物足りないさがあった",
    solution:
      "Next.js と Electron を組み合わせ、モダンな UI と快適な操作性を実現",
    outcome: "日常的に使える実用的なメモアプリを完成",
    features: [
      "ドキュメント形式ではない新しい「メモ体験」",
      "書き手に意識させない、リアルタイム・オートセーブ機能",
      "Zustand を活用した、複雑なメモ配置情報の高パフォーマンスな状態管理",
      "徹底したアクセシビリティ設計（キーボード操作の最適化など）",
    ],
    decisions: [
      {
        title: "機能の追加や変更に強い、柔軟な設計構造",
        description:
          "アプリの機能を独立した単位で管理する仕組みを採用。デスクトップ版とWeb版の共通化も考慮し、将来的な機能拡張がスムーズに行える土台を整えました。",
      },
      {
        title: "直感的な操作を妨げない、滑らかな動作の追求",
        description:
          "自由なキャンバス操作やショートカット入力の反応速度にこだわり、内部処理を最適化。ユーザーが思考を止めることなく、心地よく使い続けられる操作感を追求しました。",
      },
      {
        title: "ミスのない開発と高い信頼性を支える共通基盤",
        description:
          "アプリ全体で扱う情報の定義を一元管理し、開発時の不具合を未然に防ぐ仕組みを構築。異なる実行環境間でも一貫性を保ち、安定した品質を維持できる設計にしました。",
      },
    ],
    challenges: [
      {
        title: "複雑化する機能を支える、論理的な状態管理と責務分離",
        description:
          "機能追加に伴い状態管理が複雑化し、バグの温床となるリスクがありました。機能ごとにロジックを Custom Hooks に完全に分離し、View（描画）を薄く保つアーキテクチャを徹底することで、見通しの良さと高い保守性を両立させました。",
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
