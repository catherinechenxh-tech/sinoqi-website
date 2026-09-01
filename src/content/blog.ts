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
  kind?: "pvc-ceiling-designs-finishes" | "pvc-ceiling-bathroom-guide" | "pvc-ceiling-sizes-specifications" | "wpc-wall-panel-designs-colors" | "uv-marble-sheet-designs-colors" | "spc-flooring-explainer" | "spc-vs-lvp-guide";
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
