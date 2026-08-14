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
  const pageMeta = meta.en[slug];
  return {
    ...pageMeta,
    alternates: {
      canonical: localizedPath(slug, "en"),
      languages: { es: localizedPath(slug, "es"), en: localizedPath(slug, "en") },
    },
    ...(slug === "pvc-ceiling-panel" ? {
      openGraph: {
        title: pageMeta.title,
        description: pageMeta.description,
        url: localizedPath(slug, "en"),
        siteName: "SINOQI",
        locale: "en_US",
        type: "website",
        images: [{ url: "/assets/pvc-ceiling.jpg", alt: "PVC ceiling panels in SINOQI production" }],
      },
    } : {}),
  };
}

export default async function EnglishPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isPageSlug(slug)) notFound();
  return <PageRenderer locale="en" page={slug} />;
}
