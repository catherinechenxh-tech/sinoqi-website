import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { localizedBlogPostPath } from "@/content/blog";
import { company, localizedPath, type Locale } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const profiles = [
  ["25 cm", "8 mm", "3 / 4 / 5 / 6 m", "Plain"],
  ["25 cm", "8 mm", "3 / 4 / 5 / 6 m", "Two grooves"],
  ["25 cm", "7 mm", "3 / 4 / 5 / 6 m", "Plain"],
  ["25 cm", "7 mm", "3 / 4 / 5 / 6 m", "Two grooves"],
  ["30 cm", "7 mm", "3 / 4 / 5 / 6 m", "Plain"],
  ["30 cm", "8 mm", "3 / 4 / 5 / 6 m", "Two grooves"],
  ["30 cm", "8 mm", "3 / 4 / 5 / 6 m", "Plain"],
  ["40 cm", "8 mm", "3 / 4 / 5 / 6 m", "Plain"],
] as const;

const copy = {
  en: {
    eyebrow: "PVC Ceiling Specification Guide",
    hero: "Compare confirmed width, length, thickness and profile combinations before preparing a PVC ceiling panel order for import or distribution.",
    note: "RFQ shortcut: send the required length × width × thickness, profile, finish, quantity by design and color, packing preference and destination market.",
    quote: "Request a Specification-Based Quote", sample: "Request a Free Sample", catalog: "Download Catalog",
    overviewTitle: "Confirmed PVC Ceiling Panel Sizes at a Glance",
    overviewBody: "SINOQI currently publishes 25 cm and 30 cm as regular widths. The available mold reference also includes a 40 cm option. Length, thickness and profile must be matched as a confirmed combination rather than selected independently.",
    overview: [["Regular widths", "25 cm and 30 cm"], ["Additional mold option", "40 cm, subject to order confirmation"], ["Listed lengths", "3 m, 4 m, 5 m and 6 m"], ["Listed thicknesses", "7 mm and 8 mm, according to profile"]],
    matrixTitle: "Current Mold and Profile Options",
    matrixBody: "The combinations below come from the current SINOQI mold reference. They are a specification starting point, not a promise that every combination is in stock. Availability and final dimensions are confirmed for each quotation.",
    headers: ["Width", "Thickness", "Listed lengths", "Panel face"], plain: "Plain", grooves: "Two grooves",
    readTitle: "How to Read a PVC Ceiling Panel Specification",
    readBody: "Use length × width × thickness together with the panel face or profile description. A complete request avoids treating one dimension as proof that another option is available.",
    readCards: [["Length", "Choose from the listed mold lengths or submit another required length for feasibility review."], ["Width", "Use 25 cm or 30 cm for the regular website range. Ask the team to confirm the 40 cm mold option for the intended order."], ["Thickness", "Specify 7 mm or 8 mm only where that thickness appears with the selected width and profile."], ["Panel face", "State plain or two grooves. The description identifies the visible face configuration; it is not a performance rating."]],
    finishTitle: "Specify the Surface and Design Route Separately",
    finishBody: "Printing, hot stamping and laminated finishes are confirmed selection routes. The design libraries provide visual references, but a design image does not confirm stock or automatically identify its processing route. Send the selected reference for review.",
    finishItems: ["Printing", "Hot stamping", "Laminated"],
    packingTitle: "Packaging and Container-order Planning",
    packingBody: "Confirmed packing routes include cartons and shrink wrap. Final packing and loading depend on the approved panel size, profile, quantity and product mix.",
    shipmentTitle: "Anonymous shipment reference: 2 × 40HQ",
    shipmentBody: "One completed 2026 shipment used 5.9 m × 25 cm × 7 mm two-groove PVC ceiling panels, packed 10 pieces per polybag. Across two 40HQ containers, the shipment totaled 10,560 pieces and 1,056 bags.",
    shipmentLimit: "This is a historical reference for one confirmed configuration—not a standard loading formula. Length and loading quantity must be reviewed for every order.",
    rfqTitle: "Prepare a Specification-Based RFQ",
    rfqBody: "Provide the details below so SINOQI can check the mold combination, finish route, packing and production plan before quoting.",
    rfq: ["Required length × width × thickness", "Plain or two-groove face", "Design or finish reference", "Quantity by design and color", "Carton or shrink-wrap preference", "Destination market and intended interior ceiling use", "Private-label or packing requirements", "Target order timing and sample requirement"],
    termsTitle: "Confirmed Buying Terms",
    terms: [["MOQ", "100 pieces per design and color as the confirmed starting point."], ["Sample", "A free sample is available for a genuine B2B requirement; the buyer pays the courier cost."], ["Lead time", "Regular lead time is 30 days from receipt of deposit, subject to the approved configuration and production plan."], ["OEM / private label", "Design, color, finish and packing requirements can be reviewed against the order request."]],
    faqTitle: "PVC Ceiling Panel Size and Specification FAQ",
    continueTitle: "Continue Your PVC Ceiling Evaluation", continueBody: "Compare the core product, finish choices and buying checklist, or send your exact specification for review.",
    product: "PVC Ceiling Panels", buying: "PVC Ceiling Buying Guide", designs: "Designs & Finishes", applications: "Applications",
  },
  es: {
    eyebrow: "Guía de especificaciones de PVC Ceiling",
    hero: "Compare combinaciones confirmadas de ancho, largo, espesor y perfil antes de preparar un pedido de paneles de techo PVC para importación o distribución.",
    note: "Atajo para cotizar: envíe largo × ancho × espesor, perfil, acabado, cantidad por diseño y color, embalaje preferido y mercado de destino.",
    quote: "Solicitar cotización según especificación", sample: "Solicitar una muestra gratuita", catalog: "Descargar catálogo",
    overviewTitle: "Medidas confirmadas de paneles de techo PVC",
    overviewBody: "SINOQI publica actualmente 25 cm y 30 cm como anchos habituales. La referencia de moldes también incluye una opción de 40 cm. El largo, el espesor y el perfil deben seleccionarse como una combinación confirmada, no de forma independiente.",
    overview: [["Anchos habituales", "25 cm y 30 cm"], ["Opción de molde adicional", "40 cm, sujeto a confirmación del pedido"], ["Largos indicados", "3 m, 4 m, 5 m y 6 m"], ["Espesores indicados", "7 mm y 8 mm, según el perfil"]],
    matrixTitle: "Opciones actuales de molde y perfil",
    matrixBody: "Las combinaciones siguientes proceden de la referencia actual de moldes de SINOQI. Son un punto de partida para especificar, no una promesa de inventario. La disponibilidad y las dimensiones finales se confirman en cada cotización.",
    headers: ["Ancho", "Espesor", "Largos indicados", "Cara del panel"], plain: "Lisa", grooves: "Dos ranuras",
    readTitle: "Cómo leer una especificación de panel de techo PVC",
    readBody: "Use largo × ancho × espesor junto con la descripción de la cara o el perfil. Una solicitud completa evita asumir que una medida garantiza la disponibilidad de otra.",
    readCards: [["Largo", "Elija uno de los largos indicados o envíe otro largo requerido para revisar su viabilidad."], ["Ancho", "Use 25 cm o 30 cm para la gama habitual publicada. Solicite confirmación para la opción de molde de 40 cm."], ["Espesor", "Indique 7 mm u 8 mm solo cuando ese espesor aparezca con el ancho y el perfil seleccionados."], ["Cara del panel", "Indique lisa o con dos ranuras. Esta descripción identifica la configuración visible, no una clasificación de rendimiento."]],
    finishTitle: "Especifique por separado la superficie y el diseño",
    finishBody: "Impresión, estampado en caliente y laminado son rutas de acabado confirmadas. Los catálogos de diseños sirven como referencia visual, pero una imagen no confirma inventario ni identifica automáticamente el proceso. Envíe la referencia elegida para revisión.",
    finishItems: ["Impresión", "Estampado en caliente", "Laminado"],
    packingTitle: "Planificación de embalaje y carga por contenedor",
    packingBody: "Las opciones de embalaje confirmadas incluyen caja de cartón y plástico retráctil. El embalaje y la carga finales dependen de la medida, el perfil, la cantidad y la mezcla de productos aprobados.",
    shipmentTitle: "Referencia anónima de envío: 2 × 40HQ",
    shipmentBody: "Un envío completado en 2026 utilizó paneles de techo PVC de 5,9 m × 25 cm × 7 mm con dos ranuras, embalados en bolsas de 10 piezas. En dos contenedores 40HQ, el envío totalizó 10.560 piezas y 1.056 bolsas.",
    shipmentLimit: "Es una referencia histórica de una configuración concreta, no una fórmula estándar de carga. El largo y la cantidad de carga deben revisarse para cada pedido.",
    rfqTitle: "Prepare una RFQ basada en especificaciones",
    rfqBody: "Facilite los datos siguientes para que SINOQI revise la combinación de molde, el acabado, el embalaje y el plan de producción antes de cotizar.",
    rfq: ["Largo × ancho × espesor requeridos", "Cara lisa o con dos ranuras", "Referencia de diseño o acabado", "Cantidad por diseño y color", "Preferencia de caja o plástico retráctil", "Mercado de destino y uso previsto en techo interior", "Requisitos de marca privada o embalaje", "Fecha objetivo y necesidad de muestra"],
    termsTitle: "Condiciones de compra confirmadas",
    terms: [["MOQ", "100 piezas por diseño y color como punto de partida confirmado."], ["Muestra", "Hay muestra gratuita para una necesidad B2B real; el comprador paga el envío por mensajería."], ["Plazo", "El plazo habitual es de 30 días desde la recepción del depósito, sujeto a la configuración y al plan de producción aprobados."], ["OEM / marca privada", "Los requisitos de diseño, color, acabado y embalaje pueden revisarse según la solicitud."]],
    faqTitle: "Preguntas sobre medidas y especificaciones de paneles de techo PVC",
    continueTitle: "Continúe evaluando PVC Ceiling", continueBody: "Compare el producto principal, los acabados y la lista de compra, o envíe su especificación exacta para revisión.",
    product: "Paneles de techo PVC", buying: "Guía de compra de PVC Ceiling", designs: "Diseños y acabados", applications: "Aplicaciones",
  },
} as const;

