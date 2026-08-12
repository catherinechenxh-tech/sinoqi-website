"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/content/site";
import { trackLeadEvent } from "@/lib/analytics";

const copy = {
  es: {
    email: "Correo electrónico",
    message: "Mensaje",
    product: "Producto de interés",
    quantity: "Cantidad",
    attachment: "Archivo adjunto",
    optional: "Opcional",
    select: "Seleccione un producto",
    multiple: "Varios productos",
    unsure: "No estoy seguro / Necesito recomendación",
    messageHelp: "Incluya medidas, acabado, uso, embalaje o fecha objetivo si ya los conoce.",
    quantityHelp: "Introduzca solo una cantidad estimada; indique la unidad en el mensaje.",
    attachmentHelp: "El archivo no se carga actualmente. Para enviar PDF, Word, Excel, JPG o PNG, responda al correo de seguimiento o escríbanos directamente.",
    privacy: "Usaremos sus datos únicamente para responder a esta solicitud.",
    submit: "Enviar solicitud",
    sending: "Enviando…",
    success: "Solicitud recibida. Le responderemos en un día laborable.",
    error: "No se pudo enviar. Escríbanos directamente por correo o WhatsApp.",
  },
  en: {
    email: "Email",
    message: "Message",
    product: "Product Interested",
    quantity: "Quantity",
    attachment: "Attachment",
    optional: "Optional",
    select: "Select a product",
    multiple: "Multiple products",
    unsure: "Not sure / Need a recommendation",
    messageHelp: "Include size, finish, intended use, packing or target date if known.",
    quantityHelp: "Enter an estimated number only; state the unit in your message.",
    attachmentHelp: "The file is not uploaded at present. To send a PDF, Word, Excel, JPG or PNG, reply to our follow-up email or contact us directly.",
    privacy: "We will use your details only to respond to this inquiry.",
    submit: "Send inquiry",
    sending: "Sending…",
    success: "Inquiry received. We will reply within one business day.",
    error: "Unable to send. Please contact us directly by email or WhatsApp.",
  },
};

export function ContactInquiryForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    setState("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get("email") ?? ""),
      product: String(data.get("product") ?? ""),
      quantity: String(data.get("quantity") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
      locale,
    };

    trackLeadEvent("inquiry_submission_attempt", {
      product: payload.product,
      locale,
      source: "contact",
    });

    try {
      const response = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");

      trackLeadEvent("valid_inquiry_submitted", {
        product: payload.product,
        locale,
        source: "contact",
      });
      form.reset();
      setState("success");
    } catch {
      trackLeadEvent("inquiry_submission_failed", {
        product: payload.product,
        locale,
        source: "contact",
      });
      setState("error");
    }
  }

  return (
    <form className="inquiry-form contact-inquiry-form" onSubmit={submit}>
      <label>
        <span>{t.email} *</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>

      <div className="form-grid">
        <label>
          <span>{t.product} <small>({t.optional})</small></span>
          <select name="product" defaultValue="">
            <option value="">{t.select}</option>
            <option value="pvc-ceiling-panel">PVC Ceiling Panel</option>
            <option value="wpc-wall-panel">WPC Wall Panel</option>
            <option value="uv-marble-sheet">UV Marble Sheet</option>
            <option value="spc-flooring">SPC Flooring</option>
            <option value="multiple-products">{t.multiple}</option>
            <option value="not-sure">{t.unsure}</option>
          </select>
        </label>

        <label>
          <span>{t.quantity} <small>({t.optional})</small></span>
          <input name="quantity" type="number" min="1" step="1" inputMode="numeric" aria-describedby="quantity-help" />
          <small className="form-helper" id="quantity-help">{t.quantityHelp}</small>
        </label>
      </div>

      <label>
        <span>{t.message} *</span>
        <textarea name="message" rows={6} required aria-describedby="message-help" />
        <small className="form-helper" id="message-help">{t.messageHelp}</small>
      </label>

      <label>
        <span>{t.attachment} <small>({t.optional})</small></span>
        <input name="attachment" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png" aria-describedby="attachment-help" />
        <small className="form-helper" id="attachment-help">{t.attachmentHelp}</small>
      </label>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
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
