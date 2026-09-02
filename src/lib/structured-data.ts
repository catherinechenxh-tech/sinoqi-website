import { company } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

type QuoteBasedPageSchemaInput = {
  name: string;
  description: string;
  url: string;
  topicName?: string;
  alternateName?: string;
  image?: string | string[];
  inLanguage?: "en" | "es";
  pageType?: "WebPage" | "CollectionPage";
};

export function createQuoteBasedPageSchema({
  name,
  description,
  url,
  topicName = name,
  alternateName,
  image,
  inLanguage,
  pageType = "WebPage",
}: QuoteBasedPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    name,
    description,
    url,
    ...(alternateName ? { alternateName } : {}),
    ...(image ? { image } : {}),
    ...(inLanguage ? { inLanguage } : {}),
    isPartOf: {
      "@type": "WebSite",
      name: company.brand,
      url: SITE_ORIGIN,
    },
    publisher: {
      "@type": "Organization",
      name: company.brand,
      url: SITE_ORIGIN,
    },
    about: createStructuredDataTopic(topicName, url),
  };
}

export function createStructuredDataTopic(name: string, url?: string) {
  return {
    "@type": "Thing",
    name,
    ...(url ? { url } : {}),
  };
}
