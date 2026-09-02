import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { localizedBlogPostPath } from "@/content/blog";
import { asset, company, localizedPath, type Locale } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";
import { createStructuredDataTopic } from "@/lib/structured-data";

const sourceLinks = [
  {
    label: {
      en: "US Forest Service: Wood thermoplastic composites",
      es: "Servicio Forestal de EE. UU.: compuestos de madera y termoplástico",
    },
    href: "https://research.fs.usda.gov/treesearch/22052",
  },
  {
    label: {
      en: "US Forest Service: Wood-plastic composite materials and processing",
      es: "Servicio Forestal de EE. UU.: materiales y procesamiento de compuestos madera-plástico",
    },
    href: "https://research.fs.usda.gov/treesearch/37349",
  },
] as const;

const content = {
  en: {
    home: "Home",
    breadcrumb: "What is a WPC wall panel?",
    meta: "WPC Wall Panel Product Guide",
    heroBody: "Understand the category meaning, separate it from product-specific claims, and prepare the details needed to evaluate an indoor WPC wall panel order.",
    productCta: "View WPC Wall Panels",
    quoteCta: "Request Quote",
    sampleCta: "Request Samples",
    whatsappCta: "Discuss on WhatsApp",
    directEyebrow: "Direct answer",
    directTitle: "A WPC wall panel is a decorative panel in the wood-plastic composite category",
    directLabel: "What WPC means at category level",
    directText: "WPC commonly means wood-plastic composite: a composite that combines wood-derived material, such as flour or fiber, with a polymer matrix. The exact formulation and panel construction vary by product.",
    scopeText: "This category definition comes from independent industry research. It does not certify a SINOQI item or establish the exact formulation, construction or performance of a selected profile.",
    categoryEyebrow: "Definition boundary",
    categoryTitle: "What the WPC label tells a buyer—and what it does not",
    canTitle: "The category can establish",
    canItems: [
      "WPC refers to a wood-plastic composite product category",
      "Wood-derived material and a polymer are part of the broad category definition",
      "A selected wall panel still needs its own product confirmation",
    ],
    cannotTitle: "The category does not establish",
    cannotItems: [
      "One universal formulation, ratio or construction",
      "One fixed profile, dimension, surface or color",
      "Any product-specific performance result or market document",
    ],
    practical: "For sourcing, the useful question is not only “What is WPC?” but “Which confirmed profile, finish and order configuration are we evaluating?”",
    formEyebrow: "Panel form",
    formTitle: "Profile and surface are separate selection decisions",
    formBody: "A fluted wall-panel profile creates a visible repeat, relief and shadow pattern. Surface appearance then adds the selected wood-look, neutral or solid-color direction. Buyers should identify both the profile and visual reference before requesting a sample.",
    cards: [
      ["01", "Profile", "Use the current catalog or a clear product reference to identify the intended section."],
      ["02", "Surface", "Select a visual direction, then confirm the current finish against that profile."],
      ["03", "Sample", "Use a physical sample to review the applicable profile and appearance before ordering."],
      ["04", "Order", "Confirm quantity, packing and customization in the quotation for the selected combination."],
    ],
    indoorEyebrow: "Category separation",
    indoorTitle: "Indoor decorative panels and outdoor cladding are different sourcing intents",
    indoorBody: "This guide supports the indoor decorative WPC wall panel category. Buyers sourcing exterior wall cladding should use the separate Outdoor WPC Wall Panel page and confirm the selected exterior product there.",
    indoorLink: "Review indoor WPC wall panels",
    outdoorLink: "Review outdoor WPC wall cladding",
    verifyEyebrow: "Product verification",
    verifyTitle: "What B2B buyers should confirm for a selected WPC wall panel",
    verifyIntro: "The category name is only the starting point. Ask for current, product-specific confirmation of:",
    verifyItems: [
      "Selected profile or a clear product reference",
      "Required dimensions for that profile",
      "Surface and color reference",
      "Intended indoor wall application",
      "Quantity by design and color",
      "Packing and destination",
      "Sample and customization requirements",
      "Any destination-market document that needs review",
    ],
    termsEyebrow: "SINOQI sourcing",
    termsTitle: "Confirmed commercial starting points",
    termsIntro: "These points are confirmed starting terms for the current WPC wall panel inquiry process. The final quotation and approved sample govern the order.",
    terms: [
      ["Starting MOQ", "100 pieces per design and color"],
      ["Lead-time reference", "Around 30 days after deposit, subject to the order and production schedule"],
      ["Sample", "Free sample; buyer pays courier cost"],
      ["Packing", "Carton or plastic wrapping, confirmed per order"],
      ["OEM / customization", "Evaluated according to the selected product and request"],
    ],
    rfqEyebrow: "RFQ preparation",
    rfqTitle: "Turn the definition into a product-specific inquiry",
    rfqBody: "Send enough information to match the request with a real profile and current selection rather than an assumed specification.",
    rfqItems: [
      "Company, buyer type and destination market",
      "Indoor wall application",
      "Profile or recognizable product reference",
      "Preferred surface or color direction",
      "Quantity by design and color",
      "Packing preference and target timing",
      "Sample delivery country",
      "Customization or documentation requirements",
    ],
    faqEyebrow: "Buyer questions",
    faqTitle: "WPC wall panel FAQ",
    sourceEyebrow: "Definition sources",
    sourceTitle: "Industry references used in this guide",
    sourceBody: "These sources support the broad category definition. They are not product certificates, test reports or evidence of a specific SINOQI formulation.",
    tocLabel: "In this guide",
    toc: [["definition", "Direct definition"], ["category", "Category boundary"], ["profile-surface", "Profile and surface"], ["indoor-outdoor", "Indoor vs outdoor"], ["verification", "Buyer verification"], ["buying-terms", "Buying terms"], ["rfq", "RFQ checklist"], ["faq", "Buyer FAQ"]],
    asideEyebrow: "WPC sourcing",
    asideTitle: "Move from category to product",
    asideBody: "Share the profile, visual reference, quantity and destination for a current review.",
    designsLink: "Compare WPC designs and colors",
    finalEyebrow: "Next step",
    finalTitle: "Evaluate a real WPC wall panel selection",
    finalBody: "Review the indoor product range or send a profile, finish and quantity for an order-specific response.",
  },
  es: {
    home: "Inicio",
    breadcrumb: "¿Qué es un panel de pared WPC?",
    meta: "Guía de producto de paneles de pared WPC",
    heroBody: "Comprenda el significado de la categoría, sepárelo de las afirmaciones específicas de producto y prepare los datos para evaluar un pedido de paneles WPC de interior.",
    productCta: "Ver paneles de pared WPC",
    quoteCta: "Solicitar cotización",
    sampleCta: "Solicitar muestras",
    whatsappCta: "Consultar por WhatsApp",
    directEyebrow: "Respuesta directa",
    directTitle: "Un panel de pared WPC es un panel decorativo de la categoría de compuestos madera-plástico",
    directLabel: "Qué significa WPC como categoría",
    directText: "WPC suele significar wood-plastic composite o compuesto madera-plástico: un material compuesto que combina material derivado de la madera, como harina o fibra, con una matriz polimérica. La formulación exacta y la construcción del panel varían según el producto.",
    scopeText: "Esta definición procede de investigaciones sectoriales independientes. No certifica un artículo SINOQI ni establece la formulación, la construcción o el rendimiento exactos de un perfil seleccionado.",
    categoryEyebrow: "Límite de la definición",
    categoryTitle: "Qué indica la etiqueta WPC y qué no confirma",
    canTitle: "La categoría puede establecer",
    canItems: [
      "WPC se refiere a una categoría de productos compuestos madera-plástico",
      "El material derivado de madera y un polímero forman parte de la definición general",
      "Cada panel seleccionado todavía requiere confirmación propia",
    ],
    cannotTitle: "La categoría no establece",
    cannotItems: [
      "Una formulación, proporción o construcción universal",
      "Un perfil, medida, superficie o color fijo",
      "Un resultado de rendimiento o documento comercial específico",
    ],
    practical: "Para comprar, la pregunta útil no es solo «¿qué es WPC?», sino «¿qué perfil, acabado y configuración de pedido confirmados estamos evaluando?»",
    formEyebrow: "Forma del panel",
    formTitle: "El perfil y la superficie son decisiones de selección diferentes",
    formBody: "Un perfil acanalado crea repetición, relieve y un patrón de sombras visible. La superficie añade después la línea efecto madera, neutra o de color uniforme. El comprador debe identificar ambos elementos antes de pedir una muestra.",
    cards: [
      ["01", "Perfil", "Utilice el catálogo actual o una referencia clara para identificar la sección solicitada."],
      ["02", "Superficie", "Elija una línea visual y confirme el acabado actual para ese perfil."],
      ["03", "Muestra", "Revise el perfil y la apariencia aplicables mediante una muestra física antes de pedir."],
      ["04", "Pedido", "Confirme cantidad, embalaje y personalización en la cotización de la combinación elegida."],
    ],
    indoorEyebrow: "Separación de categorías",
    indoorTitle: "Los paneles decorativos de interior y el revestimiento exterior responden a búsquedas distintas",
    indoorBody: "Esta guía corresponde a la categoría de paneles decorativos WPC para paredes interiores. Para revestimiento exterior, utilice la página independiente de Outdoor WPC Wall Panel y confirme allí el producto seleccionado.",
    indoorLink: "Revisar paneles WPC de interior",
    outdoorLink: "Revisar revestimiento WPC exterior (EN)",
    verifyEyebrow: "Verificación de producto",
    verifyTitle: "Qué debe confirmar un comprador B2B para el panel seleccionado",
    verifyIntro: "El nombre de la categoría es solo el punto de partida. Solicite confirmación actual y específica de:",
    verifyItems: [
      "Perfil seleccionado o referencia clara del producto",
      "Medidas requeridas para ese perfil",
      "Referencia de superficie y color",
      "Aplicación prevista en pared interior",
      "Cantidad por diseño y color",
      "Embalaje y destino",
      "Requisitos de muestra y personalización",
      "Documentos del mercado de destino que deban revisarse",
    ],
    termsEyebrow: "Compra con SINOQI",
    termsTitle: "Puntos de partida comerciales confirmados",
    termsIntro: "Estas condiciones son puntos de partida confirmados para las consultas actuales. La cotización final y la muestra aprobada rigen el pedido.",
    terms: [
      ["MOQ inicial", "100 piezas por diseño y color"],
      ["Referencia de plazo", "Alrededor de 30 días después del depósito, según el pedido y el programa de producción"],
      ["Muestra", "Muestra gratuita; el comprador paga el envío"],
      ["Embalaje", "Caja de cartón o envoltura plástica, confirmado por pedido"],
      ["OEM / personalización", "Se evalúa según el producto seleccionado y la solicitud"],
    ],
    rfqEyebrow: "Preparación de la solicitud",
    rfqTitle: "Convierta la definición en una consulta de producto concreta",
    rfqBody: "Envíe datos suficientes para relacionar la solicitud con un perfil real y una selección actual, sin asumir especificaciones.",
    rfqItems: [
      "Empresa, tipo de comprador y mercado de destino",
      "Aplicación en pared interior",
      "Perfil o referencia reconocible del producto",
      "Línea de superficie o color preferida",
      "Cantidad por diseño y color",
      "Preferencia de embalaje y fecha objetivo",
      "País de entrega de la muestra",
      "Requisitos de personalización o documentación",
    ],
    faqEyebrow: "Preguntas de compradores",
    faqTitle: "Preguntas frecuentes sobre paneles de pared WPC",
    sourceEyebrow: "Fuentes de la definición",
    sourceTitle: "Referencias sectoriales utilizadas",
    sourceBody: "Estas fuentes respaldan la definición general. No son certificados, informes de ensayo ni pruebas de una formulación SINOQI específica.",
    tocLabel: "En esta guía",
    toc: [["definition", "Definición directa"], ["category", "Límite de la categoría"], ["profile-surface", "Perfil y superficie"], ["indoor-outdoor", "Interior y exterior"], ["verification", "Verificación"], ["buying-terms", "Condiciones de compra"], ["rfq", "Lista para cotizar"], ["faq", "Preguntas frecuentes"]],
    asideEyebrow: "Compra de WPC",
    asideTitle: "Pase de la categoría al producto",
    asideBody: "Comparta perfil, referencia visual, cantidad y destino para una revisión actual.",
    designsLink: "Comparar diseños y colores WPC",
    finalEyebrow: "Siguiente paso",
    finalTitle: "Evalúe una selección real de paneles WPC",
    finalBody: "Revise la gama de interior o envíe perfil, acabado y cantidad para una respuesta específica del pedido.",
  },
} as const;

