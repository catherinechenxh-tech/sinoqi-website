import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { localizedBlogPostPath } from "@/content/blog";
import { company, localizedPath, type Locale } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const content = {
  en: {
    breadcrumb: "PVC ceiling color guide",
    intro: [
      "Choosing colors is one of the most important decisions when importing PVC ceiling panels. Too many designs can make the quantity of each color too small, while too few designs may limit the choices available to your customers.",
      "For a first 40HQ container, eight designs are often a practical starting point. This gives importers enough variety while keeping a useful quantity of each design. The final number should still be based on the minimum order quantity per color, panel dimensions, packing, and the container loading plan.",
    ],
    startTitle: "Start with white and wood look designs",
    start: [
      "White is a useful base color for residential and commercial ceilings. It gives a clean appearance, reflects light well, and is easy to match with different wall and floor finishes.",
      "Wood look designs add warmth and give customers more decorative options. A balanced first order can include light, medium, and dark wood tones.",
    ],
    examplesTitle: "Four practical color examples",
    firstImageAlt: "PVC ceiling colors L07 L08 and L10",
    examples: [
      ["L07 Light gray wood grain", "A soft, modern wood look for white, gray, and neutral interiors."],
      ["L08 Solid white", "A versatile option for homes, shops, offices, and other commercial spaces."],
      ["L10 Warm brown wood grain", "A richer wood tone for customers who want a warmer decorative effect."],
    ],
    secondImageAlt: "PVC ceiling color B 01 in white",
    b01: ["B 01 White", "A clean white design that can also be produced with a matte finish for customers who prefer less shine."],
    mixTitle: "A suggested 8 color mix",
    tableHeaders: ["Color group", "Designs"],
    mixRows: [
      ["White including B 01 and L08", "2"],
      ["Light wood including L07", "2"],
      ["Medium or warm wood including L10", "2"],
      ["Gray marble stone or another local favorite", "2"],
      ["Total", "8"],
    ],
    mixBody: "This is a starting mix rather than a fixed formula. If wood look ceilings sell well in your market, choose more wood designs. If customers mainly buy plain ceilings, increase the share of white. Show the catalog or physical samples to several local buyers before confirming the assortment.",
    finishTitle: "Glossy white or matte white",
    finishBody: "Glossy white reflects more light and gives the ceiling a brighter appearance. Matte white has a softer look and reduces visible reflections. B 01 can be made in a matte finish. Confirm the final color and surface finish with a physical sample before mass production.",
    riskTitle: "Three ways to reduce first order risk",
    risks: [
      "Use white and wood looks as the core of the assortment.",
      "Give more quantity to designs that receive the strongest response from local buyers.",
      "Test new decorative colors in smaller proportions until you have local sales data.",
    ],
    riskClosing: "The best mix is the one that fits your customers, sales channels, and local interior styles.",
    inquiry: "Contact SINOQI DECOR to receive the latest PVC ceiling color catalog and product information.",
    faqTitle: "Frequently asked questions",
    faqs: [
      ["Is eight the maximum number of PVC ceiling colors in a 40HQ container", "No. Eight is a practical starting point. The final number depends on the minimum quantity per design, panel size, packing, and loading plan."],
      ["Can B 01 be produced in matte white", "Yes. B 01 can be requested with a matte finish. Confirm the production sample before the final order."],
      ["Which colors should a first time importer choose", "White and wood look designs are useful core options. Add gray, marble, stone, or other designs based on feedback from local buyers."],
    ],
    toc: "In this guide",
    contactTitle: "Plan your first color mix",
    contactBody: "Share your target market, preferred designs and order plan with SINOQI DECOR.",
    contactCta: "Send an inquiry",
    catalogCta: "Request the catalog",
    productLink: "PVC ceiling panels",
  },
  es: {
    breadcrumb: "Guía de colores para cielo raso PVC",
    intro: [
      "La selección de colores es una de las decisiones más importantes al importar paneles de cielo raso de PVC. Si se eligen demasiados diseños, la cantidad de cada uno puede ser muy pequeña. Si se eligen muy pocos, los clientes tendrán menos opciones.",
      "Para un primer contenedor 40HQ, ocho diseños suelen ser un punto de partida práctico. Esta combinación ofrece variedad y permite mantener una cantidad razonable de cada diseño. El número final debe calcularse según la cantidad mínima por color, las medidas de los paneles, el embalaje y el plan de carga.",
    ],
    startTitle: "Comience con blanco y diseños tipo madera",
    start: [
      "El blanco es un color base fácil de combinar para techos residenciales y comerciales. Da una apariencia limpia, refleja bien la luz y combina con diferentes paredes, pisos y muebles.",
      "Los diseños tipo madera crean un ambiente más cálido y ofrecen más opciones decorativas. En un primer pedido, se pueden combinar tonos claros, medios y oscuros.",
    ],
    examplesTitle: "Cuatro ejemplos prácticos",
    firstImageAlt: "Colores de cielo raso de PVC L07 L08 y L10",
    examples: [
      ["L07 Madera gris clara", "Un diseño suave y moderno para interiores blancos, grises y neutros."],
      ["L08 Blanco liso", "Una opción versátil para viviendas, tiendas, oficinas y otros espacios comerciales."],
      ["L10 Madera marrón cálida", "Un tono más intenso para clientes que prefieren una decoración cálida."],
    ],
    secondImageAlt: "Color blanco B 01 para cielo raso de PVC",
    b01: ["B 01 Blanco", "Un diseño limpio que también puede fabricarse con acabado mate para clientes que prefieren menos brillo."],
    mixTitle: "Una combinación sugerida de 8 colores",
    tableHeaders: ["Grupo de colores", "Diseños"],
    mixRows: [
      ["Blancos incluidos B 01 y L08", "2"],
      ["Maderas claras incluido L07", "2"],
      ["Maderas medias o cálidas incluido L10", "2"],
      ["Gris mármol piedra u otro diseño local", "2"],
      ["Total", "8"],
    ],
    mixBody: "Esta combinación es un punto de partida y puede adaptarse a cada mercado. Si los diseños tipo madera tienen más demanda, se pueden incluir más tonos de madera. Si los compradores prefieren techos lisos, se puede aumentar la proporción de blanco. Muestre el catálogo o las muestras físicas a varios compradores locales antes de confirmar la selección.",
    finishTitle: "Blanco brillante o blanco mate",
    finishBody: "El blanco brillante refleja más luz. El blanco mate tiene una apariencia más suave y menos reflejos. El B 01 puede producirse con acabado mate. Conviene confirmar el color y el acabado con una muestra física antes de la producción.",
    riskTitle: "Tres formas de reducir el riesgo del primer pedido",
    risks: [
      "Utilice blanco y diseños tipo madera como base del surtido.",
      "Asigne más cantidad a los diseños que reciben mejores comentarios de los compradores locales.",
      "Pruebe nuevos diseños decorativos en una proporción menor hasta obtener datos reales de ventas.",
    ],
    riskClosing: "La mejor combinación es la que se adapta a sus clientes, canales de venta y estilos de decoración locales.",
    inquiry: "Contacte con SINOQI DECOR para recibir el catálogo de colores y la información de producto más recientes.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      ["Es ocho el número máximo de colores en un contenedor 40HQ", "No. Ocho es un punto de partida práctico. El número final depende de la cantidad mínima por diseño, las medidas, el embalaje y el plan de carga."],
      ["Se puede producir el B 01 en blanco mate", "Sí. El B 01 puede solicitarse con acabado mate. Conviene confirmar la muestra antes del pedido final."],
      ["Qué colores conviene elegir para un primer pedido", "El blanco y los diseños tipo madera son buenas opciones principales. Añada gris, mármol, piedra u otros diseños según las preferencias de los compradores locales."],
    ],
    toc: "En esta guía",
    contactTitle: "Planifique su primera combinación",
    contactBody: "Comparta su mercado, diseños preferidos y plan de pedido con SINOQI DECOR.",
    contactCta: "Enviar una consulta",
    catalogCta: "Solicitar el catálogo",
    productLink: "Paneles de cielo raso PVC",
  },
} as const;

