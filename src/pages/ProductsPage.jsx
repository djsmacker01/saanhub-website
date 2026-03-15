import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  Globe,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Users,
  Code,
  Home,
  MapPin,
  Trophy,
  Hotel,
  Target,
  Cpu,
} from "lucide-react";
import useSEO, { softwareAppSchema, breadcrumbSchema, webPageSchema, SITE } from "../hooks/useSEO";

const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

const products = [
  {
    id: "subletmatch",
    title: "SubletMatch",
    tagline: "AI-Powered Property Subletting Platform",
    color: "blue",
    accent: "from-blue-600 to-blue-800",
    border: "border-blue-200 dark:border-blue-800/40",
    hover: "hover:border-blue-400 dark:hover:border-blue-600",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    icon: <Home className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&w=900&q=75",
    imageAlt: "Modern apartment building",
    status: "Live",
    statusColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    description:
      "A comprehensive AI-powered subletting marketplace that intelligently matches tenants with short-term accommodation. Features smart filtering, secure messaging, and automated background checks.",
    features: ["AI-powered matching", "Secure messaging", "Background checks", "In-app payments"],
    badges: [
      { icon: <Shield className="w-4 h-4" />, label: "Enterprise Security" },
      { icon: <Zap className="w-4 h-4" />, label: "AI Matching" },
      { icon: <Users className="w-4 h-4" />, label: "User-Friendly" },
    ],
    techStack: ["Angular", "Node.js", "Supabase", "Express", "Tailwind CSS"],
    link: null,
    ctaLabel: "Learn More",
  },
  {
    id: "fare-tracker",
    title: "Fare-Tracker",
    tagline: "Smart Transportation Intelligence Platform",
    color: "green",
    accent: "from-emerald-600 to-green-800",
    border: "border-green-200 dark:border-green-800/40",
    hover: "hover:border-green-400 dark:hover:border-green-600",
    badge: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    icon: <MapPin className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&w=900&q=75",
    imageAlt: "Transportation and transit",
    status: "Live",
    statusColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    description:
      "An AI-powered transportation intelligence platform featuring smart route planning, real-time fare tracking, and automated workflows for optimal transportation decisions.",
    features: ["Real-time tracking", "AI predictions", "Route planning", "Cost analytics"],
    badges: [
      { icon: <Shield className="w-4 h-4" />, label: "Real-time Data" },
      { icon: <Zap className="w-4 h-4" />, label: "AI Predictions" },
      { icon: <Users className="w-4 h-4" />, label: "Easy to Use" },
    ],
    techStack: ["React", "JavaScript", "CSS3", "HTML5", "Netlify"],
    link: "https://faretracker.netlify.app/",
    ctaLabel: "Visit Website",
  },
  {
    id: "cymru",
    title: "Cymru Unleashed",
    tagline: "Celebrating Welsh Heritage & Sport",
    color: "red",
    accent: "from-red-600 to-rose-800",
    border: "border-red-200 dark:border-red-800/40",
    hover: "hover:border-red-400 dark:hover:border-red-600",
    badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    icon: <Trophy className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&w=900&q=75",
    imageAlt: "Sports and community",
    status: "Live",
    statusColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    description:
      "A grassroots initiative celebrating Wales' historic participation in UEFA Women's Euro 2025. Empowering young Welsh girls through sport, creativity, and digital storytelling.",
    features: ["Cultural storytelling", "Community platform", "Youth engagement", "Digital gallery"],
    badges: [
      { icon: <Users className="w-4 h-4" />, label: "Community" },
      { icon: <Globe className="w-4 h-4" />, label: "Cultural Pride" },
      { icon: <Zap className="w-4 h-4" />, label: "Digital Innovation" },
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel", "TypeScript"],
    link: "https://cymruunleashed.com/",
    ctaLabel: "Visit Website",
  },
  {
    id: "hailey",
    title: "Hailey's Hotel",
    tagline: "Premium Hotel Booking Experience",
    color: "purple",
    accent: "from-purple-600 to-violet-800",
    border: "border-purple-200 dark:border-purple-800/40",
    hover: "hover:border-purple-400 dark:hover:border-purple-600",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    icon: <Hotel className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=900&q=75",
    imageAlt: "Luxury hotel",
    status: "Live",
    statusColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    description:
      "A comprehensive hotel booking platform featuring room reservations, amenities showcase, gallery views, and contact management for exceptional hospitality experiences.",
    features: ["Room reservations", "Amenities showcase", "Photo gallery", "Contact management"],
    badges: [
      { icon: <Users className="w-4 h-4" />, label: "Hotel Booking" },
      { icon: <Globe className="w-4 h-4" />, label: "Room Management" },
      { icon: <Zap className="w-4 h-4" />, label: "Online Reservations" },
    ],
    techStack: ["React", "JavaScript", "CSS3", "HTML5", "Netlify"],
    link: "https://haileyhotel.netlify.app/",
    ctaLabel: "Visit Website",
  },
  {
    id: "trackgoal",
    title: "TrackGoal",
    tagline: "Goal Tracking & Productivity Platform",
    color: "orange",
    accent: "from-orange-500 to-amber-700",
    border: "border-orange-200 dark:border-orange-800/40",
    hover: "hover:border-orange-400 dark:hover:border-orange-600",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    icon: <Target className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&w=900&q=75",
    imageAlt: "Goal tracking and analytics",
    status: "Live",
    statusColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    description:
      "A powerful goal tracking and productivity platform featuring goal setting, progress tracking, milestone management, and analytics to help individuals and teams achieve their objectives.",
    features: ["Goal setting", "Progress tracking", "Milestone alerts", "Team analytics"],
    badges: [
      { icon: <Shield className="w-4 h-4" />, label: "Goal Tracking" },
      { icon: <Zap className="w-4 h-4" />, label: "Progress Analytics" },
      { icon: <Users className="w-4 h-4" />, label: "Team Collaboration" },
    ],
    techStack: ["React", "Node.js", "Supabase", "Express", "Tailwind CSS"],
    link: "https://trackgoal.online/",
    ctaLabel: "Visit Website",
  },
];

const PRODUCTS_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      url: `${SITE.URL}/products`,
      name: "Digital Products Portfolio | SubletMatch, Fare-Tracker & More",
      description: "Explore Saan-hub Solutions' live digital products — AI-powered property platform, transport intelligence, hotel booking, goal tracking, and more.",
    }),
    breadcrumbSchema([
      { name: "Home",     url: `${SITE.URL}/` },
      { name: "Products", url: `${SITE.URL}/products` },
    ]),
    softwareAppSchema([
      { id: "subletmatch",   name: "SubletMatch",       category: "BusinessApplication",      description: "AI-powered property subletting marketplace connecting tenants with short-term renters." },
      { id: "fare-tracker",  name: "Fare-Tracker",      category: "TravelApplication",         description: "Smart transportation intelligence platform for real-time fare tracking and route optimisation." },
      { id: "cymru",         name: "Cymru Unleashed",   category: "SocialNetworkingApplication", description: "Welsh community and cultural engagement platform celebrating Wales' sporting heritage." },
      { id: "hailey",        name: "Hailey's Hotel",    category: "TravelApplication",         description: "Premium hotel booking and hospitality management platform with room reservations and amenity showcase." },
      { id: "trackgoal",     name: "TrackGoal",         category: "BusinessApplication",       description: "Goal tracking and productivity platform for individuals and teams to set, monitor, and achieve objectives." },
    ]),
  ],
};

