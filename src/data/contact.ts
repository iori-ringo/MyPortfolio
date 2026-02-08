// Contact ページ用データ
// 各連絡先リンクの情報を管理

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// アイコンマッピング
export const contactIcons = {
  Github: FaGithub,
  Mail,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
} as const;

export type ContactLinkType = "github" | "email" | "linkedin" | "x";

type ContactLink = {
  name: string;
  type: ContactLinkType;
  description: string;
  iconName: "Github" | "Mail" | "Linkedin" | "Twitter";
};

export const contactLinks: ContactLink[] = [
  {
    name: "GitHub",
    type: "github",
    iconName: "Github",
    description: "コードやプロジェクトを確認できます",
  },
  {
    name: "Email",
    type: "email",
    iconName: "Mail",
    description: "", // 動的にメールアドレスを設定するため空
  },
  {
    name: "LinkedIn",
    type: "linkedin",
    iconName: "Linkedin",
    description: "プロフェッショナルなつながり",
  },
  {
    name: "X (Twitter)",
    type: "x",
    iconName: "Twitter",
    description: "日々のつぶやきや技術情報",
  },
];
