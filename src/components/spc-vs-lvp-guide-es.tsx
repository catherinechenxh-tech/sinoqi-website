import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { asset, company, localizedPath } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const comparisonPath = "/blog/piso-spc-vs-lvp/";

const sourceLinks = [
  { label: "RFCI: Flexible LVT/LVP", href: "https://rfci.com/flexible-lvp-lvt/" },
  { label: "RFCI: Rigid Core — SPC, WPC and Multilayer", href: "https://rfci.com/rigid-core/" },
  { label: "ASTM F3261: Resilient Flooring with Rigid Polymeric Core", href: "https://store.astm.org/f3261-25a.html" },
];

const comparisonRows = [
  {
    factor: "Qué describe la etiqueta",
    spc: "Una construcción de núcleo rígido de polímero sólido dentro de la categoría más amplia de pisos resilientes.",
    lvp: "Piso vinílico de lujo suministrado en formato de tabla; el término por sí solo no identifica una construcción de núcleo concreta.",
  },
  {
    factor: "Pregunta sobre el núcleo",
    spc: "Confirme la construcción de núcleo rígido indicada en la especificación vigente.",
    lvp: "Confirme si la tabla seleccionada es flexible o utiliza una construcción de núcleo rígido determinada.",
  },
  {
    factor: "Formato y capas",
    spc: "Solicite las medidas, disposición de capas, unión y base del producto seleccionado.",
    lvp: "Solicite los mismos datos específicos en lugar de basarse únicamente en la etiqueta LVP.",
  },
  {
    factor: "Revisión de instalación",
    spc: "Utilice las instrucciones emitidas para el producto de núcleo rígido y la condición del proyecto.",
    lvp: "Confirme si el producto es encolado, flotante, loose-lay u otro sistema documentado.",
  },
  {
    factor: "Evidencia para decidir la compra",
    spc: "Muestra aprobada, especificación vigente, cotización y documentos de ensayo requeridos.",
    lvp: "Muestra aprobada, especificación vigente, cotización y documentos de ensayo requeridos.",
  },
];

const faqs = [
  {
    question: "¿El piso SPC es lo mismo que LVP?",
    answer: "Los términos se solapan, pero describen cosas diferentes. LVP identifica un piso vinílico de lujo en formato de tabla, mientras que SPC identifica una construcción de núcleo rígido de polímero sólido. Por ello, una tabla SPC puede formar parte de la categoría más amplia LVP.",
  },
  {
    question: "¿Qué significa LVP?",
    answer: "LVP significa luxury vinyl plank, es decir, piso vinílico de lujo en formato de tabla. El término no confirma por sí solo si el núcleo es flexible o rígido.",
  },
  {
    question: "¿Cuál es la principal diferencia entre piso SPC y LVP flexible?",
    answer: "La diferencia más clara a nivel de categoría es el núcleo: SPC utiliza un núcleo polimérico rígido, mientras que LVP flexible es una construcción de piso resiliente flexible. Los detalles de cada producto requieren una especificación vigente.",
  },
  {
    question: "¿El piso SPC siempre es mejor que LVP?",
    answer: "No puede darse una respuesta universal a partir de los nombres de categoría. El comprador debe comparar la aplicación, construcción, método de instalación, muestra aprobada, documentación y condiciones comerciales.",
  },
  {
    question: "¿Qué datos debe comparar un importador antes de comprar?",
    answer: "Compare el diseño, las medidas, la disposición de capas, la unión y la base, el método de instalación, la cantidad, el embalaje, el plazo objetivo y los documentos requeridos por el mercado de destino.",
  },
  {
    question: "¿La etiqueta SPC o LVP confirma resultados de ensayo?",
    answer: "No. Una etiqueta de categoría no es un informe de ensayo ni un documento de conformidad. Solicite los documentos aplicables al producto y pedido concretos.",
  },
  {
    question: "¿Puedo solicitar una muestra de piso SPC a SINOQI?",
    answer: "Sí. SINOQI proporciona una muestra gratuita y el comprador asume el coste de mensajería. El diseño y la configuración deben confirmarse antes del envío.",
  },
  {
    question: "¿Cuáles son el MOQ inicial y la referencia de plazo de SINOQI para piso SPC?",
    answer: "El MOQ inicial confirmado es de 100 piezas por diseño y color. La referencia de plazo es de alrededor de 30 días después del depósito, sujeta a la configuración y al programa de producción.",
  },
];

const guideSections = [
  ["quick-answer", "Respuesta breve"],
  ["comparison", "Comparación SPC y LVP"],
  ["selection", "Cómo debe elegir un comprador B2B"],
  ["verification", "Evidencia que debe solicitar"],
  ["sinoqi-terms", "Condiciones SINOQI confirmadas"],
  ["rfq", "Lista para RFQ"],
  ["faq", "Preguntas frecuentes"],
];

