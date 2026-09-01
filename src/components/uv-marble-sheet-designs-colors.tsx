import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { localizedBlogPostPath } from "@/content/blog";
import { company, localizedPath, type Locale } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const visuals = [
  {
    image: "/assets/uv-marble-light-design-references.jpg",
    alt: {
      en: "Light marble-look UV marble sheet catalog references",
      es: "Referencias de catálogo claras con apariencia de mármol para láminas UV",
    },
    title: { en: "Light marble-look", es: "Apariencia de mármol claro" },
    body: {
      en: "Use light visual directions when preparing a restrained shortlist. Confirm the exact reference and current availability before sampling.",
      es: "Utilice líneas visuales claras para preparar una selección sobria. Confirme la referencia exacta y su disponibilidad antes de solicitar muestras.",
    },
  },
  {
    image: "/assets/uv-marble-dark-design-references.jpg",
    alt: {
      en: "Dark marble-look UV marble sheet catalog references",
      es: "Referencias de catálogo oscuras con apariencia de mármol para láminas UV",
    },
    title: { en: "Dark marble-look", es: "Apariencia de mármol oscuro" },
    body: {
      en: "Dark references can be shortlisted where stronger contrast is required. A screen image is not a physical color standard.",
      es: "Las referencias oscuras pueden preseleccionarse cuando se busca mayor contraste. Una imagen en pantalla no es un estándar físico de color.",
    },
  },
  {
    image: "/assets/uv-marble-gold-design-references.jpg",
    alt: {
      en: "Gold-accent UV marble sheet catalog references",
      es: "Referencias de catálogo de láminas de mármol UV con detalles dorados",
    },
    title: { en: "Gold-accent direction", es: "Línea visual con detalles dorados" },
    body: {
      en: "Gold-accent references are grouped by visible appearance only. Confirm the selected design through a current sample before presenting it as an order option.",
      es: "Las referencias con detalles dorados se agrupan únicamente por su apariencia visible. Confirme el diseño mediante una muestra actual antes de presentarlo como opción de pedido.",
    },
  },
  {
    image: "/assets/uv-marble-continuous-pattern-references.jpg",
    alt: {
      en: "Matched continuous UV marble sheet pattern references",
      es: "Referencias de patrones continuos combinados para láminas de mármol UV",
    },
    title: { en: "Continuous pattern references", es: "Referencias de patrón continuo" },
    body: {
      en: "Matched visual references help buyers discuss the intended wall composition. Final sheet sequence and project layout must be confirmed for the selected design.",
      es: "Las referencias visuales combinadas ayudan a explicar la composición prevista. La secuencia de láminas y la disposición final deben confirmarse para el diseño seleccionado.",
    },
  },
  {
    image: "/assets/uv-marble-decorative-design-references.jpg",
    alt: {
      en: "Decorative art-inspired UV marble sheet catalog references",
      es: "Referencias decorativas de catálogo para láminas de mármol UV",
    },
    title: { en: "Decorative visual references", es: "Referencias visuales decorativas" },
    body: {
      en: "More expressive references can be reviewed for a defined design brief. They remain catalog references until the current option and sample are confirmed.",
      es: "Las referencias más expresivas pueden revisarse para un concepto definido. Siguen siendo referencias de catálogo hasta confirmar la opción actual y la muestra.",
    },
  },
] as const;

