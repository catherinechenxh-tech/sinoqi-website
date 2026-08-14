import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { localizedBlogPostPath } from "@/content/blog";
import { company, localizedPath, type Locale } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const designImages = {
  samples: "/assets/pvc-ceiling-design-samples.jpg",
  lightSamples: "/assets/pvc-ceiling-light-design-samples.jpg",
  woodProduction: "/assets/wood-look-pvc-ceiling-production.jpg",
  whitePanel: "/assets/white-pvc-ceiling-panel.jpg",
};

const content = {
  en: {
    eyebrow: "PVC Ceiling Design Guide",
    heroBody: "Compare confirmed finish routes and visual design directions before preparing samples for your import, wholesale or distribution program.",
    heroContext: "SINOQI’s existing catalogs, product samples and factory images show white, light-neutral, wood-look, stone-look, decorative and dark-neutral visual references. This page helps B2B buyers organize those references into a practical sample request. It is not a live inventory list.",
    rfqNote: "Share your market, preferred design direction, catalog image or reference, required width and estimated quantity. SINOQI will review the current options for your request.",
    selectionNotice: "Designs shown in catalogs and images are selection references. Current availability, finish route, color confirmation and sample status are reviewed for each request.",
    howTitle: "How to Use This PVC Ceiling Design Guide",
    howIntro: "Selecting a PVC ceiling range involves more than choosing an image from a catalog. Importers, distributors, wholesalers and building-material dealers also need to confirm the finish route, product format and sample status for the intended buying program.",
    howSteps: [
      "Compare the visual directions shown in SINOQI materials.",
      "Understand the three confirmed finish routes.",
      "Shortlist designs or visual references.",
      "Prepare a clear sample request.",
      "Confirm current availability and the final selection with SINOQI.",
    ],
    howLinks: <>For full product and commercial information, review the <Link href={localizedPath("pvc-ceiling-panel", "en")}>PVC ceiling panel product page</Link>. For MOQ, packing, lead time and quotation preparation, use the <Link href={localizedBlogPostPath("pvc-ceiling-panel-buying-guide", "en")}>PVC Ceiling Panel Buying Guide</Link>.</>,
    directionsTitle: "PVC Ceiling Design Directions Shown in Available Materials",
    directionsIntro: "The following groups describe visual directions seen in existing SINOQI catalogs, samples and product images. They do not represent a complete or permanently available collection.",
    directions: [
      ["White and light neutral", "Existing samples include white and light-neutral references with plain or low-contrast appearances. Final color, panel format and sample status are confirmed for each request."],
      ["Wood-look and wood-grain", "SINOQI materials show light, medium and dark wood-look patterns. These are visual designs applied to PVC ceiling panels; the panels are not represented as wood products."],
      ["Stone-look and marble-look", "Existing materials include patterns with stone- or marble-like visual characteristics. These terms describe appearance only and do not mean that the panel contains natural stone or marble."],
      ["Geometric and decorative patterns", "The available materials also show line-based, geometric and ornamental visual references. Images are selection references and are not presented as customer projects."],
      ["Dark-neutral designs", "Existing samples include dark brown, dark grey and black visual references. Final color, pattern, finish route and availability are confirmed for the specific request."],
    ],
    routesTitle: "Confirmed PVC Ceiling Panel Finish Routes",
    routesIntro: "SINOQI’s PVC ceiling materials identify three confirmed finish routes. Each design and its current status still require order-specific review.",
    routes: [
      ["Printing", "Printing is a confirmed finish route shown in the available PVC ceiling materials. The exact design, color, width and current availability associated with a printed reference must be reviewed for the order."],
      ["Hot Stamping", "Hot stamping is a confirmed finish route shown in SINOQI materials. A catalog image alone does not confirm that a specific design uses this route or is currently available."],
      ["Laminated", "Laminated is a confirmed finish route shown in the available materials. The exact reference, design, color and current order status are reviewed for each request."],
    ],
    routesBoundary: "Printing, hot stamping and laminated identify confirmed finish routes only. They do not establish unverified surface properties or performance levels.",
    sampleTitle: "How to Build a PVC Ceiling Sample Selection",
    sampleIntro: "A focused sample request is more useful than asking for an unspecified selection of every design.",
    sampleSteps: [
      ["Define the buying program", "Tell SINOQI whether the samples support an importer’s initial range, a distributor or wholesaler collection, a building-material dealer’s selection, or a range-extension review."],
      ["Select the visual direction", "Choose one or more starting directions: white or light neutral, wood-look, stone-look, decorative, or dark neutral."],
      ["Attach a clear reference", "Send a catalog page, screenshot, visible reference or buyer-provided image. A reference helps identify the request but does not guarantee exact reproduction or current availability."],
      ["Include the order context", "Provide your company and market, intended interior ceiling use, preferred width, estimated quantity by design and color, sample destination and any private-label requirement for review."],
      ["Confirm through a sample", "Free samples are available for qualified B2B inquiries. Courier costs are paid by the buyer. Final specifications and commercial terms remain subject to the approved quotation and order configuration."],
    ],
    catalogTitle: "Catalog References and Current Availability",
    catalogIntro: "The SINOQI bilingual catalog contains product families, design images and visual references that can help buyers prepare an initial selection.",
    catalogUseTitle: "Use the catalog to",
    catalogUse: ["Identify a visual direction", "Share a recognizable image or reference", "Prepare a shortlist for sample review", "Start a discussion about finish and product configuration"],
    catalogNotTitle: "Do not treat the catalog as",
    catalogNot: ["A real-time inventory list", "A guarantee that every design can be sampled", "Confirmation that every reference is currently in production", "Proof that a reference uses a particular finish route", "A guarantee of exact color matching from a screen or photograph"],
    requestTitle: "What to Include in Your Sample Request",
    requestIntro: "If a detail has not yet been decided, identify it as open for discussion instead of assuming a standard option.",
    requestItems: ["Company name", "Destination country or market", "Buyer type or sales channel", "Intended interior ceiling application", "Preferred design direction", "Catalog page, image or visual reference", "Preferred panel width", "Estimated quantity by design and color", "Sample delivery country", "Any OEM, private-label or packing requirement for review"],
    faqTitle: "PVC Ceiling Design and Finish FAQ",
    continueTitle: "Continue Your PVC Ceiling Evaluation",
    continueBody: "Prepare a visual shortlist here, then confirm the product and commercial configuration through the relevant SINOQI resources.",
    sampleCta: "Request Samples",
    directionCta: "Request Samples by Design Direction",
    catalogCta: "Download Catalog",
    quoteCta: "Request a Quote",
    productCta: "View PVC Ceiling Panels",
    guideCta: "Read the Buying Guide",
  },
  es: {
    eyebrow: "Guía de diseños para paneles de techo PVC",
    heroBody: "Compare los tipos de acabado confirmados y las líneas visuales disponibles antes de preparar una solicitud de muestras para su programa de importación, distribución o venta mayorista.",
    heroContext: "Los catálogos, las muestras y las imágenes de fábrica de SINOQI muestran referencias visuales en blanco, tonos claros, diseños efecto madera, efecto piedra, patrones decorativos y tonos oscuros. Esta página ayuda al comprador B2B a organizar esas referencias para solicitar muestras. No es una lista de inventario en tiempo real.",
    rfqNote: "Indique su mercado, la línea visual que busca, una imagen o referencia del catálogo, el ancho requerido y la cantidad estimada. SINOQI revisará las opciones vigentes para su solicitud.",
    selectionNotice: "Los diseños mostrados son referencias para la selección. La disponibilidad, el tipo de acabado, el color y la muestra se confirman para cada solicitud.",
    howTitle: "Cómo utilizar esta guía de diseños para paneles de techo PVC",
    howIntro: "Elegir una línea de paneles de PVC para techo requiere más que seleccionar una imagen del catálogo. Los importadores, distribuidores, mayoristas y comercios de materiales también necesitan confirmar el tipo de acabado, el formato del producto y la situación de la muestra.",
    howSteps: [
      "Comparar las líneas visuales que aparecen en los materiales de SINOQI.",
      "Conocer los tres tipos de acabado confirmados.",
      "Preparar una selección inicial de diseños o referencias visuales.",
      "Enviar una solicitud de muestras clara.",
      "Confirmar con SINOQI la disponibilidad y la selección final.",
    ],
    howLinks: <>Para revisar la información general del producto y sus condiciones comerciales, consulte la página de <Link href={localizedPath("pvc-ceiling-panel", "es")}>paneles de techo PVC</Link>. Para MOQ, embalaje, plazo y preparación de la cotización, consulte la <Link href={localizedBlogPostPath("pvc-ceiling-panel-buying-guide", "es")}>Guía de compra de paneles de techo PVC</Link>.</>,
    directionsTitle: "Líneas de diseño visibles en los materiales disponibles",
    directionsIntro: "Los siguientes grupos describen líneas visuales que aparecen en catálogos, muestras e imágenes existentes de SINOQI. No representan una colección completa ni permanentemente disponible.",
    directions: [
      ["Blanco y tonos claros", "Las muestras existentes incluyen referencias en blanco y tonos claros con apariencias lisas o de bajo contraste. El color final, el formato y la disponibilidad de la muestra se confirman para cada solicitud."],
      ["Efecto madera y veta de madera", "Los materiales de SINOQI muestran patrones de madera en tonos claros, medios y oscuros. Son diseños visuales aplicados a paneles de techo PVC; no se presentan como productos de madera."],
      ["Efecto piedra o mármol", "Los materiales existentes incluyen patrones con apariencia visual de piedra o mármol. Estas expresiones describen solamente el diseño y no significan que el panel contenga piedra natural o mármol."],
      ["Patrones geométricos y decorativos", "Los materiales disponibles también muestran líneas, figuras geométricas y patrones ornamentales. Las imágenes son referencias de selección y no se presentan como proyectos de clientes."],
      ["Diseños en tonos oscuros", "Las muestras existentes incluyen referencias en marrón oscuro, gris oscuro y negro. El color, el patrón, el tipo de acabado y la disponibilidad se confirman según la solicitud."],
    ],
    routesTitle: "Tipos de acabado confirmados para paneles de techo PVC",
    routesIntro: "Los materiales de paneles de techo PVC de SINOQI identifican tres tipos de acabado confirmados. Cada diseño y su situación actual requieren una revisión específica.",
    routes: [
      ["Impresión", "La impresión es un tipo de acabado confirmado en los materiales disponibles. El diseño, el color, el ancho y la disponibilidad actual de cada referencia deben revisarse para el pedido."],
      ["Estampado en caliente", "El estampado en caliente es un tipo de acabado confirmado en los materiales de SINOQI. Una imagen del catálogo no confirma por sí sola el tipo de acabado ni la disponibilidad actual."],
      ["Laminado", "El laminado es un tipo de acabado confirmado en los materiales disponibles. La referencia, el diseño, el color y la situación del pedido se revisan para cada solicitud."],
    ],
    routesBoundary: "Impresión, estampado en caliente y laminado identifican únicamente tipos de acabado confirmados. Estos términos no establecen propiedades de superficie ni niveles de rendimiento que no estén documentados.",
    sampleTitle: "Cómo preparar una selección de muestras",
    sampleIntro: "Una solicitud enfocada es más útil que pedir una selección indefinida de todos los diseños.",
    sampleSteps: [
      ["Defina el programa de compra", "Indique si las muestras se evalúan para la línea inicial de un importador, la colección de un distribuidor o mayorista, la selección de un comercio de materiales o una ampliación de surtido."],
      ["Seleccione la línea visual", "Elija una o más direcciones iniciales: blanco o tono claro, efecto madera, efecto piedra, decorativo o tono oscuro."],
      ["Adjunte una referencia clara", "Envíe una página o captura del catálogo, una referencia visible o una imagen proporcionada por el comprador. La referencia no garantiza una reproducción exacta ni confirma la disponibilidad."],
      ["Incluya el contexto del pedido", "Indique empresa y mercado, uso previsto en un techo interior, ancho preferido, cantidad estimada por diseño y color, destino de la muestra y cualquier requisito de marca privada que deba revisarse."],
      ["Confirme mediante una muestra", "Hay muestras gratuitas disponibles para consultas B2B calificadas. El costo de mensajería corre por cuenta del comprador. Las especificaciones y condiciones comerciales finales dependen de la cotización y de la configuración aprobada."],
    ],
    catalogTitle: "Referencias del catálogo y disponibilidad actual",
    catalogIntro: "El catálogo bilingüe de SINOQI contiene familias de productos, imágenes de diseños y referencias visuales que ayudan al comprador a preparar una selección inicial.",
    catalogUseTitle: "Utilice el catálogo para",
    catalogUse: ["Identificar una línea visual", "Compartir una imagen o referencia reconocible", "Preparar una selección corta para revisar muestras", "Iniciar una consulta sobre acabado y configuración"],
    catalogNotTitle: "No interprete el catálogo como",
    catalogNot: ["Una lista de inventario en tiempo real", "Una garantía de que todos los diseños pueden enviarse como muestra", "Confirmación de que todas las referencias están actualmente en producción", "Prueba de que una referencia utiliza un tipo específico de acabado", "Garantía de coincidencia exacta del color visto en pantalla o fotografía"],
    requestTitle: "Qué incluir en la solicitud de muestras",
    requestIntro: "Si todavía no ha definido algún dato, indíquelo como un punto abierto para evaluación, en lugar de asumir una opción estándar.",
    requestItems: ["Nombre de la empresa", "País o mercado de destino", "Tipo de comprador o canal de venta", "Aplicación prevista en un techo interior", "Línea visual preferida", "Página, imagen o referencia del catálogo", "Ancho preferido", "Cantidad estimada por diseño y color", "País de entrega de la muestra", "Cualquier requisito de OEM, marca privada o embalaje que deba revisarse"],
    faqTitle: "Preguntas sobre diseños y acabados de paneles de techo PVC",
    continueTitle: "Continúe la evaluación de sus paneles de techo PVC",
    continueBody: "Prepare aquí una selección visual y confirme después el producto y la configuración comercial mediante los recursos correspondientes de SINOQI.",
    sampleCta: "Solicitar muestras",
    directionCta: "Solicitar muestras por línea de diseño",
    catalogCta: "Descargar catálogo",
    quoteCta: "Solicitar cotización",
    productCta: "Ver paneles de techo PVC",
    guideCta: "Leer la guía de compra",
  },
} as const;

