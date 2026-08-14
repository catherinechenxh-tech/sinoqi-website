export type Locale = "es" | "en";

export const pageSlugs = [
  "products",
  "pvc-ceiling-panel",
  "wpc-wall-panel",
  "uv-marble-sheet",
  "spc-flooring",
  "manufacturing",
  "applications",
  "about",
  "faq",
  "download",
  "blog",
  "contact",
] as const;

export type PageSlug = (typeof pageSlugs)[number];
export type PageKey = "home" | PageSlug;
export type NavigationKey = "home" | "products" | "applications" | "manufacturing" | "about" | "faq";

export const routes: Record<PageKey, string> = {
  home: "/",
  products: "/products/",
  "pvc-ceiling-panel": "/pvc-ceiling-panel/",
  "wpc-wall-panel": "/wpc-wall-panel/",
  "uv-marble-sheet": "/uv-marble-sheet/",
  "spc-flooring": "/spc-flooring/",
  manufacturing: "/manufacturing/",
  applications: "/applications/",
  about: "/about/",
  faq: "/faq/",
  download: "/download/",
  blog: "/blog/",
  contact: "/contact/",
};

export const localizedPath = (key: PageKey, locale: Locale) => {
  const path = routes[key];
  if (locale === "es") return path;
  return path === "/" ? "/en/" : `/en${path}`;
};

export const asset = {
  logo: "/assets/logo.jpg",
  factory: "/assets/pvc-ceiling.jpg",
  pvc: "/assets/pvc-ceiling.jpg",
  wpc: "/assets/wpc-wall-panel.png",
  uv: "/assets/uv-marble-sheet.jpg",
  spc: "/assets/spc-flooring-placeholder.svg",
  pvcProduction: "/assets/pvc-ceiling.jpg",
  wpcProduction: "/assets/wpc-production.jpg",
  uvProduction: "/assets/uv-production.jpg",
  loading: "/assets/container-loading.jpg",
  samplePvc: "/assets/sample-pvc.jpg",
  sampleUv: "/assets/sample-uv.jpg",
  catalogCover: "/assets/catalog-cover.jpg",
};

export const company = {
  legalName: "Hangzhou Sinoqi Industry and Trade Co.,LTD",
  brand: "SINOQI",
  email: "catherinechen@siqiglobal.com",
  phone: "+86 18458225568",
  phoneHref: "+8618458225568",
  whatsappHref: "https://wa.me/8618458225568",
  address:
    "No. 169 Dongqiao Road, Fuyang District, Hangzhou, Zhejiang, China",
  workingHours: {
    es: "Lunes–viernes, 09:00–18:00 (hora estándar de China, UTC+8)",
    en: "Monday–Friday, 09:00–18:00 (China Standard Time, UTC+8)",
  },
  googleMaps:
    "https://www.google.com/maps/place/169+Dongqiao+Rd,+Fu+Yang+Qu,+Hang+Zhou+Shi,+Zhe+Jiang+Sheng,+China,+311418/@30.0823946,120.0411197,988m/data=!3m2!1e3!4b1!4m6!3m5!1s0x344b827353e64a21:0x5db9e2982b17d60f!8m2!3d30.08239!4d120.0437!16s%2Fg%2F11n8qy421p?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",
  linkedin: "https://www.linkedin.com/in/catherine-buildingmaterial/",
  youtube: "https://www.youtube.com/@CatherineChen-qw9gp",
};

