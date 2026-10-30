import type { Locale } from "@/content/site";

type LocalizedText = Record<Locale, string>;

export type BlogSection = {
  id: string;
  title: LocalizedText;
  paragraphs: Record<Locale, string[]>;
  bullets?: Record<Locale, string[]>;
};

type BlogImage = {
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
  afterSectionId: string;
};

type BlogVideo = {
  src: string;
  label: LocalizedText;
  caption: LocalizedText;
  afterSectionId?: string;
};

type BlogFaq = {
  question: LocalizedText;
  answer: LocalizedText;
};

type BlogCta = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
};

export type BlogPost = {
  slug: string;
  localizedSlug?: Partial<Record<Locale, string>>;
  locales?: Locale[];
  kind?: "pvc-ceiling-designs-finishes" | "pvc-ceiling-bathroom-guide" | "pvc-ceiling-sizes-specifications" | "pvc-ceiling-color-guide" | "wpc-wall-panel-designs-colors" | "wpc-wall-panel-explainer" | "uv-marble-sheet-designs-colors" | "spc-flooring-explainer" | "spc-vs-lvp-guide";
  publishedAt: string;
  category: LocalizedText;
  title: LocalizedText;
  seoTitle?: LocalizedText;
  description: LocalizedText;
  introduction: LocalizedText;
  readingTime: LocalizedText;
  cover?: string;
  coverAlt?: LocalizedText;
  coverCaption?: LocalizedText;
  coverVideo?: BlogVideo;
  scopeNote?: LocalizedText;
  images?: BlogImage[];
  videos?: BlogVideo[];
  faqTitle?: LocalizedText;
  faqs?: BlogFaq[];
  cta?: BlogCta;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-pvc-ceiling-colors-first-container",
    localizedSlug: { es: "como-elegir-colores-cielo-raso-pvc-primer-contenedor" },
    kind: "pvc-ceiling-color-guide",
    publishedAt: "2026-09-25",
    category: { es: "PVC Ceiling", en: "PVC Ceiling" },
    title: {
      es: "Cómo elegir 8 colores de cielo raso de PVC para su primer contenedor",
      en: "How to Choose 8 PVC Ceiling Colors for Your First Container",
    },
    seoTitle: {
      es: "Cómo elegir 8 colores de cielo raso de PVC para su primer contenedor",
      en: "How to Choose 8 PVC Ceiling Colors for Your First Container",
    },
    description: {
      es: "Guía práctica para importadores que eligen colores blancos, tipo madera y decorativos para un primer contenedor 40HQ.",
      en: "A practical guide for importers choosing white, wood look and decorative PVC ceiling colors for a first 40HQ container.",
    },
    introduction: {
      es: "La selección de colores es una de las decisiones más importantes al importar paneles de cielo raso de PVC.",
      en: "Choosing colors is one of the most important decisions when importing PVC ceiling panels.",
    },
    readingTime: { es: "6 min de lectura", en: "6 min read" },
    cover: "/images/blog/pvc-ceiling-colors-l07-l08-l10.png",
    coverAlt: {
      es: "Muestras de cielo raso de PVC L07 L08 y L10",
      en: "PVC ceiling color samples L07 L08 and L10",
    },
    sections: [],
  },
  {
    slug: "what-is-wpc-wall-panel",
    localizedSlug: { es: "que-es-un-panel-de-pared-wpc" },
    kind: "wpc-wall-panel-explainer",
    publishedAt: "2026-09-01",
    category: { es: "Guía de producto", en: "Product guide" },
    title: {
      es: "¿Qué es un panel de pared WPC? Guía para compradores B2B",
      en: "What Is a WPC Wall Panel? A Guide for B2B Buyers",
    },
    seoTitle: {
      es: "¿Qué es un panel de pared WPC? Guía B2B | SINOQI",
      en: "What Is a WPC Wall Panel? B2B Buyer Guide | SINOQI",
    },
    description: {
      es: "Conozca qué significa panel de pared WPC, qué no confirma esta categoría y qué deben verificar importadores y distribuidores antes de cotizar.",
      en: "Learn what a WPC wall panel means, what the category does not confirm, and what importers and distributors should verify before requesting a quote.",
    },
    introduction: {
      es: "Esta guía separa la definición general del compuesto madera-plástico de los datos específicos que deben confirmarse para cada perfil, muestra y pedido.",
      en: "This guide separates the general wood-plastic composite definition from the product-specific details that must be confirmed for each profile, sample and order.",
    },
    readingTime: { es: "7 min de lectura", en: "7 min read" },
    cover: "/assets/wpc-wall-panel.png",
    coverAlt: {
      es: "Referencias reales de perfiles y acabados de paneles de pared WPC",
      en: "Real WPC wall panel profile and finish references",
    },
    sections: [],
  },
  {
    slug: "uv-marble-sheet-designs-colors",
    localizedSlug: { es: "disenos-colores-laminas-marmol-uv" },
    kind: "uv-marble-sheet-designs-colors",
    publishedAt: "2026-09-01",
    category: { es: "Guía de selección", en: "Selection guide" },
    title: {
      es: "Diseños y colores de láminas de mármol UV para compradores B2B",
      en: "UV Marble Sheet Designs and Colors for B2B Buyers",
    },
    seoTitle: {
      es: "Diseños y colores de láminas de mármol UV | SINOQI",
      en: "UV Marble Sheet Designs & Colors | SINOQI",
    },
    description: {
      es: "Compare referencias visuales claras, oscuras, doradas, continuas y decorativas, y prepare una solicitud de muestras de láminas de mármol UV.",
      en: "Compare light, dark, gold-accent, continuous and decorative UV marble sheet design references, then prepare a focused sample request.",
    },
    introduction: {
      es: "Esta guía ayuda a importadores, distribuidores y compradores de proyectos a convertir referencias visuales reales en una selección que pueda confirmarse mediante muestra y cotización.",
      en: "This guide helps importers, distributors and project buyers turn real visual references into a shortlist that can be confirmed through samples and quotation.",
    },
    readingTime: { es: "8 min de lectura", en: "8 min read" },
    cover: "/assets/uv-marble-light-design-references.jpg",
    coverAlt: {
      es: "Referencias visuales claras de láminas de mármol UV para selección B2B",
      en: "Light UV marble sheet visual references for B2B selection",
    },
    sections: [],
  },
  {
    slug: "spc-vs-lvp-flooring",
    localizedSlug: { es: "piso-spc-vs-lvp" },
    kind: "spc-vs-lvp-guide",
    publishedAt: "2026-09-01",
    category: { es: "Guía comparativa", en: "Comparison guide" },
    title: {
      es: "Piso SPC vs LVP: qué deben comparar los compradores B2B",
      en: "SPC Flooring vs LVP: What B2B Buyers Should Compare",
    },
    seoTitle: {
      es: "Piso SPC vs LVP: guía comparativa B2B | SINOQI",
      en: "SPC Flooring vs LVP: B2B Comparison Guide | SINOQI",
    },
    description: {
      es: "Compare la terminología, las categorías de construcción y los datos de compra de SPC y LVP antes de solicitar muestras o cotizaciones.",
      en: "Compare SPC flooring vs LVP terminology, construction categories and sourcing details before requesting samples or quotations.",
    },
    introduction: {
      es: "Una comparación neutral para separar la categoría LVP de la construcción de núcleo rígido SPC y preparar una revisión de producto verificable.",
      en: "A neutral comparison that separates the LVP product label from SPC rigid-core construction and turns the result into a verifiable sourcing checklist.",
    },
    readingTime: { es: "8 min de lectura", en: "8 min read" },
    cover: "/assets/spc-flooring.jpg",
    coverAlt: {
      es: "Muestra real de piso SPC con referencia visual efecto madera",
      en: "Real SPC flooring sample used for a B2B product comparison",
    },
    sections: [],
  },
  {
    slug: "what-is-spc-flooring",
    localizedSlug: { es: "que-es-el-piso-spc" },
    kind: "spc-flooring-explainer",
    publishedAt: "2026-09-01",
    category: { es: "Guía de producto", en: "Product guide" },
    title: {
      es: "¿Qué es el piso SPC? Guía práctica para compradores B2B",
      en: "What Is SPC Flooring? A Practical Guide for B2B Buyers",
    },
    seoTitle: {
      es: "¿Qué es el piso SPC? Guía para compradores B2B | SINOQI",
      en: "What Is SPC Flooring? B2B Buyer Guide | SINOQI",
    },
    description: {
      es: "Conozca qué significa SPC flooring, cómo revisar una construcción de núcleo rígido y qué deben confirmar los importadores antes de pedir muestras o cotización.",
      en: "Learn what SPC flooring means, how rigid-core product details should be checked, and what importers need before requesting samples or a quotation.",
    },
    introduction: {
      es: "Una explicación basada en referencias sectoriales y una lista de compra para separar la definición general de las especificaciones que deben confirmarse para cada producto.",
      en: "This guide separates the general rigid-core flooring definition from the product-specific details that importers and distributors should confirm before sourcing.",
    },
    readingTime: { es: "7 min de lectura", en: "7 min read" },
    cover: "/assets/spc-flooring.jpg",
    coverAlt: {
      es: "Muestra real de piso SPC con referencia visual efecto madera",
      en: "Real SPC flooring sample with a wood-look visual reference",
    },
    sections: [],
  },
  {
    slug: "pvc-ceiling-panel-buying-guide",
    publishedAt: "2026-08-08",
    category: { es: "Guía de compra", en: "Buying guide" },
    title: {
      es: "Guía de compra de paneles de techo PVC: qué confirmar antes de cotizar",
      en: "PVC Ceiling Panel Buying Guide: What to Confirm Before Requesting a Quote",
    },
    description: {
      es: "Una lista práctica para preparar medidas, acabado, cantidad, embalaje, muestra y plazo antes de solicitar una cotización B2B.",
      en: "A practical checklist for size, finish, quantity, packing, sample and lead time before requesting a B2B quotation.",
    },
    introduction: {
      es: "Una buena cotización comienza con un requisito claro. Esta guía reúne los datos comerciales y de producto que SINOQI puede confirmar con la información disponible, sin sustituir la ficha técnica ni la muestra aprobada de cada pedido.",
      en: "A useful quotation starts with a clear requirement. This guide brings together the commercial and product details SINOQI can confirm from the available information, without replacing the technical sheet or approved sample for a specific order.",
    },
    readingTime: { es: "6 min de lectura", en: "6 min read" },
    sections: [
      {
        id: "application",
        title: { es: "1. Defina el espacio y el uso previsto", en: "1. Define the space and intended use" },
        paragraphs: {
          es: ["Indique si el panel se utilizará en un techo interior residencial, comercial o de renovación. El uso previsto ayuda a revisar el formato, el acabado y los requisitos que deben confirmarse antes de producir."],
          en: ["State whether the panel is intended for a residential, commercial or renovation interior ceiling. The intended use helps frame the format, finish and requirements that must be confirmed before production."],
        },
        bullets: {
          es: ["Tipo de edificio y espacio", "Dimensiones aproximadas de la superficie", "País o mercado de destino", "Requisitos especiales que deba revisar el equipo"],
          en: ["Building and space type", "Approximate surface area", "Destination country or market", "Any special requirements the team should review"],
        },
      },
      {
        id: "size-finish",
        title: { es: "2. Confirme ancho, acabado y diseño", en: "2. Confirm width, finish and design" },
        paragraphs: {
          es: ["Los anchos habituales confirmados para PVC Ceiling son 25 cm y 30 cm. El color, el acabado, el espesor y cualquier otra medida se revisan según la colección disponible y la solicitud del comprador."],
          en: ["The confirmed regular widths for PVC Ceiling are 25 cm and 30 cm. Color, finish, thickness and any other dimensions are reviewed against the available collection and the buyer’s request."],
        },
        bullets: {
          es: ["Ancho y longitud requeridos", "Color o referencia visual", "Tipo de acabado", "Accesorios o embalaje relacionado"],
          en: ["Required width and length", "Color or visual reference", "Finish type", "Related accessories or packing"],
        },
      },
      {
        id: "quantity-moq",
        title: { es: "3. Prepare la cantidad por modelo y color", en: "3. Prepare quantity by design and color" },
        paragraphs: {
          es: ["El punto de partida confirmado es de 100 piezas por modelo y color. Para una cotización útil, separe la cantidad por referencia en lugar de indicar únicamente un volumen total."],
          en: ["The confirmed starting point is 100 pieces per design and color. For a useful quotation, separate the quantity by reference instead of providing only one total volume."],
        },
      },
      {
        id: "sample",
        title: { es: "4. Utilice una muestra para validar la selección", en: "4. Use a sample to validate the selection" },
        paragraphs: {
          es: ["SINOQI ofrece una muestra gratuita a compradores con interés real; el comprador asume el coste de mensajería. La muestra permite revisar el aspecto y la configuración antes de confirmar un pedido."],
          en: ["SINOQI provides a free sample to buyers with a genuine requirement; the buyer covers the courier cost. The sample helps review appearance and configuration before an order is confirmed."],
        },
      },
      {
        id: "packing",
        title: { es: "5. Aclare el embalaje desde el principio", en: "5. Clarify packing early" },
        paragraphs: {
          es: ["Las opciones confirmadas incluyen caja de cartón y plástico retráctil. La opción final depende del producto, la configuración y el pedido, por lo que debe aparecer en la solicitud de cotización."],
          en: ["Confirmed options include cartons and shrink wrap. The final option depends on the product, configuration and order, so it should be included in the quotation request."],
        },
      },
      {
        id: "lead-time",
        title: { es: "6. Calcule el plazo desde el depósito", en: "6. Count lead time from the deposit" },
        paragraphs: {
          es: ["El plazo habitual confirmado es de 30 días desde la recepción del depósito. La fecha final se confirma con la configuración del producto y el plan de producción; no debe tratarse como una promesa automática para todos los pedidos."],
          en: ["The confirmed regular lead time is 30 days from receipt of deposit. The final date is confirmed with the product configuration and production plan and should not be treated as an automatic promise for every order."],
        },
      },
      {
        id: "quote-checklist",
        title: { es: "7. Lista final para solicitar precio", en: "7. Final quotation checklist" },
        paragraphs: {
          es: ["Envíe la información siguiente para que la primera respuesta comercial sea concreta. SINOQI tiene como objetivo responder en un día laborable."],
          en: ["Send the following information so the first commercial response can be specific. SINOQI aims to reply within one business day."],
        },
        bullets: {
          es: ["Empresa y mercado", "Uso previsto", "Ancho, longitud, acabado y color", "Cantidad por modelo y color", "Embalaje", "Fecha objetivo", "Solicitud de muestra, si corresponde"],
          en: ["Company and market", "Intended use", "Width, length, finish and color", "Quantity by design and color", "Packing", "Target date", "Sample request, if applicable"],
        },
      },
    ],
  },
  {
    slug: "pvc-ceiling-panel-designs-finishes",
    localizedSlug: { es: "disenos-acabados-paneles-techo-pvc" },
    kind: "pvc-ceiling-designs-finishes",
    publishedAt: "2026-08-14",
    category: { es: "Guía de selección", en: "Selection guide" },
    title: {
      es: "Diseños y acabados de paneles de techo PVC para importadores y distribuidores",
      en: "PVC Ceiling Panel Designs & Finishes for Importers and Distributors",
    },
    seoTitle: {
      es: "Diseños y Acabados de Paneles de Techo PVC | SINOQI",
      en: "PVC Ceiling Panel Designs & Finishes | SINOQI",
    },
    description: {
      es: "Compare acabados y líneas de diseño de paneles de techo PVC y prepare una solicitud de muestras para su programa de importación o distribución.",
      en: "Compare confirmed PVC ceiling finish routes and design directions, then prepare a sample request for your import or distribution program.",
    },
    introduction: {
      es: "Compare los tipos de acabado confirmados y las líneas visuales disponibles antes de preparar una solicitud de muestras para su programa de importación, distribución o venta mayorista.",
      en: "Compare confirmed finish routes and visual design directions before preparing samples for your import, wholesale or distribution program.",
    },
    readingTime: { es: "8 min de lectura", en: "8 min read" },
    cover: "/assets/pvc-ceiling-design-samples.jpg",
    coverAlt: {
      es: "Muestras de paneles de techo PVC en blanco, efecto madera y diseños decorativos",
      en: "PVC ceiling panel samples in white, wood-look and decorative designs",
    },
    sections: [],
  },
  {
    slug: "pvc-ceiling-panels-for-bathrooms",
    localizedSlug: { es: "paneles-techo-pvc-para-banos" },
    kind: "pvc-ceiling-bathroom-guide",
    publishedAt: "2026-08-16",
    category: { es: "Guía de aplicaciones", en: "Application guide" },
    title: {
      es: "Paneles de techo PVC para baños dirigidos a importadores y distribuidores",
      en: "Bathroom PVC Ceiling Panels for Importers and Distributors",
    },
    seoTitle: {
      es: "Paneles de Techo PVC para Baños: Guía B2B | SINOQI",
      en: "Bathroom PVC Ceiling Panels: B2B Buyer Guide | SINOQI",
    },
    description: {
      es: "Evalúe paneles de techo PVC para baños: uso sobre la ducha, anchos confirmados, MOQ, muestras, embalaje, plazo y datos necesarios para cotizar.",
      en: "Evaluate bathroom PVC ceiling panels for distribution, including shower-area use, confirmed widths, MOQ, samples, packaging, lead time and RFQ details.",
    },
    introduction: {
      es: "Evalúe la aplicación, las opciones confirmadas y los datos que SINOQI necesita para revisar un programa B2B de paneles de techo PVC para baños.",
      en: "Evaluate the application, confirmed options and information SINOQI needs to review a B2B bathroom PVC ceiling panel program.",
    },
    readingTime: { es: "10 min de lectura", en: "10 min read" },
    cover: "/assets/pvc-ceiling.jpg",
    coverAlt: {
      es: "Trabajadores manipulando paneles de techo PVC SINOQI en una línea de producción",
      en: "Workers handling SINOQI PVC ceiling panels on a factory production line",
    },
    sections: [],
  },
  {
    slug: "pvc-ceiling-panel-sizes-specifications",
    localizedSlug: { es: "medidas-especificaciones-paneles-techo-pvc" },
    kind: "pvc-ceiling-sizes-specifications",
    publishedAt: "2026-08-16",
    category: { es: "Guía de especificaciones", en: "Specification guide" },
    title: {
      es: "Medidas y Especificaciones de Paneles de Techo PVC para Importadores",
      en: "PVC Ceiling Panel Sizes & Specifications for Importers",
    },
    seoTitle: {
      es: "Medidas y Especificaciones de Paneles de Techo PVC | SINOQI",
      en: "PVC Ceiling Panel Sizes & Specifications | SINOQI",
    },
    description: {
      es: "Compare anchos, largos, espesores y perfiles confirmados de paneles de techo PVC y prepare una solicitud de cotización B2B precisa.",
      en: "Compare confirmed PVC ceiling panel widths, lengths, thicknesses and profile options, then prepare an accurate B2B specification and quote request.",
    },
    introduction: {
      es: "Esta guía ayuda a importadores, distribuidores y mayoristas a comparar las medidas confirmadas y a preparar una especificación clara antes de cotizar.",
      en: "This guide helps importers, distributors and wholesalers compare confirmed dimensions and prepare a clear specification before requesting a quote.",
    },
    readingTime: { es: "9 min de lectura", en: "9 min read" },
    cover: "/assets/sample-pvc.jpg",
    coverAlt: {
      es: "Muestras reales de paneles de techo PVC SINOQI para revisar perfiles y acabados",
      en: "Real SINOQI PVC ceiling panel samples for reviewing profiles and finishes",
    },
    sections: [],
  },
  {
    slug: "wpc-wall-panel-designs-colors",
    localizedSlug: { es: "disenos-colores-paneles-pared-wpc" },
    locales: ["es", "en"],
    kind: "wpc-wall-panel-designs-colors",
    publishedAt: "2026-08-20",
    category: { es: "Guía de selección", en: "Selection guide" },
    title: {
      es: "Diseños y colores de paneles de pared WPC para importadores y distribuidores",
      en: "WPC Wall Panel Designs and Colors for Importers and Distributors",
    },
    seoTitle: {
      es: "Diseños y colores de paneles de pared WPC | SINOQI",
      en: "WPC Wall Panel Designs & Colors for B2B Buyers | SINOQI",
    },
    description: {
      es: "Compare diseños, colores efecto madera y neutros, perfiles y pasos para solicitar muestras de paneles de pared WPC para compradores B2B.",
      en: "Compare WPC wall panel designs, wood-look and neutral colors, profile choices and sample steps for importers, distributors and project buyers.",
    },
    introduction: {
      es: "Utilice referencias confirmadas del catálogo para organizar diseños, perfiles y colores de paneles WPC antes de solicitar muestras o una cotización.",
      en: "Use confirmed catalog references to organize WPC wall panel designs, profiles and colors before requesting samples or a quotation.",
    },
    readingTime: { es: "9 min de lectura", en: "9 min read" },
    cover: "/assets/wpc-wall-panel.png",
    coverAlt: {
      es: "Referencias de perfiles y colores de paneles de pared WPC SINOQI para selección B2B",
      en: "SINOQI WPC wall panel profile and color references for B2B selection",
    },
    sections: [],
  },
  {
    slug: "what-is-pvc-ceiling-panel",
    localizedSlug: { es: "que-es-un-panel-de-techo-pvc" },
    publishedAt: "2026-10-06",
    category: { es: "Guía de producto", en: "Product guide" },
    title: {
      es: "¿Qué es un panel de techo PVC? Definición y guía para compradores B2B",
      en: "What Is a PVC Ceiling Panel? Definition and Guide for B2B Buyers",
    },
    seoTitle: {
      es: "¿Qué es un panel de techo PVC? Definición B2B | SINOQI",
      en: "What Is a PVC Ceiling Panel? B2B Definition | SINOQI",
    },
    description: {
      es: "Definición clara de panel de techo PVC: composición, usos, ventajas, limitaciones y datos que importadores y distribuidores deben confirmar antes de comprar.",
      en: "A clear definition of PVC ceiling panel: composition, uses, advantages, limitations and the details importers and distributors should confirm before purchasing.",
    },
    introduction: {
      es: "El panel de techo PVC es un material decorativo y funcional usado en techos interiores. Esta guía separa la definición general del producto de las especificaciones que deben confirmarse para cada pedido.",
      en: "A PVC ceiling panel is a decorative and functional material used in interior ceilings. This guide separates the general product definition from the specifications that must be confirmed for each order.",
    },
    readingTime: { es: "7 min de lectura", en: "7 min read" },
    cover: "/assets/pvc-ceiling.jpg",
    coverAlt: {
      es: "Paneles de techo PVC en una línea de producción SINOQI",
      en: "PVC ceiling panels on a SINOQI production line",
    },
    sections: [
      {
        id: "definition",
        title: { es: "1. Definición: ¿qué es un panel de techo PVC?", en: "1. Definition: what is a PVC ceiling panel?" },
        paragraphs: {
          es: ["Un panel de techo PVC es una lámina extruida de cloruro de polivinilo diseñada para revestir techos interiores. El material es ligero, resistente a la humedad y se instala mediante un sistema de ranura y lengüeta que oculta los tornillos."],
          en: ["A PVC ceiling panel is an extruded sheet of polyvinyl chloride designed to cover interior ceilings. The material is lightweight, moisture-resistant and installed using a tongue-and-groove system that conceals fasteners."],
        },
      },
      {
        id: "composition",
        title: { es: "2. Composición y fabricación", en: "2. Composition and manufacturing" },
        paragraphs: {
          es: ["El panel de techo PVC se produce por extrusión a partir de compuesto de PVC con aditivos que proporcionan estabilidad UV, flexibilidad y resistencia al impacto. El acabado superficial puede ser liso, impreso, estampado en caliente o laminado."],
          en: ["PVC ceiling panels are produced by extrusion from a PVC compound with additives that provide UV stability, flexibility and impact resistance. The surface finish can be smooth, printed, hot-stamped or laminated."],
        },
        bullets: {
          es: ["Compuesto base: PVC rígido con aditivos estabilizadores", "Proceso: extrusión continua en perfiles huecos", "Acabados: impresión, estampado en caliente, laminado", "Formatos habituales: anchos de 25 cm y 30 cm"],
          en: ["Base compound: rigid PVC with stabilizing additives", "Process: continuous extrusion into hollow profiles", "Finishes: printing, hot stamping, lamination", "Standard formats: 25 cm and 30 cm widths"],
        },
      },
      {
        id: "advantages",
        title: { es: "3. Ventajas confirmadas", en: "3. Confirmed advantages" },
        paragraphs: {
          es: ["El panel de techo PVC ofrece un conjunto de ventajas prácticas para compradores B2B que abastecen mercados residenciales y comerciales."],
          en: ["PVC ceiling panels offer a set of practical advantages for B2B buyers supplying residential and commercial markets."],
        },
        bullets: {
          es: ["Ligero: reduce el coste de transporte por contenedor", "Resistente a la humedad: adecuado para baños y cocinas", "Instalación rápida: sistema de ranura y lengüeta", "Bajo mantenimiento: superficie limpiable con paño húmedo", "Personalizable: diseño, color y acabado evaluados por pedido"],
          en: ["Lightweight: reduces container shipping cost", "Moisture-resistant: suitable for bathrooms and kitchens", "Fast installation: tongue-and-groove system", "Low maintenance: cleanable surface with a damp cloth", "Customizable: design, color and finish evaluated per order"],
        },
      },
      {
        id: "limitations",
        title: { es: "4. Limitaciones a confirmar", en: "4. Limitations to confirm" },
        paragraphs: {
          es: ["El panel de techo PVC tiene limitaciones que deben comunicarse claramente al comprador final para evitar expectativas incorrectas."],
          en: ["PVC ceiling panels have limitations that should be clearly communicated to the end buyer to prevent incorrect expectations."],
        },
        bullets: {
          es: ["Uso interior: no diseñado para aplicación exterior", "Resistencia térmica: verificar rango de temperatura del mercado de destino", "Carga estructural: no soporta peso; es un material de revestimiento", "Compatibilidad de accesorios: confirmar perfiles de borde y esquina"],
          en: ["Indoor use: not designed for exterior application", "Thermal resistance: verify temperature range for target market", "Structural load: does not bear weight; it is a cladding material", "Accessory compatibility: confirm edge and corner profiles"],
        },
      },
      {
        id: "buying-checklist",
        title: { es: "5. Lista de compra para importadores", en: "5. Buying checklist for importers" },
        paragraphs: {
          es: ["Antes de solicitar una cotización de paneles de techo PVC, confirme los siguientes puntos para que la respuesta comercial sea concreta."],
          en: ["Before requesting a PVC ceiling panel quotation, confirm the following points so the commercial response can be specific."],
        },
        bullets: {
          es: ["Ancho requerido (25 cm o 30 cm)", "Color o referencia visual", "Cantidad por modelo y color (MOQ: 100 piezas)", "Embalaje preferido (cartón o plástico retráctil)", "País y puerto de destino", "Solicitud de muestra"],
          en: ["Required width (25 cm or 30 cm)", "Color or visual reference", "Quantity per design and color (MOQ: 100 pieces)", "Preferred packing (carton or shrink wrap)", "Destination country and port", "Sample request"],
        },
      },
    ],
  },
  {
    slug: "what-is-uv-marble-sheet",
    localizedSlug: { es: "que-es-una-lamina-de-marmol-uv" },
    publishedAt: "2026-10-06",
    category: { es: "Guía de producto", en: "Product guide" },
    title: {
      es: "¿Qué es una lámina de mármol UV? Definición y guía B2B",
      en: "What Is a UV Marble Sheet? Definition and B2B Guide",
    },
    seoTitle: {
      es: "¿Qué es una lámina de mármol UV? Definición B2B | SINOQI",
      en: "What Is a UV Marble Sheet? B2B Definition | SINOQI",
    },
    description: {
      es: "Definición de lámina de mármol UV: composición, usos, diferencias con mármol natural y datos que distribuidores deben confirmar antes de importar.",
      en: "Definition of UV marble sheet: composition, uses, differences from natural marble and details distributors should confirm before importing.",
    },
    introduction: {
      es: "La lámina de mármol UV es un material decorativo que imita la apariencia del mármol natural mediante impresión UV sobre una base de plástico. Esta guía separa la definición general de las especificaciones que deben confirmarse para cada pedido.",
      en: "A UV marble sheet is a decorative material that imitates the appearance of natural marble through UV printing on a plastic base. This guide separates the general definition from the specifications that must be confirmed for each order.",
    },
    readingTime: { es: "7 min de lectura", en: "7 min read" },
    cover: "/assets/uv-marble-sheet.jpg",
    coverAlt: {
      es: "Láminas de mármol UV con acabado blanco en producción SINOQI",
      en: "UV marble sheets with white finish in SINOQI production",
    },
    sections: [
      {
        id: "definition",
        title: { es: "1. Definición: ¿qué es una lámina de mármol UV?", en: "1. Definition: what is a UV marble sheet?" },
        paragraphs: {
          es: ["Una lámina de mármol UV es un panel decorativo producido mediante impresión UV de patrones de mármol sobre una lámina de PVC o compuesto. El resultado visual imita la apariencia del mármol natural con un peso y coste significativamente menores."],
          en: ["A UV marble sheet is a decorative panel produced by UV-printing marble patterns onto a PVC or composite sheet. The visual result imitates the appearance of natural marble at a significantly lower weight and cost."],
        },
      },
      {
        id: "composition",
        title: { es: "2. Composición y proceso de fabricación", en: "2. Composition and manufacturing process" },
        paragraphs: {
          es: ["La lámina de mármol UV se fabrica imprimiendo tintas curadas por UV sobre una lámina extruida. La base puede ser PVC, WPC o un compuesto híbrido. El curado UV proporciona resistencia al rayado y a la decoloración."],
          en: ["UV marble sheets are manufactured by printing UV-cured inks onto an extruded sheet. The base can be PVC, WPC or a hybrid composite. UV curing provides scratch resistance and color fastness."],
        },
        bullets: {
          es: ["Base: lámina de PVC o compuesto", "Impresión: tintas curadas por radiación UV", "Acabado: mate, brillante o texturizado", "Patrones: mármol blanco, crema, gris, dorado, negro"],
          en: ["Base: PVC or composite sheet", "Printing: UV-cured inks", "Finish: matte, glossy or textured", "Patterns: white, cream, gray, gold, black marble"],
        },
      },
      {
        id: "vs-natural-marble",
        title: { es: "3. Lámina UV vs mármol natural", en: "3. UV marble sheet vs natural marble" },
        paragraphs: {
          es: ["La lámina de mármol UV y el mármol natural sirven propósitos diferentes. Comprender las diferencias ayuda a posicionar el producto correctamente en el mercado de destino."],
          en: ["UV marble sheets and natural marble serve different purposes. Understanding the differences helps position the product correctly in the target market."],
        },
        bullets: {
          es: ["Peso: la lámina UV pesa una fracción del mármol natural", "Instalación: la lámina UV se instala con adhesivo; el mármol requiere anclaje mecánico", "Coste: la lámina UV tiene un coste por m² significativamente menor", "Mantenimiento: la lámina UV no requiere sellado periódico", "Resistencia: el mármol natural es más resistente al calor extremo"],
          en: ["Weight: UV sheet weighs a fraction of natural marble", "Installation: UV sheet installs with adhesive; marble requires mechanical anchoring", "Cost: UV sheet has significantly lower cost per m²", "Maintenance: UV sheet does not require periodic sealing", "Resistance: natural marble is more resistant to extreme heat"],
        },
      },
      {
        id: "applications",
        title: { es: "4. Aplicaciones confirmadas", en: "4. Confirmed applications" },
        paragraphs: {
          es: ["La lámina de mármol UV se usa en paredes y superficies interiores donde la estética del mármol es deseable pero el peso o el coste del mármol natural no son viables."],
          en: ["UV marble sheets are used on interior walls and surfaces where the marble aesthetic is desirable but the weight or cost of natural marble is not viable."],
        },
        bullets: {
          es: ["Paredes de baños y cocinas residenciales", "Recepciones y mostradores comerciales", "Renovación interior sobre azulejos existentes", "Columnas y zócalos decorativos"],
          en: ["Residential bathroom and kitchen walls", "Commercial receptions and counters", "Interior renovation over existing tiles", "Decorative columns and skirting"],
        },
      },
      {
        id: "buying-checklist",
        title: { es: "5. Lista de compra para distribuidores", en: "5. Buying checklist for distributors" },
        paragraphs: {
          es: ["Antes de solicitar una cotización de láminas de mármol UV, confirme los siguientes datos."],
          en: ["Before requesting a UV marble sheet quotation, confirm the following details."],
        },
        bullets: {
          es: ["Patrón y color de mármol deseado", "Espesor y dimensiones de la lámina", "Acabado superficial (mate, brillante o texturizado)", "Cantidad por diseño (MOQ: 100 piezas)", "Mercado de destino y normativa local", "Solicitud de muestra"],
          en: ["Desired marble pattern and color", "Sheet thickness and dimensions", "Surface finish (matte, glossy or textured)", "Quantity per design (MOQ: 100 pieces)", "Target market and local regulations", "Sample request"],
        },
      },
    ],
  },
  {
    slug: "pvc-vs-wpc-vs-spc-comparison",
    localizedSlug: { es: "comparacion-pvc-wpc-spc" },
    publishedAt: "2026-10-06",
    category: { es: "Guía comparativa", en: "Comparison guide" },
    title: {
      es: "PVC vs WPC vs SPC: comparación de materiales decorativos B2B",
      en: "PVC vs WPC vs SPC: Decorative Material Comparison for B2B Buyers",
    },
    seoTitle: {
      es: "PVC vs WPC vs SPC: comparación de materiales | SINOQI",
      en: "PVC vs WPC vs SPC: Material Comparison | SINOQI",
    },
    description: {
      es: "Comparación neutral de PVC, WPC y SPC: composición, usos, ventajas y datos de compra que importadores y distribuidores deben comparar antes de cotizar.",
      en: "A neutral comparison of PVC, WPC and SPC: composition, uses, advantages and buying details that importers and distributors should compare before requesting a quote.",
    },
    introduction: {
      es: "PVC, WPC y SPC son tres categorías de materiales decorativos que a veces se confunden. Esta guía compara sus definiciones, composiciones y aplicaciones para ayudar a compradores B2B a seleccionar la línea correcta.",
      en: "PVC, WPC and SPC are three decorative material categories that are sometimes confused. This guide compares their definitions, compositions and applications to help B2B buyers select the correct product line.",
    },
    readingTime: { es: "9 min de lectura", en: "9 min read" },
    cover: "/assets/pvc-ceiling.jpg",
    coverAlt: {
      es: "Muestras de materiales PVC, WPC y SPC de SINOQI",
      en: "PVC, WPC and SPC material samples from SINOQI",
    },
    sections: [
      {
        id: "definitions",
        title: { es: "1. Definiciones básicas", en: "1. Basic definitions" },
        paragraphs: {
          es: ["Antes de comparar, es importante definir cada material con precisión. Los tres son compuestos usados en materiales decorativos para construcción, pero difieren en composición y aplicación."],
          en: ["Before comparing, it is important to define each material precisely. All three are compounds used in decorative building materials, but they differ in composition and application."],
        },
        bullets: {
          es: ["PVC (policloruro de vinilo): panel extruido de plástico rígido usado en techos interiores", "WPC (compuesto madera-plástico): mezcla de fibra de madera y plástico usada en paneles de pared", "SPC (piso de núcleo rígido): piso de piedra y plástico con núcleo rígido"],
          en: ["PVC (polyvinyl chloride): extruded rigid plastic panel used in interior ceilings", "WPC (wood-plastic composite): blend of wood fiber and plastic used in wall panels", "SPC (stone-plastic composite): stone and plastic flooring with a rigid core"],
        },
      },
      {
        id: "composition",
        title: { es: "2. Composición comparada", en: "2. Composition comparison" },
        paragraphs: {
          es: ["La composición determina las propiedades físicas de cada material. Comprender las diferencias ayuda a explicar el producto al comprador final."],
          en: ["Composition determines the physical properties of each material. Understanding the differences helps explain the product to the end buyer."],
        },
        bullets: {
          es: ["PVC: 100% plástico con aditivos estabilizadores; sin fibra natural", "WPC: mezcla de fibra de madera (30-60%) y plástico (PVC o PE)", "SPC: mezcla de polvo de piedra (60-80%) y PVC; núcleo rígido", "Los tres pueden imprimirse, laminarse y estamparse en caliente"],
          en: ["PVC: 100% plastic with stabilizing additives; no natural fiber", "WPC: blend of wood fiber (30-60%) and plastic (PVC or PE)", "SPC: blend of stone powder (60-80%) and PVC; rigid core", "All three can be printed, laminated and hot-stamped"],
        },
      },
      {
        id: "applications",
        title: { es: "3. Aplicaciones principales", en: "3. Primary applications" },
        paragraphs: {
          es: ["Cada material tiene una aplicación principal definida por su composición y propiedades mecánicas."],
          en: ["Each material has a primary application defined by its composition and mechanical properties."],
        },
        bullets: {
          es: ["PVC: techos interiores residenciales y comerciales", "WPC: paredes decorativas interiores y paneles de feature", "SPC: pisos interiores residenciales y comerciales", "Solapamiento limitado: cada material domina su categoría"],
          en: ["PVC: residential and commercial interior ceilings", "WPC: decorative interior walls and feature panels", "SPC: residential and commercial interior flooring", "Limited overlap: each material dominates its category"],
        },
      },
      {
        id: "advantages",
        title: { es: "4. Ventajas por material", en: "4. Advantages by material" },
        paragraphs: {
          es: ["Cada material ofrece ventajas distintas que deben comunicarse claramente al comprador."],
          en: ["Each material offers distinct advantages that should be clearly communicated to the buyer."],
        },
        bullets: {
          es: ["PVC: ligero, resistente a humedad, instalación rápida, coste bajo", "WPC: aspecto natural de madera, tacto cálido, aislamiento térmico", "SPC: alta resistencia al impacto, estabilidad dimensional, imitación de madera"],
          en: ["PVC: lightweight, moisture-resistant, fast installation, low cost", "WPC: natural wood appearance, warm touch, thermal insulation", "SPC: high impact resistance, dimensional stability, wood imitation"],
        },
      },
      {
        id: "buying-decision",
        title: { es: "5. Cómo elegir la línea correcta", en: "5. How to choose the right line" },
        paragraphs: {
          es: ["La elección entre PVC, WPC y SPC depende del espacio de aplicación, el presupuesto y las preferencias del mercado de destino. Un distribuidor puede trabajar con las tres líneas o especializarse en una."],
          en: ["The choice between PVC, WPC and SPC depends on the application space, budget and target market preferences. A distributor can work with all three lines or specialize in one."],
        },
        bullets: {
          es: ["Para programas de techos: PVC es la opción estándar", "Para programas de paredes decorativas: WPC ofrece el mejor valor estético", "Para programas de pisos: SPC ofrece rigidez y durabilidad", "Un contenedor 40HQ puede mezclar las tres líneas"],
          en: ["For ceiling programs: PVC is the standard choice", "For decorative wall programs: WPC offers the best aesthetic value", "For flooring programs: SPC offers rigidity and durability", "A 40HQ container can mix all three lines"],
        },
      },
      {
        id: "checklist",
        title: { es: "6. Lista de compra conjunta", en: "6. Combined buying checklist" },
        paragraphs: {
          es: ["Si considera importar más de una línea, prepare la siguiente información para que la cotización sea precisa."],
          en: ["If you consider importing more than one line, prepare the following information for an accurate quotation."],
        },
        bullets: {
          es: ["Líneas de producto (PVC, WPC, SPC o combinación)", "Cantidad por línea y por modelo (MOQ: 100 piezas por diseño y color)", "Mercado de destino y normativa local", "Plan de embalaje y carga mixta", "Solicitud de muestras por línea"],
          en: ["Product lines (PVC, WPC, SPC or combination)", "Quantity per line and per design (MOQ: 100 pieces per design and color)", "Target market and local regulations", "Packing and mixed-load plan", "Sample request per line"],
        },
      },
    ],
  },
  {
    slug: "pvc-ceiling-panel-installation-guide",
    localizedSlug: { es: "guia-instalacion-paneles-techo-pvc" },
    publishedAt: "2026-10-08",
    category: { es: "Guía de instalación", en: "Installation guide" },
    title: {
      es: "Guía de instalación de paneles de techo PVC para distribuidores",
      en: "PVC Ceiling Panel Installation Guide for Distributors",
    },
    seoTitle: {
      es: "Guía de Instalación de Paneles de Techo PVC | SINOQI",
      en: "PVC Ceiling Panel Installation Guide | SINOQI",
    },
    description: {
      es: "Guía de instalación de paneles de techo PVC: herramientas, pasos, tiempos y errores comunes que distribuidores deben conocer para capacitar a instaladores.",
      en: "PVC ceiling panel installation guide: tools, steps, timing and common mistakes distributors should know to train installers.",
    },
    introduction: {
      es: "La instalación de paneles de techo PVC es un proceso directo pero requiere preparación y las herramientas correctas. Esta guía ayuda a distribuidores a capacitar a sus instaladores y a establecer expectativas claras con el cliente final.",
      en: "Installing PVC ceiling panels is a straightforward process but requires preparation and the right tools. This guide helps distributors train their installers and set clear expectations with the end customer.",
    },
    readingTime: { es: "8 min de lectura", en: "8 min read" },
    cover: "/assets/pvc-ceiling.jpg",
    coverAlt: {
      es: "Paneles de techo PVC listos para instalación",
      en: "PVC ceiling panels ready for installation",
    },
    sections: [
      {
        id: "tools",
        title: { es: "1. Herramientas necesarias", en: "1. Required tools" },
        paragraphs: {
          es: ["Antes de comenzar la instalación, el instalador debe tener todas las herramientas preparadas. La falta de herramientas adecuadas es la causa más común de instalacion deficiente."],
          en: ["Before starting installation, the installer should have all tools ready. Missing proper tools is the most common cause of poor installation quality."],
        },
        bullets: {
          es: ["Cinta métrica y lápiz de marcado", "Sierra de mano o sierra eléctrica con hoja fina", "Taladro con broca para plástico", "Nivel de burbuja o láser", "Pistola de tornillos o destornillador", "Tornillos con arandela (recomendados por el fabricante)", "Perfiles de borde y esquina (si aplica)", "Adhesivo de contacto (opcional para refuerzo)"],
          en: ["Measuring tape and marking pencil", "Hand saw or power saw with fine-tooth blade", "Drill with plastic-rated bit", "Bubble or laser level", "Screw gun or screwdriver", "Screws with washers (manufacturer-recommended)", "Edge and corner profiles (if applicable)", "Contact adhesive (optional for reinforcement)"],
        },
      },
      {
        id: "preparation",
        title: { es: "2. Preparación del techo", en: "2. Ceiling preparation" },
        paragraphs: {
          es: ["La superficie del techo debe estar limpia, seca y lo más plana posible. Si el techo tiene vigas o estructura irregular, instale primero una estructura de soporte (perfiles metálicos o de madera) a una distancia uniforme."],
          en: ["The ceiling surface should be clean, dry and as flat as possible. If the ceiling has beams or an irregular structure, install a supporting frame (metal or wood profiles) at a uniform spacing first."],
        },
        bullets: {
          es: ["Verificar que la superficie esté seca y libre de polvo", "Medir y marcar la posición de los perfiles de soporte", "Confirmar que la distancia entre perfiles no exceda 60 cm", "Revisar que no haya cableado o tuberías en la zona de tornillos"],
          en: ["Verify the surface is dry and dust-free", "Measure and mark the position of support profiles", "Confirm the spacing between profiles does not exceed 60 cm", "Check for wiring or pipes in the screw zone"],
        },
      },
      {
        id: "installation-steps",
        title: { es: "3. Pasos de instalación", en: "3. Installation steps" },
        paragraphs: {
          es: ["El sistema de ranura y lengüeta permite que cada panel se conecte con el anterior. Los tornillos se colocan en la ranura, de modo que el siguiente panel los oculta."],
          en: ["The tongue-and-groove system allows each panel to connect with the previous one. Screws are placed in the groove, so the next panel conceals them."],
        },
        bullets: {
          es: ["Paso 1: Fijar el primer panel en un extremo, atornillando por la ranura", "Paso 2: Insertar el siguiente panel deslizando la lengüeta en la ranura", "Paso 3: Atornillar el panel por la ranura oculta", "Paso 4: Repetir hasta completar la fila", "Paso 5: Cortar el último panel a la medida necesaria", "Paso 6: Instalar perfiles de borde y esquina"],
          en: ["Step 1: Fix the first panel at one end, screwing through the groove", "Step 2: Insert the next panel by sliding the tongue into the groove", "Step 3: Screw the panel through the concealed groove", "Step 4: Repeat until the row is complete", "Step 5: Cut the last panel to the required size", "Step 6: Install edge and corner profiles"],
        },
      },
      {
        id: "timing",
        title: { es: "4. Tiempo estimado por m²", en: "4. Estimated time per m²" },
        paragraphs: {
          es: ["El tiempo de instalación depende de la experiencia del instalador, la complejidad del techo y la preparación previa. Los siguientes son tiempos de referencia para distribuidores, no garantías para el cliente final."],
          en: ["Installation time depends on installer experience, ceiling complexity and prior preparation. The following are reference times for distributors, not guarantees for the end customer."],
        },
        bullets: {
          es: ["Instalador experimentado, techo plano: 5-8 min/m²", "Instalador intermedio, techo plano: 8-12 min/m²", "Techo con esquinas o obstaculos: +30-50% al tiempo base", "Primer proyecto de un instalador nuevo: prever 15-20 min/m²"],
          en: ["Experienced installer, flat ceiling: 5-8 min/m²", "Intermediate installer, flat ceiling: 8-12 min/m²", "Ceiling with corners or obstacles: +30-50% base time", "First project for a new installer: allow 15-20 min/m²"],
        },
      },
      {
        id: "common-mistakes",
        title: { es: "5. Errores comunes a evitar", en: "5. Common mistakes to avoid" },
        paragraphs: {
          es: ["Estos son los errores más frecuentes que los distribuidores deben comunicar a sus instaladores para reducir devoluciones y reclamaciones."],
          en: ["These are the most frequent mistakes distributors should communicate to their installers to reduce returns and complaints."],
        },
        bullets: {
          es: ["Atornillar fuera de la ranura: los tornillos quedan visibles", "No dejar dilatación: el panel puede deformarse con cambios de temperatura", "Usar tornillos sin arandela: el cabezal atraviesa el plástico", "Instalar sobre superficie húmeda: puede aparecer moho detrás del panel", "Cortar sin medir dos veces: desperdicio de material"],
          en: ["Screwing outside the groove: screws become visible", "Not leaving expansion gap: panels may warp with temperature changes", "Using screws without washers: the head pierces through the plastic", "Installing on a damp surface: mold may appear behind the panel", "Cutting without measuring twice: material waste"],
        },
      },
      {
        id: "distributor-tips",
        title: { es: "6. Consejo para distribuidores", en: "6. Tip for distributors" },
        paragraphs: {
          es: ["Un distribuidor que vende paneles de techo PVC debería ofrecer una guía de instalación简 en el idioma del mercado de destino. Esto reduce reclamaciones y diferencia al distribuidor de la competencia."],
          en: ["A distributor selling PVC ceiling panels should offer a brief installation guide in the target market's language. This reduces complaints and differentiates the distributor from competitors."],
        },
        bullets: {
          es: ["Incluir una guía impresa de 1-2 páginas en cada pedido", "Ofrecer capacitación básica para instaladores locales", "Proporcionar tornillos y accesorios junto con los paneles", "Mantener muestras físicas para que el instalador practique antes del proyecto real"],
          en: ["Include a 1-2 page printed guide with each order", "Offer basic training for local installers", "Provide screws and accessories alongside panels", "Keep physical samples for installers to practice before the real project"],
        },
      },
    ],
  },
  {
    slug: "spc-vs-laminate-flooring",
    localizedSlug: { es: "piso-spc-vs-laminado" },
    publishedAt: "2026-10-08",
    category: { es: "Guía comparativa", en: "Comparison guide" },
    title: {
      es: "SPC vs laminado: diferencias clave para compradores B2B",
      en: "SPC vs Laminate Flooring: Key Differences for B2B Buyers",
    },
    seoTitle: {
      es: "Piso SPC vs Laminado: Comparación B2B | SINOQI",
      en: "SPC vs Laminate Flooring: B2B Comparison | SINOQI",
    },
    description: {
      es: "Comparación de piso SPC y laminado: composición, resistencia al agua, instalación, durabilidad y datos de compra que distribuidores deben comparar antes de importar.",
      en: "Comparison of SPC and laminate flooring: composition, water resistance, installation, durability and buying details distributors should compare before importing.",
    },
    introduction: {
      es: "El piso SPC y el laminado son dos categorías de pisos que compiten en algunos mercados pero tienen composiciones y propiedades muy diferentes. Esta guía separa las definiciones de los datos de compra que deben confirmarse.",
      en: "SPC flooring and laminate are two flooring categories that compete in some markets but have very different compositions and properties. This guide separates definitions from the buying details that must be confirmed.",
    },
    readingTime: { es: "8 min de lectura", en: "8 min read" },
    cover: "/assets/spc-flooring.jpg",
    coverAlt: {
      es: "Muestra de piso SPC con acabado efecto madera",
      en: "SPC flooring sample with wood-look finish",
    },
    sections: [
      {
        id: "definitions",
        title: { es: "1. Definiciones", en: "1. Definitions" },
        paragraphs: {
          es: ["El piso SPC (stone-plastic composite) es un piso de núcleo rígido compuesto de polvo de piedra y PVC. El laminado es un piso compuesto de tableros de fibra de madera con una capa decorativa impresa y una capa de desgaste."],
          en: ["SPC flooring (stone-plastic composite) is a rigid-core flooring made of stone powder and PVC. Laminate is a flooring made of wood-fiber boards with a printed decorative layer and a wear layer."],
        },
      },
      {
        id: "composition",
        title: { es: "2. Composición comparada", en: "2. Composition comparison" },
        paragraphs: {
          es: ["La diferencia fundamental está en el núcleo del material. Esta diferencia determina todas las demás propiedades."],
          en: ["The fundamental difference lies in the core of the material. This difference determines all other properties."],
        },
        bullets: {
          es: ["SPC: núcleo de piedra + PVC (60-80% piedra), 100% resistente al agua", "Laminado: núcleo de tablero de fibra (HDF), susceptible al agua", "SPC: más pesado y rígido", "Laminado: más ligero y con tacto más similar a madera"],
          en: ["SPC: stone + PVC core (60-80% stone), 100% waterproof", "Laminate: HDF board core, susceptible to water", "SPC: heavier and more rigid", "Laminate: lighter with a more wood-like feel"],
        },
      },
      {
        id: "water-resistance",
        title: { es: "3. Resistencia al agua", en: "3. Water resistance" },
        paragraphs: {
          es: ["La resistencia al agua es la diferencia más importante para muchos mercados. El SPC es 100% resistente al agua en toda su superficie; el laminado solo lo es en la superficie, pero el núcleo se hincha si el agua penetra por las juntas."],
          en: ["Water resistance is the most important difference for many markets. SPC is 100% waterproof across its entire surface; laminate is only water-resistant on the surface, but the core swells if water penetrates through the joints."],
        },
        bullets: {
          es: ["SPC: puede sumergirse sin daño (verificar garantía del fabricante)", "Laminado: tolera derrames superficiales si se limpian rápido", "SPC: ideal para baños, cocinas y sótanos", "Laminado: no recomendado para zonas con agua permanente"],
          en: ["SPC: can be submerged without damage (verify manufacturer warranty)", "Laminate: tolerates surface spills if cleaned quickly", "SPC: ideal for bathrooms, kitchens and basements", "Laminate: not recommended for areas with standing water"],
        },
      },
      {
        id: "installation",
        title: { es: "4. Instalación", en: "4. Installation" },
        paragraphs: {
          es: ["Ambos sistemas usan instalación flotante con clic, pero las preparaciones del subsuelo son diferentes."],
          en: ["Both systems use floating click installation, but subfloor preparations differ."],
        },
        bullets: {
          es: ["SPC: requiere subsuelo más plano; usar subcapa recomendada por el fabricante", "Laminado: más tolerante con subsuelos irregulares; usar subcapa estándar", "SPC: más difícil de cortar (requiere sierra con hoja para plástico)", "Laminado: fácil de cortar con sierra estándar"],
          en: ["SPC: requires a flatter subfloor; use manufacturer-recommended underlayment", "Laminate: more tolerant of uneven subfloors; use standard underlayment", "SPC: harder to cut (requires saw with plastic-rated blade)", "Laminate: easy to cut with a standard saw"],
        },
      },
      {
        id: "durability",
        title: { es: "5. Durabilidad y desgaste", en: "5. Durability and wear" },
        paragraphs: {
          es: ["La durabilidad depende de la capa de desgaste (wear layer) en ambos casos, pero el SPC tiene mejor resistencia al impacto por su núcleo rígido."],
          en: ["Durability depends on the wear layer in both cases, but SPC has better impact resistance due to its rigid core."],
        },
        bullets: {
          es: ["SPC: alta resistencia al impacto (no se abolla con caídas de objetos)", "Laminado: puede abollarse con impactos fuertes", "SPC: clase de abrasión AC3-AC5 típica", "Laminado: disponible en AC1-AC5 según gama"],
          en: ["SPC: high impact resistance (does not dent from falling objects)", "Laminate: can dent from strong impacts", "SPC: typically AC3-AC5 abrasion class", "Laminate: available in AC1-AC5 depending on grade"],
        },
      },
      {
        id: "buying-decision",
        title: { es: "6. Cómo elegir para su mercado", en: "6. How to choose for your market" },
        paragraphs: {
          es: ["La elección entre SPC y laminado depende del clima del mercado de destino, el presupuesto del consumidor y los canales de distribución."],
          en: ["The choice between SPC and laminate depends on the target market's climate, consumer budget and distribution channels."],
        },
        bullets: {
          es: ["Mercados húmedos o tropicales: SPC es la opción preferida", "Mercados con presupuesto sensible: el laminado puede tener mejor relación precio-estética", "Proyectos comerciales: SPC por su resistencia al impacto", "Renovación residencial: ambos son válidos según la habitación"],
          en: ["Humid or tropical markets: SPC is the preferred choice", "Budget-sensitive markets: laminate may have better price-to-aesthetics ratio", "Commercial projects: SPC for its impact resistance", "Residential renovation: both are valid depending on the room"],
        },
      },
    ],
  },
  {
    slug: "pvc-ceiling-panel-price-guide",
    localizedSlug: { es: "guia-precios-paneles-techo-pvc" },
    publishedAt: "2026-10-08",
    category: { es: "Guía de precios", en: "Price guide" },
    title: {
      es: "Precio de paneles de techo PVC: factores que determinan el costo B2B",
      en: "PVC Ceiling Panel Price: Factors That Determine B2B Cost",
    },
    seoTitle: {
      es: "Precio de Paneles de Techo PVC: Guía B2B | SINOQI",
      en: "PVC Ceiling Panel Price Guide for B2B | SINOQI",
    },
    description: {
      es: "Guía de precios de paneles de techo PVC: factores que afectan el precio, rangos orientativos por tipo de acabado y cómo preparar una solicitud de cotización precisa.",
      en: "PVC ceiling panel price guide: factors that affect price, indicative ranges by finish type and how to prepare an accurate quotation request.",
    },
    introduction: {
      es: "El precio de los paneles de techo PVC depende de múltiples factores que varían por pedido. Esta guía explica los factores que determinan el costo y ayuda a compradores B2B a preparar una solicitud de cotización que reciba una respuesta precisa.",
      en: "The price of PVC ceiling panels depends on multiple factors that vary per order. This guide explains the factors that determine cost and helps B2B buyers prepare a quotation request that receives an accurate response.",
    },
    readingTime: { es: "7 min de lectura", en: "7 min read" },
    cover: "/assets/pvc-ceiling.jpg",
    coverAlt: {
      es: "Paneles de techo PVC en producción para cotización B2B",
      en: "PVC ceiling panels in production for B2B quotation",
    },
    sections: [
      {
        id: "no-fixed-price",
        title: { es: "1. No existe un precio único publicado", en: "1. There is no single published price" },
        paragraphs: {
          es: ["SINOQI no publica un precio fijo por panel porque el costo depende de la configuración de cada pedido. Cualquier precio publicado en otros sitios sin contexto no refleja las condiciones reales de una orden B2B."],
          en: ["SINOQI does not publish a fixed per-panel price because cost depends on the configuration of each order. Any price published elsewhere without context does not reflect the real conditions of a B2B order."],
        },
      },
      {
        id: "price-factors",
        title: { es: "2. Factores que determinan el precio", en: "2. Factors that determine price" },
        paragraphs: {
          es: ["Los siguientes factores influyen directamente en el precio final por panel. Cuantos más factores defina el comprador, más precisa será la cotización."],
          en: ["The following factors directly influence the final price per panel. The more factors the buyer defines, the more accurate the quotation will be."],
        },
        bullets: {
          es: ["Ancho del panel: 25 cm y 30 cm son los anchos habituales confirmados", "Espesor: el espesor afecta al material y al peso de transporte", "Diseño y color: los diseños personalizados pueden tener coste de placa", "Acabado: impresión, estampado en caliente o laminado tienen costes distintos", "Cantidad: el MOQ confirmado es 100 piezas por modelo y color", "Embalaje: cartón o plástico retráctil, según la configuración aprobada", "Destino: el flete varía según país y puerto de destino"],
          en: ["Panel width: 25 cm and 30 cm are the confirmed regular widths", "Thickness: thickness affects material and transport weight", "Design and color: custom designs may have plate cost", "Finish: printing, hot stamping or lamination have different costs", "Quantity: confirmed MOQ is 100 pieces per design and color", "Packing: carton or shrink wrap, based on approved configuration", "Destination: freight varies by destination country and port"],
        },
      },
      {
        id: "finish-ranges",
        title: { es: "3. Rangos orientativos por tipo de acabado", en: "3. Indicative ranges by finish type" },
        paragraphs: {
          es: ["Los siguientes rangos son orientativos y no constituyen una oferta. El precio final se confirma en la cotización después de revisar la configuración del pedido."],
          en: ["The following ranges are indicative and do not constitute an offer. The final price is confirmed in the quotation after reviewing the order configuration."],
        },
        bullets: {
          es: ["Panel liso blanco (estándar): rango más bajo por pieza", "Panel impreso color (estándar de catálogo): rango medio-bajo", "Panel estampado en caliente (efecto madera/metal): rango medio", "Panel laminado de alta gama: rango más alto", "Diseño totalmente personalizado: requiere evaluación de coste de placa"],
          en: ["Plain white panel (standard): lowest range per piece", "Printed color panel (catalog standard): low-medium range", "Hot-stamped panel (wood/metal effect): medium range", "Premium laminated panel: highest range", "Fully custom design: requires plate cost evaluation"],
        },
      },
      {
        id: "container-cost",
        title: { es: "4. Coste por contenedor 40HQ", en: "4. Cost per 40HQ container" },
        paragraphs: {
          es: ["Muchos importadores calculan el coste por contenedor 40HQ en lugar de por pieza. La cantidad de paneles por contenedor depende del ancho, espesor y configuración de embalaje."],
          en: ["Many importers calculate cost per 40HQ container rather than per piece. The number of panels per container depends on width, thickness and packing configuration."],
        },
        bullets: {
          es: ["Un contenedor 40HQ puede mezclar diseños y colores", "La cantidad exacta se confirma con la configuración de embalaje", "El coste por m² puede reducirse con mayor volumen de pedido", "El flete internacional es un factor separado del precio del producto"],
          en: ["A 40HQ container can mix designs and colors", "Exact quantity is confirmed with the packing configuration", "Cost per m² may decrease with larger order volume", "International freight is a separate factor from product price"],
        },
      },
      {
        id: "quotation-request",
        title: { es: "5. Cómo solicitar una cotización precisa", en: "5. How to request an accurate quotation" },
        paragraphs: {
          es: ["Para recibir una cotización precisa en la primera respuesta, incluya toda la información posible. SINOQI tiene como objetivo responder en un día laborable."],
          en: ["To receive an accurate quotation in the first response, include as much information as possible. SINOQI aims to reply within one business day."],
        },
        bullets: {
          es: ["Ancho y espesor requeridos", "Color o referencia visual del diseño", "Tipo de acabado preferido", "Cantidad por modelo y color (MOQ: 100 piezas)", "Embalaje preferido", "País y puerto de destino", "Plan de compra inicial y de reposición (si aplica)"],
          en: ["Required width and thickness", "Color or visual design reference", "Preferred finish type", "Quantity per design and color (MOQ: 100 pieces)", "Preferred packing", "Destination country and port", "Initial and replenishment purchase plan (if applicable)"],
        },
      },
      {
        id: "sample-first",
        title: { es: "6. Por qué la muestra importa más que el precio", en: "6. Why the sample matters more than price" },
        paragraphs: {
          es: ["Antes de negociar el precio, confirme que el producto es correcto. La muestra gratuita permite verificar color, acabado y configuración antes de comprometer un pedido completo."],
          en: ["Before negotiating price, confirm the product is correct. The free sample allows verifying color, finish and configuration before committing to a full order."],
        },
        bullets: {
          es: ["SINOQI ofrece muestra gratuita a compradores con interés real", "El comprador asume el coste de mensajería de la muestra", "La muestra confirma el aspecto y la configuración antes del pedido", "Un pedido de contenedor sin muestra previa es un riesgo evitable"],
          en: ["SINOQI offers a free sample to buyers with a genuine requirement", "The buyer covers the sample courier cost", "The sample confirms appearance and configuration before the order", "A container order without a prior sample is an avoidable risk"],
        },
      },
    ],
  },
  {
    slug: "what-is-wpc-flooring",
    localizedSlug: { es: "que-es-suelo-wpc" },
    publishedAt: "2026-10-08",
    category: { es: "Guía de producto", en: "Product guide" },
    title: {
      es: "¿Qué es el suelo WPC? Definición y guía para compradores B2B",
      en: "What Is WPC Flooring? Definition and Guide for B2B Buyers",
    },
    seoTitle: {
      es: "¿Qué es el suelo WPC? Definición B2B | SINOQI",
      en: "What Is WPC Flooring? B2B Definition | SINOQI",
    },
    description: {
      es: "Definición clara de suelo WPC: composición, tipos, ventajas, limitaciones y datos que importadores y distribuidores deben confirmar antes de comprar.",
      en: "A clear definition of WPC flooring: composition, types, advantages, limitations and the details importers and distributors should confirm before purchasing.",
    },
    introduction: {
      es: "El suelo WPC es un material compuesto de madera y plástico usado en aplicaciones interiores. Esta guía separa la definición general del producto de las especificaciones que deben confirmarse para cada pedido.",
      en: "WPC flooring is a wood-plastic composite material used in interior applications. This guide separates the general product definition from the specifications that must be confirmed for each order.",
    },
    readingTime: { es: "7 min de lectura", en: "7 min read" },
    cover: "/assets/wpc-production.jpg",
    coverAlt: {
      es: "Línea de producción de suelo WPC en la fábrica SINOQI",
      en: "WPC flooring production line at the SINOQI factory",
    },
    sections: [
      {
        id: "definition",
        title: { es: "1. Definición: ¿qué es el suelo WPC?", en: "1. Definition: what is WPC flooring?" },
        paragraphs: {
          es: ["El suelo WPC (wood-plastic composite) es un material fabricado combinando fibra de madera con plástico, generalmente PVC o polietileno. El resultado es un producto más rígido que el vinilo tradicional y con mejor resistencia al agua que el laminado convencional.", "A diferencia del SPC, que contiene polvo de mineral en lugar de fibra de madera, el WPC mantiene un núcleo con contenido celulósico que le da un tacto más natural y reduce el peso por metro cuadrado."],
          en: ["WPC flooring (wood-plastic composite) is a material made by combining wood fiber with plastic, typically PVC or polyethylene. The result is a product that is more rigid than traditional vinyl and has better water resistance than conventional laminate.", "Unlike SPC, which contains stone powder instead of wood fiber, WPC retains a core with cellulosic content that gives it a more natural feel and reduces the weight per square meter."],
        },
      },
      {
        id: "composition",
        title: { es: "2. Composición y fabricación", en: "2. Composition and manufacturing" },
        paragraphs: {
          es: ["El suelo WPC se produce extruyendo una mezcla de fibra de madera y plástico con aditivos para estabilidad, resistencia UV y ignifugación. La proporción de fibra de madera varía entre 30% y 60% según el perfil y el fabricante.", "La capa de desgaste superficial protege el diseño impreso y determina la clasificación de durabilidad AC. El sistema de clic permite una instalación sin cola sobre la mayoría de los sustratos."],
          en: ["WPC flooring is produced by extruding a blend of wood fiber and plastic with additives for stability, UV resistance and fire retardation. The wood fiber ratio ranges from 30% to 60% depending on the profile and manufacturer.", "The surface wear layer protects the printed design and determines the AC durability rating. The click-lock system allows glueless installation over most substrates."],
        },
        bullets: {
          es: ["Fibra de madera: 30-60% del contenido del núcleo", "Plástico: PVC o polietileno (PE)", "Aditivos: estabilizantes UV, retardantes de llama, pigmentos", "Capa de desgaste: 0.3 mm a 0.5 mm según clasificación AC", "Sistema de instalación: clic sin cola"],
          en: ["Wood fiber: 30-60% of core content", "Plastic: PVC or polyethylene (PE)", "Additives: UV stabilizers, fire retardants, pigments", "Wear layer: 0.3 mm to 0.5 mm depending on AC rating", "Installation system: glueless click-lock"],
        },
      },
      {
        id: "wpc-vs-spc-vs-lvt",
        title: { es: "3. WPC vs SPC vs LVT: diferencias clave", en: "3. WPC vs SPC vs LVT: key differences" },
        paragraphs: {
          es: ["WPC, SPC y LVT son tres categorías de suelo rígido que se confunden con frecuencia. La diferencia principal está en el material del núcleo:", "El WPC tiene núcleo de madera-plástico, el SPC tiene núcleo de piedra-plástico, y el LVT es vinilo flexible sin núcleo rígido. Esta diferencia afecta peso, rigidez, aislamiento acústico y precio."],
          en: ["WPC, SPC and LVT are three rigid flooring categories that are frequently confused. The main difference is in the core material:", "WPC has a wood-plastic core, SPC has a stone-plastic core, and LVT is flexible vinyl without a rigid core. This difference affects weight, rigidity, acoustic insulation and price."],
        },
        bullets: {
          es: ["WPC: núcleo de madera-plástico → más ligero, mejor aislamiento acústico", "SPC: núcleo de piedra-plástico → más rígido, más denso, mejor para tráfico alto", "LVT: vinilo flexible → sin núcleo rígido, requiere subpiso más plano", "WPC y SPC usan sistema de clic; LVT puede ser clic o pegado"],
          en: ["WPC: wood-plastic core → lighter, better acoustic insulation", "SPC: stone-plastic core → more rigid, denser, better for high traffic", "LVT: flexible vinyl → no rigid core, requires flatter subfloor", "WPC and SPC use click-lock; LVT can be click or glue-down"],
        },
      },
      {
        id: "advantages",
        title: { es: "4. Ventajas confirmadas", en: "4. Confirmed advantages" },
        paragraphs: {
          es: ["El suelo WPC ofrece un conjunto de ventajas prácticas para compradores B2B que abastecen mercados residenciales y comerciales de tráfico medio."],
          en: ["WPC flooring offers a set of practical advantages for B2B buyers supplying residential and medium-traffic commercial markets."],
        },
        bullets: {
          es: ["Resistente al agua: adecuado para cocinas, baños y sótanos", "Instalación sin cola: sistema de clic flotante sobre subpiso existente", "Aislamiento acústico: el núcleo de madera reduce el ruido de impacto", "Tacto más cálido que el SPC por el contenido celulósico", "Desmontable: las placas se pueden reemplazar individualmente"],
          en: ["Water-resistant: suitable for kitchens, bathrooms and basements", "Glueless installation: floating click-lock over existing subfloor", "Acoustic insulation: wood core reduces impact noise", "Warmer feel than SPC due to cellulosic content", "Removable: individual planks can be replaced"],
        },
      },
      {
        id: "limitations",
        title: { es: "5. Limitaciones a confirmar", en: "5. Limitations to confirm" },
        paragraphs: {
          es: ["El suelo WPC tiene limitaciones que deben comunicarse claramente al comprador final para evitar expectativas incorrectas."],
          en: ["WPC flooring has limitations that should be clearly communicated to the end buyer to prevent incorrect expectations."],
        },
        bullets: {
          es: ["Uso interior: no diseñado para aplicación exterior", "Tráfico: clasificación AC3-AC4; no recomendado para comercial de alto tráfico", "Subpiso: requiere superficie razonablemente plana (tolerancia 3 mm en 2 m)", "Exposición solar: verificar resistencia UV según mercado de destino", "Temperatura: evitar instalación en zonas con variaciones extremas"],
          en: ["Indoor use: not designed for exterior application", "Traffic: AC3-AC4 rating; not recommended for high-traffic commercial", "Subfloor: requires reasonably flat surface (3 mm tolerance over 2 m)", "Sun exposure: verify UV resistance for target market", "Temperature: avoid installation in areas with extreme variations"],
        },
      },
      {
        id: "buying-checklist",
        title: { es: "6. Lista de compra para importadores", en: "6. Buying checklist for importers" },
        paragraphs: {
          es: ["Antes de solicitar una cotización de suelo WPC, confirme los siguientes puntos para que la respuesta comercial sea concreta y llegue dentro de un día laborable."],
          en: ["Before requesting a WPC flooring quotation, confirm the following points so the commercial response can be specific and arrive within one business day."],
        },
        bullets: {
          es: ["Grosor del núcleo y capa de desgaste (AC3 o AC4)", "Color o referencia visual del diseño", "Sistema de clic requerido (UNILIN o VALINGE)", "Cantidad por diseño y color (MOQ: 100 piezas)", "Embalaje preferido (caja o palet)", "País y puerto de destino", "Solicitud de muestra gratuita"],
          en: ["Core thickness and wear layer (AC3 or AC4)", "Color or visual design reference", "Click system required (UNILIN or VALINGE)", "Quantity per design and color (MOQ: 100 pieces)", "Preferred packing (box or pallet)", "Destination country and port", "Free sample request"],
        },
      },
    ],
  },
  {
    slug: "what-is-pvc-wall-panel",
    localizedSlug: { es: "que-es-panel-de-pared-pvc" },
    publishedAt: "2026-10-08",
    category: { es: "Guía de producto", en: "Product guide" },
    title: {
      es: "¿Qué es un panel de pared PVC? Definición y guía para compradores B2B",
      en: "What Is a PVC Wall Panel? Definition and Guide for B2B Buyers",
    },
    seoTitle: {
      es: "¿Qué es un panel de pared PVC? Definición B2B | SINOQI",
      en: "What Is a PVC Wall Panel? B2B Definition | SINOQI",
    },
    description: {
      es: "Definición clara de panel de pared PVC: composición, usos, ventajas, limitaciones y datos que importadores y distribuidores deben confirmar antes de comprar.",
      en: "A clear definition of PVC wall panel: composition, uses, advantages, limitations and the details importers and distributors should confirm before purchasing.",
    },
    introduction: {
      es: "El panel de pared PVC es un material de revestimiento interior extruido de cloruro de polivinilo. Esta guía separa la definición general del producto de las especificaciones que deben confirmarse para cada pedido.",
      en: "A PVC wall panel is an interior cladding material extruded from polyvinyl chloride. This guide separates the general product definition from the specifications that must be confirmed for each order.",
    },
    readingTime: { es: "7 min de lectura", en: "7 min read" },
    cover: "/assets/pvc-ceiling.jpg",
    coverAlt: {
      es: "Paneles de pared PVC en producción en la fábrica SINOQI",
      en: "PVC wall panels in production at the SINOQI factory",
    },
    sections: [
      {
        id: "definition",
        title: { es: "1. Definición: ¿qué es un panel de pared PVC?", en: "1. Definition: what is a PVC wall panel?" },
        paragraphs: {
          es: ["Un panel de pared PVC es una lámina extruida de cloruro de polivinilo diseñada para revestir paredes interiores. A diferencia del panel de techo PVC —que se instala en el cielo raso—, el panel de pared se aplica verticalmente sobre superficies murales.", "El material se fija mediante adhesivo, tornillos o rieles de montaje, y las juntas se sellan con perfiles de acabado. El resultado es una superficie lisa, impermeable y fácil de limpiar que reemplaza azulejos y pintura en cocinas, baños y zonas comerciales."],
          en: ["A PVC wall panel is an extruded sheet of polyvinyl chloride designed to cover interior walls. Unlike the PVC ceiling panel —which is installed overhead—, the wall panel is applied vertically on wall surfaces.", "The material is fastened with adhesive, screws or mounting tracks, and joints are finished with trim profiles. The result is a smooth, waterproof, easy-to-clean surface that replaces tiles and paint in kitchens, bathrooms and commercial areas."],
        },
      },
      {
        id: "pvc-wall-vs-pvc-ceiling",
        title: { es: "2. Panel de pared PVC vs panel de techo PVC", en: "2. PVC wall panel vs PVC ceiling panel" },
        paragraphs: {
          es: ["Aunque ambos productos se fabrican con el mismo compuesto de PVC rígido, existen diferencias funcionales que afectan la instalación y el rendimiento:", "El panel de techo se instala horizontalmente con sistema de ranura y lengüeta que oculta los tornillos. El panel de pared se instala verticalmente y puede usar adhesivo o rieles, dependiendo del perfil y del grosor."],
          en: ["Although both products are made from the same rigid PVC compound, there are functional differences that affect installation and performance:", "The ceiling panel is installed horizontally with a tongue-and-groove system that conceals fasteners. The wall panel is installed vertically and may use adhesive or mounting tracks, depending on the profile and thickness."],
        },
        bullets: {
          es: ["Orientación: techo = horizontal; pared = vertical", "Instalación: techo = tornillos ocultos; pared = adhesivo o rieles", "Grosor: el panel de pared suele ser más grueso para mayor rigidez", "Accesorios: ambos usan perfiles de borde y esquina, pero con dimensiones distintas"],
          en: ["Orientation: ceiling = horizontal; wall = vertical", "Installation: ceiling = concealed screws; wall = adhesive or tracks", "Thickness: wall panel is typically thicker for greater rigidity", "Accessories: both use edge and corner profiles, but with different dimensions"],
        },
      },
      {
        id: "composition",
        title: { es: "3. Composición y fabricación", en: "3. Composition and manufacturing" },
        paragraphs: {
          es: ["El panel de pared PVC se produce por extrusión a partir de compuesto de PVC con aditivos que proporcionan estabilidad UV, resistencia al impacto y retardancia de llama. El acabado superficial puede ser liso, impreso, laminado o con textura.", "Los paneles de pared de mayor grosor (hasta 10 mm) se usan en aplicaciones comerciales donde la durabilidad y la resistencia al impacto son prioritarias."],
          en: ["PVC wall panels are produced by extrusion from a PVC compound with additives that provide UV stability, impact resistance and fire retardation. The surface finish can be smooth, printed, laminated or textured.", "Thicker wall panels (up to 10 mm) are used in commercial applications where durability and impact resistance are prioritized."],
        },
        bullets: {
          es: ["Compuesto base: PVC rígido con aditivos estabilizadores", "Proceso: extrusión continua en perfiles planos", "Acabados: impresión, laminado, textura mate o brillante", "Grosor habitual: 5 mm a 10 mm", "Anchos: 20 cm a 60 cm según modelo"],
          en: ["Base compound: rigid PVC with stabilizing additives", "Process: continuous extrusion into flat profiles", "Finishes: printing, lamination, matte or glossy texture", "Standard thickness: 5 mm to 10 mm", "Widths: 20 cm to 60 cm depending on model"],
        },
      },
      {
        id: "advantages",
        title: { es: "4. Ventajas confirmadas", en: "4. Confirmed advantages" },
        paragraphs: {
          es: ["El panel de pared PVC ofrece ventajas prácticas para compradores B2B que abastecen proyectos residenciales y comerciales."],
          en: ["PVC wall panels offer practical advantages for B2B buyers supplying residential and commercial projects."],
        },
        bullets: {
          es: ["Impermeable: no absorbe agua; no desarrolla moho", "Instalación rápida: se instala sobre azulejos existentes sin demolición", "Higiénico: superficie no porosa apta para cocinas y baños", "Ligero: reduce coste de transporte y carga estructural", "Personalizable: color, diseño y acabado por pedido"],
          en: ["Waterproof: does not absorb water; does not develop mold", "Fast installation: can be installed over existing tiles without demolition", "Hygienic: non-porous surface suitable for kitchens and bathrooms", "Lightweight: reduces shipping cost and structural load", "Customizable: color, design and finish per order"],
        },
      },
      {
        id: "limitations",
        title: { es: "5. Limitaciones a confirmar", en: "5. Limitations to confirm" },
        paragraphs: {
          es: ["El panel de pared PVC tiene limitaciones que deben comunicarse al comprador final para evitar expectativas incorrectas."],
          en: ["PVC wall panels have limitations that should be communicated to the end buyer to prevent incorrect expectations."],
        },
        bullets: {
          es: ["Uso interior: no diseñado para aplicación exterior", "Resistencia al impacto: verificar grosor adecuado para el tráfico esperado", "Adhesivo: confirmar compatibilidad del adhesivo con el sustrato", "Temperatura: evitar zonas con exposición a calor extremo directo", "Superficie del sustrato: requiere pared razonablemente plana"],
          en: ["Indoor use: not designed for exterior application", "Impact resistance: verify adequate thickness for expected traffic", "Adhesive: confirm adhesive compatibility with the substrate", "Temperature: avoid areas with direct extreme heat exposure", "Substrate surface: requires reasonably flat wall"],
        },
      },
      {
        id: "buying-checklist",
        title: { es: "6. Lista de compra para importadores", en: "6. Buying checklist for importers" },
        paragraphs: {
          es: ["Antes de solicitar una cotización de paneles de pared PVC, confirme los siguientes puntos para que la respuesta comercial sea concreta."],
          en: ["Before requesting a PVC wall panel quotation, confirm the following points so the commercial response can be specific."],
        },
        bullets: {
          es: ["Grosor requerido (5 mm, 8 mm o 10 mm)", "Ancho y longitud por panel", "Color o referencia visual del diseño", "Tipo de acabado (mate, brillante, texturizado)", "Cantidad por modelo y color (MOQ: 100 piezas)", "Método de instalación preferido (adhesivo o rieles)", "País y puerto de destino", "Solicitud de muestra gratuita"],
          en: ["Required thickness (5 mm, 8 mm or 10 mm)", "Width and length per panel", "Color or visual design reference", "Finish type (matte, glossy, textured)", "Quantity per design and color (MOQ: 100 pieces)", "Preferred installation method (adhesive or tracks)", "Destination country and port", "Free sample request"],
        },
      },
    ],
  },
  {
    slug: "what-is-laminate-flooring",
    localizedSlug: { es: "que-es-suelo-laminado" },
    publishedAt: "2026-10-10",
    category: { es: "Guía de producto", en: "Product guide" },
    title: {
      es: "¿Qué es el suelo laminado? Definición y guía para compradores B2B",
      en: "What Is Laminate Flooring? Definition and Guide for B2B Buyers",
    },
    seoTitle: {
      es: "¿Qué es el suelo laminado? Definición B2B | SINOQI",
      en: "What Is Laminate Flooring? B2B Definition | SINOQI",
    },
    description: {
      es: "Definición técnica del suelo laminado: composición, diferencias con SPC y WPC, ventajas, limitaciones y lista de compra para importadores.",
      en: "Technical definition of laminate flooring: composition, differences vs SPC and WPC, advantages, limitations and buying checklist for importers.",
    },
    introduction: {
      es: "El suelo laminado es un producto multicapa con núcleo de HDF. Esta guía explica composición, diferencias con SPC y WPC, ventajas y limitaciones para compradores B2B.",
      en: "Laminate flooring is a multi-layer product with an HDF core. This guide covers composition, differences vs SPC and WPC, advantages and limitations for B2B buyers.",
    },
    readingTime: { es: "7 min de lectura", en: "7 min read" },
    cover: "/assets/spc-flooring.jpg",
    coverAlt: {
      es: "Línea de producción de suelo laminado en la fábrica SINOQI",
      en: "Laminate flooring production line at the SINOQI factory",
    },
    sections: [
      {
        id: "definition",
        title: { es: "1. Definición: ¿qué es el suelo laminado?", en: "1. Definition: what is laminate flooring?" },
        paragraphs: {
          es: ["El suelo laminado es un material multicapa fabricado a partir de tablero de fibra de madera de alta densidad (HDF) recubierto con una capa decorativa impresa y una capa protectora transparente (overlay). A diferencia del WPC o el SPC, que usan plástico como material base, el laminado utiliza madera real procesada como núcleo estructural.", "El resultado es un producto rígido con apariencia visual idéntica a la madera natural, pero con mayor resistencia al rayado y un coste de producción más bajo."],
          en: ["Laminate flooring is a multi-layer product made from high-density fiberboard (HDF) covered with a printed decorative layer and a transparent protective overlay. Unlike WPC or SPC, which use plastic as the base material, laminate uses processed real wood as the structural core.", "The result is a rigid product with a visual appearance identical to natural wood, but with higher scratch resistance and lower production cost."],
        },
      },
      {
        id: "composition",
        title: { es: "2. Composición y fabricación", en: "2. Composition and manufacturing" },
        paragraphs: {
          es: ["El suelo laminado se fabrica prensando fibras de madera con resina a alta temperatura y presión para formar el tablero HDF. Sobre este núcleo se imprime un diseño decorativo que puede imitar madera, piedra o cerámica. Finalmente se aplica una capa de desgaste transparente que determina la clasificación AC de durabilidad.", "El sistema de clic permite una instalación flotante sin cola. Las juntas tratadas con cera o sellador proporcionan cierta resistencia a la humedad en los bordes."],
          en: ["Laminate flooring is manufactured by pressing wood fibers with resin at high temperature and pressure to form the HDF board. On top of this core, a decorative design is printed that can mimic wood, stone or ceramic. Finally, a transparent wear layer is applied that determines the AC durability rating.", "The click-lock system allows glueless floating installation. Joints treated with wax or sealant provide some moisture resistance at the edges."],
        },
        bullets: {
          es: ["Núcleo: tablero HDF (alta densidad, 800-900 kg/m³)", "Capa decorativa: película impresa con diseño de madera, piedra o cerámica", "Capa de desgaste: overlay transparente (0.2 mm a 0.6 mm según clasificación AC)", "Contracara: capa de equilibrio para evitar deformación", "Sistema de instalación: clic sin cola"],
          en: ["Core: HDF board (high density, 800-900 kg/m³)", "Decorative layer: printed film with wood, stone or ceramic design", "Wear layer: transparent overlay (0.2 mm to 0.6 mm depending on AC rating)", "Backing: balancing layer to prevent warping", "Installation system: glueless click-lock"],
        },
      },
      {
        id: "laminate-vs-spc-vs-wpc",
        title: { es: "3. Laminate vs SPC vs WPC: diferencias clave", en: "3. Laminate vs SPC vs WPC: key differences" },
        paragraphs: {
          es: ["Laminate, SPC y WPC son tres categorías de suelo rígido que compiten en los mismos mercados. La diferencia principal está en el material del núcleo y la resistencia al agua:", "El laminado tiene núcleo de madera HDF, el SPC tiene núcleo de piedra-plástico, y el WPC tiene núcleo de madera-plástico. Solo el SPC y el WPC son totalmente impermeables; el laminado resistente al agua solo lo es en la superficie, no en el núcleo."],
          en: ["Laminate, SPC and WPC are three rigid flooring categories that compete in the same markets. The main difference is in the core material and water resistance:", "Laminate has an HDF wood core, SPC has a stone-plastic core, and WPC has a wood-plastic core. Only SPC and WPC are fully waterproof; water-resistant laminate is only waterproof on the surface, not in the core."],
        },
        bullets: {
          es: ["Laminate: núcleo HDF → mejor simulación visual de madera natural, menor precio, NO totalmente impermeable", "SPC: núcleo de piedra-plástico → totalmente impermeable, más rígido, mayor densidad", "WPC: núcleo de madera-plástico → totalmente impermeable, más ligero, mejor aislamiento acústico", "Laminate: clasificación AC3-AC5 → de residencial a comercial de alto tráfico", "SPC/WPC: más adecuados para zonas húmedas como baños y cocinas"],
          en: ["Laminate: HDF core → best visual simulation of natural wood, lower price, NOT fully waterproof", "SPC: stone-plastic core → fully waterproof, more rigid, higher density", "WPC: wood-plastic core → fully waterproof, lighter, better acoustic insulation", "Laminate: AC3-AC5 rating → from residential to high-traffic commercial", "SPC/WPC: better suited for wet areas like bathrooms and kitchens"],
        },
      },
      {
        id: "advantages",
        title: { es: "4. Ventajas confirmadas", en: "4. Confirmed advantages" },
        paragraphs: {
          es: ["El suelo laminado ofrece ventajas competitivas para compradores B2B que abastecen mercados donde la apariencia visual de madera natural y el precio son factores de decisión."],
          en: ["Laminate flooring offers competitive advantages for B2B buyers supplying markets where the natural wood visual appearance and price are decision factors."],
        },
        bullets: {
          es: ["Mejor relación precio-estética: el laminado AC3 con diseño de roble es más económico que el SPC equivalente", "Resistencia al rayado: clasificación AC4-AC5 superior a la del SPC/WPC para el mismo grosor", "Simulación visual: imitación de madera natural indistinguible a 1 metro de distancia", "Instalación sin cola: sistema de clic flotante sobre subpiso existente", "Hipoalergénico: no retiene polvo ni ácaros; superficie fácil de limpiar"],
          en: ["Better price-to-aesthetics ratio: AC3 laminate with oak design is cheaper than equivalent SPC", "Scratch resistance: AC4-AC5 rating higher than SPC/WPC for the same thickness", "Visual simulation: natural wood imitation indistinguishable at 1 meter distance", "Glueless installation: floating click-lock over existing subfloor", "Hypoallergenic: does not retain dust or mites; easy-to-clean surface"],
        },
      },
      {
        id: "limitations",
        title: { es: "5. Limitaciones a confirmar", en: "5. Limitations to confirm" },
        paragraphs: {
          es: ["El suelo laminado tiene limitaciones que deben comunicarse claramente al comprador final, especialmente en relación con la resistencia al agua."],
          en: ["Laminate flooring has limitations that should be clearly communicated to the end buyer, especially regarding water resistance."],
        },
        bullets: {
          es: ["No totalmente impermeable: el núcleo HDF absorbe agua si los sellos fallan; no recomendado para baños o lavanderías", "Reacción al agua: la exposición prolongada provoca hinchamiento irreversible en las juntas", "Reemplazo: si una placa se daña por agua, debe reemplazarse; no se puede reparar", "Subpiso: requiere superficie plana y membrana de vapor si se instala sobre concreto", "Sonido: sin subcapa acústica, el laminado produce eco metálico al caminar"],
          en: ["Not fully waterproof: HDF core absorbs water if seals fail; not recommended for bathrooms or laundry rooms", "Water reaction: prolonged exposure causes irreversible swelling at the joints", "Replacement: if a plank is water-damaged, it must be replaced; cannot be repaired", "Subfloor: requires flat surface and vapor membrane if installed over concrete", "Sound: without acoustic underlayment, laminate produces a metallic echo when walked on"],
        },
      },
      {
        id: "buying-checklist",
        title: { es: "6. Lista de compra para importadores", en: "6. Buying checklist for importers" },
        paragraphs: {
          es: ["Antes de solicitar una cotización de suelo laminado, confirme los siguientes puntos para que la respuesta comercial sea concreta y llegue dentro de un día laborable."],
          en: ["Before requesting a laminate flooring quotation, confirm the following points so the commercial response can be specific and arrive within one business day."],
        },
        bullets: {
          es: ["Grosor total (8 mm, 10 mm o 12 mm)", "Clasificación AC requerida (AC3 residencial, AC4 comercial, AC5 alto tráfico)", "Color o referencia visual del diseño (roble, nogal, gris...)", "Tipo de superficie (mate, brillante, texturizado, madera registrada)", "Sistema de clic requerido (UNILIN o VALINGE)", "Cantidad por diseño y color (MOQ: 100 piezas)", "Tratamiento de juntas resistente al agua: sí o no", "País y puerto de destino", "Solicitud de muestra gratuita"],
          en: ["Total thickness (8 mm, 10 mm or 12 mm)", "AC rating required (AC3 residential, AC4 commercial, AC5 high traffic)", "Color or visual design reference (oak, walnut, grey...)", "Surface type (matte, glossy, textured, registered embossment)", "Click system required (UNILIN or VALINGE)", "Quantity per design and color (MOQ: 100 pieces)", "Water-resistant joint treatment: yes or no", "Destination country and port", "Free sample request"],
        },
      },
    ],
  },
  {
    slug: "pvc-vs-gypsum-ceiling",
    localizedSlug: { es: "pvc-vs-cielo-raso-yeso" },
    publishedAt: "2026-10-12",
    category: { es: "Comparación de productos", en: "Product comparison" },
    title: {
      es: "PVC vs cielo raso de yeso: comparación para compradores B2B",
      en: "PVC vs Gypsum Ceiling: A B2B Buyer's Comparison",
    },
    seoTitle: {
      es: "PVC vs yeso: comparación de cielos rasos B2B | SINOQI",
      en: "PVC vs Gypsum Ceiling Comparison for B2B | SINOQI",
    },
    description: {
      es: "Comparación técnica entre paneles de techo PVC y cielo raso de yeso: peso, instalación, resistencia al agua, coste, mantenimiento y cuándo elegir cada uno.",
      en: "Technical comparison between PVC ceiling panels and gypsum ceilings: weight, installation, water resistance, cost, maintenance and when to choose each.",
    },
    introduction: {
      es: "Los paneles de techo PVC y los cielos rasos de yeso compiten en los mismos proyectos. Esta guía compara los dos materiales en factores que importan a importadores y contratistas B2B.",
      en: "PVC ceiling panels and gypsum ceilings compete in the same projects. This guide compares the two materials on factors that matter to B2B importers and contractors.",
    },
    readingTime: { es: "8 min de lectura", en: "8 min read" },
    cover: "/assets/pvc-ceiling.jpg",
    coverAlt: {
      es: "Paneles de techo PVC instalados en proyecto residencial",
      en: "PVC ceiling panels installed in a residential project",
    },
    sections: [
      {
        id: "material-overview",
        title: { es: "1. Descripción general de materiales", en: "1. Material overview" },
        paragraphs: {
          es: ["El PVC (policloruro de vinilo) es un termoplástico ligero, impermeable y fabricado en paneles extruidos con sistema de machihembrado. Se instala atornillado o con adhesivo sobre rieles o directamente sobre el sustrato.", "El yeso (placa de yeso o gypsum board) es un material a base de sulfato de calcio prensado entre dos capas de papel. Reiere estructura metálica de soporte, enmasillado de juntas, lijado y pintura final para completar la instalación."],
          en: ["PVC (polyvinyl chloride) is a lightweight, waterproof thermoplastic manufactured in extruded panels with a tongue-and-groove system. It is installed by screwing or adhesive onto tracks or directly onto the substrate.", "Gypsum (gypsum board or drywall) is a calcium sulfate-based material pressed between two layers of paper. It requires a metal support frame, joint compound, sanding and final paint to complete the installation."],
        },
      },
      {
        id: "weight-and-structure",
        title: { es: "2. Peso y estructura", en: "2. Weight and structure" },
        paragraphs: {
          es: ["La diferencia de peso es una de las más significativas para proyectos B2B con restricciones logísticas o estructurales."],
          en: ["The weight difference is one of the most significant factors for B2B projects with logistical or structural constraints."],
        },
        bullets: {
          es: ["PVC: 1.5-3.0 kg/m² según grosor (5-10 mm)", "Yeso: 6-9 kg/m² según grosor (9.5-12.5 mm)", "El PVC pesa hasta 4 veces menos por metro cuadrado", "El yeso requiere estructura metálica adicional (perfilería + canales)", "El PVC puede instalarse sobre estructura ligera de madera o rieles PVC"],
          en: ["PVC: 1.5-3.0 kg/m² depending on thickness (5-10 mm)", "Gypsum: 6-9 kg/m² depending on thickness (9.5-12.5 mm)", "PVC weighs up to 4 times less per square meter", "Gypsum requires additional metal framing (profiles + channels)", "PVC can be installed on lightweight wood framing or PVC tracks"],
        },
      },
      {
        id: "water-resistance",
        title: { es: "3. Resistencia al agua", en: "3. Water resistance" },
        paragraphs: {
          es: ["La resistencia al agua es donde el PVC tiene una ventaja decisiva sobre el yeso, especialmente en proyectos con humedad ambiental o riesgo de filtraciones."],
          en: ["Water resistance is where PVC has a decisive advantage over gypsum, especially in projects with ambient humidity or leak risk."],
        },
        bullets: {
          es: ["PVC: totalmente impermeable — no absorbe agua, no se deforma, no desarrolla moho", "Yeso: absorbe agua — se ablanda, se deforma y pierde integridad estructural", "PVC: apto para baños, cocinas, sótanos y zonas húmedas", "Yeso: requiere tratamientos especiales (placa verde) para áreas húmedas, con garantía limitada", "PVC: no necesita pintura protectora; el yeso sí"],
          en: ["PVC: fully waterproof — does not absorb water, does not warp, does not develop mold", "Gypsum: absorbs water — softens, warps and loses structural integrity", "PVC: suitable for bathrooms, kitchens, basements and humid zones", "Gypsum: requires special treatments (green board) for wet areas, with limited warranty", "PVC: no protective paint needed; gypsum does"],
        },
      },
      {
        id: "installation-time",
        title: { es: "4. Tiempo de instalación", en: "4. Installation time" },
        paragraphs: {
          es: ["El tiempo de instalación afecta directamente el coste laboral y la fecha de entrega del proyecto. El PVC se instala significativamente más rápido porque requiere menos pasos."],
          en: ["Installation time directly affects labor cost and project delivery date. PVC installs significantly faster because it requires fewer steps."],
        },
        bullets: {
          es: ["PVC: 3 pasos — instalar rieles → encajar paneles → sellar juntas (opcional)", "Yeso: 6 pasos — instalar estructura → atornillar placas → enmasillar juntas → lijar → imprimar → pintar", "PVC: una persona puede cubrir 40-60 m² por día", "Yeso: un equipo de 2-3 personas cubre 30-50 m² por día", "PVC: no requiere tiempo de secado; el yeso necesita 24-48h de secado entre capas"],
          en: ["PVC: 3 steps — install tracks → clip panels → seal joints (optional)", "Gypsum: 6 steps — install frame → screw boards → compound joints → sand → prime → paint", "PVC: one person can cover 40-60 m² per day", "Gypsum: a 2-3 person team covers 30-50 m² per day", "PVC: no drying time needed; gypsum requires 24-48h drying between coats"],
        },
      },
      {
        id: "cost-comparison",
        title: { es: "5. Comparación de coste", en: "5. Cost comparison" },
        paragraphs: {
          es: ["El coste total instalado incluye material, estructura, mano de obra y acabado. Aunque el yeso puede tener un precio de material más bajo, el coste total instalado puede ser similar o mayor que el PVC."],
          en: ["Total installed cost includes material, framing, labor and finishing. While gypsum may have a lower material price, total installed cost can be similar to or higher than PVC."],
        },
        bullets: {
          es: ["Material PVC: 2-5 USD/m² (según grosor y diseño)", "Material yeso: 1.5-3.5 USD/m² (placa estándar)", "Estructura PVC: rieles ligeros — incluidos o de bajo coste", "Estructura yeso: perfilería metálica completa — coste adicional significativo", "Acabado PVC: canto perimetral o perfil de unión — minimal", "Acabado yeso: masilla, lija, imprimación, pintura — coste mayor", "Mano de obra PVC: 1 persona, menos horas", "Mano de obra yeso: 2-3 personas, más horas, oficios múltiples"],
          en: ["PVC material: 2-5 USD/m² (depending on thickness and design)", "Gypsum material: 1.5-3.5 USD/m² (standard board)", "PVC framing: lightweight tracks — included or low cost", "Gypsum framing: complete metal stud system — significant additional cost", "PVC finishing: perimeter bead or joining profile — minimal", "Gypsum finishing: compound, sandpaper, primer, paint — higher cost", "PVC labor: 1 person, fewer hours", "Gypsum labor: 2-3 people, more hours, multiple trades"],
        },
      },
      {
        id: "when-to-choose",
        title: { es: "6. Cuándo elegir cada material", en: "6. When to choose each material" },
        paragraphs: {
          es: ["La elección entre PVC y yeso depende del tipo de proyecto, el entorno y las prioridades del comprador. Esta tabla de decisión resume los escenarios típicos:"],
          en: ["The choice between PVC and gypsum depends on project type, environment and buyer priorities. This decision table summarizes typical scenarios:"],
        },
        bullets: {
          es: ["Elige PVC si: el proyecto está en zona húmeda (baños, cocinas, lavanderías)", "Elige PVC si: el peso estructural es una limitación (reformascubiertas existentes, techos ligeros)", "Elige PVC si: el tiempo de instalación es crítico (entregas urgentes)", "Elige PVC si: el comprador quiere un mantenimiento mínimo (sin repintado)", "Elige yeso si: el proyecto requiere pintura personalizada o acabado mate plano", "Elige yeso si: se necesita aislamiento acústico superior (el yeso tiene mayor masa)", "Elige yeso si: la normativa local exige materiales con clasificación de fuego específica certificada"],
          en: ["Choose PVC if: project is in a humid area (bathrooms, kitchens, laundry rooms)", "Choose PVC if: structural weight is a constraint (retrofits, lightweight ceilings)", "Choose PVC if: installation time is critical (urgent deliveries)", "Choose PVC if: buyer wants minimal maintenance (no repainting)", "Choose gypsum if: project requires custom paint or flat matte finish", "Choose gypsum if: superior acoustic insulation is needed (gypsum has more mass)", "Choose gypsum if: local regulations require certified fire-rated assemblies"],
        },
      },
    ],
  },
  {
    slug: "uv-marble-vs-real-marble",
    localizedSlug: { es: "uv-marble-vs-marmol-real" },
    publishedAt: "2026-10-14",
    category: { es: "Comparación de productos", en: "Product comparison" },
    title: {
      es: "Mármol UV vs mármol real: comparación para compradores B2B",
      en: "UV Marble vs Real Marble: Comparison Guide for B2B Buyers",
    },
    description: {
      es: "Comparación técnica entre planchas de mármol UV y mármol natural: peso, impermeabilidad, instalación, coste y cuándo elegir cada material.",
      en: "Technical comparison between UV marble sheets and natural marble: weight, water resistance, installation, cost and when to choose each material.",
    },
    introduction: {
      es: "El mármol UV y el mármol natural sirven al mismo mercado de acabados de pared, pero difieren radicalmente en composición, manejo y coste total. Esta guía compara ambos materiales en cinco factores clave para ayudar a importadores y distribuidores a decidir.",
      en: "UV marble and natural marble serve the same wall cladding market, but differ radically in composition, handling and total cost. This guide compares both materials across five key factors to help importers and distributors decide.",
    },
    readingTime: { es: "6 min", en: "6 min" },
    cover: "/assets/uv-marble-sheet-stack.jpg",
    coverAlt: {
      es: "Planchas de mármol UV apiladas en la fábrica SINOQI",
      en: "UV marble sheets stacked at the SINOQI factory",
    },
    sections: [
      {
        id: "material-overview",
        title: { es: "1. Descripción del material", en: "1. Material overview" },
        paragraphs: {
          es: ["El mármol UV es una plancha compuesta con una capa superficial impresa con tecnología UV que imita el veteado del mármol natural. El sustrato es PVC o panel compuesto, recubierto con una película de alta definición y un barniz UV protector.", "El mármol natural se extrae en bloques de cantera, se corta en losas de 1-3 cm de grosor y se pule en superficie. Cada losa tiene un veteado único e irrepetible."],
          en: ["UV marble is a composite sheet with a UV-printed surface layer that replicates natural marble veining. The substrate is PVC or composite panel, coated with a high-definition film and a protective UV varnish.", "Natural marble is quarried in blocks, cut into slabs of 1-3 cm thickness and surface-polished. Each slab has unique, unrepeatable veining."],
        },
        bullets: {
          es: ["Mármol UV: sustrato PVC/composite + película impresa + barniz UV", "Mármol natural: losa de roca caliza metamórfica cortada y pulida", "Mármol UV: disponible en 2.5-6 mm de grosor", "Mármol natural: disponible en 10-30 mm de grosor", "Mármol UV: patrón consistente entre lotes; el natural varía en cada losa"],
          en: ["UV marble: PVC/composite substrate + printed film + UV varnish", "Natural marble: metamorphic limestone slab, cut and polished", "UV marble: available in 2.5-6 mm thickness", "Natural marble: available in 10-30 mm thickness", "UV marble: consistent pattern across batches; natural varies in every slab"],
        },
      },
      {
        id: "weight-handling",
        title: { es: "2. Peso y manejo", en: "2. Weight and handling" },
        paragraphs: {
          es: ["La diferencia de peso es el factor que más afecta la logística y la instalación. El mármol UV pesa una fracción del natural."],
          en: ["The weight difference is the factor that most affects logistics and installation. UV marble weighs a fraction of natural marble."],
        },
        bullets: {
          es: ["Mármol UV: 3-7 kg/m² (según grosor)", "Mármol natural: 25-35 kg/m² (según grosor)", "Relación de peso: el natural es 5-10 veces más pesado", "Embarque: un contenedor 20FT carga ~3.000 m² de mármol UV vs ~500 m² de natural", "Instalación: el UV se maneja con 1-2 personas; el natural requiere equipo de elevación", "Seguridad: el UV no se rompe al caer; el natural se fractura"],
          en: ["UV marble: 3-7 kg/m² (depending on thickness)", "Natural marble: 25-35 kg/m² (depending on thickness)", "Weight ratio: natural is 5-10 times heavier", "Shipping: a 20FT container loads ~3,000 m² of UV marble vs ~500 m² of natural", "Installation: UV is handled by 1-2 people; natural requires lifting equipment", "Safety: UV does not shatter if dropped; natural fractures on impact"],
        },
      },
      {
        id: "water-stain-resistance",
        title: { es: "3. Resistencia al agua y manchas", en: "3. Water and stain resistance" },
        paragraphs: {
          es: ["El mármol natural es poroso y reacciona con líquidos ácidos. El mármol UV tiene una superficie sellada que no absorbe líquidos."],
          en: ["Natural marble is porous and reacts with acidic liquids. UV marble has a sealed surface that does not absorb liquids."],
        },
        bullets: {
          es: ["Mármol UV: superficie no porosa — no absorbe café, vino, aceite ni ácidos", "Mármol natural: poroso — absorbe líquidos, mancha permanentemente con vino, limón, café", "Mármol UV: no necesita sellado periódico", "Mármol natural: requiere sellador cada 6-12 meses", "Mármol UV: apto para cocinas, baños, lavanderías", "Mármol natural: no recomendado tras de fogones ni lavabos sin tratamiento intensivo"],
          en: ["UV marble: non-porous surface — does not absorb coffee, wine, oil or acids", "Natural marble: porous — absorbs liquids, stains permanently with wine, lemon, coffee", "UV marble: no periodic sealing needed", "Natural marble: requires sealer every 6-12 months", "UV marble: suitable for kitchens, bathrooms, laundry rooms", "Natural marble: not recommended behind stoves or sinks without intensive treatment"],
        },
      },
      {
        id: "installation-cost",
        title: { es: "4. Instalación y coste total", en: "4. Installation and total cost" },
        paragraphs: {
          es: ["El coste total instalado incluye material, transporte, mano de obra y mantenimiento. El mármol UV reduce cada uno de estos conceptos excepto el material base."],
          en: ["Total installed cost includes material, transport, labor and maintenance. UV marble reduces each of these except the base material."],
        },
        bullets: {
          es: ["Material UV: 4-8 USD/m²; material natural: 15-60 USD/m²", "Transporte UV: ligero — flete bajo; natural: pesado — flete alto", "Instalación UV: adhesivo + corte con cúter; natural: adhesivo especial + corte con amoladora", "Mano de obra UV: 1 persona, 30-40 m²/día; natural: 2-3 personas, 15-20 m²/día", "Mantenimiento UV: limpiar con paño; natural: sellado anual + limpieza profesional", "Coste total instalado UV: 8-15 USD/m²; natural: 30-80 USD/m²"],
          en: ["UV material: 4-8 USD/m²; natural material: 15-60 USD/m²", "UV transport: lightweight — low freight; natural: heavy — high freight", "UV installation: adhesive + cut with utility knife; natural: special adhesive + cut with grinder", "UV labor: 1 person, 30-40 m²/day; natural: 2-3 people, 15-20 m²/day", "UV maintenance: wipe with cloth; natural: annual sealing + professional cleaning", "Total installed cost UV: 8-15 USD/m²; natural: 30-80 USD/m²"],
        },
      },
      {
        id: "durability-lifespan",
        title: { es: "5. Durabilidad y vida útil", en: "5. Durability and lifespan" },
        paragraphs: {
          es: ["El mármol natural dura décadas e incluso siglos. El mármol UV tiene una vida útil menor pero suficiente para la mayoría de proyectos comerciales y residenciales."],
          en: ["Natural marble lasts decades or even centuries. UV marble has a shorter lifespan but sufficient for most commercial and residential projects."],
        },
        bullets: {
          es: ["Mármol UV: vida útil 10-20 años en interior (sin exposición solar directa)", "Mármol natural: vida útil 50+ años; puede pulirse para restaurar", "Mármol UV: la capa impresa no se puede repulir; se reemplaza la plancha", "Mármol natural: se pule y repule hasta 3-5 veces antes de descartar", "Mármol UV: resistente a rayadías superficiales (recubrimiento UV)", "Mármol natural: rayadías profundas requieren pulido profesional", "Mármol UV: no amarillea en interiores; en exteriores sí degrada"],
          en: ["UV marble: lifespan 10-20 years indoors (no direct sun exposure)", "Natural marble: lifespan 50+ years; can be re-polished to restore", "UV marble: printed layer cannot be re-polished; sheet is replaced", "Natural marble: can be polished and re-polished 3-5 times before discarding", "UV marble: resistant to surface scratches (UV coating)", "Natural marble: deep scratches require professional polishing", "UV marble: does not yellow indoors; degrades outdoors"],
        },
      },
      {
        id: "buying-checklist",
        title: { es: "6. Lista de compra para importadores", en: "6. Buying checklist for importers" },
        paragraphs: {
          es: ["Antes de solicitar una cotización de mármol UV, confirme los siguientes puntos para que la respuesta comercial sea específica y llegue en un día laborable."],
          en: ["Before requesting a UV marble quotation, confirm the following points so the commercial response can be specific and arrive within one business day."],
        },
        bullets: {
          es: ["Grosor (2.5 mm, 4 mm o 6 mm)", "Color y referencia visual del diseño (blanco carrara, gris ático, negro marquina...)", "Tamaño de plancha (1220×2440 mm estándar o personalizado)", "Tipo de superficie (mate, brillante, texturizado)", "Cantidad total por diseño y color (MOQ: 200 planchas)", "Uso previsto: pared, isla de cocina, baño, recepción", "País y puerto de destino", "Solicitud de muestra gratuita"],
          en: ["Thickness (2.5 mm, 4 mm or 6 mm)", "Color and visual design reference (carrara white, attic grey, marquina black...)", "Sheet size (1220×2440 mm standard or custom)", "Surface type (matte, glossy, textured)", "Total quantity per design and color (MOQ: 200 sheets)", "Intended use: wall, kitchen island, bathroom, reception", "Destination country and port", "Free sample request"],
        },
      },
    ],
  },
  {
    slug: "wpc-flooring-installation-guide",
    localizedSlug: { es: "guia-instalacion-suelo-wpc" },
    publishedAt: "2026-10-15",
    category: { es: "Guía de instalación", en: "Installation guide" },
    title: {
      es: "Guía de instalación del suelo WPC: 7 pasos para un acabado profesional",
      en: "WPC Flooring Installation Guide: 7 Steps to a Professional Finish",
    },
    description: {
      es: "Guía paso a paso para instalar suelo WPC: preparación del subpiso, ac climatización, herramientas, colocación, remates y errores comunes a evitar.",
      en: "Step-by-step guide to installing WPC flooring: subfloor prep, acclimatization, tools, laying, finishing and common mistakes to avoid.",
    },
    introduction: {
      es: "El suelo WPC con sistema de clic sin cola es uno de los productos más rápidos de instalar en el sector de suelos. Pero un instalador que se salta la preparación del subpiso o la aclimatación obtendrá resultados defectuosos. Esta guía cubre los 7 pasos que separan una instalación amateur de una profesional.",
      en: "WPC flooring with a glueless click system is one of the fastest floor products to install. But an installer who skips subfloor prep or acclimatization gets defective results. This guide covers the 7 steps that separate an amateur install from a professional one.",
    },
    readingTime: { es: "7 min", en: "7 min" },
    cover: "/assets/wpc-production.jpg",
    coverAlt: {
      es: "Instalación de suelo WPC con sistema de clic en una vivienda",
      en: "WPC flooring click-system installation in a residential setting",
    },
    sections: [
      {
        id: "subfloor-preparation",
        title: { es: "1. Preparación del subpiso", en: "1. Subfloor preparation" },
        paragraphs: {
          es: ["El subpiso determina el resultado final. Si el subpiso no es plano, el suelo WPC producirá crujidos, rebotes y desgaste prematuro de los cierres."],
          en: ["The subfloor determines the final result. If the subfloor is not flat, WPC flooring will produce creaking, bouncing and premature wear of the locking joints."],
        },
        bullets: {
          es: ["Concreto: humedad máxima 2.5% — usar membrana de vapor si supera el límite", "Concreto: planicidad máxima 3 mm por 2 m (norma EN 1972)", "Cerámica existente: confirmar que no haya baldosas sueltas; rellenar juntas con nivelador", "Tableros de madera: clavos hundidos, lijar uniones, sustituir tableros blandos", "PVC/WPC existente: se puede instalar encima sin demolición si el subpiso está plano y seco", "Nunca instalar sobre moqueta — retirar siempre"],
          en: ["Concrete: max moisture 2.5% — use vapor membrane if it exceeds the limit", "Concrete: max flatness deviation 3 mm per 2 m (EN 1972 standard)", "Existing tile: confirm no loose tiles; fill grout lines with self-leveling compound", "Wooden subfloor: countersink nails, sand joints, replace soft boards", "Existing PVC/WPC: can be installed over without demolition if subfloor is flat and dry", "Never install over carpet — always remove it"],
        },
      },
      {
        id: "acclimatization",
        title: { es: "2. Aclimatación del material", en: "2. Material acclimatization" },
        paragraphs: {
          es: ["El WPC es estable dimensionalmente, pero todo material compuesto se expande y contrae con cambios de temperatura y humedad. La aclimatación evita que las juntas se abran después de la instalación."],
          en: ["WPC is dimensionally stable, but every composite material expands and contracts with temperature and humidity changes. Acclimatization prevents joints from opening after installation."],
        },
        bullets: {
          es: ["Tiempo mínimo: 48 horas en el espacio de instalación", "Temperatura objetivo: 18-24°C", "Humedad relativa objetivo: 35-65%", "Apilar las cajas planas, no de pie", "No abrir las cajas durante la aclimatación", "No almacenar cerca de ventanas con sol directo o conductos de calefacción"],
          en: ["Minimum time: 48 hours in the installation space", "Target temperature: 18-24°C", "Target relative humidity: 35-65%", "Stack boxes flat, not upright", "Do not open boxes during acclimatization", "Do not store near windows with direct sun or heating ducts"],
        },
      },
      {
        id: "tools-required",
        title: { es: "3. Herramientas necesarias", en: "3. Tools required" },
        paragraphs: {
          es: ["El WPC con sistema de clic no requiere herramientas especializadas. La mayoría de herramientas están disponibles en cualquier ferretería de obra."],
          en: ["WPC with a click system requires no specialized tools. Most tools are available at any construction hardware store."],
        },
        bullets: {
          es: ["Sierra de calar con hoja de dientes finos (para corte transversal)", "Cúter reforzado para cortes longitudinales en perfil", "Calzadores y cuñas de espaciado (mínimo 6 pares)", "Bloque de golpeo de plástico (nunca usar martillo directamente)", "Cinta métrica, regla metálica y escuadra", "Nivel láser o nivel de burbuja de 1.2 m", "Rodillo de 50 kg para asentar las juntas después de clicar"],
          en: ["Jigsaw with fine-tooth blade (for cross cuts)", "Heavy-duty utility knife for longitudinal profile cuts", "Spacers and wedges (minimum 6 pairs)", "Plastic tapping block (never use a hammer directly)", "Measuring tape, metal ruler and square", "Laser level or 1.2 m spirit level", "50 kg roller to set joints after clicking"],
        },
      },
      {
        id: "laying-pattern",
        title: { es: "4. Patrón de colocación", en: "4. Laying pattern" },
        paragraphs: {
          es: ["El patrón de colocación afecta tanto la estética como la estabilidad. La regla fundamental: las juntas transversales no deben alinearse en filas adyacentes."],
          en: ["The laying pattern affects both aesthetics and stability. The fundamental rule: cross-joints must not align in adjacent rows."],
        },
        bullets: {
          es: ["Dirección de las planchas: paralela a la fuente de luz principal (ventana)", "Juntas desplazadas: mínimo 30 cm entre planchas adyacentes (patrón aleatorio)", "Primera fila: marcar una línea recta con cuerda contra la pared más larga", "Juntas de dilatación perimetral: mínimo 8 mm en cada pared (usar cuñas)", "En instalaciones grandes (>8 m de largo): incluir junta de dilatación intermedia", "Cortar la última fila con la cara decorativa hacia abajo en la sierra"],
          en: ["Plank direction: parallel to the main light source (window)", "Staggered joints: minimum 30 cm between adjacent planks (random pattern)", "First row: mark a straight line with string against the longest wall", "Perimeter expansion gap: minimum 8 mm at each wall (use spacers)", "In large installations (>8 m long): include an intermediate expansion joint", "Cut the last row with the decorative face down on the saw"],
        },
      },
      {
        id: "clicking-technique",
        title: { es: "5. Técnica de clicado", en: "5. Clicking technique" },
        paragraphs: {
          es: ["El sistema de clic más común en WPC es el sistema de ángulo-bisel: la plancha se introduce a 20-30° y se baja al plano. Una técnica incorrecta provoca juntas visibles o daños en el perfil."],
          en: ["The most common WPC click system is the angle-bevel system: the plank is inserted at 20-30° and pressed down to the plane. Incorrect technique causes visible gaps or profile damage."],
        },
        bullets: {
          es: ["Clic lateral: insertar la lengüeta en el bisel a 20-30° y bajar suavemente", "Clic de cabecera: usar el bloque de golpeo para cerrar la junta transversal", "Nunca forzar con martillo directo — usar siempre el bloque de golpeo", "Si una junta no cierra: verificar que no haya suciedad en el perfil", "Pasar el rodillo de 50 kg por cada fila completa para asentar juntas", "Inspeccionar cada junta con la mano — no debe haber escalón"],
          en: ["Side click: insert the tongue into the bevel at 20-30° and lower gently", "Head click: use the tapping block to close the cross-joint", "Never force with a direct hammer — always use the tapping block", "If a joint won't close: check for dirt in the profile", "Roll a 50 kg roller over each completed row to set joints", "Inspect each joint by hand — there should be no lip"],
        },
      },
      {
        id: "finishing-transitions",
        title: { es: "6. Remates y perfiles de transición", en: "6. Finishing and transition profiles" },
        paragraphs: {
          es: ["Los remates son lo que diferencia una instalación terminada de una inacabada. Los perfiles de transición cubren las juntas de dilatación y cambian de material sin que se vean bordes crudos."],
          en: ["Finishing is what separates a completed install from an unfinished one. Transition profiles cover expansion gaps and switch materials without showing raw edges."],
        },
        bullets: {
          es: ["Zócalo: clavar o atornillar al muro, nunca al suelo (permite flotación)", "Perfil T: en juntas entre habitaciones o cambio de material", "Perfil reductor: en transiciones de altura (WPC a cerámica)", "Perfil de borde: en escalones o bordes expuestos", "Sellado perimetral: silicona neutra en zonas húmedas (baño, cocina)", "Retirar las cuñas de espaciado 24 horas después de terminar"],
          en: ["Skirting board: nail or screw to the wall, never to the floor (allows floatation)", "T-profile: at joints between rooms or material changes", "Reducer profile: at height transitions (WPC to tile)", "Edge profile: on stairs or exposed edges", "Perimeter sealing: neutral silicone in wet areas (bathroom, kitchen)", "Remove spacers 24 hours after completing the installation"],
        },
      },
      {
        id: "common-mistakes",
        title: { es: "7. Errores comunes a evitar", en: "7. Common mistakes to avoid" },
        paragraphs: {
          es: ["La mayoría de reclamaciones de garantía en suelo WPC provienen de errores de instalación, no de defectos de fabricación. Estos son los siete errores más frecuentes:"],
          en: ["Most warranty claims on WPC flooring come from installation errors, not manufacturing defects. These are the seven most common mistakes:"],
        },
        bullets: {
          es: ["No aclimatar el material — las juntas se abren en semanas", "No usar membrana de vapor sobre concreto — el suelo abomba", "Juntas alineadas en filas adyacentes — patrón no aleatorio", "No dejar junta de dilatación perimetral — el suelo se levanta en bordes", "Usar martillo directo sin bloque de golpeo — perfil dañado", "Instalar sobre moqueta — el suelo rebota y cruje", "No sellar el perímetro en baños — el agua penetra por los bordes"],
          en: ["Not acclimatizing the material — joints open within weeks", "Not using a vapor membrane over concrete — flooring buckles", "Aligned joints in adjacent rows — non-random pattern", "Not leaving perimeter expansion gap — flooring lifts at edges", "Using a direct hammer without a tapping block — damaged profile", "Installing over carpet — flooring bounces and creaks", "Not sealing the perimeter in bathrooms — water penetrates through edges"],
        },
      },
    ],
  },
  {
    slug: "wpc-flooring-price-guide",
    localizedSlug: { es: "guia-precios-suelo-wpc" },
    publishedAt: "2026-10-16",
    category: { es: "Guía de precios", en: "Price guide" },
    title: {
      es: "Guía de precios del suelo WPC: qué afecta el coste FOB para importadores",
      en: "WPC Flooring Price Guide: What Affects FOB Cost for Importers",
    },
    description: {
      es: "Guía B2B de precios del suelo WPC: rangos FOB, grosor, capa de desgaste, sistema de clic, acabado, embalaje, MOQ y cómo comparar cotizaciones.",
      en: "B2B WPC flooring price guide: FOB ranges, thickness, wear layer, click system, finish, packaging, MOQ and how to compare quotations.",
    },
    introduction: {
      es: "El precio del suelo WPC no se define solo por el grosor. Para un importador, el coste real depende de la estructura del producto, la capa de desgaste, el sistema de clic, el acabado superficial, el embalaje y el volumen de pedido. Esta guía explica cómo leer una cotización FOB de WPC y qué datos pedir al proveedor antes de comparar precios.",
      en: "WPC flooring price is not defined by thickness alone. For an importer, real cost depends on product structure, wear layer, click system, surface finish, packaging and order volume. This guide explains how to read a WPC FOB quotation and what data to request before comparing prices.",
    },
    readingTime: { es: "7 min", en: "7 min" },
    cover: "/assets/wpc-production.jpg",
    coverAlt: {
      es: "Línea de producción y embalaje de suelo WPC para exportación",
      en: "WPC flooring production and export packing line",
    },
    sections: [
      {
        id: "price-range",
        title: { es: "1. Rango de precio FOB típico", en: "1. Typical FOB price range" },
        paragraphs: {
          es: ["El precio FOB de suelo WPC varía ampliamente según especificación y volumen. Para compradores B2B, un rango realista ayuda a filtrar cotizaciones demasiado bajas que esconden cambios de calidad."],
          en: ["WPC flooring FOB price varies widely by specification and volume. For B2B buyers, a realistic range helps filter quotes that are too low and hide quality changes."],
        },
        bullets: {
          es: ["WPC económico: 6-9 USD/m² (grosor básico, capa de desgaste fina, diseño estándar)", "WPC medio: 9-13 USD/m² (mejor núcleo, 0.3-0.5 mm wear layer, acabado estable)", "WPC premium: 13-18 USD/m² (mayor grosor, click patentado, IXPE/EVA opcional, diseño profundo)", "MOQ habitual: 100-300 m² por color, según proveedor", "Precio final depende de Incoterm: FOB Ningbo/Shanghai no incluye flete marítimo ni aranceles"],
          en: ["Economy WPC: USD 6-9/m² (basic thickness, thin wear layer, standard design)", "Mid-range WPC: USD 9-13/m² (better core, 0.3-0.5 mm wear layer, stable finish)", "Premium WPC: USD 13-18/m² (higher thickness, patented click, optional IXPE/EVA, deep texture)", "Typical MOQ: 100-300 m² per color, depending on supplier", "Final landed cost depends on Incoterm: FOB Ningbo/Shanghai excludes ocean freight and duties"],
        },
      },
      {
        id: "thickness-core",
        title: { es: "2. Grosor y estructura del núcleo", en: "2. Thickness and core structure" },
        paragraphs: {
          es: ["El grosor total influye en estabilidad, sensación al caminar y coste de material. Pero dos suelos de 8 mm pueden tener precios distintos si el núcleo cambia."],
          en: ["Total thickness affects stability, walking feel and material cost. But two 8 mm floors can have different prices if the core changes."],
        },
        bullets: {
          es: ["5-6 mm: opción económica para proyectos residenciales ligeros", "7-8 mm: rango más común para importadores, equilibrio entre coste y estabilidad", "9-12 mm: opción premium para mayor confort y sensación sólida", "Mayor densidad del núcleo = mejor estabilidad pero mayor coste", "Contenido de madera/PVC y fórmula de aditivos afectan rigidez, olor y durabilidad", "Pedir al proveedor: densidad del núcleo, peso por m² y tolerancia dimensional"],
          en: ["5-6 mm: economy option for light residential projects", "7-8 mm: most common importer range, balancing cost and stability", "9-12 mm: premium option for better comfort and solid feel", "Higher core density = better stability but higher cost", "Wood/PVC content and additive formula affect rigidity, odor and durability", "Ask supplier for: core density, weight per m² and dimensional tolerance"],
        },
      },
      {
        id: "wear-layer",
        title: { es: "3. Capa de desgaste y clasificación AC", en: "3. Wear layer and AC rating" },
        paragraphs: {
          es: ["La capa de desgaste protege el diseño decorativo. Es una de las razones más comunes por las que dos cotizaciones con el mismo grosor total tienen precios diferentes."],
          en: ["The wear layer protects the decorative design. It is one of the most common reasons two quotes with the same total thickness have different prices."],
        },
        bullets: {
          es: ["0.1-0.2 mm: tráfico residencial bajo, precio más bajo", "0.3 mm: uso residencial/comercial ligero, opción popular", "0.5 mm: comercial medio, mejor resistencia a rayado", "0.7 mm: comercial alto, coste notablemente mayor", "AC3/AC4/AC5 deben confirmarse con informe de prueba, no solo con etiqueta comercial", "Una wear layer más gruesa aumenta coste, pero reduce reclamaciones en mercados exigentes"],
          en: ["0.1-0.2 mm: low residential traffic, lowest price", "0.3 mm: residential/light commercial use, popular option", "0.5 mm: medium commercial use, better scratch resistance", "0.7 mm: heavy commercial use, noticeably higher cost", "AC3/AC4/AC5 should be confirmed by test report, not only sales label", "A thicker wear layer increases cost but reduces claims in demanding markets"],
        },
      },
      {
        id: "click-underlayment",
        title: { es: "4. Sistema de clic y base acústica", en: "4. Click system and acoustic underlayment" },
        paragraphs: {
          es: ["El sistema de clic determina la facilidad de instalación y la tasa de rotura en obra. La base acústica añade confort pero también cambia el precio por metro cuadrado."],
          en: ["The click system determines installation speed and breakage rate on site. Acoustic underlayment adds comfort but also changes price per square meter."],
        },
        bullets: {
          es: ["Click genérico: coste bajo, adecuado para proyectos económicos", "UNILIN/VALINGE: mejor estabilidad y reconocimiento de mercado, precio superior", "EVA base: opción económica para reducción básica de sonido", "IXPE base: mejor resiliencia, menor olor, precio más alto", "Base preadherida aumenta precio pero reduce tiempo de instalación", "Pedir muestra real del sistema de clic antes de confirmar pedido masivo"],
          en: ["Generic click: low cost, suitable for economy projects", "UNILIN/VALINGE: better stability and market recognition, higher price", "EVA backing: economy option for basic sound reduction", "IXPE backing: better resilience, lower odor, higher price", "Pre-attached backing increases price but reduces installation time", "Request a real sample of the click system before confirming mass order"],
        },
      },
      {
        id: "finish-design-packaging",
        title: { es: "5. Acabado, diseño y embalaje", en: "5. Finish, design and packaging" },
        paragraphs: {
          es: ["El comprador final juzga el producto por su apariencia y embalaje. Estas decisiones no siempre cambian la función, pero sí influyen en la percepción de valor y el coste."],
          en: ["The end buyer judges the product by appearance and packaging. These decisions do not always change function, but they influence perceived value and cost."],
        },
        bullets: {
          es: ["Superficie lisa: coste menor, apariencia simple", "Textura sincronizada/EIR: más realista, coste mayor", "Diseños estándar: menor MOQ y entrega más rápida", "Diseño personalizado: coste de película, mayor MOQ y plazo más largo", "Caja neutra: más económica", "Caja personalizada: coste de impresión + diseño + MOQ", "Pallet reforzado y cantoneras: incrementan coste pero reducen daños en tránsito"],
          en: ["Smooth surface: lower cost, simple appearance", "Embossed-in-register/EIR texture: more realistic, higher cost", "Standard designs: lower MOQ and faster delivery", "Custom design: film cost, higher MOQ and longer lead time", "Neutral carton: more economical", "Custom carton: printing + design + MOQ cost", "Reinforced pallet and corner protectors: increase cost but reduce transit damage"],
        },
      },
      {
        id: "how-to-compare-quotes",
        title: { es: "6. Cómo comparar cotizaciones correctamente", en: "6. How to compare quotations correctly" },
        paragraphs: {
          es: ["Comparar solo el precio por m² lleva a errores. Una cotización barata puede cambiar grosor, densidad, capa de desgaste, embalaje o garantía."],
          en: ["Comparing only price per m² leads to mistakes. A cheap quote may change thickness, density, wear layer, packaging or warranty."],
        },
        bullets: {
          es: ["Comparar la misma especificación: grosor total + wear layer + densidad + click + base", "Confirmar si el precio incluye embalaje de exportación", "Confirmar puerto FOB y validez de precio (PVC y aditivos fluctúan)", "Pedir peso por caja y m² por pallet para calcular flete", "Pedir informe de prueba: resistencia al desgaste, estabilidad dimensional, formaldehído/olor", "Pedir muestra antes del pedido: color, clic, olor y rigidez se verifican mejor físicamente", "Calcular landed cost: FOB + flete + seguro + arancel + despacho + transporte local"],
          en: ["Compare the same specification: total thickness + wear layer + density + click + backing", "Confirm whether export packaging is included", "Confirm FOB port and price validity (PVC and additives fluctuate)", "Ask for carton weight and m² per pallet to calculate freight", "Ask for test report: abrasion resistance, dimensional stability, formaldehyde/odor", "Request sample before order: color, click, odor and rigidity are best checked physically", "Calculate landed cost: FOB + freight + insurance + duty + clearance + local transport"],
        },
      },
      {
        id: "quote-checklist",
        title: { es: "7. Checklist para pedir precio WPC", en: "7. Checklist for requesting WPC price" },
        paragraphs: {
          es: ["Para recibir una cotización precisa en un día laborable, envíe al proveedor la siguiente información desde el primer mensaje."],
          en: ["To receive an accurate quotation within one business day, send the supplier the following information in the first message."],
        },
        bullets: {
          es: ["Grosor total requerido (5/6/7/8/10/12 mm)", "Capa de desgaste requerida (0.2/0.3/0.5/0.7 mm)", "Tipo de base: sin base, EVA o IXPE", "Sistema de clic: genérico, UNILIN o VALINGE", "Diseño/color objetivo (foto o código)", "Superficie: lisa, mate, texturizada, EIR", "Cantidad por color y total del pedido", "Embalaje: neutro o caja personalizada", "Puerto de destino y país", "Necesidad de muestra gratuita antes del pedido"],
          en: ["Required total thickness (5/6/7/8/10/12 mm)", "Required wear layer (0.2/0.3/0.5/0.7 mm)", "Backing type: no backing, EVA or IXPE", "Click system: generic, UNILIN or VALINGE", "Target design/color (photo or code)", "Surface: smooth, matte, textured, EIR", "Quantity per color and total order", "Packaging: neutral or customized carton", "Destination port and country", "Need for free sample before order"],
        },
      },
    ],
  },
  {
    slug: "spc-flooring-price-guide",
    localizedSlug: { es: "guia-precios-suelo-spc" },
    publishedAt: "2026-10-19",
    category: { es: "Guía de precios", en: "Price guide" },
    title: {
      es: "Precio del piso SPC: cómo comparar cotizaciones FOB",
      en: "SPC Flooring Price Guide: How to Compare FOB Quotations",
    },
    seoTitle: {
      es: "Precio del piso SPC y cotización FOB | SINOQI",
      en: "SPC Flooring Price & FOB Quotation Guide | SINOQI",
    },
    description: {
      es: "Conozca qué cambia el precio FOB del piso SPC y qué debe especificar para recibir una cotización comparable, un plan de empaque y una estimación de carga.",
      en: "Learn why SPC flooring FOB prices vary and what importers should specify for an accurate supplier quotation, packing plan and container estimate.",
    },
    introduction: {
      es: "Dos ofertas de piso SPC pueden indicar el mismo grosor y aun así representar productos, costos y riesgos de importación diferentes. La formulación del núcleo, la capa de desgaste, el recubrimiento UV, el sistema de encaje, la base acústica, las dimensiones, el empaque y las condiciones comerciales influyen en el precio final. Esta guía ayuda a importadores, distribuidores y compradores de proyectos a preparar una cotización de piso SPC que pueda compararse de manera responsable.",
      en: "Two SPC flooring offers can show the same nominal thickness yet represent different products, costs and import risks. Core formulation, wear layer, UV coating, click system, acoustic backing, plank dimensions, packing and commercial terms all influence the final price. This guide helps importers, distributors and project buyers prepare an SPC flooring quotation that can be compared on a like-for-like basis.",
    },
    readingTime: { es: "9 min", en: "9 min" },
    cover: "/assets/linkedin-spc-price-01-stack.png",
    coverAlt: {
      es: "Ilustración de una configuración de piso SPC para comparar cotizaciones",
      en: "SPC flooring configuration illustration for quotation comparison",
    },
    coverCaption: {
      es: "Ilustración de una configuración de piso SPC para comparar cotizaciones; no representa una instalación o bodega real de SINOQI.",
      en: "SPC flooring configuration illustration for quotation comparison; it does not depict an actual SINOQI facility or warehouse.",
    },
    scopeNote: {
      es: "Los precios del SPC pueden cambiar con las materias primas, el tipo de cambio, la cantidad, la película decorativa, el recubrimiento UV, las dimensiones, el grosor total, la capa de desgaste, la base, la licencia del sistema de encaje, el empaque y las condiciones de pago. Solicite siempre una cotización formal vigente y apruebe la muestra antes del pedido.",
      en: "SPC flooring prices can change with raw materials, exchange rates, order quantity, décor film, UV coating, plank dimensions, total thickness, wear layer, backing, click-system licensing, packing and payment terms. Always request a current formal quotation and approve the sample before ordering.",
    },
    images: [
      {
        src: "/assets/linkedin-spc-price-02-layers.png",
        afterSectionId: "thickness-wear-layer",
        alt: {
          es: "Estructura ilustrativa de las capas de un piso SPC con base acústica",
          en: "Illustrative SPC flooring layer structure with acoustic backing",
        },
        caption: {
          es: "Estructura ilustrativa de capas SPC. La composición y el espesor de cada capa deben confirmarse en la ficha técnica y la muestra aprobada.",
          en: "Illustrative SPC layer structure. Confirm the composition and thickness of each layer in the technical data sheet and approved sample.",
        },
      },
      {
        src: "/assets/linkedin-spc-price-04-packing.png",
        afterSectionId: "packaging-logistics",
        alt: {
          es: "Ilustración de empaque en palés para planificar la exportación de piso SPC",
          en: "Packaging illustration for SPC flooring export planning",
        },
        caption: {
          es: "Ilustración de empaque para planificar la exportación; no representa una instalación, bodega ni empaque real de SINOQI.",
          en: "Packaging illustration for export planning; it does not depict an actual SINOQI facility, warehouse or shipment.",
        },
      },
    ],
    cta: {
      eyebrow: { es: "Cotización SPC", en: "SPC quotation" },
      title: { es: "Solicite una cotización de piso SPC", en: "Request an SPC Flooring Quotation" },
      body: {
        es: "Envíenos las dimensiones, el grosor total, la capa de desgaste, la base, el sistema de encaje, la cantidad y el puerto de destino. Prepararemos la cotización según la especificación confirmada.",
        en: "Send us the plank size, total thickness, wear layer, backing, click system, quantity and destination port. We will prepare a quotation based on your confirmed specification.",
      },
    },
    faqs: [
      {
        question: { es: "¿Por qué varían tanto las cotizaciones de piso SPC?", en: "Why do SPC flooring quotations vary so much?" },
        answer: {
          es: "Porque el grosor nominal es solo una parte de la especificación. La formulación y densidad del núcleo, la capa de desgaste, el recubrimiento UV, la película decorativa, el sistema de encaje, la base acústica, las dimensiones, el empaque, la cantidad, el tipo de cambio y las condiciones de pago pueden modificar el precio FOB del piso SPC.",
          en: "Nominal thickness is only one part of the specification. Core formulation and density, wear layer, UV coating, décor film, click system, acoustic backing, plank dimensions, packing, quantity, exchange rates and payment terms can all change the SPC flooring FOB price.",
        },
      },
      {
        question: { es: "¿Qué información se necesita para una cotización precisa de piso SPC?", en: "What information is needed for an accurate SPC quotation?" },
        answer: {
          es: "Indique las dimensiones de la tabla, el grosor total, la capa de desgaste, el recubrimiento UV, la base y su espesor, el perfil de encaje y la licencia requerida, el acabado, el bisel, la cantidad por diseño, el empaque, el puerto de destino, los informes de ensayo requeridos y las condiciones comerciales esperadas.",
          en: "Specify plank dimensions, total thickness, wear layer, UV coating, backing type and thickness, click profile and required licence, surface finish, bevel, quantity per décor, packing, destination port, required test reports and expected commercial terms.",
        },
      },
      {
        question: { es: "¿Una tabla SPC más gruesa siempre significa mejor calidad?", en: "Does a thicker SPC plank always mean better quality?" },
        answer: {
          es: "No. El grosor influye en la construcción y el costo, pero no confirma por sí solo la estabilidad, la resistencia del sistema de encaje ni la durabilidad superficial. Compare la formulación, la densidad, las tolerancias, la capa de desgaste, el recubrimiento UV y los informes de ensayo pertinentes.",
          en: "No. Thickness influences construction and cost, but it does not by itself confirm dimensional stability, click-joint strength or surface durability. Compare core formulation, density, tolerances, wear layer, UV coating and the relevant test reports.",
        },
      },
      {
        question: { es: "¿Cómo deben comparar los importadores los sistemas de encaje y las bases?", en: "How should importers compare click systems and backing?" },
        answer: {
          es: "Deben confirmar el perfil de encaje, el estado y costo de la licencia cuando corresponda, las tolerancias de mecanizado y los resultados de ensayo solicitados. Para la base acústica, compare material, espesor, densidad, adhesión y compatibilidad con el contrapiso y las normas del mercado de destino.",
          en: "Confirm the click profile, licence status and fee where applicable, machining tolerances and requested test results. For acoustic backing, compare material, thickness, density, adhesion and compatibility with the subfloor and destination-market requirements.",
        },
      },
      {
        question: { es: "¿Cómo se calcula la carga de un contenedor de piso SPC?", en: "How is container loading calculated for SPC flooring?" },
        answer: {
          es: "La estimación parte de las piezas y metros cuadrados por caja, el peso bruto por caja, las cajas por palé y el peso del palé. Como el SPC suele alcanzar primero el límite de peso, la carga final debe comprobarse contra el payload del contenedor y las reglas de la naviera, el puerto y el país de destino.",
          en: "The estimate starts with pieces and square metres per carton, gross weight per carton, cartons per pallet and pallet weight. Because SPC flooring often reaches the weight limit before the volume limit, the final plan must be checked against container payload and carrier, port and destination-country rules.",
        },
      },
    ],
    sections: [
      {
        id: "price-range",
        title: { es: "1. Por qué el precio del piso SPC no se compara solo por grosor", en: "1. Why SPC flooring prices cannot be compared by thickness alone" },
        paragraphs: {
          es: [
            "Una oferta que dice “5 mm SPC” no define por completo el producto. Dos proveedores de pisos SPC pueden cotizar el mismo grosor con distintas dimensiones, formulaciones del núcleo, capas de desgaste, recubrimientos UV, películas decorativas, perfiles de encaje y bases acústicas. También pueden usar diferentes tolerancias, empaques y condiciones de pago.",
            "Por eso, el precio del piso SPC debe compararse con una especificación común. Antes de evaluar la cifra FOB, confirme qué incluye, la moneda, el puerto de embarque, la vigencia de la oferta y si el costo de una licencia de encaje, el palé o el empaque personalizado está incluido.",
          ],
          en: [
            "An offer described only as “5 mm SPC” does not define the product. Two SPC flooring suppliers may quote the same nominal thickness with different plank dimensions, core formulations, wear layers, UV coatings, décor films, click profiles and acoustic backings. Their production tolerances, packing and payment terms may also differ.",
            "Compare the SPC flooring price against one shared specification. Before evaluating the FOB figure, confirm what it includes, the currency, port of loading, quotation validity and whether click-licence fees, pallets or customized packing are included.",
          ],
        },
        bullets: {
          es: ["Materias primas y tipo de cambio en la fecha de cotización", "Cantidad total y cantidad por diseño", "Especificación completa del producto y tolerancias", "Empaque, condiciones de pago y vigencia de la cotización", "Alcance exacto del término FOB y puerto de embarque"],
          en: ["Raw-material costs and exchange rate at the quotation date", "Total order quantity and quantity per décor", "Complete product specification and tolerances", "Packing, payment terms and quotation validity", "Exact FOB scope and port of loading"],
        },
      },
      {
        id: "core-density",
        title: { es: "2. Formulación del núcleo, densidad y estabilidad dimensional", en: "2. Core formulation, density and dimensional stability" },
        paragraphs: {
          es: [
            "El núcleo rígido suele combinar resina de PVC, carbonato de calcio, estabilizantes y otros aditivos. La receta y el proceso influyen en la densidad, la tenacidad, el mecanizado del sistema de encaje y la estabilidad dimensional; el peso o el color del núcleo, observados por separado, no prueban su calidad.",
            "Pida la densidad declarada, las tolerancias de grosor y dimensiones, y el informe de ensayo que exija su mercado o proyecto. Compare esos documentos con la muestra aprobada y con la especificación de la orden. Si una cotización cambia de forma importante, confirme que no se haya modificado la formulación o la tolerancia.",
          ],
          en: [
            "A rigid SPC core commonly combines PVC resin, calcium carbonate, stabilizers and other additives. Formulation and processing influence density, toughness, click-profile machining and dimensional stability. Weight or core colour considered alone does not prove quality.",
            "Ask for the declared density, thickness and dimensional tolerances, and the test report required by your market or project. Compare those documents with the approved sample and purchase specification. If a quotation changes materially, confirm that the formulation or tolerance has not also changed.",
          ],
        },
        bullets: {
          es: ["Densidad declarada y método de medición", "Tolerancias de grosor, ancho, largo y escuadra", "Estabilidad dimensional y otros ensayos exigidos por el destino", "Correspondencia entre ficha técnica, muestra aprobada y producción"],
          en: ["Declared density and measurement method", "Thickness, width, length and squareness tolerances", "Dimensional stability and other destination-market tests", "Consistency between technical data, approved sample and production"],
        },
      },
      {
        id: "thickness-wear-layer",
        title: { es: "3. Grosor total, capa de desgaste y recubrimiento UV", en: "3. Total thickness, wear layer and UV coating" },
        paragraphs: {
          es: [
            "El grosor total, la capa de desgaste y el recubrimiento UV cumplen funciones distintas. Una tabla más gruesa puede cambiar la rigidez, la altura instalada y el costo de material, pero no confirma por sí sola una mejor formulación, un encaje más resistente ni una superficie adecuada para cada uso.",
            "Solicite el grosor nominal y su tolerancia, el espesor de la capa de desgaste y la especificación del recubrimiento UV. La selección debe basarse en los requisitos del proyecto, los informes de ensayo aplicables y la muestra aprobada, no en una clasificación genérica por grosor.",
          ],
          en: [
            "Total thickness, wear layer and UV coating perform different functions. A thicker plank can change rigidity, installed height and material cost, but thickness alone does not confirm a better core formulation, a stronger click joint or a surface suitable for every application.",
            "Request nominal thickness and tolerance, wear-layer thickness and the UV-coating specification. Selection should follow project requirements, applicable test reports and the approved sample rather than a generic use class based only on thickness.",
          ],
        },
        bullets: {
          es: ["Grosor total nominal y tolerancia", "Capa de desgaste medida por separado", "Especificación del recubrimiento UV", "Ensayos solicitados para el mercado de destino", "Muestra aprobada como referencia de color, textura y superficie"],
          en: ["Nominal total thickness and tolerance", "Wear layer measured separately", "UV-coating specification", "Tests requested for the destination market", "Approved sample as the colour, texture and surface reference"],
        },
      },
      {
        id: "click-backing",
        title: { es: "4. Sistema de encaje, licencia de patente y base acústica", en: "4. Click system, patent licensing and acoustic backing" },
        paragraphs: {
          es: [
            "El nombre del sistema de encaje no sustituye una revisión técnica. Confirme el perfil, las tolerancias de mecanizado, el estado de la licencia y si la tarifa de patente está incluida. Cuando se especifique UNILIN o Välinge, la documentación y el alcance de la autorización deben comprobarse para el producto cotizado; la marca por sí sola no garantiza el desempeño de la tabla terminada.",
            "Para una base IXPE o EVA, compare material, espesor, densidad, método de adhesión y requisitos acústicos del proyecto. También confirme si la base está incluida dentro del grosor total declarado y si es compatible con el contrapiso y las instrucciones de instalación previstas.",
          ],
          en: [
            "A click-system name is not a substitute for technical review. Confirm the profile, machining tolerances, licence status and whether the patent fee is included. When UNILIN or Välinge is specified, verify the documentation and scope of authorization for the quoted product; the brand name alone does not guarantee finished-plank performance.",
            "For IXPE or EVA backing, compare material, thickness, density, bonding method and the project’s acoustic requirements. Also confirm whether the backing is included in the stated total thickness and whether it is compatible with the intended subfloor and installation instructions.",
          ],
        },
        bullets: {
          es: ["Perfil de encaje y tolerancias de mecanizado", "Titular, alcance y tarifa de la licencia, cuando corresponda", "Tipo y espesor de IXPE o EVA", "Densidad, adhesión y requisitos acústicos de la base", "Necesidad de contrapiso adicional según el sistema de instalación"],
          en: ["Click profile and machining tolerances", "Licence holder, scope and fee where applicable", "IXPE or EVA type and thickness", "Backing density, adhesion and acoustic requirements", "Need for separate underlayment under the intended installation system"],
        },
      },
      {
        id: "surface-design",
        title: { es: "5. Dimensiones, película decorativa, textura y bisel", en: "5. Plank size, décor film, surface texture and bevel" },
        paragraphs: {
          es: [
            "El ancho y el largo de la tabla afectan el rendimiento de corte, el empaque y la instalación. La película decorativa, la repetición del diseño, la textura, el acabado mate o brillante y el tipo de bisel también pueden cambiar el costo aunque la estructura básica parezca igual.",
            "Un acabado sincronizado EIR requiere que el relieve coincida con la veta impresa. Antes de aprobarlo, revise paneles completos bajo una iluminación representativa, no solo una imagen digital. Confirme también la tolerancia dimensional, el bisel —recto, microbisel o pintado— y cualquier requisito de color por lote.",
          ],
          en: [
            "Plank width and length affect cutting yield, packing and installation. Décor film, pattern repeat, surface texture, gloss level and bevel can also change cost even when the basic construction appears identical.",
            "An EIR synchronized finish requires the embossing to align with the printed grain. Review full planks under representative lighting before approval rather than relying only on a digital image. Confirm dimensional tolerance, bevel type—square edge, micro-bevel or painted bevel—and any batch-colour requirements.",
          ],
        },
        bullets: {
          es: ["Largo, ancho y tolerancias de la tabla", "Proveedor y referencia de la película decorativa", "Repetición del diseño y variación visual", "Textura estándar o acabado sincronizado EIR", "Nivel de brillo y tipo de bisel"],
          en: ["Plank length, width and tolerances", "Décor-film supplier and reference", "Pattern repeat and visual variation", "Standard texture or EIR synchronized finish", "Gloss level and bevel type"],
        },
      },
      {
        id: "packaging-logistics",
        title: { es: "6. Embalaje, carga del contenedor y logística", en: "6. Packaging, container loading and logistics" },
        paragraphs: {
          es: [
            "El SPC suele alcanzar el límite de peso del contenedor antes que el límite de volumen. La carga estimada debe calcularse con las piezas y los metros cuadrados por caja, el peso bruto confirmado de cada caja, las cajas por palé y el peso del propio palé. Después se contrasta con el payload del contenedor y las reglas de la naviera, el puerto y el país de destino.",
            "Defina si se usarán cajas neutras o personalizadas, cantoneras, flejes, película protectora y palés. Para palés o refuerzos de madera, confirme por separado el peso añadido, los requisitos IPPC o de fumigación, las reglas de embalaje de madera del país de destino y el método de manipulación con montacargas. La estimación final de carga solo debe cerrarse después de confirmar el peso bruto del empaque terminado.",
          ],
          en: [
            "SPC flooring often reaches the container weight limit before the volume limit. Estimated loading should be calculated from pieces and square metres per carton, confirmed gross weight per carton, cartons per pallet and the pallet’s own weight. The result must then be checked against container payload and the rules of the carrier, port and destination country.",
            "Define neutral or customized cartons, corner protection, strapping, protective film and pallets. For wooden pallets or bracing, separately confirm added weight, IPPC or fumigation requirements, destination-country wood-packaging rules and forklift handling. Final loading should only be fixed after the gross weight of the finished packing is confirmed.",
          ],
        },
        bullets: {
          es: ["Piezas y metros cuadrados por caja", "Peso neto y peso bruto por caja", "Cajas por palé y peso del palé", "Dimensiones exteriores del empaque", "Payload aplicable y límites de transporte en origen y destino", "Estimación de carga basada en el peso bruto confirmado"],
          en: ["Pieces and square metres per carton", "Net and gross weight per carton", "Cartons per pallet and pallet weight", "External packing dimensions", "Applicable payload and origin/destination transport limits", "Loading estimate based on confirmed gross weight"],
        },
      },
      {
        id: "quotation-checklist",
        title: { es: "7. Lista de verificación completa para cotizar piso SPC", en: "7. Complete SPC quotation checklist" },
        paragraphs: {
          es: [
            "Una solicitud completa permite que cada proveedor de pisos SPC cotice la misma base y reduce las revisiones posteriores. Separe los requisitos obligatorios de las opciones abiertas y pida que cualquier excepción aparezca por escrito en la oferta.",
            "Ejemplo de configuración para solicitar una cotización: tabla de 182 × 1220 mm, estructura de 4 mm SPC + 1 mm IXPE, capa de desgaste de 0.3 mm, sistema de encaje Välinge y 14 piezas por caja. Es únicamente un ejemplo para mostrar el formato de consulta; las especificaciones, el empaque, la carga, la situación de la licencia y el precio finales dependen de la cotización formal y de la muestra aprobada.",
          ],
          en: [
            "A complete request allows each SPC flooring supplier to quote the same basis and reduces later revisions. Separate mandatory requirements from open options and ask suppliers to state every exception in writing.",
            "Quotation example: 182 × 1220 mm plank, 4 mm SPC + 1 mm IXPE construction, 0.3 mm wear layer, Välinge click system and 14 pieces per carton. This is only an example of how to format an inquiry. Final specifications, packing, loading, licence status and price remain subject to the formal quotation and approved sample.",
          ],
        },
        bullets: {
          es: ["Dimensiones de la tabla y tolerancias de producción", "Grosor total, capa de desgaste y recubrimiento UV", "Película decorativa, textura, brillo y bisel", "Perfil del sistema de encaje, licencia y tarifa aplicable", "Tipo, espesor y densidad de IXPE/EVA", "Piezas y metros cuadrados por caja; peso bruto por caja", "Caja neutra o personalizada; palés y protección requerida", "Cantidad total y cantidad por diseño", "Condiciones de pago, moneda, puerto FOB y vigencia de la oferta", "Puerto y país de destino", "Informes de ensayo exigidos por el mercado de destino", "Aprobación de muestra antes de producción", "Estimación de carga basada en el peso bruto confirmado"],
          en: ["Plank dimensions and production tolerances", "Total thickness, wear layer and UV coating", "Décor film, texture, gloss level and bevel", "Click profile, licence and applicable fee", "IXPE/EVA type, thickness and density", "Pieces and square metres per carton; gross weight per carton", "Neutral or customized cartons; pallets and protection required", "Total quantity and quantity per décor", "Payment terms, currency, FOB port and quotation validity", "Destination port and country", "Test reports required for the destination market", "Sample approval before production", "Container estimate based on confirmed gross weight"],
        },
      },
    ],
  },
  {
    slug: "spc-flooring-installation-guide",
    localizedSlug: { es: "guia-instalacion-piso-spc" },
    publishedAt: "2026-10-22",
    category: { es: "Guía de instalación", en: "Installation guide" },
    title: {
      es: "Guía de instalación de piso SPC: del contrapiso a la revisión final",
      en: "SPC Flooring Installation Guide: From Subfloor to Final Check",
    },
    seoTitle: {
      es: "Guía de instalación de piso SPC | SINOQI",
      en: "SPC Flooring Installation Guide | SINOQI",
    },
    description: {
      es: "Guía B2B para instalar piso SPC: contrapiso, humedad, almacenamiento, juntas, encaje, transiciones y revisión final antes de entregar la obra.",
      en: "B2B SPC flooring installation guide covering subfloors, moisture, storage, click joints, transitions and final inspection before project handover.",
    },
    introduction: {
      es: "Una buena instalación de piso SPC comienza antes de abrir la primera caja. El instalador debe confirmar el producto, revisar el contrapiso, planificar las juntas y seguir las instrucciones específicas del sistema de encaje. Esta guía ayuda a importadores, distribuidores y compradores de proyectos a preparar el trabajo, reducir errores evitables y definir qué debe verificarse antes de entregar la obra.",
      en: "A reliable SPC flooring installation starts before the first carton is opened. The installer must confirm the product, inspect the subfloor, plan movement gaps and follow the instructions for the specific click system. This guide helps importers, distributors and project buyers prepare the work, reduce avoidable errors and define what should be checked before handover.",
    },
    readingTime: { es: "9 min", en: "9 min" },
    cover: "/assets/spc-installation-01-cover.png",
    coverAlt: {
      es: "Ilustración de la instalación flotante de piso SPC con separadores perimetrales",
      en: "Illustration of floating SPC flooring installation with perimeter spacers",
    },
    coverCaption: {
      es: "Ilustración de instalación de piso SPC. El método exacto debe seguir la ficha técnica y las instrucciones del producto suministrado.",
      en: "SPC flooring installation illustration. The exact method must follow the technical data and instructions for the supplied product.",
    },
    scopeNote: {
      es: "Esta guía ofrece una lista de verificación para compradores y equipos de obra. No sustituye el manual del fabricante, la evaluación del contrapiso, las normas locales ni los requisitos específicos del proyecto. Confirme siempre tolerancias, humedad, barrera de vapor, aclimatación y juntas con la documentación vigente del producto.",
      en: "This guide is a checklist for buyers and site teams. It does not replace the manufacturer’s manual, subfloor assessment, local standards or project-specific requirements. Always confirm tolerances, moisture controls, vapour barrier, acclimation and movement gaps against the current product documentation.",
    },
    images: [
      {
        src: "/assets/spc-installation-02-subfloor.png",
        afterSectionId: "subfloor-moisture",
        alt: {
          es: "Ilustración de revisión de planicidad y humedad del contrapiso antes de instalar piso SPC",
          en: "Illustration of subfloor flatness and moisture checks before SPC flooring installation",
        },
        caption: {
          es: "Revise la planicidad, la humedad y el estado del contrapiso con los métodos exigidos por el proyecto y el producto.",
          en: "Check subfloor flatness, moisture and condition using the methods required by the project and product.",
        },
      },
      {
        src: "/assets/spc-installation-03-click-joint.png",
        afterSectionId: "click-installation",
        alt: {
          es: "Ilustración del alineado de dos tablas de piso SPC con sistema de encaje",
          en: "Illustration of aligning two SPC flooring planks with a click-lock joint",
        },
        caption: {
          es: "Alinee el sistema de encaje sin forzarlo y utilice únicamente las herramientas permitidas por las instrucciones del producto.",
          en: "Align the click joint without forcing it and use only the tools permitted by the product instructions.",
        },
      },
    ],
    cta: {
      eyebrow: { es: "Proyecto SPC", en: "SPC project" },
      title: { es: "Prepare su proyecto de piso SPC", en: "Prepare Your SPC Flooring Project" },
      body: {
        es: "Comparta las dimensiones, la estructura, la base, el sistema de encaje, la cantidad, el mercado de destino y los requisitos del proyecto. Confirmaremos la información disponible para la muestra y la cotización.",
        en: "Share the plank dimensions, construction, backing, click system, quantity, destination market and project requirements. We will confirm the available information for sampling and quotation.",
      },
    },
    faqs: [
      {
        question: { es: "¿Se puede instalar piso SPC sobre un piso existente?", en: "Can SPC flooring be installed over an existing floor?" },
        answer: {
          es: "Depende del piso existente y de las instrucciones del producto. La superficie debe ser estable, limpia, seca y cumplir la tolerancia de planicidad requerida. Los revestimientos blandos, las piezas sueltas, las zonas dañadas y cualquier fuente de humedad deben resolverse antes de instalar.",
          en: "It depends on the existing floor and the product instructions. The surface must be stable, clean, dry and within the required flatness tolerance. Soft coverings, loose sections, damaged areas and any moisture source must be resolved before installation.",
        },
      },
      {
        question: { es: "¿El piso SPC necesita barrera de vapor?", en: "Does SPC flooring require a vapour barrier?" },
        answer: {
          es: "La necesidad y el tipo de barrera dependen del contrapiso, la humedad medida, el sistema de piso y los requisitos locales. No asuma que una base IXPE o EVA sustituye automáticamente una barrera de vapor. Confirme la solución por escrito antes de instalar.",
          en: "The need and type of vapour barrier depend on the subfloor, measured moisture, flooring system and local requirements. Do not assume that IXPE or EVA backing automatically replaces a vapour barrier. Confirm the required solution in writing before installation.",
        },
      },
      {
        question: { es: "¿Es necesario aclimatar el piso SPC antes de instalarlo?", en: "Does SPC flooring need acclimation before installation?" },
        answer: {
          es: "Los requisitos cambian según la formulación, el empaque, el transporte y el fabricante. Mantenga las cajas planas y protegidas, verifique las condiciones del sitio y siga el tiempo y el rango ambiental indicados en las instrucciones vigentes del producto.",
          en: "Requirements vary by formulation, packing, transport conditions and manufacturer. Keep cartons flat and protected, verify site conditions and follow the time and environmental range stated in the current product instructions.",
        },
      },
      {
        question: { es: "¿Por qué se dañan o se abren las juntas del sistema de encaje?", en: "Why do SPC click joints become damaged or open?" },
        answer: {
          es: "Entre las causas posibles están un contrapiso fuera de tolerancia, residuos en el perfil, tablas forzadas, herramientas incorrectas, filas mal alineadas, juntas de movimiento insuficientes o cargas que impiden que el piso flotante se mueva. La causa debe evaluarse en el sitio antes de atribuirla al producto.",
          en: "Possible causes include a subfloor outside tolerance, debris in the profile, forced planks, incorrect tools, misaligned rows, insufficient movement gaps or loads that prevent the floating floor from moving. The cause should be assessed on site before it is attributed to the product.",
        },
      },
      {
        question: { es: "¿Qué debe incluir la entrega final de una instalación SPC?", en: "What should be included in an SPC installation handover?" },
        answer: {
          es: "Registre el producto y el lote, las condiciones del sitio, los controles del contrapiso, las instrucciones utilizadas, las áreas instaladas, las transiciones, cualquier excepción aprobada y las recomendaciones de limpieza y mantenimiento entregadas al cliente.",
          en: "Record the product and batch, site conditions, subfloor checks, instructions used, installed areas, transitions, any approved exceptions and the cleaning and maintenance guidance provided to the customer.",
        },
      },
    ],
    sections: [
      {
        id: "confirm-product-project",
        title: { es: "1. Confirme el producto y el proyecto antes de instalar", en: "1. Confirm the product and project before installation" },
        paragraphs: {
          es: [
            "Antes de abrir las cajas, compare la etiqueta, el código de diseño, el lote, las dimensiones, el grosor, la base y el sistema de encaje con la orden y la muestra aprobada. Mezclar referencias o instalar un producto diferente al especificado puede convertir una diferencia visible en un problema de toda la obra.",
            "Revise también el uso previsto, el tipo de contrapiso, las condiciones ambientales, las áreas conectadas, las puertas, los muebles fijos y las transiciones. Si la documentación del producto y el plano del proyecto no coinciden, detenga el trabajo y solicite una aclaración por escrito.",
          ],
          en: [
            "Before opening the cartons, compare the label, décor code, batch, dimensions, thickness, backing and click system with the order and approved sample. Mixing references or installing a product that differs from the specification can turn a visible variation into a project-wide problem.",
            "Review the intended use, subfloor type, environmental conditions, connected areas, doors, fixed furniture and transitions. If the product documentation and project plan do not agree, stop and request written clarification before installation.",
          ],
        },
        bullets: {
          es: ["Producto, diseño y lote correctos", "Cantidad suficiente para el área y el patrón previsto", "Cajas sin daños visibles ni exposición a humedad", "Manual de instalación correspondiente al producto", "Plano de juntas, puertas y perfiles de transición", "Responsable autorizado para aprobar excepciones"],
          en: ["Correct product, décor and batch", "Sufficient quantity for the area and planned layout", "Cartons without visible damage or moisture exposure", "Installation manual for the supplied product", "Plan for movement gaps, doors and transition profiles", "Authorized person for approving exceptions"],
        },
      },
      {
        id: "subfloor-moisture",
        title: { es: "2. Revise el contrapiso, la planicidad y la humedad", en: "2. Inspect the subfloor, flatness and moisture" },
        paragraphs: {
          es: [
            "El sistema de encaje distribuye las cargas entre las tablas, pero no corrige un contrapiso inestable o irregular. Retire residuos, repare zonas sueltas y confirme que la superficie cumpla la tolerancia indicada por el proveedor y la especificación del proyecto.",
            "La apariencia impermeable de la tabla no elimina el riesgo de humedad proveniente del concreto, la losa, filtraciones o condensación. Utilice el método de medición aplicable y documente los resultados. La barrera de vapor o el sistema de control de humedad deben seleccionarse según el contrapiso, el producto y las normas locales.",
          ],
          en: [
            "The click system distributes loads between planks, but it cannot correct an unstable or uneven subfloor. Remove debris, repair loose areas and confirm that the surface meets the tolerance stated by the supplier and project specification.",
            "A water-resistant plank does not remove the risk of moisture coming from concrete, the slab, leaks or condensation. Use the applicable measurement method and record the results. The vapour barrier or moisture-control system must be selected for the subfloor, product and local requirements.",
          ],
        },
        bullets: {
          es: ["Superficie estable, limpia y seca", "Planicidad comprobada con la herramienta y tolerancia especificadas", "Grietas, juntas y piezas sueltas evaluadas", "Humedad medida y registrada", "Barrera de vapor confirmada cuando corresponda", "Calefacción radiante y condiciones especiales aprobadas antes de instalar"],
          en: ["Stable, clean and dry surface", "Flatness checked with the specified tool and tolerance", "Cracks, joints and loose sections assessed", "Moisture measured and recorded", "Vapour barrier confirmed where required", "Radiant heating and special conditions approved before installation"],
        },
      },
      {
        id: "storage-acclimation",
        title: { es: "3. Almacene y acondicione el material según sus instrucciones", en: "3. Store and condition the material as instructed" },
        paragraphs: {
          es: [
            "Las cajas deben mantenerse planas, apoyadas de forma uniforme y protegidas de agua, sol directo y cambios extremos. No las coloque de pie ni sobre un soporte que pueda curvar las tablas.",
            "No existe un único tiempo de aclimatación válido para todos los pisos SPC. La necesidad depende del producto, el transporte y las condiciones del sitio. Registre la temperatura y otras condiciones solicitadas, y siga el manual vigente en lugar de aplicar una regla genérica.",
          ],
          en: [
            "Keep cartons flat, evenly supported and protected from water, direct sunlight and extreme changes. Do not store them upright or on supports that may bend the planks.",
            "There is no single acclimation time that applies to every SPC floor. Requirements depend on the product, transport and site conditions. Record the temperature and any other requested conditions, and follow the current manual rather than applying a generic rule.",
          ],
        },
        bullets: {
          es: ["Cajas planas y correctamente soportadas", "Área interior limpia y protegida", "Condiciones del sitio registradas", "Tiempo de acondicionamiento confirmado en el manual", "Cajas abiertas solo cuando indique el procedimiento", "Producto inspeccionado antes de cortar o instalar"],
          en: ["Cartons flat and properly supported", "Clean and protected indoor storage area", "Site conditions recorded", "Conditioning time confirmed in the manual", "Cartons opened only when the procedure allows", "Product inspected before cutting or installation"],
        },
      },
      {
        id: "layout-movement-gaps",
        title: { es: "4. Planifique la colocación y las juntas de movimiento", en: "4. Plan the layout and movement gaps" },
        paragraphs: {
          es: [
            "Mida el espacio antes de comenzar para evitar una última fila demasiado estrecha y para ubicar las juntas en zonas visualmente aceptables. Planifique la dirección de las tablas, el desplazamiento entre juntas de cabecera y la distribución de diseños antes de cortar.",
            "Un piso flotante necesita espacio para moverse alrededor de paredes, columnas, marcos, tuberías y otros elementos fijos. El ancho de la junta y la necesidad de perfiles intermedios dependen del sistema, las dimensiones del área y las instrucciones del producto. Los zócalos y perfiles deben cubrir la junta sin bloquear el piso.",
          ],
          en: [
            "Measure the room before starting so the final row is not impractically narrow and joints fall in visually acceptable positions. Plan plank direction, end-joint staggering and décor distribution before cutting.",
            "A floating floor needs room to move around walls, columns, frames, pipes and other fixed elements. Gap width and the need for intermediate profiles depend on the system, area dimensions and product instructions. Skirting and profiles should cover the gap without locking the floor in place.",
          ],
        },
        bullets: {
          es: ["Ancho de primera y última fila calculado", "Dirección y patrón aprobados", "Juntas de cabecera distribuidas según el manual", "Junta perimetral mantenida en todos los elementos fijos", "Perfiles de transición previstos antes de colocar", "Piso flotante no atrapado por zócalos, marcos o muebles fijos"],
          en: ["First- and final-row widths calculated", "Direction and pattern approved", "End joints staggered according to the manual", "Perimeter gap maintained at every fixed element", "Transition profiles planned before laying", "Floating floor not trapped by skirting, frames or fixed furniture"],
        },
      },
      {
        id: "click-installation",
        title: { es: "5. Instale el sistema de encaje sin forzar las juntas", en: "5. Install the click system without forcing the joints" },
        paragraphs: {
          es: [
            "El ángulo y la secuencia de montaje varían según el perfil. Mantenga el encaje limpio, alinee la tabla y siga el movimiento indicado por el proveedor. Si una junta no cierra, retírela y busque residuos, daños o desalineación; golpear con más fuerza puede ocultar el problema y dañar el perfil.",
            "Utilice un bloque de golpeo, barra de tracción u otra herramienta solo cuando el manual lo permita. Nunca golpee directamente el borde decorativo o el sistema de encaje. Revise cada fila a medida que avanza para evitar que una desviación pequeña se acumule en toda la habitación.",
          ],
          en: [
            "The assembly angle and sequence vary by click profile. Keep the joint clean, align the plank and follow the movement specified by the supplier. If a joint does not close, remove it and check for debris, damage or misalignment; additional force may hide the cause and damage the profile.",
            "Use a tapping block, pull bar or other tool only when the manual permits it. Never strike the decorative edge or click profile directly. Inspect each row as work progresses so a small deviation does not accumulate across the room.",
          ],
        },
        bullets: {
          es: ["Perfil limpio antes de unir", "Tabla alineada antes de aplicar presión", "Herramienta compatible con el sistema", "Bordes y esquinas protegidos durante el corte", "Juntas cerradas sin escalones visibles", "Filas revisadas antes de continuar"],
          en: ["Profile clean before joining", "Plank aligned before pressure is applied", "Tool compatible with the click system", "Edges and corners protected during cutting", "Joints closed without visible lipping", "Rows checked before work continues"],
        },
      },
      {
        id: "doors-transitions-fixed-elements",
        title: { es: "6. Resuelva puertas, transiciones y elementos fijos", en: "6. Resolve doors, transitions and fixed elements" },
        paragraphs: {
          es: [
            "Las puertas, los cambios de altura y las uniones con otros materiales deben planificarse antes de llegar a ellos. Confirme que exista espacio para el perfil, que la puerta conserve su funcionamiento y que el borde cortado quede protegido.",
            "No inmovilice un piso flotante con tornillos, adhesivo, marcos apretados o muebles fijos apoyados de forma incompatible con el sistema. En zonas expuestas a agua, aplique únicamente el detalle perimetral aprobado por el proveedor; sellar un borde no corrige humedad del contrapiso ni convierte cualquier instalación en apta para zonas húmedas.",
          ],
          en: [
            "Doorways, height changes and junctions with other materials should be planned before the installation reaches them. Confirm space for the profile, continued door operation and protection of cut edges.",
            "Do not immobilize a floating floor with screws, adhesive, tight frames or fixed furniture arranged incompatibly with the system. In water-exposed areas, use only the perimeter detail approved by the supplier; sealing an edge does not correct subfloor moisture or make every installation suitable for wet areas.",
          ],
        },
        bullets: {
          es: ["Marcos y hojas de puerta comprobados", "Perfiles adecuados para cambios de altura", "Juntas cubiertas sin bloquear el movimiento", "Cortes limpios en tuberías y elementos verticales", "Muebles fijos coordinados con el sistema flotante", "Detalle perimetral para zonas húmedas confirmado por escrito"],
          en: ["Door frames and leaves checked", "Correct profiles for height changes", "Gaps covered without blocking movement", "Clean cuts around pipes and vertical elements", "Fixed furniture coordinated with the floating system", "Wet-area perimeter detail confirmed in writing"],
        },
      },
      {
        id: "inspection-handover",
        title: { es: "7. Inspeccione y documente la entrega", en: "7. Inspect and document the handover" },
        paragraphs: {
          es: [
            "Antes de retirar la protección de obra, camine toda el área y revise juntas, bordes, transiciones, ruidos localizados y posibles daños. Corrija los problemas mientras todavía es posible identificar la fila o el detalle que los originó.",
            "La entrega debe registrar qué producto y lote se instalaron, qué controles se realizaron, qué excepciones fueron aprobadas y qué instrucciones de limpieza y mantenimiento recibió el cliente. Esta documentación ayuda al distribuidor, al instalador y al comprador a separar un problema de instalación de una consulta sobre el producto.",
          ],
          en: [
            "Before removing site protection, walk the full area and inspect joints, edges, transitions, localized noise and possible damage. Correct issues while the row or detail that caused them can still be identified.",
            "The handover should record the product and batch installed, checks completed, approved exceptions and cleaning and maintenance instructions given to the customer. This documentation helps the distributor, installer and buyer distinguish an installation issue from a product question.",
          ],
        },
        bullets: {
          es: ["Superficie limpia y sin daños visibles", "Juntas y bordes revisados", "Movimiento de puertas confirmado", "Perfiles y zócalos terminados", "Fotos y controles del sitio archivados", "Producto de reserva, limpieza y mantenimiento entregados al cliente"],
          en: ["Surface clean and free from visible damage", "Joints and edges inspected", "Door movement confirmed", "Profiles and skirting completed", "Site photographs and checks archived", "Spare product, cleaning and maintenance guidance handed over"],
        },
      },
    ],
  },
  {
    slug: "spc-flooring-packaging-container-loading-guide",
    localizedSlug: { es: "guia-empaque-carga-contenedores-piso-spc" },
    publishedAt: "2026-10-23",
    category: { es: "Guía de importación", en: "Import guide" },
    title: {
      es: "Guía de empaque y carga de contenedores para piso SPC",
      en: "SPC Flooring Packaging and Container Loading Guide",
    },
    seoTitle: {
      es: "Empaque y carga de piso SPC | SINOQI",
      en: "SPC Flooring Packaging & Container Loading | SINOQI",
    },
    description: {
      es: "Aprenda a confirmar cajas, peso bruto, palés, payload y estimaciones de carga de piso SPC antes de aprobar un plan de empaque para exportación.",
      en: "Learn how to confirm SPC flooring cartons, gross weight, pallets, container payload and loading estimates before approving an export packing plan.",
    },
    introduction: {
      es: "Un plan de empaque para piso SPC no se define únicamente por cuántos metros cuadrados caben en una caja. El comprador también debe revisar el peso bruto, la resistencia del cartón, el uso de palés, la manipulación y los límites aplicables al contenedor. Esta guía ayuda a importadores, distribuidores y compradores de proyectos a solicitar datos comparables y a detectar supuestos que deben confirmarse antes del embarque.",
      en: "An SPC flooring packing plan is not defined only by how many square metres fit in a carton. Buyers also need to review gross weight, carton construction, pallet use, handling and the limits that apply to the container. This guide helps importers, distributors and project buyers request comparable data and identify assumptions that must be confirmed before shipment.",
    },
    readingTime: { es: "9 min", en: "9 min" },
    cover: "/assets/spc-packaging-01-cover.png",
    coverAlt: {
      es: "Ilustración de tablas, cajas y palé para planificar el empaque de piso SPC",
      en: "Illustration of SPC flooring planks, cartons and a pallet for packing-plan review",
    },
    coverCaption: {
      es: "Línea de empaque automático para piso SPC. La configuración final debe confirmarse con la especificación, la muestra de caja y el peso bruto del pedido.",
      en: "Automatic SPC flooring packaging line. The final configuration should be confirmed against the specification, carton sample and order gross weight.",
    },
    coverVideo: {
      src: "/assets/spc-packaging-automatic-line.mp4",
      label: {
        es: "Video de una línea de empaque automático para piso SPC",
        en: "Video of an automatic packaging line for SPC flooring",
      },
      caption: {
        es: "Línea de empaque automático para piso SPC. El empaque exacto depende de la especificación confirmada para cada pedido.",
        en: "Automatic packaging line for SPC flooring. Exact packing depends on the specification confirmed for each order.",
      },
    },
    scopeNote: {
      es: "Esta guía no establece una carga universal por contenedor. La cantidad final depende del producto, el empaque terminado, el payload del equipo, la naviera, la ruta, el transporte terrestre y las reglas del país de destino. Confirme estos datos antes de reservar el embarque.",
      en: "This guide does not define a universal container quantity. Final loading depends on the product, finished packing, equipment payload, carrier, route, inland transport and destination-country rules. Confirm these details before booking the shipment.",
    },
    videos: [
      {
        src: "/assets/spc-packaging-stock.mp4",
        afterSectionId: "carton-construction",
        label: {
          es: "Video de inventario de piso SPC empacado",
          en: "Video of packed SPC flooring inventory",
        },
        caption: {
          es: "Inventario de piso SPC empacado. Revise el estado de las cajas, la identificación y la protección antes de autorizar el embarque.",
          en: "Packed SPC flooring inventory. Check carton condition, identification and protection before shipment is authorized.",
        },
      },
    ],
    faqTitle: {
      es: "Preguntas frecuentes sobre empaque y carga de piso SPC",
      en: "SPC flooring packaging and loading FAQ",
    },
    cta: {
      eyebrow: { es: "Plan de empaque SPC", en: "SPC packing plan" },
      title: { es: "Solicite una cotización de piso SPC con datos de empaque", en: "Request an SPC Flooring Quote with Packing Data" },
      body: {
        es: "Envíenos las dimensiones, la estructura, las piezas por caja, la cantidad por diseño, el tipo de empaque y el puerto de destino. Prepararemos la cotización y la estimación de carga con base en la especificación confirmada.",
        en: "Send us the plank dimensions, construction, pieces per carton, quantity per décor, packing type and destination port. We will prepare the quotation and loading estimate from the confirmed specification.",
      },
    },
    faqs: [
      {
        question: { es: "¿Cuántos metros cuadrados de piso SPC caben en un contenedor?", en: "How many square metres of SPC flooring fit in a container?" },
        answer: {
          es: "No existe una cifra universal. Debe calcularse con las dimensiones y piezas por caja, el peso bruto confirmado, el uso de palés, el payload del contenedor y las restricciones de la naviera, la ruta, el puerto y el transporte terrestre.",
          en: "There is no universal figure. It must be calculated from plank dimensions and pieces per carton, confirmed gross weight, pallet use, container payload and carrier, route, port and inland-transport restrictions.",
        },
      },
      {
        question: { es: "¿Por qué es importante el peso bruto por caja?", en: "Why is gross weight per carton important?" },
        answer: {
          es: "El peso bruto incluye el producto y el empaque. Se utiliza para estimar la carga, revisar la manipulación manual, calcular el peso del palé y comprobar que el plan no exceda los límites aplicables.",
          en: "Gross weight includes the product and its packaging. It is used to estimate loading, review manual handling, calculate pallet weight and check that the plan does not exceed applicable limits.",
        },
      },
      {
        question: { es: "¿Es mejor enviar piso SPC con palés o sin palés?", en: "Is it better to ship SPC flooring with or without pallets?" },
        answer: {
          es: "Depende de la descarga, el almacenamiento, la mano de obra, el costo y el peso disponible. Los palés pueden facilitar la manipulación, pero añaden peso y ocupan espacio. El comprador debe confirmar también las reglas de embalaje de madera del destino.",
          en: "It depends on unloading, storage, labour, cost and available payload. Pallets can simplify handling, but they add weight and occupy space. Buyers must also confirm destination rules for wood packaging.",
        },
      },
      {
        question: { es: "¿Qué datos deben aparecer en la etiqueta de una caja de piso SPC?", en: "What information should appear on an SPC flooring carton label?" },
        answer: {
          es: "La etiqueta debe acordarse para el pedido. Normalmente se revisan la referencia del producto, el diseño, el lote, las dimensiones, las piezas y metros cuadrados por caja, y cualquier marca regulatoria o comercial que corresponda. No imprima afirmaciones que no estén documentadas.",
          en: "The label should be agreed for the order. Typical review fields include product reference, décor, batch, dimensions, pieces and square metres per carton, plus any applicable regulatory or commercial marks. Do not print claims that are not documented.",
        },
      },
      {
        question: { es: "¿Cuándo debe confirmarse la carga final del contenedor?", en: "When should final container loading be confirmed?" },
        answer: {
          es: "La estimación puede prepararse durante la cotización, pero la carga final debe revisarse después de confirmar la especificación, el empaque terminado, el peso bruto, el plan de palés y los límites de la reserva de transporte.",
          en: "An estimate can be prepared during quotation, but final loading should be reviewed after the specification, finished packing, gross weight, pallet plan and booking limits are confirmed.",
        },
      },
    ],
    sections: [
      {
        id: "carton-data",
        title: { es: "1. Empiece por las piezas y los metros cuadrados por caja", en: "1. Start with pieces and square metres per carton" },
        paragraphs: {
          es: [
            "El cálculo comienza con las dimensiones útiles de la tabla y el número de piezas. Esos datos determinan los metros cuadrados por caja y deben coincidir en la cotización, la lista de empaque, la etiqueta y los documentos comerciales.",
            "No compare dos ofertas solo por cajas o por metros cuadrados. Una diferencia en el largo, ancho o piezas por caja cambia el peso, la altura del paquete, la manipulación y la distribución dentro del contenedor. Solicite una ficha de empaque para cada estructura cotizada.",
          ],
          en: [
            "The calculation starts with usable plank dimensions and the number of pieces. These determine square metres per carton and should match across the quotation, packing list, carton label and commercial documents.",
            "Do not compare offers by carton count or square metres alone. A change in plank length, width or pieces per carton changes weight, pack height, handling and container distribution. Request a packing specification for every quoted construction.",
          ],
        },
        bullets: {
          es: ["Largo y ancho nominales de la tabla", "Piezas por caja", "Metros cuadrados por caja", "Peso neto y bruto por caja", "Dimensiones exteriores de la caja", "Correspondencia entre etiqueta, cotización y lista de empaque"],
          en: ["Nominal plank length and width", "Pieces per carton", "Square metres per carton", "Net and gross weight per carton", "External carton dimensions", "Consistency between label, quotation and packing list"],
        },
      },
      {
        id: "carton-construction",
        title: { es: "2. Defina la caja, la protección y el etiquetado", en: "2. Define the carton, protection and labelling" },
        paragraphs: {
          es: [
            "Una caja neutra y una caja personalizada no tienen el mismo proceso, costo ni tiempo de preparación. Si se requiere impresión, confirme el diseño, los idiomas, los códigos, las marcas permitidas y quién aprueba el archivo antes de producir.",
            "La protección debe responder al producto y a la ruta. Revise el cartón, las protecciones de borde, la bolsa o película, los flejes y la forma de apilar. La muestra de caja aprobada debe mostrar cómo queda el producto terminado, no solo el diseño gráfico.",
          ],
          en: [
            "Neutral and customized cartons do not have the same process, cost or preparation time. If printing is required, confirm artwork, languages, codes, permitted marks and the person responsible for approving the file before production.",
            "Protection should reflect the product and route. Review carton construction, edge protection, bag or film, strapping and stacking method. The approved carton sample should show the finished pack, not only the graphic design.",
          ],
        },
        bullets: {
          es: ["Caja neutra o personalizada", "Archivo de impresión y aprobación", "Protección de bordes y esquinas", "Bolsa, película y flejes", "Código de diseño, lote y datos de la caja", "Afirmaciones y marcas respaldadas por documentación"],
          en: ["Neutral or customized carton", "Print artwork and approval", "Edge and corner protection", "Bag, film and straps", "Décor code, batch and carton data", "Claims and marks supported by documentation"],
        },
      },
      {
        id: "pallets-wood-packaging",
        title: { es: "3. Confirme palés, madera y método de descarga", en: "3. Confirm pallets, wood packaging and unloading method" },
        paragraphs: {
          es: [
            "El uso de palés debe decidirse según la descarga y el almacenamiento del comprador. Un palé puede facilitar el uso de montacargas y separar la mercancía del piso, pero añade peso, altura y costo, y puede reducir la cantidad transportable.",
            "Cuando se utilice madera, confirme las reglas del país de destino, incluida la necesidad de material conforme con IPPC, tratamiento o documentación aplicable. También revise las dimensiones, el peso del palé, la entrada para horquillas y la capacidad del equipo que realizará la descarga.",
          ],
          en: [
            "Pallet use should be decided around the buyer’s unloading and storage process. A pallet can support forklift handling and keep goods off the floor, but it adds weight, height and cost and may reduce the quantity that can be transported.",
            "When wood is used, confirm destination-country rules, including any applicable IPPC-compliant material, treatment or documentation. Also review pallet dimensions, pallet weight, fork entry and the capacity of the equipment that will unload the goods.",
          ],
        },
        bullets: {
          es: ["Carga con o sin palé", "Material, dimensiones y peso del palé", "Requisitos IPPC o de tratamiento", "Cajas por palé y patrón de apilado", "Protección, flejes y película exterior", "Montacargas y condiciones de descarga en destino"],
          en: ["Palletized or floor-loaded cargo", "Pallet material, dimensions and weight", "IPPC or treatment requirements", "Cartons per pallet and stacking pattern", "Protection, straps and outer film", "Forklift and destination unloading conditions"],
        },
      },
      {
        id: "gross-weight",
        title: { es: "4. Utilice el peso bruto confirmado, no una estimación genérica", en: "4. Use confirmed gross weight, not a generic estimate" },
        paragraphs: {
          es: [
            "El peso teórico del núcleo no basta para cerrar una carga. El peso bruto incorpora las tablas, la base IXPE o EVA cuando corresponda, la caja, las protecciones y otros materiales. Si hay palés o refuerzos, su peso debe añadirse por separado.",
            "Durante la cotización puede utilizarse una estimación claramente identificada, pero debe actualizarse cuando se aprueban la muestra, las piezas por caja y el empaque. Una pequeña diferencia repetida en muchas cajas puede alterar el peso total y la distribución de la carga.",
          ],
          en: [
            "Theoretical core weight is not enough to finalize loading. Gross weight includes the planks, IXPE or EVA backing where applicable, carton, protection and other packing materials. Pallets or timber bracing must be added separately.",
            "A clearly identified estimate can be used during quotation, but it should be updated after the sample, pieces per carton and packing are approved. A small difference repeated across many cartons can change total weight and load distribution.",
          ],
        },
        bullets: {
          es: ["Peso neto del producto", "Peso bruto de la caja terminada", "Peso de cada palé y protección adicional", "Número de cajas y palés", "Peso total calculado", "Verificación antes de reservar y antes de cargar"],
          en: ["Product net weight", "Finished-carton gross weight", "Weight of each pallet and additional protection", "Number of cartons and pallets", "Calculated total weight", "Verification before booking and before loading"],
        },
      },
      {
        id: "payload-loading",
        title: { es: "5. Compare el peso total con el payload y la ruta", en: "5. Compare total weight with payload and route limits" },
        paragraphs: {
          es: [
            "El piso SPC suele estar limitado por peso antes que por volumen, pero eso no significa que un tipo de contenedor admita una cantidad fija. El payload indicado para el equipo es solo una parte de la revisión; también pueden aplicar límites de la naviera, carreteras, puertos, terminales y países de tránsito o destino.",
            "El plan debe mantener el peso dentro de los límites aplicables y distribuirlo de forma adecuada. Confirme con el transitario o la naviera el equipo reservado y cualquier requisito de peso verificado antes de autorizar la carga.",
          ],
          en: [
            "SPC flooring often reaches a weight limit before a volume limit, but this does not mean that one container type carries a fixed quantity. The equipment payload is only one part of the review; carrier, road, port, terminal and transit- or destination-country limits may also apply.",
            "The plan must stay within applicable limits and distribute weight appropriately. Confirm the booked equipment and any verified-weight requirements with the forwarder or carrier before loading is authorized.",
          ],
        },
        bullets: {
          es: ["Tipo y payload del contenedor reservado", "Tara y peso bruto máximo aplicables", "Límites de la naviera y la ruta", "Restricciones de carretera y puerto", "Distribución de peso y aseguramiento de la carga", "Requisito de peso verificado para el embarque"],
          en: ["Booked container type and payload", "Applicable tare and maximum gross weight", "Carrier and route limits", "Road and port restrictions", "Weight distribution and cargo securing", "Verified-weight requirement for shipment"],
        },
      },
      {
        id: "loading-handling",
        title: { es: "6. Revise la secuencia de carga y la manipulación", en: "6. Review loading sequence and handling" },
        paragraphs: {
          es: [
            "Una cifra total no explica cómo se colocarán las cajas o los palés. Solicite un plano o una secuencia cuando la mezcla incluya varios diseños, lotes o especificaciones. Así se puede coordinar la descarga y evitar que la mercancía prioritaria quede inaccesible.",
            "El contenedor debe inspeccionarse antes de cargar para detectar daños visibles, humedad, olores o contaminación. La mercancía debe protegerse contra movimiento y puntos de presión con métodos compatibles con el producto y las reglas de transporte.",
          ],
          en: [
            "A total quantity does not explain how cartons or pallets will be positioned. Request a plan or sequence when the load contains multiple décors, batches or specifications. This supports unloading and avoids placing priority goods where they cannot be accessed.",
            "The container should be inspected before loading for visible damage, moisture, odour or contamination. Goods should be protected against movement and pressure points using methods compatible with the product and transport rules.",
          ],
        },
        bullets: {
          es: ["Inspección previa del contenedor", "Secuencia por diseño, lote o referencia", "Orientación y patrón de apilado", "Protección contra desplazamiento y presión", "Acceso para la descarga", "Registro fotográfico acordado"],
          en: ["Pre-loading container inspection", "Sequence by décor, batch or reference", "Orientation and stacking pattern", "Protection against movement and pressure", "Access for unloading", "Agreed photographic record"],
        },
      },
      {
        id: "packing-document-checklist",
        title: { es: "7. Lista de verificación para aprobar el empaque y la carga", en: "7. Packing and loading approval checklist" },
        paragraphs: {
          es: [
            "Antes de aprobar el pedido, reúna la especificación del producto, la ficha de empaque y las condiciones logísticas en una sola revisión. Pida que cualquier dato provisional aparezca como estimación y que se actualice cuando el peso real esté disponible.",
            "La lista de empaque, la factura y las etiquetas deben utilizar referencias coherentes. Confirme también el puerto de destino, el consignatario, las marcas de embarque, los documentos requeridos y quién autoriza cambios después de la aprobación.",
          ],
          en: [
            "Before approving the order, bring the product specification, packing data and logistics conditions into one review. Ask suppliers to identify provisional figures as estimates and update them when actual weight becomes available.",
            "The packing list, invoice and labels should use consistent references. Also confirm destination port, consignee, shipping marks, required documents and the person authorized to approve changes after sign-off.",
          ],
        },
        bullets: {
          es: ["Dimensiones y estructura del piso SPC", "Piezas y metros cuadrados por caja", "Peso neto y bruto confirmado", "Caja, etiqueta y protección aprobadas", "Palés, madera y requisitos IPPC", "Cantidad por diseño y lote", "Tipo de contenedor y payload aplicable", "Estimación de carga y distribución", "Puerto de destino y método de descarga", "Lista de empaque, factura y marcas de embarque", "Responsable de aprobación y control de cambios"],
          en: ["SPC flooring dimensions and construction", "Pieces and square metres per carton", "Confirmed net and gross weight", "Approved carton, label and protection", "Pallets, timber and IPPC requirements", "Quantity by décor and batch", "Container type and applicable payload", "Loading estimate and distribution", "Destination port and unloading method", "Packing list, invoice and shipping marks", "Approval owner and change control"],
        },
      },
    ],
  },
  {
    slug: "spc-flooring-quality-inspection-checklist",
    localizedSlug: { es: "lista-inspeccion-calidad-piso-spc" },
    publishedAt: "2026-10-26",
    category: { es: "Control de calidad", en: "Quality control" },
    title: {
      es: "Lista de inspección de calidad del piso SPC antes del embarque",
      en: "SPC Flooring Quality Inspection Checklist Before Shipment",
    },
    seoTitle: {
      es: "Inspección de calidad del piso SPC | SINOQI",
      en: "SPC Flooring Quality Inspection Checklist | SINOQI",
    },
    description: {
      es: "Revise muestras, dimensiones, superficie, encaje, base, empaque y registros antes de autorizar el embarque de un pedido de piso SPC.",
      en: "Check samples, dimensions, surface, click joints, backing, packing and records before authorizing an SPC flooring order for shipment.",
    },
    introduction: {
      es: "Una inspección de piso SPC debe comparar el pedido terminado con criterios acordados, no con una impresión general de que el producto “se ve bien”. Para importadores, distribuidores y compradores de proyectos, el objetivo es confirmar la identidad del producto, registrar resultados verificables y resolver cualquier desviación antes de autorizar el embarque.",
      en: "An SPC flooring inspection should compare the finished order against agreed criteria, not against a general impression that the product “looks good.” For importers, distributors and project buyers, the objective is to confirm product identity, record verifiable results and resolve any deviation before shipment is authorized.",
    },
    readingTime: { es: "9 min", en: "9 min" },
    cover: "/assets/spc-inspection-01-cover.png",
    coverAlt: {
      es: "Ilustración de una inspección de piso SPC con tablas, calibre, regla y lista de verificación",
      en: "Illustration of an SPC flooring inspection with planks, caliper, straightedge and checklist",
    },
    coverCaption: {
      es: "Ilustración de inspección de piso SPC. Los métodos, tolerancias y criterios de aceptación deben acordarse para cada pedido.",
      en: "SPC flooring inspection illustration. Methods, tolerances and acceptance criteria should be agreed for each order.",
    },
    scopeNote: {
      es: "Esta guía no sustituye una especificación técnica, un plan de muestreo acordado ni los requisitos del mercado de destino. Defina por escrito los métodos, tolerancias, documentos y responsables antes de la producción. Cuando se requieran ensayos de laboratorio, utilice el método y el laboratorio aceptados para el proyecto.",
      en: "This guide does not replace a technical specification, an agreed sampling plan or destination-market requirements. Define methods, tolerances, documents and responsibilities in writing before production. Where laboratory testing is required, use the method and laboratory accepted for the project.",
    },
    images: [
      {
        src: "/assets/spc-inspection-02-dimensions.png",
        afterSectionId: "dimensions-tolerances",
        alt: {
          es: "Ilustración de medición del grosor de una tabla de piso SPC con un calibre digital",
          en: "Illustration of measuring an SPC flooring plank with a digital caliper",
        },
        caption: {
          es: "Registre el método, el punto de medición y el resultado; no compare cifras obtenidas con procedimientos diferentes.",
          en: "Record the method, measurement point and result; do not compare figures obtained with different procedures.",
        },
      },
      {
        src: "/assets/spc-inspection-03-click-packing.png",
        afterSectionId: "click-backing-assembly",
        alt: {
          es: "Ilustración de revisión del sistema de encaje, la base y las cajas de piso SPC",
          en: "Illustration of SPC flooring click-system, backing and carton inspection",
        },
        caption: {
          es: "Revise el encaje, la base y el empaque contra la muestra y la especificación aprobadas para el pedido.",
          en: "Check the click profile, backing and packing against the sample and specification approved for the order.",
        },
      },
    ],
    faqTitle: {
      es: "Preguntas frecuentes sobre la inspección de piso SPC",
      en: "SPC flooring inspection FAQ",
    },
    cta: {
      eyebrow: { es: "Pedido de piso SPC", en: "SPC flooring order" },
      title: { es: "Prepare una especificación verificable antes de cotizar", en: "Prepare a Verifiable Specification Before Quotation" },
      body: {
        es: "Envíenos las dimensiones, la estructura, la capa de desgaste, la base, el sistema de encaje, el empaque, los informes requeridos y el mercado de destino. Confirmaremos qué datos pueden incluirse en la muestra, la cotización y la documentación del pedido.",
        en: "Send us the dimensions, construction, wear layer, backing, click system, packing, required reports and destination market. We will confirm which details can be included in the sample, quotation and order documentation.",
      },
    },
    faqs: [
      {
        question: { es: "¿Cuándo debe inspeccionarse un pedido de piso SPC?", en: "When should an SPC flooring order be inspected?" },
        answer: {
          es: "Los puntos de control dependen del pedido. La muestra y la especificación deben aprobarse antes de la producción, mientras que la inspección previa al embarque debe realizarse cuando haya suficiente producto terminado y empacado para evaluar el lote según el plan acordado.",
          en: "Control points depend on the order. The sample and specification should be approved before production, while the pre-shipment inspection should take place when enough finished and packed goods are available to assess the lot under the agreed plan.",
        },
      },
      {
        question: { es: "¿Una muestra aprobada es suficiente para controlar la calidad?", en: "Is an approved sample enough to control quality?" },
        answer: {
          es: "No por sí sola. La muestra es una referencia visual y física, pero debe acompañarse de una especificación escrita, tolerancias, métodos de medición, requisitos de empaque y documentos aplicables. También debe identificarse y conservarse correctamente.",
          en: "Not by itself. A sample is a visual and physical reference, but it should be supported by a written specification, tolerances, measurement methods, packing requirements and applicable documents. It must also be correctly identified and retained.",
        },
      },
      {
        question: { es: "¿Qué dimensiones deben comprobarse en el piso SPC?", en: "Which SPC flooring dimensions should be checked?" },
        answer: {
          es: "Según la especificación, pueden revisarse largo, ancho, grosor total, escuadra, rectitud, bisel y otros elementos definidos. La capa de desgaste y la base requieren métodos de verificación apropiados y no deben inferirse únicamente del grosor total.",
          en: "Depending on the specification, checks may include length, width, total thickness, squareness, straightness, bevel and other defined features. Wear layer and backing require appropriate verification methods and should not be inferred from total thickness alone.",
        },
      },
      {
        question: { es: "¿Cómo debe evaluarse la variación de color o diseño?", en: "How should colour or décor variation be evaluated?" },
        answer: {
          es: "Compare tablas completas bajo una iluminación acordada con la muestra aprobada y con piezas tomadas de diferentes cajas. Distinga la variación prevista del diseño de manchas, diferencias de lote u otros defectos no aceptados.",
          en: "Compare full planks under agreed lighting with the approved sample and with pieces taken from different cartons. Separate intended design variation from staining, batch differences or other unaccepted defects.",
        },
      },
      {
        question: { es: "¿Qué debe ocurrir si la inspección encuentra una desviación?", en: "What should happen if an inspection finds a deviation?" },
        answer: {
          es: "Registre el hallazgo, la cantidad afectada, las referencias y la evidencia. El comprador y el proveedor deben acordar por escrito la clasificación, el retrabajo, la reposición, una nueva inspección u otra disposición antes de autorizar el embarque.",
          en: "Record the finding, affected quantity, references and evidence. Buyer and supplier should agree in writing on classification, rework, replacement, reinspection or another disposition before shipment is authorized.",
        },
      },
    ],
    sections: [
      {
        id: "inspection-basis",
        title: { es: "1. Defina la base de la inspección antes de producir", en: "1. Define the inspection basis before production" },
        paragraphs: {
          es: [
            "Una inspección solo es útil cuando el inspector sabe contra qué debe comparar el producto. Reúna la orden de compra, la especificación confirmada, la muestra aprobada, el arte de la caja y cualquier informe o requisito del mercado de destino que forme parte del acuerdo.",
            "Defina también quién toma la decisión final. El inspector debe registrar hechos y resultados, pero la aceptación de una desviación comercial o técnica corresponde a la parte autorizada. Evite resolver diferencias importantes únicamente por mensajes informales.",
          ],
          en: [
            "An inspection is useful only when the inspector knows what the product must be compared against. Assemble the purchase order, confirmed specification, approved sample, carton artwork and any report or destination-market requirement included in the agreement.",
            "Also define who makes the final decision. The inspector should record facts and results, but acceptance of a commercial or technical deviation belongs to the authorized party. Avoid resolving material differences only through informal messages.",
          ],
        },
        bullets: {
          es: ["Orden y especificación vigentes", "Muestra aprobada identificada", "Criterios visuales y dimensionales", "Métodos de medición", "Requisitos de empaque y etiquetado", "Responsable autorizado para aceptar desviaciones"],
          en: ["Current order and specification", "Identified approved sample", "Visual and dimensional criteria", "Measurement methods", "Packing and labelling requirements", "Authorized owner for deviation decisions"],
        },
      },
      {
        id: "sampling-traceability",
        title: { es: "2. Acorde el muestreo y mantenga la trazabilidad", en: "2. Agree sampling and maintain traceability" },
        paragraphs: {
          es: [
            "No existe un tamaño de muestra único para todos los pedidos. El plan debe considerar el tamaño del lote, los diseños, los lotes de producción, la criticidad de cada característica y el nivel de riesgo aceptado por el comprador. Si se utiliza un estándar de muestreo, indique la versión, el nivel y los criterios acordados.",
            "Seleccione cajas de diferentes posiciones y registre el lote, el diseño y la ubicación. Una muestra concentrada en una sola caja o palé puede ocultar diferencias entre turnos, lotes o etapas de empaque.",
          ],
          en: [
            "There is no single sample size for every order. The plan should consider lot size, décors, production batches, the criticality of each characteristic and the buyer’s accepted risk. If a sampling standard is used, state the version, level and agreed criteria.",
            "Select cartons from different positions and record batch, décor and location. A sample concentrated in one carton or pallet may miss differences between shifts, batches or packing stages.",
          ],
        },
        bullets: {
          es: ["Tamaño y composición del lote", "Cantidad por diseño y lote", "Plan y momento de muestreo", "Cajas tomadas de distintas posiciones", "Identificación de cada muestra", "Registro de fotos y resultados por referencia"],
          en: ["Lot size and composition", "Quantity by décor and batch", "Sampling plan and timing", "Cartons selected from different positions", "Identification of every sample", "Photographs and results recorded by reference"],
        },
      },
      {
        id: "dimensions-tolerances",
        title: { es: "3. Compruebe dimensiones, tolerancias y construcción", en: "3. Check dimensions, tolerances and construction" },
        paragraphs: {
          es: [
            "Confirme el largo, ancho y grosor total con herramientas adecuadas y en los puntos indicados por el método acordado. Cuando corresponda, revise también escuadra, rectitud, bisel y cualquier tolerancia funcional que pueda afectar el montaje.",
            "No deduzca la capa de desgaste, la base acústica o la formulación del núcleo únicamente a partir del grosor total o del peso. Estas características requieren documentación o métodos específicos. Registre el equipo utilizado y evite comparar resultados obtenidos con procedimientos diferentes.",
          ],
          en: [
            "Confirm length, width and total thickness with suitable tools and at the points required by the agreed method. Where applicable, also check squareness, straightness, bevel and any functional tolerance that can affect assembly.",
            "Do not infer wear layer, acoustic backing or core formulation from total thickness or weight alone. These characteristics require documentation or specific methods. Record the equipment used and avoid comparing results obtained through different procedures.",
          ],
        },
        bullets: {
          es: ["Largo, ancho y grosor total", "Método y puntos de medición", "Escuadra y rectitud cuando se especifiquen", "Geometría y consistencia del bisel", "Estructura y base correctas", "Resultados comparados con tolerancias acordadas"],
          en: ["Length, width and total thickness", "Measurement method and points", "Squareness and straightness where specified", "Bevel geometry and consistency", "Correct construction and backing", "Results compared with agreed tolerances"],
        },
      },
      {
        id: "surface-decor",
        title: { es: "4. Revise superficie, diseño, color y acabado", en: "4. Review surface, décor, colour and finish" },
        paragraphs: {
          es: [
            "Examine tablas completas bajo una iluminación representativa. Compare el color, el diseño, la textura, el brillo y el bisel con la muestra aprobada, tomando piezas de varias cajas para observar la consistencia del lote y la variación prevista del diseño.",
            "Registre rayas, manchas, contaminación, impresión incompleta, daños de borde u otros hallazgos según las categorías acordadas. Una fotografía aislada puede distorsionar el color; incluya referencias, iluminación y vistas generales cuando documente una diferencia visual.",
          ],
          en: [
            "Examine full planks under representative lighting. Compare colour, décor, texture, gloss and bevel with the approved sample, taking pieces from several cartons to observe batch consistency and intended design variation.",
            "Record scratches, stains, contamination, incomplete printing, edge damage or other findings under the agreed categories. A single photograph can distort colour; include references, lighting information and wider views when documenting a visual difference.",
          ],
        },
        bullets: {
          es: ["Código de diseño y lote", "Color bajo iluminación acordada", "Textura y nivel de brillo", "Repetición y variación visual", "Bisel y acabado de bordes", "Rayas, manchas, impresión y contaminación"],
          en: ["Décor code and batch", "Colour under agreed lighting", "Texture and gloss level", "Pattern repeat and visual variation", "Bevel and edge finish", "Scratches, stains, printing and contamination"],
        },
      },
      {
        id: "click-backing-assembly",
        title: { es: "5. Inspeccione el encaje, la base y el montaje", en: "5. Inspect click profiles, backing and assembly" },
        paragraphs: {
          es: [
            "Revise visualmente el perfil de encaje para detectar rebabas, roturas, residuos o mecanizado irregular. Arme varias tablas siguiendo la secuencia indicada para el perfil y observe la alineación, el cierre de las juntas y cualquier escalón visible sin forzar las piezas.",
            "Cuando el producto incluya IXPE o EVA, confirme el material y el espesor especificados mediante el método acordado, además de la cobertura, la adhesión y el estado de los bordes. El nombre de una licencia o sistema de encaje no sustituye la inspección del producto terminado.",
          ],
          en: [
            "Visually inspect the click profile for burrs, breakage, debris or irregular machining. Assemble several planks using the sequence specified for the profile and observe alignment, joint closure and visible lipping without forcing the pieces.",
            "Where IXPE or EVA is included, confirm the specified material and thickness through the agreed method, together with coverage, bonding and edge condition. A licence or click-system name does not replace inspection of the finished product.",
          ],
        },
        bullets: {
          es: ["Perfil correcto y limpio", "Sin rebabas ni roturas visibles", "Secuencia de montaje correspondiente", "Juntas alineadas y cerradas", "Base correcta, uniforme y adherida", "Muestras conservadas si aparece una desviación"],
          en: ["Correct and clean profile", "No visible burrs or breakage", "Correct assembly sequence", "Aligned and closed joints", "Correct, even and bonded backing", "Samples retained when a deviation appears"],
        },
      },
      {
        id: "packing-label-weight",
        title: { es: "6. Verifique empaque, etiquetas y peso", en: "6. Verify packing, labels and weight" },
        paragraphs: {
          es: [
            "Compruebe las piezas y los metros cuadrados por caja, el estado del cartón, la protección interior, la etiqueta, las marcas de embarque y la configuración del palé. Las referencias deben coincidir con la cotización, la orden, la lista de empaque y la factura.",
            "Pese cajas terminadas de acuerdo con el plan acordado y registre los resultados. La estimación de carga debe actualizarse con el peso bruto confirmado, incluyendo palés y protección adicional, antes de cerrar la reserva del contenedor.",
          ],
          en: [
            "Check pieces and square metres per carton, carton condition, internal protection, label, shipping marks and pallet configuration. References should match the quotation, order, packing list and invoice.",
            "Weigh finished cartons under the agreed plan and record the results. The loading estimate should be updated with confirmed gross weight, including pallets and additional protection, before the container booking is finalized.",
          ],
        },
        bullets: {
          es: ["Piezas y metros cuadrados por caja", "Caja, bolsa, protección y flejes", "Etiqueta, lote y código de diseño", "Peso neto y bruto comprobados", "Cajas por palé y estado del palé", "Datos coherentes en todos los documentos"],
          en: ["Pieces and square metres per carton", "Carton, bag, protection and straps", "Label, batch and décor code", "Checked net and gross weight", "Cartons per pallet and pallet condition", "Consistent data across all documents"],
        },
      },
      {
        id: "records-release",
        title: { es: "7. Documente hallazgos y controle la liberación", en: "7. Document findings and control release" },
        paragraphs: {
          es: [
            "El informe debe permitir que una persona que no estuvo presente entienda qué se revisó, cómo se midió y qué se encontró. Incluya identificación del pedido, fecha, ubicación, estado de producción, muestras, herramientas, resultados, fotografías y desviaciones abiertas.",
            "No convierta automáticamente un informe de inspección en autorización de embarque. Las desviaciones deben clasificarse y resolverse por escrito. Si se realiza retrabajo o reposición, defina el alcance de la nueva revisión antes de liberar el pedido.",
          ],
          en: [
            "The report should allow someone who was not present to understand what was checked, how it was measured and what was found. Include order identity, date, location, production status, samples, tools, results, photographs and open deviations.",
            "Do not automatically treat an inspection report as shipment authorization. Deviations should be classified and resolved in writing. If rework or replacement takes place, define the scope of reinspection before releasing the order.",
          ],
        },
        bullets: {
          es: ["Identificación del pedido y del lote", "Estado del producto al inspeccionar", "Muestras, herramientas y métodos", "Resultados y evidencia fotográfica", "Desviaciones y cantidad afectada", "Acción correctiva y nueva inspección", "Autorización escrita antes del embarque"],
          en: ["Order and lot identification", "Product status at inspection", "Samples, tools and methods", "Results and photographic evidence", "Deviations and affected quantity", "Corrective action and reinspection", "Written authorization before shipment"],
        },
      },
    ],
  },
  {
    slug: "wpc-wall-panel-price-guide",
    localizedSlug: { es: "guia-precios-panel-pared-wpc" },
    publishedAt: "2026-10-29",
    category: { es: "Guía de precios", en: "Price guide" },
    title: {
      es: "Precio del panel de pared WPC: cómo comparar cotizaciones FOB",
      en: "WPC Wall Panel Price Guide: How to Compare FOB Quotations",
    },
    seoTitle: {
      es: "Precio de panel de pared WPC y cotización | SINOQI",
      en: "WPC Wall Panel Price & FOB Quote Guide | SINOQI",
    },
    description: {
      es: "Conozca qué cambia el precio FOB de los paneles de pared WPC y qué debe especificar para comparar perfiles, acabados, empaque y cotizaciones.",
      en: "Learn what changes WPC wall panel FOB prices and what importers should specify to compare profiles, finishes, packing and supplier quotations.",
    },
    introduction: {
      es: "Dos paneles de pared WPC con una apariencia similar pueden utilizar perfiles, estructuras, superficies y empaques diferentes. Por eso, comparar solamente el precio por pieza o por metro cuadrado puede ocultar diferencias importantes. Esta guía ayuda a importadores, distribuidores y compradores de proyectos a preparar una solicitud comparable y a entender qué debe confirmarse antes de evaluar una cotización FOB.",
      en: "Two WPC wall panels with a similar appearance can use different profiles, structures, surfaces and packing. Comparing only the price per piece or square metre can therefore hide material differences. This guide helps importers, distributors and project buyers prepare a comparable inquiry and understand what must be confirmed before evaluating an FOB quotation.",
    },
    readingTime: { es: "9 min", en: "9 min" },
    cover: "/assets/wpc-wall-price-01-cover.png",
    coverAlt: {
      es: "Ilustración de perfiles y acabados de paneles de pared WPC para comparar cotizaciones",
      en: "Illustration of WPC wall panel profiles and finishes for quotation comparison",
    },
    coverCaption: {
      es: "Ilustración de configuraciones de paneles de pared WPC. El perfil, el acabado, el empaque y el precio finales dependen de la cotización y la muestra aprobada.",
      en: "WPC wall panel configuration illustration. Final profile, finish, packing and price depend on the quotation and approved sample.",
    },
    scopeNote: {
      es: "Esta guía corresponde a paneles decorativos WPC para paredes interiores. Los productos para revestimiento exterior deben cotizarse y evaluarse por separado. Los precios pueden cambiar con materias primas, tipo de cambio, especificación, mezcla de diseños, cantidad, empaque y condiciones comerciales; solicite siempre una cotización formal vigente.",
      en: "This guide covers indoor decorative WPC wall panels. Exterior cladding products should be quoted and evaluated separately. Prices can change with raw materials, exchange rates, specification, décor mix, quantity, packing and commercial terms; always request a current formal quotation.",
    },
    images: [
      {
        src: "/assets/wpc-wall-price-02-profiles.png",
        afterSectionId: "profile-dimensions",
        alt: {
          es: "Ilustración comparativa de secciones y relieves de perfiles de panel de pared WPC",
          en: "Illustration comparing WPC wall panel profile sections and relief depths",
        },
        caption: {
          es: "Compare ancho, grosor, estructura hueca, relieve y cobertura útil usando la ficha del perfil cotizado.",
          en: "Compare width, thickness, hollow structure, relief and usable coverage using the quoted profile specification.",
        },
      },
      {
        src: "/assets/wpc-wall-price-03-packing.png",
        afterSectionId: "packing-logistics",
        alt: {
          es: "Ilustración de empaque de exportación para paneles de pared WPC largos",
          en: "Illustration of export packing for long WPC wall panels",
        },
        caption: {
          es: "Confirme piezas por caja, dimensiones, peso bruto, protección y método de descarga antes de cerrar el plan logístico.",
          en: "Confirm pieces per carton, dimensions, gross weight, protection and unloading method before finalizing the logistics plan.",
        },
      },
    ],
    faqTitle: {
      es: "Preguntas frecuentes sobre el precio de paneles de pared WPC",
      en: "WPC wall panel price FAQ",
    },
    cta: {
      eyebrow: { es: "Cotización WPC", en: "WPC quotation" },
      title: { es: "Solicite una cotización comparable de paneles WPC", en: "Request a Comparable WPC Wall Panel Quotation" },
      body: {
        es: "Comparta el perfil o referencia, el diseño, la longitud, la cantidad por color, el empaque, la personalización y el destino. Prepararemos la cotización según la configuración confirmada.",
        en: "Share the profile or reference, décor, length, quantity per colour, packing, customization and destination. We will prepare the quotation from the confirmed configuration.",
      },
    },
    faqs: [
      {
        question: { es: "¿Por qué varía tanto el precio de los paneles de pared WPC?", en: "Why do WPC wall panel prices vary so much?" },
        answer: {
          es: "El nombre WPC no define una configuración única. El perfil, las dimensiones, la estructura, la formulación, el peso, el acabado, el diseño, la longitud, el empaque, la cantidad y las condiciones comerciales pueden cambiar el precio. Compare cotizaciones basadas en la misma especificación.",
          en: "The WPC name does not define one configuration. Profile, dimensions, structure, formulation, weight, finish, décor, length, packing, quantity and commercial terms can all change the price. Compare quotations based on the same specification.",
        },
      },
      {
        question: { es: "¿Qué información se necesita para cotizar paneles de pared WPC?", en: "What information is needed for a WPC wall panel quotation?" },
        answer: {
          es: "Indique el perfil o referencia de catálogo, dimensiones, longitud, diseño y color, cantidad por combinación, uso interior previsto, empaque, personalización, destino y condiciones comerciales solicitadas. Una imagen de aplicación por sí sola no identifica el producto.",
          en: "Provide the profile or catalog reference, dimensions, length, décor and colour, quantity per combination, intended indoor use, packing, customization, destination and requested commercial terms. An application image alone does not identify the product.",
        },
      },
      {
        question: { es: "¿Un panel WPC más ancho siempre ofrece un menor costo instalado?", en: "Does a wider WPC wall panel always reduce installed cost?" },
        answer: {
          es: "No necesariamente. La cobertura útil, el perfil, el relieve, los recortes, los accesorios, la estructura de soporte y la mano de obra influyen en el costo instalado. Compare el sistema completo y las condiciones reales del proyecto.",
          en: "Not necessarily. Usable coverage, profile, relief, cutting waste, accessories, support structure and labour influence installed cost. Compare the complete system and actual project conditions.",
        },
      },
      {
        question: { es: "¿El acabado tipo madera cambia el precio?", en: "Does a wood-look finish change the price?" },
        answer: {
          es: "Puede hacerlo, según el material de superficie, el diseño, el proceso, el volumen por referencia y los requisitos de aprobación. Confirme el acabado mediante una muestra física y pida que la referencia cotizada aparezca por escrito.",
          en: "It can, depending on the surface material, décor, process, volume per reference and approval requirements. Confirm the finish through a physical sample and ask for the quoted reference to be stated in writing.",
        },
      },
      {
        question: { es: "¿Cómo se estima la carga de un contenedor de paneles WPC?", en: "How is container loading estimated for WPC wall panels?" },
        answer: {
          es: "La estimación utiliza la longitud, piezas por caja, dimensiones y peso bruto de la caja, protección, palés cuando correspondan y límites del contenedor y la ruta. Debe actualizarse después de confirmar el empaque terminado.",
          en: "The estimate uses panel length, pieces per carton, carton dimensions and gross weight, protection, pallets where applicable and container and route limits. It should be updated after finished packing is confirmed.",
        },
      },
    ],
    sections: [
      {
        id: "compare-shared-specification",
        title: { es: "1. Compare precios sobre una especificación común", en: "1. Compare prices against one shared specification" },
        paragraphs: {
          es: [
            "Una oferta descrita solamente como “panel WPC” no permite una comparación precisa. Dos proveedores pueden utilizar perfiles, coberturas útiles, estructuras huecas, formulaciones, acabados y cantidades por caja diferentes, aunque las fotografías parezcan similares.",
            "Antes de revisar el precio FOB, confirme la moneda, el puerto de embarque, la vigencia, las condiciones de pago y qué incluye la oferta. Pida que cualquier excepción a su solicitud aparezca claramente por escrito.",
          ],
          en: [
            "An offer described only as a “WPC panel” does not support an accurate comparison. Two suppliers can use different profiles, usable coverage, hollow structures, formulations, finishes and pieces per carton even when their photographs look similar.",
            "Before reviewing the FOB price, confirm currency, port of loading, validity, payment terms and what the offer includes. Ask suppliers to state every exception to your request clearly in writing.",
          ],
        },
        bullets: {
          es: ["Referencia exacta del perfil", "Dimensiones y longitud", "Diseño, color y acabado", "Cantidad por combinación", "Empaque incluido", "Moneda, puerto FOB, pago y vigencia"],
          en: ["Exact profile reference", "Dimensions and length", "Décor, colour and finish", "Quantity per combination", "Included packing", "Currency, FOB port, payment and validity"],
        },
      },
      {
        id: "profile-dimensions",
        title: { es: "2. Perfil, dimensiones y consumo de material", en: "2. Profile, dimensions and material use" },
        paragraphs: {
          es: [
            "El ancho nominal no describe por sí solo el panel. La geometría del perfil, el grosor, la profundidad del relieve, la distribución de cavidades y la cobertura útil influyen en el consumo de material, el peso, la rigidez y el aspecto instalado.",
            "Compare dibujos o muestras de sección, no solo dimensiones escritas. Confirme cómo se unen las piezas y qué parte queda visible después del montaje. Un precio por pieza puede parecer menor y aun así ofrecer una cobertura útil distinta.",
          ],
          en: [
            "Nominal width alone does not describe the panel. Profile geometry, thickness, relief depth, cavity layout and usable coverage influence material use, weight, rigidity and installed appearance.",
            "Compare section drawings or samples, not only written dimensions. Confirm how pieces join and what remains visible after installation. A lower price per piece can still represent different usable coverage.",
          ],
        },
        bullets: {
          es: ["Ancho, grosor y longitud nominales", "Cobertura útil después del montaje", "Sección y distribución de cavidades", "Relieve, separación y ritmo visual", "Peso declarado por pieza o metro", "Tolerancias dimensionales acordadas"],
          en: ["Nominal width, thickness and length", "Usable coverage after assembly", "Section and cavity layout", "Relief, spacing and visual rhythm", "Declared weight per piece or metre", "Agreed dimensional tolerances"],
        },
      },
      {
        id: "surface-finish",
        title: { es: "3. Diseño, color y acabado de superficie", en: "3. Décor, colour and surface finish" },
        paragraphs: {
          es: [
            "Los acabados efecto madera, neutros, grises y colores uniformes pueden utilizar materiales y procesos de superficie diferentes. El costo también puede cambiar con la referencia del diseño, la cantidad por color, la repetición visual y los requisitos de brillo o textura.",
            "Seleccione referencias del catálogo vigente y confirme cada combinación mediante una muestra física. Las imágenes digitales ayudan a crear una lista corta, pero no sustituyen la aprobación de color, textura, unión y aspecto bajo la iluminación del mercado o proyecto.",
          ],
          en: [
            "Wood-look, neutral, grey and uniform finishes can use different surface materials and processes. Cost may also change with décor reference, quantity per colour, visual repeat and gloss or texture requirements.",
            "Select references from the current catalog and confirm each combination through a physical sample. Digital images help build a shortlist but do not replace approval of colour, texture, joints and appearance under representative lighting.",
          ],
        },
        bullets: {
          es: ["Referencia de diseño o color", "Material y proceso de superficie", "Textura y nivel de brillo", "Repetición y variación visual", "Cantidad requerida por referencia", "Muestra aprobada para el pedido"],
          en: ["Décor or colour reference", "Surface material and process", "Texture and gloss level", "Visual repeat and variation", "Required quantity per reference", "Approved order sample"],
        },
      },
      {
        id: "formulation-quality",
        title: { es: "4. Formulación, peso, tolerancias y control", en: "4. Formulation, weight, tolerances and control" },
        paragraphs: {
          es: [
            "WPC es una categoría amplia que combina material derivado de madera con una matriz polimérica. El nombre no confirma una receta universal. La formulación y el proceso pueden influir en el peso, el mecanizado, la estabilidad y la apariencia, por lo que estos puntos deben revisarse para el perfil seleccionado.",
            "No utilice únicamente el color del núcleo o una cifra de peso como prueba de calidad. Pida la información técnica disponible, las tolerancias acordadas y cualquier informe que exija su mercado o proyecto. Compare la producción con la muestra aprobada.",
          ],
          en: [
            "WPC is a broad category combining wood-derived material with a polymer matrix. The name does not confirm one universal recipe. Formulation and processing can influence weight, machining, stability and appearance, so these points should be reviewed for the selected profile.",
            "Do not use core colour or one weight figure alone as proof of quality. Request available technical information, agreed tolerances and any report required by the market or project. Compare production against the approved sample.",
          ],
        },
        bullets: {
          es: ["Categoría y uso interior confirmados", "Peso y método de medición", "Tolerancias de dimensiones y superficie", "Unión y mecanizado del perfil", "Informes requeridos por destino", "Consistencia con la muestra aprobada"],
          en: ["Confirmed category and indoor use", "Weight and measurement method", "Dimensional and surface tolerances", "Profile joint and machining", "Destination-required reports", "Consistency with approved sample"],
        },
      },
      {
        id: "quantity-customization",
        title: { es: "5. Cantidad, mezcla de diseños y personalización", en: "5. Quantity, décor mix and customization" },
        paragraphs: {
          es: [
            "La cantidad total no cuenta toda la historia. Un pedido dividido entre muchos perfiles, diseños y colores puede requerir más cambios, materiales de superficie y empaques que el mismo volumen concentrado en pocas referencias.",
            "Separe la cantidad por combinación y confirme la cantidad mínima vigente en la cotización. Si solicita marca privada, caja impresa, etiqueta especial, película exclusiva o una longitud no estándar, detalle quién prepara los archivos, los costos aplicables y el proceso de aprobación.",
          ],
          en: [
            "Total quantity does not tell the complete story. An order divided among many profiles, décors and colours can require more changeovers, surface materials and packing than the same volume concentrated in fewer references.",
            "Separate quantity by combination and confirm the current minimum in the quotation. For private label, printed cartons, special labels, exclusive film or non-standard length, define who prepares artwork, applicable costs and the approval process.",
          ],
        },
        bullets: {
          es: ["Cantidad total y por referencia", "Número de perfiles, diseños y colores", "Cantidad mínima vigente por combinación", "Longitud estándar o personalizada", "Marca privada, etiqueta y caja impresa", "Muestra y archivo aprobados antes de producir"],
          en: ["Total quantity and quantity per reference", "Number of profiles, décors and colours", "Current minimum per combination", "Standard or customized length", "Private label, label and printed carton", "Approved sample and artwork before production"],
        },
      },
      {
        id: "packing-logistics",
        title: { es: "6. Empaque, manipulación y logística", en: "6. Packing, handling and logistics" },
        paragraphs: {
          es: [
            "Los paneles largos requieren una protección adecuada en bordes y extremos. Confirme piezas por caja, dimensiones exteriores, peso bruto, cantoneras, flejes, película, palés y método de apilado. Una caja más resistente o personalizada puede cambiar el costo y la carga estimada.",
            "Calcule el contenedor con los datos del empaque terminado, no con una cifra genérica. Revise límites de volumen y peso, método de carga, descarga con montacargas o manual, requisitos de madera y reglas del puerto y país de destino.",
          ],
          en: [
            "Long panels need suitable edge and end protection. Confirm pieces per carton, external dimensions, gross weight, corner protection, straps, film, pallets and stacking method. Stronger or customized cartons can change both cost and estimated loading.",
            "Calculate the container from finished packing data, not a generic figure. Review volume and weight limits, loading method, forklift or manual unloading, wood-packaging requirements and destination port and country rules.",
          ],
        },
        bullets: {
          es: ["Piezas y cobertura por caja", "Dimensiones y peso bruto de la caja", "Protección de bordes y extremos", "Caja neutra o personalizada", "Palés y requisitos de madera", "Estimación de carga y método de descarga"],
          en: ["Pieces and coverage per carton", "Carton dimensions and gross weight", "Edge and end protection", "Neutral or customized carton", "Pallets and wood requirements", "Loading estimate and unloading method"],
        },
      },
      {
        id: "quotation-checklist",
        title: { es: "7. Lista completa para solicitar una cotización WPC", en: "7. Complete WPC wall panel quotation checklist" },
        paragraphs: {
          es: [
            "Una solicitud completa permite que varios proveedores coticen la misma base. Distinga requisitos obligatorios de opciones abiertas y pida que la oferta identifique sustituciones, exclusiones y datos todavía pendientes de confirmación.",
            "Antes de comparar el precio final, revise la muestra, la ficha del perfil, el empaque y las condiciones comerciales en conjunto. El pedido debe seguir la especificación confirmada y no una fotografía o descripción genérica enviada al inicio.",
          ],
          en: [
            "A complete request allows several suppliers to quote the same basis. Separate mandatory requirements from open options and ask the offer to identify substitutions, exclusions and data still awaiting confirmation.",
            "Before comparing the final price, review the sample, profile specification, packing and commercial terms together. The order should follow the confirmed specification rather than a generic photograph or description sent at the beginning.",
          ],
        },
        bullets: {
          es: ["Perfil, dimensiones, longitud y cobertura útil", "Diseño, color, textura y acabado", "Cantidad total y cantidad por combinación", "Peso y tolerancias requeridas", "Uso interior y mercado de destino", "Caja, etiqueta, protección y palé", "Personalización y marca privada", "Muestra e informes requeridos", "Puerto FOB, destino y estimación de carga", "Moneda, pago, plazo y vigencia de la oferta"],
          en: ["Profile, dimensions, length and usable coverage", "Décor, colour, texture and finish", "Total quantity and quantity per combination", "Required weight and tolerances", "Indoor use and destination market", "Carton, label, protection and pallet", "Customization and private label", "Required sample and reports", "FOB port, destination and loading estimate", "Currency, payment, lead time and quotation validity"],
        },
      },
    ],
  },
  {
    slug: "wpc-wall-panel-installation-guide",
    localizedSlug: { es: "guia-instalacion-paneles-pared-wpc" },
    publishedAt: "2026-10-29",
    category: { es: "Guía de instalación", en: "Installation guide" },
    title: {
      es: "Guía de instalación de paneles de pared WPC para interiores",
      en: "WPC Wall Panel Installation Guide for Interior Projects",
    },
    seoTitle: {
      es: "Guía de instalación de paneles WPC | SINOQI",
      en: "WPC Wall Panel Installation Guide | SINOQI",
    },
    description: {
      es: "Aprenda a revisar la pared, planificar el trazado, instalar paneles WPC y controlar remates, juntas y entrega en proyectos interiores.",
      en: "Learn how to inspect the wall, plan the layout, install WPC panels, and check joints, trims and handover for interior projects.",
    },
    introduction: {
      es: "Una instalación ordenada empieza antes de fijar el primer panel. El perfil suministrado, el estado de la pared, el trazado, los accesorios y el método de fijación deben revisarse como un solo sistema. Esta guía ayuda a importadores, distribuidores, instaladores y compradores de proyectos a preparar la obra, coordinar responsabilidades y reducir correcciones evitables.",
      en: "A reliable installation starts before the first panel is fixed. The supplied profile, wall condition, layout, accessories and fixing method must be reviewed as one system. This guide helps importers, distributors, installers and project buyers prepare the site, coordinate responsibilities and reduce avoidable rework.",
    },
    readingTime: { es: "9 min", en: "9 min" },
    cover: "/assets/wpc-wall-installation-01-cover.png",
    coverAlt: {
      es: "Ilustración de instalación de paneles acanalados WPC en una pared interior",
      en: "Illustration of fluted WPC wall panel installation on an interior wall",
    },
    coverCaption: {
      es: "Ilustración de instalación interior. El sistema de fijación debe corresponder al perfil, al sustrato y a las instrucciones confirmadas para el proyecto.",
      en: "Interior installation illustration. The fixing system must match the profile, substrate and instructions confirmed for the project.",
    },
    scopeNote: {
      es: "Esta guía se refiere a paneles decorativos WPC para paredes interiores, no a revestimientos exteriores. No sustituye las instrucciones del producto, la evaluación del sustrato, la especificación del proyecto ni los códigos locales. Confirme siempre el perfil, los accesorios y el método de fijación con el proveedor antes de instalar.",
      en: "This guide covers decorative WPC panels for interior walls, not exterior cladding. It does not replace product instructions, substrate assessment, the project specification or local codes. Always confirm the profile, accessories and fixing method with the supplier before installation.",
    },
    images: [
      {
        src: "/assets/wpc-wall-installation-02-preparation.png",
        afterSectionId: "inspect-wall",
        alt: {
          es: "Ilustración de revisión y trazado de una pared antes de instalar paneles WPC",
          en: "Illustration of wall inspection and layout marking before WPC panel installation",
        },
        caption: {
          es: "Revise planeidad, solidez, humedad visible, dimensiones y líneas de referencia antes de cortar o fijar paneles.",
          en: "Check flatness, soundness, visible moisture, dimensions and reference lines before cutting or fixing panels.",
        },
      },
      {
        src: "/assets/wpc-wall-installation-03-finished.png",
        afterSectionId: "finish-details",
        alt: {
          es: "Ilustración de una pared interior terminada con paneles acanalados WPC y remates",
          en: "Illustration of a finished interior fluted WPC panel wall with edge trims",
        },
        caption: {
          es: "El control final debe incluir alineación, juntas, esquinas, transiciones, recortes y limpieza de la superficie.",
          en: "Final inspection should include alignment, joints, corners, transitions, cut-outs and surface cleaning.",
        },
      },
    ],
    faqTitle: {
      es: "Preguntas frecuentes sobre la instalación de paneles WPC",
      en: "WPC wall panel installation FAQ",
    },
    cta: {
      eyebrow: { es: "Proyecto de paneles WPC", en: "WPC wall panel project" },
      title: { es: "Prepare su solicitud de paneles WPC", en: "Prepare Your WPC Wall Panel Inquiry" },
      body: {
        es: "Envíenos el perfil o referencia, dimensiones de la pared, tipo de sustrato, trazado, accesorios, cantidad y destino. Revisaremos la configuración y prepararemos una cotización según los datos confirmados.",
        en: "Send us the profile or reference, wall dimensions, substrate type, layout, accessories, quantity and destination. We will review the configuration and prepare a quotation from the confirmed information.",
      },
    },
    faqs: [
      {
        question: { es: "¿Se pueden instalar paneles WPC directamente sobre una pared existente?", en: "Can WPC wall panels be installed directly over an existing wall?" },
        answer: {
          es: "Depende del perfil, del sistema de fijación y del estado de la superficie. La pared debe evaluarse para confirmar que esté firme, suficientemente plana, limpia y adecuada para el método previsto. Pintura suelta, humedad activa, irregularidades o un sustrato débil deben resolverse antes de instalar.",
          en: "It depends on the profile, fixing system and condition of the surface. The wall must be assessed to confirm it is sound, sufficiently flat, clean and suitable for the intended method. Loose paint, active moisture, irregularities or a weak substrate must be addressed before installation.",
        },
      },
      {
        question: { es: "¿Es mejor usar adhesivo o una estructura con grapas o tornillos?", en: "Is adhesive better than battens, clips or screws?" },
        answer: {
          es: "No existe un método universal. La elección depende del diseño del perfil, el sustrato, la necesidad de nivelación, los accesorios y las instrucciones del sistema. Confirme la compatibilidad del adhesivo o de los fijadores y prepare un detalle aprobado antes de comenzar la obra.",
          en: "There is no universal method. The choice depends on profile design, substrate, levelling needs, accessories and system instructions. Confirm adhesive or fastener compatibility and approve an installation detail before site work begins.",
        },
      },
      {
        question: { es: "¿Cómo deben resolverse las esquinas, los enchufes y los bordes?", en: "How should corners, outlets and exposed edges be handled?" },
        answer: {
          es: "Defina estos puntos durante el trazado. Confirme perfiles de remate, holguras, secuencia de montaje y acceso a cajas eléctricas con el responsable técnico. Los cortes deben medirse en obra y quedar protegidos o terminados según el detalle aprobado.",
          en: "Define these points during layout planning. Confirm trims, clearances, installation sequence and access to electrical boxes with the responsible technical party. Cut-outs should be measured on site and protected or finished according to the approved detail.",
        },
      },
      {
        question: { es: "¿Los paneles WPC para interiores pueden usarse en zonas húmedas?", en: "Can indoor WPC wall panels be used in wet areas?" },
        answer: {
          es: "No debe asumirse solo por el nombre WPC. Confirme el uso previsto del producto, la exposición real al agua, la ventilación, el sustrato, el sellado y los requisitos locales. Las áreas con contacto directo o continuo con agua requieren una evaluación específica del sistema completo.",
          en: "This should not be assumed from the WPC name alone. Confirm the product's intended use, actual water exposure, ventilation, substrate, sealing and local requirements. Areas with direct or continuous water contact require a specific assessment of the complete system.",
        },
      },
      {
        question: { es: "¿Qué debe incluir la entrega de una instalación de paneles WPC?", en: "What should be included in the handover of a WPC panel installation?" },
        answer: {
          es: "Revise alineación, juntas, remates, esquinas, recortes, fijación visible cuando corresponda, limpieza y daños. Registre las referencias instaladas, conserve material de reposición acordado y entregue las indicaciones de limpieza y mantenimiento disponibles para el producto.",
          en: "Review alignment, joints, trims, corners, cut-outs, visible fixing where applicable, cleanliness and damage. Record installed references, retain any agreed spare material and provide the available cleaning and maintenance guidance for the product.",
        },
      },
    ],
    sections: [
      {
        id: "confirm-system",
        title: { es: "1. Confirme el panel y el sistema de instalación", en: "1. Confirm the panel and installation system" },
        paragraphs: {
          es: [
            "Antes de movilizar al instalador, identifique la referencia exacta del panel, sus dimensiones, la cobertura útil, la dirección de montaje y la forma en que se unen las piezas. Perfiles visualmente similares pueden utilizar bordes, cavidades y accesorios diferentes.",
            "Revise la muestra aprobada, el dibujo del perfil, los remates y las instrucciones disponibles como un conjunto. No seleccione adhesivos, grapas, tornillos o rastreles por costumbre: su compatibilidad depende del perfil, del sustrato y de la especificación del proyecto.",
          ],
          en: [
            "Before mobilizing installers, identify the exact panel reference, dimensions, usable coverage, installation direction and the way pieces join. Profiles that look similar can use different edges, cavities and accessories.",
            "Review the approved sample, profile drawing, trims and available instructions as one package. Do not select adhesive, clips, screws or battens by habit: compatibility depends on the profile, substrate and project specification.",
          ],
        },
        bullets: {
          es: ["Referencia y lote del panel", "Dimensiones y cobertura útil", "Dirección y secuencia de montaje", "Sistema de unión del perfil", "Remates y accesorios compatibles", "Método de fijación confirmado"],
          en: ["Panel reference and batch", "Dimensions and usable coverage", "Installation direction and sequence", "Profile joint system", "Compatible trims and accessories", "Confirmed fixing method"],
        },
      },
      {
        id: "inspect-wall",
        title: { es: "2. Revise la pared y las condiciones de la obra", en: "2. Inspect the wall and site conditions" },
        paragraphs: {
          es: [
            "El acabado final seguirá las condiciones de la base. Compruebe que la pared o estructura esté firme, suficientemente plana y limpia para el sistema previsto. Identifique pintura suelta, polvo, salientes, huecos, filtraciones, humedad activa y servicios ocultos antes de perforar o aplicar adhesivo.",
            "Registre las dimensiones reales y compare el sitio con planos, muebles, puertas, zócalos, cielos rasos e instalaciones eléctricas. Si se requiere una subestructura para corregir la base o crear una cámara, su material, alineación y fijación deben definirse por la parte técnica responsable.",
          ],
          en: [
            "The finished surface will follow the condition of its base. Check that the wall or supporting structure is sound, sufficiently flat and clean for the intended system. Identify loose paint, dust, high spots, voids, leaks, active moisture and concealed services before drilling or applying adhesive.",
            "Record actual dimensions and compare the site with drawings, furniture, doors, skirtings, ceilings and electrical services. If a substructure is needed to correct the base or create a cavity, its material, alignment and fixing must be defined by the responsible technical party.",
          ],
        },
        bullets: {
          es: ["Solidez y planeidad del sustrato", "Superficie limpia y compatible", "Humedad o filtraciones resueltas", "Servicios ocultos identificados", "Dimensiones verificadas en obra", "Condiciones ambientales adecuadas para el sistema"],
          en: ["Substrate soundness and flatness", "Clean and compatible surface", "Moisture or leaks resolved", "Concealed services identified", "Site dimensions verified", "Environmental conditions suitable for the system"],
        },
      },
      {
        id: "plan-layout",
        title: { es: "3. Planifique el trazado antes de cortar", en: "3. Plan the layout before cutting" },
        paragraphs: {
          es: [
            "Marque una línea inicial nivelada o aplomada y haga un trazado en seco. Calcule la distribución con la cobertura útil, no solo con el ancho nominal. Así podrá evitar una franja final incómoda y coordinar simetría, esquinas, puertas, enchufes y cambios de material.",
            "Defina dónde comenzarán y terminarán los paneles, cómo se orientará el diseño y dónde quedarán las uniones. Si el proyecto mezcla referencias o lotes, establezca el orden y revise el aspecto bajo la iluminación real antes de fijar una superficie extensa.",
          ],
          en: [
            "Mark a level or plumb starting line and prepare a dry layout. Calculate the arrangement from usable coverage, not only nominal width. This helps avoid an awkward final strip and coordinates symmetry, corners, doors, outlets and material transitions.",
            "Define where panels start and finish, how the design will run and where joints will fall. If the project mixes references or batches, set the sequence and review the appearance under representative lighting before fixing a large area.",
          ],
        },
        bullets: {
          es: ["Línea inicial de referencia", "Cobertura útil y modulación", "Balance de primera y última pieza", "Posición de esquinas y transiciones", "Recortes para enchufes y servicios", "Secuencia por diseño, color y lote"],
          en: ["Starting reference line", "Usable coverage and module", "Balance of first and last pieces", "Corner and transition positions", "Cut-outs for outlets and services", "Sequence by décor, colour and batch"],
        },
      },
      {
        id: "prepare-materials",
        title: { es: "4. Prepare materiales, herramientas y una zona de prueba", en: "4. Prepare materials, tools and a trial area" },
        paragraphs: {
          es: [
            "Almacene los paneles protegidos, sobre un apoyo adecuado y según las indicaciones del producto. Inspeccione perfiles, superficies, bordes, color y accesorios antes de cortar. Separe piezas dañadas o no conformes para evitar que entren en la pared terminada.",
            "Prepare herramientas de medición y corte apropiadas para el perfil, además del equipo de protección requerido. Haga una zona de prueba que incluya una unión y un remate. Esta prueba permite verificar el corte, la apariencia, la compatibilidad de la fijación y la secuencia antes de continuar.",
          ],
          en: [
            "Store panels protected, on suitable support and according to the product guidance. Inspect profiles, surfaces, edges, colour and accessories before cutting. Segregate damaged or non-conforming pieces so they do not enter the finished wall.",
            "Prepare measuring and cutting tools suitable for the profile, together with the required protective equipment. Build a trial area that includes a joint and a trim. The trial helps verify cutting, appearance, fixing compatibility and sequence before work continues.",
          ],
        },
        bullets: {
          es: ["Paneles protegidos y revisados", "Accesorios y fijadores disponibles", "Herramientas adecuadas al perfil", "Equipo de protección para corte e instalación", "Zona de prueba aprobada", "Piezas no conformes separadas"],
          en: ["Panels protected and inspected", "Accessories and fixings available", "Tools suitable for the profile", "Protective equipment for cutting and installation", "Approved trial area", "Non-conforming pieces segregated"],
        },
      },
      {
        id: "install-align",
        title: { es: "5. Instale y controle la alineación progresivamente", en: "5. Install and check alignment progressively" },
        paragraphs: {
          es: [
            "Coloque la primera pieza con especial cuidado, porque establece la referencia para las siguientes. Use el método confirmado y respete la secuencia del sistema. No fuerce las uniones ni utilice fijaciones que deformen el perfil o queden visibles fuera del detalle previsto.",
            "Compruebe aplome, nivel, contacto, juntas y ritmo visual mientras avanza. Corrija una desviación cuando todavía afecta pocas piezas; esperar hasta el final puede convertir un ajuste sencillo en un desmontaje amplio. Mantenga la superficie protegida frente a polvo, golpes y trabajos simultáneos.",
          ],
          en: [
            "Position the first piece with particular care because it sets the reference for those that follow. Use the confirmed method and follow the system sequence. Do not force joints or use fixings that distort the profile or remain visible outside the intended detail.",
            "Check plumb, level, contact, joints and visual rhythm as work progresses. Correct drift while it still affects only a few pieces; waiting until the end can turn a simple adjustment into extensive removal. Protect the surface from dust, impact and simultaneous trades.",
          ],
        },
        bullets: {
          es: ["Primera pieza nivelada o aplomada", "Uniones cerradas sin forzar", "Fijación según el detalle aprobado", "Alineación revisada durante el avance", "Superficie protegida de daños", "Desviaciones corregidas de inmediato"],
          en: ["First piece level or plumb", "Joints closed without forcing", "Fixing according to the approved detail", "Alignment checked during progress", "Surface protected from damage", "Deviations corrected promptly"],
        },
      },
      {
        id: "finish-details",
        title: { es: "6. Resuelva esquinas, bordes, recortes y transiciones", en: "6. Finish corners, edges, cut-outs and transitions" },
        paragraphs: {
          es: [
            "Los detalles determinan si la pared se percibe como un sistema terminado. Corte y presente en seco los remates de esquinas, encuentros con techo o zócalo, marcos de puertas y transiciones a otros materiales. Proteja los bordes expuestos según la solución aprobada.",
            "Mida los recortes para enchufes, interruptores y servicios directamente en obra. Coordine el aislamiento eléctrico y el acceso futuro con personal autorizado. No cubra puntos que deban permanecer registrables ni confíe en el panel para corregir una caja o abertura mal posicionada.",
          ],
          en: [
            "Details determine whether the wall reads as a finished system. Cut and dry-fit trims at corners, ceiling or skirting junctions, door frames and transitions to other materials. Protect exposed edges according to the approved solution.",
            "Measure cut-outs for outlets, switches and services directly on site. Coordinate electrical isolation and future access with authorized personnel. Do not conceal points that must remain accessible or rely on the panel to correct a poorly positioned box or opening.",
          ],
        },
        bullets: {
          es: ["Esquinas internas y externas", "Bordes iniciales y finales", "Encuentros con techo y zócalo", "Marcos y transiciones", "Recortes medidos en obra", "Acceso a servicios conservado"],
          en: ["Internal and external corners", "Starting and finishing edges", "Ceiling and skirting junctions", "Frames and transitions", "Cut-outs measured on site", "Service access maintained"],
        },
      },
      {
        id: "inspect-handover",
        title: { es: "7. Inspeccione, limpie y documente la entrega", en: "7. Inspect, clean and document the handover" },
        paragraphs: {
          es: [
            "Revise la pared desde cerca y desde la distancia prevista de uso. Compruebe alineación, continuidad visual, juntas, remates, recortes, daños y residuos. Limpie con el método indicado para la superficie; productos abrasivos o solventes no confirmados pueden afectar el acabado.",
            "Documente las referencias y áreas instaladas, observaciones aceptadas y material de reposición. Entregue las instrucciones disponibles de limpieza y mantenimiento, y acuerde quién debe atender cualquier ajuste pendiente. Una entrega registrada facilita el servicio posterior para distribuidor, instalador y cliente.",
          ],
          en: [
            "Inspect the wall both close up and from its intended viewing distance. Check alignment, visual continuity, joints, trims, cut-outs, damage and residue. Clean using the method specified for the surface; unconfirmed abrasives or solvents can affect the finish.",
            "Record installed references and areas, accepted observations and spare material. Provide available cleaning and maintenance guidance and agree who will address any remaining adjustment. A documented handover makes after-sales service clearer for the distributor, installer and customer.",
          ],
        },
        bullets: {
          es: ["Alineación y ritmo visual", "Juntas y remates completos", "Recortes limpios y servicios accesibles", "Superficie sin daño ni residuos", "Referencias y áreas registradas", "Limpieza, mantenimiento y pendientes entregados"],
          en: ["Alignment and visual rhythm", "Complete joints and trims", "Clean cut-outs and accessible services", "Surface free of damage and residue", "References and areas recorded", "Cleaning, maintenance and outstanding items handed over"],
        },
      },
    ],
  },
  {
    slug: "wpc-wall-panel-packaging-container-loading-guide",
    localizedSlug: { es: "guia-empaque-carga-contenedor-paneles-wpc" },
    publishedAt: "2026-10-30",
    category: { es: "Guía de empaque", en: "Packing guide" },
    title: {
      es: "Guía de empaque y carga de contenedor para paneles WPC",
      en: "WPC Wall Panel Packaging and Container Loading Guide",
    },
    seoTitle: {
      es: "Empaque y carga de paneles WPC | SINOQI",
      en: "WPC Wall Panel Packaging & Container Loading | SINOQI",
    },
    description: {
      es: "Aprenda a confirmar cajas, peso bruto, protección, palés y carga estimada antes de aprobar el empaque de exportación de paneles WPC.",
      en: "Learn how to confirm cartons, gross weight, protection, pallets and loading estimates before approving WPC wall panel export packing.",
    },
    introduction: {
      es: "Los paneles de pared WPC son largos, tienen superficies decorativas y pueden incluir perfiles o remates con formas diferentes. Por eso, un plan de empaque no debe limitarse a indicar piezas por caja. Importadores y distribuidores también necesitan confirmar protección, dimensiones, peso bruto, manipulación y las restricciones de la ruta antes de aprobar una estimación de carga.",
      en: "WPC wall panels are long, have decorative surfaces and may be shipped with profiles or trims of different shapes. A packing plan therefore needs more than a pieces-per-carton figure. Importers and distributors must also confirm protection, dimensions, gross weight, handling and route restrictions before approving a loading estimate.",
    },
    readingTime: { es: "9 min", en: "9 min" },
    cover: "/assets/wpc-wall-packing-01-cover.png",
    coverAlt: {
      es: "Ilustración de paneles WPC largos, cajas protectoras, palé y contenedor para planificar el empaque",
      en: "Illustration of long WPC wall panels, protective cartons, pallet and container for packing planning",
    },
    coverCaption: {
      es: "Ilustración de planificación de empaque. La configuración final debe confirmarse con el perfil, la muestra de caja y el peso bruto del pedido.",
      en: "Packing-planning illustration. The final configuration must be confirmed against the profile, carton sample and order gross weight.",
    },
    scopeNote: {
      es: "Esta guía no establece una cantidad universal por contenedor. La carga final depende del perfil, la longitud, el empaque terminado, los palés, el payload del equipo, el transportista, la ruta, el transporte terrestre y las normas del destino. Confirme los datos antes de reservar.",
      en: "This guide does not define a universal container quantity. Final loading depends on profile, length, finished packing, pallets, equipment payload, carrier, route, inland transport and destination rules. Confirm the data before booking.",
    },
    images: [
      {
        src: "/assets/wpc-wall-packing-02-protection.png",
        afterSectionId: "carton-protection",
        alt: {
          es: "Ilustración de protección de extremos, separadores y película para paneles de pared WPC dentro de una caja",
          en: "Illustration of end protection, dividers and film for WPC wall panels inside a carton",
        },
        caption: {
          es: "La protección debe corresponder al perfil, al acabado, a la longitud y al método de manipulación acordado.",
          en: "Protection should match the profile, finish, length and agreed handling method.",
        },
      },
      {
        src: "/assets/wpc-wall-packing-03-loading.png",
        afterSectionId: "loading-plan",
        alt: {
          es: "Ilustración de cajas largas de paneles WPC organizadas para cargar un contenedor",
          en: "Illustration of long WPC wall panel cartons arranged for container loading",
        },
        caption: {
          es: "La orientación, el apoyo y el acceso de descarga deben planificarse con las dimensiones y el peso del empaque terminado.",
          en: "Orientation, support and unloading access should be planned from finished packing dimensions and weight.",
        },
      },
    ],
    faqTitle: {
      es: "Preguntas frecuentes sobre empaque y carga de paneles WPC",
      en: "WPC wall panel packing and loading FAQ",
    },
    cta: {
      eyebrow: { es: "Plan de empaque WPC", en: "WPC packing plan" },
      title: { es: "Solicite un plan de empaque para paneles WPC", en: "Request a WPC Wall Panel Packing Plan" },
      body: {
        es: "Envíenos el perfil, la longitud, la cantidad por referencia, el empaque solicitado y el puerto de destino. Prepararemos la cotización y la estimación de carga con los datos confirmados.",
        en: "Send us the profile, length, quantity per reference, requested packing and destination port. We will prepare the quotation and loading estimate from the confirmed data.",
      },
    },
    faqs: [
      {
        question: { es: "¿Cuántas piezas de panel WPC deben empacarse por caja?", en: "How many WPC wall panels should be packed per carton?" },
        answer: {
          es: "No existe una cantidad universal. Depende del perfil, las dimensiones, el peso, la resistencia de la caja y la forma de manipulación. Confirme piezas, cobertura, dimensiones y peso bruto mediante una muestra de empaque o datos de producción terminada.",
          en: "There is no universal quantity. It depends on profile, dimensions, weight, carton strength and handling method. Confirm pieces, coverage, dimensions and gross weight through a packing sample or finished-production data.",
        },
      },
      {
        question: { es: "¿Qué protección necesitan los paneles WPC largos?", en: "What protection do long WPC wall panels need?" },
        answer: {
          es: "La solución puede incluir protección de extremos y bordes, separadores, película, caja resistente y apoyo continuo. Debe adaptarse al perfil y acabado cotizados y verificarse para apilado, carga, tránsito y descarga.",
          en: "The solution may include end and edge protection, dividers, film, a suitable carton and continuous support. It should match the quoted profile and finish and be checked for stacking, loading, transit and unloading.",
        },
      },
      {
        question: { es: "¿Los paneles WPC deben enviarse con palés?", en: "Should WPC wall panels be shipped on pallets?" },
        answer: {
          es: "Depende de la longitud, el método de carga, la descarga, el almacenamiento y los requisitos del comprador. Si se utilizan palés o madera, confirme peso, dimensiones, acceso de montacargas y requisitos IPPC o de tratamiento aplicables al destino.",
          en: "It depends on length, loading method, unloading, storage and buyer requirements. If pallets or wood are used, confirm weight, dimensions, forklift access and any IPPC or treatment requirements applicable at destination.",
        },
      },
      {
        question: { es: "¿Cómo se calcula la carga de un contenedor de paneles WPC?", en: "How is WPC wall panel container loading calculated?" },
        answer: {
          es: "La estimación utiliza dimensiones y peso bruto del empaque terminado, orientación, apoyos, palés, espacio operativo y payload permitido. También deben revisarse las restricciones del transportista, la ruta, el transporte terrestre y el destino.",
          en: "The estimate uses finished packing dimensions and gross weight, orientation, supports, pallets, operating clearance and permitted payload. Carrier, route, inland transport and destination restrictions must also be reviewed.",
        },
      },
      {
        question: { es: "¿Qué debe aprobar el comprador antes del embarque?", en: "What should the buyer approve before shipment?" },
        answer: {
          es: "Revise la referencia del producto, piezas y cobertura por caja, dimensiones, peso bruto, etiquetas, protección, palés, secuencia de carga y estimación total. Las fotografías, registros y lista de empaque deben corresponder al pedido terminado.",
          en: "Review product reference, pieces and coverage per carton, dimensions, gross weight, labels, protection, pallets, loading sequence and total estimate. Photographs, records and the packing list should correspond to the finished order.",
        },
      },
    ],
    sections: [
      {
        id: "confirm-order-data",
        title: { es: "1. Confirme el perfil, la longitud y la mezcla del pedido", en: "1. Confirm profile, length and order mix" },
        paragraphs: {
          es: [
            "El plan comienza con la referencia exacta del perfil. Ancho, grosor, sección hueca, relieve y longitud influyen en la cantidad por caja, el apoyo necesario y las dimensiones exteriores. Los remates no siempre comparten la misma sección o empaque que los paneles principales.",
            "Prepare una lista por perfil, longitud, diseño y color. Un pedido con muchas referencias puede necesitar cajas separadas, etiquetas adicionales y una secuencia de carga que facilite la recepción. No calcule todo como si fuera una sola caja estándar.",
          ],
          en: [
            "The plan starts with the exact profile reference. Width, thickness, hollow section, relief and length influence pieces per carton, required support and external dimensions. Trims do not always share the same section or packing as the main panels.",
            "Prepare a list by profile, length, décor and colour. An order with many references may need separate cartons, additional labels and a loading sequence that supports receiving. Do not calculate everything as one standard carton.",
          ],
        },
        bullets: {
          es: ["Referencia y sección del perfil", "Longitud de paneles y remates", "Cantidad por diseño y color", "Cobertura útil por referencia", "Accesorios incluidos", "Secuencia solicitada para recepción"],
          en: ["Profile reference and section", "Panel and trim length", "Quantity by décor and colour", "Usable coverage by reference", "Included accessories", "Requested receiving sequence"],
        },
      },
      {
        id: "carton-protection",
        title: { es: "2. Diseñe la caja y la protección del producto", en: "2. Define carton construction and product protection" },
        paragraphs: {
          es: [
            "Los extremos, bordes y superficies decorativas son puntos críticos. La protección puede combinar película, separadores, cantoneras, tapas de extremo, relleno y una caja adecuada. La solución debe evitar contacto abrasivo y limitar el movimiento sin deformar el perfil.",
            "Revise una muestra de empaque con el producto real. Observe qué sucede al levantar, girar, apilar y abrir la caja. Una presentación limpia es importante, pero la prioridad es que la protección funcione durante las manipulaciones previstas.",
          ],
          en: [
            "Ends, edges and decorative surfaces are critical points. Protection can combine film, dividers, corner guards, end caps, cushioning and a suitable carton. The solution should prevent abrasive contact and limit movement without distorting the profile.",
            "Review a packing sample with the actual product. Observe what happens when the carton is lifted, turned, stacked and opened. Clean presentation matters, but the priority is protection through the intended handling steps.",
          ],
        },
        bullets: {
          es: ["Protección de extremos y bordes", "Separación entre superficies", "Apoyo a lo largo de la caja", "Resistencia y cierre de la caja", "Flejes sin marcar el producto", "Prueba práctica de manipulación"],
          en: ["End and edge protection", "Separation between surfaces", "Support along carton length", "Carton strength and closure", "Straps that do not mark the product", "Practical handling check"],
        },
      },
      {
        id: "carton-data",
        title: { es: "3. Verifique los datos de cada caja terminada", en: "3. Verify finished-carton data" },
        paragraphs: {
          es: [
            "Piezas por caja solo es uno de los datos. Registre también cobertura, dimensiones exteriores, peso neto y peso bruto. El peso debe incluir paneles, protección, caja y accesorios que viajen dentro. Utilice datos del empaque terminado para actualizar documentos y cálculos.",
            "La etiqueta debe permitir identificar producto, diseño, color, longitud, cantidad y pedido sin depender de abrir la caja. Asegure que códigos, marcas y etiquetas requeridas coincidan con la aprobación del comprador y las reglas del destino.",
          ],
          en: [
            "Pieces per carton is only one data point. Record coverage, external dimensions, net weight and gross weight as well. Gross weight should include panels, protection, carton and any accessories packed inside. Use finished packing data to update documents and calculations.",
            "The label should identify product, décor, colour, length, quantity and order without requiring the carton to be opened. Ensure codes, marks and required labels match buyer approval and destination rules.",
          ],
        },
        bullets: {
          es: ["Piezas y cobertura por caja", "Dimensiones exteriores verificadas", "Peso neto y bruto medidos", "Referencia, diseño y color", "Número de pedido o lote", "Etiqueta y código aprobados"],
          en: ["Pieces and coverage per carton", "Verified external dimensions", "Measured net and gross weight", "Reference, décor and colour", "Order or batch number", "Approved label and code"],
        },
      },
      {
        id: "pallets-wood",
        title: { es: "4. Confirme palés, madera y método de manipulación", en: "4. Confirm pallets, wood and handling method" },
        paragraphs: {
          es: [
            "Los palés pueden facilitar el movimiento y la recepción, pero añaden peso, volumen y requisitos de acceso. Confirme si el largo puede manipularse con el equipo disponible, dónde apoyan las horquillas y cómo se evita la flexión o el voladizo durante el movimiento.",
            "Si el empaque utiliza madera, revise las reglas del país de destino y cualquier requisito IPPC, tratamiento o marcado. El peso y las dimensiones del palé deben incluirse en el peso bruto y en el plan de carga, no tratarse como un dato separado al final.",
          ],
          en: [
            "Pallets can support movement and receiving, but add weight, volume and access requirements. Confirm whether the length can be handled by available equipment, where forks support the load and how bending or overhang will be avoided during movement.",
            "If packing uses wood, review destination-country rules and any IPPC, treatment or marking requirement. Pallet weight and dimensions must be included in gross weight and the loading plan, not added as an afterthought.",
          ],
        },
        bullets: {
          es: ["Palé requerido o carga sin palé", "Peso y dimensiones del palé", "Puntos de apoyo de montacargas", "Límite de apilado confirmado", "Requisitos IPPC o de tratamiento", "Método de descarga en destino"],
          en: ["Palletized or floor-loaded plan", "Pallet weight and dimensions", "Forklift support points", "Confirmed stacking limit", "IPPC or treatment requirements", "Destination unloading method"],
        },
      },
      {
        id: "loading-plan",
        title: { es: "5. Calcule la carga con datos confirmados", en: "5. Calculate loading from confirmed data" },
        paragraphs: {
          es: [
            "Una estimación responsable comprueba espacio y peso al mismo tiempo. Utilice dimensiones exteriores, peso bruto y orientación de las cajas o palés. Incluya apoyos, protección, espacio para manipular y cualquier separación necesaria; el volumen interno teórico no equivale automáticamente a carga utilizable.",
            "Compare el peso calculado con el payload permitido del contenedor y con los límites de la ruta. Naviera, equipo, transporte terrestre y destino pueden imponer restricciones distintas. Por eso, la estimación debe identificarse como tal hasta confirmar el empaque y la reserva.",
          ],
          en: [
            "A responsible estimate checks space and weight together. Use external dimensions, gross weight and carton or pallet orientation. Include supports, protection, handling clearance and any required separation; theoretical internal volume does not automatically equal usable loading space.",
            "Compare calculated weight with permitted container payload and route limits. Carrier, equipment, inland transport and destination may impose different restrictions. The figure should remain an estimate until packing and booking are confirmed.",
          ],
        },
        bullets: {
          es: ["Dimensiones y orientación del empaque", "Peso bruto total calculado", "Espacio para apoyos y manipulación", "Payload permitido del equipo", "Restricciones de naviera y ruta", "Estimación revisada después del empaque"],
          en: ["Packing dimensions and orientation", "Calculated total gross weight", "Space for supports and handling", "Permitted equipment payload", "Carrier and route restrictions", "Estimate updated after packing"],
        },
      },
      {
        id: "handling-destination",
        title: { es: "6. Planifique carga, tránsito y descarga", en: "6. Plan loading, transit and unloading" },
        paragraphs: {
          es: [
            "Defina quién mueve las cajas, con qué equipo y en qué orden. Las piezas largas necesitan apoyo suficiente y no deben levantarse desde un solo punto si eso puede flexionar o dañar el empaque. La secuencia debe proteger referencias delicadas y facilitar una descarga segura.",
            "Comparta con el comprador las dimensiones y pesos antes de la llegada. Confirme acceso de montacargas, longitud de horquillas, espacio de maniobra, descarga manual cuando corresponda y condiciones de almacenamiento. Un plan que funciona en origen puede fallar si el destino no puede recibir el mismo formato.",
          ],
          en: [
            "Define who moves cartons, which equipment is used and in what sequence. Long pieces need sufficient support and should not be lifted from one point if that can bend or damage the packing. The sequence should protect sensitive references and support safe unloading.",
            "Share dimensions and weights with the buyer before arrival. Confirm forklift access, fork length, maneuvering space, manual unloading where applicable and storage conditions. A plan that works at origin can fail if the destination cannot receive the same format.",
          ],
        },
        bullets: {
          es: ["Responsables y secuencia de carga", "Apoyo continuo para piezas largas", "Protección contra movimiento y contacto", "Equipo disponible en destino", "Acceso y espacio de descarga", "Almacenamiento protegido después de recibir"],
          en: ["Loading responsibility and sequence", "Continuous support for long pieces", "Protection from movement and contact", "Equipment available at destination", "Unloading access and space", "Protected storage after receipt"],
        },
      },
      {
        id: "approval-checklist",
        title: { es: "7. Lista de verificación antes de aprobar el empaque", en: "7. Packing approval checklist" },
        paragraphs: {
          es: [
            "Alinee cotización, muestra, etiqueta, caja y lista de empaque antes del embarque. Cualquier cambio en piezas por caja, palé, longitud o mezcla puede modificar dimensiones, peso y carga estimada. Registre la versión aprobada y actualice los documentos.",
            "Solicite evidencia del pedido terminado que permita revisar identificación, protección, estado de cajas y organización de la carga. Una lista completa ayuda a resolver diferencias antes de que el contenedor salga, cuando todavía existen opciones prácticas de corrección.",
          ],
          en: [
            "Align the quotation, sample, label, carton and packing list before shipment. Any change in pieces per carton, pallet, length or mix can change dimensions, weight and estimated loading. Record the approved version and update the documents.",
            "Request finished-order evidence that allows product identification, protection, carton condition and loading organization to be reviewed. A complete checklist helps resolve differences before the container departs, while practical correction is still possible.",
          ],
        },
        bullets: {
          es: ["Perfil, diseño, color y longitud correctos", "Piezas y cobertura por caja", "Dimensiones y peso bruto terminados", "Protección y caja aprobadas", "Etiquetas y marcas correctas", "Palés y madera conformes", "Carga estimada dentro de límites", "Fotos y lista de empaque coincidentes", "Método de descarga confirmado", "Cambios documentados antes de embarcar"],
          en: ["Correct profile, décor, colour and length", "Pieces and coverage per carton", "Finished dimensions and gross weight", "Approved protection and carton", "Correct labels and marks", "Compliant pallets and wood", "Loading estimate within limits", "Matching photographs and packing list", "Confirmed unloading method", "Changes documented before shipment"],
        },
      },
    ],
  },
];

export const blogPostSlugs = (locale: Locale) =>
  blogPosts
    .filter((post) => !post.locales || post.locales.includes(locale))
    .map((post) => post.localizedSlug?.[locale] ?? post.slug);

export const getBlogPost = (slug: string, locale?: Locale) => blogPosts.find((post) => {
  if (locale) {
    if (post.locales && !post.locales.includes(locale)) return false;
    return (post.localizedSlug?.[locale] ?? post.slug) === slug;
  }
  if (post.slug === slug) return true;
  return Object.values(post.localizedSlug ?? {}).includes(slug);
});

export const blogPostLocales = (post: BlogPost): Locale[] => post.locales ?? ["es", "en"];

export const localizedBlogPostPath = (slug: string, locale: Locale) =>
  locale === "es"
    ? `/blog/${getBlogPost(slug)?.localizedSlug?.es ?? slug}/`
    : `/en/blog/${getBlogPost(slug)?.localizedSlug?.en ?? slug}/`;