const faqs = {
  en: [
    ["Are all PVC ceiling designs shown in the catalog in stock?", "No. Designs shown in catalogs and images are selection references. Current availability, finish route, color confirmation and sample status are reviewed for each request."],
    ["Which PVC ceiling finish routes are confirmed?", "The confirmed finish routes are printing, hot stamping and laminated. The finish route associated with a particular design or catalog image must be confirmed by SINOQI."],
    ["How should I identify the design I want?", "Send a catalog page, screenshot, visible reference or another clear visual reference. Also include the preferred design direction, width, destination market and estimated quantity by design and color."],
    ["Can I request white and wood-look samples in the same inquiry?", "You can ask SINOQI to review references from more than one design direction. The team will confirm which samples are currently available for the request."],
    ["Can SINOQI review a design reference provided by my company?", "Yes. Design, color, finish and private-label requirements can be evaluated against the request. Evaluation does not guarantee that every submitted reference can be produced."],
    ["Will the physical sample exactly match the color shown on my screen?", "An exact screen-to-sample color match is not promised. Catalog images and screen colors are visual references; the final selection should be reviewed through the applicable sample and confirmed order information."],
    ["What is the sample policy?", "Free samples are available for qualified B2B inquiries. Courier costs are paid by the buyer. Sample references and current sample status are confirmed for each request."],
    ["Where can I find MOQ, packaging and lead-time information?", "Review the PVC Ceiling Panel Buying Guide and the main PVC Ceiling Panels page. These details are confirmed against the final product and order configuration."],
  ],
  es: [
    ["¿Todos los diseños del catálogo están disponibles en inventario?", "No. Los diseños mostrados son referencias para la selección. La disponibilidad, el tipo de acabado, el color y la muestra se confirman para cada solicitud."],
    ["¿Qué tipos de acabado están confirmados?", "Los tipos de acabado confirmados son impresión, estampado en caliente y laminado. SINOQI debe confirmar qué tipo de acabado corresponde a cada diseño o imagen del catálogo."],
    ["¿Cómo debo identificar el diseño que necesito?", "Envíe una página o captura del catálogo, una referencia visible u otra imagen clara. Incluya también la línea de diseño, el ancho preferido, el mercado de destino y la cantidad estimada por diseño y color."],
    ["¿Puedo solicitar muestras blancas y efecto madera en una misma consulta?", "Puede pedir la revisión de referencias de más de una línea visual. El equipo confirmará cuáles muestras están disponibles para esa solicitud."],
    ["¿SINOQI puede evaluar una referencia de diseño proporcionada por mi empresa?", "Sí. El diseño, el color, el acabado y los requisitos de marca privada pueden evaluarse según la solicitud. La evaluación no garantiza que todas las referencias puedan producirse."],
    ["¿La muestra física tendrá exactamente el mismo color que aparece en mi pantalla?", "No se promete una coincidencia exacta entre la pantalla y la muestra. Las imágenes del catálogo y los colores en pantalla son referencias visuales; la selección final debe revisarse mediante la muestra aplicable y la información confirmada del pedido."],
    ["¿Cuál es la política de muestras?", "Hay muestras gratuitas disponibles para consultas B2B calificadas. El costo de mensajería corre por cuenta del comprador. Las referencias y la disponibilidad de la muestra se confirman para cada solicitud."],
    ["¿Dónde puedo consultar MOQ, embalaje y plazo?", "Consulte la Guía de compra de paneles de techo PVC y la página principal de paneles de techo PVC. Estos datos se confirman según el producto y la configuración final del pedido."],
  ],
} as const;

