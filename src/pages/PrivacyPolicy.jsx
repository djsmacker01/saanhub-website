import React, { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Share2,
  UserCheck,
  Mail,
  MapPin,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import useSEO, { breadcrumbSchema, webPageSchema, SITE } from "../hooks/useSEO";

const sections = [
  {
    id: "introduction",
    icon: <Shield className="w-5 h-5" />,
    iconBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
    title: "Introduction",
    content: (
      <>
        <p>
          At Saan-hub Solutions, we take your privacy seriously. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when
          you use our software development, AI integration, and digital transformation
          services.
        </p>
        <p className="mt-4">
          By engaging our services or using our website, you agree to the practices
          described in this policy. We encourage you to read this document carefully
          and contact us if you have any questions.
        </p>
      </>
    ),
  },
  {
    id: "information-collected",
    icon: <Database className="w-5 h-5" />,
    iconBg: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400",
    title: "Information We Collect",
    content: (
      <>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 mt-2">Personal Information</h4>
        <ul className="space-y-2">
          {["Contact information (name, email, phone number)", "Company information and project requirements", "Payment information", "Communication records"].map((item, i) => (
            <li key={i} className="flex items-start space-x-2.5">
              <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 mt-5">Technical Information</h4>
        <ul className="space-y-2">
          {["IP addresses and browser type/version", "Operating system and device information", "Usage data and analytics", "Cookies and session data"].map((item, i) => (
            <li key={i} className="flex items-start space-x-2.5">
              <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    icon: <Eye className="w-5 h-5" />,
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400",
    title: "How We Use Your Information",
    content: (
      <ul className="space-y-2">
        {[
          "To provide and maintain our services",
          "To process your requests and transactions",
          "To communicate with you about our services and updates",
          "To improve our services and develop new features",
          "To ensure the security and integrity of our platform",
          "To comply with legal obligations and regulations",
        ].map((item, i) => (
          <li key={i} className="flex items-start space-x-2.5">
            <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "data-security",
    icon: <Lock className="w-5 h-5" />,
    iconBg: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400",
    title: "Data Security",
    content: (
      <>
        <p>
          We implement appropriate technical and organisational measures to protect
          your personal information against unauthorised access, alteration,
          disclosure, or destruction. Our security measures include:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "End-to-end encryption of sensitive data in transit and at rest",
            "Regular security assessments and penetration testing",
            "Strict access controls and multi-factor authentication",
            "Secure cloud infrastructure with industry-standard protocols",
            "Regular backups and tested disaster recovery plans",
          ].map((item, i) => (
            <li key={i} className="flex items-start space-x-2.5">
              <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "data-sharing",
    icon: <Share2 className="w-5 h-5" />,
    iconBg: "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400",
    title: "Data Sharing",
    content: (
      <>
        <p>
          We do not sell your personal data. We may share your information only in
          the following limited circumstances:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Trusted service providers and business partners who assist in delivering our services",
            "Legal authorities when required by applicable law or court order",
            "Third parties with your explicit prior consent",
          ].map((item, i) => (
            <li key={i} className="flex items-start space-x-2.5">
              <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    icon: <UserCheck className="w-5 h-5" />,
    iconBg: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400",
    title: "Your Rights",
    content: (
      <>
        <p>
          Under UK GDPR and applicable data protection law, you have the following
          rights regarding your personal data:
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Access your personal information",
            "Correct inaccurate or incomplete data",
            "Request erasure of your data",
            "Object to data processing",
            "Data portability to another provider",
            "Withdraw consent at any time",
          ].map((right, i) => (
            <div key={i} className="flex items-center space-x-2.5 bg-gray-50 dark:bg-gray-700/50 rounded-lg px-3 py-2.5">
              <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0" />
              <span className="text-sm font-medium">{right}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

const PRIVACY_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      url: `${SITE.URL}/privacy-policy`,
      name: "Privacy Policy | Saan-hub Solutions",
      description: "Saan-hub Solutions privacy policy — how we collect, use, and protect your personal data in line with UK GDPR and data protection regulations.",
    }),
    breadcrumbSchema([
      { name: "Home",           url: `${SITE.URL}/` },
      { name: "Privacy Policy", url: `${SITE.URL}/privacy-policy` },
    ]),
  ],
};

const PrivacyPolicy = ({ setActivePage }) => {
  const [activeSection, setActiveSection] = useState("introduction");

  useSEO({
    title: "Privacy Policy | UK GDPR Compliant Data Protection",
    description: "Saan-hub Solutions privacy policy — how we collect, use, store, and protect your personal data in accordance with UK GDPR and data protection regulations. University of South Wales, Newport.",
    keywords: "Saan-hub Solutions privacy policy, GDPR compliance, data protection policy, UK data privacy, personal data handling",
    noIndex: false,
    structuredData: PRIVACY_STRUCTURED_DATA,
  });

  return (
    <div className="space-y-0">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 25% 50%, #6366f1 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-5">
            <div className="p-3 bg-white/10 rounded-xl">
              <Shield className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
              <p className="text-blue-300 text-sm mt-1">
                Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
          </div>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            We are committed to protecting your privacy and handling your data
            transparently. This policy explains how we collect, use, and safeguard
            your information.
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-10">

            {/* Sticky sidebar TOC */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                  Contents
                </p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActiveSection(s.id);
                        document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`w-full text-left flex items-center space-x-2.5 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                        activeSection === s.id
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                      }`}>
                      <span className={`flex-shrink-0 ${s.iconBg} p-1.5 rounded-md`}>
                        {s.icon}
                      </span>
                      <span>{s.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content sections */}
            <div className="lg:col-span-3 space-y-10">
              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-7 sm:p-8 scroll-mt-28">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-3 rounded-xl ${s.iconBg}`}>
                      {s.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{s.title}</h2>
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                    {s.content}
                  </div>
                </section>
              ))}

              {/* Contact section */}
              <section
                id="contact"
                className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-7 sm:p-8 text-white scroll-mt-28">
                <div className="flex items-center space-x-4 mb-5">
                  <div className="p-3 bg-white/15 rounded-xl">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold">Contact Us</h2>
                </div>
                <p className="text-white/80 mb-5 leading-relaxed">
                  If you have any questions about this Privacy Policy or wish to
                  exercise your data rights, please contact us:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-3">
                    <Mail className="w-4 h-4 text-blue-200" />
                    <a href="mailto:info@saan-hub.com" className="text-sm font-medium hover:text-blue-200 transition-colors">
                      info@saan-hub.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-3">
                    <MapPin className="w-4 h-4 text-blue-200" />
                    <span className="text-sm font-medium">University of South Wales, Newport NP20 2BP</span>
                  </div>
                </div>
                {setActivePage && (
                  <button
                    onClick={() => setActivePage("contact")}
                    className="inline-flex items-center space-x-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
