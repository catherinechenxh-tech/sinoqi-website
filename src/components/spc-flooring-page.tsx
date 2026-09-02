import Image from "next/image";
import Link from "next/link";
import { asset, company, localizedPath, OUTDOOR_WPC_PATH, products, productImageAlt } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";
import { createQuoteBasedPageSchema } from "@/lib/structured-data";

const quoteHref = `${localizedPath("contact", "en")}#inquiry`;

const buyerFaqs = [
  {
    question: "What is the starting MOQ?",
    answer: "The confirmed starting MOQ is 100 pieces per design and color. The final order configuration is confirmed in the quotation.",
  },
  {
    question: "Are samples free?",
    answer: "Yes. The sample is free, and the buyer pays the courier cost.",
  },
  {
    question: "When does the lead time begin?",
    answer: "The current reference is around 30 days after receipt of deposit, subject to the order configuration and production schedule.",
  },
  {
    question: "Which reference formats are shown in the catalog?",
    answer: "The catalog lists 6×48, 7×48, 9×48 and 9×60 inch reference formats, with corresponding metric references. Availability is confirmed against the selected product and order.",
  },
  {
    question: "How are final specifications confirmed?",
    answer: "Final specifications are confirmed against the selected product, quotation, approved sample and order.",
  },
  {
    question: "What packing options can be evaluated?",
    answer: "Carton or plastic wrapping can be evaluated. The final packing method is confirmed per order.",
  },
  {
    question: "Can OEM or customization requirements be evaluated?",
    answer: "Yes. OEM, private-label and customization requirements are evaluated according to the buyer's request and selected product.",
  },
  {
    question: "What information is needed for a quotation?",
    answer: "Share the application, preferred format or size, visual reference, quantity, packing preference, destination and target delivery timing.",
  },
];

const formatReferences = [
  ["6×48 inch", "150×1220 mm"],
  ["7×48 inch", "180×1220 mm"],
  ["9×48 inch", "230×1220 mm"],
  ["9×60 inch", "230×1525 mm"],
];

