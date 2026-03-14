import React, { useEffect } from "react";
import {
  Target,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Users,
  Award,
  Code2,
  Lightbulb,
} from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Saan-hub Solutions";
  }, []);

  const teamMembers = [
    {
      name: "Success Adedeji",
      role: "Founder & Lead Developer",
      image: "/saan.jpg",
      bio: "Full-stack developer with expertise in React, Node.js, and AI integration. Passionate about creating innovative solutions that drive business growth.",
      skills: ["React", "Node.js", "AI/ML", "Architecture"],
      social: {
        linkedin: "https://www.linkedin.com/in/nuruade",
        github: "https://www.github.com/djsmacker01/",
        email: "mailto:adedeji.adewale2022@gmail.com",
      },
    },
    {
      name: "Soji",
      role: "IT Support Technician",
      image: "/team/soji.jpg",
      bio: "Experienced IT support professional specialising in system administration, network troubleshooting, and technical support. Dedicated to providing efficient solutions.",
      skills: ["Sys Admin", "Networking", "Cloud", "Support"],
      social: {
        linkedin: "https://www.linkedin.com/in/nuruade/",
        github: "https://www.github.com/djsmacker01",
        email: "mailto:soji@saan-hub.com",
      },
    },
    {
      name: "Nurudeen",
      role: "Mechanical Engineer",
      image: "/saan-hub-logo.jpg",
      bio: "Skilled mechanical engineer with expertise in design, analysis, and manufacturing processes. Specialising in product development, CAD modelling, and systems optimisation.",
      skills: ["CAD Design", "Systems", "Product Dev", "Analysis"],
      social: {
        linkedin: "https://www.linkedin.com/in/nuruade/",
        github: "https://github.com/djsmacker01/",
        email: "mailto:adedeji.adewale2022@gmail.com",
      },
    },
  ];

  const sections = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Our Mission",
      color: "blue",
      borderColor: "border-blue-500",
      bgColor: "from-blue-50 to-blue-50/30 dark:from-blue-900/20 dark:to-transparent",
      description:
        "To empower businesses with technology solutions that drive growth and transformation. We partner with startups, SMEs, and organisations to deliver custom software, digital transformation strategies, and technology consulting that solve real business challenges.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: "Our Vision",
      color: "purple",
      borderColor: "border-purple-500",
      bgColor: "from-purple-50 to-purple-50/30 dark:from-purple-900/20 dark:to-transparent",
      description:
        "A future where every business, regardless of size, can leverage technology to compete and thrive in the digital economy. We aim to be recognised for delivering solutions that combine technical excellence with measurable business value.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Our Strengths",
      color: "emerald",
      borderColor: "border-emerald-500",
      bgColor: "from-emerald-50 to-emerald-50/30 dark:from-emerald-900/20 dark:to-transparent",
      description:
        "Our core strengths lie in translating complex business requirements into elegant technical solutions — delivering projects on time and within budget, with expertise spanning modern web technologies, cloud infrastructure, and agile development methodologies.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: "Innovation & Growth",
      color: "orange",
      borderColor: "border-orange-500",
      bgColor: "from-orange-50 to-orange-50/30 dark:from-orange-900/20 dark:to-transparent",
      description:
        "Innovation and continuous improvement drive everything we do. We stay at the forefront of technology trends, investing in modern tools and frameworks to deliver cutting-edge solutions that help businesses increase revenue, reduce costs, and achieve strategic goals.",
    },
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "5+", label: "Years of Experience", color: "text-blue-500" },
    { icon: <Users className="w-6 h-6" />, value: "10+", label: "Clients Served", color: "text-purple-500" },
    { icon: <Code2 className="w-6 h-6" />, value: "15+", label: "Projects Delivered", color: "text-emerald-500" },
    { icon: <Lightbulb className="w-6 h-6" />, value: "5+", label: "Live Products", color: "text-orange-500" },
  ];

  return (
    <div className="space-y-0">
      {/* ── Hero Section ── */}
      <div className="relative overflow-hidden min-h-[480px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=1920&q=70"
            alt="Team collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/92 via-blue-950/88 to-indigo-950/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/15 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-300 tracking-wide">
                  Cardiff-Based · Global Reach
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Saan-hub
                </span>{" "}
                Solutions
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                A Cardiff-based tech consultancy and software development partner
                helping businesses grow through digital transformation and custom
                technology solutions — combining technical expertise with genuine
                business acumen.
              </p>
            </div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/12 transition-colors duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-3 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Company Story ── */}
      <div className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Story text */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                  Our Story
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Technology partnership, not just development
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                Saan-hub Solutions is a technology consultancy and software
                development company that partners with businesses to solve complex
                challenges through innovative digital solutions. Based in Cardiff,
                United Kingdom, we work with startups, SMEs, and organisations
                across industries to drive digital transformation.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                Our team combines deep technical expertise with business
                understanding to deliver solutions that not only work flawlessly but
                also deliver measurable business value. We specialise in custom web
                and mobile development, digital transformation consulting, MVP
                development for startups, and technology stack modernisation.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                What sets us apart is our client-focused approach — we don&apos;t just
                build software, we become your technology partner, providing ongoing
                support, maintenance, and strategic guidance to ensure your solutions
                evolve with your business.
              </p>
            </div>
            {/* Side image */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=700&q=75"
                  alt="Team at work"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl px-5 py-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Cardiff, United Kingdom
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Serving clients globally since 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mission, Vision, Strengths, Innovation ── */}
      <div className="bg-gray-50 dark:bg-gray-900/50 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Our Values & Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${section.bgColor} border-l-4 ${section.borderColor} bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
                <div className="flex items-center space-x-4 mb-5">
                  <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  {section.description}
                </p>
                <div className="mt-5 flex items-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Team Section ── */}
      <div className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
              The People
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate individuals behind Saan-hub Solutions — builders,
              strategists, and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                {/* Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=500&background=4f46e5&color=fff&bold=true`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Social links on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={member.social?.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4 text-blue-600 group-hover:text-white" />
                    </a>
                    <a
                      href={member.social?.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social?.email || "#"}
                      className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-colors">
                      <Mail className="w-4 h-4 text-red-500 group-hover:text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                    {member.bio}
                  </p>
                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Company Leadership ── */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
                Leadership
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Company Leadership
              </h2>
              <p className="text-white/75 leading-relaxed text-lg mb-8">
                Under experienced leadership, Saan-hub Solutions has built a
                reputation as a trusted technology partner for businesses seeking
                digital transformation. Our team brings together expertise in
                software development, business strategy, and technology consulting
                to deliver solutions that drive measurable business outcomes.
              </p>
              <p className="text-white/75 leading-relaxed">
                We are committed to maintaining the highest standards of quality,
                service delivery, and client satisfaction, while continuously
                evolving our capabilities to meet the changing needs of the digital
                economy.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&w=800&q=75"
                alt="Leadership and strategy"
                className="w-full h-[350px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
