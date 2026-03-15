import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Cpu,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const Footer = ({ setActivePage }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "services" },
    { label: "Products", page: "products" },
    { label: "Blog", page: "blog" },
    { label: "Contact", page: "contact" },
  ];

  const products = [
    { label: "SubletMatch", href: null, page: "subletmatch" },
    { label: "Fare-Tracker", href: "https://faretracker.netlify.app/" },
    { label: "Cymru Unleashed", href: "https://cymruunleashed.com/" },
    { label: "Hailey's Hotel", href: "https://haileyhotel.netlify.app/" },
    { label: "TrackGoal", href: "https://trackgoal.online/" },
  ];

  const socials = [
    { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/saanhubsolutions", label: "Twitter/X", color: "hover:bg-sky-500" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/company/saan-hub-solutions", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: <Github className="w-4 h-4" />, href: "https://github.com/djsmacker01", label: "GitHub", color: "hover:bg-gray-600" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-0">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <button
              onClick={() => setActivePage("home")}
              className="flex items-center space-x-3 mb-5 group">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <Cpu className="h-5 w-5 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-extrabold text-white tracking-tight leading-none">
                  SAAN-HUB
                </span>
                <span className="text-[10px] font-semibold text-gray-500 tracking-[0.15em] uppercase leading-none mt-0.5">
                  Solutions
                </span>
              </div>
            </button>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              UK technology consultancy and digital innovation studio, founded in Wales.
              We help startups and organisations build intelligent digital platforms,
              automation systems, and AI-driven solutions.
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-8 h-8 rounded-lg bg-gray-800 ${s.color} text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Company links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => setActivePage(link.page)}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center space-x-1.5 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.label}>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1.5 group">
                      <span>{p.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setActivePage(p.page)}
                      className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center space-x-1.5 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                      <span>{p.label}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@saan-hub.com"
                  className="flex items-start space-x-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500 group-hover:text-blue-400" />
                  <span>info@saan-hub.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+447459253102"
                  className="flex items-start space-x-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500 group-hover:text-green-400" />
                  <span>+44 7459 253102</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-500" />
                <span>United Kingdom</span>
              </li>
              <li className="text-sm text-gray-500">
                Mon–Fri · 9am–6pm GMT
              </li>
            </ul>

            <div className="mt-6">
              <button
                onClick={() => setActivePage("contact")}
                className="inline-flex items-center space-x-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {currentYear} Saan-hub Solutions Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setActivePage("privacy-policy")}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </button>
            <button
              onClick={() => setActivePage("contact")}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Contact
            </button>
            <span className="text-xs text-gray-600">
              Founded in Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
