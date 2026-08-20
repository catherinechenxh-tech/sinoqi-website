import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog-post";
import { blogPostLocales, blogPostSlugs, getBlogPost, localizedBlogPostPath } from "@/content/blog";

export function generateStaticParams() {
  return blogPostSlugs("es").map((postSlug) => ({ postSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ postSlug: string }> }): Promise<Metadata> {
  const { postSlug } = await params;
  const post = getBlogPost(postSlug, "es");
  if (!post) return {};
  const title = post.seoTitle?.es ?? (post.slug === "pvc-ceiling-panel-buying-guide"
    ? "Guía de Compra de Paneles de Techo PVC | SINOQI"
    : `${post.title.es} | SINOQI`);
  const url = localizedBlogPostPath(post.slug, "es");
  const locales = blogPostLocales(post);
  return {
    title,
    description: post.description.es,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((locale) => [locale, localizedBlogPostPath(post.slug, locale)])),
    },
    openGraph: {
      type: "article",
      title,
      description: post.description.es,
      url,
      siteName: "SINOQI",
      locale: "es_419",
      ...(locales.includes("en") ? { alternateLocale: ["en_US"] } : {}),
      publishedTime: post.publishedAt,
      images: [{
        url: post.cover ?? "/assets/pvc-ceiling.jpg",
        alt: post.coverAlt?.es ?? "Paneles de techo PVC en producción SINOQI",
      }],
    },
  };
}

export default async function SpanishBlogPostPage({ params }: { params: Promise<{ postSlug: string }> }) {
  const { postSlug } = await params;
  const post = getBlogPost(postSlug, "es");
  if (!post) notFound();
  return <BlogPost locale="es" post={post} />;
}
