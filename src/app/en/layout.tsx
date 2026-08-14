import type { Metadata } from "next";
import { RootDocument } from "@/components/root-document";
import { SiteShell } from "@/components/site-shell";
import { SITE_ORIGIN } from "@/lib/site-url";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: { default: "SINOQI", template: "%s" },
  description: "Decorative materials for B2B distributors and importers.",
  applicationName: "SINOQI",
  formatDetection: { telephone: false },
  openGraph: { type: "website", siteName: "SINOQI", images: [{ url: "/assets/pvc-ceiling.jpg", width: 1200, height: 630, alt: "PVC ceiling panels in SINOQI production" }] },
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="en"><SiteShell locale="en">{children}</SiteShell></RootDocument>;
}