export function SpcVsLvpGuideEs({ post }: { post: BlogPost }) {
  const canonicalUrl = new URL(comparisonPath, SITE_ORIGIN).toString();
  const productUrl = new URL(localizedPath("spc-flooring", "es"), SITE_ORIGIN).toString();
  const formattedDate = new Intl.DateTimeFormat("es", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: new URL(localizedPath("home", "es"), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 2, name: "Blog", item: new URL(localizedPath("blog", "es"), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 3, name: post.title.es, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title.es,
      description: post.description.es,
      image: [new URL(asset.spc, SITE_ORIGIN).toString()],
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      mainEntityOfPage: canonicalUrl,
      author: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
      publisher: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
      about: [
        { "@type": "Thing", name: "Piso SPC", sameAs: productUrl },
        { "@type": "Thing", name: "Piso vinílico de lujo en formato de tabla" },
      ],
      citation: sourceLinks.map((source) => source.href),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
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
            <nav className="breadcrumb" aria-label="Migas de pan">
              <Link href={localizedPath("home", "es")}>Inicio</Link><span aria-hidden="true">/</span>
              <Link href={localizedPath("blog", "es")}>Blog</Link><span aria-hidden="true">/</span>
              <span aria-current="page">Piso SPC vs LVP</span>
            </nav>
            <div className="article-meta"><span>{post.category.es}</span><time dateTime={post.publishedAt}>{formattedDate}</time><span>{post.readingTime.es}</span></div>
            <h1>{post.title.es}</h1>
            <p>{post.description.es}</p>
            <div className="spc-explainer__hero-actions">
              <Link className="button button--orange" href={localizedPath("spc-flooring", "es")}>Ver piso SPC</Link>
              <Link className="button button--outline-light" href={`${localizedPath("contact", "es")}#inquiry`}>Solicitar cotización</Link>
            </div>
          </div>
        </header>

        <div className="article-cover"><div className="container article-cover__frame spc-explainer__cover"><Image src={asset.spc} alt={post.coverAlt?.es ?? "Muestra real de piso SPC"} fill priority sizes="(max-width: 900px) 100vw, 1200px" /></div></div>

        <div className="container article-layout spc-explainer__layout">
          <div className="article-body spc-explainer__body">
            <p className="article-intro">{post.introduction.es}</p>

            <section id="quick-answer">
              <p className="eyebrow">Respuesta directa</p>
              <h2>SPC y LVP son etiquetas que se solapan, no familias opuestas</h2>
              <div className="article-note"><strong>La distinción práctica</strong><p><strong>LVP</strong> significa luxury vinyl plank y describe un producto vinílico de lujo en formato de tabla. <strong>SPC</strong> identifica una construcción de núcleo rígido de polímero sólido. Por ello, una tabla SPC puede describirse dentro de la categoría LVP más amplia.</p></div>
              <p>Cuando un comprador busca “piso SPC vs LVP”, la comparación útil suele ser entre un producto SPC de núcleo rígido confirmado y un producto LVP flexible confirmado. Las etiquetas no bastan para aprobar una especificación.</p>
              <Link className="text-link" href="/blog/que-es-el-piso-spc/">Leer la definición de la categoría SPC <span aria-hidden="true">→</span></Link>
            </section>

            <section id="comparison">
              <p className="eyebrow">Comparación de categorías</p>
              <h2>Piso SPC vs LVP de un vistazo</h2>
              <p>Esta tabla separa las definiciones de categoría de las afirmaciones específicas del producto. No asigna resultados de rendimiento a un artículo SINOQI.</p>
              <div className="spc-vs-lvp__table-wrap">
                <table className="spc-vs-lvp__table">
                  <thead><tr><th scope="col">Punto de comparación</th><th scope="col">Piso SPC de núcleo rígido</th><th scope="col">LVP flexible</th></tr></thead>
                  <tbody>{comparisonRows.map((row) => <tr key={row.factor}><th scope="row">{row.factor}</th><td>{row.spc}</td><td>{row.lvp}</td></tr>)}</tbody>
                </table>
              </div>
            </section>

            <section id="selection">
              <p className="eyebrow">Lógica de selección</p>
              <h2>Elija desde el requisito del proyecto, no desde una sigla</h2>
              <div className="spc-explainer__number-grid">
                {[
                  ["01", "Defina la aplicación", "Indique el tipo de edificio, espacio, uso previsto y mercado de destino."],
                  ["02", "Identifique la construcción", "Pregunte si la tabla cotizada es flexible o utiliza un núcleo rígido definido."],
                  ["03", "Compare especificaciones vigentes", "Revise medidas, capas, unión, base e instalación del artículo seleccionado."],
                  ["04", "Apruebe una muestra real", "Utilice el diseño y la configuración seleccionados, no una referencia general."],
                  ["05", "Revise condiciones del pedido", "Compare cantidad, embalaje, plazo y personalización con el programa de compra."],
                  ["06", "Revise documentos requeridos", "Enumere los requisitos del mercado y confirme cuáles corresponden al producto."],
                ].map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
              </div>
            </section>

            <section id="verification">
              <p className="eyebrow">Límite de evidencia</p>
              <h2>Qué debe solicitar un comprador antes de afirmar una comparación</h2>
              <div className="spc-explainer__compare">
                <article><h3>Utilice para verificar</h3><ul><li>Especificación vigente del producto seleccionado</li><li>Muestra física aprobada o referencia visual exacta</li><li>Instrucciones de instalación de esa construcción</li><li>Documentos de ensayo o conformidad requeridos para el mercado</li><li>Cotización y confirmación de embalaje específicas del pedido</li></ul></article>
                <article><h3>No trate como prueba</h3><ul><li>Las palabras SPC o LVP sin especificación</li><li>Un diagrama genérico de otra empresa</li><li>Un informe que no pueda vincularse al artículo seleccionado</li><li>Una muestra visual sin construcción confirmada</li><li>Un método de instalación o requisito de mercado supuesto</li></ul></article>
              </div>
            </section>

            <section id="sinoqi-terms">
              <p className="eyebrow">Abastecimiento SINOQI</p>
              <h2>Condiciones iniciales confirmadas para una consulta de piso SPC</h2>
              <p>Son puntos de partida comerciales para la línea SPC de SINOQI, no afirmaciones generales sobre todos los productos SPC o LVP.</p>
              <dl className="spc-explainer__terms">
                <div><dt>MOQ inicial</dt><dd>100 piezas por diseño y color</dd></div>
                <div><dt>Referencia de plazo</dt><dd>Alrededor de 30 días después del depósito, sujeto a configuración y programa</dd></div>
                <div><dt>Muestra</dt><dd>Muestra gratuita; el comprador paga la mensajería</dd></div>
                <div><dt>Embalaje</dt><dd>Caja de cartón o envoltura plástica, confirmado por pedido</dd></div>
                <div><dt>OEM / personalización</dt><dd>Se evalúa según el producto seleccionado y la solicitud</dd></div>
              </dl>
              <Link className="text-link" href={localizedPath("spc-flooring", "es")}>Revisar la página de piso SPC <span aria-hidden="true">→</span></Link>
            </section>

            <section id="rfq">
              <p className="eyebrow">Preparación de RFQ</p>
              <h2>Prepare una comparación que el proveedor pueda responder</h2>
              <p>Envíe la información siguiente cuando necesite comparar una opción SPC con otra construcción de tabla vinílica.</p>
              <ul className="spc-explainer__checklist"><li>Empresa, tipo de comprador y mercado</li><li>Aplicación interior prevista</li><li>SPC o construcción alternativa en revisión</li><li>Medidas y disposición de capas requeridas</li><li>Preferencias de unión, base e instalación</li><li>Cantidad por diseño y color</li><li>Embalaje y fecha objetivo</li><li>Documentos que requieran confirmación por producto</li></ul>
              <div className="spc-explainer__actions"><Link className="button button--orange" href={`${localizedPath("contact", "es")}#inquiry`}>Solicitar cotización</Link><a className="button button--outline" href={company.whatsappHref} target="_blank" rel="noreferrer">Consultar por WhatsApp</a></div>
            </section>

            <section id="faq">
              <p className="eyebrow">Preguntas del comprador</p><h2>Preguntas frecuentes sobre piso SPC vs LVP</h2>
              <div className="faq-list">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
            </section>

            <section className="spc-explainer__sources" aria-labelledby="comparison-source-heading-es">
              <p className="eyebrow">Fuentes de definición</p><h2 id="comparison-source-heading-es">Referencias sectoriales utilizadas en esta comparación</h2><p>Estas referencias respaldan las definiciones de categoría. No se presentan como certificados ni pruebas de producto SINOQI.</p>
              <ul>{sourceLinks.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>
            </section>
          </div>

          <aside className="article-aside">
            <div className="article-toc"><p className="eyebrow">En esta guía</p><ol>{guideSections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></div>
            <div className="article-cta"><p className="eyebrow">Abastecimiento SPC</p><h2>Compare una configuración real</h2><p>Comparta la construcción, el diseño, formato, cantidad y destino.</p><Link className="button button--orange" href={`${localizedPath("contact", "es")}#inquiry`}>Solicitar cotización</Link><Link className="text-link" href={localizedPath("spc-flooring", "es")}>Ver piso SPC <span aria-hidden="true">→</span></Link></div>
          </aside>
        </div>
      </article>

      <section className="cta-band"><div className="container cta-band__inner"><div><p className="eyebrow">Siguiente paso</p><h2>Pase de la comparación a una revisión del producto</h2><p>Revise la línea actual de piso SPC o envíe la configuración que necesita comparar.</p></div><div className="cta-band__actions"><Link className="button button--light" href={localizedPath("spc-flooring", "es")}>Ver piso SPC</Link><Link className="button button--outline-light" href={`${localizedPath("contact", "es")}#inquiry`}>Solicitar cotización</Link></div></div></section>
    </>
  );
}
