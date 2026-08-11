"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/content/site";
import { trackLeadEvent } from "@/lib/analytics";

const copy = {
  es: {
    name: "Nombre",
    company: "Empresa",
    email: "Correo corporativo",
    market: "País o mercado",
    consent: "Acepto que SINOQI utilice estos datos para enviarme el catálogo y responder a mi solicitud.",
    privacy: "Sus datos se utilizarán únicamente para enviar el catálogo y responder a esta solicitud.",
    submit: "Recibir catálogo por email",
    sending: "Enviando…",
    success: "Catálogo enviado. Revise su bandeja de entrada y la carpeta de correo no deseado.",
    error: "No se pudo enviar el catálogo. Escríbanos directamente por email o WhatsApp.",
  },
  en: {
    name: "Name",
    company: "Company",
    email: "Business email",
    market: "Country or market",
    consent: "I agree that SINOQI may use these details to send the catalog and respond to my request.",
    privacy: "Your details will only be used to send the catalog and respond to this request.",
    submit: "Receive catalog by email",
    sending: "Sending…",
    success: "Catalog sent. Please check your inbox and spam folder.",
    error: "The catalog could not be sent. Please contact us directly by email or WhatsApp.",
  },
};

export function CatalogRequestForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    trackLeadEvent("catalog_request_attempt", { locale });

    try {
      const response = await fetch("/api/catalog-request/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale }),
      });
      if (!response.ok) throw new Error("Request failed");
      trackLeadEvent("catalog_request_submitted", { locale });
      form.reset();
      setState("success");
    } catch {
      trackLeadEvent("catalog_request_failed", { locale });
      setState("error");
    }
  }

  return (
    <form className="catalog-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          <span>{t.name} *</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>{t.company} *</span>
          <input name="company" required autoComplete="organization" />
        </label>
        <label>
          <span>{t.email} *</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>{t.market} *</span>
          <input name="market" required autoComplete="country-name" />
        </label>
      </div>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="checkbox-row">
        <input name="consent" type="checkbox" value="yes" required />
        <span>{t.consent}</span>
      </label>
      <p className="form-privacy">{t.privacy}</p>
      <button className="button button--orange" type="submit" disabled={state === "sending"}>
        {state === "sending" ? t.sending : t.submit}
      </button>
      <div className="form-status" aria-live="polite">
        {state === "success" && <p className="success-message">{t.success}</p>}
        {state === "error" && <p className="error-message">{t.error}</p>}
      </div>
    </form>
  );
}