export const products: Array<{
  key: Extract<PageKey, "pvc-ceiling-panel" | "wpc-wall-panel" | "uv-marble-sheet" | "spc-flooring">;
  image: string;
  es: { name: string; summary: string };
  en: { name: string; summary: string };
}> = [
  {
    key: "pvc-ceiling-panel",
    image: asset.pvc,
    es: {
      name: "Panel de techo PVC",
      summary: "Sistemas de techo ligeros con opciones de diseño y ancho personalizadas.",
    },
    en: {
      name: "PVC Ceiling Panel",
      summary: "Lightweight ceiling systems with custom width and design options.",
    },
  },
  {
    key: "wpc-wall-panel",
    image: asset.wpc,
    es: {
      name: "Panel de pared WPC",
      summary: "Perfiles decorativos para proyectos interiores residenciales y comerciales.",
    },
    en: {
      name: "WPC Wall Panel",
      summary: "Decorative profiles for residential and commercial interior projects.",
    },
  },
  {
    key: "uv-marble-sheet",
    image: asset.uv,
    es: {
      name: "Lámina de mármol UV",
      summary: "Superficies decorativas efecto mármol para paredes y renovación interior.",
    },
    en: {
      name: "UV Marble Sheet",
      summary: "Marble-effect decorative surfaces for walls and interior renovation.",
    },
  },
  {
    key: "spc-flooring",
    image: asset.spc,
    es: {
      name: "Piso SPC",
      summary: "Colecciones de pisos rígidos en formatos seleccionados del catálogo.",
    },
    en: {
      name: "SPC Flooring",
      summary: "Rigid flooring collections in selected catalog formats.",
    },
  },
];

export const navigation: Record<Locale, Array<{ key: NavigationKey; label: string }>> = {
  es: [
    { key: "home", label: "Inicio" },
    { key: "products", label: "Productos" },
    { key: "applications", label: "Aplicaciones" },
    { key: "manufacturing", label: "Fabricación" },
    { key: "about", label: "Nosotros" },
    { key: "faq", label: "FAQ" },
  ],
  en: [
    { key: "home", label: "Home" },
    { key: "products", label: "Products" },
    { key: "applications", label: "Applications" },
    { key: "manufacturing", label: "Manufacturing" },
    { key: "about", label: "About" },
    { key: "faq", label: "FAQ" },
  ],
};

