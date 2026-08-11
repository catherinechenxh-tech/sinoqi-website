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
  publishedAt: string;
  category: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  introduction: LocalizedText;
  readingTime: LocalizedText;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
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
];

export const blogPostSlugs = blogPosts.map((post) => post.slug);

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export const localizedBlogPostPath = (slug: string, locale: Locale) =>
  locale === "es" ? `/blog/${slug}/` : `/en/blog/${slug}/`;
