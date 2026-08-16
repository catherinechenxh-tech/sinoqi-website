import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { localizedBlogPostPath } from "@/content/blog";
import { company, localizedPath, type Locale } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const images = {
  hero: "/assets/pvc-ceiling.jpg",
  production: "/assets/pvc-production.jpg",
  samples: "/assets/pvc-ceiling-design-samples.jpg",
};

const copy = {
  en: {
    eyebrow: "Bathroom PVC Ceiling Application Guide",
    heroBody: "Evaluate confirmed bathroom application conditions, product options and buying terms before adding PVC ceiling panels to your import or distribution program.",
    heroContext: "SINOQI PVC Ceiling can be used on standard bathroom ceilings and on the ceiling above a shower. Normal bathroom humidity, condensation and occasional splashes on the panel surface are included in the current product confirmation.",
    boundary: "This confirmation does not cover continuous direct water exposure or immersion, and it does not make the panels a waterproof system or waterproof barrier.",
    quote: "Request a Custom Quote",
    sample: "Request a Free Sample",
    catalog: "Download Catalog",
    rfqPrompt: "Tell us whether the panels are intended for a standard bathroom ceiling or the ceiling above a shower. Include the required width, length, quantity, finish reference, destination market and known installation conditions.",
    suitabilityTitle: "Can PVC Ceiling Panels Be Used in Bathrooms?",
    suitabilityBody: [
      "Yes. According to the current SINOQI product confirmation, PVC ceiling panels can be used on standard bathroom ceilings and on the ceiling above a shower.",
      "Normal bathroom water vapor, condensation and occasional splashes reaching the panel surface are within the currently confirmed application conditions. Building waterproofing, ventilation and project installation requirements remain separate considerations.",
      "For each inquiry, identify the exact use zone and describe the expected conditions. SINOQI can then review the requested product configuration against the information provided.",
    ],
    showerTitle: "Understanding Use Above a Shower",
    showerIntro: "“Above a shower” refers to use as a ceiling finish over the shower area under normal bathroom conditions. It does not mean that the panels serve as a waterproof membrane or replace the waterproofing required by the building or bathroom design.",
    includedTitle: "Current confirmation includes",
    included: ["Standard bathroom ceiling use", "Ceiling placement above a shower", "Normal bathroom humidity and water vapor", "Condensation under normal bathroom conditions", "Occasional splashes reaching the panel surface"],
    excludedTitle: "Current confirmation does not include",
    excluded: ["Continuous direct water exposure", "Immersion", "Use as a waterproof barrier", "Unverified specialist or industrial environments", "Any performance level requiring a product-specific test report"],
    showerClose: "If a project involves unusual exposure or persistent direct water contact, include those details in the RFQ for review before product selection.",
    optionsTitle: "Confirmed PVC Ceiling Panel Options",
    optionsIntro: "Use these confirmed starting points to prepare an inquiry. Final dimensions, finish availability and customization feasibility are reviewed for the selected product and order.",
    options: [
      ["Regular widths", "The regular widths currently published are 25 cm and 30 cm. Length, thickness and other dimensions are confirmed according to the specific product and order configuration."],
      ["Finish routes", "Confirmed finish routes include printing, hot stamping and laminated finishes. Catalog images are selection references, not a real-time inventory list."],
      ["OEM and private label", "SINOQI can review design, color, finish, packaging and private-label requirements. Final feasibility depends on the selected product and production review."],
    ],
    selectionCta: "Compare Designs & Finishes",
    confirmTitle: "What to Confirm Before Product Selection",
    confirmIntro: "A useful bathroom ceiling inquiry describes both the required product and the intended environment.",
    confirmGroups: [
      ["Exact use area", ["Standard bathroom ceiling", "Ceiling above a shower", "Any unusual or persistent water exposure that requires separate review"]],
      ["Project conditions", ["Substrate or supporting ceiling structure", "Ventilation and expected condensation", "Lighting, pipes and service openings", "Local installation requirements and responsible installer"]],
      ["Product configuration", ["Required width, length and thickness", "Preferred finish or visual reference", "Quantity by design and color", "Packaging and private-label requirements"]],
      ["Destination and buying program", ["Destination country or market", "Import, distribution, wholesale or dealer program", "Initial quantity and expected replenishment", "Buyer-specific labeling or packing requirements"]],
    ],
    installNotice: "SINOQI does not currently publish a complete approved installation manual for this PVC Ceiling range. Installation must be confirmed according to the project substrate, ceiling structure, local construction conditions and final product configuration.",
    termsTitle: "Bathroom PVC Ceiling Panel Buying Terms",
    terms: [
      ["MOQ", "The confirmed starting MOQ is 100 pieces per design and color. For a multi-design inquiry, provide the estimated quantity for each design and color."],
      ["Sample policy", "A free sample can be provided for an interested B2B buyer. The buyer covers the courier cost. Sample availability and configuration are reviewed for each request."],
      ["Packaging", "Confirmed options include carton and shrink wrap. Final packing, labeling and container loading are reviewed against the approved product mix, packaging and quantity."],
      ["Lead time", "The confirmed regular lead time is 30 days from receipt of deposit, subject to the approved product configuration and production plan."],
    ],
    installationTitle: "Installation Planning Boundaries",
    installationIntro: "Because there is no approved complete SINOQI installation manual for this range, this guide does not provide fixed technical installation parameters.",
    installationNot: ["Batten or framing spacing", "Fastener spacing", "Joint dimensions", "Substrate specifications", "Detailed installation steps", "An assumed accessory combination"],
    installationClose: "Importers and distributors should obtain the relevant project information before confirming the product configuration or issuing installation instructions to their customers.",
    cleaningTitle: "Basic Cleaning and Maintenance",
    cleaningIntro: "For routine cleaning, wipe the panel surface with a soft damp cloth.",
    cleaningSteps: ["Use a mild, non-abrasive cleaner if further cleaning is required.", "Test the cleaner first on a small, less visible area.", "Wipe gently with a soft cloth.", "Avoid abrasive pads.", "Avoid strong solvents."],
    cleaningBoundary: "This is conservative routine-cleaning guidance. It is not a statement of chemical resistance, stain resistance or maintenance-free performance.",
    rfqTitle: "How to Prepare a Bathroom PVC Ceiling RFQ",
    rfqIntro: "Provide the following information so SINOQI can review the intended application and selected product configuration:",
    rfqItems: ["Standard bathroom ceiling or ceiling above a shower", "Expected humidity, condensation and water contact", "Required width, length and thickness", "Preferred design or finish reference", "Quantity by design and color", "Available substrate, ceiling structure and ventilation information", "Packaging and private-label requirements", "Destination market and sample requirements", "Any unusual installation or exposure conditions"],
    rfqClose: "Technical or installation conditions outside the current confirmation must be assessed before the order is finalized.",
    faqTitle: "Bathroom PVC Ceiling Panel Buyer FAQ",
    continueTitle: "Continue Your Bathroom PVC Ceiling Evaluation",
    continueBody: "Review the core product, compare finish references or send the intended use zone, dimensions, quantity and known project conditions to SINOQI.",
    product: "View PVC Ceiling Panels",
    buyingGuide: "Read the Buying Guide",
    applications: "View Applications",
  },
  es: {
    eyebrow: "Guía de aplicaciones de paneles de techo PVC para baños",
    heroBody: "Evalúe las condiciones de aplicación, las opciones confirmadas y los términos de compra antes de incorporar paneles de techo PVC a su programa de importación o distribución.",
    heroContext: "Los paneles de techo PVC de SINOQI pueden utilizarse en techos de baños normales y en el techo situado sobre la zona de ducha. La humedad habitual, la condensación normal y las salpicaduras ocasionales sobre la superficie forman parte de la confirmación actual.",
    boundary: "Esta confirmación no incluye contacto directo y continuo con agua ni inmersión, y no convierte los paneles en un sistema o barrera de impermeabilización.",
    quote: "Solicitar una cotización personalizada",
    sample: "Solicitar una muestra gratuita",
    catalog: "Descargar catálogo",
    rfqPrompt: "Indique si los paneles se utilizarán en un techo de baño normal o sobre la zona de ducha. Incluya el ancho, largo, cantidad, acabado, mercado de destino y las condiciones de instalación que ya conozca.",
    suitabilityTitle: "¿Se pueden usar paneles de techo PVC en baños?",
    suitabilityBody: [
      "Sí. Según la confirmación actual de SINOQI, los paneles de techo PVC pueden utilizarse en techos de baños normales y en el techo situado sobre la zona de ducha.",
      "El vapor de agua habitual, la condensación normal y las salpicaduras ocasionales que lleguen a la superficie forman parte de las condiciones confirmadas. La impermeabilización del edificio, la ventilación y los requisitos de instalación siguen siendo aspectos separados del proyecto.",
      "En cada consulta, identifique la zona exacta de uso y describa las condiciones previstas. SINOQI podrá revisar la configuración solicitada a partir de esa información.",
    ],
    showerTitle: "Cómo interpretar el uso sobre la zona de ducha",
    showerIntro: "“Sobre la zona de ducha” significa que el panel se utiliza como acabado del techo ubicado sobre la ducha bajo condiciones normales de baño. No significa que funcione como membrana impermeable ni que reemplace la impermeabilización requerida por el diseño del baño o del edificio.",
    includedTitle: "La confirmación actual incluye",
    included: ["Uso en techos de baños normales", "Instalación en el techo situado sobre la ducha", "Humedad ambiental y vapor habituales", "Condensación en condiciones normales", "Salpicaduras ocasionales sobre la superficie"],
    excludedTitle: "La confirmación actual no incluye",
    excluded: ["Contacto directo y continuo con agua", "Inmersión", "Uso como barrera impermeable", "Ambientes industriales o especiales sin evaluación", "Niveles de desempeño que requieran un informe de ensayo específico"],
    showerClose: "Si el proyecto incluye exposición inusual o contacto persistente con agua, incluya esa información en la solicitud de cotización.",
    optionsTitle: "Opciones confirmadas de paneles de techo PVC",
    optionsIntro: "Utilice estos puntos de partida para preparar su consulta. Las dimensiones finales, la disponibilidad del acabado y la viabilidad de la personalización se revisan según el producto y el pedido.",
    options: [
      ["Anchos habituales", "Los anchos publicados actualmente son 25 cm y 30 cm. El largo, el espesor y las demás dimensiones se confirman según el producto específico y la configuración del pedido."],
      ["Tipos de acabado", "Los tipos confirmados incluyen impresión, estampado en caliente y laminado. Las imágenes del catálogo son referencias de selección, no un inventario actualizado."],
      ["OEM y marca privada", "SINOQI puede evaluar diseño, color, acabado, embalaje y marca privada. La viabilidad depende del producto seleccionado y de la revisión de producción."],
    ],
    selectionCta: "Comparar diseños y acabados",
    confirmTitle: "Qué debe confirmar antes de seleccionar el producto",
    confirmIntro: "Una consulta útil describe tanto el producto requerido como el entorno donde se utilizará.",
    confirmGroups: [
      ["Zona exacta de uso", ["Techo de baño normal", "Techo situado sobre una ducha", "Cualquier exposición inusual o persistente al agua que requiera revisión"]],
      ["Condiciones del proyecto", ["Base o estructura de soporte", "Ventilación y condensación prevista", "Luminarias, tuberías y aberturas de servicio", "Requisitos locales y responsable de la instalación"]],
      ["Configuración del producto", ["Ancho, largo y espesor requeridos", "Acabado o referencia visual", "Cantidad por diseño y color", "Requisitos de embalaje y marca privada"]],
      ["Mercado y programa de compra", ["País o mercado de destino", "Programa de importación, distribución, mayoreo o comercio", "Cantidad inicial y reposición prevista", "Etiquetado o embalaje específico del comprador"]],
    ],
    installNotice: "SINOQI no publica actualmente un manual completo y aprobado de instalación para esta línea. El método debe confirmarse según la base, la estructura del techo, las condiciones locales de construcción y la configuración final.",
    termsTitle: "Condiciones de compra",
    terms: [
      ["MOQ", "El MOQ inicial confirmado es de 100 piezas por diseño y color. Si incluye varios diseños, indique la cantidad estimada de cada diseño y color."],
      ["Política de muestras", "Se puede proporcionar una muestra gratuita a un comprador B2B interesado. El comprador asume el coste de mensajería. La disponibilidad y configuración se revisan para cada solicitud."],
      ["Embalaje", "Las opciones confirmadas incluyen caja de cartón y plástico retráctil. El embalaje, el etiquetado y la carga se revisan según la mezcla, el embalaje y la cantidad aprobados."],
      ["Plazo habitual", "El plazo habitual confirmado es de 30 días desde la recepción del depósito, sujeto a la configuración aprobada y al plan de producción."],
    ],
    installationTitle: "Límites de la información de instalación",
    installationIntro: "Como no existe un manual completo y aprobado de SINOQI para esta línea, esta guía no proporciona parámetros técnicos fijos de instalación.",
    installationNot: ["Separación entre perfiles o estructura", "Distancia entre fijaciones", "Dimensiones de juntas", "Parámetros de la base", "Pasos detallados de instalación", "Una combinación supuesta de accesorios"],
    installationClose: "Los importadores y distribuidores deben obtener la información pertinente antes de confirmar la configuración o emitir instrucciones de instalación a sus clientes.",
    cleaningTitle: "Limpieza y mantenimiento básicos",
    cleaningIntro: "Para la limpieza habitual, pase un paño suave y húmedo sobre la superficie.",
    cleaningSteps: ["Utilice un limpiador suave y no abrasivo si necesita una limpieza adicional.", "Pruébelo primero en una zona pequeña y poco visible.", "Limpie suavemente con un paño blando.", "Evite almohadillas abrasivas.", "Evite solventes fuertes."],
    cleaningBoundary: "Estas son recomendaciones conservadoras para la limpieza cotidiana. No constituyen una declaración de resistencia química, resistencia a manchas o funcionamiento sin mantenimiento.",
    rfqTitle: "Cómo preparar una solicitud de cotización para baños",
    rfqIntro: "Proporcione la siguiente información para que SINOQI pueda revisar la aplicación y la configuración seleccionada:",
    rfqItems: ["Techo de baño normal o techo sobre una ducha", "Humedad, condensación y contacto con agua previstos", "Ancho, largo y espesor requeridos", "Diseño o acabado preferido", "Cantidad por diseño y color", "Información disponible sobre base, estructura y ventilación", "Requisitos de embalaje y marca privada", "Mercado de destino y solicitud de muestras", "Condiciones inusuales de instalación o exposición"],
    rfqClose: "Las condiciones técnicas o de instalación que no estén cubiertas por la confirmación actual deben evaluarse antes de finalizar el pedido.",
    faqTitle: "Preguntas frecuentes para compradores",
    continueTitle: "Continúe su evaluación de paneles de techo PVC para baños",
    continueBody: "Consulte el producto principal, compare acabados o envíe a SINOQI la zona de uso, dimensiones, cantidad y condiciones conocidas del proyecto.",
    product: "Ver paneles de techo PVC",
    buyingGuide: "Leer la guía de compra",
    applications: "Ver aplicaciones",
  },
} as const;

