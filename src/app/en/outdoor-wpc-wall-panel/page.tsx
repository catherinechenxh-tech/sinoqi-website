import type { Metadata } from "next";
import { OutdoorWpcWallPanelPage } from "@/components/outdoor-wpc-wall-panel-page";
import { asset, OUTDOOR_WPC_PATH } from "@/content/site";

const title = "Outdoor WPC Wall Panel & Exterior Cladding | SINOQI";
const description = "Source outdoor WPC wall panels for exterior cladding. MOQ starts from 100 pcs per design and color, with sample and customization support. Request current specifications.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: OUTDOOR_WPC_PATH },
  openGraph: {
    title,
    description,
    url: OUTDOOR_WPC_PATH,
    siteName: "SINOQI",
    locale: "en_US",
    type: "website",
    images: [{ url: asset.outdoorWpcHero, alt: "Outdoor WPC wall panel profile with a wood-look surface" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [asset.outdoorWpcHero],
  },
};

export default function OutdoorWpcWallPanelRoute() {
  return <OutdoorWpcWallPanelPage />;
}
