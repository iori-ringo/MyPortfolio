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
    highlight: "技術力とデザインセンスが融合した、私を表現するWeb体験",
    problem:
      "単なる作品リストでは伝わりにくい「技術へのこだわり」や「熱量」を、実際の体験として届けることが課題でした。",
    solution:
      "高速な表示とモダンな設計を融合。技術的な詳細やプロセスをコンテンツ化し、即戦力としての信頼性を実証しました。",
    outcome: "60秒で得意領域・代表作・実務経験が理解できるサイトを構築",
    features: [
      "閲覧者の興味を惹きつける、滑らかなスクロールとマイクロインタラクション",
      "ストレスを感じさせない、Server Components を活かした高速なページ遷移",
      "管理のしやすさと拡張性を考慮した、データ駆動型のコンテンツ設計",
    ],
    decisions: [
      {
        title: "体験の質を高める、サーバサイド主導の最新アーキテクチャ",
        description:
          "必要なデータやロジックをサーバー側に集約し、クライアントの負荷を極限まで低減。Web本来の軽快さと、アプリのようなリッチな操作感を両立させました。",
      },
      {
        title: "変更に強く、一貫性を保ち続けるコンポーネント設計",
        description:
          "見た目の美しさだけでなく、保守性と再利用性を重視した設計システムを構築。将来的なページの追加やデザイン変更にも柔軟に対応できる堅牢な基盤を作りました。",
      },
    ],
    challenges: [
      {
        title: "SSR/CSR の最適な境界設計",
        description:
          "use client の適用範囲を最小限に絞り、アニメーションや対話要素を末端のクライアントコンポーネントに閉じ込める設計を徹底。パフォーマンスを犠牲にしない、リッチな表現を実現しました。",
      },
    ],
    improvements: ["ブログ機能の追加", "多言語対応（英語版）"],
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
