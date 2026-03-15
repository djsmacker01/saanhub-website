import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────
const SITE_URL   = "https://www.saan-hub.com";
const SITE_NAME  = "Saan-hub Solutions";
const TWITTER_HANDLE = "@saanhubsolutions";

const DEFAULT_DESC =
  "UK technology consultancy helping startups and organisations build intelligent digital platforms, AI automation systems, and scalable SaaS products. Serving businesses across the UK. Free strategy consultation available.";

const DEFAULT_KEYWORDS =
  "technology consultancy UK, software development UK, AI automation, digital transformation, custom web development, SaaS development, MVP startup, mobile app development, React developer UK, Node.js development, Saan-hub Solutions, technology consultancy Cardiff";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=1200&q=80";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const setMeta = (name, content, attr = "name") => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLinkTag = (rel, href, id, extra = {}) => {
  let el = id
    ? document.getElementById(id)
    : document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    if (id) el.id = id;
    Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.href = href;
};

const injectJSONLD = (id, data) => {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data, null, 0);
};

const removeJSONLD = (id) => {
  document.getElementById(id)?.remove();
};

// ─── Hook ─────────────────────────────────────────────────────────────────────
/**
 * useSEO — industry-standard per-page SEO management
 *
 * @param {object}  opts
 * @param {string}  opts.title          Page-specific title (will be appended with " | Saan-hub Solutions")
 * @param {string}  [opts.description]  Page meta description (150–160 chars ideal)
 * @param {string}  [opts.keywords]     Comma-separated keyword list
 * @param {string}  [opts.image]        Absolute OG image URL (1200×630 recommended)
 * @param {string}  [opts.type]         OG type — "website" | "article" | "product"
 * @param {object}  [opts.structuredData]  JSON-LD object for page-level schema
 * @param {boolean} [opts.noIndex]      Set true for pages that should not be indexed
 */
const useSEO = ({
  title,
  description  = DEFAULT_DESC,
  keywords     = DEFAULT_KEYWORDS,
  image        = DEFAULT_IMAGE,
  type         = "website",
  structuredData,
  noIndex      = false,
} = {}) => {
  const location = useLocation();
  const pathname = location?.pathname ?? "/";
  // Build canonical — strip trailing slash except root
  const canonical = pathname === "/"
    ? SITE_URL
    : `${SITE_URL}${pathname.replace(/\/$/, "")}`;

  // Stringify structured data so it can safely be a useEffect dependency
  const sdStr = structuredData ? JSON.stringify(structuredData) : null;

  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | UK Technology Consultancy`;

    // ── Document title ──
    document.title = fullTitle;

    // ── Standard meta ──
    setMeta("description",  description);
    setMeta("keywords",     keywords);
    setMeta("author",       SITE_NAME);
    setMeta("robots",
      noIndex
        ? "noindex,nofollow"
        : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    );

    // ── Open Graph ──
    setMeta("og:type",         type,        "property");
    setMeta("og:url",          canonical,   "property");
    setMeta("og:title",        fullTitle,   "property");
    setMeta("og:description",  description, "property");
    setMeta("og:image",        image,       "property");
    setMeta("og:image:width",  "1200",      "property");
    setMeta("og:image:height", "630",       "property");
    setMeta("og:image:alt",    fullTitle,   "property");
    setMeta("og:site_name",    SITE_NAME,   "property");
    setMeta("og:locale",       "en_GB",     "property");

    // ── Twitter / X Card ──
    setMeta("twitter:card",        "summary_large_image");
    setMeta("twitter:site",        TWITTER_HANDLE);
    setMeta("twitter:creator",     TWITTER_HANDLE);
    setMeta("twitter:title",       fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image",       image);
    setMeta("twitter:image:alt",   fullTitle);

    // ── Canonical URL ──
    setLinkTag("canonical", canonical, "canonical-url");

    // ── Per-page JSON-LD ──
    if (sdStr) {
      injectJSONLD("page-structured-data", JSON.parse(sdStr));
    } else {
      removeJSONLD("page-structured-data");
    }

    return () => {
      removeJSONLD("page-structured-data");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, keywords, image, type, canonical, noIndex, sdStr]);
};

export default useSEO;

// ─── Re-export schema builders ─────────────────────────────────────────────
// Helpers to generate reusable JSON-LD schema objects for each page type.

export const SITE = { URL: SITE_URL, NAME: SITE_NAME };

/** BreadcrumbList schema */
export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map(({ name, url }, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": name,
    "item": url,
  })),
});

/** WebPage schema */
export const webPageSchema = ({ url, name, description, dateModified }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  "url": url,
  "name": name,
  "description": description,
  "dateModified": dateModified || new Date().toISOString().split("T")[0],
  "inLanguage": "en-GB",
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "publisher": { "@id": `${SITE_URL}/#organization` },
});

/** FAQ schema */
export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
});

/** Service schema */
export const serviceSchema = (services) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Technology Services — Saan-hub Solutions",
  "description": "Professional technology consulting and development services",
  "itemListElement": services.map((s, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "Service",
      "@id": `${SITE_URL}/services#${s.id}`,
      "name": s.name,
      "description": s.description,
      "provider": { "@id": `${SITE_URL}/#organization` },
      "areaServed": "GB",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "price": s.price,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "GBP",
          "price": s.price,
        },
      },
    },
  })),
});

/** SoftwareApplication schema for products */
export const softwareAppSchema = (apps) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Digital Products — Saan-hub Solutions",
  "itemListElement": apps.map((app, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/products#${app.id}`,
      "name": app.name,
      "description": app.description,
      "applicationCategory": app.category,
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "GBP" },
      "author": { "@id": `${SITE_URL}/#organization` },
    },
  })),
});
