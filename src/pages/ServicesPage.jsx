import React, { useEffect } from "react";
import {
  Code,
  Brain,
  Rocket,
  Cog,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Zap,
  Globe,
  Lightbulb,
  FileText,
  Bot,
  Layers,
  TrendingUp,
  CalendarCheck,
  BadgePoundSterling,
  Star,
} from "lucide-react";

const ServicesPage = ({ setActivePage }) => {
  useEffect(() => {
    document.title = "Services | Saan-hub Solutions";
  }, []);

  const coreServices = [
    {
      icon: <Code className="w-12 h-12 text-blue-500" />,
      title: "Custom Web & Mobile App Development",
      subtitle: "User-centric solutions built to scale",
      description:
        "We design and develop custom web and mobile applications tailored to your specific business needs. Our solutions are built with scalability, performance, and user experience in mind, ensuring your application grows with your business and delivers exceptional value to your customers.",
      features: [
        "Responsive web applications",
        "Native and cross-platform mobile apps",
        "User experience (UX) design",
        "API development and integration",
        "Performance optimization",
        "Quality assurance and testing",
      ],
      color: "blue",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&w=700&q=70",
      imageAlt: "Web and mobile app development",
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "Digital Transformation & Tech Consulting",
      subtitle: "Strategy, automation, and process optimization",
      description:
        "Transform your business operations with our expert technology consulting services. We analyse your current processes, identify opportunities for improvement, and implement automation solutions that reduce costs, increase efficiency, and drive growth.",
      features: [
        "Technology strategy and roadmap",
        "Process automation and optimization",
        "Legacy system assessment",
        "Digital workflow design",
        "Change management support",
        "Performance metrics and KPIs",
      ],
      color: "purple",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=700&q=70",
      imageAlt: "Digital transformation strategy",
    },
    {
      icon: <Rocket className="w-12 h-12 text-green-500" />,
      title: "MVP & Startup Product Development",
      subtitle: "Fast-track your product to market",
      description:
        "Launch your startup idea quickly with our MVP development services. We help you validate your concept, build a minimum viable product, and scale to a full-featured application. Our agile approach ensures you get to market faster while maintaining quality and flexibility.",
      features: [
        "MVP development and validation",
        "Rapid prototyping",
        "Product-market fit analysis",
        "Scalable architecture design",
        "Iterative development approach",
        "Launch and growth support",
      ],
      color: "green",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&w=700&q=70",
      imageAlt: "Startup MVP development",
    },
    {
      icon: <Cog className="w-12 h-12 text-orange-500" />,
      title: "Technology Stack Modernisation & Cloud Integration",
      subtitle: "Upgrade legacy systems and migrate to the cloud",
      description:
        "Modernise your technology infrastructure with our cloud migration and stack modernisation services. We help you move from outdated systems to modern, cloud-based solutions that improve performance, security, and scalability while reducing operational costs.",
      features: [
        "Cloud migration strategy and execution",
        "Legacy system modernization",
        "Infrastructure optimization",
        "Security and compliance",
        "DevOps and CI/CD implementation",
        "Ongoing maintenance and support",
      ],
      color: "orange",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&w=700&q=70",
      imageAlt: "Cloud infrastructure",
    },
  ];

  const additionalBenefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Secure & Compliant",
      description:
        "All our solutions follow industry best practices for security and compliance.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Fast Delivery",
      description:
        "Agile methodologies ensure rapid development and quick time-to-market.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Expert Team",
      description:
        "Work with experienced developers and consultants who understand your business.",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "Scalable Solutions",
      description:
        "Build for today, scale for tomorrow with future-proof architecture.",
    },
  ];

  const consultingServices = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      color: "blue",
      badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
      border: "border-blue-500",
      iconBg: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      number: "01",
      title: "Startup Idea Strategy Session",
      bestFor: "Founders with an idea but no technical plan",
      description:
        "Clarify your platform concept, validate feasibility, and walk away with a concrete technical roadmap — all in a single focused session.",
      features: [
        "60–90 minute strategy consultation",
        "Platform feature planning & scoping",
        "Technology stack recommendation",
        "Monetisation strategy guidance",
        "MVP roadmap",
      ],
      price: "From £50 – £120",
      priceNote: "per session",
      cta: "Book Consultation",
      outcome: "A clear plan for building your platform.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      color: "purple",
      badge:
        "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
      border: "border-purple-500",
      iconBg:
        "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      number: "02",
      title: "MVP Product Blueprint",
      bestFor: "Startups ready to build their first version",
      description:
        "A comprehensive technical specification document your development team can use to build the product correctly from day one.",
      features: [
        "Full feature breakdown & user stories",
        "System architecture design",
        "Recommended technology stack",
        "Database structure & data modelling",
        "API integrations mapping",
        "Development roadmap & milestones",
      ],
      price: "£150 – £600",
      priceNote: "per blueprint",
      cta: "Request Proposal",
      outcome:
        "A developer-ready specification document for your product.",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      color: "green",
      badge:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
      border: "border-emerald-500",
      iconBg:
        "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
      number: "03",
      title: "AI & Automation Consulting",
      bestFor: "Companies with repetitive processes or AI ambitions",
      description:
        "Identify automation opportunities, design AI-powered workflows, and implement intelligent systems that reduce manual work and scale operations.",
      features: [
        "Workflow automation design",
        "AI chatbot & agent systems",
        "Internal automation tools",
        "Data dashboards & reporting",
        "Integration with existing platforms",
      ],
      price: "£300 – £2,000",
      priceNote: "depending on scope",
      cta: "Discuss Project",
      outcome:
        "Intelligent systems that save time and reduce operational cost.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      color: "orange",
      badge:
        "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
      border: "border-orange-500",
      iconBg:
        "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      number: "04",
      title: "Platform Development",
      bestFor: "Businesses ready to build a full digital product",
      description:
        "End-to-end design and development of scalable digital platforms — from SaaS products and marketplaces to booking systems and internal business tools.",
      features: [
        "SaaS platforms & subscription products",
        "Digital marketplaces",
        "Booking & management systems",
        "Custom dashboards & portals",
        "Internal business tools",
      ],
      price: "£800 – £15,000+",
      priceNote: "per project",
      cta: "Start Your Project",
      outcome:
        "A production-ready, scalable digital platform built to grow.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      color: "indigo",
      badge:
        "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
      border: "border-indigo-500",
      iconBg:
        "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
      number: "05",
      title: "Technical Advisory",
      bestFor: "Growing companies needing ongoing strategic guidance",
      description:
        "Become your organisation's embedded technical advisor — providing continuous product strategy, architecture guidance, and developer oversight on a monthly retainer.",
      features: [
        "Product strategy & roadmap reviews",
        "Architecture & infrastructure guidance",
        "Developer team supervision",
        "Scaling & performance advisory",
        "Monthly strategy calls",
      ],
      price: "£150 – £800",
      priceNote: "per month",
      cta: "Monthly Partnership",
      outcome:
        "Predictable, expert technical leadership without the cost of a full-time CTO.",
    },
  ];

  return (
    <div className="space-y-16 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl mb-16 min-h-[380px] flex items-center -mx-4 sm:-mx-6 lg:-mx-8 px-0">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&w=1920&q=70"
            alt="Technology services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/93 via-blue-900/88 to-indigo-950/92" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 40%, rgba(139,92,246,0.4) 0%, transparent 55%)",
            }}
          />
        </div>
        <div className="relative z-10 w-full px-8 sm:px-14 py-20 sm:py-28">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200 tracking-wide">
                Cardiff-Based · UK &amp; Global
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
              Saan-hub Solutions delivers comprehensive technology services that
              drive digital transformation and business growth. We partner with
              startups, SMEs, and organisations to build custom software solutions,
              modernise technology stacks, and implement digital strategies that
              deliver measurable results.
            </p>
          </div>
        </div>
      </div>

      {/* Core Services */}
      <div className="space-y-10">
        {coreServices.map((service, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}>
            {/* Visual panel with image */}
            <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-[340px] overflow-hidden">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-gray-900/40" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="inline-block mb-4 bg-white/15 backdrop-blur-sm p-4 rounded-2xl w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-white/75 font-medium text-sm">
                  {service.subtitle}
                </p>
              </div>
            </div>
            {/* Content panel */}
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Benefits */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16 rounded-3xl px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose Saan-hub Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We deliver more than just code—we deliver solutions that drive
              business success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-block mb-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Overview */}
      <div className="bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We follow a proven methodology that ensures your project succeeds
            from start to finish
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  1
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Discovery
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Understand your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  2
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Strategy
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Design the solution
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  3
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Build
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Develop with agility
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  4
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Launch & Support
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Deploy and maintain
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Consulting & Digital Innovation Services ── */}
      <div className="space-y-12">
        {/* Section Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 rounded-3xl p-10 sm:p-14 text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{backgroundImage:"radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 60%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 55%)"}} />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium tracking-wide text-white/90">Consulting &amp; Digital Innovation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Technology Consulting &amp;{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Platform Development
              </span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              SAAN-HUB SOLUTIONS helps startups and organisations design and
              build intelligent digital platforms, automation systems, and
              AI-powered tools. We are technology strategists, systems architects,
              and innovation partners — not just a development agency.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {consultingServices.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-l-4 ${service.border} overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                index === consultingServices.length - 1 && consultingServices.length % 2 !== 0
                  ? "lg:col-span-2"
                  : ""
              }`}>
              <div className="p-7 sm:p-8">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${service.iconBg}`}>
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        {service.number}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className={`hidden sm:block text-right shrink-0 ml-4`}>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${service.badge}`}>
                      <BadgePoundSterling className="w-3 h-3 mr-1" />
                      {service.price}
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{service.priceNote}</p>
                  </div>
                </div>

                {/* Best For */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Best for:
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium italic">
                    {service.bestFor}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start space-x-2.5">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Mobile Price */}
                <div className={`sm:hidden mb-5`}>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${service.badge}`}>
                    <BadgePoundSterling className="w-3 h-3 mr-1" />
                    {service.price} <span className="ml-1 font-normal opacity-75">/ {service.priceNote}</span>
                  </div>
                </div>

                {/* Outcome + CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-start space-x-1.5">
                    <span className="font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">Outcome:</span>
                    <span>{service.outcome}</span>
                  </p>
                  <button
                    onClick={() => setActivePage("contact")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setActivePage("contact");
                    }}
                    className="shrink-0 inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategy Session CTA */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 p-10 sm:p-12">
              <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-1.5 mb-6">
                <CalendarCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  Free Technology Strategy Session
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to turn your idea into a platform?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Book a complimentary strategy call with our team. We will discuss
                your platform concept, identify the right technology approach, and
                give you an honest assessment of how to move forward.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "No sales pitch — just expert guidance",
                  "Understand the right technology for your idea",
                  "Get a realistic timeline and cost estimate",
                  "Leave with actionable next steps",
                ].map((point, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setActivePage("contact")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActivePage("contact");
                  }}
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Book a Consultation</span>
                </button>
                <button
                  onClick={() => setActivePage("contact")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActivePage("contact");
                  }}
                  className="inline-flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                  <FileText className="w-5 h-5" />
                  <span>Request a Proposal</span>
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-purple-700 p-10 sm:p-12 flex flex-col justify-center text-white">
              <h4 className="text-xl font-bold mb-6">Why work with us?</h4>
              <div className="space-y-5">
                {[
                  { label: "Technology Strategist", desc: "We architect solutions, not just code them." },
                  { label: "Systems Architect", desc: "Built for scale from day one." },
                  { label: "Innovation Partner", desc: "We think alongside your business." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="text-sm text-blue-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Let's discuss how we can help transform your business with our
          technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActivePage("contact")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActivePage("contact");
              }
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
            <span>Get a Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActivePage("contact")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActivePage("contact");
              }
            }}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
