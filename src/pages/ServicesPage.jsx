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
} from "lucide-react";

const ServicesPage = ({ setActivePage }) => {
  useEffect(() => {
    document.title = "Services | Saan-hub Solutions";
  }, []);

  const coreServices = [
    {
      icon: <Code className="w-16 h-16 text-blue-500" />,
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
    },
    {
      icon: <Brain className="w-16 h-16 text-purple-500" />,
      title: "Digital Transformation & Tech Consulting",
      subtitle: "Strategy, automation, and process optimization",
      description:
        "Transform your business operations with our expert technology consulting services. We analyze your current processes, identify opportunities for improvement, and implement automation solutions that reduce costs, increase efficiency, and drive growth.",
      features: [
        "Technology strategy and roadmap",
        "Process automation and optimization",
        "Legacy system assessment",
        "Digital workflow design",
        "Change management support",
        "Performance metrics and KPIs",
      ],
      color: "purple",
    },
    {
      icon: <Rocket className="w-16 h-16 text-green-500" />,
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
    },
    {
      icon: <Cog className="w-16 h-16 text-orange-500" />,
      title: "Technology Stack Modernisation & Cloud Integration",
      subtitle: "Upgrade legacy systems and migrate to the cloud",
      description:
        "Modernize your technology infrastructure with our cloud migration and stack modernization services. We help you move from outdated systems to modern, cloud-based solutions that improve performance, security, and scalability while reducing operational costs.",
      features: [
        "Cloud migration strategy and execution",
        "Legacy system modernization",
        "Infrastructure optimization",
        "Security and compliance",
        "DevOps and CI/CD implementation",
        "Ongoing maintenance and support",
      ],
      color: "orange",
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

  return (
    <div className="space-y-16 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Saan-hub Solutions delivers comprehensive technology services that
          drive digital transformation and business growth. Based in Cardiff,
          UK, we partner with startups, SMEs, and organizations to build
          custom software solutions, modernize technology stacks, and implement
          digital strategies that deliver measurable results.
        </p>
      </div>

      {/* Core Services */}
      <div className="space-y-16">
        {coreServices.map((service, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } flex flex-col lg:flex`}>
            <div className="lg:w-1/3 p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block mb-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {service.subtitle}
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 p-8 lg:p-12">
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3">
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
