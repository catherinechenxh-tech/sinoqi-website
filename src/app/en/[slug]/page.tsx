import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/page-renderer";
import { isPageSlug, localizedPath, meta, pageSlugs } from "@/content/site";

export function generateStaticParams() {
  return pageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isPageSlug(slug)) return {};
  return {
    ...meta.en[slug],
    alternates: {
      canonical: localizedPath(slug, "en"),
      languages: { es: localizedPath(slug, "es"), en: localizedPath(slug, "en") },
    },
  };
}

export default async function EnglishPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isPageSlug(slug)) notFound();
  return <PageRenderer locale="en" page={slug} />;
}
