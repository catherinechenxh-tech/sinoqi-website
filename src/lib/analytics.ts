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
