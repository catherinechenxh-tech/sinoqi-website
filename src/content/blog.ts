import type { Locale } from "@/content/site";

type LocalizedText = Record<Locale, string>;

export type BlogSection = {
  id: string;
  title: LocalizedText;
  paragraphs: Record<Locale, string[]>;
  bullets?: Record<Locale, string[]>;
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
