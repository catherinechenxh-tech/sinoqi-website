import Image from "next/image";
import Link from "next/link";
import { CatalogRequestForm } from "@/components/catalog-request-form";
import { ContactInquiryForm } from "@/components/contact-inquiry-form";
import { InquiryForm } from "@/components/inquiry-form";
import { SpcFlooringPage } from "@/components/spc-flooring-page";
import { UvMarbleSheetPage } from "@/components/uv-marble-sheet-page";
import { blogPosts, localizedBlogPostPath } from "@/content/blog";
import { SITE_ORIGIN } from "@/lib/site-url";
import { createQuoteBasedPageSchema } from "@/lib/structured-data";
import {
  asset,
  company,
  localizedPath,
  OUTDOOR_WPC_PATH,
  products,
  productImageAlt,
  type Locale,
  type PageKey,
} from "@/content/site";

type Bilingual = { es: string; en: string };
const tx = (locale: Locale, value: Bilingual) => value[locale];

const shared = {
  eyebrow: { es: "Fabricación y comercio integrados", en: "Integrated manufacturing and trade" },
  quote: { es: "Solicitar cotización", en: "Request a custom quote" },
  sample: { es: "Solicitar muestra", en: "Request a sample" },
  learn: { es: "Ver detalles", en: "View details" },
  response: { es: "Respuesta en un día laborable", en: "Reply within one business day" },
};

function SectionTitle({ eyebrow, title, body, align = "left" }: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

function Hero({ locale, eyebrow, title, body, image, imageAlt, video, chips, primaryHref, primaryLabel, secondaryHref, secondaryLabel, actionNote }: {
  locale: Locale;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  video?: string;
  chips?: string[];
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  actionNote?: string;
}) {
  return (
    <section className="hero">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero__lead">{body}</p>
          {chips && <div className="chip-row">{chips.map((chip) => <span className="chip" key={chip}>{chip}</span>)}</div>}
          <div className="hero__actions">
            <Link className="button button--orange" href={primaryHref ?? `${localizedPath("contact", locale)}#inquiry`}>
              {primaryLabel ?? tx(locale, shared.quote)}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link className="button button--ghost" href={secondaryHref}>{secondaryLabel}</Link>
            )}
          </div>
          {actionNote && <p className="hero__action-note">{actionNote}</p>}
          <p className="micro-proof"><span aria-hidden="true">✓</span> {tx(locale, shared.response)}</p>
        </div>
        <div className={`hero__media ${video ? "hero__media--video" : ""} ${image.includes("placeholder") ? "hero__media--placeholder" : ""}`}>
          {video ? (
            <video aria-label={imageAlt} autoPlay controls loop muted playsInline poster={image} preload="metadata">
              <source src={video} type="video/mp4" />
              {locale === "es" ? "Su navegador no admite video HTML5." : "Your browser does not support HTML5 video."}
            </video>
          ) : (
            <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          )}
          <div className="hero__media-card">
            <strong>1990</strong>
            <span>{locale === "es" ? "Año de fundación" : "Established"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactStrip({ locale }: { locale: Locale }) {
  const facts = locale === "es"
    ? [["29.220 m²", "Superficie de fábrica"], ["110", "Empleados"], ["300 × 40HQ/mes", "Capacidad de toda la cartera"], ["1 día laborable", "Tiempo de respuesta"]]
    : [["29,220 m²", "Factory area"], ["110", "Employees"], ["300 × 40HQ/month", "Capacity across the portfolio"], ["1 business day", "Response time"]];
  return (
    <section className="fact-strip" aria-label={locale === "es" ? "Datos de la empresa" : "Company facts"}>
      <div className="container fact-grid">
        {facts.map(([value, label]) => <div className="fact" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>
  );
}

function ProductGrid({ locale, includeOutdoor = false }: { locale: Locale; includeOutdoor?: boolean }) {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <article className="product-card" key={product.key}>
          <Link className="product-card__image" href={localizedPath(product.key, locale)}>
            <Image
              src={product.image}
              alt={productImageAlt[locale][product.key]}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
            />
            <span>0{index + 1}</span>
          </Link>
          <div className="product-card__body">
            <h3><Link href={localizedPath(product.key, locale)}>{product[locale].name}</Link></h3>
            <p>{product[locale].summary}</p>
            <Link className="text-link" href={localizedPath(product.key, locale)}>{tx(locale, shared.learn)} <span aria-hidden="true">→</span></Link>
          </div>
        </article>
      ))}
      {includeOutdoor && locale === "en" && (
        <article className="product-card">
          <Link className="product-card__image" href={OUTDOOR_WPC_PATH}>
            <Image
              src={asset.outdoorWpcHero}
              alt="Outdoor WPC wall panel profile with a wood-look surface"
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
            />
            <span>05</span>
          </Link>
          <div className="product-card__body">
            <h3><Link href={OUTDOOR_WPC_PATH}>Outdoor WPC Wall Panel</Link></h3>
            <p>Exterior wall cladding product line with profile, surface, packing and customization confirmed for each request.</p>
            <Link className="text-link" href={OUTDOOR_WPC_PATH}>View details <span aria-hidden="true">→</span></Link>
          </div>
        </article>
      )}
    </div>
  );
}

