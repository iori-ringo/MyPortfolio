// About ページ用データ
// Values（価値観）と Interests（興味領域）を管理

export type Value = {
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    title: "可読性を重視",
    description:
      "コードは書く時間より読む時間の方が長い。誰が見ても理解しやすいコードを心がけています。",
  },
  {
    title: "型安全な設計",
    description:
      "TypeScript と Zod を活用し、実行時エラーを未然に防ぐ堅牢な設計を追求しています。",
  },
  {
    title: "ユーザー体験優先",
    description:
      "技術的な美しさよりも、実際に使う人にとって価値のある体験を優先しています。",
  },
];

export const interests: string[] = [
  "UI/UX デザイン",
  "パフォーマンス最適化",
  "データ可視化",
  "AI/機械学習",
  "アクセシビリティ",
  "デザインシステム",
];
