# SINOQI DECOR Website

Next.js 16 + TypeScript bilingual B2B website for SINOQI DECOR.

## Language and URL structure

- Spanish is the default language at root URLs, for example `/pvc-ceiling-panel/`.
- English uses the `/en/` prefix, for example `/en/pvc-ceiling-panel/`.
- First release includes Home, Products, PVC Ceiling Panel, WPC Wall Panel, UV Marble Sheet, SPC Flooring, Manufacturing, Applications, About, FAQ, Download / Catalog, Blog and Contact in both languages.
- Blog currently includes a bilingual list page, an article detail template and the confirmed PVC Ceiling Panel buying guide.
- Cases, certifications, SKU detail pages and unsupported product lines are intentionally excluded from the first release.

## Confirmed page treatment baseline

- Keep as active pages: Home, Products, Applications, Manufacturing, About and FAQ.
- Keep as evidence-limited basic pages: PVC Ceiling Panel, WPC Wall Panel, UV Marble Sheet, SPC Flooring, Download / Catalog, Blog and Contact.
- Keep reserved without public routes: application detail pages, future blog articles, SKU / model detail pages, WPC Exterior, WPC Decking, SPC Wall Panel and PVC Wall Panel / Profile.
- Do not create or expose Cases / Projects or Certificates until applicable, publication-ready evidence is available.
- Do not add reserved or excluded pages to the Header, Footer or sitemap without explicit approval.
- Do not fill incomplete pages with invented models, specifications, certifications, applications, customer projects or performance claims.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production checks

```bash
pnpm lint
pnpm build
pnpm start
```

## Inquiry email setup

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_SITE_URL`: final production domain.
- `RESEND_API_KEY`: Resend API key.
- `INQUIRY_FROM_EMAIL`: sender on a verified domain.

The form sends inquiries to `catherinechen@siqiglobal.com`. If email delivery is not configured, the API returns an error instead of displaying a false success message.

## Initial 90-day KPI targets

- Primary: at least 15 valid inquiries per month.
- Secondary: at least 5 sample requests per month.
- Secondary quality: at least 60% of sample-request leads explicitly accept the courier cost.

These are launch targets, not public company claims. Review after the first 30 days of reliable tracking.

The form emits vendor-neutral browser events through `window.dataLayer` when available and the `sinoqi:lead-event` custom event:

- `valid_inquiry_submitted`
- `sample_request_submitted`
- `inquiry_submission_failed`

## Content guardrails

- Do not add CE, SGS, FloorScore or ISO claims without applicable verified source documents.
- Do not publish “highest”, “100% healthy” or other unsupported performance claims.
- Do not create customer names, countries, project results or case images without confirmed evidence and publication permission.
- Confirm final product parameters in the quotation and approved sample.