export function PvcCeilingColorGuide({ locale, post }: { locale: Locale; post: BlogPost }) {
  const es = locale === "es";
  const t = content[locale];
  const canonicalUrl = new URL(localizedBlogPostPath(post.slug, locale), SITE_ORIGIN).toString();
  const absoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();
  const faqSchema = t.faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  }));
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title[locale],
      description: post.description[locale],
      image: [absoluteUrl("/images/blog/pvc-ceiling-colors-l07-l08-l10.png"), absoluteUrl("/images/blog/pvc-ceiling-color-b01-matte-white.png")],
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      mainEntityOfPage: canonicalUrl,
      author: { "@type": "Organization", name: "SINOQI DECOR", url: SITE_ORIGIN },
      publisher: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: post.title[locale],
      description: post.description[locale],
      url: canonicalUrl,
      inLanguage: es ? "es" : "en",
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: es ? "Inicio" : "Home", item: absoluteUrl(localizedPath("home", locale)) },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl(localizedPath("blog", locale)) },
        { "@type": "ListItem", position: 3, name: post.title[locale], item: canonicalUrl },
      ],
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqSchema },
  ];

  return (
    <>
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}
      <article className="color-guide">
        <header className="article-hero">
          <div className="container article-hero__inner">
            <nav className="breadcrumb" aria-label={es ? "Migas de pan" : "Breadcrumb"}>
              <Link href={localizedPath("home", locale)}>{es ? "Inicio" : "Home"}</Link><span aria-hidden="true">/</span>
              <Link href={localizedPath("blog", locale)}>Blog</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{t.breadcrumb}</span>
            </nav>
            <div className="article-meta"><span>{post.category[locale]}</span><time dateTime={post.publishedAt}>{post.publishedAt}</time><span>{post.readingTime[locale]}</span></div>
            <h1>{post.title[locale]}</h1>
            <p>{post.description[locale]}</p>
          </div>
        </header>
        <div className="article-cover color-guide__cover"><div className="container article-cover__frame"><Image src="/images/blog/pvc-ceiling-colors-l07-l08-l10.png" alt={post.coverAlt?.[locale] ?? ""} fill priority sizes="(max-width: 900px) 100vw, 1200px" /></div></div>
        <div className="container article-layout">
          <main className="article-body color-guide__body">
            <section id="overview">{t.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
            <section id="white-and-wood"><h2>{t.startTitle}</h2>{t.start.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
            <section id="examples"><h2>{t.examplesTitle}</h2><Image className="color-guide__image color-guide__image--portrait" src="/images/blog/pvc-ceiling-colors-l07-l08-l10.png" alt={t.firstImageAlt} width={1041} height={873} sizes="(max-width: 900px) 100vw, 760px" />
              <ul>{t.examples.map(([name, description]) => <li key={name}><strong>{name}:</strong> {description}</li>)}</ul>
              <Image className="color-guide__image" src="/images/blog/pvc-ceiling-color-b01-matte-white.png" alt={t.secondImageAlt} width={1512} height={726} sizes="(max-width: 900px) 100vw, 760px" />
              <ul><li><strong>{t.b01[0]}:</strong> {t.b01[1]}</li></ul>
            </section>
            <section id="color-mix"><h2>{t.mixTitle}</h2><div className="spec-guide__table-wrap"><table><thead><tr><th scope="col">{t.tableHeaders[0]}</th><th scope="col">{t.tableHeaders[1]}</th></tr></thead><tbody>{t.mixRows.map(([group, designs], index) => <tr key={group}><td data-label={t.tableHeaders[0]}>{index === t.mixRows.length - 1 ? <strong>{group}</strong> : group}</td><td data-label={t.tableHeaders[1]}>{index === t.mixRows.length - 1 ? <strong>{designs}</strong> : designs}</td></tr>)}</tbody></table></div><p>{t.mixBody}</p></section>
            <section id="finish"><h2>{t.finishTitle}</h2><p>{t.finishBody}</p></section>
            <section id="reduce-risk"><h2>{t.riskTitle}</h2><ol>{t.risks.map((item) => <li key={item}>{item}</li>)}</ol><p>{t.riskClosing}</p><p className="color-guide__inquiry"><strong>{t.inquiry}</strong></p><div className="color-guide__actions"><Link className="button button--orange" href={`${localizedPath("contact", locale)}#inquiry`}>{t.contactCta}</Link><Link className="button button--outline" href={localizedPath("download", locale)}>{t.catalogCta}</Link></div></section>
            <section id="faq"><h2>{t.faqTitle}</h2><div className="faq-list">{t.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
          </main>
          <aside className="article-aside">
            <div className="article-toc"><p className="eyebrow">{t.toc}</p><ol><li><a href="#white-and-wood">{t.startTitle}</a></li><li><a href="#examples">{t.examplesTitle}</a></li><li><a href="#color-mix">{t.mixTitle}</a></li><li><a href="#finish">{t.finishTitle}</a></li><li><a href="#reduce-risk">{t.riskTitle}</a></li><li><a href="#faq">FAQ</a></li></ol></div>
            <div className="article-cta"><p className="eyebrow">SINOQI DECOR</p><h2>{t.contactTitle}</h2><p>{t.contactBody}</p><Link className="button button--orange" href={`${localizedPath("contact", locale)}#inquiry`}>{t.contactCta}</Link><Link className="text-link" href={localizedPath("download", locale)}>{t.catalogCta} <span aria-hidden="true">→</span></Link></div>
          </aside>
        </div>
      </article>
      <section className="cta-band"><div className="container cta-band__inner"><div><p className="eyebrow">PVC Ceiling</p><h2>{t.contactTitle}</h2><p>{t.inquiry}</p></div><div className="cta-band__actions"><Link className="button button--light" href={`${localizedPath("contact", locale)}#inquiry`}>{t.contactCta}</Link><Link className="button button--outline-light" href={localizedPath("pvc-ceiling-panel", locale)}>{t.productLink}</Link></div></div></section>
    </>
  );
}
