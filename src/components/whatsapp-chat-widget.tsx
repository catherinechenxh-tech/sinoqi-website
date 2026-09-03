"use client";

import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { company, type Locale } from "@/content/site";

const AUTO_OPEN_DELAY = 8_000;
const MOBILE_VIEWPORT_QUERY = "(max-width: 767.98px)";
const MOBILE_CTA_GAP = 12;
const MOBILE_CTA_SELECTOR = [
  "main a.button",
  "main button.button",
  "main a[href^='https://wa.me/']",
  "main a[href^='https://api.whatsapp.com/']",
].join(",");
const SESSION_KEY = "sinoqi-whatsapp-greeting-shown";
const CONTACT_PATHS = new Set([
  "/contact/",
  "/en/contact/",
]);
const MOBILE_FORM_SELECTORS = new Map([
  ["/contact/", ".contact-inquiry-form"],
  ["/en/contact/", ".contact-inquiry-form"],
  ["/download/", ".catalog-form"],
  ["/en/download/", ".catalog-form"],
]);
const AUTO_OPEN_EXCLUDED_PATHS = new Set([
  ...CONTACT_PATHS,
  "/download/",
  "/en/download/",
]);

const copy = {
  es: {
    greeting: "Hola 👋",
    message: "¿Buscas paneles de techo PVC, paneles de pared WPC o pisos SPC? Escríbenos por WhatsApp para recibir el catálogo, las especificaciones y una cotización.",
    cta: "Chatear por WhatsApp",
    close: "Cerrar chat de WhatsApp",
    floating: "Contactar a SINOQI DECOR por WhatsApp",
    prefilled(pageTitle: string, pageUrl: string) {
      return `Hola, estoy viendo la página “${pageTitle}” de SINOQI DECOR. Me gustaría recibir el catálogo, las especificaciones y una cotización.\n\nPágina:\n${pageUrl}`;
    },
  },
  en: {
    greeting: "Hello 👋",
    message: "Looking for PVC ceiling panels, WPC wall panels, or SPC flooring? Message us on WhatsApp to receive catalogs, specifications and a quotation.",
    cta: "Chat on WhatsApp",
    close: "Close WhatsApp chat",
    floating: "Contact SINOQI DECOR on WhatsApp",
    prefilled(pageTitle: string, pageUrl: string) {
      return `Hello, I am viewing the “${pageTitle}” page on SINOQI DECOR. I would like to receive the catalog, specifications and a quotation.\n\nPage:\n${pageUrl}`;
    },
  },
} satisfies Record<Locale, {
  greeting: string;
  message: string;
  cta: string;
  close: string;
  floating: string;
  prefilled: (pageTitle: string, pageUrl: string) => string;
}>;

