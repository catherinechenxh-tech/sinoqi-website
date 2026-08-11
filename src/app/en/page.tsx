import type { Metadata } from "next";
import { PageRenderer } from "@/components/page-renderer";
import { localizedPath, meta } from "@/content/site";

export const metadata: Metadata = {
  ...meta.en.home,
  alternates: {
    canonical: localizedPath("home", "en"),
    languages: { es: localizedPath("home", "es"), en: localizedPath("home", "en") },
  },
};

export default function EnglishHome() {
  return <PageRenderer locale="en" page="home" />;
}
