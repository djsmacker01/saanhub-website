import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Zap,
  TrendingUp,
  Calendar,
  Lightbulb,
  Code,
  Bot,
  Layers,
  Server,
  ExternalLink,
  Camera,
  HardHat,
  Home,
  FlaskConical,
  Star,
  Award,
  BarChart3,
  Brain,
  CalendarCheck,
} from "lucide-react";
import useSEO, { faqSchema, breadcrumbSchema, webPageSchema, SITE } from "../hooks/useSEO";

const HOME_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      url: `${SITE.URL}/`,
      name: "Saan-hub Solutions | Technology Consultancy Cardiff",
      description: "Cardiff-based technology consultancy specialising in custom web apps, AI automation, SaaS platforms & digital transformation. Free consultation available.",
      dateModified: "2026-03-14",
    }),
    faqSchema([
      { q: "What services does Saan-hub Solutions offer?", a: "We offer custom web & mobile app development, AI & automation consulting, MVP startup development, digital transformation consulting, SaaS & marketplace development, and technical advisory services." },
      { q: "How much does a web development project cost?", a: "Project costs range from £800 for simple web apps to £15,000+ for complex SaaS platforms. We offer a free strategy session to provide accurate estimates for your specific project." },
      { q: "Does Saan-hub Solutions work with startups?", a: "Yes. We specialise in helping founders validate ideas, build MVPs, and scale their products. Our startup strategy sessions start from just £50." },
      { q: "Where is Saan-hub Solutions based?", a: "We are headquartered in Cardiff, Wales, United Kingdom, and work with clients globally via remote collaboration." },
      { q: "Can you integrate AI into my existing business?", a: "Absolutely. Our AI & Automation Consulting service designs and implements intelligent workflows, chatbots, and automation systems for businesses of any size, starting from £300." },
    ]),
    breadcrumbSchema([{ name: "Home", url: `${SITE.URL}/` }]),
  ],
};

