import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { asset, company, localizedPath } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const articlePath = "/blog/que-es-el-piso-spc/";

const sourceLinks = [
  { label: "RFCI: Rigid Core — SPC, WPC and Multilayer", href: "https://rfci.com/rigid-core/" },
  { label: "ASTM F3261: Resilient Flooring with Rigid Polymeric Core", href: "https://store.astm.org/f3261-25a.html" },
];

const faqs = [
  {
    question: "¿Qué significa SPC en pisos?",
    answer: "El Resilient Floor Covering Institute utiliza SPC para referirse a Solid Polymer Core, una de las construcciones de la categoría de pisos de núcleo rígido.",
  },
  {
    question: "¿Qué es el piso SPC?",
    answer: "El piso SPC es una categoría de piso resiliente modular construida alrededor de un núcleo polimérico rígido. La construcción exacta debe confirmarse para el producto seleccionado.",
  },
  {
    question: "¿La etiqueta SPC confirma todos los detalles del producto?",
    answer: "No. La etiqueta por sí sola no confirma medidas, disposición de capas, sistema de unión, base, resultados de ensayo ni otros detalles específicos del producto.",
  },
  {
    question: "¿Qué debe verificar un importador antes de pedir piso SPC?",
    answer: "Debe verificar el diseño, el formato requerido, la construcción, la unión y la base, la cantidad, el embalaje, el destino y cualquier requisito documental del mercado.",
  },
  {
    question: "¿Cuál es el MOQ inicial de SINOQI para piso SPC?",
    answer: "El MOQ inicial confirmado es de 100 piezas por diseño y color. La configuración final se confirma en la cotización.",
  },
  {
    question: "¿Puedo solicitar una muestra de piso SPC?",
    answer: "Sí. SINOQI proporciona una muestra gratuita y el comprador asume el coste de mensajería.",
  },
  {
    question: "¿Cuál es la referencia actual de plazo?",
    answer: "La referencia actual es de alrededor de 30 días después de recibir el depósito, sujeta a la configuración del pedido y al programa de producción.",
  },
  {
    question: "¿Se pueden evaluar requisitos OEM o de marca privada?",
    answer: "Sí. Los requisitos OEM, de marca privada y otras personalizaciones se evalúan según el producto seleccionado y la solicitud del comprador.",
  },
];

const guideSections = [
  ["definition", "Definición directa"],
  ["category", "Qué indica la categoría"],
  ["verification", "Qué debe verificar el comprador"],
  ["buying-terms", "Condiciones SINOQI confirmadas"],
  ["rfq", "Cómo preparar una RFQ"],
  ["faq", "Preguntas frecuentes"],
];

