// About ページ用データ
// Values, Strengths, Experiences, Educations, Hobbies, Skills, Interests を管理

type Value = {
  title: string;
  description: string;
};

type Strength = {
  title: string;
  description: string;
};

type Experience = {
  title: string;
  period?: string;
  role: string;
  description: string;
  techStack?: string[];
};

type Education = {
  school: string;
  faculty: string;
  description: string;
};

type Hobby = {
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
      "HAX株式会社で長期インターン生として、企業向けWebシステムや新規サービスの開発・設計を担当。要件定義からUI設計、TypeScript/Next.jsを用いた実装までを一貫して担い、顧客の潜在課題を対話から引き出す機能提案を推進しています。開発では可読性・保守性を重視したコンポーネント設計を徹底し、チーム内での高速なレビューサイクルを通じて品質とスピードを両立。利用者の視点を第一に考えたドキュメント作成や設計により、技術の強みを最大化させながら期待を超える価値提供を実践しています。",
    techStack: ["TypeScript", "React", "Next.js", "Figma"],
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
    title: "音楽鑑賞",
    description:
      "音楽を好み、定期的に好きなアーティストやバンドのライブやフェスに足を運んでいます。生のパフォーマンスから得られる熱量を、日々の活動への活力としています。",
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
