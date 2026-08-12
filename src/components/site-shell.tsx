"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import {
  asset,
  company,
  localizedPath,
  navigation,
  products,
  type Locale,
  type NavigationKey,
  type PageKey,
} from "@/content/site";

type ProductKey = (typeof products)[number]["key"];

const copy = {
  es: {
    quote: "Solicitar cotización",
    language: "English",
    menu: "Menú",
    closeMenu: "Cerrar menú",
    products: "Productos",
    productLines: "Líneas de producto",
    productsIntro: "Cuatro líneas confirmadas para distribución y proyectos",
    viewAllProducts: "Ver todos los productos",
    sourcing: "Planifique su compra",
    sourcingIntro: "Explore los productos por uso o revise la capacidad de fabricación antes de solicitar una cotización.",
    applicationsLink: "Elegir por aplicación",
    manufacturingLink: "Ver fabricación",
    navigation: "Navegación",
    contact: "Contacto",
    response: "Respuesta en un día laborable",
    footer: "Materiales decorativos para distribuidores, importadores y compradores de proyectos.",
    companyType: "Fabricación y comercio integrados desde 1990.",
    legal: "Nombre legal",
    policies: "Políticas",
    inquiryPrivacy: "Privacidad de consultas",
    samplePolicy: "Política de muestras",
    resources: "Recursos",
    catalog: "Catálogo",
    downloadCatalog: "Descargar catálogo",
    social: "Canales oficiales",
  },
  en: {
    quote: "Request a Custom Quote",
    language: "Español",
    menu: "Menu",
    closeMenu: "Close menu",
    products: "Products",
    productLines: "Product lines",
    productsIntro: "Four confirmed lines for distribution and project sourcing",
    viewAllProducts: "View all products",
    sourcing: "Plan your sourcing",
    sourcingIntro: "Explore products by use or review manufacturing capability before requesting a quote.",
    applicationsLink: "Choose by application",
    manufacturingLink: "View manufacturing",
    navigation: "Navigation",
    contact: "Contact",
    response: "Reply within one business day",
    footer: "Decorative materials for distributors, importers and project buyers.",
    companyType: "Integrated manufacturing and trade since 1990.",
    legal: "Legal name",
    policies: "Policies",
    inquiryPrivacy: "Inquiry privacy",
    samplePolicy: "Sample policy",
    resources: "Resources",
    catalog: "Catalog",
    downloadCatalog: "Download Catalog",
    social: "Official channels",
  },
};

const productCategories: Record<Locale, Record<ProductKey, string>> = {
  es: {
    "pvc-ceiling-panel": "Sistemas de techo",
    "wpc-wall-panel": "Paredes interiores",
    "uv-marble-sheet": "Superficies decorativas",
    "spc-flooring": "Pisos rígidos",
  },
  en: {
    "pvc-ceiling-panel": "Ceiling systems",
    "wpc-wall-panel": "Interior walls",
    "uv-marble-sheet": "Decorative surfaces",
    "spc-flooring": "Rigid flooring",
  },
};

type DirectNavigationKey = Exclude<NavigationKey, "products">;

function normalizePath(path: string) {
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
}

function languagePath(pathname: string, targetLocale: Locale) {
  const normalized = normalizePath(pathname);
  const basePath = normalized === "/en/"
    ? "/"
    : normalized.startsWith("/en/")
      ? normalized.slice(3)
      : normalized;

  if (targetLocale === "es") return basePath;
  return basePath === "/" ? "/en/" : `/en${basePath}`;
}

