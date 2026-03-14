import React, { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Zap,
  Shield,
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

const HomePage = ({ setActivePage }) => {
  useEffect(() => {
    document.title = "Home | Saan-hub Solutions";
  }, []);

  const consultingServices = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      iconBg: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      accent: "from-blue-500 to-blue-600",
      border: "border-blue-500",
      title: "Startup Platform Strategy",
      description:
        "Helping founders design MVP platforms, define product features, choose the right technology stack, and create development roadmaps.",
      features: [
        "MVP feature planning & scoping",
        "Technology stack recommendation",
        "Development roadmap",
        "Platform architecture design",
      ],
      delay: "0.1s",
    },
    {
      icon: <Bot className="w-10 h-10" />,
      iconBg:
        "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      accent: "from-purple-500 to-purple-600",
      border: "border-purple-500",
      title: "AI & Automation Consulting",
      description:
        "Helping businesses automate workflows using modern tools, AI agents, and intelligent automation systems that reduce manual effort and scale operations.",
      features: [
        "Workflow automation design",
        "AI agent & chatbot systems",
        "Intelligent process automation",
        "Data dashboards & reporting",
      ],
      delay: "0.2s",
    },
    {
      icon: <Layers className="w-10 h-10" />,
      iconBg:
        "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
      accent: "from-emerald-500 to-emerald-600",
      border: "border-emerald-500",
      title: "SaaS & Marketplace Development",
      description:
        "Designing and building scalable platforms such as SaaS products, digital marketplaces, and data-driven applications ready for real-world scale.",
      features: [
        "SaaS product architecture",
        "Digital marketplace platforms",
        "Subscription & billing systems",
        "Multi-tenant infrastructure",
      ],
      delay: "0.3s",
    },
    {
      icon: <Server className="w-10 h-10" />,
      iconBg:
        "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      accent: "from-orange-500 to-orange-600",
      border: "border-orange-500",
      title: "Digital Product Architecture",
      description:
        "Advising on system architecture, APIs, databases, and infrastructure required to build scalable, performant, and maintainable applications.",
      features: [
        "System architecture design",
        "API design & integration",
        "Database structure & modelling",
        "Scalable cloud infrastructure",
      ],
      delay: "0.4s",
    },
  ];

  const innovationProjects = [
    {
      icon: <Home className="w-8 h-8" />,
      iconBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
      tag: "Property Tech",
      tagColor:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
      title: "SubletMatch",
      description:
        "An AI-powered property subletting platform that connects tenants looking to sublet with people searching for short-term accommodation — intelligently matched.",
      status: "Live",
      statusColor: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
      page: "subletmatch",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&w=800&q=70",
      imageAlt: "Modern apartment building",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      iconBg:
        "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400",
      tag: "Safety Tech",
      tagColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
      title: "ResQCam",
      description:
        "Emergency incident reporting technology that enables real-time evidence capture and instant sharing with emergency services and safety coordinators.",
      status: "In Development",
      statusColor:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
      page: null,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&w=800&q=70",
      imageAlt: "Emergency response technology",
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      iconBg:
        "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400",
      tag: "Worker Safety",
      tagColor:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
      title: "Safeguard Workers",
      description:
        "A worker protection and reporting platform designed to help employees report unsafe conditions, track incidents, and ensure accountability across organisations.",
      status: "In Development",
      statusColor:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
      page: null,
      image: "https://images.unsplash.com/photo-1504256134044-16cf7c88e0d0?auto=format&w=800&q=70",
      imageAlt: "Construction worker safety",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: <Lightbulb className="w-7 h-7" />,
      color: "blue",
      title: "Discovery & Strategy",
      description:
        "We analyse your idea or business problem, define the product vision, and map out a clear technical strategy aligned with your goals.",
    },
    {
      number: "02",
      icon: <Server className="w-7 h-7" />,
      color: "purple",
      title: "Product Architecture",
      description:
        "We design the system structure, technology stack, database schema, and API integrations required to build your platform correctly.",
    },
    {
      number: "03",
      icon: <Code className="w-7 h-7" />,
      color: "emerald",
      title: "Development & Implementation",
      description:
        "We build the platform and integrate automation or AI systems using agile sprints, keeping you informed at every milestone.",
    },
    {
      number: "04",
      icon: <TrendingUp className="w-7 h-7" />,
      color: "orange",
      title: "Scaling & Optimisation",
      description:
        "We help your product grow — improving performance, adding features, and ensuring your infrastructure scales with demand.",
    },
  ];

  const stepColors = {
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      num: "text-blue-200 dark:text-blue-900",
    },
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      num: "text-purple-200 dark:text-purple-900",
    },
    emerald: {
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      text: "text-emerald-600 dark:text-emerald-400",
      num: "text-emerald-200 dark:text-emerald-900",
    },
    orange: {
      bg: "bg-orange-100 dark:bg-orange-900/30",
      text: "text-orange-600 dark:text-orange-400",
      num: "text-orange-200 dark:text-orange-900",
    },
  };

  const credibilityStats = [
    { value: "5+", label: "Years of Innovation", icon: <Award className="w-6 h-6" /> },
    { value: "3+", label: "Live Digital Products", icon: <Rocket className="w-6 h-6" /> },
    { value: "10+", label: "Clients Served", icon: <Star className="w-6 h-6" /> },
    { value: "100%", label: "Client Satisfaction", icon: <CheckCircle className="w-6 h-6" /> },
  ];

  const expertiseAreas = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "AI Systems & Automation",
      description:
        "Building intelligent automation pipelines, AI agents, and machine-learning-powered features that transform how businesses operate.",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-500" />,
      title: "Platform & SaaS Architecture",
      description:
        "Designing scalable, multi-tenant SaaS platforms and digital marketplaces from the ground up with production-grade infrastructure.",
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-emerald-500" />,
      title: "Digital Innovation Studio",
      description:
        "Not just a service provider — we build our own products, giving us real-world insight into what it takes to launch and scale a digital platform.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: "Strategy & Advisory",
      description:
        "Providing technical leadership, CTO-level advisory, and product strategy to help organisations make the right technology decisions.",
    },
  ];

  const testimonials = [
    {
      company: "Safe Online Space Cymru",
      role: "CEO",
      content:
        "Saan-hub Solutions transformed our operations with their custom software solution. The team understood our needs and delivered beyond expectations.",
      rating: 5,
    },
    {
      company: "OTID ENTERTAINMENT",
      role: "CTO",
      content:
        "Their digital transformation consulting helped us modernize our tech stack and improve efficiency by 40%. Highly recommended!",
      rating: 5,
    },
    {
      company: "SmartMealSaver",
      role: "Founder",
      content:
        "From MVP to full product launch, Saan-hub Solutions guided us every step of the way. Professional, reliable, and results-driven.",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-0">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&w=1920&q=70"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/96 via-blue-950/90 to-indigo-950/92" />
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 60%, rgba(59,130,246,0.25) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(139,92,246,0.20) 0%, transparent 55%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Left: text content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-500/15 border border-blue-400/30 rounded-full px-5 py-2 mb-8 animate-fade-in">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-300 tracking-wide">
                  Technology Consultancy &amp; Digital Innovation Studio
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold mb-7 leading-tight animate-fade-in-down"
                style={{ animationDelay: "0.1s" }}>
                <span className="text-white">Building Intelligent{" "}</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Platforms,
                </span>
                <br />
                <span className="text-white">Automation &{" "}</span>
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  AI Solutions.
                </span>
              </h1>

              <p
                className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}>
                SAAN-HUB SOLUTIONS helps startups and organisations transform
                ideas into scalable digital products through technology strategy,
                platform development, and AI automation.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}>
                <button
                  onClick={() => setActivePage("contact")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActivePage("contact");
                  }}
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-9 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 w-full sm:w-auto font-semibold text-lg">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Book a Strategy Session</span>
                </button>
                <button
                  onClick={() => setActivePage("services")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActivePage("services");
                  }}
                  className="group bg-white/10 backdrop-blur-sm text-white border border-white/25 px-9 py-4 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto font-semibold text-lg">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Credibility micro-stats */}
              <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg mx-auto lg:mx-0">
                {credibilityStats.map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: visual panel */}
            <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="relative">
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=900&q=75"
                    alt="Team working on digital solutions"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                </div>
                {/* Floating stat card – bottom left */}
                <div className="absolute -bottom-5 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl px-5 py-4 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Projects Delivered</p>
                    <p className="text-xl font-extrabold text-gray-900 dark:text-white">100+</p>
                  </div>
                </div>
                {/* Floating stat card – top right */}
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
        </div>
      </div>

      {/* ── Consulting Services ── */}
      <div className="bg-gray-50 dark:bg-gray-900/50 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Consulting & Platform Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are technology strategists and systems architects — we help you
              design, build, and scale the right platform for your idea.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {consultingServices.map((service, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${service.border} overflow-hidden hover:-translate-y-1 animate-fade-in-up`}
                style={{ animationDelay: service.delay }}>
                <div className="p-7">
                  <div className={`inline-block p-3 rounded-xl mb-5 ${service.iconBg}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((f, fi) => (
                      <li key={fi} className="flex items-start space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-7 pb-6">
                  <button
                    onClick={() => setActivePage("services")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setActivePage("services");
                    }}
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 flex items-center space-x-1 transition-colors duration-200">
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
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActivePage("services");
              }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span>View All Services & Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Innovation Lab ── */}
      <div className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
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
                We don't just consult — we build. These are our own innovation
                projects, proving we understand what it truly takes to launch and
                scale a digital product.
              </p>
            </div>
            <button
              onClick={() => setActivePage("products")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActivePage("products");
              }}
              className="shrink-0 inline-flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 self-start lg:self-auto">
              <span>All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {innovationProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                {/* Image banner */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center space-x-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.tagColor}`}>
                      {project.tag}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className={`p-2 rounded-xl ${project.iconBg} bg-white/90 dark:bg-gray-900/80`}>
                      {project.icon}
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  {project.page ? (
                    <button
                      onClick={() => setActivePage(project.page)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          setActivePage(project.page);
                      }}
                      className="inline-flex items-center space-x-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="inline-flex items-center space-x-1.5 text-sm font-medium text-gray-400 dark:text-gray-500">
                      <span>Coming Soon</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How We Work ── */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              How We Work
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              A structured consulting-to-delivery process that ensures your
              platform is designed correctly before a single line of code is
              written.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const c = stepColors[step.color];
              return (
                <div
                  key={index}
                  className="relative bg-white/5 border border-white/10 hover:bg-white/10 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-5xl font-black opacity-20 ${c.text}`}>
                      {step.number}
                    </span>
                    <div className={`p-3 rounded-xl ${c.bg} ${c.text}`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-white/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setActivePage("contact")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActivePage("contact");
              }}
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Calendar className="w-5 h-5" />
              <span>Start With a Discovery Call</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Expertise / Credibility ── */}
      <div className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
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
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
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
      </div>

      {/* ── Testimonials ── */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Trusted by startups and organisations across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-7 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed italic text-sm">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-sm text-white/60">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <div className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.4) 0%, transparent 60%), radial-gradient(circle at 75% 30%, rgba(59,130,246,0.35) 0%, transparent 55%)",
              }}
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setActivePage("contact");
                  }}
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-9 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Book a Consultation</span>
                </button>
                <button
                  onClick={() => setActivePage("services")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setActivePage("services");
                  }}
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 border-2 border-white/30 text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-lg">
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
