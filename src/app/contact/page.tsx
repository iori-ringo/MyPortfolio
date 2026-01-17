import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Mascot } from "@/components/ui/mascot";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact | 清宮 伊織",
  description:
    "お気軽にご連絡ください。GitHub, Email, LinkedIn, X からコンタクトできます。",
};

const contactLinks = [
  {
    name: "GitHub",
    url: profile.social.github,
    icon: Github,
    description: "コードやプロジェクトを確認できます",
  },
  {
    name: "Email",
    url: `mailto:${profile.social.email}`,
    icon: Mail,
    description: profile.social.email,
  },
  {
    name: "LinkedIn",
    url: profile.social.linkedin,
    icon: Linkedin,
    description: "プロフェッショナルなつながり",
  },
  {
    name: "X (Twitter)",
    url: profile.social.x,
    icon: Twitter,
    description: "日々のつぶやきや技術情報",
  },
];

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
            const Icon = link.icon;
            return (
              <Card
                key={link.name}
                className="hover:shadow-lg transition-shadow"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{link.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </CardHeader>
                </a>
              </Card>
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
