import { siteConfig } from "@/core/site-config";
import { profile } from "@/data/profile";
import type { Work } from "@/data/works";

export const PersonJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name.ja,
    alternateName: profile.name.en,
    jobTitle: profile.role,
    url: siteConfig.url,
    sameAs: [profile.social.github, profile.social.linkedin, profile.social.x],
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
};

export const WorksCollectionJsonLd = ({ works }: { works: Work[] }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "清宮 伊織の作品一覧",
    description:
      "フロントエンドエンジニア清宮伊織の作品一覧。設計判断と技術詳細を紹介します。",
    url: `${siteConfig.url}/works`,
    author: {
      "@type": "Person",
      name: profile.name.ja,
      url: siteConfig.url,
    },
    hasPart: works.map((work) => ({
      "@type": "CreativeWork",
      name: work.title,
      description: work.description,
      url: `${siteConfig.url}/works/${work.slug}`,
      author: {
        "@type": "Person",
        name: profile.name.ja,
      },
      ...(work.github && {
        codeRepository: work.github,
      }),
      keywords: work.techStack.join(", "),
    })),
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
};
