import type { MetadataRoute } from "next";
import { siteConfig } from "@/core/site-config";
import { works } from "@/data/works";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, priority: 1.0 },
    { url: `${siteConfig.url}/about`, priority: 0.8 },
    { url: `${siteConfig.url}/works`, priority: 0.8 },
    { url: `${siteConfig.url}/contact`, priority: 0.6 },
    { url: `${siteConfig.url}/resume`, priority: 0.7 },
  ];

  const workPages: MetadataRoute.Sitemap = works.map((work) => ({
    url: `${siteConfig.url}/works/${work.slug}`,
    priority: 0.7,
  }));

  return [...staticPages, ...workPages];
}