const faqs = {
  en: [
    ["What are SINOQI's regular PVC ceiling panel widths?", "The regular widths currently published are 25 cm and 30 cm. A 40 cm mold option is also listed, subject to confirmation for the order."],
    ["Which PVC ceiling panel lengths are listed?", "The current mold reference lists 3 m, 4 m, 5 m and 6 m. Another required length must be reviewed and confirmed for the selected product and order."],
    ["Which thicknesses are confirmed?", "The current mold combinations include 7 mm and 8 mm. Thickness must be matched with the selected width and plain or two-groove profile shown in the table."],
    ["Can every container use the same loading quantity?", "No. Loading depends on the approved panel dimensions, profile, packing and product mix. The shipment example on this page is a historical reference, not a standard loading formula."],
    ["What finish options can be reviewed?", "Confirmed finish routes include printing, hot stamping and laminated finishes. The selected design and processing route are confirmed during product review."],
    ["What is the starting MOQ?", "The confirmed starting point is 100 pieces per design and color. The final order mix is reviewed during quotation."],
    ["What should an importer include in an RFQ?", "Include length, width, thickness, profile, design or finish reference, quantity by design and color, packing preference, destination market and any private-label or sample requirement."],
  ],
  es: [
    ["¿Cuáles son los anchos habituales de SINOQI?", "Los anchos publicados actualmente son 25 cm y 30 cm. También existe una opción de molde de 40 cm, sujeta a confirmación para el pedido."],
    ["¿Qué largos están indicados?", "La referencia actual de moldes indica 3 m, 4 m, 5 m y 6 m. Cualquier otro largo requerido debe revisarse y confirmarse para el producto y el pedido."],
    ["¿Qué espesores están confirmados?", "Las combinaciones actuales incluyen 7 mm y 8 mm. El espesor debe coincidir con el ancho y el perfil liso o de dos ranuras mostrados en la tabla."],
    ["¿Todos los contenedores admiten la misma cantidad?", "No. La carga depende de las dimensiones, el perfil, el embalaje y la mezcla de productos aprobados. El ejemplo de envío es una referencia histórica, no una fórmula estándar."],
    ["¿Qué opciones de acabado se pueden revisar?", "Las rutas confirmadas incluyen impresión, estampado en caliente y laminado. El diseño y el proceso se confirman durante la revisión del producto."],
    ["¿Cuál es el MOQ inicial?", "El punto de partida confirmado es de 100 piezas por diseño y color. La mezcla final se revisa durante la cotización."],
    ["¿Qué debe incluir un importador en una RFQ?", "Incluya largo, ancho, espesor, perfil, referencia de diseño o acabado, cantidad por diseño y color, embalaje, mercado de destino y requisitos de marca privada o muestra."],
  ],
} as const;