const faqs = {
  en: [
    ["Can PVC ceiling panels be used in bathrooms?", "Yes. Based on the current SINOQI product confirmation, the panels can be used on standard bathroom ceilings. Normal bathroom humidity, condensation and occasional splashes on the panel surface are included in the confirmed application conditions."],
    ["Can SINOQI PVC ceiling panels be used above a shower?", "Yes. The current product confirmation includes use on the ceiling above a shower. This does not mean that the panels are approved for continuous direct water exposure, immersion or use as a waterproof barrier."],
    ["Are the panels a waterproofing system?", "No. The current application confirmation does not make the panels a waterproof system or waterproof barrier. Building waterproofing and project-specific construction requirements must be handled separately."],
    ["What regular widths are confirmed?", "The regular widths currently published are 25 cm and 30 cm. Length, thickness and other dimensions are confirmed according to the specific product and order configuration."],
    ["What is the MOQ?", "The confirmed starting MOQ is 100 pieces per design and color. The final product mix and order configuration are reviewed during quotation."],
    ["Can I request a sample?", "Yes. A free sample can be provided for an interested B2B buyer, and the buyer covers the courier cost. Sample availability and configuration are reviewed for each request."],
    ["What packaging is available?", "The confirmed packaging options are carton and shrink wrap. The final packing arrangement and container-loading plan depend on the approved product mix, packaging and quantity."],
    ["What is the regular lead time?", "The confirmed regular lead time is 30 days from receipt of deposit, subject to the final product configuration and production plan."],
    ["How should the panels be cleaned?", "For routine cleaning, use a soft damp cloth. If further cleaning is required, use a mild, non-abrasive cleaner and test it on a small area first. Avoid abrasive pads and strong solvents."],
    ["Does SINOQI provide fixed bathroom installation instructions?", "This page does not provide fixed installation parameters. Installation should be confirmed according to the project substrate, ceiling structure, local construction conditions and final product configuration."],
  ],
  es: [
    ["¿Se pueden usar paneles de techo PVC en baños?", "Sí. Según la confirmación actual de SINOQI, pueden utilizarse en techos de baños normales. El vapor de agua habitual, la condensación normal y las salpicaduras ocasionales forman parte de las condiciones confirmadas."],
    ["¿Se pueden instalar sobre la zona de ducha?", "Sí. La confirmación actual incluye el techo situado sobre la ducha. Esto no significa que estén aprobados para contacto directo y continuo con agua, inmersión o uso como barrera impermeable."],
    ["¿Los paneles forman un sistema de impermeabilización?", "No. La confirmación de la aplicación no convierte los paneles en un sistema o barrera de impermeabilización. La impermeabilización del edificio y los requisitos específicos del proyecto deben resolverse por separado."],
    ["¿Qué anchos habituales están confirmados?", "Los anchos habituales publicados son 25 cm y 30 cm. El largo, el espesor y las demás dimensiones se confirman según el producto y la configuración del pedido."],
    ["¿Cuál es el MOQ?", "El MOQ inicial confirmado es de 100 piezas por diseño y color. La mezcla final y la configuración se revisan durante la cotización."],
    ["¿Puedo solicitar una muestra?", "Sí. Se puede proporcionar una muestra gratuita a un comprador B2B interesado. El comprador asume el coste de mensajería y la configuración se revisa para cada solicitud."],
    ["¿Qué opciones de embalaje están disponibles?", "Las opciones confirmadas son caja de cartón y plástico retráctil. La configuración final y el plan de carga dependen de la mezcla, el embalaje y la cantidad aprobados."],
    ["¿Cuál es el plazo habitual?", "El plazo habitual confirmado es de 30 días desde la recepción del depósito, sujeto a la configuración final y al plan de producción."],
    ["¿Cómo deben limpiarse los paneles?", "Utilice un paño suave y húmedo. Si necesita una limpieza adicional, use un limpiador suave y no abrasivo y pruébelo primero en una zona pequeña. Evite almohadillas abrasivas y solventes fuertes."],
    ["¿SINOQI proporciona instrucciones fijas de instalación para baños?", "Esta página no proporciona parámetros fijos. La instalación debe confirmarse según la base, la estructura del techo, las condiciones locales y la configuración final."],
  ],
} as const;

