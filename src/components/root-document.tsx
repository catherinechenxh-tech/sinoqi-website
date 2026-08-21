import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { company, type Locale } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const GOOGLE_ANALYTICS_ID = "G-2MDR6XMHMB";

export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brand,
    legalName: company.legalName,
    url: SITE_ORIGIN,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 169 Dongqiao Road",
      addressLocality: "Hangzhou",
      addressRegion: "Zhejiang",
      addressCountry: "CN",
    },
  };

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      </body>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
