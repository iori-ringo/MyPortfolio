import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/shadcn/badge";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { paths } from "@/core/paths";
import { works } from "@/data/works";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

// 静的パラメータ生成
export const generateStaticParams = () => {
  return works.map((work) => ({
    slug: work.slug,
  }));
};

// メタデータ生成
export const generateMetadata = async ({ params }: WorkDetailPageProps) => {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return { title: "Work Not Found" };
  }

  return {
    title: `${work.title} | Works | 清宮 伊織`,
    description: work.description,
    alternates: { canonical: `/works/${work.slug}` },
  };
};

const WorkDetailPage = async ({ params }: WorkDetailPageProps) => {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 戻るリンク */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href={paths.works.getHref()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Works に戻る
          </Link>
        </Button>

        {/* ヘッダー */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{work.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {work.description}
          </p>

          {/* 技術スタック */}
          <div className="flex flex-wrap gap-2 mb-6">
            {work.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* リンク */}
          <div className="flex gap-4">
            {work.github && (
              <Button asChild>
                <a href={work.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            {work.demoUrl && (
              <Button asChild variant="outline">
                <a
                  href={work.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>

          {/* スクリーンショット */}
          {work.screenshots && work.screenshots.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-4">
              {work.screenshots.map((src, index) => (
                <div key={src} className="overflow-hidden rounded-xl border">
                  <Image
                    src={src}
                    alt={`${work.title}のスクリーンショット ${index + 1}`}
                    width={600}
                    height={338}
                    className="w-full h-auto"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          ) : (
            work.thumbnail && (
              <div className="mt-8 overflow-hidden rounded-xl border">
                <Image
                  src={work.thumbnail}
                  alt={`${work.title}のスクリーンショット`}
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )
          )}
        </header>

        {/* 概要セクション */}
        {(work.problem || work.solution || work.outcome) && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">概要</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {work.problem && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">
                      Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{work.problem}</p>
                  </CardContent>
                </Card>
              )}
              {work.solution && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">
                      Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{work.solution}</p>
                  </CardContent>
                </Card>
              )}
              {work.outcome && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">
                      Outcome
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{work.outcome}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </section>
        )}

        {/* 主要機能 */}
        {work.features && work.features.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">主要機能</h2>
            <ul className="space-y-3">
              {work.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <span className="text-primary mr-3">✦</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 設計判断 */}
        {work.decisions && work.decisions.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">設計と判断</h2>
            <div className="space-y-4">
              {work.decisions.map((decision) => (
                <Card key={decision.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{decision.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {decision.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* 苦労した点 */}
        {work.challenges && work.challenges.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">苦労した点と解決</h2>
            <div className="space-y-4">
              {work.challenges.map((challenge) => (
                <Card key={challenge.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {challenge.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* 今後の改善 */}
        {work.improvements && work.improvements.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">今後の改善</h2>
            <ul className="space-y-3">
              {work.improvements.map((improvement) => (
                <li key={improvement} className="flex items-start">
                  <span className="text-primary mr-3">→</span>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default WorkDetailPage;