function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="section-heading section-heading--left">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function SpcFlooringPage() {
  const canonicalUrl = new URL(localizedPath("spc-flooring", "en"), SITE_ORIGIN).toString();
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: new URL(localizedPath("home", "en"), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 2, name: "Products", item: new URL(localizedPath("products", "en"), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 3, name: "SPC Flooring", item: canonicalUrl },
      ],
    },
    createQuoteBasedPageSchema({
      name: "SPC Flooring",
      url: canonicalUrl,
      description: "SPC flooring for B2B wholesale and distribution sourcing, with catalog-listed reference formats and order-specific commercial confirmation.",
      image: new URL(asset.spc, SITE_ORIGIN).toString(),
      inLanguage: "en",
    }),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: buyerFaqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}

      <section className="hero spc-flooring-hero">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__content">
            <nav className="outdoor-breadcrumb" aria-label="Breadcrumb">
              <Link href={localizedPath("home", "en")}>Home</Link>
              <span aria-hidden="true">/</span>
              <Link href={localizedPath("products", "en")}>Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">SPC Flooring</span>
            </nav>
            <p className="eyebrow">SPC flooring · B2B sourcing</p>
            <h1>SPC Flooring for B2B Sourcing and Distribution</h1>
            <p className="hero__lead">Review catalog-listed formats, visual directions and confirmed buying terms for importer, distributor, wholesale and project inquiries.</p>
            <div className="chip-row" aria-label="Buyer types">
              <span className="chip">Importers</span>
              <span className="chip">Distributors</span>
              <span className="chip">Wholesalers</span>
              <span className="chip">Project buyers</span>
            </div>
            <div className="hero__actions">
              <Link className="button button--orange" href={quoteHref}>Request Quote</Link>
            </div>
            <p className="hero__action-note">Final specifications are confirmed by quotation, sample and order.</p>
          </div>
          <div className="hero__media spc-flooring-hero__media">
            <Image src={asset.spc} alt="SPC flooring sample with a wood-look design reference" fill preload sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="hero__media-card"><strong>B2B</strong><span>Wholesale and distribution sourcing</span></div>
          </div>
        </div>
      </section>

      <section className="fact-strip" aria-label="SPC flooring buying facts">
        <div className="container spc-buying-grid">
          <div className="fact"><strong>100 pcs</strong><span>MOQ per design and color</span></div>
          <div className="fact"><strong>~30 days</strong><span>After deposit, subject to configuration and schedule</span></div>
          <div className="fact"><strong>Free sample</strong><span>Buyer pays courier cost</span></div>
          <div className="fact"><strong>2 options</strong><span>Carton or plastic wrapping</span></div>
          <div className="fact"><strong>OEM</strong><span>Evaluated per request</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container product-overview">
          <div>
            <SectionTitle
              eyebrow="Product overview"
              title="SPC flooring prepared for commercial sourcing review"
              body="This product range helps importers, distributors, wholesalers, building-material suppliers and project buyers compare reference formats and visual directions before requesting a confirmed quotation."
            />
            <ul className="check-list">
              <li>Reference formats are used to begin the sourcing discussion</li>
              <li>Design availability is checked before sampling or bulk order</li>
              <li>Final specifications and commercial terms are confirmed per order</li>
            </ul>
          </div>
          <aside className="spec-card">
            <h2>Confirmed buying terms</h2>
            <dl>
              <div><dt>Starting MOQ</dt><dd>100 pieces per design and color</dd></div>
              <div><dt>Lead time</dt><dd>Around 30 days after deposit, subject to configuration and schedule</dd></div>
              <div><dt>Sample</dt><dd>Free; courier paid by buyer</dd></div>
              <div><dt>Packing</dt><dd>Carton or plastic wrapping, confirmed per order</dd></div>
              <div><dt>OEM / customization</dt><dd>Evaluated per request</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--tint" id="formats">
        <div className="container">
          <SectionTitle
            eyebrow="Catalog-listed formats"
            title="Use reference formats to prepare the sourcing discussion"
            body="Catalog-listed reference formats are shown for sourcing discussion. Final dimensions and specifications are confirmed against the selected product, quotation and approved sample."
          />
          <div className="spc-format-grid">
            {formatReferences.map(([imperial, metric]) => (
              <article key={imperial}>
                <p>Reference format</p>
                <h3>{imperial}</h3>
                <span>{metric}</span>
              </article>
            ))}
          </div>
          <p className="spc-boundary-note">These references do not imply that every format is available across every design or order.</p>
        </div>
      </section>

      <section className="section" id="designs">
        <div className="container">
          <SectionTitle
            eyebrow="Design and visual selection"
            title="Start with a visual direction, then confirm the selected product"
            body="Wood-look, stone-look and marble-look are catalog-visible design references. Final design availability is checked before sampling or bulk order; no fixed color range or stock status is stated here."
          />
          <div className="spc-design-layout">
            <figure className="spc-design-photo">
              <Image src={asset.spc} alt="Close view of an SPC flooring wood-look design reference" fill sizes="(max-width: 900px) 100vw, 48vw" />
              <figcaption>Real wood-look product reference</figcaption>
            </figure>
            <div className="product-series-grid spc-design-directions">
              <article><h3>Wood-look</h3><p>Use a real product image or selected visual reference when requesting a sample.</p><ul><li>Visual direction</li><li>Subject to confirmation</li></ul></article>
              <article><h3>Stone-look</h3><p>Share the preferred stone visual direction so current options can be checked.</p><ul><li>Design reference</li><li>No fixed color code</li></ul></article>
              <article><h3>Marble-look</h3><p>Provide a marble visual reference for product and sampling review.</p><ul><li>Design reference</li><li>No stock claim</li></ul></article>
            </div>
          </div>
          <div className="section-actions">
            <Link className="button button--orange" href={quoteHref}>Request Sample</Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            eyebrow="Application selection"
            title="Confirm the flooring application before final product selection"
            body="These are sourcing scenarios, not customer projects or performance claims. Share the intended space so the selected product can be reviewed."
          />
          <div className="value-grid value-grid--dark">
            <article><span className="value-dot" /><h3>Residential interiors</h3><p>Describe the room and preferred visual direction for the selection review.</p></article>
            <article><span className="value-dot" /><h3>Retail and office interiors</h3><p>Share the project context, preferred format and required quantity.</p></article>
            <article><span className="value-dot" /><h3>Renovation flooring</h3><p>Identify the renovation context and selected visual reference.</p></article>
            <article><span className="value-dot" /><h3>Application overview</h3><p>Review the website application summary before preparing the RFQ.</p><Link className="spc-dark-link" href={localizedPath("applications", "en")}>View Applications <span aria-hidden="true">→</span></Link></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-overview">
          <div>
            <SectionTitle
              eyebrow="Commercial sourcing and OEM"
              title="Prepare an SPC flooring inquiry around the buying program"
              body="Importer sourcing, distributor programs and wholesale inquiries are reviewed against the selected product and order requirement. OEM and private-label requirements are evaluated per request."
            />
            <ul className="check-list">
              <li>Confirm the selected format and visual direction</li>
              <li>Share the quantity and destination</li>
              <li>State the preferred carton or plastic-wrapping option</li>
              <li>Include OEM or private-label requirements for evaluation</li>
            </ul>
            <div className="section-actions">
              <a className="button button--outline" href={company.whatsappHref} target="_blank" rel="noreferrer">Discuss on WhatsApp</a>
            </div>
          </div>
          <aside className="spec-card">
            <h2>How quotation factors are confirmed</h2>
            <p className="spec-note">The quotation is prepared from the selected format, visual reference, quantity, packing preference, destination and requested timing. No fixed price or stock status is stated on this page.</p>
          </aside>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionTitle
            eyebrow="RFQ preparation"
            title="Send seven details for a more useful first quotation"
            body="These details guide the commercial review and do not change the fields in the current Contact form."
          />
          <div className="spc-rfq-grid">
            {[
              ["01", "Application"],
              ["02", "Preferred format or size"],
              ["03", "Visual or design reference"],
              ["04", "Quantity"],
              ["05", "Packing preference"],
              ["06", "Destination"],
              ["07", "Target delivery timing"],
            ].map(([number, label]) => <article key={number}><span>{number}</span><h3>{label}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="section spc-sample-section">
        <div className="container split-feature">
          <div className="spc-sample-media">
            <Image src={asset.spc} alt="SPC flooring sample used to confirm a selected wood-look reference" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div>
            <p className="eyebrow">Sample confirmation</p>
            <h2>Request a sample for the selected visual direction</h2>
            <p>The sample is free, and the buyer pays the courier cost. Share the preferred visual reference and destination before dispatch is arranged.</p>
            <div className="section-actions"><Link className="button button--orange" href={quoteHref}>Request Sample</Link></div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container faq-layout">
          <div>
            <SectionTitle eyebrow="SPC flooring buyer FAQ" title="Questions to resolve before quotation" body="These answers use confirmed Phase 1 product and commercial facts only." />
            <div className="faq-list">
              {buyerFaqs.map(({ question, answer }, index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="contact-aside">
            <p className="eyebrow">B2B inquiry</p>
            <h2>Ready to prepare an SPC flooring RFQ?</h2>
            <p>Share the application, reference format, visual direction, quantity, packing preference and destination.</p>
            <Link className="button button--orange" href={quoteHref}>Request Quote</Link>
            <Link className="spc-aside-link" href={localizedPath("faq", "en")}>View general buyer FAQ</Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Related product routes" title="Continue the material selection" body="Review related wall-panel product lines or return to the complete product overview." />
          <div className="related-product-grid">
            {products.filter((product) => product.key === "uv-marble-sheet").map((product) => (
              <Link href={localizedPath(product.key, "en")} key={product.key}>
                <Image src={product.image} alt={productImageAlt.en[product.key]} width={88} height={66} />
                <span><strong>{product.en.name}</strong><small>{product.en.summary}</small></span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
            <Link href={OUTDOOR_WPC_PATH}>
              <Image src={asset.outdoorWpcHero} alt="Outdoor WPC wall panel profile with a wood-look surface" width={88} height={66} />
              <span><strong>Outdoor WPC Wall Panel</strong><small>Exterior wall cladding product line</small></span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="application-product-links">
            <Link href={localizedPath("wpc-wall-panel", "en")}>Indoor WPC Wall Panels <span aria-hidden="true">→</span></Link>
            <Link href={localizedPath("products", "en")}>View All Products <span aria-hidden="true">→</span></Link>
            <Link href={localizedPath("applications", "en")}>View Applications <span aria-hidden="true">→</span></Link>
            <Link href={localizedPath("faq", "en")}>B2B Buyer FAQ <span aria-hidden="true">→</span></Link>
            <Link href="/en/blog/spc-vs-lvp-flooring/">SPC vs LVP Buyer Guide <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div><p className="eyebrow">SPC Flooring</p><h2>Prepare your SPC flooring quotation</h2><p>Share the reference format, visual direction, quantity, packing preference and destination.</p></div>
          <div className="cta-band__actions"><Link className="button button--light" href={quoteHref}>Request Quote</Link></div>
        </div>
      </section>
    </>
  );
}
