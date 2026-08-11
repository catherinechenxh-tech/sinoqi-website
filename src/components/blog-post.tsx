import Image from "next/image";
import Link from "next/link";
import type { BlogPost as BlogPostData } from "@/content/blog";
import { asset, localizedPath, type Locale } from "@/content/site";

export function BlogPost({ locale, post }: { locale: Locale; post: BlogPostData }) {
  const es = locale === "es";
  const formattedDate = new Intl.DateTimeFormat(es ? "es" : "en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  return (
    <>
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
            <Image src={asset.pvc} alt={es ? "Selección de paneles de techo PVC" : "PVC ceiling panel selection"} fill priority sizes="(max-width: 900px) 100vw, 1200px" />
          </div>
        </div>
        <div className="container article-layout">
          <div className="article-body">
            <p className="article-intro">{post.introduction[locale]}</p>
            <div className="article-note">
              <strong>{es ? "Alcance de esta guía" : "Scope of this guide"}</strong>
              <p>{es ? "Las condiciones indicadas son puntos de partida confirmados. La cotización, la disponibilidad y la muestra aprobada prevalecen para cada pedido." : "The terms below are confirmed starting points. The quotation, availability and approved sample govern each order."}</p>
            </div>
            {post.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title[locale]}</h2>
                {section.paragraphs[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>{section.bullets[locale].map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                )}
              </section>
            ))}
          </div>
          <aside className="article-aside">
            <div className="article-toc">
              <p className="eyebrow">{es ? "En esta guía" : "In this guide"}</p>
              <ol>{post.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title[locale].replace(/^\d+\.\s*/, "")}</a></li>)}</ol>
            </div>
            <div className="article-cta">
              <p className="eyebrow">SINOQI</p>
              <h2>{es ? "Prepare su cotización" : "Prepare your quotation"}</h2>
              <p>{es ? "Comparta su formato, acabado, cantidad y mercado." : "Share your format, finish, quantity and market."}</p>
              <Link className="button button--orange" href={`${localizedPath("contact", locale)}#inquiry`}>{es ? "Solicitar cotización" : "Request a Custom Quote"}</Link>
              <Link className="text-link" href={localizedPath("download", locale)}>{es ? "Recibir catálogo" : "Receive the catalog"} <span aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </article>
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div><p className="eyebrow">PVC Ceiling</p><h2>{es ? "¿Listo para comparar una configuración real?" : "Ready to compare an actual configuration?"}</h2><p>{es ? "Revise la línea de producto o envíe su requisito al equipo." : "Review the product line or send your requirement to the team."}</p></div>
          <div className="cta-band__actions"><Link className="button button--light" href={localizedPath("pvc-ceiling-panel", locale)}>{es ? "Ver PVC Ceiling" : "View PVC Ceiling"}</Link><Link className="button button--outline-light" href={`${localizedPath("contact", locale)}#inquiry`}>{es ? "Solicitar cotización" : "Request a quote"}</Link></div>
        </div>
      </section>
    </>
  );
}
