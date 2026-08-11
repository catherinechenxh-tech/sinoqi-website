import type { Metadata } from "next";
import { PageRenderer } from "@/components/page-renderer";
import { localizedPath, meta } from "@/content/site";

export const metadata: Metadata = {
  ...meta.es.home,
  alternates: { canonical: localizedPath("home", "es"), languages: { es: localizedPath("home", "es"), en: localizedPath("home", "en") } },
};

export default function SpanishHome() {
  return <PageRenderer locale="es" page="home" />;
}
