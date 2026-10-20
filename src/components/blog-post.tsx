import Image from "next/image";
import Link from "next/link";
import type { BlogPost as BlogPostData } from "@/content/blog";
import { asset, company, localizedPath, type Locale } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";
import { PvcCeilingDesignsFinishes } from "@/components/pvc-ceiling-designs-finishes";
import { PvcCeilingBathroomGuide } from "@/components/pvc-ceiling-bathroom-guide";
import { PvcCeilingSizesSpecifications } from "@/components/pvc-ceiling-sizes-specifications";
import { PvcCeilingColorGuide } from "@/components/pvc-ceiling-color-guide";
import { SpcFlooringExplainer } from "@/components/spc-flooring-explainer";
import { SpcFlooringExplainerEs } from "@/components/spc-flooring-explainer-es";
import { SpcVsLvpGuide } from "@/components/spc-vs-lvp-guide";
import { SpcVsLvpGuideEs } from "@/components/spc-vs-lvp-guide-es";
import { WpcWallPanelDesignsColors } from "@/components/wpc-wall-panel-designs-colors";
import { WpcWallPanelDesignsColorsEs } from "@/components/wpc-wall-panel-designs-colors-es";
import { WpcWallPanelExplainer } from "@/components/wpc-wall-panel-explainer";
import { UvMarbleSheetDesignsColors } from "@/components/uv-marble-sheet-designs-colors";

