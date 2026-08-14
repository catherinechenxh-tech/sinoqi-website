import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog-post";
import { blogPostSlugs, getBlogPost, localizedBlogPostPath } from "@/content/blog";

export function generateStaticParams() {
  return blogPostSlugs("en").map((postSlug) => ({ postSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ postSlug: string }> }): Promise<Metadata> {
  const { postSlug } = await params;
  const post = getBlogPost(postSlug, "en");
  if (!post) return {};
  const title = post.seoTitle?.en ?? (post.slug === "pvc-ceiling-panel-buying-guide"
    ? "PVC Ceiling Panel Buying Guide for Importers | SINOQI"
    : `${post.title.en} | SINOQI`);
  const url = localizedBlogPostPath(post.slug, "en");
  return {
    title,
    description: post.description.en,
    alternates: {
      canonical: url,
      languages: { es: localizedBlogPostPath(post.slug, "es"), en: localizedBlogPostPath(post.slug, "en") },
    },
    openGraph: {
      type: "article",
      title,
      description: post.description.en,
      url,
      siteName: "SINOQI",
      locale: "en_US",
      alternateLocale: ["es_419"],
      publishedTime: post.publishedAt,
      images: [{
        url: post.cover ?? "/assets/pvc-ceiling.jpg",
        alt: post.coverAlt?.en ?? "PVC ceiling panels in SINOQI production",
      }],
    },
  };
}

export default async function EnglishBlogPostPage({ params }: { params: Promise<{ postSlug: string }> }) {
  const { postSlug } = await params;
  const post = getBlogPost(postSlug, "en");
  if (!post) notFound();
  return <BlogPost locale="en" post={post} />;
}