const copy = {
  en: {
    breadcrumb: "UV marble designs & colors",
    meta: "UV Marble Sheet Selection Guide",
    hero: "Compare real visual references, build a controlled shortlist and confirm the selected design through a current sample and quotation.",
    boundary: "The images below are catalog selection references. They do not confirm permanent stock, fixed color codes, a specific surface process or screen-to-product color matching.",
    quote: "Request Quote",
    sample: "Request Samples",
    note: "Share the preferred visual reference, quantity by design, destination market and sample delivery country.",
    introEyebrow: "Selection path",
    introTitle: "How to Use This UV Marble Sheet Design Guide",
    introBody: "Importers, distributors, wholesalers and project buyers need more than a room-style image. A useful selection connects a visible design direction with the intended interior wall, required quantity and a sample that can be reviewed for the actual order.",
    steps: ["Define the intended interior wall", "Choose two or three visual directions", "Send the exact reference image", "Confirm current availability", "Review a physical sample"],
    related: "For confirmed commercial terms and the core product scope, review the UV Marble Sheet product page.",
    directionEyebrow: "Visual directions",
    directionTitle: "Five Design Directions in the Available References",
    directionBody: "These groups organize what is visibly shown in the available material. They are not a complete collection or a real-time inventory list.",
    choiceEyebrow: "Shortlisting",
    choiceTitle: "Compare Pattern Scale, Contrast and Intended Wall Composition",
    choiceBody: "Start by comparing what is visible. Avoid turning photography, filenames or catalog labels into unverified product performance or fixed production specifications.",
    choiceSteps: [
      ["Pattern scale", "Decide whether the visual direction should read as restrained, high-contrast or more expressive across the intended wall."],
      ["Light or dark direction", "Use the destination market and interior concept to reduce the shortlist before requesting samples."],
      ["Single-sheet or matched visual", "State whether the inquiry concerns a standalone reference or a coordinated visual sequence."],
      ["Physical review", "Use the applicable sample and approved order information for final color and appearance confirmation."],
    ],
    sampleEyebrow: "Catalog to sample",
    sampleTitle: "Turn a Visual Reference into a Sample-Ready Request",
    sampleBody: "Send a clear reference image or page, identify the intended use and allocate quantity by design. SINOQI then reviews current availability for the inquiry.",
    useTitle: "Use the references to",
    useItems: ["Identify a visual direction", "Discuss pattern scale and contrast", "Prepare a controlled shortlist", "Request current samples"],
    dontTitle: "Do not treat them as",
    dontItems: ["A permanent stock list", "A fixed color-code range", "Proof of a surface process", "A guarantee of screen color matching"],
    buyingEyebrow: "Confirmed buying terms",
    buyingTitle: "Commercial Starting Points for Sample and Quote Review",
    buyingTerms: [
      ["Starting MOQ", "100 pieces per design and color"],
      ["Lead time", "Around 30 days after deposit, subject to order configuration and production schedule"],
      ["Sample", "Free sample; buyer pays courier cost"],
      ["Packing", "Carton or shrink/plastic wrapping, confirmed per order"],
      ["OEM / customization", "Evaluated according to the buyer's request"],
    ],
    rfqEyebrow: "Prepare your inquiry",
    rfqTitle: "What to Send for a UV Marble Sheet Design Request",
    rfqBody: "A focused request helps the team review the visual direction and commercial configuration without assuming missing specifications.",
    rfqItems: ["Company and destination market", "Intended interior wall", "Preferred reference image or page", "Quantity by design and color", "Sample delivery country", "Packing preference", "OEM or customization request", "Target order timing"],
    faqEyebrow: "FAQ",
    faqTitle: "UV Marble Sheet Design and Color FAQ",
    finalTitle: "Move from a visual reference to a sample-ready request",
    finalBody: "Share the preferred design reference, quantity, destination and sample delivery country.",
    viewProduct: "View UV Marble Sheet",
  },
  es: {
    breadcrumb: "Diseños y colores de láminas UV",
    meta: "Guía de selección de láminas de mármol UV",
    hero: "Compare referencias visuales reales, prepare una selección controlada y confirme el diseño mediante una muestra actual y una cotización.",
    boundary: "Las imágenes siguientes son referencias de selección de catálogo. No confirman inventario permanente, códigos de color fijos, un proceso superficial específico ni coincidencia exacta entre pantalla y producto.",
    quote: "Solicitar cotización",
    sample: "Solicitar muestras",
    note: "Comparta la referencia visual, la cantidad por diseño, el mercado de destino y el país de entrega de la muestra.",
    introEyebrow: "Ruta de selección",
    introTitle: "Cómo utilizar esta guía de diseños de láminas de mármol UV",
    introBody: "Importadores, distribuidores, mayoristas y compradores de proyectos necesitan más que una imagen de ambiente. Una selección útil conecta la dirección visual con la pared interior prevista, la cantidad requerida y una muestra revisable para el pedido real.",
    steps: ["Defina la pared interior prevista", "Elija dos o tres líneas visuales", "Envíe la imagen exacta", "Confirme la disponibilidad actual", "Revise una muestra física"],
    related: "Para consultar condiciones comerciales confirmadas y el alcance del producto, revise la página de Láminas de Mármol UV.",
    directionEyebrow: "Líneas visuales",
    directionTitle: "Cinco líneas de diseño en las referencias disponibles",
    directionBody: "Estos grupos organizan lo que se muestra visualmente en el material disponible. No representan una colección completa ni inventario en tiempo real.",
    choiceEyebrow: "Preselección",
    choiceTitle: "Compare escala del patrón, contraste y composición de pared",
    choiceBody: "Comience comparando lo visible. No convierta fotografías, nombres de archivo o etiquetas de catálogo en prestaciones no verificadas o especificaciones fijas.",
    choiceSteps: [
      ["Escala del patrón", "Decida si la línea visual debe percibirse sobria, de alto contraste o más expresiva en la pared prevista."],
      ["Dirección clara u oscura", "Utilice el mercado de destino y el concepto interior para reducir la selección antes de pedir muestras."],
      ["Referencia individual o visual combinado", "Indique si la consulta se refiere a una sola referencia o a una secuencia visual coordinada."],
      ["Revisión física", "Utilice la muestra aplicable y la información aprobada del pedido para confirmar finalmente color y apariencia."],
    ],
    sampleEyebrow: "Del catálogo a la muestra",
    sampleTitle: "Convierta una referencia visual en una solicitud de muestra",
    sampleBody: "Envíe una imagen o página clara, indique el uso previsto y distribuya la cantidad por diseño. SINOQI revisará la disponibilidad actual para la consulta.",
    useTitle: "Utilice las referencias para",
    useItems: ["Identificar una línea visual", "Comparar escala y contraste", "Preparar una selección controlada", "Solicitar muestras actuales"],
    dontTitle: "No las considere",
    dontItems: ["Una lista de inventario permanente", "Una gama fija de códigos de color", "Prueba de un proceso superficial", "Garantía de coincidencia con el color de pantalla"],
    buyingEyebrow: "Condiciones de compra confirmadas",
    buyingTitle: "Puntos de partida comerciales para muestras y cotización",
    buyingTerms: [
      ["MOQ inicial", "100 piezas por diseño y color"],
      ["Plazo", "Aproximadamente 30 días desde el depósito, sujeto a la configuración y al plan de producción"],
      ["Muestra", "Muestra gratuita; el comprador paga la mensajería"],
      ["Embalaje", "Caja de cartón o plástico retráctil, confirmado por pedido"],
      ["OEM / personalización", "Se evalúa según la solicitud del comprador"],
    ],
    rfqEyebrow: "Prepare su consulta",
    rfqTitle: "Qué enviar para solicitar diseños de láminas de mármol UV",
    rfqBody: "Una solicitud concreta ayuda al equipo a revisar la dirección visual y la configuración comercial sin asumir especificaciones faltantes.",
    rfqItems: ["Empresa y mercado de destino", "Pared interior prevista", "Imagen o página de referencia", "Cantidad por diseño y color", "País de entrega de la muestra", "Preferencia de embalaje", "Solicitud OEM o de personalización", "Fecha objetivo del pedido"],
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Preguntas sobre diseños y colores de láminas de mármol UV",
    finalTitle: "Pase de una referencia visual a una solicitud lista para muestra",
    finalBody: "Comparta el diseño preferido, la cantidad, el destino y el país de entrega de la muestra.",
    viewProduct: "Ver láminas de mármol UV",
  },
} as const;

