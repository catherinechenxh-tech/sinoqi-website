import type { Metadata } from "next";
import { RootDocument } from "@/components/root-document";
import { SiteShell } from "@/components/site-shell";
import { SITE_ORIGIN } from "@/lib/site-url";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: { default: "SINOQI", template: "%s" },
  description: "Materiales decorativos para distribuidores e importadores B2B.",
  applicationName: "SINOQI",
  formatDetection: { telephone: false },
  openGraph: { type: "website", siteName: "SINOQI", images: [{ url: "/assets/pvc-ceiling.jpg", width: 1200, height: 630, alt: "Paneles de techo PVC en producción SINOQI" }] },
};

export default function SpanishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="es"><SiteShell locale="es">{children}</SiteShell></RootDocument>;
}
