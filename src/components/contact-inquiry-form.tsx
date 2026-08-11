"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/content/site";

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
    attachmentHelp: "PDF, Word, Excel, JPG o PNG. En esta vista previa el archivo permanece en su dispositivo.",
    preview: "Vista previa del formulario: los datos no se envían ni se cargan en este momento. Los datos de una consulta real se utilizarán únicamente para el seguimiento comercial y no se mostrarán públicamente.",
    submit: "Revisar formulario (sin envío)",
    result: "Formulario revisado localmente. No se enviaron datos ni archivos.",
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
    attachmentHelp: "PDF, Word, Excel, JPG or PNG. In this preview, the file remains on your device.",
    preview: "Form preview only: your details are not sent or uploaded at this stage. Details from a real inquiry will be used only for sales follow-up and will not be displayed publicly.",
    submit: "Review form (not sent)",
    result: "Form checked locally. No details or files were sent.",
  },
};

export function ContactInquiryForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [previewComplete, setPreviewComplete] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPreviewComplete(true);
  }

  return (
    <form className="inquiry-form contact-inquiry-form" onSubmit={submit}>
      <p className="form-preview-note" id="inquiry-privacy">{t.preview}</p>

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

      <button className="button button--orange" type="submit">{t.submit}</button>
      <div className="form-status" aria-live="polite">
        {previewComplete && <p className="preview-message">{t.result}</p>}
      </div>
    </form>
  );
}
