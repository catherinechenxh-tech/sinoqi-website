import type { ReactNode } from "react";
import { company, type Locale } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

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
    </html>
  );
}