export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productTriggerRef = useRef<HTMLButtonElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const t = copy[locale];
  const otherLocale: Locale = locale === "es" ? "en" : "es";
  const currentPath = normalizePath(pathname);
  const alternatePath = languagePath(pathname, otherLocale);

  const isActive = (key: PageKey) => currentPath === normalizePath(localizedPath(key, locale));
  const productsActive = isActive("products") || products.some((product) => isActive(product.key));
  const directNavigation = navigation[locale].filter(
    (item): item is { key: DirectNavigationKey; label: string } => item.key !== "products",
  );
  const footerNavigation = directNavigation.filter((item) => item.key !== "faq");

  const closeProducts = useCallback((restoreFocus = false) => {
    setProductsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => productTriggerRef.current?.focus());
    }
  }, []);

  const closeMobileMenu = useCallback((restoreFocus = false) => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => mobileTriggerRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setProductsOpen(false);
      setMobileOpen(false);
      setMobileProductsOpen(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    if (!productsOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!megaMenuRef.current?.contains(target) && !productTriggerRef.current?.contains(target)) {
        closeProducts();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeProducts(true);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeProducts, productsOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => mobileCloseRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu(true);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = Array.from(
        mobileDrawerRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      ).filter((element) => !element.hidden && element.getClientRects().length > 0);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMobileMenu, mobileOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const handleBreakpointChange = () => {
      if (desktopQuery.matches) {
        closeMobileMenu();
      } else {
        closeProducts();
      }
    };

    handleBreakpointChange();
    desktopQuery.addEventListener("change", handleBreakpointChange);
    return () => desktopQuery.removeEventListener("change", handleBreakpointChange);
  }, [closeMobileMenu, closeProducts]);

  const handleProductTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    setProductsOpen(true);
    window.requestAnimationFrame(() => megaMenuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus());
  };

  const handleMegaMenuKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) return;
    const links = Array.from(megaMenuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);
    if (links.length === 0) return;
    const currentIndex = Math.max(0, links.indexOf(document.activeElement as HTMLAnchorElement));
    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (currentIndex + direction + links.length) % links.length;
    event.preventDefault();
    links[nextIndex].focus();
  };

  return (
    <div lang={locale}>
      <a className="skip-link" href="#main-content">
        {locale === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <header className="site-header">
        <div className="topbar">
          <div className="container topbar__inner">
            <span>{t.response}</span>
            <span className="topbar__contact">
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span aria-hidden="true">·</span>
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </span>
          </div>
        </div>
        <div className="container nav-wrap">
          <Link className="brand" href={localizedPath("home", locale)} aria-label={`${company.brand} home`}>
            <Image src={asset.logo} alt="S·Q logo" width={56} height={56} priority />
            <span><strong>SINOQI</strong></span>
          </Link>
          <nav className="desktop-nav" aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
            {navigation[locale].map((item) =>
              item.key === "products" ? (
                <div className={`nav-product ${productsActive ? "is-active" : ""}`} key={item.key}>
                  <button
                    aria-controls="products-mega-menu"
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                    className="mega-menu-trigger"
                    id="products-menu-trigger"
                    onClick={() => setProductsOpen((open) => !open)}
                    onKeyDown={handleProductTriggerKeyDown}
                    ref={productTriggerRef}
                    type="button"
                  >
                    {item.label}
                    <span aria-hidden="true" className="menu-chevron">⌄</span>
                  </button>
                  <div
                    aria-labelledby="products-menu-trigger"
                    className="mega-menu"
                    hidden={!productsOpen}
                    id="products-mega-menu"
                    onKeyDown={handleMegaMenuKeyDown}
                    ref={megaMenuRef}
                  >
                    <div className="mega-menu__header">
                      <div>
                        <span><strong>{t.productLines}</strong>{t.productsIntro}</span>
                        <Link href={localizedPath("products", locale)} aria-current={isActive("products") ? "page" : undefined}>
                          {t.viewAllProducts}<span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                    <div className="mega-menu__body">
                      <div className="mega-menu__products">
                        {products.map((product) => (
                          <Link
                            className="mega-product"
                            href={localizedPath(product.key, locale)}
                            key={product.key}
                            aria-current={isActive(product.key) ? "page" : undefined}
                          >
                            <Image
                              alt=""
                              height={72}
                              sizes="96px"
                              src={product.image}
                              width={96}
                            />
                            <span className="mega-product__copy">
                              <small>{productCategories[locale][product.key]}</small>
                              <strong>{product[locale].name}</strong>
                              <span>{product[locale].summary}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <aside className="mega-menu__aside">
                        <span className="mega-menu__eyebrow">{t.sourcing}</span>
                        <p>{t.sourcingIntro}</p>
                        <Link href={localizedPath("applications", locale)}>
                          <span>{t.applicationsLink}</span><span aria-hidden="true">→</span>
                        </Link>
                        <Link href={localizedPath("manufacturing", locale)}>
                          <span>{t.manufacturingLink}</span><span aria-hidden="true">→</span>
                        </Link>
                      </aside>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={localizedPath(item.key, locale)}
                  key={item.key}
                  aria-current={isActive(item.key) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link href={localizedPath("download", locale)} aria-current={isActive("download") ? "page" : undefined}>
              {t.downloadCatalog}
            </Link>
          </nav>
          <div className="nav-actions">
            <Link className="language-link" href={alternatePath} hrefLang={otherLocale}>
              {t.language}
            </Link>
            <Link className="button button--small button--orange" href={`${localizedPath("contact", locale)}#inquiry`}>
              {t.quote}
            </Link>
          </div>
          <button
            aria-controls="mobile-navigation-drawer"
            aria-expanded={mobileOpen}
            aria-label={t.menu}
            className="mobile-menu-trigger"
            onClick={() => setMobileOpen(true)}
            ref={mobileTriggerRef}
            type="button"
          >
            <span>{t.menu}</span>
            <span className="mobile-menu-trigger__icon" aria-hidden="true"><i /><i /><i /></span>
          </button>
        </div>
      </header>
        {mobileOpen ? (
          <div className="mobile-drawer-shell">
            <button
              aria-label={t.closeMenu}
              className="mobile-drawer__backdrop"
              onClick={() => closeMobileMenu(true)}
              tabIndex={-1}
              type="button"
            />
            <div
              aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}
              aria-modal="true"
              className="mobile-drawer"
              id="mobile-navigation-drawer"
              ref={mobileDrawerRef}
              role="dialog"
            >
              <div className="mobile-drawer__header">
                <span>{t.menu}</span>
                <button aria-label={t.closeMenu} onClick={() => closeMobileMenu(true)} ref={mobileCloseRef} type="button">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <nav className="mobile-drawer__nav" aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}>
                {directNavigation.slice(0, 1).map((item) => (
                  <Link href={localizedPath(item.key, locale)} key={item.key} aria-current={isActive(item.key) ? "page" : undefined}>
                    {item.label}
                  </Link>
                ))}
                <button
                  aria-controls="mobile-product-links"
                  aria-expanded={mobileProductsOpen}
                  className="mobile-products-trigger"
                  onClick={() => setMobileProductsOpen((open) => !open)}
                  type="button"
                >
                  <span>{t.products}</span>
                  <span aria-hidden="true">{mobileProductsOpen ? "−" : "+"}</span>
                </button>
                <div className="mobile-products" hidden={!mobileProductsOpen} id="mobile-product-links">
                  <Link
                    className="mobile-products__all"
                    href={localizedPath("products", locale)}
                    aria-current={isActive("products") ? "page" : undefined}
                  >
                    <small>{t.productLines}</small>
                    <span>{t.viewAllProducts}</span>
                  </Link>
                  {products.map((product) => (
                    <Link
                      href={localizedPath(product.key, locale)}
                      key={product.key}
                      aria-current={isActive(product.key) ? "page" : undefined}
                    >
                      <small>{productCategories[locale][product.key]}</small>
                      <span>{product[locale].name}</span>
                    </Link>
                  ))}
                </div>
                {directNavigation.slice(1).map((item) => (
                  <Link href={localizedPath(item.key, locale)} key={item.key} aria-current={isActive(item.key) ? "page" : undefined}>
                    {item.label}
                  </Link>
                ))}
                <Link href={localizedPath("download", locale)} aria-current={isActive("download") ? "page" : undefined}>
                  {t.downloadCatalog}
                </Link>
              </nav>
              <div className="mobile-drawer__actions">
                <Link className="button button--orange" href={`${localizedPath("contact", locale)}#inquiry`}>
                  {t.quote}
                </Link>
                <Link className="mobile-drawer__language" href={alternatePath} hrefLang={otherLocale}>{t.language}</Link>
              </div>
            </div>
          </div>
        ) : null}
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link className="brand brand--footer" href={localizedPath("home", locale)}>
              <Image src={asset.logo} alt="S·Q logo" width={52} height={52} />
              <span><strong>SINOQI</strong></span>
            </Link>
            <p>{t.footer}</p>
            <p className="footer-brand__meta">{t.companyType}</p>
          </div>
          <div>
            <h2>{t.navigation}</h2>
            {footerNavigation.map((item) => (
              <Link href={localizedPath(item.key, locale)} key={item.key}>{item.label}</Link>
            ))}
          </div>
          <div>
            <h2>{t.products}</h2>
            <Link href={localizedPath("products", locale)}>{t.viewAllProducts}</Link>
            {products.map((product) => (
              <Link href={localizedPath(product.key, locale)} key={product.key}>{product[locale].name}</Link>
            ))}
          </div>
          <div>
            <h2>{t.resources}</h2>
            <Link href={localizedPath("faq", locale)}>FAQ</Link>
            <Link href={localizedPath("download", locale)}>{t.catalog}</Link>
            <Link href={localizedPath("blog", locale)}>Blog</Link>
          </div>
          <div>
            <h2>{t.contact}</h2>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            <p>{company.address}</p>
            <p className="footer-social__label">{t.social}</p>
            <div className="footer-social">
              <a href={company.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
              <a href={company.youtube} rel="noreferrer" target="_blank">YouTube</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <div className="footer-bottom__legal">
            <span>© {new Date().getFullYear()} {company.brand}</span>
            <span>{t.legal}: {company.legalName}</span>
          </div>
          <nav className="footer-policy-links" aria-label={t.policies}>
            <Link href={`${localizedPath("contact", locale)}#inquiry-privacy`}>{t.inquiryPrivacy}</Link>
            <Link href={`${localizedPath("contact", locale)}#sample-policy`}>{t.samplePolicy}</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