export const meta: Record<Locale, Record<PageKey, { title: string; description: string }>> = {
  es: {
    home: {
      title: "SINOQI | Materiales decorativos para distribuidores",
      description: "Paneles de techo PVC, paneles WPC, láminas de mármol UV y pisos SPC con fabricación y comercio integrados en Hangzhou, China.",
    },
    products: {
      title: "Productos de materiales decorativos B2B | SINOQI",
      description: "Explore las cuatro líneas principales de SINOQI: paneles de techo PVC, paneles de pared WPC, láminas de mármol UV y pisos SPC.",
    },
    "pvc-ceiling-panel": {
      title: "Paneles de Techo PVC para Importadores | SINOQI",
      description: "Paneles de techo PVC de fabricante en China para importadores y distribuidores. Anchos de 25/30 cm y MOQ de 100 piezas por modelo y color.",
    },
    "wpc-wall-panel": {
      title: "Fabricante de paneles de pared WPC | SINOQI",
      description: "Paneles de pared WPC decorativos para distribución y proyectos interiores, con opciones evaluadas según cada solicitud.",
    },
    "uv-marble-sheet": {
      title: "Proveedor de láminas de mármol UV | SINOQI",
      description: "Láminas decorativas efecto mármol UV para paredes y renovación interior, disponibles para programas de distribución.",
    },
    "spc-flooring": {
      title: "Proveedor de pisos SPC | SINOQI",
      description: "Colecciones de pisos SPC para distribuidores con formatos seleccionados del catálogo y soporte de cotización.",
    },
    manufacturing: {
      title: "Fabricación de materiales decorativos en China | SINOQI",
      description: "Conozca la fabricación, almacén, líneas de producción y capacidad de carga de SINOQI en Hangzhou.",
    },
    applications: {
      title: "Aplicaciones de paneles y pisos decorativos | SINOQI",
      description: "Explore aplicaciones orientativas para techos PVC, paredes WPC, láminas UV y pisos SPC.",
    },
    about: {
      title: "Sobre SINOQI | Industria y comercio desde 1990",
      description: "Hangzhou Sinoqi Industry and Trade Co.,LTD integra fabricación y comercio de materiales decorativos desde 1990.",
    },
    faq: {
      title: "Preguntas frecuentes para compradores B2B | SINOQI",
      description: "Respuestas sobre muestras, MOQ, plazo, personalización, embalaje y proceso de cotización.",
    },
    download: {
      title: "Catálogo PVC y WPC | SINOQI",
      description: "Solicite por correo el catálogo bilingüe EN+ES de paneles de techo PVC, paneles PVC y paneles WPC de SINOQI.",
    },
    blog: {
      title: "Blog de compra de materiales decorativos | SINOQI",
      description: "Guías verificadas para compradores B2B de paneles de techo PVC, paneles WPC, láminas UV y pisos SPC.",
    },
    contact: {
      title: "Solicite una cotización | SINOQI",
      description: "Comparta su producto, cantidad, mercado y necesidades de personalización. Respondemos en un día laborable.",
    },
  },
  en: {
    home: {
      title: "SINOQI | Decorative Materials for Distributors",
      description: "PVC ceiling panels, WPC wall panels, UV marble sheets and SPC flooring from an integrated manufacturing and trading company in Hangzhou, China.",
    },
    products: {
      title: "B2B Decorative Material Products | SINOQI",
      description: "Explore four core SINOQI product lines: PVC ceiling panels, WPC wall panels, UV marble sheets and SPC flooring.",
    },
    "pvc-ceiling-panel": {
      title: "PVC Ceiling Panels Manufacturer & Supplier | SINOQI",
      description: "Source PVC ceiling panels from a China manufacturer and supplier: 25/30 cm regular widths, 100-piece MOQ per design and color, and OEM review.",
    },
    "wpc-wall-panel": {
      title: "WPC Wall Panel Manufacturer | SINOQI",
      description: "Decorative WPC wall panels for distribution and interior projects, with options evaluated for each request.",
    },
    "uv-marble-sheet": {
      title: "UV Marble Sheet Supplier | SINOQI",
      description: "Marble-effect UV decorative sheets for walls and interior renovation, available for distribution programs.",
    },
    "spc-flooring": {
      title: "SPC Flooring Supplier | SINOQI",
      description: "SPC flooring collections for distributors with selected catalog sizes and quotation support.",
    },
    manufacturing: {
      title: "China Decorative Materials Manufacturing | SINOQI",
      description: "Explore SINOQI manufacturing, warehouse, production lines and loading capability in Hangzhou.",
    },
    applications: {
      title: "Decorative Panel and Flooring Applications | SINOQI",
      description: "Explore indicative applications for PVC ceilings, WPC walls, UV sheets and SPC flooring.",
    },
    about: {
      title: "About SINOQI | Manufacturing and Trade Since 1990",
      description: "Hangzhou Sinoqi Industry and Trade Co.,LTD has combined manufacturing and trade in decorative materials since 1990.",
    },
    faq: {
      title: "B2B Buyer FAQ | SINOQI",
      description: "Answers about samples, MOQ, lead time, customization, packing and the quotation process.",
    },
    download: {
      title: "PVC and WPC Catalog | SINOQI",
      description: "Request the SINOQI bilingual EN+ES catalog for PVC ceiling panels, PVC panels and WPC panels by email.",
    },
    blog: {
      title: "Decorative Materials Sourcing Blog | SINOQI",
      description: "Verified guides for B2B buyers sourcing PVC ceiling panels, WPC panels, UV sheets and SPC flooring.",
    },
    contact: {
      title: "Request a Custom Quote | SINOQI",
      description: "Tell us your product, quantity, market and customization needs. We reply within one business day.",
    },
  },
};

export const isPageSlug = (value: string): value is PageSlug =>
  pageSlugs.includes(value as PageSlug);