export function BlogPost({ locale, post }: { locale: Locale; post: BlogPostData }) {
  if (post.kind === "spc-vs-lvp-guide") {
    return locale === "es" ? <SpcVsLvpGuideEs post={post} /> : <SpcVsLvpGuide post={post} />;
  }
  if (post.kind === "spc-flooring-explainer") {
    return locale === "es" ? <SpcFlooringExplainerEs post={post} /> : <SpcFlooringExplainer post={post} />;
  }
  if (post.kind === "pvc-ceiling-designs-finishes") {
    return <PvcCeilingDesignsFinishes locale={locale} post={post} />;
  }
  if (post.kind === "pvc-ceiling-bathroom-guide") {
    return <PvcCeilingBathroomGuide locale={locale} post={post} />;
  }
  if (post.kind === "pvc-ceiling-sizes-specifications") {
    return <PvcCeilingSizesSpecifications locale={locale} post={post} />;
  }
  if (post.kind === "pvc-ceiling-color-guide") {
    return <PvcCeilingColorGuide locale={locale} post={post} />;
  }
  if (post.kind === "wpc-wall-panel-designs-colors") {
    return locale === "es" ? <WpcWallPanelDesignsColorsEs post={post} /> : <WpcWallPanelDesignsColors post={post} />;
  }
  if (post.kind === "wpc-wall-panel-explainer") {
    return <WpcWallPanelExplainer locale={locale} post={post} />;
  }
  if (post.kind === "uv-marble-sheet-designs-colors") {
    return <UvMarbleSheetDesignsColors locale={locale} post={post} />;
  }

  const es = locale === "es";
  const formattedDate = new Intl.DateTimeFormat(es ? "es" : "en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  // Build canonical URL for this blog post
  const blogPath = es
    ? `/blog/${post.localizedSlug?.es ?? post.slug}/`
    : `/en/blog/${post.localizedSlug?.en ?? post.slug}/`;
  const canonicalUrl = `${SITE_ORIGIN}${blogPath}`;
  const cover = post.cover ?? asset.pvc;

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    description: post.description[locale],
    image: [cover, ...(post.images?.map((image) => image.src) ?? [])].map((src) => `${SITE_ORIGIN}${src}`),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: es ? "es" : "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Organization",
      name: company.brand,
      url: SITE_ORIGIN,
    },
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

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: es ? "Inicio" : "Home", item: `${SITE_ORIGIN}${localizedPath("home", locale)}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_ORIGIN}${localizedPath("blog", locale)}` },
      { "@type": "ListItem", position: 3, name: post.title[locale], item: canonicalUrl },
    ],
  };

  const faqSchema = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer[locale],
      },
    })),
  } : null;

  const schemas = [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <nav className="breadcrumb" aria-label={es ? "Migas de pan" : "Breadcrumb"}>
              <Link href={localizedPath("home", locale)}>{es ? "Inicio" : "Home"}</Link>
              <span aria-hidden="true">/</span>
              <Link href={localizedPath("blog", locale)}>Blog</Link>
            </nav>
            <div className="article-meta">
              <span>{post.category[locale]}</span>
              <time dateTime={post.publishedAt}>{formattedDate}</time>
              <span>{post.readingTime[locale]}</span>
            </div>
            <h1>{post.title[locale]}</h1>
            <p>{post.description[locale]}</p>
          </div>
        </header>
        <div className="article-cover">
          <div className="container article-cover__frame">
            <Image src={cover} alt={post.coverAlt?.[locale] ?? (es ? "Selección de paneles decorativos" : "Decorative panel selection")} fill priority sizes="(max-width: 900px) 100vw, 1200px" />
          </div>
          {post.coverCaption && <p className="container article-cover__caption">{post.coverCaption[locale]}</p>}
        </div>
        <div className="container article-layout">
          <div className="article-body">
            <p className="article-intro">{post.introduction[locale]}</p>
            <div className="article-note">
              <strong>{es ? "Alcance de esta guía" : "Scope of this guide"}</strong>
              <p>{post.scopeNote?.[locale] ?? (es ? "La cotización, la disponibilidad y la muestra aprobada prevalecen para cada pedido." : "The quotation, availability and approved sample govern each order.")}</p>
            </div>
            {post.sections.map((section) => {
              const sectionImage = post.images?.find((image) => image.afterSectionId === section.id);
              return (
                <section id={section.id} key={section.id}>
                  <h2>{section.title[locale]}</h2>
                  {section.paragraphs[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul>{section.bullets[locale].map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  )}
                  {sectionImage && (
                    <figure className="article-inline-image">
                      <div className="article-inline-image__frame">
                        <Image src={sectionImage.src} alt={sectionImage.alt[locale]} fill sizes="(max-width: 900px) 100vw, 760px" />
                      </div>
                      <figcaption>{sectionImage.caption[locale]}</figcaption>
                    </figure>
                  )}
                </section>
              );
            })}
            {post.faqs && (
              <section className="article-faq" id="faq">
                <h2>{es ? "Preguntas frecuentes sobre el precio del piso SPC" : "SPC flooring price FAQ"}</h2>
                <div className="faq-list">
                  {post.faqs.map((faq, index) => (
                    <details key={faq.question[locale]} open={index === 0}>
                      <summary>{faq.question[locale]}<span aria-hidden="true">+</span></summary>
                      <p>{faq.answer[locale]}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>
          <aside className="article-aside">
            <div className="article-toc">
              <p className="eyebrow">{es ? "En esta guía" : "In this guide"}</p>
              <ol>{post.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title[locale].replace(/^\d+\.\s*/, "")}</a></li>)}</ol>
            </div>
            <div className="article-cta">
              <p className="eyebrow">{post.cta?.eyebrow[locale] ?? "SINOQI"}</p>
              <h2>{post.cta?.title[locale] ?? (es ? "Prepare su cotización" : "Prepare your quotation")}</h2>
              <p>{post.cta?.body[locale] ?? (es ? "Comparta su formato, acabado, cantidad y mercado." : "Share your format, finish, quantity and market.")}</p>
              <Link className="button button--orange" href={`${localizedPath("contact", locale)}#inquiry`}>{es ? "Solicitar cotización" : "Request a Custom Quote"}</Link>
              <Link className="text-link" href={localizedPath("download", locale)}>{es ? "Catálogo" : "Catalog"} <span aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </article>
      <section className="cta-band">
        <div className="container cta-band__inner">
          {post.cta ? (
            <>
              <div><p className="eyebrow">{post.cta.eyebrow[locale]}</p><h2>{post.cta.title[locale]}</h2><p>{post.cta.body[locale]}</p></div>
              <div className="cta-band__actions"><Link className="button button--light" href={`${localizedPath("contact", locale)}#inquiry`}>{es ? "Solicitar cotización" : "Request a Custom Quote"}</Link><Link className="button button--outline-light" href={localizedPath("download", locale)}>{es ? "Catálogo" : "Catalog"}</Link></div>
            </>
          ) : (
            <>
              <div><p className="eyebrow">PVC Ceiling</p><h2>{es ? "¿Listo para comparar una configuración real?" : "Ready to compare an actual configuration?"}</h2><p>{es ? "Revise la línea de producto o envíe su requisito al equipo." : "Review the product line or send your requirement to the team."}</p></div>
              <div className="cta-band__actions"><Link className="button button--light" href={localizedPath("pvc-ceiling-panel", locale)}>{es ? "Ver PVC Ceiling" : "View PVC Ceiling"}</Link><Link className="button button--outline-light" href={`${localizedPath("contact", locale)}#inquiry`}>{es ? "Solicitar cotización" : "Request a quote"}</Link></div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
