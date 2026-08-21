import { sendGAEvent } from "@next/third-parties/google";

export type LeadEvent =
  | "inquiry_submission_attempt"
  | "valid_inquiry_submitted"
  | "sample_request_submitted"
  | "inquiry_submission_failed"
  | "catalog_request_attempt"
  | "catalog_request_submitted"
  | "catalog_request_failed";

export function trackLeadEvent(event: LeadEvent, details: Record<string, string | boolean> = {}) {
  if (typeof window === "undefined") return;
  const payload = { event, ...details };
  const analyticsWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  analyticsWindow.dataLayer?.push(payload);
  window.dispatchEvent(new CustomEvent("sinoqi:lead-event", { detail: payload }));
}

export type Ga4BusinessEvent = "whatsapp_click" | "catalog_request" | "inquiry_submit";

export function trackGa4BusinessEvent(
  event: Ga4BusinessEvent,
  details: Record<string, string>,
) {
  if (typeof window === "undefined") return;

  sendGAEvent("event", event, {
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...details,
  });
}