export function PvcCeilingSizesSpecifications({ locale, post }: { locale: Locale; post: BlogPost }) {
  const es = locale === "es";
  const t = copy[locale];
  const questions = faqs[locale];
  const quoteHref = `${localizedPath("contact", locale)}#inquiry`;
  const canonicalUrl = new URL(localizedBlogPostPath(post.slug, locale), SITE_ORIGIN).toString();
  const absoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();
  const profileName = (name: string) => name === "Plain" ? t.plain : t.grooves;
  const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: post.title[locale], description: post.description[locale], image: [absoluteUrl("/assets/sample-pvc.jpg"), absoluteUrl("/assets/pvc-ceiling-design-samples.jpg")], datePublished: post.publishedAt, dateModified: post.publishedAt, mainEntityOfPage: canonicalUrl, author: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN }, publisher: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: es ? "Inicio" : "Home", item: absoluteUrl(localizedPath("home", locale)) }, { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl(localizedPath("blog", locale)) }, { "@type": "ListItem", position: 3, name: post.title[locale], item: canonicalUrl }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ];
  return <>
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}
    <article className="spec-guide">
      <header className="article-hero spec-guide__hero"><div className="container article-hero__inner">
        <nav className="breadcrumb" aria-label={es ? "Migas de pan" : "Breadcrumb"}><Link href={localizedPath("home", locale)}>{es ? "Inicio" : "Home"}</Link><span aria-hidden="true">/</span><Link href={localizedPath("blog", locale)}>Blog</Link><span aria-hidden="true">/</span><span aria-current="page">{es ? "Medidas PVC Ceiling" : "PVC ceiling sizes"}</span></nav>
        <div className="article-meta"><span>{t.eyebrow}</span><time dateTime={post.publishedAt}>{post.publishedAt}</time><span>{post.readingTime[locale]}</span></div>
        <h1>{post.title[locale]}</h1><p>{t.hero}</p>
        <div className="spec-guide__actions"><Link className="button button--orange" href={quoteHref}>{t.quote}</Link><Link className="button button--outline-light" href={quoteHref}>{t.sample}</Link></div>
        <p className="spec-guide__note">{t.note}</p>
      </div></header>
      <div className="article-cover"><div className="container article-cover__frame"><Image src="/assets/sample-pvc.jpg" alt={post.coverAlt?.[locale] ?? ""} fill priority sizes="(max-width: 900px) 100vw, 1200px" /></div></div>
      <div className="container spec-guide__layout"><main className="spec-guide__body">
        <section id="overview"><p className="eyebrow">{es ? "Datos confirmados" : "Confirmed data"}</p><h2>{t.overviewTitle}</h2><p>{t.overviewBody}</p><div className="spec-guide__facts">{t.overview.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>
        <section id="profile-matrix"><h2>{t.matrixTitle}</h2><p>{t.matrixBody}</p><div className="spec-guide__table-wrap"><table><caption className="sr-only">{t.matrixTitle}</caption><thead><tr>{t.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{profiles.map(([width, thickness, lengths, profile]) => <tr key={`${width}-${thickness}-${profile}`}><td data-label={t.headers[0]}>{width}</td><td data-label={t.headers[1]}>{thickness}</td><td data-label={t.headers[2]}>{lengths}</td><td data-label={t.headers[3]}>{profileName(profile)}</td></tr>)}</tbody></table></div><div className="article-note"><strong>{es ? "Confirmación por pedido" : "Order confirmation"}</strong><p>{es ? "No se publican peso, inventario ni cantidad fija por contenedor. La combinación final se confirma en la cotización y la muestra aprobada cuando corresponda." : "Panel weight, stock and fixed container quantities are not published. The final combination is confirmed in the quotation and approved sample where applicable."}</p></div></section>
        <section id="read-specification"><h2>{t.readTitle}</h2><p>{t.readBody}</p><div className="spec-guide__cards">{t.readCards.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>
        <section id="finishes"><h2>{t.finishTitle}</h2><p>{t.finishBody}</p><ul className="check-list">{t.finishItems.map((item) => <li key={item}>{item}</li>)}</ul><div className="spec-guide__media"><Image src="/assets/pvc-ceiling-design-samples.jpg" alt={es ? "Muestras reales de colores y diseños de paneles de techo PVC" : "Real PVC ceiling panel color and design samples"} fill sizes="(max-width: 900px) 100vw, 760px" /></div><Link className="text-link" href={localizedBlogPostPath("pvc-ceiling-panel-designs-finishes", locale)}>{t.designs} <span aria-hidden="true">→</span></Link></section>
        <section id="packing-loading"><h2>{t.packingTitle}</h2><p>{t.packingBody}</p><article className="spec-guide__shipment"><p className="eyebrow">{es ? "Referencia real anonimizada" : "Real anonymized reference"}</p><h3>{t.shipmentTitle}</h3><p>{t.shipmentBody}</p><p className="spec-guide__shipment-limit">{t.shipmentLimit}</p></article></section>
        <section id="rfq"><h2>{t.rfqTitle}</h2><p>{t.rfqBody}</p><div className="spec-guide__rfq">{t.rfq.map((item) => <div key={item}><span aria-hidden="true">✓</span><p>{item}</p></div>)}</div><div className="spec-guide__actions spec-guide__actions--light"><Link className="button button--orange" href={quoteHref}>{t.quote}</Link><Link className="button button--outline" href={quoteHref}>{t.sample}</Link></div></section>
        <section id="buying-terms"><h2>{t.termsTitle}</h2><div className="spec-guide__cards">{t.terms.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>
        <section id="faq"><p className="eyebrow">FAQ</p><h2>{t.faqTitle}</h2><div className="faq-list">{questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
        <section id="continue"><h2>{t.continueTitle}</h2><p>{t.continueBody}</p><div className="application-product-links"><Link href={localizedPath("pvc-ceiling-panel", locale)}>{t.product}<span aria-hidden="true">→</span></Link><Link href={localizedBlogPostPath("pvc-ceiling-panel-buying-guide", locale)}>{t.buying}<span aria-hidden="true">→</span></Link><Link href={localizedBlogPostPath("pvc-ceiling-panel-designs-finishes", locale)}>{t.designs}<span aria-hidden="true">→</span></Link><Link href={localizedPath("applications", locale)}>{t.applications}<span aria-hidden="true">→</span></Link><Link href={localizedPath("download", locale)}>{t.catalog}<span aria-hidden="true">→</span></Link></div></section>
      </main><aside className="article-aside spec-guide__aside"><div className="article-toc"><p className="eyebrow">{es ? "En esta guía" : "In this guide"}</p><ol><li><a href="#overview">{es ? "Resumen" : "Overview"}</a></li><li><a href="#profile-matrix">{es ? "Moldes y perfiles" : "Molds and profiles"}</a></li><li><a href="#read-specification">{es ? "Leer especificación" : "Read a specification"}</a></li><li><a href="#finishes">{es ? "Acabados" : "Finishes"}</a></li><li><a href="#packing-loading">{es ? "Embalaje y carga" : "Packing and loading"}</a></li><li><a href="#rfq">RFQ</a></li><li><a href="#faq">FAQ</a></li></ol></div><div className="article-cta"><p className="eyebrow">SINOQI</p><h2>{es ? "Confirme su combinación" : "Confirm your combination"}</h2><p>{t.note}</p><Link className="button button--orange" href={quoteHref}>{t.quote}</Link><Link className="text-link" href={localizedPath("download", locale)}>{t.catalog} <span aria-hidden="true">→</span></Link></div></aside></div>
    </article>
    <section className="cta-band"><div className="container cta-band__inner"><div><p className="eyebrow">SINOQI</p><h2>{t.continueTitle}</h2><p>{t.continueBody}</p></div><div className="cta-band__actions"><Link className="button button--light" href={quoteHref}>{t.quote}</Link><Link className="button button--outline-light" href={quoteHref}>{t.sample}</Link></div></div></section>
  </>;
}
