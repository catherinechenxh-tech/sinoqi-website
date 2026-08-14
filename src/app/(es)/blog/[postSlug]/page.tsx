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
      ? "Guía de Compra de Paneles de Techo PVC | SINOQI"
      : `${post.title.es} | SINOQI`,
    description: post.description.es,
    alternates: {
      canonical: localizedBlogPostPath(post.slug, "es"),
      languages: { es: localizedBlogPostPath(post.slug, "es"), en: localizedBlogPostPath(post.slug, "en") },
    },
  };
}

export default async function SpanishBlogPostPage({ params }: { params: Promise<{ postSlug: string }> }) {
  const { postSlug } = await params;
  const post = getBlogPost(postSlug);
  if (!post) notFound();
  return <BlogPost locale="es" post={post} />;
}