const HomePage = ({ setActivePage }) => {
  useSEO({
    title: "Technology Consultancy Cardiff | Custom Software, AI & Digital Transformation",
    description: "Cardiff-based technology consultancy specialising in custom web & mobile apps, AI automation, SaaS platforms & digital transformation. Trusted by startups & businesses worldwide. Free strategy consultation.",
    keywords: "technology consultancy Cardiff, custom software development UK, AI automation consultant, digital transformation, startup MVP development, SaaS platform development, web app development Cardiff, React developer UK, Node.js development, technology strategy",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=1200&q=80",
    structuredData: HOME_STRUCTURED_DATA,
  });

  const consultingServices = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      iconBg: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      border: "border-t-blue-500",
      title: "Startup Platform Strategy",
      description:
        "Helping founders design MVP platforms, define product features, choose the right technology stack, and create development roadmaps.",
      features: [
        "MVP feature planning & scoping",
        "Technology stack recommendation",
        "Development roadmap",
        "Platform architecture design",
      ],
    },
    {
      icon: <Bot className="w-8 h-8" />,
      iconBg: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      border: "border-t-purple-500",
      title: "AI & Automation Consulting",
      description:
        "Helping businesses automate workflows using modern tools, AI agents, and intelligent automation systems that reduce manual effort and scale operations.",
      features: [
        "Workflow automation design",
        "AI agent & chatbot systems",
        "Intelligent process automation",
        "Data dashboards & reporting",
      ],
    },
    {
      icon: <Layers className="w-8 h-8" />,
      iconBg: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
      border: "border-t-emerald-500",
      title: "SaaS & Marketplace Development",
      description:
        "Designing and building scalable platforms such as SaaS products, digital marketplaces, and data-driven applications ready for real-world scale.",
      features: [
        "SaaS product architecture",
        "Digital marketplace platforms",
        "Subscription & billing systems",
        "Multi-tenant infrastructure",
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      iconBg: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      border: "border-t-orange-500",
      title: "Digital Product Architecture",
      description:
        "Advising on system architecture, APIs, databases, and infrastructure required to build scalable, performant, and maintainable applications.",
      features: [
        "System architecture design",
        "API design & integration",
        "Database structure & modelling",
        "Scalable cloud infrastructure",
      ],
    },
  ];

  const innovationProjects = [
    {
      icon: <Home className="w-7 h-7" />,
      iconBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
      tag: "Property Tech",
      tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
      title: "SubletMatch",
      description:
        "An AI-powered property subletting platform that connects tenants looking to sublet with people searching for short-term accommodation — intelligently matched.",
      status: "Live",
      statusColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
      page: "subletmatch",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&w=700&q=70",
    },
    {
      icon: <Camera className="w-7 h-7" />,
      iconBg: "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400",
      tag: "Safety Tech",
      tagColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
      title: "ResQCam",
      description:
        "Emergency incident reporting technology that enables real-time evidence capture and instant sharing with emergency services and safety coordinators.",
      status: "In Development",
      statusColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
      page: null,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&w=700&q=70",
    },
    {
      icon: <HardHat className="w-7 h-7" />,
      iconBg: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400",
      tag: "Worker Safety",
      tagColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
      title: "Safeguard Workers",
      description:
        "A worker protection and reporting platform designed to help employees report unsafe conditions, track incidents, and ensure accountability across organisations.",
      status: "In Development",
      statusColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
      page: null,
      image: "https://images.unsplash.com/photo-1504256134044-16cf7c88e0d0?auto=format&w=700&q=70",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "blue",
      title: "Discovery & Strategy",
      description:
        "We analyse your idea, define the product vision, and map out a clear technical strategy aligned with your goals.",
    },
    {
      number: "02",
      icon: <Server className="w-6 h-6" />,
      color: "purple",
      title: "Product Architecture",
      description:
        "We design the system structure, tech stack, database schema, and API integrations required to build your platform.",
    },
    {
      number: "03",
      icon: <Code className="w-6 h-6" />,
      color: "emerald",
      title: "Development",
      description:
        "We build using agile sprints, integrating automation or AI systems and keeping you informed at every milestone.",
    },
    {
      number: "04",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "orange",
      title: "Scaling & Optimisation",
      description:
        "We help your product grow — improving performance, adding features, and ensuring infrastructure scales with demand.",
    },
  ];

  const stepColors = {
    blue:    { bg: "bg-blue-100 dark:bg-blue-900/30",    text: "text-blue-600 dark:text-blue-400" },
    purple:  { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400" },
    emerald: { bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-600 dark:text-emerald-400" },
    orange:  { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-600 dark:text-orange-400" },
  };

  const expertiseAreas = [
    { icon: <Brain className="w-7 h-7 text-blue-500" />, title: "AI Systems & Automation", description: "Building intelligent automation pipelines, AI agents, and ML-powered features that transform how businesses operate." },
    { icon: <Layers className="w-7 h-7 text-purple-500" />, title: "Platform & SaaS Architecture", description: "Designing scalable, multi-tenant SaaS platforms and digital marketplaces from the ground up with production-grade infrastructure." },
    { icon: <FlaskConical className="w-7 h-7 text-emerald-500" />, title: "Digital Innovation Studio", description: "Not just consultants — we build our own products, giving us real-world insight into launching and scaling digital platforms." },
    { icon: <BarChart3 className="w-7 h-7 text-orange-500" />, title: "Strategy & Advisory", description: "Providing technical leadership, CTO-level advisory, and product strategy to help organisations make the right technology decisions." },
  ];

  const testimonials = [
    { company: "Safe Online Space Cymru", role: "CEO", content: "Saan-hub Solutions transformed our operations with their custom software solution. The team understood our needs and delivered beyond expectations.", rating: 5 },
    { company: "OTID ENTERTAINMENT", role: "CTO", content: "Their digital transformation consulting helped us modernize our tech stack and improve efficiency by 40%. Highly recommended!", rating: 5 },
    { company: "SmartMealSaver", role: "Founder", content: "From MVP to full product launch, Saan-hub Solutions guided us every step of the way. Professional, reliable, and results-driven.", rating: 5 },
  ];

  return (
    <div>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&w=1920&q=70"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-blue-950/88 to-indigo-950/90" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-500/15 border border-blue-400/25 rounded-full px-5 py-2 mb-7">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-300 tracking-wide">
                  Technology Consultancy &amp; Digital Innovation Studio
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] text-white">
                Building Intelligent{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Platforms,
                </span>
                <br />
                Automation &amp;{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  AI Solutions.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                SAAN-HUB SOLUTIONS helps startups and organisations transform
                ideas into scalable digital products through technology strategy,
                platform development, and AI automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setActivePage("contact")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 font-semibold text-base">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Book a Strategy Session</span>
                </button>
                <button
                  onClick={() => setActivePage("services")}
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/25 px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-base">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Stats row */}
              <div className="mt-12 grid grid-cols-4 gap-4 max-w-sm mx-auto lg:mx-0">
                {[
                  { value: "5+", label: "Years" },
                  { value: "5+", label: "Products" },
                  { value: "10+", label: "Clients" },
                  { value: "100%", label: "Satisfaction" },
                ].map((s, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – hero image with floating cards */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=900&q=75"
                  alt="Team working on digital solutions"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
              </div>
              {/* Floating card – bottom left */}
              <div className="absolute -bottom-5 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl px-5 py-4 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Projects Delivered</p>
                  <p className="text-xl font-extrabold text-gray-900 dark:text-white">100+</p>
                </div>
              </div>
              {/* Floating card – top right */}
              <div className="absolute -top-5 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl px-5 py-4 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Client Satisfaction</p>
                  <p className="text-xl font-extrabold text-gray-900 dark:text-white">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONSULTING SERVICES ═══════════════════════ */}
      <section className="bg-gray-50 dark:bg-gray-900/60 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Consulting &amp; Platform Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are technology strategists and systems architects — we help you
              design, build, and scale the right platform for your idea.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingServices.map((service, i) => (
              <div
                key={i}
                className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${service.border} overflow-hidden hover:-translate-y-1 flex flex-col`}>
                <div className="p-7 flex-grow">
                  <div className={`inline-block p-3 rounded-xl mb-5 ${service.iconBg}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f, fi) => (
                      <li key={fi} className="flex items-start space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-7 pb-6">
                  <button
                    onClick={() => setActivePage("services")}
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center space-x-1 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setActivePage("services")}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <span>View All Services &amp; Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ INNOVATION LAB ════════════════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-full px-4 py-1.5 mb-4">
                <FlaskConical className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  Innovation Lab
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Platforms We Are Building
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                We don&apos;t just consult — we build. These are our own innovation
                projects, proving we understand what it truly takes to launch and
                scale a digital product.
              </p>
            </div>
            <button
              onClick={() => setActivePage("products")}
              className="shrink-0 inline-flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 self-start lg:self-auto">
              <span>All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {innovationProjects.map((project, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center space-x-1.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${project.tagColor}`}>
                      {project.tag}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className={`p-2 rounded-xl ${project.iconBg} bg-white/90 dark:bg-gray-900/80`}>
                      {project.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  {project.page ? (
                    <button
                      onClick={() => setActivePage(project.page)}
                      className="inline-flex items-center space-x-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ HOW WE WORK ═══════════════════════════════ */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              A structured consulting-to-delivery process that ensures your
              platform is designed correctly before a single line of code is written.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const c = stepColors[step.color];
              return (
                <div
                  key={i}
                  className="relative bg-white/5 border border-white/10 hover:bg-white/10 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-4xl font-black opacity-20 ${c.text}`}>
                      {step.number}
                    </span>
                    <div className={`p-3 rounded-xl ${c.bg} ${c.text}`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-white/25" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setActivePage("contact")}
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105">
              <Calendar className="w-5 h-5" />
              <span>Start With a Discovery Call</span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHY SAAN-HUB ══════════════════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3">
              Our Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Why SAAN-HUB?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our expertise spans AI systems, automation platforms, SaaS
              architecture, and digital product development — backed by real
              projects we have built ourselves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
                <div className="inline-block p-3 bg-gray-50 dark:bg-gray-700 rounded-xl mb-5">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIALS ══════════════════════════════ */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Trusted by startups and organisations across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm p-7 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, ri) => (
                    <span key={ri} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed italic text-sm">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                    {t.company.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.company}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ══════════════════════════════════ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.5) 0%, transparent 60%), radial-gradient(circle at 75% 30%, rgba(59,130,246,0.4) 0%, transparent 55%)" }}
            />
            <div className="relative max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Have a platform idea or a process{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  that needs automation?
                </span>
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Let&apos;s discuss how technology can transform it. Book a free
                strategy call and walk away with a clear picture of what to build
                and how to build it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActivePage("contact")}
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-9 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:scale-105 text-lg">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Book a Consultation</span>
                </button>
                <button
                  onClick={() => setActivePage("services")}
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 border-2 border-white/30 text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-lg">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
