import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { company } from "@/content/site";

type CatalogRequest = {
  name?: string;
  company?: string;
  email?: string;
  market?: string;
  consent?: string;
  website?: string;
  locale?: string;
};

const clean = (value: unknown, max = 240) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const catalogFilename = "SINOQI-PVC-WPC-Catalog-EN-ES.pdf";

export async function POST(request: Request) {
  let body: CatalogRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (clean(body.website)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    email: clean(body.email, 200),
    market: clean(body.market, 120),
    consent: clean(body.consent, 10),
    locale: clean(body.locale, 5) === "es" ? "es" : "en",
  };

  if (!lead.name || !lead.company || !lead.market || lead.consent !== "yes" || !/^\S+@\S+\.\S+$/.test(lead.email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ error: "Catalog delivery is not configured", contact: company.email }, { status: 503 });
  }

  let attachment: string;
  try {
    const catalogPath = path.join(process.cwd(), "catalogs", catalogFilename);
    attachment = (await readFile(catalogPath)).toString("base64");
  } catch {
    return NextResponse.json({ error: "Catalog file is unavailable" }, { status: 503 });
  }

  const spanish = lead.locale === "es";
  const text = spanish
    ? [
        `Hola ${lead.name},`,
        "",
        "Gracias por solicitar el catálogo de SINOQI. Encontrará adjunto nuestro catálogo bilingüe EN+ES de paneles de techo PVC, paneles PVC y paneles WPC.",
        "",
        "Si desea una cotización, responda a este correo con el producto, medidas, acabado, cantidad y mercado.",
        "",
        `Empresa: ${lead.company}`,
        `Mercado: ${lead.market}`,
        "",
        "SINOQI",
      ].join("\n")
    : [
        `Hello ${lead.name},`,
        "",
        "Thank you for requesting the SINOQI catalog. Attached is our bilingual EN+ES catalog for PVC ceiling panels, PVC panels and WPC panels.",
        "",
        "To request a quotation, reply with the product, size, finish, quantity and market.",
        "",
        `Company: ${lead.company}`,
        `Market: ${lead.market}`,
        "",
        "SINOQI",
      ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [lead.email],
      bcc: [company.email],
      reply_to: company.email,
      subject: spanish ? "Catálogo SINOQI PVC y WPC (EN+ES)" : "SINOQI PVC & WPC Catalog (EN+ES)",
      text,
      attachments: [{ content: attachment, filename: catalogFilename }],
    }),
  });

  if (!response.ok) return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
