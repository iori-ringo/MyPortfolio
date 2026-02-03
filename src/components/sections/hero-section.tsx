"use client";

import { FileText } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Mascot } from "@/components/ui/mascot";
import { Typewriter } from "@/components/ui/typewriter";
import { paths } from "@/core/paths";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* コンテンツ全体を囲むラッパー */}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* マスコット（Hello）: PC配置 タイトルの左上 */}
          <Mascot
            src="/images/mascot/mascot_cheer_black.png"
            // サイズアップ: 220 -> 280
            width={300}
            height={300}
            // 位置調整: サイズアップに合わせて少し外側に逃がす (-top-40 -> -top-48, -left-32 -> -left-40)
            containerClassName="absolute -top-32 -left-10 md:-top-40 md:-left-30 rotate-12 z-20 hidden md:block pointer-events-none select-none"
            animation="wave"
            delay={0.5}
          />

          {/* SP配置: 中央上部 */}
          <div className="md:hidden flex justify-center pb-4 mb-2">
            <Mascot
              src="/images/mascot/mascot_cheer_black.png"
              // SPサイズアップ: 160 -> 200
              width={200}
              height={200}
              animation="wave"
            />
          </div>

          {/* ローマ字名前 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {profile.name.en}
          </h1>

          {/* ロール（Typewriter） */}
          <div className="text-2xl md:text-4xl font-semibold text-primary mb-6 h-12">
            <Typewriter
              words={profile.roles}
              speed={80}
              delayBetweenWords={2000}
              cursor={true}
            />
          </div>

          {/* タグライン */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {profile.tagline}
          </p>

          {/* 技術タグ */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {profile.techTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA ボタン */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={paths.works.getHref()}
              className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
            >
              <FileText className="mr-2 h-5 w-5" />
              Works
            </Link>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full",
              )}
            >
              <FaGithub className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </div>

          {/* マスコット（Good）: PC配置 右下 */}
          <Mascot
            src="/images/mascot/good.png"
            // バランスを取るためこちらも少し大きくしても良いが、まずはHelloのみ要望通り大きくする。
            // ただし対角配置のバランスを考え、こちらも220 -> 260程度に微増させておく（Helloよりは控えめに）
            // ユーザー指示はHelloのみだが、全体のバランス配慮。
            // いや、指示がないので220のままにするのが無難だが、Helloが280でGoodが220だと差が目立つかも。
            // 一旦Helloのみ変更して提示し、ユーザーに判断を仰ぐスタイルにする。
            width={220}
            height={220}
            containerClassName="absolute -bottom-20 -right-10 md:-bottom-32 md:-right-32 -rotate-12 z-20 hidden md:block pointer-events-none select-none"
            animation="bounce"
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};