const faqs = {
  en: [
    ["What UV marble sheet design directions are shown in the available references?", "The available references show light marble-look, dark marble-look, gold-accent, continuous matched and more decorative visual directions. They are selection references, not a permanent inventory list."],
    ["Are all designs currently available?", "No permanent availability is assumed. Send the exact reference image or page so SINOQI can review the current option before sampling or quotation."],
    ["Can I use a catalog code as a fixed SINOQI color code?", "No. Visible catalog codes are reference identifiers only. The current design, sample and order details must be confirmed for each inquiry."],
    ["Will the physical sample exactly match my screen?", "An exact screen-to-sample match is not promised. Photography, lighting and screen settings can change perceived color, so use the applicable physical sample for final review."],
    ["Can I request several designs in one sample inquiry?", "Yes. Send a controlled shortlist with the intended market, quantity by design and sample destination so current availability can be reviewed."],
    ["What is the MOQ for each UV marble sheet design and color?", "The confirmed starting MOQ is 100 pieces per design and color. Final order conditions are confirmed during quotation."],
    ["Is the UV marble sheet sample free?", "The sample is free for an interested buying inquiry, and the buyer pays the courier cost."],
    ["What should a B2B design inquiry include?", "Include the company and market, intended interior wall, preferred reference image, quantity by design and color, destination, packing preference and any OEM requirement."],
  ],
  es: [
    ["¿Qué líneas de diseño muestran las referencias disponibles?", "Las referencias disponibles muestran apariencias de mármol claro y oscuro, detalles dorados, patrones continuos combinados y líneas decorativas. Son referencias de selección, no una lista de inventario permanente."],
    ["¿Están disponibles actualmente todos los diseños?", "No se presupone disponibilidad permanente. Envíe la imagen o página exacta para que SINOQI revise la opción actual antes de la muestra o cotización."],
    ["¿Puedo utilizar un código de catálogo como código fijo de color SINOQI?", "No. Los códigos visibles son únicamente identificadores de referencia. El diseño actual, la muestra y los datos del pedido deben confirmarse para cada consulta."],
    ["¿La muestra física coincidirá exactamente con mi pantalla?", "No se promete una coincidencia exacta. La fotografía, la iluminación y la pantalla pueden cambiar el color percibido; utilice la muestra física aplicable para la revisión final."],
    ["¿Puedo solicitar varios diseños en una misma consulta de muestras?", "Sí. Envíe una selección controlada con el mercado previsto, la cantidad por diseño y el destino de la muestra para revisar la disponibilidad actual."],
    ["¿Cuál es el MOQ para cada diseño y color?", "El MOQ inicial confirmado es de 100 piezas por diseño y color. Las condiciones finales se confirman durante la cotización."],
    ["¿La muestra de lámina de mármol UV es gratuita?", "La muestra es gratuita para una consulta de compra con interés real y el comprador paga la mensajería."],
    ["¿Qué debe incluir una consulta B2B de diseños?", "Incluya empresa y mercado, pared interior prevista, imagen preferida, cantidad por diseño y color, destino, embalaje y cualquier requisito OEM."],
  ],
} as const;

