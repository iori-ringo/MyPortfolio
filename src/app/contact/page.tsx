import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Mascot } from "@/components/ui/mascot";
import { contactLinks } from "@/data/contact";
import { pageMetadata } from "@/data/metadata";
import { profile } from "@/data/profile";

export const metadata = pageMetadata.contact;

// アイコンマッピング
const iconMap = {
  Github: FaGithub,
  Mail,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
} as const;

// profile.social からURLを取得するヘルパー関数
const getContactUrl = (type: string): string => {
  switch (type) {
    case "github":
      return profile.social.github;
    case "email":
      return `mailto:${profile.social.email}`;
    case "linkedin":
      return profile.social.linkedin;
    case "x":
      return profile.social.x;
    default:
      return "";
  }
};

// description の取得（email の場合は動的に設定）
const getDescription = (type: string, description: string): string => {
  if (type === "email") {
    return profile.social.email;
  }
  return description;
};

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* ヘッダー */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-muted-foreground">
            お気軽にご連絡ください。新しいプロジェクトやコラボレーションについてお話しできることを楽しみにしています。
          </p>
        </header>

        {/* コンタクトリンク */}
        <div className="space-y-4 mb-16">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.iconName];
            const url = getContactUrl(link.type);
            const description = getDescription(link.type, link.description);
            // mailto リンクは target="_blank" を使用しない
            const isEmail = link.type === "email";

            return (
              <a
                key={link.name}
                href={url}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="block"
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{link.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </a>
            );
          })}
        </div>

        {/* マスコットフッター */}
        <div className="flex justify-center mt-20">
          <Mascot
            src="/images/mascot/this.png"
            width={140}
            height={140}
            animation="wave"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
