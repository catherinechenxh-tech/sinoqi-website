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
    product: "Producto de interés",
    quantity: "Cantidad estimada",
    message: "Requisitos, medidas, color o embalaje",
    sample: "Quiero solicitar una muestra gratuita y asumiré el coste del envío.",
    privacy: "Usaremos sus datos únicamente para responder a esta solicitud.",
    submit: "Enviar solicitud",
    sending: "Enviando…",
    success: "Solicitud recibida. Le responderemos en un día laborable.",
    error: "No se pudo enviar. Escríbanos directamente por correo o WhatsApp.",
    select: "Seleccione un producto",
  },
  en: {
    name: "Name",
    company: "Company",
    email: "Business email",
    market: "Country or market",
    product: "Product of interest",
    quantity: "Estimated quantity",
    message: "Requirements, size, color or packing",
    sample: "I would like a free sample and will cover the courier cost.",
    privacy: "We will use your details only to respond to this inquiry.",
    submit: "Send inquiry",
    sending: "Sending…",
    success: "Inquiry received. We will reply within one business day.",
    error: "Unable to send. Please contact us directly by email or WhatsApp.",
    select: "Select a product",
  },
};

export function InquiryForm({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = copy[locale];
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    trackLeadEvent("inquiry_submission_attempt", {
      product: String(payload.product ?? ""),
      locale,
      sampleRequest: payload.sampleRequest === "yes",
    });

    try {
      const response = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale }),
      });
      if (!response.ok) throw new Error("Request failed");
      trackLeadEvent("valid_inquiry_submitted", {
        product: String(payload.product ?? ""),
        locale,
        sampleRequest: payload.sampleRequest === "yes",
      });
      if (payload.sampleRequest === "yes") {
        trackLeadEvent("sample_request_submitted", {
          product: String(payload.product ?? ""),
          locale,
          courierCostAccepted: true,
        });
      }
      form.reset();
      setState("success");
    } catch {
      trackLeadEvent("inquiry_submission_failed", {
        product: String(payload.product ?? ""),
        locale,
        sampleRequest: payload.sampleRequest === "yes",
      });
      setState("error");
    }
  }

  return (
    <form className={`inquiry-form ${compact ? "inquiry-form--compact" : ""}`} onSubmit={submit}>
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
        <label>
          <span>{t.product} *</span>
          <select name="product" required defaultValue="">
            <option value="" disabled>{t.select}</option>
            <option>PVC Ceiling Panel</option>
            <option>WPC Wall Panel</option>
            <option>UV Marble Sheet</option>
            <option>SPC Flooring</option>
            <option>Multiple products</option>
          </select>
        </label>
        <label>
          <span>{t.quantity}</span>
          <input name="quantity" />
        </label>
      </div>
      <label>
        <span>{t.message} *</span>
        <textarea name="message" rows={compact ? 4 : 5} required />
      </label>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="checkbox-row">
        <input name="sampleRequest" type="checkbox" value="yes" />
        <span>{t.sample}</span>
      </label>
      <p className="form-privacy" id="inquiry-privacy">{t.privacy}</p>
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
