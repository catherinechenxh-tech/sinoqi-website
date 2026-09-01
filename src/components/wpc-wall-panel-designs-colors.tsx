import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { localizedBlogPostPath } from "@/content/blog";
import { company, localizedPath } from "@/content/site";
import { SITE_ORIGIN } from "@/lib/site-url";

const images = {
  designs: "/assets/wpc-wall-panel.png",
  production: "/assets/wpc-production.jpg",
  catalog: "/assets/catalog-cover.jpg",
};

const designDirections = [
  ["Wood-look references", "The available catalog shows light, medium and darker wood-look directions. These descriptions refer to visual appearance; they do not mean that the panels are solid wood."],
  ["Light and neutral colors", "White, light beige, pale grey and other low-contrast references can help a distributor plan a quieter interior range. Confirm the exact reference and current sample status before presenting it to a buyer."],
  ["Grey and dark-neutral references", "Grey and deeper neutral directions can be shortlisted for markets that need stronger contrast. A screen image is not a physical color standard."],
  ["Solid-color directions", "The catalog includes references with a more uniform appearance. Availability, profile pairing and the final surface are reviewed for each request."],
] as const;

const profileReferences = [
  ["195 × 14 mm", "A catalog-listed profile reference for comparing panel rhythm and wall coverage."],
  ["195 × 25 mm", "A deeper catalog-listed section that creates a different relief and shadow pattern."],
  ["150 × 10 mm", "A narrower catalog-listed profile reference for a more frequent repeat across the wall."],
  ["195 × 12 mm", "Another catalog-listed section for comparing profile spacing and visible relief."],
] as const;

const assortmentSteps = [
  ["Define the sales channel", "State whether the range is for import distribution, wholesale, building-material retail, interior-material supply or a project-sourcing program."],
  ["Choose a small set of directions", "Start with a controlled mix of wood-look, light-neutral, grey or solid-color references instead of treating the complete catalog as inventory."],
  ["Match color with profile", "Send both the preferred visual reference and profile. A color image alone does not confirm which section is available with that finish."],
  ["Allocate quantity by reference", "The confirmed starting MOQ is 100 pieces per design and color. List the estimated quantity for every shortlisted combination."],
  ["Validate with a physical sample", "SINOQI can review a free sample request for a genuine B2B requirement. The buyer pays the courier cost, and current sample availability is confirmed per inquiry."],
] as const;

const faqs = [
  ["What WPC wall panel colors are shown in the available catalog?", "The available catalog shows wood-look, light and neutral, grey, dark-neutral and more uniform solid-color directions. These are selection references, not a real-time inventory list."],
  ["Are all YW design references currently available?", "No permanent availability is assumed. Send the YW reference or a clear catalog image, and SINOQI will review the current profile, finish and sample status for the request."],
  ["How should I choose a WPC wall panel design?", "Start with the destination market, sales channel and intended interior use. Then shortlist a design direction, select a catalog-listed profile and confirm the combination through a physical sample."],
  ["Does the WPC wall panel profile change the wall appearance?", "Yes. Profile width, relief and spacing affect the visible rhythm and shadow pattern. The available catalog lists 195 × 14, 195 × 25, 150 × 10 and 195 × 12 mm references, subject to order confirmation."],
  ["Will a physical sample exactly match the color shown on my screen?", "An exact screen-to-sample match is not promised. Screen settings, photography and lighting can change the appearance, so use the applicable physical sample and approved order information for final confirmation."],
  ["Can I request several WPC designs in one sample inquiry?", "You can submit several references for review. Include the intended market, profile, estimated quantity by design and color, and sample destination so the team can confirm what can be prepared."],
  ["What is the MOQ for each design and color?", "The confirmed starting MOQ is 100 pieces per design and color. The final product mix and order configuration are reviewed during quotation."],
  ["What should an importer include in a WPC wall panel RFQ?", "Include the profile, design or color reference, quantity for each combination, destination market, intended interior use, packing preference and any sample or customization requirement."],
] as const;

