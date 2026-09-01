import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { asset, company, localizedPath } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const comparisonPath = "/en/blog/spc-vs-lvp-flooring/";

const sourceLinks = [
  {
    label: "RFCI: Flexible LVT/LVP",
    href: "https://rfci.com/flexible-lvp-lvt/",
  },
  {
    label: "RFCI: Rigid Core — SPC, WPC and Multilayer",
    href: "https://rfci.com/rigid-core/",
  },
  {
    label: "ASTM F3261: Resilient Flooring with Rigid Polymeric Core",
    href: "https://store.astm.org/f3261-25a.html",
  },
];

const comparisonRows = [
  {
    factor: "What the label describes",
    spc: "A solid-polymer rigid-core construction within the wider resilient flooring category.",
    lvp: "Luxury vinyl flooring supplied in plank format; the term alone does not identify one core construction.",
  },
  {
    factor: "Core question",
    spc: "Confirm the rigid-core construction shown on the current product specification.",
    lvp: "Confirm whether the selected plank is flexible or uses a particular rigid-core construction.",
  },
  {
    factor: "Format and layers",
    spc: "Request the selected product's dimensions, layer arrangement, joint and backing details.",
    lvp: "Request the same product-specific details instead of relying on the LVP label.",
  },
  {
    factor: "Installation review",
    spc: "Use the instructions issued for the selected rigid-core product and project condition.",
    lvp: "Confirm whether the selected product is glue-down, floating, loose-lay or another documented system.",
  },
  {
    factor: "Evidence for a buying decision",
    spc: "Approved sample, current specification, quotation and any required test documents.",
    lvp: "Approved sample, current specification, quotation and any required test documents.",
  },
];

const faqs = [
  {
    question: "Is SPC flooring the same as LVP?",
    answer: "The terms overlap but describe different things. LVP identifies luxury vinyl flooring in plank format, while SPC identifies a solid-polymer rigid-core construction. An SPC plank may therefore sit within the wider LVP category.",
  },
  {
    question: "What does LVP mean?",
    answer: "LVP means luxury vinyl plank. The term describes a plank-format luxury vinyl product but does not, by itself, confirm whether the core is flexible or rigid.",
  },
  {
    question: "What is the main difference between SPC flooring and flexible LVP?",
    answer: "The clearest category-level difference is the core: SPC uses a rigid polymeric core, while flexible LVP is a flexible resilient flooring construction. Product-specific details still require a current specification.",
  },
  {
    question: "Is SPC flooring always better than LVP?",
    answer: "No universal answer can be made from the category names alone. Buyers should compare the intended application, selected construction, installation method, approved sample, documentation and commercial terms.",
  },
  {
    question: "Which details should an importer compare before ordering?",
    answer: "Compare the selected design, dimensions, layer arrangement, joint and backing, installation method, quantity, packing, target schedule and any destination-market document requirement.",
  },
  {
    question: "Does the SPC or LVP label confirm test results?",
    answer: "No. A category label is not a product test report or compliance document. Request documents that apply to the exact product and order under review.",
  },
  {
    question: "Can I request an SPC flooring sample from SINOQI?",
    answer: "Yes. SINOQI provides a free sample, and the buyer pays the courier cost. The selected design and configuration should be confirmed before dispatch.",
  },
  {
    question: "What are SINOQI's starting MOQ and lead-time reference for SPC flooring?",
    answer: "The confirmed starting MOQ is 100 pieces per design and color. The lead-time reference is around 30 days after deposit, subject to the selected configuration and production schedule.",
  },
];

const guideSections = [
  ["quick-answer", "The short answer"],
  ["comparison", "SPC and LVP compared"],
  ["selection", "How B2B buyers should choose"],
  ["verification", "Evidence to request"],
  ["sinoqi-terms", "Confirmed SINOQI terms"],
  ["rfq", "RFQ checklist"],
  ["faq", "Buyer FAQ"],
];