export function SpcFlooringExplainerEs({ post }: { post: BlogPost }) {
  const canonicalUrl = new URL(articlePath, SITE_ORIGIN).toString();
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
      about: { "@type": "Product", name: "Piso SPC", url: productUrl },
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
              <span aria-current="page">¿Qué es el piso SPC?</span>
            </nav>
            <div className="article-meta">
              <span>{post.category.es}</span><time dateTime={post.publishedAt}>{formattedDate}</time><span>{post.readingTime.es}</span>
            </div>
            <h1>{post.title.es}</h1>
            <p>{post.description.es}</p>
            <div className="spc-explainer__hero-actions">
              <Link className="button button--orange" href={localizedPath("spc-flooring", "es")}>Ver piso SPC</Link>
              <Link className="button button--outline-light" href={`${localizedPath("contact", "es")}#inquiry`}>Solicitar cotización</Link>
            </div>
          </div>
        </header>

        <div className="article-cover">
          <div className="container article-cover__frame spc-explainer__cover">
            <Image src={asset.spc} alt={post.coverAlt?.es ?? "Muestra real de piso SPC"} fill priority sizes="(max-width: 900px) 100vw, 1200px" />
          </div>
        </div>

        <div className="container article-layout spc-explainer__layout">
          <div className="article-body spc-explainer__body">
            <p className="article-intro">{post.introduction.es}</p>

            <section id="definition">
              <p className="eyebrow">Respuesta directa</p>
              <h2>El piso SPC es una categoría de piso resiliente de núcleo rígido</h2>
              <div className="article-note">
                <strong>Qué significa “SPC”</strong>
                <p>El Resilient Floor Covering Institute utiliza <strong>Solid Polymer Core</strong>. ASTM F3261 describe la categoría más amplia como piso resiliente modular que incorpora un núcleo polimérico rígido en la estructura del producto.</p>
              </div>
              <p>Estas referencias explican la categoría. No certifican un artículo concreto de SINOQI ni sustituyen la ficha técnica, la muestra aprobada o los documentos confirmados para un pedido.</p>
            </section>

            <section id="category">
              <p className="eyebrow">Contexto de la categoría</p>
              <h2>Qué indica la etiqueta de categoría y qué no indica</h2>
              <div className="spc-explainer__compare">
                <article>
                  <h3>La etiqueta puede establecer</h3>
                  <ul>
                    <li>Que el producto pertenece a una categoría de pisos de núcleo rígido</li>
                    <li>Que un núcleo polimérico rígido forma parte de su estructura</li>
                    <li>Que la selección debe comenzar con un formato y uso previstos definidos</li>
                  </ul>
                </article>
                <article>
                  <h3>La etiqueta no establece</h3>
                  <ul>
                    <li>Una composición o disposición de capas universal</li>
                    <li>Una medida, sistema de unión o base únicos</li>
                    <li>Resultados de ensayo o conformidad específicos del producto</li>
                  </ul>
                </article>
              </div>
              <p>Para abastecimiento, la pregunta práctica no es solo “¿Es SPC?”, sino “¿Qué construcción SPC confirmada y qué configuración de pedido estamos evaluando?”.</p>
            </section>

            <section id="verification">
              <p className="eyebrow">Verificación del producto</p>
              <h2>Seis datos que conviene confirmar antes de comparar cotizaciones</h2>
              <div className="spc-explainer__number-grid">
                {[
                  ["01", "Diseño seleccionado", "Utilice una imagen real del producto o una referencia de muestra."],
                  ["02", "Formato requerido", "Indique las medidas solicitadas en lugar de asumir un estándar."],
                  ["03", "Construcción del producto", "Solicite la especificación vigente del artículo seleccionado."],
                  ["04", "Unión y base", "Confirme la configuración disponible para el pedido previsto."],
                  ["05", "Embalaje", "Acuerde el método de embalaje específico antes de producir."],
                  ["06", "Documentación", "Enumere los documentos del mercado de destino que deban revisarse."],
                ].map(([number, title, body]) => (
                  <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
                ))}
              </div>
            </section>

            <section id="buying-terms">
              <p className="eyebrow">Abastecimiento SINOQI</p>
              <h2>Puntos de partida confirmados para una consulta de piso SPC</h2>
              <p>Estos son puntos de partida comerciales confirmados. La cotización final y la confirmación del producto seleccionado rigen el pedido.</p>
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
              <h2>Envíe un requisito que pueda contrastarse con un producto real</h2>
              <p>Incluya estos datos para que la primera respuesta se centre en una selección viable y no en una especificación supuesta.</p>
              <ul className="spc-explainer__checklist">
                <li>Empresa, tipo de comprador y mercado de destino</li>
                <li>Aplicación interior prevista</li>
                <li>Diseño preferido o referencia visual</li>
                <li>Formato y construcción requeridos</li>
                <li>Cantidad por diseño y color</li>
                <li>Preferencia de embalaje y fecha objetivo</li>
                <li>Documentación que deba revisarse para el destino</li>
              </ul>
              <div className="spc-explainer__actions">
                <Link className="button button--orange" href={`${localizedPath("contact", "es")}#inquiry`}>Solicitar cotización</Link>
                <a className="button button--outline" href={company.whatsappHref} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
              </div>
            </section>

            <section id="faq">
              <p className="eyebrow">Preguntas del comprador</p>
              <h2>Preguntas frecuentes sobre piso SPC</h2>
              <div className="faq-list">
                {faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
              </div>
            </section>

            <section className="spc-explainer__sources" aria-labelledby="source-heading-es">
              <p className="eyebrow">Fuentes de definición</p>
              <h2 id="source-heading-es">Referencias sectoriales utilizadas en esta guía</h2>
              <p>Estas fuentes definen la categoría general. No se presentan como certificados de producto ni como pruebas de SINOQI.</p>
              <ul>{sourceLinks.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>
            </section>
          </div>

          <aside className="article-aside">
            <div className="article-toc"><p className="eyebrow">En esta guía</p><ol>{guideSections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></div>
            <div className="article-cta">
              <p className="eyebrow">Abastecimiento SPC</p><h2>Compare un producto real</h2><p>Comparta el diseño, formato requerido, cantidad y destino.</p>
              <Link className="button button--orange" href={`${localizedPath("contact", "es")}#inquiry`}>Solicitar cotización</Link>
              <Link className="text-link" href={localizedPath("spc-flooring", "es")}>Ver piso SPC <span aria-hidden="true">→</span></Link>
              <Link className="text-link" href="/blog/piso-spc-vs-lvp/">Comparar SPC y LVP <span aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div><p className="eyebrow">Siguiente paso</p><h2>Pase de la definición a la selección del producto</h2><p>Revise la línea actual de piso SPC o envíe su requisito para recibir una respuesta específica.</p></div>
          <div className="cta-band__actions"><Link className="button button--light" href={localizedPath("spc-flooring", "es")}>Ver piso SPC</Link><Link className="button button--outline-light" href={`${localizedPath("contact", "es")}#inquiry`}>Solicitar cotización</Link></div>
        </div>
      </section>
    </>
  );
}
