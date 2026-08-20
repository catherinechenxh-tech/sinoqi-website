import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { localizedBlogPostPath } from "@/content/blog";
import { company, localizedPath } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const images = {
  designs: "/assets/wpc-wall-panel.png",
  production: "/assets/wpc-production.jpg",
  catalog: "/assets/catalog-cover.jpg",
};

const designDirections = [
  ["Referencias efecto madera", "El catálogo disponible muestra líneas visuales efecto madera en tonos claros, medios y oscuros. Estas descripciones se refieren a la apariencia; no significan que los paneles sean de madera maciza."],
  ["Colores claros y neutros", "El blanco, el beige claro, el gris pálido y otras referencias de bajo contraste pueden ayudar a planificar una colección interior sobria. Confirme la referencia exacta y la disponibilidad de muestra antes de presentarla al comprador."],
  ["Grises y neutros oscuros", "Los grises y tonos neutros más profundos pueden incluirse en mercados que buscan mayor contraste. Una imagen en pantalla no constituye un estándar físico de color."],
  ["Líneas de color uniforme", "El catálogo incluye referencias de apariencia más uniforme. La disponibilidad, la combinación con el perfil y la superficie final se revisan para cada solicitud."],
] as const;

const profileReferences = [
  ["195 × 14 mm", "Referencia de perfil incluida en el catálogo para comparar el ritmo del panel y la cobertura de la pared."],
  ["195 × 25 mm", "Sección más profunda incluida en el catálogo, que genera un relieve y un patrón de sombras diferentes."],
  ["150 × 10 mm", "Referencia de perfil más estrecho que produce una repetición más frecuente sobre la pared."],
  ["195 × 12 mm", "Otra sección incluida en el catálogo para comparar el espaciado del perfil y el relieve visible."],
] as const;

const assortmentSteps = [
  ["Defina el canal de venta", "Indique si la colección se destina a importación y distribución, venta mayorista, comercio de materiales, suministro para interiores o compras de proyectos."],
  ["Seleccione pocas líneas iniciales", "Comience con una combinación controlada de efecto madera, tonos claros, grises o colores uniformes, en lugar de tratar todo el catálogo como inventario."],
  ["Combine color y perfil", "Envíe tanto la referencia visual como el perfil deseado. Una imagen de color por sí sola no confirma con qué sección está disponible ese acabado."],
  ["Distribuya la cantidad por referencia", "El MOQ inicial confirmado es de 100 piezas por diseño y color. Indique la cantidad estimada de cada combinación seleccionada."],
  ["Valide con una muestra física", "SINOQI puede revisar una solicitud de muestra gratuita para una necesidad B2B real. El comprador paga la mensajería y la disponibilidad se confirma en cada consulta."],
] as const;

const faqs = [
  ["¿Qué colores de panel de pared WPC aparecen en el catálogo disponible?", "El catálogo muestra líneas efecto madera, colores claros y neutros, grises, neutros oscuros y referencias de apariencia más uniforme. Son referencias de selección, no una lista de inventario en tiempo real."],
  ["¿Están disponibles actualmente todas las referencias YW?", "No se presupone una disponibilidad permanente. Envíe la referencia YW o una imagen clara del catálogo y SINOQI revisará el perfil, acabado y estado de la muestra para la solicitud."],
  ["¿Cómo elijo un diseño de panel de pared WPC?", "Comience por el mercado de destino, el canal de venta y el uso interior previsto. Después seleccione una línea visual, elija un perfil del catálogo y confirme la combinación mediante una muestra física."],
  ["¿El perfil del panel WPC cambia la apariencia de la pared?", "Sí. El ancho, el relieve y el espaciado del perfil influyen en el ritmo visual y las sombras. El catálogo disponible incluye referencias de 195 × 14, 195 × 25, 150 × 10 y 195 × 12 mm, sujetas a confirmación."],
  ["¿La muestra física tendrá exactamente el mismo color que mi pantalla?", "No se promete una coincidencia exacta. La configuración de la pantalla, la fotografía y la iluminación pueden cambiar la apariencia; utilice la muestra aplicable y la información aprobada del pedido para la confirmación final."],
  ["¿Puedo solicitar varios diseños WPC en una misma consulta de muestras?", "Puede enviar varias referencias para revisión. Incluya el mercado, el perfil, la cantidad estimada por diseño y color y el destino de la muestra para confirmar qué opciones pueden prepararse."],
  ["¿Cuál es el MOQ por diseño y color?", "El MOQ inicial confirmado es de 100 piezas por diseño y color. La combinación final de productos y la configuración del pedido se revisan durante la cotización."],
  ["¿Qué debe incluir un importador en una solicitud de cotización de WPC?", "Incluya perfil, referencia de diseño o color, cantidad de cada combinación, mercado de destino, uso interior, embalaje y cualquier requisito de muestra o personalización."],
] as const;

