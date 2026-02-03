// スキルデータ（カテゴリ別）
// 後から編集しやすいようにデータを分離

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    name: "Backend",
    skills: ["Python", "FastAPI", "Ruby"],
  },
  {
    name: "Programming Languages",
    skills: ["TypeScript", "Java", "Python", "Ruby", "C", "C#"],
  },
  {
    name: "Game",
    skills: ["Unity", "C#"],
  },
  {
    name: "Design / UI",
    skills: ["Figma"],
  },
  {
    name: "Tooling / DevOps",
    skills: ["Git/GitHub", "ESLint/Prettier", "Biome", "Vercel"],
  },
  {
    name: "AI活用",
    skills: ["ChatGPT", "Cursor", "Antigravity", "Codex", "Claude Code"],
  },
];