const faqs = {
  en: [
    ["What does WPC mean in wall panels?", "WPC commonly means wood-plastic composite, a broad category combining wood-derived material with a polymer matrix. The exact formulation varies by product."],
    ["What is a WPC wall panel made of?", "At category level, WPC combines wood-derived material, such as flour or fiber, with a polymer. Ask for the current product information for the selected profile rather than assuming one universal formula."],
    ["Does WPC mean the panel is solid wood?", "No. Wood-look appearance and the term wood-plastic composite do not mean that the panel is solid wood."],
    ["Is every WPC wall panel constructed the same way?", "No. Profile, dimensions, formulation, surface and other product details can vary. Confirm the selected item through current product information and a sample."],
    ["Is this guide for indoor or outdoor WPC panels?", "This guide focuses on indoor decorative WPC wall panels. Exterior cladding requirements should be reviewed on the separate Outdoor WPC Wall Panel page."],
    ["What is SINOQI's starting MOQ for indoor WPC wall panels?", "The confirmed starting MOQ is 100 pieces per design and color. The final mix is confirmed in the quotation."],
    ["Can I request a WPC wall panel sample?", "Yes. SINOQI offers a free sample for a genuine requirement, and the buyer pays the courier cost."],
    ["What should I send for a WPC wall panel quote?", "Send the profile or product reference, surface direction, quantity by design and color, intended indoor use, packing preference, destination and any sample or customization request."],
  ],
  es: [
    ["¿Qué significa WPC en paneles de pared?", "WPC suele significar compuesto madera-plástico, una categoría general que combina material derivado de madera con una matriz polimérica. La formulación exacta varía según el producto."],
    ["¿De qué está hecho un panel de pared WPC?", "Como categoría, WPC combina material derivado de madera, como harina o fibra, con un polímero. Solicite la información actual del perfil seleccionado en lugar de asumir una fórmula universal."],
    ["¿WPC significa que el panel es de madera maciza?", "No. La apariencia efecto madera y el término compuesto madera-plástico no significan que el panel sea de madera maciza."],
    ["¿Todos los paneles de pared WPC tienen la misma construcción?", "No. El perfil, las medidas, la formulación, la superficie y otros datos pueden variar. Confirme el artículo seleccionado mediante información actual y una muestra."],
    ["¿Esta guía trata de paneles WPC interiores o exteriores?", "Esta guía se centra en paneles decorativos WPC para interiores. Los requisitos de revestimiento exterior deben revisarse en la página independiente Outdoor WPC Wall Panel."],
    ["¿Cuál es el MOQ inicial de SINOQI para paneles WPC de interior?", "El MOQ inicial confirmado es de 100 piezas por diseño y color. La combinación final se confirma en la cotización."],
    ["¿Puedo solicitar una muestra de panel WPC?", "Sí. SINOQI ofrece una muestra gratuita para una necesidad real y el comprador paga el envío."],
    ["¿Qué debo enviar para cotizar paneles de pared WPC?", "Envíe perfil o referencia del producto, línea de superficie, cantidad por diseño y color, uso interior previsto, embalaje, destino y requisitos de muestra o personalización."],
  ],
} as const;