export function WpcWallPanelDesignsColorsEs({ post }: { post: BlogPost }) {
  const quoteHref = `${localizedPath("contact", "es")}#inquiry`;
  const canonicalUrl = new URL(localizedBlogPostPath(post.slug, "es"), SITE_ORIGIN).toString();
  const absoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();
  const formattedDate = new Intl.DateTimeFormat("es", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  const schemas = [
    {
      "@context": "https://schema.org", "@type": "Article", headline: post.title.es,
      description: post.description.es, image: [absoluteUrl(images.designs), absoluteUrl(images.production)],
      datePublished: post.publishedAt, dateModified: post.publishedAt, mainEntityOfPage: canonicalUrl,
      author: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
      publisher: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl(localizedPath("home", "es")) },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl(localizedPath("blog", "es")) },
        { "@type": "ListItem", position: 3, name: post.title.es, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}
      <article className="design-guide wpc-design-guide">
        <header className="article-hero design-guide__hero"><div className="container article-hero__inner">
          <nav className="breadcrumb" aria-label="Migas de pan"><Link href={localizedPath("home", "es")}>Inicio</Link><span aria-hidden="true">/</span><Link href={localizedPath("blog", "es")}>Blog</Link><span aria-hidden="true">/</span><span aria-current="page">Diseños y colores WPC</span></nav>
          <div className="article-meta"><span>Guía de selección de paneles WPC</span><time dateTime={post.publishedAt}>{formattedDate}</time><span>{post.readingTime.es}</span></div>
          <h1>{post.title.es}</h1>
          <p>Compare líneas de diseño, colores y perfiles incluidos en el catálogo y prepare una solicitud de muestras para su programa de importación, distribución o compra de proyectos.</p>
          <p className="design-guide__hero-context">Esta guía está pensada para decisiones B2B de surtido y compra. Las imágenes del catálogo y referencias YW ayudan a identificar una línea visual, pero no confirman inventario, una combinación fija con el perfil ni una coincidencia exacta entre pantalla y producto.</p>
          <div className="design-guide__actions"><Link className="button button--orange" href={localizedPath("download", "es")}>Solicitar catálogo WPC</Link><Link className="button button--outline-light" href={quoteHref}>Solicitar muestras</Link></div>
          <p className="design-guide__rfq-note">Indique perfil, color o referencia YW, cantidad por diseño y color, mercado de destino y país de entrega de la muestra.</p>
        </div></header>

        <div className="article-cover design-guide__cover"><div className="container design-guide__cover-grid"><div className="design-guide__cover-main wpc-design-guide__catalog-board"><Image src={images.designs} alt={post.coverAlt?.es ?? "Diseños y colores de paneles WPC"} fill priority sizes="(max-width: 900px) 100vw, 68vw" /></div><div className="design-guide__cover-side"><Image src={images.production} alt="Perfiles de panel de pared WPC durante la producción" fill priority sizes="(max-width: 900px) 100vw, 32vw" /></div></div></div>

        <div className="container design-guide__content">
          <section className="design-guide__intro" id="como-usar"><p className="eyebrow">Ruta de selección</p><h2>Cómo utilizar esta guía de diseños de paneles WPC</h2><p>Elegir una colección comercial requiere más que seleccionar una imagen atractiva. Importadores, distribuidores, mayoristas, comercios de materiales y compradores de proyectos necesitan relacionar la referencia visual con un perfil, una cantidad y una muestra que puedan revisarse para el pedido real.</p><ol className="design-guide__number-list">{["Elegir una línea de diseño", "Comparar perfiles", "Seleccionar colores", "Solicitar catálogo o muestras", "Confirmar la configuración cotizada"].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol><p className="design-guide__related-copy">Para consultar condiciones comerciales y la información principal del producto, revise la página de <Link href={localizedPath("wpc-wall-panel", "es")}>paneles de pared WPC</Link>. Las imágenes de aplicaciones son referencias de selección y no se presentan como proyectos terminados de clientes.</p></section>

          <section id="lineas-diseno"><div className="design-guide__section-heading"><p className="eyebrow">Líneas visuales</p><h2>Diseños de paneles de pared WPC visibles en el catálogo</h2><p>El catálogo público actual muestra las siguientes líneas entre sus referencias YW. Sirven para preparar una selección inicial; no representan una lista completa ni permanentemente disponible.</p></div><div className="design-guide__directions">{designDirections.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="design-guide__single-action"><Link className="button button--orange" href={localizedPath("download", "es")}>Solicitar catálogo WPC</Link></div></section>

          <section className="design-guide__finish-section" id="forma-perfil"><div className="design-guide__section-heading"><p className="eyebrow">Perfil y ritmo visual</p><h2>Cómo cambia el diseño de la pared según el perfil</h2><p>El perfil modifica la repetición, el relieve y el patrón de sombras de la superficie. Por ello, elegir la sección forma parte de la decisión de diseño y no es un detalle técnico independiente.</p></div><div className="design-guide__routes">{profileReferences.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div><div className="article-note"><strong>Límite del catálogo</strong><p>Estas medidas son referencias de series visibles en el catálogo. Confirme perfil, combinación de acabado y especificación final antes del pedido.</p></div></section>

          <section className="design-guide__sample-section" id="color-textura"><div className="design-guide__sample-media wpc-design-guide__catalog-board"><Image src={images.designs} alt="Referencias de paneles WPC efecto madera, neutros y grises" fill sizes="(max-width: 900px) 100vw, 46vw" /></div><div><p className="eyebrow">Revisión del color y la superficie</p><h2>Color, veta y textura: qué debe comparar el comprador</h2><p>La veta efecto madera, el tono neutro y el relieve visible influyen en la apariencia final. Una fotografía puede comunicar una dirección, pero no establece un color físico exacto, un proceso superficial ni un nivel de rendimiento.</p><div className="design-guide__steps"><article><span>01</span><div><h3>Compare primero la línea visual</h3><p>Utilice el catálogo para elegir referencias efecto madera, claras, grises, oscuras o de color uniforme.</p></div></article><article><span>02</span><div><h3>Identifique la referencia exacta</h3><p>Envíe un número YW, una página del catálogo o una imagen clara para revisar el diseño solicitado.</p></div></article><article><span>03</span><div><h3>Separe apariencia y rendimiento</h3><p>Textura y veta describen aquí la apariencia visual; no implican prestaciones no verificadas de rayado, fuego, acústica, agua o medio ambiente.</p></div></article><article><span>04</span><div><h3>Confirme con una muestra física</h3><p>La iluminación, la fotografía y la pantalla alteran la percepción del color. Utilice la muestra aplicable y los datos aprobados para confirmar.</p></div></article></div><div className="design-guide__inline-actions"><Link className="button button--orange" href={quoteHref}>Solicitar muestras por diseño</Link><Link className="text-link" href={localizedPath("applications", "es")}>Ver aplicaciones interiores <span aria-hidden="true">→</span></Link></div></div></section>

          <section id="surtido"><div className="design-guide__section-heading"><p className="eyebrow">Planificación B2B</p><h2>Cómo puede un distribuidor crear una colección práctica</h2><p>Un surtido útil parte del canal y del mercado. Después reduce las líneas visuales a combinaciones que puedan convertirse en muestras, cotizaciones y programas de reposición.</p></div><div className="design-guide__steps">{assortmentSteps.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>

          <section className="design-guide__catalog" id="catalogo-muestra"><div><p className="eyebrow">Del catálogo a la muestra</p><h2>Por qué las muestras físicas son importantes antes de comprar</h2><p>El catálogo bilingüe de SINOQI permite identificar familias, perfiles y líneas visuales. Inicia la selección, pero no sustituye la revisión actual del producto ni una muestra aprobada.</p><div className="design-guide__catalog-lists"><div><h3>Utilice el catálogo para</h3><ul>{["Identificar una línea visual", "Compartir una referencia YW o imagen reconocible", "Comparar perfiles del catálogo", "Preparar una selección para muestras"].map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>No lo interprete como</h3><ul>{["Inventario en tiempo real", "Garantía de muestra para cada referencia", "Prueba de un proceso superficial exacto", "Garantía de coincidencia entre pantalla y producto"].map((item) => <li key={item}>{item}</li>)}</ul></div></div><div className="design-guide__inline-actions"><Link className="button button--orange" href={localizedPath("download", "es")}>Solicitar catálogo</Link><Link className="text-link" href={quoteHref}>Enviar solicitud de muestras <span aria-hidden="true">→</span></Link></div></div><div className="design-guide__catalog-image"><Image src={images.catalog} alt="Portada del catálogo bilingüe PVC y WPC de SINOQI" fill sizes="(max-width: 900px) 100vw, 34vw" /></div></section>

          <section className="design-guide__request" id="cotizacion"><div className="design-guide__request-copy"><p className="eyebrow">Prepare su consulta</p><h2>Qué enviar al solicitar una cotización de paneles WPC</h2><p>Una solicitud clara permite revisar diseño, perfil y configuración comercial sin inventar especificaciones que faltan.</p><div className="design-guide__request-grid">{["Empresa y mercado de destino", "Tipo de comprador o canal", "Uso interior previsto", "Perfil preferido", "Número YW, página o imagen", "Cantidad por diseño y color", "Preferencia de embalaje", "País de entrega de la muestra", "Personalización o marca privada", "Fecha objetivo del pedido"].map((item) => <div key={item}><span aria-hidden="true">✓</span><p>{item}</p></div>)}</div><div className="design-guide__inline-actions"><Link className="button button--orange" href={quoteHref}>Preparar consulta WPC</Link><Link className="button button--outline" href={localizedPath("download", "es")}>Solicitar catálogo</Link></div></div><div className="design-guide__white-panel"><Image src={images.production} alt="Perfiles de panel de pared WPC preparados durante la producción" fill sizes="(max-width: 900px) 100vw, 35vw" /></div></section>

          <section className="design-guide__faq" id="faq"><div className="design-guide__section-heading"><p className="eyebrow">FAQ</p><h2>Preguntas sobre diseños y colores de paneles WPC</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
        </div>
      </article>

      <section className="cta-band design-guide__final-cta"><div className="container cta-band__inner"><div><p className="eyebrow">Panel de pared WPC</p><h2>Pase de una referencia visual a una solicitud lista para muestra</h2><p>Comparta perfil, color o referencia YW, cantidad por diseño y color, mercado y embalaje.</p></div><div className="cta-band__actions"><Link className="button button--light" href={localizedPath("wpc-wall-panel", "es")}>Ver paneles WPC</Link><Link className="button button--outline-light" href={quoteHref}>Solicitar cotización</Link></div></div></section>
    </>
  );
}
