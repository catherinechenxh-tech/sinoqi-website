import { NextResponse } from "next/server";
import { company } from "@/content/site";

type Inquiry = {
  name?: string;
  company?: string;
  email?: string;
  market?: string;
  product?: string;
  quantity?: string;
  message?: string;
  sampleRequest?: string;
  website?: string;
  locale?: string;
};

const clean = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Inquiry;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (clean(body.website)) return NextResponse.json({ ok: true });

  const inquiry = {
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    email: clean(body.email, 200),
    market: clean(body.market, 120),
    product: clean(body.product, 120),
    quantity: clean(body.quantity, 120),
    message: clean(body.message),
    sampleRequest: clean(body.sampleRequest, 20),
    locale: clean(body.locale, 5),
  };

  if (!inquiry.email || !inquiry.message || !/^\S+@\S+\.\S+$/.test(inquiry.email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ error: "Inquiry delivery is not configured", contact: company.email }, { status: 503 });
  }

  const text = [
    "New SINOQI website inquiry",
    `Name: ${inquiry.name || "Not provided"}`,
    `Company: ${inquiry.company || "Not provided"}`,
    `Email: ${inquiry.email}`,
    `Market: ${inquiry.market || "Not provided"}`,
    `Product: ${inquiry.product || "Not provided"}`,
    `Estimated quantity: ${inquiry.quantity || "Not provided"}`,
    `Sample request / courier accepted: ${inquiry.sampleRequest === "yes" ? "Yes" : "No"}`,
    `Language: ${inquiry.locale || "Not provided"}`,
    "",
    inquiry.message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [company.email],
      reply_to: inquiry.email,
      subject: `[Website Inquiry] ${inquiry.product || "General inquiry"} — ${inquiry.company || inquiry.email}`,
      text,
    }),
  });

  if (!response.ok) return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
