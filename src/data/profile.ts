// プロフィール情報
// 後から編集しやすいようにデータを分離

export const profile = {
  name: {
    ja: "清宮 伊織",
    en: "Iori Kiyomiya",
  },
  role: "Frontend Engineer",
  tagline:
    "フロントエンド開発と体験設計を武器に、迷いなく使えるUIと納得感ある体験を積み重ね、世界中のユーザーに届くサービスで人と人をつなぎます。",
  // Typewriter で表示するロール一覧
  roles: ["Frontend Engineer", "UI/UX Designer", "Problem Solver"],
  // 技術タグ
  techTags: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Zod",
    "React Hook Form",
    "Figma",
  ],
  // ソーシャルリンク
  social: {
    github: "https://github.com/iori-ringo",
    email: "iori1001k@gmail.com",
    linkedin: "https://www.linkedin.com/in/いおり-清宮-7a13a0357",
    x: "https://x.com/ringofrontend",
  },
} as const;
