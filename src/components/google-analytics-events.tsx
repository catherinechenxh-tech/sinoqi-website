"use client";

import { useEffect } from "react";
import type { Locale } from "@/content/site";
import { trackGa4BusinessEvent } from "@/lib/analytics";

function isWhatsAppLink(href: string) {
  try {
    const url = new URL(href, window.location.href);
    return url.protocol === "whatsapp:"
      || url.hostname === "wa.me"
      || url.hostname === "api.whatsapp.com"
      || url.hostname === "web.whatsapp.com";
  } catch {
    return false;
  }
}

function normalizedLinkText(anchor: HTMLAnchorElement) {
  const label = anchor.getAttribute("aria-label") || anchor.innerText || anchor.textContent || "WhatsApp";
  return label.replace(/\s+/g, " ").trim().slice(0, 160) || "WhatsApp";
}

export function GoogleAnalyticsEvents({ language }: { language: Locale }) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || !isWhatsAppLink(anchor.href)) return;

      trackGa4BusinessEvent("whatsapp_click", {
        link_url: anchor.href,
        link_text: normalizedLinkText(anchor),
        language,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [language]);

  return null;
}