export function PvcCeilingDesignsFinishes({ locale, post }: { locale: Locale; post: BlogPost }) {
  const es = locale === "es";
  const copy = content[locale];
  const questions = faqs[locale];
  const quoteHref = `${localizedPath("contact", locale)}#inquiry`;
  const canonicalUrl = new URL(localizedBlogPostPath(post.slug, locale), SITE_ORIGIN).toString();
  const absoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();
  const formattedDate = new Intl.DateTimeFormat(es ? "es" : "en", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    description: post.description[locale],
    image: [absoluteUrl(designImages.samples), absoluteUrl(designImages.lightSamples), absoluteUrl(designImages.woodProduction)],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
    publisher: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: es ? "Inicio" : "Home", item: absoluteUrl(localizedPath("home", locale)) },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl(localizedPath("blog", locale)) },
      { "@type": "ListItem", position: 3, name: post.title[locale], item: canonicalUrl },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      {[articleSchema, breadcrumbSchema, faqSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
      <article className="design-guide">
        <header className="article-hero design-guide__hero">
          <div className="container article-hero__inner">
            <nav className="breadcrumb" aria-label={es ? "Migas de pan" : "Breadcrumb"}>
              <Link href={localizedPath("home", locale)}>{es ? "Inicio" : "Home"}</Link><span aria-hidden="true">/</span>
              <Link href={localizedPath("blog", locale)}>Blog</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{es ? "Diseños y acabados" : "Designs & finishes"}</span>
            </nav>
            <div className="article-meta"><span>{copy.eyebrow}</span><time dateTime={post.publishedAt}>{formattedDate}</time><span>{post.readingTime[locale]}</span></div>
            <h1>{post.title[locale]}</h1>
            <p>{copy.heroBody}</p>
            <p className="design-guide__hero-context">{copy.heroContext}</p>
            <div className="design-guide__actions">
              <Link className="button button--orange" href={quoteHref}>{copy.sampleCta}</Link>
              <Link className="button button--outline-light" href={localizedPath("download", locale)}>{copy.catalogCta}</Link>
              <Link className="text-link text-link--light" href={localizedPath("pvc-ceiling-panel", locale)}>{copy.productCta} <span aria-hidden="true">→</span></Link>
            </div>
            <p className="design-guide__rfq-note">{copy.rfqNote}</p>
          </div>
        </header>

        <div className="article-cover design-guide__cover">
          <div className="container design-guide__cover-grid">
            <div className="design-guide__cover-main"><Image src={designImages.samples} alt={post.coverAlt?.[locale] ?? ""} fill priority sizes="(max-width: 900px) 100vw, 68vw" /></div>
            <div className="design-guide__cover-side"><Image src={designImages.lightSamples} alt={es ? "Muestras de paneles de techo PVC blancos, con veta clara y patrones decorativos" : "White, light wood-grain and patterned PVC ceiling panel samples"} fill priority sizes="(max-width: 900px) 100vw, 32vw" /></div>
          </div>
        </div>

        <div className="container design-guide__content">
          <section className="design-guide__intro" id="how-to-use">
            <p className="eyebrow">{es ? "Guía de selección B2B" : "B2B selection guide"}</p>
            <h2>{copy.howTitle}</h2>
            <p>{copy.howIntro}</p>
            <ol className="design-guide__number-list">{copy.howSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
            <div className="article-note"><strong>{es ? "Aviso importante para la selección" : "Important selection notice"}</strong><p>{copy.selectionNotice}</p></div>
            <p className="design-guide__related-copy">{copy.howLinks}</p>
          </section>

          <section id="design-directions">
            <div className="design-guide__section-heading"><p className="eyebrow">{es ? "Direcciones visuales" : "Visual directions"}</p><h2>{copy.directionsTitle}</h2><p>{copy.directionsIntro}</p></div>
            <div className="design-guide__directions">
              {copy.directions.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
            </div>
            <div className="design-guide__single-action"><Link className="button button--orange" href={quoteHref}>{copy.directionCta}</Link></div>
          </section>

          <section id="finish-routes" className="design-guide__finish-section">
            <div className="design-guide__section-heading"><p className="eyebrow">{es ? "Acabados confirmados" : "Confirmed finishes"}</p><h2>{copy.routesTitle}</h2><p>{copy.routesIntro}</p></div>
            <div className="design-guide__routes">{copy.routes.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
            <div className="article-note"><strong>{es ? "Límite de la información" : "Information boundary"}</strong><p>{copy.routesBoundary}</p></div>
          </section>

          <section id="sample-selection" className="design-guide__sample-section">
            <div className="design-guide__sample-media"><Image src={designImages.woodProduction} alt={es ? "Paneles de techo PVC efecto madera durante la producción" : "Wood-look PVC ceiling panels during factory production"} fill sizes="(max-width: 900px) 100vw, 46vw" /></div>
            <div><p className="eyebrow">{es ? "Método de selección" : "Selection method"}</p><h2>{copy.sampleTitle}</h2><p>{copy.sampleIntro}</p>
              <div className="design-guide__steps">{copy.sampleSteps.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
              <div className="design-guide__inline-actions"><Link className="button button--orange" href={quoteHref}>{copy.sampleCta}</Link><Link className="text-link" href={localizedBlogPostPath("pvc-ceiling-panel-buying-guide", locale)}>{copy.guideCta} <span aria-hidden="true">→</span></Link></div>
            </div>
          </section>

          <section id="catalog-references" className="design-guide__catalog">
            <div><p className="eyebrow">{es ? "Referencia visual" : "Visual reference"}</p><h2>{copy.catalogTitle}</h2><p>{copy.catalogIntro}</p>
              <div className="design-guide__catalog-lists"><div><h3>{copy.catalogUseTitle}</h3><ul>{copy.catalogUse.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>{copy.catalogNotTitle}</h3><ul>{copy.catalogNot.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
              <div className="article-note"><strong>{es ? "Límite de la selección" : "Selection boundary"}</strong><p>{copy.selectionNotice}</p></div>
              <Link className="button button--outline" href={localizedPath("download", locale)}>{copy.catalogCta}</Link>
            </div>
            <div className="design-guide__catalog-image"><Image src="/assets/catalog-cover.jpg" alt={es ? "Portada del catálogo bilingüe de paneles PVC y WPC de SINOQI" : "Cover of the SINOQI bilingual PVC and WPC panel catalog"} fill sizes="(max-width: 900px) 100vw, 34vw" /></div>
          </section>

          <section id="sample-request" className="design-guide__request">
            <div className="design-guide__request-copy"><p className="eyebrow">{es ? "Prepare su consulta" : "Prepare your inquiry"}</p><h2>{copy.requestTitle}</h2><p>{copy.requestIntro}</p><div className="design-guide__request-grid">{copy.requestItems.map((item) => <div key={item}><span aria-hidden="true">✓</span><p>{item}</p></div>)}</div><div className="design-guide__inline-actions"><Link className="button button--orange" href={quoteHref}>{copy.sampleCta}</Link><Link className="button button--outline" href={quoteHref}>{copy.quoteCta}</Link></div></div>
            <div className="design-guide__white-panel"><Image src={designImages.whitePanel} alt={es ? "Detalle de un panel de techo PVC blanco" : "White PVC ceiling panel product close-up"} fill sizes="(max-width: 900px) 100vw, 35vw" /></div>
          </section>

          <section id="faq" className="design-guide__faq">
            <div className="design-guide__section-heading"><p className="eyebrow">FAQ</p><h2>{copy.faqTitle}</h2></div>
            <div className="faq-list">{questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </section>
        </div>
      </article>

      <section className="cta-band design-guide__final-cta">
        <div className="container cta-band__inner"><div><p className="eyebrow">SINOQI</p><h2>{copy.continueTitle}</h2><p>{copy.continueBody}</p></div><div className="cta-band__actions"><Link className="button button--light" href={quoteHref}>{copy.sampleCta}</Link><Link className="button button--outline-light" href={localizedPath("pvc-ceiling-panel", locale)}>{copy.productCta}</Link></div></div>
      </section>
    </>
  );
}
