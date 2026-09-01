import Image from "next/image";
import Link from "next/link";
import { asset, company, localizedPath, OUTDOOR_WPC_PATH, products, productImageAlt } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const quoteHref = `${localizedPath("contact", "en")}#inquiry`;

const buyerFaqs = [
  {
    question: "What is the MOQ for UV marble sheets?",
    answer: "The confirmed starting MOQ is 100 pieces per design and color. Final order conditions are confirmed through quotation, sample and order confirmation.",
  },
  {
    question: "Can I request a free sample?",
    answer: "Yes. A free sample can be requested for an interested buying inquiry.",
  },
  {
    question: "Who pays the sample courier cost?",
    answer: "The buyer pays the courier cost for the free sample.",
  },
  {
    question: "What is the usual lead time after deposit?",
    answer: "The current reference is around 30 days after receipt of deposit, subject to order configuration and the production schedule.",
  },
  {
    question: "What packing options are available?",
    answer: "Carton or shrink/plastic wrapping can be evaluated. Final packing is confirmed per order.",
  },
  {
    question: "How are current specifications and design availability confirmed?",
    answer: "Available specifications and design availability are confirmed according to the selected design and current supply plan. Final details are confirmed through quotation, sample and order confirmation.",
  },
  {
    question: "Can UV marble sheets be customized for an OEM order?",
    answer: "Yes. OEM and customization requirements are evaluated according to the buyer's request.",
  },
  {
    question: "What information should I provide to receive a quotation?",
    answer: "Share a design reference, request for current specifications, required quantity, destination country or port, and packing preference.",
  },
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

export function UvMarbleSheetPage() {
  const canonicalUrl = new URL(localizedPath("uv-marble-sheet", "en"), SITE_ORIGIN).toString();
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: new URL(localizedPath("home", "en"), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 2, name: "Products", item: new URL(localizedPath("products", "en"), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 3, name: "UV Marble Sheet", item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "UV Marble Sheet",
      url: canonicalUrl,
      description: "UV marble sheet for B2B sourcing, interior decorative wall programs and renovation selection, with order-specific commercial confirmation.",
      image: new URL(asset.uvFullSheet, SITE_ORIGIN).toString(),
      category: "UV marble sheet",
    },
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

      <section className="hero uv-marble-hero">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__content">
            <nav className="outdoor-breadcrumb" aria-label="Breadcrumb">
              <Link href={localizedPath("home", "en")}>Home</Link>
              <span aria-hidden="true">/</span>
              <Link href={localizedPath("products", "en")}>Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">UV Marble Sheet</span>
            </nav>
            <p className="eyebrow">UV marble sheet · B2B sourcing</p>
            <h1>UV Marble Sheet for Interior Wall Sourcing</h1>
            <p className="hero__lead">Compare marble-effect visual directions and confirmed buying terms for importer, distributor, wholesale and project inquiries.</p>
            <div className="chip-row" aria-label="Buyer types">
              <span className="chip">Importers</span>
              <span className="chip">Distributors</span>
              <span className="chip">Wholesalers</span>
              <span className="chip">Project buyers</span>
            </div>
            <div className="hero__actions">
              <Link className="button button--orange" href={quoteHref}>Request Quote</Link>
            </div>
            <p className="hero__action-note">Final specifications, design availability and order conditions are confirmed through quotation, sample and order confirmation.</p>
          </div>
          <div className="hero__media uv-marble-hero__media">
            <Image src={asset.uvFullSheet} alt="Stacked UV marble sheets with a marble-effect surface" fill preload sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="hero__media-card"><strong>B2B</strong><span>Interior wall sourcing</span></div>
          </div>
        </div>
      </section>

      <section className="fact-strip" aria-label="UV marble sheet buying facts">
        <div className="container uv-buying-grid">
          <div className="fact"><strong>100 pcs</strong><span>MOQ per design and color</span></div>
          <div className="fact"><strong>~30 days</strong><span>After deposit, subject to configuration and schedule</span></div>
          <div className="fact"><strong>Free sample</strong><span>Buyer pays courier cost</span></div>
          <div className="fact"><strong>2 options</strong><span>Carton or shrink/plastic wrapping</span></div>
          <div className="fact"><strong>OEM</strong><span>Evaluated according to buyer requirements</span></div>
          <div className="fact"><strong>Current supply</strong><span>Specifications confirmed for the selected design</span></div>
          <div className="fact"><strong>Per order</strong><span>Final conditions confirmed by quotation and sample</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container product-overview">
          <div>
            <SectionTitle
              eyebrow="Product overview"
              title="Marble-effect decorative sheets prepared for B2B selection"
              body="UV Marble Sheet is offered for interior decorative wall and renovation selection. Buyers begin with a visual reference, then confirm the current specification and commercial terms for the selected design."
            />
            <ul className="check-list">
              <li>Review a marble-effect visual direction</li>
              <li>Confirm the selected design before sampling</li>
              <li>Confirm final product and order details during quotation</li>
            </ul>
          </div>
          <aside className="spec-card">
            <h2>Confirmed buying terms</h2>
            <dl>
              <div><dt>Starting MOQ</dt><dd>100 pieces per design and color</dd></div>
              <div><dt>Lead time</dt><dd>Around 30 days after deposit, subject to configuration and schedule</dd></div>
              <div><dt>Sample</dt><dd>Free; courier paid by buyer</dd></div>
              <div><dt>Packing</dt><dd>Carton or shrink/plastic wrapping, confirmed per order</dd></div>
              <div><dt>OEM / customization</dt><dd>Evaluated according to buyer requirements</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--tint" id="design-selection">
        <div className="container">
          <SectionTitle
            eyebrow="Appearance and design selection"
            title="Start with a real product or sample reference"
            body="Use a marble-effect visual reference to identify the direction you need. Color and design availability is checked for the selected product before sampling or bulk order."
          />
          <div className="uv-appearance-grid">
            <figure className="uv-appearance-card uv-appearance-card--product">
              <Image src={asset.uv} alt="White marble-effect UV sheets shown during product preparation" fill sizes="(max-width: 900px) 100vw, 58vw" />
              <figcaption>Real full-sheet appearance during preparation</figcaption>
            </figure>
            <figure className="uv-appearance-card uv-appearance-card--samples">
              <Image src={asset.sampleUv} alt="UV marble sheet samples used as design selection references" fill sizes="(max-width: 900px) 100vw, 38vw" />
              <figcaption>Sample and design selection references</figcaption>
            </figure>
          </div>
          <div className="section-actions">
            <Link className="button button--orange" href={quoteHref}>Request Sample</Link>
          </div>
        </div>
      </section>

      <section className="section" id="current-specifications">
        <div className="container product-overview">
          <div>
            <SectionTitle
              eyebrow="Current specifications"
              title="Confirm the available specification for your selected design"
              body="Available specifications are confirmed according to the selected design and current supply plan. Final product details are confirmed through quotation, sample and order confirmation."
            />
            <div className="section-actions">
              <Link className="button button--orange" href={quoteHref}>Request Current UV Marble Sheet Specifications</Link>
            </div>
          </div>
          <aside className="spec-card">
            <h2>Prepare the specification request</h2>
            <p className="spec-note">Share the design reference, required quantity, destination and packing preference so the current option can be checked for your inquiry.</p>
          </aside>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            eyebrow="Applications"
            title="Two confirmed selection contexts"
            body="These are selection references, not customer projects. The final product is confirmed against the actual inquiry."
          />
          <div className="uv-application-grid">
            <article><span className="value-dot" /><h3>Interior decorative walls</h3><p>Begin with the intended interior wall and preferred marble-effect visual direction.</p></article>
            <article><span className="value-dot" /><h3>Renovation selection</h3><p>Share the renovation context, selected design reference and required quantity.</p></article>
          </div>
          <div className="section-actions">
            <Link className="spc-dark-link" href={localizedPath("applications", "en")}>View Applications <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-overview">
          <div>
            <SectionTitle
              eyebrow="Commercial sourcing and OEM"
              title="Prepare the inquiry around your buying program"
              body="Importer, distributor, wholesale, building-material supply and project inquiries are reviewed against the selected design and order requirement. OEM and customization requirements are evaluated according to the buyer's request."
            />
            <ul className="check-list">
              <li>Identify the preferred design reference</li>
              <li>Share the required quantity and destination</li>
              <li>State the carton or shrink/plastic wrapping preference</li>
              <li>Include OEM or customization requirements for evaluation</li>
            </ul>
            <div className="section-actions">
              <a className="button button--outline" href={company.whatsappHref} target="_blank" rel="noreferrer">Discuss on WhatsApp</a>
            </div>
          </div>
          <aside className="spec-card">
            <h2>Commercial review</h2>
            <p className="spec-note">Final specifications, packing and order conditions are confirmed for the selected design through quotation, sample and order confirmation.</p>
          </aside>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionTitle
            eyebrow="UV marble sheet price factors"
            title="Request an order-specific quotation"
            body="The quotation is evaluated from the selected design, required quantity, destination and packing requirement. Share these four details for a commercially useful response."
          />
          <div className="uv-price-grid">
            <article><span>01</span><h3>Selected design</h3></article>
            <article><span>02</span><h3>Quantity</h3></article>
            <article><span>03</span><h3>Destination</h3></article>
            <article><span>04</span><h3>Packing requirement</h3></article>
          </div>
          <div className="section-actions"><Link className="button button--orange" href={quoteHref}>Request Quote</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="RFQ preparation"
            title="Send five details for the first sourcing review"
            body="These details help the team check the current product option and prepare the quotation without changing the existing Contact form."
          />
          <div className="uv-rfq-grid">
            {[
              ["01", "Design reference"],
              ["02", "Current specification request"],
              ["03", "Required quantity"],
              ["04", "Destination country or port"],
              ["05", "Packing preference"],
            ].map(([number, label]) => <article key={number}><span>{number}</span><h3>{label}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="section section--tint uv-sample-section">
        <div className="container split-feature">
          <div className="uv-sample-media">
            <Image src={asset.sampleUv} alt="UV marble sheet sample references prepared for buyer selection" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div>
            <p className="eyebrow">Sample confirmation</p>
            <h2>Request a sample for the selected visual direction</h2>
            <p>The sample is free, and the buyer pays the courier cost. Share the preferred design reference and destination before dispatch is arranged.</p>
            <div className="section-actions"><Link className="button button--orange" href={quoteHref}>Request Sample</Link></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <div>
            <SectionTitle eyebrow="UV marble sheet buyer FAQ" title="Questions to resolve before quotation" body="These answers use confirmed Phase 1 product and commercial facts only." />
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
            <h2>Ready to prepare a UV marble sheet RFQ?</h2>
            <p>Share the design reference, current specification request, quantity, destination and packing preference.</p>
            <Link className="button button--orange" href={quoteHref}>Request Quote</Link>
            <Link className="spc-aside-link" href={localizedPath("faq", "en")}>View general buyer FAQ</Link>
          </aside>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionTitle eyebrow="Related product routes" title="Continue the product selection" body="Review related decorative product lines or return to the complete product overview." />
          <div className="related-product-grid">
            {products.filter((product) => product.key === "spc-flooring" || product.key === "wpc-wall-panel").map((product) => (
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
            <Link href={localizedPath("products", "en")}>View All Products <span aria-hidden="true">→</span></Link>
            <Link href={localizedPath("applications", "en")}>View Applications <span aria-hidden="true">→</span></Link>
            <Link href={localizedPath("faq", "en")}>B2B Buyer FAQ <span aria-hidden="true">→</span></Link>
            <Link href={localizedPath("contact", "en")}>Contact SINOQI <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div><p className="eyebrow">UV Marble Sheet</p><h2>Prepare your UV marble sheet quotation</h2><p>Share the design reference, quantity, destination and packing preference.</p></div>
          <div className="cta-band__actions"><Link className="button button--light" href={quoteHref}>Request Quote</Link></div>
        </div>
      </section>
    </>
  );
}
