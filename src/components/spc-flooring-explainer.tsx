import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { asset, company, localizedPath } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const sourceLinks = [
  {
    label: "RFCI: Rigid Core — SPC, WPC and Multilayer",
    href: "https://rfci.com/rigid-core/",
  },
  {
    label: "ASTM F3261: Resilient Flooring with Rigid Polymeric Core",
    href: "https://store.astm.org/f3261-25a.html",
  },
];

const faqs = [
  {
    question: "What does SPC mean in flooring?",
    answer: "The Resilient Floor Covering Institute uses SPC to mean Solid Polymer Core, one of the constructions within the rigid-core flooring category.",
  },
  {
    question: "What is SPC flooring?",
    answer: "SPC flooring is a modular resilient flooring category built around a rigid polymeric core. The exact construction must still be confirmed for the selected product.",
  },
  {
    question: "Does the SPC label confirm every product detail?",
    answer: "No. The label alone does not confirm dimensions, layer arrangement, joint system, backing, test results or other product-specific details.",
  },
  {
    question: "What should an importer verify before ordering SPC flooring?",
    answer: "Verify the selected design, required format, product construction, joint and backing details, quantity, packing, destination and any market-specific documentation requirement.",
  },
  {
    question: "What is SINOQI's starting MOQ for SPC flooring?",
    answer: "The confirmed starting MOQ is 100 pieces per design and color. The final configuration is confirmed in the quotation.",
  },
  {
    question: "Can I request an SPC flooring sample?",
    answer: "Yes. SINOQI provides a free sample, and the buyer pays the courier cost.",
  },
  {
    question: "What is the current lead-time reference?",
    answer: "The current reference is around 30 days after receipt of deposit, subject to the order configuration and production schedule.",
  },
  {
    question: "Can OEM or private-label requirements be evaluated?",
    answer: "Yes. OEM, private-label and other customization requirements are evaluated according to the selected product and buyer request.",
  },
];

const guideSections = [
  ["definition", "A direct definition"],
  ["category", "What the category label tells you"],
  ["verification", "What buyers still need to verify"],
  ["buying-terms", "Confirmed SINOQI buying terms"],
  ["rfq", "How to prepare an RFQ"],
  ["faq", "Buyer FAQ"],
];

export function SpcFlooringExplainer({ post }: { post: BlogPost }) {
  const canonicalPath = `/en/blog/${post.slug}/`;
  const canonicalUrl = new URL(canonicalPath, SITE_ORIGIN).toString();
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
      about: { "@type": "Product", name: "SPC Flooring", url: productUrl },
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
              <span aria-current="page">What is SPC flooring?</span>
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

            <section id="definition">
              <p className="eyebrow">Direct answer</p>
              <h2>SPC flooring is a rigid-core resilient flooring category</h2>
              <div className="article-note">
                <strong>What “SPC” means</strong>
                <p>The Resilient Floor Covering Institute uses <strong>Solid Polymer Core</strong>. ASTM F3261 describes the wider category as modular resilient flooring that uses a rigid polymeric core as part of the product structure.</p>
              </div>
              <p>These references explain the product category. They do not certify a particular SINOQI item or replace the specification sheet, approved sample or documents confirmed for an order.</p>
            </section>

            <section id="category">
              <p className="eyebrow">Category context</p>
              <h2>What the category label tells you—and what it does not</h2>
              <div className="spc-explainer__compare">
                <article>
                  <h3>The label can establish</h3>
                  <ul>
                    <li>The product belongs to a rigid-core flooring category</li>
                    <li>The rigid polymeric core is part of the product structure</li>
                    <li>Product selection should begin with a defined format and intended use</li>
                  </ul>
                </article>
                <article>
                  <h3>The label does not establish</h3>
                  <ul>
                    <li>One universal composition or layer arrangement</li>
                    <li>One fixed dimension, joint system or backing</li>
                    <li>Any product-specific test result or market compliance</li>
                  </ul>
                </article>
              </div>
              <p>For sourcing, the practical question is not only “Is this SPC?” but “Which confirmed SPC construction and order configuration are we evaluating?”</p>
            </section>

            <section id="verification">
              <p className="eyebrow">Product verification</p>
              <h2>Six details to confirm before comparing quotations</h2>
              <div className="spc-explainer__number-grid">
                {[
                  ["01", "Selected design", "Use a real product image or sample reference."],
                  ["02", "Required format", "State the requested dimensions instead of assuming one standard."],
                  ["03", "Product construction", "Request the current specification for the selected item."],
                  ["04", "Joint and backing", "Confirm the available configuration for the intended order."],
                  ["05", "Packing", "Agree the order-specific packing method before production."],
                  ["06", "Documentation", "List any destination-market documents that require review."],
                ].map(([number, title, body]) => (
                  <article key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="buying-terms">
              <p className="eyebrow">SINOQI sourcing</p>
              <h2>Confirmed starting points for an SPC flooring inquiry</h2>
              <p>The following points are confirmed commercial starting terms. The final quotation and selected product confirmation govern the order.</p>
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
              <h2>Send a requirement that can be checked against a real product</h2>
              <p>Include these details so the first response can focus on a workable selection rather than an assumed specification.</p>
              <ul className="spc-explainer__checklist">
                <li>Company, buyer type and destination market</li>
                <li>Intended indoor flooring application</li>
                <li>Preferred design or visual reference</li>
                <li>Required format and product construction</li>
                <li>Quantity by design and color</li>
                <li>Packing preference and target timing</li>
                <li>Any documentation that must be reviewed for the destination</li>
              </ul>
              <div className="spc-explainer__actions">
                <Link className="button button--orange" href={`${localizedPath("contact", "en")}#inquiry`}>Request Quote</Link>
                <a className="button button--outline" href={company.whatsappHref} target="_blank" rel="noreferrer">Discuss on WhatsApp</a>
              </div>
            </section>

            <section id="faq">
              <p className="eyebrow">Buyer questions</p>
              <h2>SPC flooring FAQ</h2>
              <div className="faq-list">
                {faqs.map(({ question, answer }) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="spc-explainer__sources" aria-labelledby="source-heading">
              <p className="eyebrow">Definition sources</p>
              <h2 id="source-heading">Industry references used in this guide</h2>
              <p>These sources define the wider category. They are not presented as product certificates or SINOQI test evidence.</p>
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
              <h2>Compare a real product</h2>
              <p>Share the design, required format, quantity and destination.</p>
              <Link className="button button--orange" href={`${localizedPath("contact", "en")}#inquiry`}>Request Quote</Link>
              <Link className="text-link" href={localizedPath("spc-flooring", "en")}>View SPC Flooring <span aria-hidden="true">→</span></Link>
              <Link className="text-link" href="/en/blog/spc-vs-lvp-flooring/">Compare SPC and LVP <span aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Move from definition to product selection</h2>
            <p>Review the current SPC flooring range or send your requirement for an order-specific response.</p>
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
