import type { MetadataRoute } from "next";
import { blogPostLocales, blogPosts, localizedBlogPostPath } from "@/content/blog";
import { localizedPath, OUTDOOR_WPC_PATH, pageSlugs, type PageKey } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const keys: PageKey[] = ["home", ...pageSlugs];
  const pages = keys.flatMap((key) => (["es", "en"] as const).map((locale) => ({
    url: new URL(localizedPath(key, locale), SITE_ORIGIN).toString(),
    lastModified: new Date(),
    changeFrequency: key === "home" ? "weekly" as const : "monthly" as const,
    priority: key === "home" ? 1 : key === "contact" ? 0.9 : 0.8,
    alternates: {
      languages: {
        es: new URL(localizedPath(key, "es"), SITE_ORIGIN).toString(),
        en: new URL(localizedPath(key, "en"), SITE_ORIGIN).toString(),
      },
    },
  })));

  const posts = blogPosts.flatMap((post) => blogPostLocales(post).map((locale) => ({
    url: new URL(localizedBlogPostPath(post.slug, locale), SITE_ORIGIN).toString(),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: Object.fromEntries(blogPostLocales(post).map((availableLocale) => [
        availableLocale,
        new URL(localizedBlogPostPath(post.slug, availableLocale), SITE_ORIGIN).toString(),
      ])),
    },
  })));

  const outdoorWpcPage = {
    url: new URL(OUTDOOR_WPC_PATH, SITE_ORIGIN).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  };

  return [...pages, outdoorWpcPage, ...posts];
}