export function PvcCeilingBathroomGuide({ locale, post }: { locale: Locale; post: BlogPost }) {
  const es = locale === "es";
  const t = copy[locale];
  const questions = faqs[locale];
  const quoteHref = `${localizedPath("contact", locale)}#inquiry`;
  const canonicalUrl = new URL(localizedBlogPostPath(post.slug, locale), SITE_ORIGIN).toString();
  const absoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();
  const formattedDate = new Intl.DateTimeFormat(es ? "es" : "en", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  const schemas = [
    {
      "@context": "https://schema.org", "@type": "Article", headline: post.title[locale], description: post.description[locale],
      image: [absoluteUrl(images.hero), absoluteUrl(images.production), absoluteUrl(images.samples)], datePublished: post.publishedAt,
      dateModified: post.publishedAt, mainEntityOfPage: canonicalUrl,
      author: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
      publisher: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: es ? "Inicio" : "Home", item: absoluteUrl(localizedPath("home", locale)) },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl(localizedPath("blog", locale)) },
        { "@type": "ListItem", position: 3, name: post.title[locale], item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(([question, answer]) => ({
        "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}
      <article className="bathroom-guide">
        <header className="article-hero bathroom-guide__hero">
          <div className="container article-hero__inner">
            <nav className="breadcrumb" aria-label={es ? "Migas de pan" : "Breadcrumb"}>
              <Link href={localizedPath("home", locale)}>{es ? "Inicio" : "Home"}</Link><span aria-hidden="true">/</span>
              <Link href={localizedPath("blog", locale)}>Blog</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{es ? "PVC para baños" : "Bathroom PVC ceiling"}</span>
            </nav>
            <div className="article-meta"><span>{t.eyebrow}</span><time dateTime={post.publishedAt}>{formattedDate}</time><span>{post.readingTime[locale]}</span></div>
            <h1>{post.title[locale]}</h1>
            <p>{t.heroBody}</p>
            <p className="bathroom-guide__hero-context">{t.heroContext}</p>
            <div className="bathroom-guide__hero-actions"><Link className="button button--orange" href={quoteHref}>{t.quote}</Link><Link className="button button--outline-light" href={quoteHref}>{t.sample}</Link></div>
            <p className="bathroom-guide__rfq-prompt">{t.rfqPrompt}</p>
          </div>
        </header>

        <div className="article-cover"><div className="container article-cover__frame"><Image src={images.hero} alt={post.coverAlt?.[locale] ?? ""} fill priority sizes="(max-width: 900px) 100vw, 1200px" /></div></div>

        <div className="container bathroom-guide__layout">
          <main className="bathroom-guide__body">
            <section id="bathroom-suitability">
              <p className="eyebrow">{es ? "Respuesta para compradores" : "Buyer answer"}</p><h2>{t.suitabilityTitle}</h2>
              {t.suitabilityBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="bathroom-guide__boundary"><strong>{es ? "Límite confirmado" : "Confirmed boundary"}</strong><p>{t.boundary}</p></div>
            </section>

            <section id="shower-area"><h2>{t.showerTitle}</h2><p>{t.showerIntro}</p>
              <div className="bathroom-guide__comparison"><div><h3>{t.includedTitle}</h3><ul>{t.included.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>{t.excludedTitle}</h3><ul>{t.excluded.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
              <p>{t.showerClose}</p>
            </section>

            <section id="confirmed-options"><h2>{t.optionsTitle}</h2><p>{t.optionsIntro}</p>
              <div className="bathroom-guide__cards">{t.options.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
              <div className="bathroom-guide__media"><Image src={images.samples} alt={es ? "Muestras reales de diseños de paneles de techo PVC para selección" : "Real PVC ceiling panel design samples for buyer selection"} fill sizes="(max-width: 900px) 100vw, 760px" /></div>
              <Link className="text-link" href={localizedBlogPostPath("pvc-ceiling-panel-designs-finishes", locale)}>{t.selectionCta} <span aria-hidden="true">→</span></Link>
            </section>

            <section id="selection-checklist"><h2>{t.confirmTitle}</h2><p>{t.confirmIntro}</p>
              <div className="bathroom-guide__checklist">{t.confirmGroups.map(([title, items], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
              <div className="article-note"><strong>{es ? "Información de instalación" : "Installation information"}</strong><p>{t.installNotice}</p></div>
            </section>

            <section id="buying-terms"><h2>{t.termsTitle}</h2><div className="bathroom-guide__terms">{t.terms.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>

            <section id="installation"><h2>{t.installationTitle}</h2><p>{t.installationIntro}</p><ul>{t.installationNot.map((item) => <li key={item}>{item}</li>)}</ul><p>{t.installationClose}</p>
              <div className="bathroom-guide__media bathroom-guide__media--production"><Image src={images.production} alt={es ? "Producción real de paneles de techo PVC SINOQI" : "SINOQI PVC ceiling panel factory production"} fill sizes="(max-width: 900px) 100vw, 760px" /></div>
            </section>

            <section id="cleaning"><h2>{t.cleaningTitle}</h2><p>{t.cleaningIntro}</p><ol>{t.cleaningSteps.map((item) => <li key={item}>{item}</li>)}</ol><div className="bathroom-guide__boundary"><strong>{es ? "Límite de esta recomendación" : "Guidance boundary"}</strong><p>{t.cleaningBoundary}</p></div></section>

            <section id="bathroom-rfq"><h2>{t.rfqTitle}</h2><p>{t.rfqIntro}</p><div className="bathroom-guide__rfq-list">{t.rfqItems.map((item) => <div key={item}><span aria-hidden="true">✓</span><p>{item}</p></div>)}</div><p>{t.rfqClose}</p>
              <div className="bathroom-guide__inline-actions"><Link className="button button--orange" href={quoteHref}>{t.quote}</Link><Link className="button button--outline" href={quoteHref}>{t.sample}</Link><Link className="text-link" href={localizedPath("download", locale)}>{t.catalog} <span aria-hidden="true">→</span></Link></div>
            </section>

            <section id="faq" className="bathroom-guide__faq"><p className="eyebrow">FAQ</p><h2>{t.faqTitle}</h2><div className="faq-list">{questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

            <section id="continue-evaluation"><h2>{t.continueTitle}</h2><p>{t.continueBody}</p><div className="bathroom-guide__resources"><Link href={localizedPath("pvc-ceiling-panel", locale)}>{t.product}<span aria-hidden="true">→</span></Link><Link href={localizedBlogPostPath("pvc-ceiling-panel-buying-guide", locale)}>{t.buyingGuide}<span aria-hidden="true">→</span></Link><Link href={localizedPath("applications", locale)}>{t.applications}<span aria-hidden="true">→</span></Link><Link href={localizedPath("download", locale)}>{t.catalog}<span aria-hidden="true">→</span></Link></div></section>
          </main>

          <aside className="article-aside bathroom-guide__aside">
            <div className="article-toc"><p className="eyebrow">{es ? "En esta guía" : "In this guide"}</p><ol><li><a href="#bathroom-suitability">{es ? "Uso en baños" : "Bathroom suitability"}</a></li><li><a href="#shower-area">{es ? "Zona de ducha" : "Shower area"}</a></li><li><a href="#confirmed-options">{es ? "Opciones confirmadas" : "Confirmed options"}</a></li><li><a href="#selection-checklist">{es ? "Datos del proyecto" : "Project information"}</a></li><li><a href="#buying-terms">{es ? "Condiciones de compra" : "Buying terms"}</a></li><li><a href="#installation">{es ? "Instalación" : "Installation"}</a></li><li><a href="#cleaning">{es ? "Limpieza" : "Cleaning"}</a></li><li><a href="#bathroom-rfq">RFQ</a></li><li><a href="#faq">FAQ</a></li></ol></div>
            <div className="article-cta"><p className="eyebrow">SINOQI</p><h2>{es ? "Prepare su consulta" : "Prepare your inquiry"}</h2><p>{es ? "Comparta la zona de uso, dimensiones, acabado, cantidad y condiciones conocidas." : "Share the use zone, dimensions, finish, quantity and known project conditions."}</p><Link className="button button--orange" href={quoteHref}>{t.quote}</Link><Link className="text-link" href={localizedPath("download", locale)}>{t.catalog} <span aria-hidden="true">→</span></Link></div>
          </aside>
        </div>
      </article>

      <section className="cta-band"><div className="container cta-band__inner"><div><p className="eyebrow">SINOQI</p><h2>{t.continueTitle}</h2><p>{t.continueBody}</p></div><div className="cta-band__actions"><Link className="button button--light" href={quoteHref}>{t.quote}</Link><Link className="button button--outline-light" href={quoteHref}>{t.sample}</Link></div></div></section>
    </>
  );
}
