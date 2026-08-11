import type { MetadataRoute } from "next";
import { blogPosts, localizedBlogPostPath } from "@/content/blog";
import { localizedPath, pageSlugs, type PageKey } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sinoqidecor.com";
  const keys: PageKey[] = ["home", ...pageSlugs];
  const pages = keys.flatMap((key) => (["es", "en"] as const).map((locale) => ({
    url: new URL(localizedPath(key, locale), base).toString(),
    lastModified: new Date(),
    changeFrequency: key === "home" ? "weekly" as const : "monthly" as const,
    priority: key === "home" ? 1 : key === "contact" ? 0.9 : 0.8,
    alternates: {
      languages: {
        es: new URL(localizedPath(key, "es"), base).toString(),
        en: new URL(localizedPath(key, "en"), base).toString(),
      },
    },
  })));

  const posts = blogPosts.flatMap((post) => (["es", "en"] as const).map((locale) => ({
    url: new URL(localizedBlogPostPath(post.slug, locale), base).toString(),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        es: new URL(localizedBlogPostPath(post.slug, "es"), base).toString(),
        en: new URL(localizedBlogPostPath(post.slug, "en"), base).toString(),
      },
    },
  })));

  return [...pages, ...posts];
}
