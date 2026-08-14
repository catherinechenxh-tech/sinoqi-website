import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog-post";
import { blogPostSlugs, getBlogPost, localizedBlogPostPath } from "@/content/blog";

export function generateStaticParams() {
  return blogPostSlugs.map((postSlug) => ({ postSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ postSlug: string }> }): Promise<Metadata> {
  const { postSlug } = await params;
  const post = getBlogPost(postSlug);
  if (!post) return {};
  return {
    title: post.slug === "pvc-ceiling-panel-buying-guide"
      ? "PVC Ceiling Panel Buying Guide for Importers | SINOQI"
      : `${post.title.en} | SINOQI`,
    description: post.description.en,
    alternates: {
      canonical: localizedBlogPostPath(post.slug, "en"),
      languages: { es: localizedBlogPostPath(post.slug, "es"), en: localizedBlogPostPath(post.slug, "en") },
    },
  };
}

export default async function EnglishBlogPostPage({ params }: { params: Promise<{ postSlug: string }> }) {
  const { postSlug } = await params;
  const post = getBlogPost(postSlug);
  if (!post) notFound();
  return <BlogPost locale="en" post={post} />;
}