export function WpcWallPanelDesignsColors({ post }: { post: BlogPost }) {
  const quoteHref = `${localizedPath("contact", "en")}#inquiry`;
  const canonicalUrl = new URL(localizedBlogPostPath(post.slug, "en"), SITE_ORIGIN).toString();
  const absoluteUrl = (path: string) => new URL(path, SITE_ORIGIN).toString();
  const formattedDate = new Intl.DateTimeFormat("en", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  }).format(new Date(`${post.publishedAt}T00:00:00Z`));

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title.en,
      description: post.description.en,
      image: [absoluteUrl(images.designs), absoluteUrl(images.production)],
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      mainEntityOfPage: canonicalUrl,
      author: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
      publisher: { "@type": "Organization", name: company.brand, url: SITE_ORIGIN },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl(localizedPath("home", "en")) },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl(localizedPath("blog", "en")) },
        { "@type": "ListItem", position: 3, name: post.title.en, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
      <article className="design-guide wpc-design-guide">
        <header className="article-hero design-guide__hero">
          <div className="container article-hero__inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href={localizedPath("home", "en")}>Home</Link><span aria-hidden="true">/</span>
              <Link href={localizedPath("blog", "en")}>Blog</Link><span aria-hidden="true">/</span>
              <span aria-current="page">WPC designs &amp; colors</span>
            </nav>
            <div className="article-meta"><span>WPC Wall Panel Selection Guide</span><time dateTime={post.publishedAt}>{formattedDate}</time><span>{post.readingTime.en}</span></div>
            <h1>{post.title.en}</h1>
            <p>Compare catalog-listed design directions, colors and profiles, then prepare a focused sample request for your import, distribution or project-sourcing program.</p>
            <p className="design-guide__hero-context">This guide is built for B2B assortment and sourcing decisions. Catalog images and YW references help identify a direction, but they do not confirm real-time stock, a fixed profile pairing or an exact screen-to-product color match.</p>
            <div className="design-guide__actions">
              <Link className="button button--orange" href={localizedPath("download", "en")}>Request the WPC Catalog</Link>
              <Link className="button button--outline-light" href={quoteHref}>Request Samples</Link>
            </div>
            <p className="design-guide__rfq-note">Share the profile, color or YW reference, quantity by design and color, destination market and sample delivery country.</p>
          </div>
        </header>

        <div className="article-cover design-guide__cover">
          <div className="container design-guide__cover-grid">
            <div className="design-guide__cover-main wpc-design-guide__catalog-board"><Image src={images.designs} alt={post.coverAlt?.en ?? "WPC wall panel designs and colors"} fill priority sizes="(max-width: 900px) 100vw, 68vw" /></div>
            <div className="design-guide__cover-side"><Image src={images.production} alt="WPC wall panel profiles during production" fill priority sizes="(max-width: 900px) 100vw, 32vw" /></div>
          </div>
        </div>

        <div className="container design-guide__content">
          <section className="design-guide__intro" id="how-to-use">
            <p className="eyebrow">Selection path</p>
            <h2>How to Use This WPC Wall Panel Design Guide</h2>
            <p>Selecting a marketable WPC wall panel range involves more than choosing an attractive room image. Importers, distributors, wholesalers, building-material dealers and project buyers need to connect the visual reference with a profile, quantity and sample that can be reviewed for the actual order.</p>
            <ol className="design-guide__number-list">
              {["Choose a design direction", "Compare profile references", "Shortlist colors", "Request the catalog or samples", "Confirm the quote configuration"].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
            </ol>
            <p className="design-guide__related-copy">For the category definition, read <Link href={localizedBlogPostPath("what-is-wpc-wall-panel", "en")}>what a WPC wall panel is</Link>. For commercial terms and the core product overview, review the <Link href={localizedPath("wpc-wall-panel", "en")}>WPC wall panel product page</Link>. Application images throughout the site are selection references and are not presented as completed customer projects.</p>
          </section>

          <section id="design-directions">
            <div className="design-guide__section-heading"><p className="eyebrow">Visual directions</p><h2>WPC Wall Panel Design Directions in the Available Catalog</h2><p>The current public catalog shows the following directions across YW references. They help buyers build a shortlist; they are not a complete or permanently available inventory list.</p></div>
            <div className="design-guide__directions">{designDirections.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
            <div className="design-guide__single-action"><Link className="button button--orange" href={localizedPath("download", "en")}>Request the WPC Catalog</Link></div>
          </section>

          <section className="design-guide__finish-section" id="profile-shape">
            <div className="design-guide__section-heading"><p className="eyebrow">Profile and wall rhythm</p><h2>How Profile Shape Changes the Wall Design</h2><p>A wall panel profile changes the repeat, relief and shadow pattern across a surface. This makes profile selection part of the design decision rather than a separate technical afterthought.</p></div>
            <div className="design-guide__routes">{profileReferences.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
            <div className="article-note"><strong>Catalog boundary</strong><p>These dimensions are series references shown in the available catalog. Confirm the selected profile, finish combination and final order specification before ordering.</p></div>
          </section>

          <section className="design-guide__sample-section" id="color-texture">
            <div className="design-guide__sample-media wpc-design-guide__catalog-board"><Image src={images.designs} alt="Wood-look, neutral and grey WPC wall panel color references" fill sizes="(max-width: 900px) 100vw, 46vw" /></div>
            <div>
              <p className="eyebrow">Color and surface review</p>
              <h2>Color, Grain and Texture: What Buyers Should Compare</h2>
              <p>Wood-look grain, neutral color and visible relief all influence how a panel reads on the wall. A photograph can communicate direction, but it cannot establish an exact physical color, surface process or performance level.</p>
              <div className="design-guide__steps">
                <article><span>01</span><div><h3>Compare direction first</h3><p>Use the catalog to choose wood-look, light-neutral, grey, dark-neutral or solid-color references.</p></div></article>
                <article><span>02</span><div><h3>Identify the exact reference</h3><p>Send a YW number, catalog page or clear image so the team can review the intended design.</p></div></article>
                <article><span>03</span><div><h3>Separate appearance from performance</h3><p>Texture and grain describe visible appearance here; no unverified scratch, fire, acoustic, water or environmental performance is implied.</p></div></article>
                <article><span>04</span><div><h3>Confirm with a physical sample</h3><p>Lighting, photography and screen settings can change perceived color. Use the applicable sample and approved order information for final confirmation.</p></div></article>
              </div>
              <div className="design-guide__inline-actions"><Link className="button button--orange" href={quoteHref}>Request Samples by Design Direction</Link><Link className="text-link" href={localizedPath("applications", "en")}>View interior applications <span aria-hidden="true">→</span></Link></div>
            </div>
          </section>

          <section id="assortment">
            <div className="design-guide__section-heading"><p className="eyebrow">B2B collection planning</p><h2>How Distributors Can Build a Practical WPC Wall Panel Collection</h2><p>A useful assortment begins with the customer channel and intended market. It should then narrow the visual directions into combinations that can be sampled, priced and replenished.</p></div>
            <div className="design-guide__steps">{assortmentSteps.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
          </section>

          <section className="design-guide__catalog" id="catalog-sample">
            <div>
              <p className="eyebrow">Catalog to sample</p><h2>Why Physical Samples Matter Before Bulk Orders</h2>
              <p>The bilingual SINOQI catalog is useful for identifying product families, profile references and visual directions. It starts the selection conversation; it does not replace a current product review or approved sample.</p>
              <div className="design-guide__catalog-lists"><div><h3>Use the catalog to</h3><ul>{["Identify a visual direction", "Share a YW reference or recognizable image", "Compare catalog-listed profiles", "Prepare a shortlist for sample review"].map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Do not treat it as</h3><ul>{["A real-time inventory list", "A guarantee that every reference can be sampled", "Proof of an exact surface process", "A guarantee of screen-to-product color matching"].map((item) => <li key={item}>{item}</li>)}</ul></div></div>
              <div className="design-guide__inline-actions"><Link className="button button--orange" href={localizedPath("download", "en")}>Request the Catalog</Link><Link className="text-link" href={quoteHref}>Send a sample request <span aria-hidden="true">→</span></Link></div>
            </div>
            <div className="design-guide__catalog-image"><Image src={images.catalog} alt="SINOQI bilingual PVC and WPC catalog cover" fill sizes="(max-width: 900px) 100vw, 34vw" /></div>
          </section>

          <section className="design-guide__request" id="rfq">
            <div className="design-guide__request-copy"><p className="eyebrow">Prepare your inquiry</p><h2>What to Send When Requesting a WPC Wall Panel Quote</h2><p>A clear request helps SINOQI review the design, profile and commercial configuration without assuming missing specifications.</p><div className="design-guide__request-grid">{["Company and destination market", "Buyer type or sales channel", "Intended interior use", "Preferred profile reference", "YW number, catalog page or design image", "Quantity by design and color", "Packing preference", "Sample delivery country", "Customization or private-label request", "Target order timing"].map((item) => <div key={item}><span aria-hidden="true">✓</span><p>{item}</p></div>)}</div><div className="design-guide__inline-actions"><Link className="button button--orange" href={quoteHref}>Prepare Your WPC Inquiry</Link><Link className="button button--outline" href={localizedPath("download", "en")}>Request Catalog</Link></div></div>
            <div className="design-guide__white-panel"><Image src={images.production} alt="WPC wall panel profiles prepared during production" fill sizes="(max-width: 900px) 100vw, 35vw" /></div>
          </section>

          <section className="design-guide__faq" id="faq">
            <div className="design-guide__section-heading"><p className="eyebrow">FAQ</p><h2>WPC Wall Panel Design and Color FAQ</h2></div>
            <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </section>
        </div>
      </article>

      <section className="cta-band design-guide__final-cta"><div className="container cta-band__inner"><div><p className="eyebrow">WPC Wall Panel</p><h2>Move from a design reference to a sample-ready request</h2><p>Share the profile, color or YW reference, quantity by design and color, market and packing requirement.</p></div><div className="cta-band__actions"><Link className="button button--light" href={localizedPath("wpc-wall-panel", "en")}>View WPC Wall Panels</Link><Link className="button button--outline-light" href={quoteHref}>Request a Quote</Link></div></div></section>
    </>
  );
}
