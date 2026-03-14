import { useEffect } from "react";

/**
 * Sets document title and key meta tags for SEO / Open Graph.
 *
 * @param {object} opts
 * @param {string} opts.title        - Page title (appended with " | Saan-hub Solutions")
 * @param {string} [opts.description]
 * @param {string} [opts.image]      - OG image URL (absolute)
 * @param {string} [opts.type]       - OG type, default "website"
 */
const BASE_TITLE = "Saan-hub Solutions";
const DEFAULT_DESC =
  "Cardiff-based technology consultancy helping startups and organisations build intelligent digital platforms, automation systems, and AI-driven solutions.";
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&w=1200&q=75";

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

const useSEO = ({ title, description = DEFAULT_DESC, image = DEFAULT_IMAGE, type = "website" } = {}) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    document.title = fullTitle;

    // Standard meta
    setMeta("description", description);

    // Open Graph
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", image, "property");
    setMeta("og:type", type, "property");
    setMeta("og:site_name", BASE_TITLE, "property");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
  }, [title, description, image, type]);
};

export default useSEO;
