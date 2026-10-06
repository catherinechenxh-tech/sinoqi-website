import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { company, type Locale } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const GOOGLE_ANALYTICS_ID = "G-2MDR6XMHMB";

export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  // Enhanced Organization Schema with logo, sameAs, contactPoint
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brand,
    legalName: company.legalName,
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/assets/logo.jpg`,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 169 Dongqiao Road, Fuyang District",
      addressLocality: "Hangzhou",
      addressRegion: "Zhejiang",
      postalCode: "311418",
      addressCountry: "CN",
    },
    sameAs: [
      company.linkedin,
      company.youtube,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.email,
      telephone: company.phone,
      areaServed: "Worldwide",
      availableLanguage: ["English", "Spanish", "Chinese"],
    },
  };

  // WebSite Schema with SearchAction
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.brand,
    alternateName: company.legalName,
    url: SITE_ORIGIN,
    inLanguage: locale === "es" ? "es" : "en",
    publisher: {
      "@type": "Organization",
      name: company.brand,
      url: SITE_ORIGIN,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/assets/logo.jpg`,
      },
    },
  };

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website).replace(/</g, "\\u003c") }} />
      </body>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