export function SpcVsLvpGuide({ post }: { post: BlogPost }) {
  const canonicalUrl = new URL(comparisonPath, SITE_ORIGIN).toString();
  const productUrl = new URL(localizedPath("spc-flooring", "en"), SITE_ORIGIN).toString();
  const formattedDate = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: new URL(localizedPath("home", "en"), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 2, name: "Blog", item: new URL(localizedPath("blog", "en"), SITE_ORIGIN).toString() },
        { "@type": "ListItem", position: 3, name: post.title.en, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title.en,
      description: post.description.en,
      image: [new URL(asset.spc, SITE_ORIGIN).toString()],
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      mainEntityOfPage: canonicalUrl,
      author: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
      publisher: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
      about: [
        { "@type": "Thing", name: "SPC flooring", sameAs: productUrl },
        { "@type": "Thing", name: "Luxury vinyl plank flooring" },
      ],
      citation: sourceLinks.map((source) => source.href),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
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

      <article>
        <header className="article-hero spc-explainer__hero">
          <div className="container article-hero__inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href={localizedPath("home", "en")}>Home</Link>
              <span aria-hidden="true">/</span>
              <Link href={localizedPath("blog", "en")}>Blog</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">SPC flooring vs LVP</span>
            </nav>
            <div className="article-meta">
              <span>{post.category.en}</span>
              <time dateTime={post.publishedAt}>{formattedDate}</time>
              <span>{post.readingTime.en}</span>
            </div>
            <h1>{post.title.en}</h1>
            <p>{post.description.en}</p>
            <div className="spc-explainer__hero-actions">
              <Link className="button button--orange" href={localizedPath("spc-flooring", "en")}>View SPC Flooring</Link>
              <Link className="button button--outline-light" href={`${localizedPath("contact", "en")}#inquiry`}>Request Quote</Link>
            </div>
          </div>
        </header>

        <div className="article-cover">
          <div className="container article-cover__frame spc-explainer__cover">
            <Image src={asset.spc} alt={post.coverAlt?.en ?? "Real SPC flooring sample"} fill priority sizes="(max-width: 900px) 100vw, 1200px" />
          </div>
        </div>

        <div className="container article-layout spc-explainer__layout">
          <div className="article-body spc-explainer__body">
            <p className="article-intro">{post.introduction.en}</p>

            <section id="quick-answer">
              <p className="eyebrow">Direct answer</p>
              <h2>SPC and LVP are overlapping labels, not opposite product families</h2>
              <div className="article-note">
                <strong>The practical distinction</strong>
                <p><strong>LVP</strong> means luxury vinyl plank and describes a plank-format luxury vinyl product. <strong>SPC</strong> identifies a solid-polymer rigid-core construction. An SPC plank can therefore be described within the wider LVP category.</p>
              </div>
              <p>When buyers search “SPC flooring vs LVP,” the useful comparison is normally between a confirmed SPC rigid-core product and a confirmed flexible LVP product. The product labels alone are not enough to approve a specification.</p>
              <Link className="text-link" href="/en/blog/what-is-spc-flooring/">Read the SPC category definition <span aria-hidden="true">→</span></Link>
            </section>

            <section id="comparison">
              <p className="eyebrow">Category comparison</p>
              <h2>SPC flooring vs LVP at a glance</h2>
              <p>This table keeps category definitions separate from product-specific claims. It does not assign performance results to a SINOQI item.</p>
              <div className="spc-vs-lvp__table-wrap">
                <table className="spc-vs-lvp__table">
                  <thead>
                    <tr>
                      <th scope="col">Comparison point</th>
                      <th scope="col">SPC rigid-core flooring</th>
                      <th scope="col">Flexible LVP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.factor}>
                        <th scope="row">{row.factor}</th>
                        <td>{row.spc}</td>
                        <td>{row.lvp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="selection">
              <p className="eyebrow">Selection logic</p>
              <h2>Choose from a project requirement, not from an acronym</h2>
              <div className="spc-explainer__number-grid">
                {[
                  ["01", "Define the application", "State the building type, room, expected use and destination market."],
                  ["02", "Identify the exact construction", "Ask whether the quoted plank is flexible or uses a defined rigid core."],
                  ["03", "Compare the current specifications", "Review dimensions, layer arrangement, joint, backing and installation method for the selected item."],
                  ["04", "Approve a real sample", "Use the selected design and configuration rather than a category-level reference."],
                  ["05", "Check order terms", "Compare quantity, packing, lead time and customization with the actual buying program."],
                  ["06", "Review required documents", "List destination-market requirements and confirm which documents apply to the exact product."],
                ].map(([number, title, body]) => (
                  <article key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="verification">
              <p className="eyebrow">Evidence boundary</p>
              <h2>What a buyer should request before making a comparison claim</h2>
              <div className="spc-explainer__compare">
                <article>
                  <h3>Use for verification</h3>
                  <ul>
                    <li>Current specification for the selected product</li>
                    <li>Approved physical sample or exact visual reference</li>
                    <li>Installation instructions for that construction</li>
                    <li>Applicable test or compliance documents requested for the market</li>
                    <li>Order-specific quotation and packing confirmation</li>
                  </ul>
                </article>
                <article>
                  <h3>Do not treat as proof</h3>
                  <ul>
                    <li>The words SPC or LVP without a product specification</li>
                    <li>A generic diagram from another company</li>
                    <li>A test report that cannot be matched to the selected item</li>
                    <li>A visual sample without confirmed construction details</li>
                    <li>An assumed installation method or market requirement</li>
                  </ul>
                </article>
              </div>
            </section>

            <section id="sinoqi-terms">
              <p className="eyebrow">SINOQI sourcing</p>
              <h2>Confirmed starting terms for an SPC flooring inquiry</h2>
              <p>These are commercial starting points for SINOQI’s SPC flooring line, not general claims about every SPC or LVP product.</p>
              <dl className="spc-explainer__terms">
                <div><dt>Starting MOQ</dt><dd>100 pieces per design and color</dd></div>
                <div><dt>Lead-time reference</dt><dd>Around 30 days after deposit, subject to configuration and schedule</dd></div>
                <div><dt>Sample</dt><dd>Free sample; buyer pays courier cost</dd></div>
                <div><dt>Packing</dt><dd>Carton or plastic wrapping, confirmed per order</dd></div>
                <div><dt>OEM / customization</dt><dd>Evaluated according to the selected product and request</dd></div>
              </dl>
              <Link className="text-link" href={localizedPath("spc-flooring", "en")}>Review the SPC flooring product page <span aria-hidden="true">→</span></Link>
            </section>

            <section id="rfq">
              <p className="eyebrow">RFQ preparation</p>
              <h2>Prepare a comparison the supplier can answer</h2>
              <p>Send the information below when you need to compare an SPC option with another vinyl plank construction.</p>
              <ul className="spc-explainer__checklist">
                <li>Company, buyer type and destination market</li>
                <li>Intended indoor flooring application</li>
                <li>SPC or alternative construction under review</li>
                <li>Required dimensions and layer arrangement</li>
                <li>Joint, backing and installation preference</li>
                <li>Quantity by design and color</li>
                <li>Packing preference and target timing</li>
                <li>Documents that require product-level confirmation</li>
              </ul>
              <div className="spc-explainer__actions">
                <Link className="button button--orange" href={`${localizedPath("contact", "en")}#inquiry`}>Request Quote</Link>
                <a className="button button--outline" href={company.whatsappHref} target="_blank" rel="noreferrer">Discuss on WhatsApp</a>
              </div>
            </section>

            <section id="faq">
              <p className="eyebrow">Buyer questions</p>
              <h2>SPC flooring vs LVP FAQ</h2>
              <div className="faq-list">
                {faqs.map(({ question, answer }) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="spc-explainer__sources" aria-labelledby="comparison-source-heading">
              <p className="eyebrow">Definition sources</p>
              <h2 id="comparison-source-heading">Industry references used in this comparison</h2>
              <p>These references support the category definitions. They are not presented as SINOQI product certificates or test evidence.</p>
              <ul>
                {sourceLinks.map((source) => (
                  <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="article-aside">
            <div className="article-toc">
              <p className="eyebrow">In this guide</p>
              <ol>{guideSections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
            </div>
            <div className="article-cta">
              <p className="eyebrow">SPC sourcing</p>
              <h2>Compare a real configuration</h2>
              <p>Share the construction, design, required format, quantity and destination.</p>
              <Link className="button button--orange" href={`${localizedPath("contact", "en")}#inquiry`}>Request Quote</Link>
              <Link className="text-link" href={localizedPath("spc-flooring", "en")}>View SPC Flooring <span aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Move from comparison to a product-level review</h2>
            <p>Review the current SPC flooring range or send the configuration you need to compare.</p>
          </div>
          <div className="cta-band__actions">
            <Link className="button button--light" href={localizedPath("spc-flooring", "en")}>View SPC Flooring</Link>
            <Link className="button button--outline-light" href={`${localizedPath("contact", "en")}#inquiry`}>Request Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
