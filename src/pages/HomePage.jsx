import React, { useEffect } from "react";
import {
  Code,
  Globe,
  Brain,
  Cog,
  ArrowRight,
  CheckCircle,
  Users,
  Rocket,
  Zap,
  Shield,
  TrendingUp,
  MessageSquare,
  Calendar,
  Lightbulb,
  Settings,
  Play,
} from "lucide-react";

const HomePage = ({ setActivePage }) => {
  // Update document title
  useEffect(() => {
    document.title = "Home | Saan-hub Solutions";
  }, []);

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "Faster Time-to-Market",
      description:
        "Get your product to market quickly with our streamlined development process and agile methodologies.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Improved Efficiency & Automation",
      description:
        "Automate repetitive tasks and streamline operations to reduce costs and increase productivity.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Scalable Solutions",
      description:
        "Build solutions that grow with your business, from startup to enterprise scale.",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Ongoing Support",
      description:
        "Continuous maintenance and support to keep your systems running smoothly and securely.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Discovery",
      description:
        "We understand your business challenges, goals, and requirements through in-depth consultation.",
    },
    {
      number: "02",
      icon: <Settings className="w-8 h-8" />,
      title: "Strategy",
      description:
        "We design a tailored technology roadmap and solution architecture aligned with your objectives.",
    },
    {
      number: "03",
      icon: <Code className="w-8 h-8" />,
      title: "Build",
      description:
        "Our expert team develops your solution using best practices, modern technologies, and agile methodologies.",
    },
    {
      number: "04",
      icon: <Play className="w-8 h-8" />,
      title: "Launch & Support",
      description:
        "We deploy your solution and provide ongoing maintenance, updates, and optimization support.",
    },
  ];

  const testimonials = [
    {
      name: "Client Testimonial",
      company: "Business Name",
      role: "CEO",
      content:
        "Saan-hub Solutions transformed our operations with their custom software solution. The team understood our needs and delivered beyond expectations.",
      rating: 5,
    },
    {
      name: "Client Testimonial",
      company: "Business Name",
      role: "CTO",
      content:
        "Their digital transformation consulting helped us modernize our tech stack and improve efficiency by 40%. Highly recommended!",
      rating: 5,
    },
    {
      name: "Client Testimonial",
      company: "Business Name",
      role: "Founder",
      content:
        "From MVP to full product launch, Saan-hub Solutions guided us every step of the way. Professional, reliable, and results-driven.",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-50 animate-bg-pan" />
        <div className="relative text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
            Driving Digital Transformation with Custom Software & Expert Tech Consulting
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            We help startups, SMEs, and organizations grow through innovative
            technology solutions. From custom web and mobile apps to digital
            transformation strategies—we turn your vision into scalable,
            high-performing software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={() => setActivePage("contact")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActivePage("contact");
                }
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 w-full sm:w-auto hover-lift">
              <span>Get a Quote</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setActivePage("contact")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActivePage("contact");
                }
              }}
              className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 w-full sm:w-auto">
              <Calendar className="w-5 h-5" />
              <span>Book a Free Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="group bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover-lift animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Code className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Custom Web & Mobile App Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              User-centric solutions built to scale. We create custom web and
              mobile applications that deliver exceptional user experiences and
              drive business growth.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-12 h-12 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Digital Transformation & Tech Consulting
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Strategy, automation, and process optimization. We help you
              modernize your technology stack and streamline operations for
              maximum efficiency.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover-lift animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              MVP & Startup Product Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Fast-track your product to market. We build minimum viable
              products and full-featured applications that help startups
              validate ideas and scale quickly.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover-lift animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Cog className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Technology Stack Modernisation & Cloud Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Upgrade legacy systems and migrate to the cloud. We modernize your
              infrastructure for better performance, security, and scalability.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => setActivePage("services")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActivePage("services");
              }
            }}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg flex items-center justify-center mx-auto space-x-2">
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our proven process ensures your project succeeds from concept to
              launch
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 opacity-20">
                    {step.number}
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600 dark:text-blue-400">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Benefits & Value
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What you can expect when partnering with Saan-hub Solutions
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
              <div className="mb-4">{benefit.icon}</div>
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

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Trusted by businesses across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-white/80">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-12 sm:p-16 rounded-3xl shadow-xl mx-4 sm:mx-6 lg:mx-8 text-center relative overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 bg-pattern-dark opacity-10" />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Let's discuss how we can help you achieve your digital transformation
            goals. Book a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActivePage("contact")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActivePage("contact");
                }
              }}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
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
    </div>
  );
};

export default HomePage;