function Process({ locale }: { locale: Locale }) {
  const items = locale === "es"
    ? [
        ["01", "Comparta su necesidad", "Indique producto, mercado, cantidad, medidas, acabado y embalaje."],
        ["02", "Validamos la configuración", "Confirmamos opciones disponibles, MOQ, plazo y condiciones comerciales."],
        ["03", "Revise la muestra", "La muestra es gratuita; el comprador asume el coste de mensajería."],
        ["04", "Producción y carga", "La producción se programa tras el depósito y se coordina el embalaje y la carga."],
      ]
    : [
        ["01", "Share your requirement", "Tell us the product, market, quantity, size, finish and packing."],
        ["02", "We validate the setup", "We confirm available options, MOQ, lead time and commercial terms."],
        ["03", "Review your sample", "The sample is free; the buyer covers the courier cost."],
        ["04", "Production and loading", "Production is scheduled after deposit, followed by packing and loading coordination."],
      ];
  return <div className="process-grid">{items.map(([n, title, body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>;
}

function CtaBand({ locale, title, body }: { locale: Locale; title?: string; body?: string }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <p className="eyebrow">SINOQI</p>
          <h2>{title ?? (locale === "es" ? "Conversemos sobre su próxima colección" : "Let’s discuss your next collection")}</h2>
          <p>{body ?? (locale === "es" ? "Comparta sus medidas, acabados y volumen. Le responderemos en un día laborable." : "Share your sizes, finishes and volume. We will reply within one business day.")}</p>
        </div>
        <div className="cta-band__actions">
          <Link className="button button--light" href={`${localizedPath("contact", locale)}#inquiry`}>{tx(locale, shared.quote)}</Link>
          <a className="button button--outline-light" href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
    </section>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const buyers = es
    ? [
        ["Industria y comercio integrados", "Un solo equipo coordina producto, producción, embalaje y exportación."],
        ["Configuración por mercado", "Medidas, diseño, acabado y embalaje se evalúan según cada solicitud."],
        ["Preparación para exportación", "Apoyamos pruebas de mercado, pedidos de contenedor y reposición continua."],
        ["Respuesta comercial clara", "Muestras gratuitas con mensajería a cargo del comprador y respuesta en un día laborable."],
      ]
    : [
        ["Integrated manufacturing and trade", "One team coordinates product, production, packing and export."],
        ["Market-based configuration", "Size, design, finish and packing are evaluated for each request."],
        ["Export-ready order support", "We support market trials, container orders and ongoing replenishment."],
        ["Clear commercial response", "Free samples with buyer-paid courier and a reply within one business day."],
      ];
  const applications = es
    ? [
        [asset.pvc, "Techos interiores", "Paneles de techo PVC para espacios residenciales y comerciales."],
        [asset.wpc, "Paredes decorativas", "Paneles WPC para interiores residenciales y comerciales."],
        [asset.uv, "Renovación de paredes", "Láminas UV efecto mármol para superficies interiores."],
        [asset.spc, "Pisos interiores", "Colecciones SPC en los formatos visibles en catálogo."],
      ]
    : [
        [asset.pvc, "Interior ceilings", "PVC ceiling panels for residential and commercial spaces."],
        [asset.wpc, "Decorative walls", "WPC panels for residential and commercial interiors."],
        [asset.uv, "Wall renovation", "Marble-effect UV sheets for interior surfaces."],
        [asset.spc, "Interior flooring", "SPC collections in the formats shown in the catalog."],
      ];
  const terms = es
    ? [
        ["MOQ", "Desde 100 piezas por modelo y color para las líneas confirmadas."],
        ["Plazo habitual", "30 días desde la recepción del depósito, sujeto a configuración."],
        ["Muestra", "Gratuita para compradores interesados; mensajería a cargo del comprador."],
        ["Personalización", "Medidas, diseño, acabado y embalaje se evalúan según la solicitud."],
      ]
    : [
        ["MOQ", "From 100 pieces per design and color for the confirmed product lines."],
        ["Regular lead time", "30 days from receipt of deposit, subject to configuration."],
        ["Sample", "Free for interested buyers; courier paid by the buyer."],
        ["Customization", "Size, design, finish and packing are evaluated per request."],
      ];
  return (
    <>
      <Hero
        locale={locale}
        eyebrow={`SINOQI · ${tx(locale, shared.eyebrow)}`}
        title={es ? "Materiales decorativos para distribuidores que compran con confianza" : "Decorative materials built for confident distribution"}
        body={es ? "Paneles de techo PVC, paneles de pared WPC, láminas de mármol UV y pisos SPC con fabricación, personalización y soporte comercial desde Hangzhou." : "PVC ceiling panels, WPC wall panels, UV marble sheets and SPC flooring with manufacturing, customization and commercial support from Hangzhou."}
        image={asset.factory}
        imageAlt={es ? "Vista general del taller de producción de paneles de techo PVC de SINOQI" : "Overview of the SINOQI PVC ceiling panel production workshop"}
        video={asset.factoryOverviewVideo}
        chips={es ? ["Distribución", "Importación", "Proyectos"] : ["Distribution", "Import", "Projects"]}
        secondaryHref={localizedPath("manufacturing", locale)}
        secondaryLabel={es ? "Conocer la fábrica" : "Explore our factory"}
      />
      <FactStrip locale={locale} />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={es ? "Cuatro líneas principales" : "Four core product lines"}
            title={es ? "Una cartera clara para su mercado" : "A focused portfolio for your market"}
            body={es ? "Seleccione una categoría para revisar sus opciones iniciales y preparar una cotización basada en su demanda real." : "Choose a category to review the starting options and prepare a quotation around your actual demand."}
          />
          <ProductGrid locale={locale} />
          {!es && (
            <div className="section-actions">
              <Link className="button button--outline" href={OUTDOOR_WPC_PATH}>Explore Outdoor WPC Wall Panel</Link>
            </div>
          )}
          <div className="hero__actions">
            <Link className="button button--orange" href={localizedPath("download", locale)}>
              {es ? "Descargar catálogo" : "Download Catalog"}
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            eyebrow={es ? "Ventajas principales" : "Core advantages"}
            title={es ? "Por qué los compradores B2B trabajan con SINOQI" : "Why B2B buyers work with SINOQI"}
            body={es ? "Apoyamos a importadores, distribuidores, mayoristas, cadenas y compradores de proyectos, con exportaciones a América Latina, Sudeste Asiático, Estados Unidos, Oriente Medio e India." : "We support importers, distributors, wholesalers, chains and project buyers, with exports to Latin America, Southeast Asia, the United States, the Middle East and India."}
          />
          <div className="value-grid value-grid--dark">{buyers.map(([title, body]) => <article key={title}><span className="value-dot" /><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container split-feature">
          <div className="split-feature__media">
            <Image src={asset.pvcProduction} alt={es ? "Línea de producción de paneles PVC" : "PVC panel production line"} fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div>
            <p className="eyebrow">{es ? "Capacidad de la empresa" : "Company strength"}</p>
            <h2>{es ? "De la fábrica al contenedor, con un solo equipo" : "From factory to container, coordinated by one team"}</h2>
            <p>{es ? "SINOQI integra fabricación y comercio. Evaluamos configuraciones por cliente, coordinamos embalaje y trabajamos con programas desde prueba de mercado hasta reposición continua." : "SINOQI combines manufacturing and trade. We evaluate configurations by customer, coordinate packing and support programs from market testing to ongoing replenishment."}</p>
            <ul className="check-list">
              <li>{es ? "Instalaciones propias de 29.220 m² y 110 empleados" : "29,220 m² of SINOQI-owned facilities and 110 employees"}</li>
              <li>{es ? "Capacidad pública de 300 × 40HQ/mes en toda la cartera" : "Public capacity of 300 × 40HQ/month across the portfolio"}</li>
              <li>{es ? "Embalaje en caja de cartón o plástico retráctil" : "Carton or shrink-wrap packing"}</li>
              <li>{es ? "Muestras gratuitas; mensajería a cargo del comprador" : "Free samples; courier paid by the buyer"}</li>
            </ul>
            <Link className="text-link" href={localizedPath("manufacturing", locale)}>{es ? "Ver capacidad de fabricación" : "View manufacturing capability"} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={es ? "Aplicaciones" : "Applications"} title={es ? "Empiece por el espacio y encuentre la línea adecuada" : "Start with the space and find the right product line"} body={es ? "Estas imágenes muestran usos orientativos y no se presentan como casos de clientes." : "These images show indicative uses and are not presented as customer cases."} />
          <div className="application-grid">{applications.map(([image, title, body]) => <article key={title}><div className="application-card__media"><Image src={image} alt={title} fill sizes="(max-width: 800px) 100vw, 24vw" /><span className="application-card__label">{es ? "Referencia de selección" : "Selection reference"}</span></div><div><h2>{title}</h2><p>{body}</p><Link className="text-link" href={localizedPath("applications", locale)}>{es ? "Ver aplicaciones" : "View applications"} <span aria-hidden="true">→</span></Link></div></article>)}</div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionTitle eyebrow={es ? "Condiciones iniciales" : "Starting terms"} title={es ? "Datos prácticos para preparar su consulta" : "Practical terms to prepare your inquiry"} body={es ? "La configuración y el calendario final se confirman en cada cotización." : "The final configuration and schedule are confirmed in each quotation."} />
          <div className="value-grid">{terms.map(([title, body]) => <article key={title}><span className="value-dot" /><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={es ? "Cómo trabajamos" : "How we work"} title={es ? "Del requisito a la carga, sin pasos ocultos" : "From requirement to loading, with no hidden steps"} align="center" />
          <Process locale={locale} />
        </div>
      </section>
      <section className="section section--tint">
        <div className="container faq-layout">
          <div>
            <SectionTitle eyebrow="FAQ" title={es ? "Respuestas antes de solicitar precio" : "Answers before you request pricing"} />
            <div className="faq-list">{faqContent[locale].slice(0, 4).map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </div>
          <aside className="contact-aside"><p className="eyebrow">SINOQI</p><h2>{es ? "¿Necesita una respuesta específica?" : "Need a specific answer?"}</h2><p>{es ? "Comparta producto, cantidad, mercado y requisitos de personalización." : "Share the product, quantity, market and customization requirements."}</p><Link className="button button--orange" href={localizedPath("faq", locale)}>{es ? "Ver todas las preguntas" : "View all questions"}</Link><a href={`mailto:${company.email}`}>{company.email}</a></aside>
        </div>
      </section>
      <section className="section" id="inquiry">
        <div className="container contact-layout">
          <div className="contact-panel"><p className="eyebrow">SINOQI</p><h2>{es ? "Prepare su próxima consulta" : "Prepare your next inquiry"}</h2><p>{es ? "Responderemos en un día laborable." : "We will reply within one business day."}</p><div className="contact-list"><a href={`mailto:${company.email}`}><span>Email</span><strong>{company.email}</strong></a><a href={`tel:${company.phoneHref}`}><span>{es ? "Teléfono / WhatsApp" : "Phone / WhatsApp"}</span><strong>{company.phone}</strong></a></div><div className="sample-note"><strong>{es ? "Política de muestras" : "Sample policy"}</strong><p>{es ? "Muestra gratuita; mensajería a cargo del comprador." : "Free sample; courier paid by the buyer."}</p></div><div className="hero__actions"><Link className="button button--light" href={localizedPath("download", locale)}>{es ? "Descargar catálogo" : "Download Catalog"}</Link></div></div>
          <div><SectionTitle eyebrow={es ? "Formulario B2B" : "B2B inquiry form"} title={es ? "Cuéntenos qué necesita" : "Tell us what you need"} body={es ? "El producto, la cantidad y el mercado nos ayudan a preparar una respuesta útil." : "Product, quantity and market help us prepare a useful response."} /><InquiryForm locale={locale} /></div>
        </div>
      </section>
    </>
  );
}

function ProductsPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const routes = es
    ? [
        ["Techos interiores", "Panel de techo PVC", "Anchos habituales, diseño, acabado y embalaje se confirman por consulta."],
        ["Paredes decorativas", "Panel de pared WPC", "Compare perfiles visibles en catálogo y seleccione acabado y cantidad."],
        ["Renovación de paredes", "Lámina de mármol UV", "Empiece por el diseño y confirme medida, espesor y acabado en la cotización."],
        ["Pisos interiores", "Piso SPC", "Seleccione formato y diseño de catálogo antes de validar la configuración final."],
      ]
    : [
        ["Interior ceilings", "PVC Ceiling Panel", "Start with regular widths, then confirm design, finish and packing."],
        ["Decorative walls", "WPC Wall Panel", "Compare catalog-listed profiles and select finish and quantity."],
        ["Wall renovation", "UV Marble Sheet", "Start with the design, then confirm size, thickness and finish in the quote."],
        ["Interior flooring", "SPC Flooring", "Select a catalog format and visual before validating the final configuration."],
      ];
  const checklist = es
    ? [
        ["Producto y uso", "Indique la categoría y el espacio donde se utilizará."],
        ["Formato y acabado", "Comparta medida, diseño, color o referencia visual."],
        ["Cantidad y mercado", "Incluya cantidad estimada, país o región y programa de compra."],
        ["Embalaje y fecha", "Confirme embalaje esperado y fecha objetivo de entrega."],
      ]
    : [
        ["Product and use", "Identify the category and where the material will be used."],
        ["Format and finish", "Share the size, design, color or visual reference."],
        ["Quantity and market", "Include estimated quantity, country or region and buying program."],
        ["Packing and timing", "Confirm the expected packing and target delivery date."],
      ];

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={es ? "Cuatro líneas principales" : "Four core product lines"}
        title={es ? "Productos decorativos para distribución y proyectos" : "Decorative products for distribution and project sourcing"}
        body={es ? "Explore paneles de techo PVC, paneles de pared WPC, láminas de mármol UV y pisos SPC. Cada categoría reúne únicamente opciones respaldadas por los materiales disponibles." : "Explore PVC ceiling panels, WPC wall panels, UV marble sheets and SPC flooring. Each category presents only options supported by the available materials."}
        image={asset.samplePvc}
        imageAlt={es ? "Muestras de paneles PVC y WPC de SINOQI" : "SINOQI PVC and WPC panel samples"}
        chips={es ? ["Techos", "Paredes", "Superficies", "Pisos"] : ["Ceilings", "Walls", "Surfaces", "Flooring"]}
        secondaryHref={localizedPath("download", locale)}
        secondaryLabel={es ? "Solicitar catálogo" : "Request the catalog"}
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={es ? "Cartera principal" : "Core portfolio"}
            title={es ? "Elija una categoría para preparar su consulta" : "Choose a category to prepare your inquiry"}
            body={es ? "Las series, medidas y acabados se muestran dentro de cada categoría. No se han creado páginas de modelos sin datos completos." : "Series, sizes and finishes are organized inside each category. No model pages have been created without complete data."}
          />
          <ProductGrid locale={locale} includeOutdoor />
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionTitle eyebrow={es ? "Elegir por necesidad" : "Choose by need"} title={es ? "Cuatro rutas de selección claras" : "Four clear selection routes"} />
          <div className="product-route-grid">
            {routes.map(([need, product, body], index) => (
              <article key={product}>
                <span>0{index + 1}</span>
                <p>{need}</p>
                <h2>{product}</h2>
                <p>{body}</p>
                <Link className="text-link" href={localizedPath(products[index].key, locale)}>{tx(locale, shared.learn)} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container split-feature">
          <div className="split-feature__media"><Image src={asset.loading} alt={es ? "Preparación y carga de pedidos" : "Order preparation and container loading"} fill sizes="(max-width: 900px) 100vw, 48vw" /></div>
          <div>
            <p className="eyebrow">B2B</p>
            <h2>{es ? "La categoría es el punto de partida, no la especificación final" : "The category is the starting point, not the final specification"}</h2>
            <p>{es ? "Color, formato, acabado, embalaje y calendario se validan por pedido. Los parámetros no documentados no se publican como valores fijos." : "Color, format, finish, packing and schedule are validated per order. Undocumented parameters are not published as fixed values."}</p>
            <Link className="button button--light" href={localizedPath("manufacturing", locale)}>{es ? "Ver fabricación" : "View manufacturing"}</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={es ? "Antes de cotizar" : "Before quotation"} title={es ? "Prepare cuatro datos para una respuesta útil" : "Prepare four details for a useful response"} align="center" />
          <div className="value-grid">{checklist.map(([title, body]) => <article key={title}><span className="value-dot" /><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>
      <CtaBand locale={locale} title={es ? "¿Qué línea encaja con su mercado?" : "Which product line fits your market?"} body={es ? "Comparta uso, formato, cantidad y destino. Le responderemos en un día laborable." : "Share the use, format, quantity and destination. We will reply within one business day."} />
    </>
  );
}

type ProductConfig = {
  image: string;
  imageAlt: Bilingual;
  production: string;
  productionAlt: Bilingual;
  title: Bilingual;
  eyebrow: Bilingual;
  intro: Bilingual;
  overview: Bilingual;
  specs: Record<Locale, Array<[string, string]>>;
  uses: Record<Locale, string[]>;
  series: Record<Locale, Array<[string, string, string[]]>>;
  selection: Record<Locale, Array<[string, string]>>;
};

const productConfig: Record<Extract<PageKey, "pvc-ceiling-panel" | "wpc-wall-panel" | "uv-marble-sheet" | "spc-flooring">, ProductConfig> = {
  "pvc-ceiling-panel": {
    image: asset.pvc,
    imageAlt: { es: "Paneles de techo PVC en producción en la fábrica SINOQI", en: "PVC ceiling panels in SINOQI factory production" },
    production: asset.pvcProduction,
    productionAlt: { es: "Línea de producción de un fabricante de paneles de techo PVC en China", en: "China PVC ceiling panel manufacturer production line" },
    title: { es: "Paneles de techo PVC para importadores y distribuidores", en: "PVC ceiling panels for importers and distributors" },
    eyebrow: { es: "Fabricante y proveedor de paneles de techo PVC", en: "China PVC ceiling panel manufacturer and supplier" },
    intro: { es: "Abastecimiento B2B de paneles PVC para techo con anchos habituales de 25 y 30 cm, MOQ claro y opciones de diseño, acabado y embalaje evaluadas para cada mercado.", en: "Source PVC panels for ceiling programs from an integrated China manufacturer and supplier, with 25 cm and 30 cm regular widths, a clear MOQ and order-specific finish and packing review." },
    overview: { es: "SINOQI suministra paneles de techo PVC para programas mayoristas y pedidos de importadores y distribuidores de materiales de construcción. Cada cotización confirma el color, el acabado, la longitud requerida, el embalaje y la configuración del pedido sin atribuir prestaciones no documentadas.", en: "SINOQI supplies PVC ceiling panels for wholesale programs and orders from importers and building-material distributors. Each quotation confirms color, finish, required length, packing and order configuration without adding unsupported performance claims." },
    specs: {
      es: [["Anchos habituales", "25 cm y 30 cm"], ["MOQ mayorista", "100 piezas por modelo y color"], ["Plazo habitual", "30 días desde la recepción del depósito"], ["Embalaje", "Caja de cartón o plástico retráctil"], ["OEM / marca privada", "Diseño, acabado y embalaje evaluados según la solicitud"], ["Carga de contenedor", "Planificada según mezcla de producto, embalaje y cantidad aprobados"]],
      en: [["Regular widths", "25 cm and 30 cm"], ["Wholesale MOQ", "100 pieces per design and color"], ["Regular lead time", "30 days from receipt of deposit"], ["Packaging", "Carton or shrink wrap"], ["OEM / private label", "Design, finish and packing evaluated against the request"], ["Container loading", "Planned against the approved product mix, packing and quantity"]],
    },
    uses: { es: ["Techos residenciales", "Espacios comerciales", "Renovación interior"], en: ["Residential ceilings", "Commercial spaces", "Interior renovation"] },
    series: {
      es: [
        ["Anchos de panel de 25 y 30 cm", "La oferta habitual confirmada se organiza por ancho; la longitud requerida se valida en la cotización.", ["25 cm", "30 cm"]],
        ["Acabados para paneles de techo PVC", "El catálogo muestra rutas de acabado que deben vincularse al diseño elegido.", ["Impresión", "Estampado en caliente", "Laminado"]],
        ["Configuración OEM y de marca privada", "El diseño, el color y el embalaje se evalúan y acuerdan antes de la producción.", ["Diseño y color", "Caja de cartón", "Plástico retráctil"]],
      ],
      en: [
        ["25 cm and 30 cm panel widths", "The confirmed regular offer is organized by width; required length is validated in the quotation.", ["25 cm", "30 cm"]],
        ["PVC ceiling panel finishes", "The catalog shows finish routes that must be matched to the selected design.", ["Printing", "Hot stamping", "Laminated"]],
        ["OEM and private-label order setup", "Design, color and packaging are evaluated and agreed before production.", ["Design and color", "Carton", "Shrink wrap"]],
      ],
    },
    selection: {
      es: [["Uso previsto", "Indique si se trata de vivienda, espacio comercial o renovación."], ["Medida", "Confirme ancho, longitud requerida y cantidad."], ["Diseño", "Comparta color, acabado o referencia visual."], ["Embalaje", "Indique si necesita caja, plástico retráctil o evaluación especial."]],
      en: [["Intended use", "Tell us whether the order is for residential, commercial or renovation use."], ["Size", "Confirm the width, required length and quantity."], ["Design", "Share the color, finish or visual reference."], ["Packing", "State whether you need cartons, shrink wrap or a special assessment."]],
    },
  },
  "wpc-wall-panel": {
    image: asset.wpc,
    imageAlt: { es: "Perfiles y acabados de panel de pared WPC", en: "WPC wall panel profiles and finishes" },
    production: asset.wpcProduction,
    productionAlt: { es: "Producción de paneles de pared WPC", en: "WPC wall panel production" },
    title: { es: "Fabricante de paneles de pared WPC para interiores", en: "WPC wall panel manufacturer for interiors" },
    eyebrow: { es: "Panel de pared WPC", en: "WPC Wall Panel" },
    intro: { es: "Perfiles decorativos WPC para distribuidores, renovadores y compradores de proyectos, con acabados evaluados por solicitud.", en: "Decorative WPC profiles for distributors, renovators and project buyers, with finishes evaluated by request." },
    overview: { es: "La colección de catálogo incluye distintos perfiles y superficies decorativas. Los tamaños mostrados son referencias de series y deben confirmarse antes del pedido.", en: "The catalog collection includes multiple profiles and decorative surfaces. Listed sizes are series references and must be confirmed before ordering." },
    specs: {
      es: [["Tamaños visibles en catálogo", "195×14, 195×25, 150×10 y 195×12 mm"], ["MOQ", "100 piezas por modelo y color"], ["Plazo habitual", "30 días desde la recepción del depósito"], ["Embalaje", "Caja de cartón o plástico retráctil"], ["Personalización", "Evaluada según la solicitud"]],
      en: [["Catalog-listed sizes", "195×14, 195×25, 150×10 and 195×12 mm"], ["MOQ", "100 pieces per design and color"], ["Regular lead time", "30 days from receipt of deposit"], ["Packing", "Carton or shrink wrap"], ["Customization", "Evaluated against the request"]],
    },
    uses: { es: ["Paredes decorativas", "Zonas de recepción", "Renovación comercial"], en: ["Feature walls", "Reception areas", "Commercial renovation"] },
    series: {
      es: [
        ["Perfiles visibles", "Las medidas proceden del catálogo y se confirman antes del pedido.", ["195×14 mm", "195×25 mm", "150×10 mm", "195×12 mm"]],
        ["Referencias decorativas", "El catálogo muestra perfiles acanalados en tonos madera, neutros y sólidos.", ["Tono madera", "Tonos neutros", "Color sólido"]],
        ["Programa de compra", "Seleccione perfil, acabado y cantidad para recibir una configuración comercial.", ["Perfil", "Acabado", "Embalaje"]],
      ],
      en: [
        ["Catalog-listed profiles", "Sizes come from the catalog and are confirmed before ordering.", ["195×14 mm", "195×25 mm", "150×10 mm", "195×12 mm"]],
        ["Decor references", "The catalog shows fluted profiles in wood-look, neutral and solid-color references.", ["Wood look", "Neutral tones", "Solid color"]],
        ["Buying program", "Select the profile, finish and quantity to receive a commercial configuration.", ["Profile", "Finish", "Packing"]],
      ],
    },
    selection: {
      es: [["Perfil", "Seleccione una sección visible en catálogo o comparta una referencia."], ["Espacio", "Indique pared destacada, recepción, tienda u otro interior."], ["Acabado", "Confirme color y textura a partir de catálogo o muestra."], ["Cantidad", "Indique piezas estimadas y necesidades de reposición."]],
      en: [["Profile", "Select a catalog-listed section or share a reference."], ["Space", "Identify the feature wall, reception, retail or other interior use."], ["Finish", "Confirm color and texture from the catalog or sample."], ["Quantity", "State the estimated pieces and replenishment requirement."]],
    },
  },
  "uv-marble-sheet": {
    image: asset.uv,
    imageAlt: { es: "Láminas decorativas UV efecto mármol", en: "Marble-effect UV decorative sheets" },
    production: asset.uvProduction,
    productionAlt: { es: "Preparación de láminas de mármol UV", en: "UV marble sheet preparation" },
    title: { es: "Proveedor de láminas de mármol UV para paredes", en: "UV marble sheet supplier for decorative walls" },
    eyebrow: { es: "Lámina de mármol UV", en: "UV Marble Sheet" },
    intro: { es: "Superficies decorativas efecto mármol para programas de distribución y renovación interior.", en: "Marble-effect decorative surfaces for distribution programs and interior renovation." },
    overview: { es: "Las imágenes muestran diseños disponibles en el catálogo. Medida, espesor, acabado, embalaje y carga se verifican para cada cotización; no se publican parámetros no confirmados.", en: "Images show designs available in the catalog. Size, thickness, finish, packing and loading are verified for each quotation; unconfirmed parameters are not published." },
    specs: {
      es: [["Superficie", "Diseños decorativos efecto mármol"], ["MOQ", "100 piezas por modelo y color"], ["Plazo habitual", "30 días desde la recepción del depósito"], ["Embalaje", "Caja de cartón o plástico retráctil"], ["Medidas y acabado", "A confirmar en la cotización"]],
      en: [["Surface", "Marble-effect decorative designs"], ["MOQ", "100 pieces per design and color"], ["Regular lead time", "30 days from receipt of deposit"], ["Packing", "Carton or shrink wrap"], ["Size and finish", "To be confirmed in the quotation"]],
    },
    uses: { es: ["Paredes interiores", "Renovación de tiendas", "Paneles decorativos"], en: ["Interior walls", "Retail renovation", "Decorative wall features"] },
    series: {
      es: [
        ["Diseños efecto mármol", "La selección se basa en las referencias visuales disponibles en catálogo.", ["Vetas claras", "Vetas oscuras", "Diseños contrastados"]],
        ["Confirmación de formato", "No se publica una medida única sin validar la referencia elegida.", ["Medida", "Espesor", "Acabado"]],
        ["Preparación del pedido", "El embalaje y la carga se revisan según configuración y cantidad.", ["Diseño", "Cantidad", "Embalaje"]],
      ],
      en: [
        ["Marble-effect designs", "Selection starts from the visual references available in the catalog.", ["Light veining", "Dark veining", "High-contrast designs"]],
        ["Format confirmation", "No single size is published without validating the selected reference.", ["Size", "Thickness", "Finish"]],
        ["Order preparation", "Packing and loading are reviewed against the configuration and quantity.", ["Design", "Quantity", "Packing"]],
      ],
    },
    selection: {
      es: [["Referencia visual", "Comparta el diseño de catálogo o una imagen de referencia."], ["Superficie", "Indique el espacio interior y el efecto esperado."], ["Formato", "Confirme medida y espesor durante la cotización."], ["Pedido", "Incluya cantidad, destino y requisitos de embalaje."]],
      en: [["Visual reference", "Share the catalog design or a reference image."], ["Surface", "Identify the interior space and intended visual effect."], ["Format", "Confirm size and thickness during quotation."], ["Order", "Include quantity, destination and packing requirements."]],
    },
  },
  "spc-flooring": {
    image: asset.spc,
    imageAlt: { es: "Muestra de piso SPC con acabado efecto madera", en: "SPC flooring sample with a wood-look finish" },
    production: asset.spcProduction,
    productionAlt: { es: "Línea de producción de pisos SPC", en: "SPC flooring production line" },
    title: { es: "Proveedor de pisos SPC para distribución", en: "SPC flooring supplier for distribution" },
    eyebrow: { es: "Piso SPC", en: "SPC Flooring" },
    intro: { es: "Colecciones de pisos rígidos SPC para compradores B2B, con formatos visibles en catálogo y opciones sujetas a confirmación.", en: "SPC rigid flooring collections for B2B buyers, with catalog-listed formats and options subject to confirmation." },
    overview: { es: "Los formatos indicados proceden del catálogo disponible y no sustituyen una ficha técnica final. La construcción, el espesor y el embalaje se confirman antes del pedido.", en: "The listed formats come from the available catalog and do not replace a final technical data sheet. Construction, thickness and packing are confirmed before ordering." },
    specs: {
      es: [["Formatos visibles en catálogo", "6×48, 7×48, 9×48 y 9×60 pulgadas"], ["Equivalencias de catálogo", "150×1220, 180×1220, 230×1220 y 230×1525 mm"], ["Configuración", "A confirmar según la colección"], ["Embalaje", "A confirmar en la cotización"], ["Muestra", "Gratuita; mensajería a cargo del comprador"]],
      en: [["Catalog-listed formats", "6×48, 7×48, 9×48 and 9×60 inches"], ["Catalog metric sizes", "150×1220, 180×1220, 230×1220 and 230×1525 mm"], ["Configuration", "To be confirmed by collection"], ["Packing", "To be confirmed in the quotation"], ["Sample", "Free; courier paid by the buyer"]],
    },
    uses: { es: ["Viviendas", "Tiendas y oficinas", "Renovación de pisos"], en: ["Residential interiors", "Retail and offices", "Floor renovation"] },
    series: {
      es: [
        ["Formatos de tabla", "Las medidas mostradas proceden del catálogo disponible.", ["150×1220 mm", "180×1220 mm", "230×1220 mm", "230×1525 mm"]],
        ["Diseños visibles", "El catálogo contiene referencias visuales en madera y piedra/mármol.", ["Efecto madera", "Efecto piedra", "Efecto mármol"]],
        ["Configuración técnica", "La construcción final se confirma por colección y pedido.", ["Espesor", "Capa de uso", "Base IXPE o EVA"]],
      ],
      en: [
        ["Plank formats", "The listed dimensions come from the available catalog.", ["150×1220 mm", "180×1220 mm", "230×1220 mm", "230×1525 mm"]],
        ["Visible designs", "The catalog contains wood and stone/marble visual references.", ["Wood look", "Stone look", "Marble look"]],
        ["Technical configuration", "Final construction is confirmed by collection and order.", ["Thickness", "Wear layer", "IXPE or EVA backing"]],
      ],
    },
    selection: {
      es: [["Formato", "Seleccione una medida visible en catálogo."], ["Diseño", "Indique madera, piedra/mármol o referencia de color."], ["Uso", "Comparta si es vivienda, tienda, oficina o renovación."], ["Construcción", "Valide espesor, capa de uso y base antes del pedido."]],
      en: [["Format", "Select a size shown in the catalog."], ["Design", "Identify wood, stone/marble or a color reference."], ["Use", "Tell us whether it is for residential, retail, office or renovation use."], ["Construction", "Validate thickness, wear layer and backing before ordering."]],
    },
  },
};

function PvcCeilingProductPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const quoteHref = `${localizedPath("contact", locale)}#inquiry`;
  const canonicalUrl = new URL(localizedPath("pvc-ceiling-panel", locale), SITE_ORIGIN).toString();
  const absoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();
  const buyerFaqs = es
    ? [
        ["¿Cuál es el MOQ de los paneles de techo PVC?", "El MOQ confirmado es de 100 piezas por diseño y color. La configuración final se valida en la cotización."],
        ["¿Qué anchos habituales están disponibles?", "Los anchos habituales confirmados son 25 cm y 30 cm. La longitud requerida y los demás parámetros se confirman para cada pedido."],
        ["¿Pueden evaluar pedidos OEM o de marca privada?", "Sí. El diseño, el color, el acabado y el embalaje se evalúan según la solicitud y se confirman antes de producción."],
        ["¿Qué opciones de embalaje están confirmadas?", "Las opciones confirmadas son caja de cartón o plástico retráctil. El plan final depende de la configuración aprobada del pedido."],
        ["¿Cuándo empieza el plazo de producción?", "El plazo habitual es de 30 días desde la recepción del depósito, sujeto a la configuración y al plan de producción."],
        ["¿La muestra es gratuita?", "Sí. La muestra es gratuita para compradores con una necesidad real y el comprador asume el coste de mensajería."],
      ]
    : [
        ["What is the MOQ for PVC ceiling panels?", "The confirmed MOQ is 100 pieces per design and color. The final order configuration is validated in the quotation."],
        ["Which regular panel widths are available?", "The confirmed regular widths are 25 cm and 30 cm. Required length and other parameters are confirmed for each order."],
        ["Can you evaluate OEM or private-label orders?", "Yes. Design, color, finish and packaging are evaluated against the request and confirmed before production."],
        ["Which packaging options are confirmed?", "Confirmed options are cartons or shrink wrap. The final plan depends on the approved order configuration."],
        ["When does the production lead time start?", "The regular lead time is 30 days from receipt of deposit, subject to configuration and production planning."],
        ["Is the sample free?", "Yes. The sample is free for buyers with a genuine requirement, and the buyer covers the courier cost."],
      ];
  const pageSchema = createQuoteBasedPageSchema({
    name: es ? "Paneles de techo PVC" : "PVC Ceiling Panels",
    description: es
      ? "Paneles de techo PVC para importadores y distribuidores, con anchos habituales de 25 y 30 cm, condiciones mayoristas confirmadas y opciones evaluadas por pedido."
      : "PVC ceiling panels for importers and distributors, with 25 cm and 30 cm regular widths, confirmed wholesale terms and order-specific option review.",
    image: [absoluteUrl(asset.pvc), absoluteUrl("/assets/pvc-production.jpg")],
    url: canonicalUrl,
    inLanguage: locale,
  });
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: es ? "Inicio" : "Home", item: absoluteUrl(localizedPath("home", locale)) },
      { "@type": "ListItem", position: 2, name: es ? "Productos" : "Products", item: absoluteUrl(localizedPath("products", locale)) },
      { "@type": "ListItem", position: 3, name: es ? "Paneles de techo PVC" : "PVC Ceiling Panels", item: canonicalUrl },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: buyerFaqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  const schemas = [pageSchema, breadcrumbSchema, faqSchema];
  const options = es
    ? [
        ["Anchos habituales", "La oferta habitual confirmada incluye 25 cm y 30 cm. La longitud requerida se confirma en la cotización.", ["25 cm", "30 cm"]],
        ["Impresión, estampado en caliente y laminado", "Estas son rutas de acabado confirmadas. El diseño y la disponibilidad se revisan para cada pedido.", ["Impresión", "Estampado en caliente", "Laminado"]],
        ["Evaluación OEM y de marca privada", "Diseño, color, acabado y embalaje se evalúan según la solicitud y se acuerdan antes de producción.", ["Diseño", "Color", "Acabado", "Embalaje"]],
      ]
    : [
        ["Regular widths", "The confirmed regular offer includes 25 cm and 30 cm. Required length is confirmed in the quotation.", ["25 cm", "30 cm"]],
        ["Printing, hot stamping and laminated finishes", "These are confirmed finish routes. Design and availability are reviewed for each order.", ["Printing", "Hot stamping", "Laminated"]],
        ["OEM and private-label review", "Design, color, finish and packaging are evaluated against the request and agreed before production.", ["Design", "Color", "Finish", "Packaging"]],
      ];
  const buyingTerms = es
    ? [
        ["MOQ", "100 piezas por diseño y color."],
        ["Política de muestras", "Muestra gratuita para compradores con una necesidad real; mensajería a cargo del comprador."],
        ["Embalaje", "Caja de cartón o plástico retráctil, según la configuración aprobada."],
        ["Plazo habitual", "30 días desde la recepción del depósito, sujeto a configuración y planificación."],
      ]
    : [
        ["MOQ", "100 pieces per design and color."],
        ["Sample policy", "Free sample for buyers with a genuine requirement; courier paid by the buyer."],
        ["Packaging", "Carton or shrink wrap, based on the approved configuration."],
        ["Regular lead time", "30 days from receipt of deposit, subject to configuration and planning."],
      ];
  const orderDetails = es
    ? [
        ["Producto y medida", "Indique ancho, longitud requerida y cantidad."],
        ["Diseño y acabado", "Comparta color, ruta de acabado o una referencia visual."],
        ["Programa de compra", "Indique la cantidad inicial y cualquier plan de reposición."],
        ["Embalaje y destino", "Defina el embalaje solicitado y el país o puerto de destino."],
      ]
    : [
        ["Product and size", "State the width, required length and quantity."],
        ["Design and finish", "Share the color, finish route or a visual reference."],
        ["Buying program", "State the initial quantity and any replenishment plan."],
        ["Packing and destination", "Identify the requested packing and destination country or port."],
      ];
  const applications = es
    ? [
        ["Techos residenciales", "Una referencia de selección para interiores residenciales; no se presenta como caso de cliente."],
        ["Interiores comerciales", "Una referencia para evaluar paneles en espacios comerciales interiores."],
        ["Renovación interior", "Una referencia para programas de renovación que requieren confirmar medida, diseño y cantidad."],
      ]
    : [
        ["Residential ceilings", "A selection reference for residential interiors; it is not presented as a customer case."],
        ["Commercial interiors", "A reference for evaluating panels in interior commercial spaces."],
        ["Interior renovation", "A reference for renovation programs that require size, design and quantity confirmation."],
      ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
      <Hero
        locale={locale}
        eyebrow={es ? "Fabricante y proveedor B2B en China" : "China B2B manufacturer and supplier"}
        title={es ? "Fabricante de paneles de techo PVC en China para importadores y distribuidores" : "PVC Ceiling Panels Manufacturer in China for Importers and Distributors"}
        body={es ? "SINOQI suministra paneles de techo PVC para importadores, distribuidores, mayoristas y comercios de materiales de construcción, con condiciones de compra confirmadas y revisión por pedido." : "SINOQI supplies PVC ceiling panels for importers, distributors, wholesalers and building-material dealers, with confirmed buying terms and order-specific review."}
        image={asset.pvc}
        imageAlt={es ? "Trabajadores manipulando paneles de techo PVC en una línea de producción SINOQI" : "Workers handling PVC ceiling panels on a SINOQI production line"}
        chips={es ? ["Anchos habituales de 25/30 cm", "MOQ: 100 piezas por diseño y color", "Revisión OEM por pedido"] : ["25/30 cm regular widths", "MOQ: 100 pieces per design and color", "Order-specific OEM review"]}
        primaryLabel={es ? "Solicitar una cotización personalizada" : "Request a Custom Quote"}
        secondaryHref={quoteHref}
        secondaryLabel={es ? "Solicitar una muestra gratuita" : "Request a Free Sample"}
        actionNote={es ? "Para una cotización útil, incluya ancho, longitud requerida, diseño, cantidad, embalaje y destino." : "For a useful RFQ, include width, required length, design, quantity, packing and destination."}
      />
      <section className="section">
        <div className="container">
          <nav className="product-breadcrumb" aria-label={es ? "Migas de pan" : "Breadcrumb"}>
            <Link href={localizedPath("home", locale)}>{es ? "Inicio" : "Home"}</Link><span aria-hidden="true">/</span>
            <Link href={localizedPath("products", locale)}>{es ? "Productos" : "Products"}</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{es ? "Paneles de techo PVC" : "PVC Ceiling Panels"}</span>
          </nav>
          <div className="product-overview">
            <div>
              <SectionTitle
                eyebrow={es ? "Programa de suministro B2B" : "B2B supply program"}
                title={es ? "Paneles de techo PVC para programas mayoristas y de distribución" : "PVC Ceiling Panels for Wholesale and Distribution Programs"}
                body={es ? "SINOQI integra fabricación y comercio para atender pedidos de importadores, distribuidores, mayoristas y comercios de materiales de construcción. Cada cotización confirma la configuración comercial antes de producción." : "SINOQI integrates manufacturing and trade to serve importers, distributors, wholesalers and building-material dealers. Each quotation confirms the commercial configuration before production."}
              />
              <ul className="check-list">
                <li>{es ? "Anchos habituales, acabado, diseño y embalaje revisados por pedido" : "Regular widths, finish, design and packing reviewed per order"}</li>
                <li>{es ? "Muestra gratuita; mensajería a cargo del comprador" : "Free sample; courier paid by the buyer"}</li>
                <li>{es ? "Respuesta comercial prevista en un día laborable" : "Commercial response targeted within one business day"}</li>
              </ul>
            </div>
            <aside className="spec-card">
              <h2>{es ? "Datos confirmados para la evaluación inicial" : "Confirmed facts for initial evaluation"}</h2>
              <dl>
                {(es
                  ? [["Producto", "Paneles de techo PVC"], ["Compradores", "Importadores, distribuidores, mayoristas y comercios de materiales"], ["Anchos habituales", "25 cm y 30 cm"], ["MOQ", "100 piezas por diseño y color"]]
                  : [["Product", "PVC ceiling panels"], ["Buyers", "Importers, distributors, wholesalers and building-material dealers"], ["Regular widths", "25 cm and 30 cm"], ["MOQ", "100 pieces per design and color"]]
                ).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
              </dl>
              <p className="spec-note">{es ? "La longitud requerida y los demás parámetros se confirman en la cotización." : "Required length and other parameters are confirmed in the quotation."}</p>
            </aside>
          </div>
        </div>
      </section>
      <section className="section section--tint" id="options">
        <div className="container">
          <SectionTitle eyebrow={es ? "Opciones confirmadas" : "Confirmed options"} title={es ? "Opciones confirmadas de paneles de techo PVC" : "Confirmed PVC Ceiling Panel Options"} body={es ? "Estas opciones proceden de información confirmada y referencias del catálogo. La selección final se valida por pedido; no implican stock permanente de todos los diseños." : "These options come from confirmed information and catalog references. Final selection is validated per order and does not imply permanent stock of every design."} />
          <div className="product-series-grid">
            {options.map(([title, body, items]) => <article key={title as string}><h3>{title}</h3><p>{body}</p><ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
        </div>
      </section>
      <section className="section" id="buying-terms">
        <div className="container">
          <SectionTitle eyebrow={es ? "Condiciones comerciales" : "Commercial terms"} title={es ? "Condiciones de compra de paneles de techo PVC" : "PVC Ceiling Panel Buying Terms"} body={es ? "Utilice estas condiciones confirmadas como punto de partida. La cotización final depende de la configuración aprobada." : "Use these confirmed terms as a starting point. The final quotation depends on the approved configuration."} />
          <div className="selection-grid">
            {buyingTerms.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionTitle eyebrow={es ? "Preparación de la solicitud" : "RFQ preparation"} title={es ? "Cómo especificar su pedido de paneles de techo PVC" : "How to Specify Your PVC Ceiling Panel Order"} body={es ? "Compartir estos datos ayuda al equipo a revisar la viabilidad y devolver una configuración comercial clara." : "Sharing these details helps the team review feasibility and return a clear commercial configuration."} />
          <div className="selection-grid">
            {orderDetails.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <div className="section-actions">
            <Link className="button button--orange" href={quoteHref}>{es ? "Solicitar una cotización personalizada" : "Request a Custom Quote"}</Link>
            <Link className="button button--outline" href={quoteHref}>{es ? "Solicitar una muestra gratuita" : "Request a Free Sample"}</Link>
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container split-feature split-feature--reverse">
          <div className="split-feature__media"><Image src="/assets/pvc-production.jpg" alt={es ? "Línea de producción de paneles PVC en las instalaciones SINOQI" : "PVC panel production line at SINOQI facilities"} fill sizes="(max-width: 900px) 100vw, 48vw" /></div>
          <div>
            <p className="eyebrow">{es ? "Coordinación del pedido" : "Order coordination"}</p>
            <h2>{es ? "Producción y coordinación de pedidos por contenedor" : "Production and Container-order Coordination"}</h2>
            <p>{es ? "Después de confirmar el producto, el diseño, la cantidad, el embalaje y el depósito, el pedido entra en planificación. La carga se coordina según la mezcla de productos, el embalaje y la cantidad aprobados, sin publicar una cifra fija por contenedor." : "After product, design, quantity, packing and deposit are confirmed, the order enters production planning. Loading is coordinated against the approved product mix, packing and quantity without publishing a fixed per-container figure."}</p>
            <ul className="check-list">
              <li>{es ? "Plazo habitual: 30 días desde la recepción del depósito" : "Regular lead time: 30 days from receipt of deposit"}</li>
              <li>{es ? "Configuración y plan de producción confirmados por pedido" : "Configuration and production plan confirmed per order"}</li>
              <li>{es ? "Plan de carga definido después de aprobar la configuración" : "Loading plan defined after configuration approval"}</li>
            </ul>
            <Link className="button button--light" href={localizedPath("manufacturing", locale)}>{es ? "Ver fabricación" : "View Manufacturing"}</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={es ? "Referencia de selección" : "Selection reference"} title={es ? "Aplicaciones para techos interiores" : "Interior Ceiling Applications"} body={es ? "Estas categorías ayudan a orientar la selección. No se presentan como proyectos de clientes ni como resultados de rendimiento." : "These categories help guide selection. They are not presented as customer projects or performance results."} />
          <div className="product-series-grid">
            {applications.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <div className="section-actions"><Link className="text-link" href={localizedPath("applications", locale)}>{es ? "Ver todas las aplicaciones confirmadas" : "View all confirmed applications"} <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container faq-layout">
          <div>
            <SectionTitle eyebrow={es ? "Preguntas de compra" : "Buyer questions"} title={es ? "Preguntas frecuentes para compradores de paneles de techo PVC" : "PVC Ceiling Panel Buyer FAQ"} body={es ? "Las respuestas se limitan a condiciones comerciales confirmadas. Los parámetros finales dependen de la configuración aprobada." : "Answers are limited to confirmed commercial terms. Final parameters depend on the approved configuration."} />
            <div className="faq-list">
              {buyerFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}
            </div>
          </div>
          <aside className="contact-aside">
            <p className="eyebrow">FAQ</p>
            <h2>{es ? "¿Necesita confirmar otro dato?" : "Need another detail confirmed?"}</h2>
            <p>{es ? "Envíe su configuración y el equipo revisará lo que puede confirmarse para su pedido." : "Send your configuration and the team will review what can be confirmed for your order."}</p>
            <Link className="button button--orange" href={localizedPath("faq", locale)}>{es ? "Ver todas las preguntas" : "View All FAQs"}</Link>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={es ? "Siguiente paso" : "Next step"} title={es ? "Continúe su evaluación" : "Continue Your Evaluation"} body={es ? "Revise la guía de compra, solicite el catálogo o comparta su pedido para recibir una respuesta comercial." : "Review the buying guide, request the catalog or share your order for a commercial response."} />
          <div className="application-product-links" aria-label={es ? "Recursos para compradores" : "Buyer resources"}>
            <Link href={localizedBlogPostPath("pvc-ceiling-panel-buying-guide", locale)}>{es ? "Guía de compra de paneles de techo PVC" : "PVC Ceiling Buying Guide"}<span aria-hidden="true">→</span></Link>
            <Link href={localizedBlogPostPath("pvc-ceiling-panel-sizes-specifications", locale)}>{es ? "Medidas y especificaciones" : "Sizes & Specifications"}<span aria-hidden="true">→</span></Link>
            <Link href={localizedPath("download", locale)}>{es ? "Descargar catálogo" : "Download Catalog"}<span aria-hidden="true">→</span></Link>
            <Link href={localizedPath("applications", locale)}>{es ? "Aplicaciones" : "Applications"}<span aria-hidden="true">→</span></Link>
            <Link href={localizedPath("manufacturing", locale)}>{es ? "Fabricación" : "Manufacturing"}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="section-actions">
            <Link className="button button--orange" href={quoteHref}>{es ? "Solicitar una cotización personalizada" : "Request a Custom Quote"}</Link>
            <Link className="button button--outline" href={quoteHref}>{es ? "Solicitar una muestra gratuita" : "Request a Free Sample"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function WpcWallPanelPage() {
  const quoteHref = `${localizedPath("contact", "en")}#inquiry`;
  const canonicalUrl = new URL(localizedPath("wpc-wall-panel", "en"), SITE_ORIGIN).toString();
  const buyerFaqs = [
    ["What is the MOQ for WPC wall panels?", "The confirmed starting MOQ is 100 pieces per design and color. The final profile, finish, quantity and packing are confirmed in the quotation."],
    ["Which WPC wall panel sizes are listed in the catalog?", "The available catalog shows 195×14, 195×25, 150×10 and 195×12 mm profile references. Confirm the selected profile before ordering."],
    ["Can the finish and packing be customized?", "Customization is evaluated against the request. Share the profile, color or finish reference, quantity and packing requirement for feasibility review."],
    ["Can I request a sample before placing an order?", "Yes. A free sample is available for buyers with a genuine requirement, and the buyer covers the courier cost."],
    ["How is a WPC wall panel quotation prepared?", "The quotation is based on the selected profile, finish, quantity, packing, destination and other confirmed order requirements. No fixed public price is assumed."],
    ["When does the regular production lead time begin?", "The confirmed regular lead time is 30 days from receipt of deposit, subject to the approved configuration and production plan."],
  ];
  const schemas = [
    createQuoteBasedPageSchema({
      pageType: "CollectionPage",
      name: "WPC Wall Panel Manufacturer in China",
      description: "Indoor WPC wall panels for importers, distributors, wholesalers and project buyers, with catalog-listed profiles and order-specific quotation support.",
      url: canonicalUrl,
      topicName: "Indoor WPC Wall Panels",
      inLanguage: "en",
    }),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: buyerFaqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Hero
        locale="en"
        eyebrow="Indoor WPC wall panels · B2B supply from China"
        title="WPC wall panel manufacturer for importers and distributors"
        body="Source decorative indoor WPC wall panels from SINOQI. Compare catalog-listed profiles and finishes, then confirm quantity, packing and customization requirements for your market."
        image={asset.wpc}
        imageAlt="SINOQI indoor WPC wall panel profiles in wood-look and neutral finishes"
        chips={["Import and distribution", "Interior feature walls", "Catalog-listed profiles"]}
        secondaryHref={quoteHref}
        secondaryLabel="Request a Free Sample"
        actionNote="Free sample for genuine buyers; courier cost is paid by the buyer."
      />

      <section className="section">
        <div className="container product-overview">
          <div>
            <SectionTitle
              eyebrow="WPC wall panel supplier"
              title="Indoor decorative wall panels prepared for B2B sourcing"
              body="SINOQI supplies WPC wall panel profiles for importers, distributors, wholesalers and project buyers. The current catalog shows fluted profiles, wood-look references, neutral tones and solid-color directions for interior selection."
            />
            <ul className="check-list">
              <li>Profile and finish selected from catalog references or an approved sample</li>
              <li>MOQ, packing and production timing confirmed before order placement</li>
              <li>Commercial response targeted within one business day</li>
            </ul>
            <p>Application images are selection references only and are not presented as completed customer projects.</p>
          </div>
          <div className="spec-card">
            <h2>WPC wall panel specifications and buying terms</h2>
            <dl>
              <div><dt>Catalog-listed profiles</dt><dd>195×14, 195×25, 150×10 and 195×12 mm</dd></div>
              <div><dt>Starting MOQ</dt><dd>100 pieces per design and color</dd></div>
              <div><dt>Regular lead time</dt><dd>30 days from receipt of deposit</dd></div>
              <div><dt>Packing</dt><dd>Carton or shrink wrap</dd></div>
              <div><dt>Customization</dt><dd>Evaluated against the request</dd></div>
              <div><dt>Sample policy</dt><dd>Free sample; courier paid by the buyer</dd></div>
            </dl>
            <p className="spec-note">Catalog dimensions are series references. Confirm the selected profile and all order parameters in the quotation and approved sample.</p>
          </div>
        </div>
      </section>

      <section className="section section--tint" id="profiles">
        <div className="container">
          <SectionTitle
            eyebrow="Profiles and finishes"
            title="Compare WPC wall panel options before requesting a quote"
            body="The page groups verified catalog information around the decisions a distributor or project buyer needs to make. Final availability is confirmed per order."
          />
          <div className="product-series-grid">
            <article>
              <h3>Catalog-listed profiles</h3>
              <p>Use the available profile references as the starting point, then confirm the chosen section in the quotation.</p>
              <ul><li>195×14 mm</li><li>195×25 mm</li><li>150×10 mm</li><li>195×12 mm</li></ul>
            </article>
            <article>
              <h3>Decorative finish references</h3>
              <p>Review the available catalog or sample rather than assuming a finish from a screen image.</p>
              <ul><li>Wood look</li><li>Neutral tones</li><li>Solid color</li></ul>
            </article>
            <article>
              <h3>Order configuration</h3>
              <p>Combine the selected profile and finish with quantity and packing requirements for a commercial review.</p>
              <ul><li>Profile</li><li>Finish</li><li>Quantity</li><li>Packing</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Buyer selection guide"
            title="What to confirm when sourcing WPC wall panels"
            body="A clear first inquiry helps the supplier check product fit and prepare a useful quotation without guessing specifications."
          />
          <div className="selection-grid">
            <article><span>01</span><h3>Profile</h3><p>Select a catalog-listed profile or attach a clear reference for evaluation.</p></article>
            <article><span>02</span><h3>Interior use</h3><p>Identify the feature wall, reception, retail or other intended interior space.</p></article>
            <article><span>03</span><h3>Finish</h3><p>Confirm the color and texture through the catalog or an approved sample.</p></article>
            <article><span>04</span><h3>Quantity and packing</h3><p>Share estimated pieces, replenishment needs, destination and packing preference.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split-feature split-feature--reverse">
          <div className="split-feature__media"><Image src={asset.wpcProduction} alt="WPC wall panel production at SINOQI" fill sizes="(max-width: 900px) 100vw, 48vw" /></div>
          <div>
            <p className="eyebrow">Manufacturing and trade in one team</p>
            <h2>WPC wall panel supply coordinated from profile selection to container planning</h2>
            <p>SINOQI coordinates manufacturing and export preparation from Hangzhou. The confirmed company figures—29,220 m², 110 employees and 300 × 40HQ per month—refer to capacity across the full product portfolio, not to WPC wall panels alone.</p>
            <div className="hero__actions">
              <Link className="button button--light" href={localizedPath("manufacturing", "en")}>View Manufacturing</Link>
              <Link className="button button--outline-light" href={quoteHref}>Request a Custom Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-overview">
          <div>
            <SectionTitle
              eyebrow="WPC wall panel price and quotation"
              title="A useful quote starts with the order configuration"
              body="WPC wall panel price depends on the confirmed profile, finish, quantity, packing, destination and other order requirements. This page does not publish an unsupported fixed price."
            />
            <ul className="check-list">
              <li>Specify the profile and finish reference</li>
              <li>State the quantity per design and color</li>
              <li>Share destination and packing requirements</li>
              <li>Request a sample when visual confirmation is needed</li>
            </ul>
            <Link className="button button--orange" href={quoteHref}>Prepare Your WPC Wall Panel Inquiry</Link>
          </div>
          <div>
            <SectionTitle
              eyebrow="Related buyer resources"
              title="Continue the evaluation"
              body="Use the existing site resources to review application context, manufacturing capability and the available catalog."
            />
            <div className="application-product-links" aria-label="WPC wall panel buyer resources">
              <Link href={OUTDOOR_WPC_PATH}>Looking for outdoor WPC wall cladding?<span aria-hidden="true">→</span></Link>
              <Link href={localizedBlogPostPath("what-is-wpc-wall-panel", "en")}>What is a WPC wall panel?<span aria-hidden="true">→</span></Link>
              <Link href={localizedBlogPostPath("wpc-wall-panel-designs-colors", "en")}>WPC wall panel designs and colors<span aria-hidden="true">→</span></Link>
              <Link href={localizedPath("applications", "en")}>Interior applications<span aria-hidden="true">→</span></Link>
              <Link href={localizedPath("manufacturing", "en")}>Manufacturing capability<span aria-hidden="true">→</span></Link>
              <Link href={localizedPath("download", "en")}>Request the PVC &amp; WPC catalog<span aria-hidden="true">→</span></Link>
              <Link href={localizedPath("faq", "en")}>B2B buyer FAQ<span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container faq-layout">
          <div>
            <SectionTitle
              eyebrow="WPC wall panel FAQ"
              title="Questions importers and distributors ask before ordering"
              body="The answers below use confirmed catalog and commercial information only."
            />
            <div className="faq-list">
              {buyerFaqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="contact-aside">
            <p className="eyebrow">B2B inquiry</p>
            <h2>Need a profile or finish confirmed?</h2>
            <p>Send the catalog reference, quantity, destination and packing requirement. The target response time is one business day.</p>
            <Link className="button button--orange" href={quoteHref}>Request a Custom Quote</Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Other core product lines" title="Continue your material selection" />
          <div className="related-product-grid">
            {products.filter((product) => product.key !== "wpc-wall-panel").map((product) => (
              <Link href={localizedPath(product.key, "en")} key={product.key}>
                <Image src={product.image} alt={productImageAlt.en[product.key]} width={88} height={66} />
                <span><strong>{product.en.name}</strong><small>{product.en.summary}</small></span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand locale="en" title="Planning an indoor WPC wall panel order?" body="Share the profile, finish, quantity, destination and packing requirement for a commercial review." />
    </>
  );
}

function ProductPage({ locale, page }: { locale: Locale; page: keyof typeof productConfig }) {
  if (page === "pvc-ceiling-panel") return <PvcCeilingProductPage locale={locale} />;
  if (page === "wpc-wall-panel" && locale === "en") return <WpcWallPanelPage />;
  if (page === "uv-marble-sheet" && locale === "en") return <UvMarbleSheetPage />;
  if (page === "spc-flooring" && locale === "en") return <SpcFlooringPage />;
  const c = productConfig[page];
  const es = locale === "es";
  const isPvc = false;
  const buyerFaqs = es
    ? [
        ["¿La muestra es gratuita?", "Sí. Para compradores con una necesidad real, la muestra es gratuita y el comprador asume el coste de mensajería."],
        ["¿Cuál es el MOQ inicial?", "El punto de partida confirmado es de 100 piezas por modelo y color. La configuración final se valida en la cotización."],
        ["¿Cuándo empieza el plazo de producción?", "El plazo habitual confirmado es de 30 días desde la recepción del depósito, sujeto a la configuración y al plan de producción."],
        ["¿Cómo se confirman las especificaciones?", "Medidas, acabado, embalaje y demás parámetros se confirman en la cotización y, cuando corresponde, mediante una muestra aprobada."],
      ]
    : [
        ["Is the sample free?", "Yes. For buyers with a genuine requirement, the sample is free and the buyer covers the courier cost."],
        ["What is the starting MOQ?", "The confirmed starting point is 100 pieces per design and color. The final configuration is validated in the quotation."],
        ["When does the production lead time start?", "The confirmed regular lead time is 30 days from receipt of deposit, subject to configuration and production planning."],
        ["How are specifications confirmed?", "Size, finish, packing and other parameters are confirmed in the quotation and, where applicable, through an approved sample."],
      ];
  return (
    <>
      <Hero locale={locale} eyebrow={tx(locale, c.eyebrow)} title={tx(locale, c.title)} body={tx(locale, c.intro)} image={c.image} imageAlt={tx(locale, c.imageAlt)} chips={c.uses[locale]} secondaryHref={`${localizedPath("contact", locale)}#inquiry`} secondaryLabel={tx(locale, shared.sample)} />
      <section className="section">
        <div className="container product-overview">
          <div>
            <SectionTitle eyebrow={es ? "Descripción del producto" : "Product introduction"} title={isPvc ? (es ? "Paneles de techo PVC para programas mayoristas" : "PVC ceiling panels for wholesale programs") : (es ? "Información útil, sin afirmaciones no documentadas" : "Useful information without unsupported claims")} body={tx(locale, c.overview)} />
            <ul className="check-list">
              <li>{es ? "Selección de color y acabado según disponibilidad" : "Color and finish selection subject to availability"}</li>
              <li>{es ? "Condiciones finales confirmadas por cotización" : "Final terms confirmed by quotation"}</li>
              <li>{es ? "Respuesta comercial en un día laborable" : "Commercial reply within one business day"}</li>
            </ul>
          </div>
          <div className="spec-card">
            <h2>{isPvc ? (es ? "Especificaciones y condiciones de compra" : "PVC ceiling panel specifications and buying terms") : (es ? "Datos iniciales de compra" : "Initial buying details")}</h2>
            <dl>{c.specs[locale].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            <p className="spec-note">{es ? "Confirme todos los parámetros en la cotización y en la muestra aprobada." : "Confirm every parameter in the quotation and approved sample."}</p>
          </div>
        </div>
      </section>
      <section className="section section--tint" id="series">
        <div className="container">
          <SectionTitle
            eyebrow={es ? "Series y opciones" : "Series and options"}
            title={isPvc ? (es ? "Medidas, acabados y opciones OEM" : "PVC ceiling panel sizes, finishes and OEM options") : (es ? "Organizado para comparar antes de cotizar" : "Organized for comparison before quotation")}
            body={es ? "Estas agrupaciones proceden de la información confirmada y de las referencias visibles en catálogo. La disponibilidad final se valida por pedido." : "These groups come from confirmed information and catalog-visible references. Final availability is validated per order."}
          />
          <div className="product-series-grid">
            {c.series[locale].map(([title, body, items]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={es ? "Guía de selección" : "Selection guide"}
            title={isPvc ? (es ? "Cómo especificar un pedido de paneles PVC para techo" : "How to specify PVC panels for ceiling orders") : (es ? "Qué confirmar para elegir correctamente" : "What to confirm for the right selection")}
            body={es ? "Las imágenes de aplicación son orientativas y no se presentan como proyectos de clientes." : "Application images are indicative and are not presented as customer projects."}
          />
          <div className="selection-grid">
            {c.selection[locale].map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container split-feature split-feature--reverse">
          <div className={`split-feature__media ${c.production.includes("placeholder") ? "split-feature__media--placeholder" : ""}`}><Image src={c.production} alt={tx(locale, c.productionAlt)} fill sizes="(max-width: 900px) 100vw, 48vw" /></div>
          <div>
            <p className="eyebrow">{es ? "Preparado para compradores B2B" : "Built for B2B buyers"}</p>
            <h2>{isPvc ? (es ? "Suministro de paneles de techo PVC desde China" : "China PVC ceiling panel supply for importers") : (es ? "Una cotización basada en su mercado" : "A quotation built around your market")}</h2>
            <p>{isPvc ? (es ? "Importadores, mayoristas y distribuidores pueden compartir el uso, ancho, longitud, diseño, cantidad, embalaje y destino. Revisaremos la viabilidad y prepararemos una configuración comercial clara." : "Importers, wholesalers and building-material distributors can share the use, width, length, design, quantity, packaging and destination. We will review feasibility and prepare a clear commercial configuration.") : (es ? "Comparta el uso previsto, el formato, el diseño, la cantidad y el destino. Nuestro equipo revisará la viabilidad y le devolverá una configuración comercial clara." : "Share the intended use, format, design, quantity and destination. Our team will review feasibility and return a clear commercial configuration.")}</p>
            <Link className="button button--light" href={`${localizedPath("contact", locale)}#inquiry`}>{tx(locale, shared.quote)}</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container"><SectionTitle eyebrow={es ? "Proceso" : "Process"} title={es ? "Cuatro pasos hasta producción" : "Four steps to production"} align="center" /><Process locale={locale} /></div>
      </section>
      <section className="section section--tint">
        <div className="container faq-layout">
          <div>
            <SectionTitle
              eyebrow={es ? "Preguntas de compra" : "Buyer questions"}
              title={isPvc ? (es ? "Preguntas frecuentes sobre paneles de techo PVC" : "PVC ceiling panel buyer FAQ") : (es ? `Antes de cotizar ${tx(locale, c.eyebrow)}` : `Before quoting ${tx(locale, c.eyebrow)}`)}
              body={es ? "Estas respuestas utilizan únicamente las condiciones comerciales confirmadas. Los parámetros finales dependen de la configuración aprobada." : "These answers use confirmed commercial terms only. Final parameters depend on the approved configuration."}
            />
            <div className="faq-list">
              {buyerFaqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="contact-aside">
            <p className="eyebrow">FAQ</p>
            <h2>{es ? "¿Necesita otra confirmación?" : "Need another confirmation?"}</h2>
            <p>{es ? "Consulte las respuestas generales sobre muestras, embalaje, personalización y preparación de pedidos." : "Review the general answers on samples, packing, customization and order preparation."}</p>
            <Link className="button button--orange" href={localizedPath("faq", locale)}>{es ? "Ver todas las preguntas" : "View all questions"}</Link>
          </aside>
        </div>
      </section>
      {isPvc && (
        <section className="section section--tint">
          <div className="container">
            <SectionTitle eyebrow={es ? "Recursos para compradores" : "Buyer resources"} title={es ? "Continúe la evaluación de su pedido" : "Continue your PVC ceiling panel evaluation"} body={es ? "Consulte aplicaciones, capacidad de fabricación y criterios de compra antes de solicitar una cotización." : "Review applications, manufacturing capability and buying criteria before requesting a quotation."} />
            <div className="application-product-links" aria-label={es ? "Recursos relacionados con paneles de techo PVC" : "PVC ceiling panel related resources"}>
              <Link href={localizedPath("applications", locale)}>{es ? "Aplicaciones de techos interiores" : "Interior ceiling applications"}<span aria-hidden="true">→</span></Link>
              <Link href={localizedBlogPostPath("pvc-ceiling-panel-buying-guide", locale)}>{es ? "Guía de compra de paneles de techo PVC" : "PVC ceiling panel buying guide"}<span aria-hidden="true">→</span></Link>
              <Link href={localizedPath("manufacturing", locale)}>{es ? "Fabricación y carga de contenedores" : "Manufacturing and container loading"}<span aria-hidden="true">→</span></Link>
              <Link href={localizedPath("download", locale)}>{es ? "Solicitar catálogo PVC" : "Request the PVC catalog"}<span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      )}
      {page === "spc-flooring" && es && (
        <section className="section section--tint">
          <div className="container">
            <SectionTitle
              eyebrow="Guías para compradores"
              title="Verifique la categoría y prepare su comparación"
              body="Consulte las definiciones sectoriales y los datos que debe confirmar antes de solicitar una muestra o cotización."
            />
            <div className="application-product-links" aria-label="Guías relacionadas con piso SPC">
              <Link href="/blog/que-es-el-piso-spc/">¿Qué es el piso SPC?<span aria-hidden="true">→</span></Link>
              <Link href="/blog/piso-spc-vs-lvp/">Comparación de piso SPC y LVP<span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      )}
      {page === "wpc-wall-panel" && es && (
        <section className="section section--tint">
          <div className="container">
            <SectionTitle
              eyebrow="Guías para compradores"
              title="Comprenda la categoría y prepare su selección"
              body="Separe la definición general del producto específico y compare perfiles, diseños y colores antes de solicitar una muestra."
            />
            <div className="application-product-links" aria-label="Guías relacionadas con paneles de pared WPC">
              <Link href={localizedBlogPostPath("what-is-wpc-wall-panel", "es")}>¿Qué es un panel de pared WPC?<span aria-hidden="true">→</span></Link>
              <Link href={localizedBlogPostPath("wpc-wall-panel-designs-colors", "es")}>Diseños y colores de paneles de pared WPC<span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      )}
      {page === "uv-marble-sheet" && es && (
        <section className="section section--tint">
          <div className="container">
            <SectionTitle
              eyebrow="Guía para compradores"
              title="Compare diseños y colores antes de solicitar muestras"
              body="Utilice referencias visuales reales para preparar una selección controlada y confirmar la opción actual mediante muestra y cotización."
            />
            <div className="application-product-links" aria-label="Guía relacionada con láminas de mármol UV">
              <Link href="/blog/disenos-colores-laminas-marmol-uv/">Diseños y colores de láminas de mármol UV<span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={es ? "Otras líneas principales" : "Other core product lines"} title={es ? "Complete su selección de materiales" : "Continue your material selection"} />
          <div className="related-product-grid">
            {products.filter((product) => product.key !== page).map((product) => (
              <Link href={localizedPath(product.key, locale)} key={product.key}>
                <Image src={product.image} alt={productImageAlt[locale][product.key]} width={88} height={66} />
                <span><strong>{product[locale].name}</strong><small>{product[locale].summary}</small></span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand locale={locale} title={es ? `¿Está evaluando ${tx(locale, c.eyebrow)}?` : `Evaluating ${tx(locale, c.eyebrow)}?`} />
    </>
  );
}

function ManufacturingPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const gallery = [
    [asset.pvcProduction, es ? "Producción de paneles PVC" : "PVC panel production"],
    [asset.wpcProduction, es ? "Producción de paneles WPC" : "WPC panel production"],
    [asset.uvProduction, es ? "Preparación de láminas UV" : "UV sheet preparation"],
    [asset.loading, es ? "Carga de contenedores" : "Container loading"],
  ];
  return (
    <>
      <Hero locale={locale} eyebrow={tx(locale, shared.eyebrow)} title={es ? "Fabricación de materiales decorativos con soporte comercial" : "Decorative materials manufacturing with commercial support"} body={es ? "Instalaciones propias de SINOQI para producción, almacenamiento, preparación de pedidos y carga de contenedores." : "SINOQI-owned facilities for production, warehousing, order preparation and container loading."} image={asset.factory} imageAlt={es ? "Paneles de techo PVC en producción SINOQI" : "PVC ceiling panels in SINOQI production"} chips={es ? ["29.220 m²", "110 empleados", "300 × 40HQ/mes"] : ["29,220 m²", "110 employees", "300 × 40HQ/month"]} />
      <FactStrip locale={locale} />
      <section className="section"><div className="container"><SectionTitle eyebrow={es ? "Evidencia de fabricación" : "Manufacturing evidence"} title={es ? "Producción, almacén y carga en un mismo flujo" : "Production, warehouse and loading in one flow"} body={es ? "Las imágenes siguientes pertenecen a instalaciones propias confirmadas por SINOQI. La capacidad se aplica al conjunto de líneas de producto y se planifica por pedido." : "The following images are confirmed as SINOQI-owned facilities. Capacity applies across the product portfolio and is scheduled by order."} /><div className="gallery-grid">{gallery.map(([src, alt], i) => <figure className={i === 0 ? "gallery-card gallery-card--wide" : "gallery-card"} key={src}><Image src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>{alt}</figcaption></figure>)}</div></div></section>
      <section className="section section--tint"><div className="container"><SectionTitle eyebrow={es ? "Control comercial" : "Commercial control"} title={es ? "Qué confirmamos antes de producir" : "What we confirm before production"} align="center" /><div className="value-grid">{(es ? [["Producto", "Serie, formato, diseño y cantidad."], ["Muestra", "Referencia física aprobada cuando corresponde."], ["Pedido", "Precio, MOQ, depósito y plazo aplicable."], ["Entrega", "Embalaje, carga y documentación acordada."]] : [["Product", "Series, format, design and quantity."], ["Sample", "Approved physical reference where applicable."], ["Order", "Price, MOQ, deposit and applicable lead time."], ["Delivery", "Agreed packing, loading and documentation."]]).map(([title, body]) => <article key={title}><span className="value-dot" /><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <CtaBand locale={locale} />
    </>
  );
}

function ApplicationsPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const items = es
    ? [
        {
          id: "interior-ceilings",
          image: asset.pvc,
          title: "Techos interiores",
          body: "Para techos de viviendas, apartamentos, tiendas y oficinas. En cocinas o baños revisamos las condiciones del espacio antes de recomendar una configuración.",
          note: "No se atribuyen niveles de impermeabilidad, resistencia al fuego ni desempeño ambiental sin documentación específica.",
          products: [{ label: "Panel de techo PVC", key: "pvc-ceiling-panel" as const }],
        },
        {
          id: "residential-walls",
          image: asset.wpc,
          title: "Paredes residenciales y decorativas",
          body: "Para salas, dormitorios, paredes destacadas y otros interiores donde el diseño, el acabado y la combinación de materiales orientan la selección.",
          note: "El sustrato, el método de instalación y los accesorios se confirman según la solicitud.",
          products: [
            { label: "Panel de pared WPC", key: "wpc-wall-panel" as const },
            { label: "Lámina de mármol UV", key: "uv-marble-sheet" as const },
          ],
        },
        {
          id: "commercial-interiors",
          image: asset.uv,
          title: "Interiores comerciales",
          body: "Una ruta inicial para hoteles, oficinas, recepciones, tiendas y salas de exposición que requieren coordinar paredes y pisos dentro de una misma compra.",
          note: "La intensidad de uso y cualquier requisito técnico o normativo deben indicarse en la consulta.",
          products: [
            { label: "Panel de pared WPC", key: "wpc-wall-panel" as const },
            { label: "Lámina de mármol UV", key: "uv-marble-sheet" as const },
            { label: "Piso SPC", key: "spc-flooring" as const },
          ],
        },
        {
          id: "flooring-renovation",
          image: asset.spc,
          title: "Pisos y renovación interior",
          body: "Para pisos residenciales o comerciales y para actualizar superficies interiores existentes con acabados visibles en las colecciones disponibles.",
          note: "Antes de cotizar confirmamos el soporte existente, el área, el formato, la cantidad y el calendario.",
          products: [
            { label: "Piso SPC", key: "spc-flooring" as const },
            { label: "Panel de pared WPC", key: "wpc-wall-panel" as const },
            { label: "Lámina de mármol UV", key: "uv-marble-sheet" as const },
          ],
        },
      ]
    : [
        {
          id: "interior-ceilings",
          image: asset.pvc,
          title: "Interior ceilings",
          body: "For ceilings in homes, apartments, retail spaces and offices. For kitchen or bathroom inquiries, we review the site conditions before recommending a configuration.",
          note: "No waterproof, fire or environmental performance level is claimed without product-specific documentation.",
          products: [{ label: "PVC Ceiling Panel", key: "pvc-ceiling-panel" as const }],
        },
        {
          id: "residential-walls",
          image: asset.wpc,
          title: "Residential and decorative walls",
          body: "For living rooms, bedrooms, feature walls and other interiors where design, finish and material combinations guide product selection.",
          note: "The substrate, installation method and accessories are confirmed against the actual request.",
          products: [
            { label: "WPC Wall Panel", key: "wpc-wall-panel" as const },
            { label: "UV Marble Sheet", key: "uv-marble-sheet" as const },
          ],
        },
        {
          id: "commercial-interiors",
          image: asset.uv,
          title: "Commercial interiors",
          body: "A starting route for hotels, offices, reception areas, retail spaces and showrooms that need wall and flooring choices coordinated within one purchase.",
          note: "State the expected use intensity and any technical or regulatory requirement in your inquiry.",
          products: [
            { label: "WPC Wall Panel", key: "wpc-wall-panel" as const },
            { label: "UV Marble Sheet", key: "uv-marble-sheet" as const },
            { label: "SPC Flooring", key: "spc-flooring" as const },
          ],
        },
        {
          id: "flooring-renovation",
          image: asset.spc,
          title: "Flooring and interior renovation",
          body: "For residential or commercial floors and for updating existing interior surfaces with finishes shown in the available collections.",
          note: "Before quoting, we confirm the existing substrate, area, format, quantity and schedule.",
          products: [
            { label: "SPC Flooring", key: "spc-flooring" as const },
            { label: "WPC Wall Panel", key: "wpc-wall-panel" as const },
            { label: "UV Marble Sheet", key: "uv-marble-sheet" as const },
          ],
        },
      ];
  return (
    <>
      <Hero locale={locale} eyebrow={es ? "Guía de aplicaciones" : "Application guide"} title={es ? "Elija materiales según el espacio y la tarea" : "Choose materials around the space and task"} body={es ? "Explore escenarios residenciales, comerciales y de renovación, y pase de cada necesidad a las líneas de producto relacionadas." : "Explore residential, commercial and renovation scenarios, then move from each requirement to the related product lines."} image={asset.sampleUv} imageAlt={es ? "Muestras de acabados decorativos para selección" : "Decorative finish samples for product selection"} chips={es ? ["Techos", "Paredes", "Pisos", "Renovación"] : ["Ceilings", "Walls", "Floors", "Renovation"]} />
      <section className="section"><div className="container"><SectionTitle eyebrow={es ? "Elegir por espacio" : "Choose by space"} title={es ? "Cuatro rutas para preparar su consulta" : "Four routes to frame your inquiry"} body={es ? "Las imágenes son referencias de selección, no casos de clientes. Cada recomendación final depende de la superficie, el uso, el mercado y los requisitos reales." : "Images are selection references, not customer cases. Every final recommendation depends on the surface, use, market and actual requirements."} /><div className="application-grid">{items.map((item) => <article key={item.id}><div className="application-card__media"><Image src={item.image} alt={item.title} fill sizes="(max-width: 800px) 100vw, 50vw" /><span className="application-card__label">{es ? "Referencia de selección" : "Selection reference"}</span></div><div><h2>{item.title}</h2><p>{item.body}</p><p className="application-card__note">{item.note}</p><div className="application-product-links" aria-label={es ? `Productos relacionados con ${item.title}` : `Products related to ${item.title}`}>{item.products.map((product) => <Link key={product.key} href={localizedPath(product.key, locale)}>{product.label}<span aria-hidden="true">→</span></Link>)}</div></div></article>)}</div></div></section>
      <section className="section section--tint"><div className="container"><SectionTitle eyebrow={es ? "Antes de recomendar" : "Before we recommend"} title={es ? "Datos que necesitamos de su aplicación" : "Application details we need"} body={es ? "Comparta estos cuatro datos para que podamos relacionar su necesidad con una configuración de producto disponible, sin asumir prestaciones no confirmadas." : "Share these four details so we can relate your requirement to an available product configuration without assuming unverified performance."} align="center" /><div className="value-grid">{(es ? [["Espacio", "Tipo de edificio, zona interior y superficie existente."], ["Uso", "Techo, pared, revestimiento, piso o renovación."], ["Condiciones", "Humedad, intensidad de uso y requisitos del mercado."], ["Programa", "Cantidad inicial, reposición y fecha objetivo."]] : [["Space", "Building type, interior area and existing surface."], ["Use", "Ceiling, wall, cladding, flooring or renovation."], ["Conditions", "Moisture, use intensity and market requirements."], ["Program", "Initial quantity, replenishment and target date."]]).map(([title, body]) => <article key={title}><span className="value-dot" /><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <CtaBand locale={locale} title={es ? "¿No está seguro de qué producto encaja?" : "Not sure which product fits?"} body={es ? "Comparta el espacio, la superficie, el uso y la cantidad. Revisaremos las opciones disponibles y responderemos en un día laborable." : "Share the space, surface, use and quantity. We will review the available options and reply within one business day."} />
    </>
  );
}

function AboutPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return (
    <>
      <Hero locale={locale} eyebrow="SINOQI" title={es ? "Industria y comercio integrados desde 1990" : "Integrated manufacturing and trade since 1990"} body={es ? "Ayudamos a distribuidores, importadores y compradores de proyectos a convertir requisitos de mercado en pedidos de materiales decorativos viables." : "We help distributors, importers and project buyers turn market requirements into workable decorative-material orders."} image={asset.factory} imageAlt={es ? "Paneles de techo PVC en producción SINOQI" : "PVC ceiling panels in SINOQI production"} chips={es ? ["Hangzhou, China", "Fabricación", "Comercio exterior"] : ["Hangzhou, China", "Manufacturing", "Export trade"]} />
      <section className="section"><div className="container about-grid"><div><SectionTitle eyebrow={es ? "Nuestra función" : "Our role"} title={es ? "Conectar producto, producción y compra B2B" : "Connecting product, production and B2B buying"} body={es ? "Hangzhou Sinoqi Industry and Trade Co.,LTD opera con la marca SINOQI. La empresa integra fabricación y comercio para las líneas principales presentadas en este sitio." : "Hangzhou Sinoqi Industry and Trade Co.,LTD operates under the SINOQI brand. The company combines manufacturing and trade for the core product lines presented on this site."} /><p>{es ? "Nuestro enfoque es práctico: comprender el mercado, validar la configuración, confirmar las condiciones y coordinar producción, embalaje y carga." : "Our approach is practical: understand the market, validate the configuration, confirm terms, and coordinate production, packing and loading."}</p></div><div className="identity-card"><p>{es ? "Nombre legal" : "Legal entity"}</p><strong>{company.legalName}</strong><dl><div><dt>{es ? "Marca" : "Brand"}</dt><dd>{company.brand}</dd></div><div><dt>{es ? "Fundación" : "Established"}</dt><dd>1990</dd></div><div><dt>{es ? "Ubicación" : "Location"}</dt><dd>Hangzhou, Zhejiang, China</dd></div><div><dt>{es ? "Modelo" : "Model"}</dt><dd>{es ? "Industria y comercio integrados" : "Integrated manufacturing and trade"}</dd></div></dl></div></div></section>
      <FactStrip locale={locale} />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={es ? "Cartera principal" : "Core portfolio"}
            title={es ? "Cuatro líneas para distribución y proyectos" : "Four lines for distribution and project sourcing"}
            body={es ? "Cada configuración final se revisa según el mercado, el formato, el acabado, la cantidad y el embalaje solicitado." : "Each final configuration is reviewed against the market, format, finish, quantity and packing requested."}
          />
          <ProductGrid locale={locale} />
        </div>
      </section>
      <section className="section section--dark">
        <div className="container split-feature split-feature--reverse">
          <div className="split-feature__media">
            <Image src={asset.loading} alt={es ? "Preparación y carga de pedidos SINOQI" : "SINOQI order preparation and loading"} fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div>
            <p className="eyebrow">{es ? "Calidad y documentación" : "Quality and documentation"}</p>
            <h2>{es ? "Confirmaciones vinculadas a cada pedido" : "Checks tied to each order"}</h2>
            <p>{es ? "La información técnica y comercial se confirma mediante la cotización, la muestra aprobada cuando corresponde y los documentos acordados para el pedido. No publicamos sellos ni niveles de rendimiento sin documentación aplicable verificada." : "Technical and commercial details are confirmed through the quotation, an approved sample where applicable, and the documents agreed for the order. We do not publish badges or performance levels without verified, applicable documentation."}</p>
            <ul className="check-list">
              <li>{es ? "Configuración y cantidad confirmadas por escrito" : "Configuration and quantity confirmed in writing"}</li>
              <li>{es ? "Muestra de referencia cuando corresponde" : "Reference sample where applicable"}</li>
              <li>{es ? "Embalaje y carga coordinados por pedido" : "Packing and loading coordinated per order"}</li>
              <li>{es ? "Documentación acordada antes de la entrega" : "Agreed documentation before delivery"}</li>
            </ul>
            <Link className="button button--light" href={localizedPath("manufacturing", locale)}>{es ? "Ver fabricación" : "View manufacturing"}</Link>
          </div>
        </div>
      </section>
      <section className="section section--tint"><div className="container"><SectionTitle eyebrow={es ? "Principios de trabajo" : "Working principles"} title={es ? "Claridad antes que promesas" : "Clarity before promises"} align="center" /><div className="value-grid">{(es ? [["Datos verificables", "Publicamos únicamente parámetros y capacidades respaldados por los materiales disponibles."], ["Condiciones claras", "MOQ, plazo, muestra, embalaje y personalización se confirman por pedido."], ["Respuesta útil", "Nuestro objetivo es responder cada solicitud comercial en un día laborable."], ["Adaptación", "Evaluamos los requisitos por producto, mercado y programa de compra."]] : [["Verifiable facts", "We publish only parameters and capability statements supported by available materials."], ["Clear terms", "MOQ, lead time, sample, packing and customization are confirmed per order."], ["Useful response", "We aim to reply to each commercial inquiry within one business day."], ["Adaptation", "We evaluate requirements by product, market and buying program."]]).map(([title, body]) => <article key={title}><span className="value-dot" /><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <CtaBand locale={locale} />
    </>
  );
}

const faqContent: Record<Locale, Array<[string, string]>> = {
  es: [
    ["¿La muestra es gratuita?", "Sí. Para compradores con interés real, la muestra es gratuita y el comprador asume el coste de mensajería."],
    ["¿Cuál es el MOQ?", "Para panel de techo PVC, panel WPC, lámina de mármol UV y accesorios PVC, el punto de partida confirmado es de 100 piezas por modelo y color. Otras configuraciones se evalúan en la cotización."],
    ["¿Cuál es el plazo habitual?", "El plazo habitual confirmado para las líneas indicadas es de 30 días desde la recepción del depósito. El calendario final depende de la configuración y del plan de producción."],
    ["¿Se puede personalizar el producto?", "Sí. No hay un límite único publicado; el equipo evalúa las medidas, el diseño, el acabado y el embalaje según la solicitud."],
    ["¿Qué opciones de embalaje ofrecen?", "Las opciones confirmadas incluyen caja de cartón y plástico retráctil. La solución final se acuerda por producto y pedido."],
    ["¿Cuándo recibiré respuesta?", "Nuestro objetivo público es responder en un día laborable."],
    ["¿Puedo comprar una cantidad de prueba?", "Sí. Se aceptan programas de prueba, pedidos de contenedor y reposición continua, sujetos al MOQ y a la configuración confirmada."],
    ["¿Qué información necesitan para cotizar?", "Indique empresa, mercado, producto, cantidad, uso previsto, medidas o acabado, embalaje y fecha objetivo. Cuanto más claro sea el requisito, más útil será la primera respuesta."],
    ["¿Cómo se confirman las especificaciones finales?", "Las dimensiones, el acabado, el embalaje y demás parámetros se confirman en la cotización y, cuando corresponde, mediante una muestra aprobada."],
    ["¿Cómo puedo recibir el catálogo?", "Complete el formulario de catálogo con su correo corporativo. Enviaremos por email el catálogo bilingüe EN+ES de PVC Ceiling, PVC Panel y WPC Panel."],
  ],
  en: [
    ["Is the sample free?", "Yes. For buyers with a genuine project, the sample is free and the buyer covers the courier cost."],
    ["What is the MOQ?", "For PVC ceiling panels, WPC panels, UV marble sheets and PVC accessories, the confirmed starting point is 100 pieces per design and color. Other configurations are evaluated in the quotation."],
    ["What is the regular lead time?", "The confirmed regular lead time for the listed lines is 30 days from receipt of deposit. The final schedule depends on configuration and production planning."],
    ["Can the product be customized?", "Yes. There is no single published limit; the team evaluates size, design, finish and packing against each request."],
    ["What packing options do you offer?", "Confirmed options include cartons and shrink wrap. The final solution is agreed by product and order."],
    ["When will I receive a reply?", "Our public response target is within one business day."],
    ["Can I start with a trial quantity?", "Yes. Trial programs, container orders and ongoing replenishment are accepted, subject to the confirmed MOQ and configuration."],
    ["What information do you need to quote?", "Include your company, market, product, quantity, intended use, size or finish, packing and target date. A clearer requirement enables a more useful first response."],
    ["How are final specifications confirmed?", "Dimensions, finish, packing and other parameters are confirmed in the quotation and, where applicable, through an approved sample."],
    ["How can I receive the catalog?", "Complete the catalog form with your business email. We will email the bilingual EN+ES PVC Ceiling, PVC Panel and WPC Panel catalog."],
  ],
};

function FaqPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return (
    <>
      <section className="page-hero"><div className="container page-hero__inner"><p className="eyebrow">{es ? "Preguntas frecuentes" : "Frequently asked questions"}</p><h1>{es ? "Respuestas claras antes de solicitar precio" : "Clear answers before you request pricing"}</h1><p>{es ? "Condiciones iniciales de compra verificadas para ayudarle a preparar una consulta útil." : "Verified starting terms to help you prepare a useful inquiry."}</p></div></section>
      <section className="section"><div className="container faq-layout"><div className="faq-list">{faqContent[locale].map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div><aside className="contact-aside"><p className="eyebrow">{es ? "¿Otra pregunta?" : "Another question?"}</p><h2>{es ? "Cuéntenos qué necesita" : "Tell us what you need"}</h2><p>{es ? "Incluya el producto, la cantidad y el mercado para recibir una respuesta más precisa." : "Include the product, quantity and market for a more precise reply."}</p><Link className="button button--orange" href={`${localizedPath("contact", locale)}#inquiry`}>{tx(locale, shared.quote)}</Link><a href={`mailto:${company.email}`}>{company.email}</a></aside></div></section>
      <CtaBand locale={locale} />
    </>
  );
}

function DownloadPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">{es ? "Catálogo de producto" : "Product catalog"}</p>
          <h1>{es ? "Reciba el catálogo PVC y WPC de SINOQI" : "Receive the SINOQI PVC and WPC catalog"}</h1>
          <p>{es ? "Complete sus datos y enviaremos por email el catálogo bilingüe EN+ES confirmado para publicación." : "Complete your details and we will email the bilingual EN+ES catalog confirmed for public distribution."}</p>
        </div>
      </section>
      <section className="section">
        <div className="container catalog-layout">
          <div className="catalog-preview">
            <div className="catalog-preview__image">
              <Image src={asset.catalogCover} alt={es ? "Portada del catálogo PVC y WPC de SINOQI" : "SINOQI PVC and WPC catalog cover"} fill priority sizes="(max-width: 800px) 100vw, 42vw" />
            </div>
            <div className="catalog-preview__copy">
              <p className="eyebrow">PDF · EN + ES</p>
              <h2>PVC Ceiling, PVC Panel &amp; WPC Panel</h2>
              <p>{es ? "El catálogo contiene familias de producto, acabados y referencias visuales para preparar su consulta. Todos los parámetros finales deben confirmarse en la cotización." : "The catalog contains product families, finishes and visual references to prepare your inquiry. All final parameters must be confirmed in the quotation."}</p>
              <ul className="check-list">
                <li>PVC Ceiling</li>
                <li>PVC Panel</li>
                <li>WPC Panel</li>
                <li>{es ? "Contenido bilingüe inglés y español" : "Bilingual English and Spanish content"}</li>
              </ul>
              <div className="application-product-links" aria-label={es ? "Productos relacionados con el catálogo" : "Products covered by the catalog"}>
                <Link href={localizedPath("pvc-ceiling-panel", locale)}>{es ? "Ver panel de techo PVC" : "View PVC Ceiling Panel"}<span aria-hidden="true">→</span></Link>
                <Link href={localizedPath("wpc-wall-panel", locale)}>{es ? "Ver panel de pared WPC" : "View WPC Wall Panel"}<span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
          <div className="catalog-request-panel">
            <p className="eyebrow">{es ? "Envío por email" : "Email delivery"}</p>
            <h2>{es ? "¿Dónde debemos enviar el catálogo?" : "Where should we send the catalog?"}</h2>
            <p>{es ? "El archivo no se descarga directamente. Lo enviaremos al correo indicado y nuestro equipo recibirá una copia de la solicitud." : "The file is not offered as a direct download. We will send it to the email provided, and our team will receive a copy of the request."}</p>
            <CatalogRequestForm locale={locale} />
          </div>
        </div>
      </section>
      <CtaBand locale={locale} title={es ? "¿Necesita precio además del catálogo?" : "Need pricing as well as the catalog?"} body={es ? "Comparta producto, cantidad, mercado y acabado para preparar una cotización." : "Share the product, quantity, market and finish so we can prepare a quotation."} />
    </>
  );
}

function BlogPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const visiblePosts = blogPosts.filter((post) => !post.locales || post.locales.includes(locale));
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Blog</p>
          <h1>{es ? "Guías de compra para materiales decorativos" : "Decorative materials sourcing guides"}</h1>
          <p>{es ? "Publicamos únicamente guías basadas en información de producto y condiciones comerciales verificadas. No se generan noticias de empresa sin hechos y fechas confirmados." : "We publish guides based on verified product information and commercial terms. We do not generate company news without confirmed events and dates."}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow={es ? "Última guía" : "Latest guide"} title={es ? "Información práctica antes de cotizar" : "Practical information before you request a quote"} body={es ? "La biblioteca crecerá a medida que las instrucciones técnicas y los datos de producto sean verificados." : "The library will grow as technical instructions and product data are verified."} />
          <div className="blog-grid">
            {visiblePosts.map((post, index) => (
              <article className="blog-card" key={post.slug}>
                <Link className="blog-card__image" href={localizedBlogPostPath(post.slug, locale)}>
                  <Image src={post.cover ?? asset.pvc} alt={post.coverAlt?.[locale] ?? (es ? "Paneles de techo PVC SINOQI" : "SINOQI PVC ceiling panels")} fill priority={index === 0} sizes="(max-width: 760px) 100vw, 48vw" />
                </Link>
                <div className="blog-card__body">
                  <div className="blog-meta"><span>{post.category[locale]}</span><span>{post.readingTime[locale]}</span></div>
                  <h2><Link href={localizedBlogPostPath(post.slug, locale)}>{post.title[locale]}</Link></h2>
                  <p>{post.description[locale]}</p>
                  <Link className="text-link" href={localizedBlogPostPath(post.slug, locale)}>{es ? "Leer la guía" : "Read the guide"} <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return (
    <>
      <section className="page-hero page-hero--contact"><div className="container page-hero__inner"><p className="eyebrow">{es ? "Contacto B2B" : "B2B contact"}</p><h1>{es ? "Solicite una cotización basada en su necesidad real" : "Request a quote based on your actual requirement"}</h1><p>{es ? "Producto, cantidad, mercado, medidas y acabado: cuanto más contexto comparta, más útil será nuestra primera respuesta." : "Product, quantity, market, size and finish: the more context you share, the more useful our first response will be."}</p></div></section>
      <section className="section" id="inquiry"><div className="container contact-layout"><div className="contact-panel"><p className="eyebrow">SINOQI</p><h2>{es ? "Hable con Catherine" : "Talk to Catherine"}</h2><p>{es ? "Nuestro objetivo es responder en un día laborable." : "Our target is to reply within one business day."}</p><div className="contact-list"><a href={`mailto:${company.email}`}><span>{es ? "Correo" : "Email"}</span><strong>{company.email}</strong></a><a href={`tel:${company.phoneHref}`}><span>{es ? "Teléfono" : "Phone"}</span><strong>{company.phone}</strong></a><a href={company.whatsappHref} rel="noreferrer" target="_blank"><span>WhatsApp</span><strong>{company.phone}</strong></a><div><span>{es ? "Horario" : "Working hours"}</span><strong>{company.workingHours[locale]}</strong></div><div><span>{es ? "Dirección" : "Address"}</span><strong>{company.address}</strong><a className="map-link" href={company.googleMaps} rel="noreferrer" target="_blank">{es ? "Ver en Google Maps ↗" : "View on Google Maps ↗"}</a></div></div><div className="sample-note" id="sample-policy"><strong>{es ? "Política de muestras" : "Sample policy"}</strong><p>{es ? "La muestra es gratuita para compradores interesados; el coste de mensajería corre a cargo del comprador." : "The sample is free for interested buyers; the buyer covers the courier cost."}</p></div></div><div><SectionTitle eyebrow={es ? "Formulario de consulta" : "Inquiry form"} title={es ? "Prepare su solicitud" : "Prepare your request"} body={es ? "Los campos marcados con * son obligatorios. Envíe sus requisitos y nuestro equipo responderá en un día laborable." : "Fields marked * are required. Send your requirements and our team will reply within one business day."} /><ContactInquiryForm locale={locale} /></div></div></section>
    </>
  );
}

export function PageRenderer({ locale, page }: { locale: Locale; page: PageKey }) {
  if (page === "home") return <HomePage locale={locale} />;
  if (page === "products") return <ProductsPage locale={locale} />;
  if (page === "pvc-ceiling-panel" || page === "wpc-wall-panel" || page === "uv-marble-sheet" || page === "spc-flooring") return <ProductPage locale={locale} page={page} />;
  if (page === "manufacturing") return <ManufacturingPage locale={locale} />;
  if (page === "applications") return <ApplicationsPage locale={locale} />;
  if (page === "about") return <AboutPage locale={locale} />;
  if (page === "faq") return <FaqPage locale={locale} />;
  if (page === "download") return <DownloadPage locale={locale} />;
  if (page === "blog") return <BlogPage locale={locale} />;
  return <ContactPage locale={locale} />;
}
