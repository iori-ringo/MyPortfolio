// About ページ用データ
// Values, Strengths, Experiences, Educations, Hobbies, Skills, Interests を管理

export type Value = {
  title: string;
  description: string;
};

export type Strength = {
  title: string;
  description: string;
  icon?: string;
};

export type Experience = {
  title: string;
  period?: string;
  role: string;
  description: string;
  techStack?: string[];
};

export type Education = {
  school: string;
  faculty: string;
  description: string;
  grade?: string;
};

export type Hobby = {
  title: string;
  description: string;
};

export const strengths: Strength[] = [
  {
    title: "課題解決力と粘り強さ",
    description:
      "目の前の課題、目標に熱量をもって取り組み、たとえ成果がすぐに出なくても、常に思考を怠らず、前向きに実行し続ける継続力を持っています。",
  },
  {
    title: "主体的な技術キャッチアップ",
    description:
      "未知の技術や新しい分野への知的好奇心が強く、楽しみながら学習を継続できます。インターンシップや研究においても、必要な技術を自ら選定し、短期間で習得・実践してきました。",
  },
  {
    title: "対話を通じたチームワーク",
    description:
      "「仕事は一人では完結しない」という意識を持ち、他者との対話を大切にしています。認識の齟齬をなくし、チーム全体のパフォーマンスを最大化するための信頼関係構築に力を入れています。",
  },
];

export const values: Value[] = [
  {
    title: "届けるプロとしての責任",
    description:
      "「ただ作る」だけでなく、「誰に・どのような価値を届けるか」を常に意識しています。設計意図を言語化し、ユーザー体験を第一に考えた実装を行うことに責任を持ちます。",
  },
  {
    title: "チームで価値を最大化",
    description:
      "個人の技術力向上はもちろんですが、チームメンバーとの連携、ナレッジの共有、雰囲気作りを通じて、チーム全体でより大きな成果を出すことを重視しています。",
  },
  {
    title: "現状に満足しない向上心",
    description:
      "技術も環境も常に変化し続けます。現状のスキルや成果に満足せず、より良い方法はないか、改善できる点はないかを常に模索し、アップデートし続ける姿勢を大切にしています。",
  },
];

export const experiences: Experience[] = [
  {
    title: "HAX株式会社 長期インターンシップ",
    role: "フロントエンド開発 / 画面設計 / 要件定義",
    description:
      "3名体制の開発チームにて、企業のWebシステム開発および新規Webサービスの開発を担当。要件定義から画面設計、Next.jsを用いた実装までを一貫して経験しました。「なぜこの構成なのか」を顧客視点で言語化し、期待を超える提案を行うことで信頼を獲得。初期は開発に時間がかかりましたが、課題分解と計画立案を徹底することで、最終的に1日3機能の修正を完遂できるまでに成長しました。",
    techStack: ["TypeScript", "React", "Next.js", "Recoil", "Figma"],
  },
  {
    title: "個人開発",
    role: "フルスタックエンジニア / デザイナー",
    description:
      "macOS用デスクトップメモアプリや、当ポートフォリオサイトを開発。Next.js, Electron, TypeScriptなどのモダンな技術を選定し、独自の思考整理ツールとしての「操作の心地よさ」や、自身の技術表現としての「Web体験の質」にこだわって実装しました。",
    techStack: ["Next.js", "Electron", "TypeScript", "Tailwind CSS", "Zustand"],
  },
];

export const educations: Education[] = [
  {
    school: "神奈川大学",
    faculty: "情報学部 計算機科学科",
    description:
      "プログラミング、アルゴリズム、ネットワーク、AIなど、IT領域の基礎を網羅的に学習。特定の分野に偏らず、ハードウェアからソフトウェアまで体系的に理解することで、変化の激しい技術にも対応できる土台を築いています。",
  },
  {
    school: "研究テーマ",
    faculty: "SNS上の炎上の感情構造と可視化",
    description:
      "BERTなどの自然言語処理モデルを用いて、SNS上の投稿から「怒り」「悲しみ」などの感情を分析。炎上の拡散メカニズムを可視化し、健全な情報環境の実現に向けた研究を進める予定です。",
  },
];

export const hobbies: Hobby[] = [
  {
    title: "「周りがやらないこと」への挑戦",
    description:
      "友人と共に、富士山登頂やJR山手線徒歩一周など、体力と気力を要する挑戦をすることに楽しみを見出しています。困難な目標でも、仲間と楽しみながら乗り越える過程が好きです。",
  },
  {
    title: "バドミントン",
    description:
      "中学・高校と部活動に打ち込み、高校では県ベスト8に進出。現在も趣味として続けており、粘り強さと体力の基盤となっています。",
  },
];

export const interests: string[] = [
  "フロントエンドエンジニアリング",
  "UI/UX デザイン",
  "セキュリティ",
  "ネットワーク",
  "パフォーマンス最適化",
  "データ可視化",
  "AIエージェント",
  "アクセシビリティ",
  "デザインシステム",
];