const ProductsPage = ({ activePage, setActivePage }) => {
  useSEO({
    title: "Digital Products | SubletMatch, Fare-Tracker, TrackGoal & More",
    description: "Explore live digital products built by Saan-hub Solutions — SubletMatch (AI property platform), Fare-Tracker (transport intelligence), Hailey's Hotel, TrackGoal & Cymru Unleashed. Proof of our expertise.",
    keywords: "SubletMatch property platform, Fare-Tracker transport app, TrackGoal productivity, Cymru Unleashed Wales, Hailey Hotel booking, digital products Cardiff, SaaS portfolio, software development portfolio",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=1200&q=75",
    structuredData: PRODUCTS_STRUCTURED_DATA,
  });

  if (activePage === "subletmatch") {
    return (
      <div className="space-y-8 py-8 px-4 sm:px-6 lg:px-8 animate-fade-in-up max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">SubletMatch</h1>
        <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
          SubletMatch is an AI-powered property subletting marketplace that
          intelligently connects tenants looking to sublet with people searching
          for short-term accommodation.
        </p>
        <button
          onClick={() => setActivePage("products")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <ArrowRight className="w-5 h-5 transform rotate-180" />
          Back to Products Overview
        </button>
      </div>
    );
  }

  if (activePage === "fare-tracker") {
    return (
      <div className="space-y-8 py-8 px-4 sm:px-6 lg:px-8 animate-fade-in-up max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Fare-Tracker</h1>
        <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
          Fare-Tracker is an AI-powered transportation intelligence platform that
          makes fare tracking effortless and efficient, transforming urban mobility.
        </p>
        <button
          onClick={() => setActivePage("products")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <ArrowRight className="w-5 h-5 transform rotate-180" />
          Back to Products Overview
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=1920&q=70"
            alt="Digital products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/92 via-blue-950/88 to-indigo-950/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/15 border border-blue-400/30 rounded-full px-5 py-2 mb-6">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 tracking-wide">
              Built in the UK · Used Globally
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
            Our Products
          </h1>
          <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just consult — we build. These are our own digital products,
            each live and serving real users. From property tech to productivity
            tools, built with modern stacks and production-grade infrastructure.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { value: "5+", label: "Live Products" },
              { value: "100%", label: "Uptime SLA" },
              { value: "Modern", label: "Tech Stacks" },
              { value: "Real", label: "Users Served" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs text-blue-300 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <div className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              Our Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Explore Our Digital Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border ${product.border} ${product.hover} transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl flex flex-col`}>
                {/* Image banner */}
                <div className="relative h-52 overflow-hidden">
                  <LazyImage
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Icon + status */}
                  <div className="absolute top-4 left-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${product.accent} shadow-lg`}>
                      {product.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white leading-tight">{product.title}</h3>
                    <p className="text-white/75 text-xs mt-1">{product.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Ratings */}
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">5.0</span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 flex-grow">
                    {product.description}
                  </p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.features.map((f, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${product.badge}`}>
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mb-5">
                    <div className="flex items-center mb-2">
                      <Code className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 mr-1.5" />
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Tech Stack
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {product.link ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto w-full flex items-center justify-center font-semibold py-3 px-4 rounded-xl border-2 ${product.border} ${product.badge} hover:opacity-80 transition-all duration-300 text-sm group/btn`}>
                      {product.ctaLabel}
                      <ExternalLink className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button className={`mt-auto w-full flex items-center justify-center font-semibold py-3 px-4 rounded-xl border-2 ${product.border} ${product.badge} hover:opacity-80 transition-all duration-300 text-sm group/btn`}>
                      {product.ctaLabel}
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Global Reach ── */}
      <div className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&w=1920&q=65"
            alt="Global digital reach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/92 to-purple-800/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex-1 text-white">
              <h3 className="text-3xl sm:text-4xl font-bold mb-5">Global Reach</h3>
              <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
                While proudly founded in Wales, our vision extends globally.
                We deliver world-class digital solutions that transcend borders,
                helping businesses across the UK and worldwide achieve their digital
                transformation goals through innovative technology and exceptional service.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center text-white">
              {[
                { value: "15+", label: "Projects Delivered" },
                { value: "10+", label: "Happy Clients" },
                { value: "24/7", label: "Support" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5">
                  <p className="text-3xl font-extrabold">{s.value}</p>
                  <p className="text-sm text-blue-200 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-3xl p-12 sm:p-16 relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25% 50%, rgba(99,102,241,0.5) 0%, transparent 60%), radial-gradient(circle at 75% 30%, rgba(59,130,246,0.4) 0%, transparent 55%)",
              }}
            />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-5">
                  Ready to Build Something Remarkable?
                </h3>
                <p className="text-lg text-white/75 leading-relaxed mb-8">
                  From startups to established enterprises, our software solutions
                  are powering businesses across the United Kingdom. Join the
                  growing number of organisations achieving digital excellence.
                </p>
                <button
                  onClick={() => setActivePage("contact")}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Custom Development", "AI Integration", "Cloud Solutions", "24/7 Support"].map(
                  (s, i) => (
                    <div
                      key={i}
                      className="bg-white/8 border border-white/15 p-5 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300 text-center">
                      <p className="font-semibold text-white">{s}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