function normalizePath(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path d="M16 4.25A11.4 11.4 0 0 0 6.2 21.5L4.8 27.75l6.35-1.55A11.4 11.4 0 1 0 16 4.25Z" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M12.05 10.2c.3-.2.75-.2 1.05.05l1.65 1.55c.3.28.36.72.15 1.07l-.85 1.35c.95 1.9 2.2 3.15 4.12 4.12l1.35-.84c.35-.22.8-.16 1.08.14l1.55 1.66c.26.28.28.72.06 1.04l-.8 1.15c-.46.67-1.28 1-2.08.84-5.36-1.05-9.56-5.25-10.62-10.61-.15-.8.18-1.62.85-2.08l1.15-.8Z" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppChatWidget() {
  const pathname = usePathname();
  const normalizedPath = normalizePath(pathname);
  const language: Locale = normalizedPath === "/en/" || normalizedPath.startsWith("/en/") ? "en" : "es";
  const t = copy[language];
  const [open, setOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [mobileFormActive, setMobileFormActive] = useState(false);
  const [mobileCtaOffset, setMobileCtaOffset] = useState(0);
  const [mobilePositionedPath, setMobilePositionedPath] = useState("");
  const [whatsappHref, setWhatsAppHref] = useState(company.whatsappHref);
  const autoOpenHandledRef = useRef(false);
  const floatingButtonRef = useRef<HTMLButtonElement>(null);
  const mobileCtaOffsetRef = useRef(0);
  const widgetRef = useRef<HTMLDivElement>(null);

  const markGreetingHandled = useCallback(() => {
    autoOpenHandledRef.current = true;
    try {
      window.sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Storage can be unavailable; the widget remains fully usable without it.
    }
  }, []);

  const closeChat = useCallback((restoreFocus = false) => {
    markGreetingHandled();
    setOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => floatingButtonRef.current?.focus());
    }
  }, [markGreetingHandled]);

  useEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_VIEWPORT_QUERY);
    const syncViewport = () => {
      setIsMobileViewport(mobileQuery.matches);
      if (mobileQuery.matches) {
        setOpen(false);
      }
    };
    const frame = window.requestAnimationFrame(syncViewport);
    mobileQuery.addEventListener("change", syncViewport);
    return () => {
      window.cancelAnimationFrame(frame);
      mobileQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  useEffect(() => {
    const formSelector = MOBILE_FORM_SELECTORS.get(normalizedPath);
    if (!isMobileViewport || !formSelector) {
      const frame = window.requestAnimationFrame(() => setMobileFormActive(false));
      return () => window.cancelAnimationFrame(frame);
    }

    const form = document.querySelector(formSelector);
    if (!form) return;

    let formIntersectsViewport = false;
    let focusFrame = 0;
    const updateSuppression = () => {
      const shouldSuppress = formIntersectsViewport || form.contains(document.activeElement);
      setMobileFormActive(shouldSuppress);
      if (shouldSuppress) {
        setOpen(false);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      formIntersectsViewport = entry.isIntersecting;
      updateSuppression();
    });
    const handleFocusIn = () => updateSuppression();
    const handleFocusOut = () => {
      focusFrame = window.requestAnimationFrame(updateSuppression);
    };
    observer.observe(form);
    form.addEventListener("focusin", handleFocusIn);
    form.addEventListener("focusout", handleFocusOut);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      observer.disconnect();
      form.removeEventListener("focusin", handleFocusIn);
      form.removeEventListener("focusout", handleFocusOut);
    };
  }, [isMobileViewport, normalizedPath]);

  useEffect(() => {
    if (!isMobileViewport) {
      mobileCtaOffsetRef.current = 0;
      const frame = window.requestAnimationFrame(() => {
        setMobileCtaOffset(0);
        setMobilePositionedPath("");
      });
      return () => window.cancelAnimationFrame(frame);
    }

    let frame = 0;
    let active = true;
    const updateMobileCtaOffset = () => {
      const widget = widgetRef.current;
      const floatingButton = floatingButtonRef.current;
      if (!widget || !floatingButton) return;

      const buttonRect = floatingButton.getBoundingClientRect();
      const computedBottom = Number.parseFloat(window.getComputedStyle(widget).bottom) || 0;
      const baseBottom = Math.max(0, computedBottom - mobileCtaOffsetRef.current);
      const baseTop = window.innerHeight - baseBottom - buttonRect.height;
      const buttonLeft = buttonRect.left;
      const buttonRight = buttonRect.right;
      const targetRects = Array.from(document.querySelectorAll<HTMLElement>(MOBILE_CTA_SELECTOR))
        .filter((target) => !target.closest(".whatsapp-widget"))
        .map((target) => target.getBoundingClientRect())
        .filter((rect) => (
          rect.bottom > 0
          && rect.top < window.innerHeight
          && rect.right > buttonLeft
          && rect.left < buttonRight
        ));

      let safeTop = baseTop;
      for (let index = 0; index <= targetRects.length; index += 1) {
        const conflicts = targetRects.filter((rect) => (
          rect.top < safeTop + buttonRect.height
          && rect.bottom > safeTop
        ));
        if (conflicts.length === 0) break;
        safeTop = Math.min(...conflicts.map((rect) => rect.top - MOBILE_CTA_GAP - buttonRect.height));
      }

      const nextOffset = Math.max(0, Math.round(baseTop - Math.max(MOBILE_CTA_GAP, safeTop)));
      if (nextOffset !== mobileCtaOffsetRef.current) {
        mobileCtaOffsetRef.current = nextOffset;
        setMobileCtaOffset(nextOffset);
      }
      setMobilePositionedPath(normalizedPath);
    };
    const scheduleUpdate = () => {
      if (!active) return;
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateMobileCtaOffset);
    };

    scheduleUpdate();
    const settleTimers = [
      window.setTimeout(scheduleUpdate, 150),
      window.setTimeout(scheduleUpdate, 600),
    ];
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(document.documentElement);
    void document.fonts.ready.then(scheduleUpdate);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      active = false;
      window.cancelAnimationFrame(frame);
      settleTimers.forEach((timer) => window.clearTimeout(timer));
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [isMobileViewport, normalizedPath]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const message = t.prefilled(document.title, window.location.href);
      setWhatsAppHref(`${company.whatsappHref}?text=${encodeURIComponent(message)}`);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, t]);

  useEffect(() => {
    const closeFrame = window.requestAnimationFrame(() => setOpen(false));
    if (AUTO_OPEN_EXCLUDED_PATHS.has(normalizedPath)) {
      return () => window.cancelAnimationFrame(closeFrame);
    }

    if (isMobileViewport) {
      return () => window.cancelAnimationFrame(closeFrame);
    }

    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === "true") {
        autoOpenHandledRef.current = true;
      }
    } catch {
      // Fall back to the in-memory session guard when storage is unavailable.
    }

    if (autoOpenHandledRef.current) {
      return () => window.cancelAnimationFrame(closeFrame);
    }
    const timer = window.setTimeout(() => {
      if (autoOpenHandledRef.current) return;
      if (window.matchMedia(MOBILE_VIEWPORT_QUERY).matches) return;
      markGreetingHandled();
      setOpen(true);
    }, AUTO_OPEN_DELAY);

    return () => {
      window.cancelAnimationFrame(closeFrame);
      window.clearTimeout(timer);
    };
  }, [isMobileViewport, markGreetingHandled, normalizedPath]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      closeChat(true);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeChat, open]);

  const toggleChat = () => {
    markGreetingHandled();
    setOpen((current) => !current);
  };

  if (isMobileViewport && mobileFormActive) {
    return null;
  }

  return (
    <div
      className="whatsapp-widget"
      data-mobile-position-ready={mobilePositionedPath === normalizedPath ? "true" : "false"}
      ref={widgetRef}
      style={{ "--whatsapp-mobile-cta-offset": `${mobileCtaOffset}px` } as CSSProperties}
    >
      {open ? (
        <aside aria-label="WhatsApp" className="whatsapp-widget__card" id="whatsapp-chat-card">
          <div className="whatsapp-widget__header">
            <span className="whatsapp-widget__brand-icon"><WhatsAppIcon /></span>
            <strong>SINOQI DECOR</strong>
            <button aria-label={t.close} className="whatsapp-widget__close" onClick={() => closeChat(true)} type="button">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="whatsapp-widget__body">
            <p className="whatsapp-widget__greeting">{t.greeting}</p>
            <p>{t.message}</p>
            <a
              className="whatsapp-widget__cta"
              data-ga-placement="whatsapp_floating_widget"
              href={whatsappHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon />
              <span>{t.cta}</span>
            </a>
          </div>
        </aside>
      ) : null}
      <button
        aria-controls="whatsapp-chat-card"
        aria-expanded={open}
        aria-label={t.floating}
        className="whatsapp-widget__floating"
        onClick={toggleChat}
        ref={floatingButtonRef}
        type="button"
      >
        <WhatsAppIcon />
      </button>
    </div>
  );
}
