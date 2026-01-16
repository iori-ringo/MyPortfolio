import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { paths } from "@/core/paths";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { experiences, works } from "@/data/works";

export const metadata = {
  title: "Resume | 清宮 伊織",
  description: "経歴、スキル、プロジェクトの概要。",
};

const ResumePage = () => {
  // 主要スキルのみ抽出
  const primarySkills = skillCategories.slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* ヘッダー */}
        <header className="text-center mb-12 pb-8 border-b">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {profile.name.ja}
          </h1>
          <p className="text-xl text-muted-foreground mb-4">{profile.role}</p>

          {/* コンタクト情報 */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={`mailto:${profile.social.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              {profile.social.email}
            </a>
          </div>
        </header>

        {/* サマリー */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-primary">Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            {profile.tagline}
          </p>
        </section>

        {/* スキル */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-primary">Skills</h2>
          <div className="space-y-4">
            {primarySkills.map((category) => (
              <div key={category.name}>
                <h3 className="font-medium mb-2">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* プロジェクト */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-primary">Projects</h2>
          <div className="space-y-4">
            {works.map((work) => (
              <Card key={work.slug}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{work.title}</CardTitle>
                    <Link
                      href={paths.works.detail.getHref(work.slug)}
                      className="text-primary text-sm hover:underline"
                    >
                      詳細 →
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {work.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 経験 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-primary">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.title} className="border-l-2 border-primary pl-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t">
          <Button asChild size="lg">
            <Link href={paths.contact.getHref()}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
