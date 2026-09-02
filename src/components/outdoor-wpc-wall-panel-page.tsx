import Image from "next/image";
import Link from "next/link";
import { asset, company, localizedPath, OUTDOOR_WPC_PATH } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";
import { createQuoteBasedPageSchema } from "@/lib/structured-data";

const quoteHref = `${localizedPath("contact", "en")}#inquiry`;

const buyerFaqs = [
  {
    question: "What is the MOQ for outdoor WPC wall panels?",
    answer: "The confirmed starting MOQ is 100 pieces per design and color.",
  },
  {
    question: "When does the production lead time begin?",
    answer: "The current reference is around 30 days after receipt of deposit, subject to the order and production schedule.",
  },
  {
    question: "Can I request a sample before a bulk order?",
    answer: "Yes. The sample is free, and the buyer pays the courier cost.",
  },
  {
    question: "Which profiles and dimensions are available?",
    answer: "Available profiles and dimensions are confirmed according to the selected design and current production plan. Send us your required profile, size and quantity for the latest specification sheet.",
  },
  {
    question: "How are colors and surfaces confirmed?",
    answer: "Color and surface availability is confirmed against the selected profile before sampling or bulk order.",
  },
  {
    question: "What packing options can be discussed?",
    answer: "Carton or plastic wrapping are the confirmed packing options. The final packing arrangement is confirmed with the order.",
  },
  {
    question: "Can SINOQI evaluate an OEM or customization request?",
    answer: "Yes. OEM and customization are evaluated according to the selected design and the buyer's request.",
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

export function OutdoorWpcWallPanelPage() {
  const canonicalUrl = new URL(OUTDOOR_WPC_PATH, SITE_ORIGIN).toString();
  const schemas = [
    createQuoteBasedPageSchema({
      name: "Outdoor WPC Wall Panel",
      alternateName: "WPC Exterior Wall Cladding",
      topicName: "Outdoor WPC Wall Panel",
      description: "Outdoor WPC wall panels for B2B exterior wall cladding sourcing, with order-specific profile, surface, packing and customization confirmation.",
      url: canonicalUrl,
      image: [
        new URL(asset.outdoorWpcHero, SITE_ORIGIN).toString(),
        new URL(asset.outdoorWpcProfile, SITE_ORIGIN).toString(),
      ],
      inLanguage: "en",
    }),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: new URL(localizedPath("home", "en"), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 2, name: "Products", item: new URL(localizedPath("products", "en"), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 3, name: "Outdoor WPC Wall Panel", item: canonicalUrl },
      ],
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
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="hero outdoor-wpc-hero">
        <div className="hero__backdrop" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__content">
            <nav className="outdoor-breadcrumb" aria-label="Breadcrumb">
              <Link href={localizedPath("home", "en")}>Home</Link>
              <span aria-hidden="true">/</span>
              <Link href={localizedPath("products", "en")}>Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Outdoor WPC Wall Panel</span>
            </nav>
            <p className="eyebrow">WPC exterior wall cladding · B2B sourcing</p>
            <h1>Outdoor WPC Wall Panel for Exterior Wall Cladding</h1>
            <p className="hero__lead">Select the profile, surface direction, quantity and packing requirement for an order-specific commercial review.</p>
            <div className="chip-row">
              <span className="chip">Importers</span>
              <span className="chip">Distributors</span>
              <span className="chip">Project buyers</span>
            </div>
            <div className="hero__actions">
              <Link className="button button--orange" href={quoteHref}>Request Quote</Link>
              <Link className="button button--ghost" href={quoteHref}>Request Sample</Link>
            </div>
            <p className="hero__action-note">Free sample; courier cost is paid by the buyer.</p>
            <a className="outdoor-whatsapp-link" href={company.whatsappHref} target="_blank" rel="noreferrer">Discuss your requirement on WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero__media">
            <Image src={asset.outdoorWpcHero} alt="Outdoor WPC wall panel profile with a wood-look surface" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="hero__media-card"><strong>B2B</strong><span>Exterior cladding sourcing</span></div>
          </div>
        </div>
      </section>

      <section className="fact-strip" aria-label="Outdoor WPC buying facts">
        <div className="container fact-grid">
          <div className="fact"><strong>100 pcs</strong><span>MOQ per design and color</span></div>
          <div className="fact"><strong>~30 days</strong><span>After deposit, subject to schedule</span></div>
          <div className="fact"><strong>Free sample</strong><span>Buyer pays courier cost</span></div>
          <div className="fact"><strong>OEM</strong><span>Evaluated per request</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container product-overview">
          <div>
            <SectionTitle
              eyebrow="Product overview"
              title="Outdoor WPC wall cladding prepared around the buyer's selected design"
              body="This Phase 1 product page helps importers, distributors, wholesalers, building-material suppliers and project buyers prepare a sourcing request without assuming unconfirmed technical data."
            />
            <ul className="check-list">
              <li>Exterior wall cladding is the confirmed application direction</li>
              <li>Profile and surface availability are checked before sampling or order</li>
              <li>Quantity, packing and customization are reviewed with the request</li>
            </ul>
          </div>
          <aside className="spec-card">
            <h2>Confirmed B2B buying facts</h2>
            <dl>
              <div><dt>Starting MOQ</dt><dd>100 pieces per design and color</dd></div>
              <div><dt>Lead time</dt><dd>Around 30 days after deposit, subject to order and production schedule</dd></div>
              <div><dt>Sample</dt><dd>Free sample; courier paid by buyer</dd></div>
              <div><dt>Packing</dt><dd>Carton or plastic wrapping</dd></div>
              <div><dt>OEM / customization</dt><dd>Evaluated per request</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--tint" id="profiles">
        <div className="container split-feature">
          <div className="split-feature__media outdoor-wpc-profile-media">
            <Image src={asset.outdoorWpcProfile} alt="Clean side view of an outdoor WPC wall panel profile" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div>
            <p className="eyebrow">Profiles and specifications</p>
            <h2>Confirm the profile before relying on a specification</h2>
            <p>Available profiles and dimensions are confirmed according to the selected design and current production plan. Send us your required profile, size and quantity for the latest specification sheet.</p>
            <div className="section-actions">
              <Link className="button button--orange" href={quoteHref}>Request Current Outdoor WPC Specifications</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Surface selection"
            title="Use the selected profile and real surface reference to prepare sampling"
            body="Color and surface availability is confirmed against the selected profile before sampling or bulk order. The images below show real surface-processing references and do not define a fixed color range."
          />
          <div className="gallery-grid outdoor-wpc-surface-gallery">
            <figure className="gallery-card">
              <Image src={asset.outdoorWpcSurfaceOne} alt="Close-up of brushed surface processing on outdoor WPC wall panels" fill sizes="(max-width: 560px) 100vw, 50vw" />
              <figcaption>Surface processing reference</figcaption>
            </figure>
            <figure className="gallery-card">
              <Image src={asset.outdoorWpcSurfaceTwo} alt="Outdoor WPC wall panel surface shown during brushing" fill sizes="(max-width: 560px) 100vw, 50vw" />
              <figcaption>Surface close-up reference</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionTitle
            eyebrow="Exterior application and installation scope"
            title="Match the final profile to the exterior wall cladding requirement"
            body="The initial inquiry should identify the wall area, preferred visual direction and project condition. Formal installation methods, accessories and fixing details are confirmed according to the final profile and project condition."
          />
          <div className="value-grid value-grid--dark">
            <article><span className="value-dot" /><h3>Application</h3><p>Exterior wall cladding is the confirmed use direction for this product line.</p></article>
            <article><span className="value-dot" /><h3>Profile selection</h3><p>Send the required profile or a clear reference for current availability review.</p></article>
            <article><span className="value-dot" /><h3>Project condition</h3><p>Share the wall and installation context before fixing details are confirmed.</p></article>
            <article><span className="value-dot" /><h3>Final confirmation</h3><p>Use the approved selection and current specification sheet for order preparation.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-overview">
          <div>
            <SectionTitle
              eyebrow="Packing and order preparation"
              title="Confirm the packing method with the selected order"
              body="Carton or plastic wrapping are the confirmed packing options. The final arrangement is checked against the selected profile, quantity and buyer request."
            />
            <div className="outdoor-packing-grid">
              <figure><Image src={asset.outdoorWpcPackingOne} alt="Outdoor WPC wall panels wrapped and secured on a pallet" fill sizes="(max-width: 900px) 50vw, 24vw" /></figure>
              <figure><Image src={asset.outdoorWpcPackingTwo} alt="Plastic-wrapped outdoor WPC wall panels prepared for packing" fill sizes="(max-width: 900px) 50vw, 24vw" /></figure>
            </div>
          </div>
          <aside className="spec-card">
            <h2>Prepare the RFQ</h2>
            <dl>
              <div><dt>01</dt><dd>Required profile or visual reference</dd></div>
              <div><dt>02</dt><dd>Preferred surface direction</dd></div>
              <div><dt>03</dt><dd>Quantity per design and color</dd></div>
              <div><dt>04</dt><dd>Packing preference</dd></div>
              <div><dt>05</dt><dd>Destination and target timing</dd></div>
              <div><dt>06</dt><dd>OEM or customization request</dd></div>
            </dl>
            <div className="section-actions"><Link className="button button--orange" href={quoteHref}>Request Quote</Link></div>
          </aside>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container faq-layout">
          <div>
            <SectionTitle eyebrow="Outdoor WPC sourcing FAQ" title="Questions to resolve before sampling or quotation" body="These answers use confirmed Phase 1 product and commercial facts only." />
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
            <h2>Ready to confirm a profile?</h2>
            <p>Send the profile reference, quantity, packing preference and destination for a commercial review.</p>
            <Link className="button button--orange" href={quoteHref}>Request Quote</Link>
            <a href={company.whatsappHref} target="_blank" rel="noreferrer">WhatsApp {company.phone}</a>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container product-overview">
          <div>
            <SectionTitle eyebrow="Related product route" title="Keep indoor and outdoor WPC selection separate" body="Use the indoor WPC page for decorative interior wall-panel sourcing. This page remains focused on outdoor and exterior wall cladding intent." />
            <div className="application-product-links">
              <Link href={localizedPath("wpc-wall-panel", "en")}>Indoor WPC Wall Panels <span aria-hidden="true">→</span></Link>
              <Link href={localizedPath("products", "en")}>View All Product Lines <span aria-hidden="true">→</span></Link>
              <Link href={localizedPath("manufacturing", "en")}>View Manufacturing <span aria-hidden="true">→</span></Link>
              <Link href={localizedPath("faq", "en")}>B2B Buyer FAQ <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <aside className="spec-card">
            <h2>Choose the next action</h2>
            <p className="spec-note">Request a quote for a defined order, ask for the current specification sheet, or request a sample to confirm the selected surface.</p>
            <div className="outdoor-next-actions">
              <Link className="button button--orange" href={quoteHref}>Request Quote</Link>
              <Link className="button button--outline" href={quoteHref}>Request Sample</Link>
              <a className="text-link" href={company.whatsappHref} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
          </aside>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div><p className="eyebrow">Outdoor WPC Wall Panel</p><h2>Prepare an exterior WPC cladding quotation</h2><p>Share the profile, surface direction, quantity, packing preference and destination.</p></div>
          <div className="cta-band__actions">
            <Link className="button button--light" href={quoteHref}>Request Quote</Link>
            <a className="button button--outline-light" href={company.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