export function UvMarbleSheetDesignsColors({ locale, post }: { locale: Locale; post: BlogPost }) {
  const t = copy[locale];
  const localeFaqs = faqs[locale];
  const quoteHref = `${localizedPath("contact", locale)}#inquiry`;
  const canonicalUrl = new URL(localizedBlogPostPath(post.slug, locale), SITE_ORIGIN).toString();
  const absoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();
  const formattedDate = new Intl.DateTimeFormat(locale === "es" ? "es" : "en", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title[locale],
      description: post.description[locale],
      image: visuals.map(({ image }) => absoluteUrl(image)),
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      mainEntityOfPage: canonicalUrl,
      author: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
      publisher: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: locale === "es" ? "Inicio" : "Home", item: absoluteUrl(localizedPath("home", locale)) },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl(localizedPath("blog", locale)) },
        { "@type": "ListItem", position: 3, name: post.title[locale], item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: localeFaqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
      <article className="design-guide uv-design-guide">
        <header className="article-hero design-guide__hero">
          <div className="container article-hero__inner">
            <nav className="breadcrumb" aria-label={locale === "es" ? "Migas de pan" : "Breadcrumb"}>
              <Link href={localizedPath("home", locale)}>{locale === "es" ? "Inicio" : "Home"}</Link><span aria-hidden="true">/</span>
              <Link href={localizedPath("blog", locale)}>Blog</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{t.breadcrumb}</span>
            </nav>
            <div className="article-meta"><span>{t.meta}</span><time dateTime={post.publishedAt}>{formattedDate}</time><span>{post.readingTime[locale]}</span></div>
            <h1>{post.title[locale]}</h1>
            <p>{t.hero}</p>
            <p className="design-guide__hero-context">{t.boundary}</p>
            <div className="design-guide__actions"><Link className="button button--orange" href={quoteHref}>{t.sample}</Link><Link className="button button--outline-light" href={quoteHref}>{t.quote}</Link></div>
            <p className="design-guide__rfq-note">{t.note}</p>
          </div>
        </header>

        <div className="article-cover design-guide__cover">
          <div className="container design-guide__cover-grid">
            <div className="design-guide__cover-main uv-design-guide__reference-board"><Image src={visuals[0].image} alt={visuals[0].alt[locale]} fill priority sizes="(max-width: 900px) 100vw, 68vw" /></div>
            <div className="design-guide__cover-side uv-design-guide__reference-board"><Image src={visuals[2].image} alt={visuals[2].alt[locale]} fill priority sizes="(max-width: 900px) 100vw, 32vw" /></div>
          </div>
        </div>

        <div className="container design-guide__content">
          <section className="design-guide__intro" id="how-to-use">
            <p className="eyebrow">{t.introEyebrow}</p><h2>{t.introTitle}</h2><p>{t.introBody}</p>
            <ol className="design-guide__number-list">{t.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
            <p className="design-guide__related-copy"><Link href={localizedPath("uv-marble-sheet", locale)}>{t.related}</Link></p>
          </section>

          <section id="design-directions">
            <div className="design-guide__section-heading"><p className="eyebrow">{t.directionEyebrow}</p><h2>{t.directionTitle}</h2><p>{t.directionBody}</p></div>
            <div className="uv-design-guide__visual-grid">
              {visuals.map((visual) => <article key={visual.image}><div><Image src={visual.image} alt={visual.alt[locale]} fill sizes="(max-width: 700px) 100vw, 42vw" /></div><h3>{visual.title[locale]}</h3><p>{visual.body[locale]}</p></article>)}
            </div>
            <div className="article-note"><strong>{locale === "es" ? "Límite de evidencia" : "Evidence boundary"}</strong><p>{t.boundary}</p></div>
          </section>

          <section className="design-guide__sample-section" id="selection-guidance">
            <div className="design-guide__sample-media uv-design-guide__reference-board"><Image src={visuals[3].image} alt={visuals[3].alt[locale]} fill sizes="(max-width: 900px) 100vw, 46vw" /></div>
            <div><p className="eyebrow">{t.choiceEyebrow}</p><h2>{t.choiceTitle}</h2><p>{t.choiceBody}</p><div className="design-guide__steps">{t.choiceSteps.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div><div className="design-guide__inline-actions"><Link className="button button--orange" href={quoteHref}>{t.sample}</Link><Link className="text-link" href={localizedPath("applications", locale)}>{locale === "es" ? "Ver aplicaciones interiores" : "View interior applications"} <span aria-hidden="true">→</span></Link></div></div>
          </section>

          <section className="design-guide__catalog" id="catalog-to-sample">
            <div><p className="eyebrow">{t.sampleEyebrow}</p><h2>{t.sampleTitle}</h2><p>{t.sampleBody}</p><div className="design-guide__catalog-lists"><div><h3>{t.useTitle}</h3><ul>{t.useItems.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>{t.dontTitle}</h3><ul>{t.dontItems.map((item) => <li key={item}>{item}</li>)}</ul></div></div><div className="design-guide__inline-actions"><Link className="button button--orange" href={quoteHref}>{t.sample}</Link><Link className="text-link" href={localizedPath("uv-marble-sheet", locale)}>{t.viewProduct} <span aria-hidden="true">→</span></Link></div></div>
            <div className="design-guide__catalog-image uv-design-guide__reference-board"><Image src={visuals[4].image} alt={visuals[4].alt[locale]} fill sizes="(max-width: 900px) 100vw, 34vw" /></div>
          </section>

          <section className="design-guide__finish-section" id="buying-terms">
            <div className="design-guide__section-heading"><p className="eyebrow">{t.buyingEyebrow}</p><h2>{t.buyingTitle}</h2></div>
            <div className="design-guide__routes">{t.buyingTerms.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
          </section>

          <section className="design-guide__request" id="rfq">
            <div className="design-guide__request-copy"><p className="eyebrow">{t.rfqEyebrow}</p><h2>{t.rfqTitle}</h2><p>{t.rfqBody}</p><div className="design-guide__request-grid">{t.rfqItems.map((item) => <div key={item}><span aria-hidden="true">✓</span><p>{item}</p></div>)}</div><div className="design-guide__inline-actions"><Link className="button button--orange" href={quoteHref}>{t.quote}</Link><a className="button button--outline" href={company.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></div></div>
            <div className="design-guide__white-panel uv-design-guide__reference-board"><Image src={visuals[1].image} alt={visuals[1].alt[locale]} fill sizes="(max-width: 900px) 100vw, 35vw" /></div>
          </section>

          <section className="design-guide__faq" id="faq"><div className="design-guide__section-heading"><p className="eyebrow">{t.faqEyebrow}</p><h2>{t.faqTitle}</h2></div><div className="faq-list">{localeFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
        </div>
      </article>

      <section className="cta-band design-guide__final-cta"><div className="container cta-band__inner"><div><p className="eyebrow">UV Marble Sheet</p><h2>{t.finalTitle}</h2><p>{t.finalBody}</p></div><div className="cta-band__actions"><Link className="button button--light" href={localizedPath("uv-marble-sheet", locale)}>{t.viewProduct}</Link><Link className="button button--outline-light" href={quoteHref}>{t.quote}</Link></div></div></section>
    </>
  );
}
