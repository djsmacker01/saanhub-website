# Saan-hub Solutions — Website

The official website for **Saan-hub Solutions**, a UK technology consultancy and digital innovation studio. Built with React, Vite, and Tailwind CSS.

**Live site:** [https://www.saan-hub.com](https://www.saan-hub.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 7 |
| Contact Form | EmailJS |
| Icons | Lucide React |
| Deployment | (your host — e.g. Netlify / Vercel) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Set up environment variables

Copy the example file and fill in your real values:

```bash
cp .env.example .env
```

Open `.env` and add:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

See `.env.example` for full instructions on obtaining each value.

### Run the development server

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173) with hot module replacement.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build for production (outputs to `/dist`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
├── public/
│   ├── sitemap.xml          # XML sitemap for search engines
│   ├── robots.txt           # Crawler rules
│   ├── site.webmanifest     # PWA manifest
│   └── saan-hub-logo.jpg    # Logo / favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Top contact bar
│   │   ├── Navbar.jsx       # Main navigation
│   │   ├── Footer.jsx       # Site footer
│   │   ├── Sidebar.jsx      # Mobile sidebar menu
│   │   ├── ChatWidget.jsx   # AI chat widget UI
│   │   └── chatEngine.js    # Chatbot knowledge base & response logic
│   ├── hooks/
│   │   └── useSEO.js        # Per-page SEO management + JSON-LD schema builders
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── PrivacyPolicy.jsx
│   ├── App.jsx              # Root component and routing
│   └── main.jsx             # Entry point
├── index.html               # HTML shell with meta tags + JSON-LD
├── .env.example             # Environment variable template
└── package.json
```

---

## Key Features

- **SEO-first** — every page has dynamic meta tags, Open Graph, Twitter cards, and JSON-LD structured data managed via `useSEO.js`
- **AI chatbot** — built-in knowledge base chatbot with pattern matching, no external API required
- **Contact form** — EmailJS integration with full validation; form submissions arrive directly in your inbox
- **Dark mode** — system-aware dark/light theme toggle
- **PWA-ready** — web app manifest and mobile meta tags configured
- **Performance** — lazy-loaded images, resource hints, and Vite's optimised build pipeline

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Yes (for contact form) | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Yes (for contact form) | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Yes (for contact form) | EmailJS public key |
| `VITE_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 measurement ID |
| `VITE_N8N_WEBHOOK_URL` | Optional | n8n webhook URL for AI chatbot routing |

---

## Deployment

Build the project:

```bash
npm run build
```

Deploy the contents of the `/dist` folder to your hosting provider. The site is a standard SPA — ensure your host is configured to redirect all routes to `index.html` (Netlify: add a `_redirects` file; Vercel: handled automatically).

---

## Contact

**Email:** info@saan-hub.com  
**Phone:** +44 7459 253102  
**Website:** [https://www.saan-hub.com](https://www.saan-hub.com)