export function WpcWallPanelExplainer({ locale, post }: { locale: Locale; post: BlogPost }) {
  const c = content[locale];
  const questions = faqs[locale];
  const es = locale === "es";
  const canonicalPath = localizedBlogPostPath(post.slug, locale);
  const canonicalUrl = new URL(canonicalPath, SITE_ORIGIN).toString();
  const productPath = localizedPath("wpc-wall-panel", locale);
  const productUrl = new URL(productPath, SITE_ORIGIN).toString();
  const outdoorPath = locale === "en" ? "/en/outdoor-wpc-wall-panel/" : "/en/outdoor-wpc-wall-panel/";
  const quoteHref = `${localizedPath("contact", locale)}#inquiry`;
  const formattedDate = new Intl.DateTimeFormat(es ? "es" : "en", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: c.home, item: new URL(localizedPath("home", locale), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 2, name: "Blog", item: new URL(localizedPath("blog", locale), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 3, name: post.title[locale], item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title[locale],
      description: post.description[locale],
      image: [new URL(asset.wpc, SITE_ORIGIN).toString()],
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      inLanguage: es ? "es" : "en",
      mainEntityOfPage: canonicalUrl,
      author: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
      publisher: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
      about: createStructuredDataTopic(es ? "Panel de pared WPC" : "WPC Wall Panel", productUrl),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions.map(([question, answer]) => ({
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

      <article>
        <header className="article-hero spc-explainer__hero">
          <div className="container article-hero__inner">
            <nav className="breadcrumb" aria-label={es ? "Migas de pan" : "Breadcrumb"}>
              <Link href={localizedPath("home", locale)}>{c.home}</Link><span aria-hidden="true">/</span>
              <Link href={localizedPath("blog", locale)}>Blog</Link><span aria-hidden="true">/</span>
              <span aria-current="page">{c.breadcrumb}</span>
            </nav>
            <div className="article-meta"><span>{c.meta}</span><time dateTime={post.publishedAt}>{formattedDate}</time><span>{post.readingTime[locale]}</span></div>
            <h1>{post.title[locale]}</h1>
            <p>{c.heroBody}</p>
            <div className="spc-explainer__hero-actions">
              <Link className="button button--orange" href={productPath}>{c.productCta}</Link>
              <Link className="button button--outline-light" href={quoteHref}>{c.quoteCta}</Link>
            </div>
          </div>
        </header>

        <div className="article-cover">
          <div className="container article-cover__frame">
            <Image src={asset.wpc} alt={post.coverAlt?.[locale] ?? "WPC wall panel profile references"} fill priority sizes="(max-width: 900px) 100vw, 1200px" />
          </div>
        </div>

        <div className="container article-layout spc-explainer__layout">
          <div className="article-body spc-explainer__body">
            <p className="article-intro">{post.introduction[locale]}</p>

            <section id="definition">
              <p className="eyebrow">{c.directEyebrow}</p>
              <h2>{c.directTitle}</h2>
              <div className="article-note"><strong>{c.directLabel}</strong><p>{c.directText}</p></div>
              <p>{c.scopeText}</p>
            </section>

            <section id="category">
              <p className="eyebrow">{c.categoryEyebrow}</p>
              <h2>{c.categoryTitle}</h2>
              <div className="spc-explainer__compare">
                <article><h3>{c.canTitle}</h3><ul>{c.canItems.map((item) => <li key={item}>{item}</li>)}</ul></article>
                <article><h3>{c.cannotTitle}</h3><ul>{c.cannotItems.map((item) => <li key={item}>{item}</li>)}</ul></article>
              </div>
              <p>{c.practical}</p>
            </section>

            <section id="profile-surface">
              <p className="eyebrow">{c.formEyebrow}</p>
              <h2>{c.formTitle}</h2>
              <p>{c.formBody}</p>
              <div className="spc-explainer__number-grid">
                {c.cards.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
              </div>
              <Link className="text-link" href={localizedBlogPostPath("wpc-wall-panel-designs-colors", locale)}>{c.designsLink} <span aria-hidden="true">→</span></Link>
            </section>

            <section id="indoor-outdoor">
              <p className="eyebrow">{c.indoorEyebrow}</p>
              <h2>{c.indoorTitle}</h2>
              <p>{c.indoorBody}</p>
              <div className="spc-explainer__actions">
                <Link className="button button--orange" href={productPath}>{c.indoorLink}</Link>
                <Link className="button button--outline" href={outdoorPath}>{c.outdoorLink}</Link>
              </div>
            </section>

            <section id="verification">
              <p className="eyebrow">{c.verifyEyebrow}</p>
              <h2>{c.verifyTitle}</h2>
              <p>{c.verifyIntro}</p>
              <ul className="spc-explainer__checklist">{c.verifyItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section id="buying-terms">
              <p className="eyebrow">{c.termsEyebrow}</p>
              <h2>{c.termsTitle}</h2>
              <p>{c.termsIntro}</p>
              <dl className="spc-explainer__terms">{c.terms.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
            </section>

            <section id="rfq">
              <p className="eyebrow">{c.rfqEyebrow}</p>
              <h2>{c.rfqTitle}</h2>
              <p>{c.rfqBody}</p>
              <ul className="spc-explainer__checklist">{c.rfqItems.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="spc-explainer__actions">
                <Link className="button button--orange" href={quoteHref}>{c.quoteCta}</Link>
                <a className="button button--outline" href={company.whatsappHref} target="_blank" rel="noreferrer">{c.whatsappCta}</a>
              </div>
            </section>

            <section id="faq">
              <p className="eyebrow">{c.faqEyebrow}</p>
              <h2>{c.faqTitle}</h2>
              <div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
            </section>

            <section className="spc-explainer__sources" aria-labelledby={`sources-${locale}`}>
              <p className="eyebrow">{c.sourceEyebrow}</p>
              <h2 id={`sources-${locale}`}>{c.sourceTitle}</h2>
              <p>{c.sourceBody}</p>
              <ul>{sourceLinks.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label[locale]}</a></li>)}</ul>
            </section>
          </div>

          <aside className="article-aside">
            <div className="article-toc"><p className="eyebrow">{c.tocLabel}</p><ol>{c.toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></div>
            <div className="article-cta">
              <p className="eyebrow">{c.asideEyebrow}</p><h2>{c.asideTitle}</h2><p>{c.asideBody}</p>
              <Link className="button button--orange" href={quoteHref}>{c.quoteCta}</Link>
              <Link className="text-link" href={productPath}>{c.productCta} <span aria-hidden="true">→</span></Link>
              <Link className="text-link" href={localizedBlogPostPath("wpc-wall-panel-designs-colors", locale)}>{c.designsLink} <span aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="cta-band"><div className="container cta-band__inner"><div><p className="eyebrow">{c.finalEyebrow}</p><h2>{c.finalTitle}</h2><p>{c.finalBody}</p></div><div className="cta-band__actions"><Link className="button button--light" href={productPath}>{c.productCta}</Link><Link className="button button--outline-light" href={quoteHref}>{c.sampleCta}</Link></div></div></section>
    </>
  );
}
