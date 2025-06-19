import React, { useEffect } from "react";
import {
  Code,
  Globe,
  Brain,
  Cog,
  ShoppingCart,
  BarChart3,
  Server,
  Wrench,
  TestTube2,
  Bot,
  DraftingCompass,
} from "lucide-react";

const bounceKeyframes = `
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}`;

const ServicesPage = ({ setActivePage }) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = bounceKeyframes;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    document.title = "Services | Saan-hub Solutions";
  }, []);

  const additionalServices = [
    {
      icon: <Brain className="w-12 h-12 text-purple-500 mb-4" />,
      title: "AI Integration",
      description:
        "Leverage the power of artificial intelligence to automate tasks, gain insights, and enhance decision-making processes.",
    },
    {
      icon: <Cog className="w-12 h-12 text-blue-400 mb-4" />,
      title: "Process Automation",
      description:
        "Transform your business operations with smart automation that eliminates repetitive tasks, reduces errors, and boosts productivity.",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-orange-500 mb-4" />,
      title: "E-commerce",
      description:
        "Ready to sell online? We'll build you a secure, user-friendly online store that makes shopping a breeze. From product listings to checkout, we ensure your customers have a smooth buying experience.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-pink-500 mb-4" />,
      title: "SEO Services",
      description:
        "Tired of being invisible online? Let's get your business to the top of Google searches. We use proven strategies to help your customers find you when they're looking for services like yours.",
    },
    {
      title: "Web Hosting",
      description:
        "Don't let slow hosting hold you back. Our reliable hosting solutions keep your website fast, secure, and always online. We handle the technical stuff so you can focus on your business.",
    },
    {
      title: "Website Maintenance",
      description:
        "Think of us as your website's personal care team. We keep everything running smoothly with regular updates, security checks, and performance tuning. No technical headaches - we handle it all.",
    },
    {
      title: "Mechanical Testing",
      description:
        "Comprehensive mechanical testing services including stress analysis, fatigue testing, material characterization, and quality control. Our state-of-the-art testing facilities ensure your products meet the highest industry standards.",
    },
    {
      title: "Automation & Robotics",
      description:
        "Cutting-edge automation and robotics solutions for manufacturing and industrial processes. From robotic assembly lines to automated quality control systems, we help you increase efficiency and precision in your operations.",
    },
    {
      title: "CAD/CAM Services",
      description:
        "Professional CAD/CAM services for mechanical design and manufacturing. We provide 3D modeling, simulation, CNC programming, and rapid prototyping to bring your mechanical designs to life with precision and efficiency.",
    },
  ];

  return (
    <div className="space-y-8 px-4 py-8 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 animate-fade-in animate-scale-in">
          Our Services
        </h1>
        <p className="text-xl text-gray-900 dark:text-gray-200 max-w-4xl mx-auto animate-fade-in-up">
          At Saan-hub Solutions, we deliver comprehensive software development
          services and solutions that drive digital transformation. Based in
          Cardiff, our expert team combines technical excellence with industry
          expertise to create both custom solutions and innovative digital
          products. From initial development to ongoing maintenance, we provide
          end-to-end services that help businesses thrive in the digital age.
        </p>
      </div>

      <div className="mb-8 animate-fade-in-up">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Web Development Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-inner">
            <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:animate-bounce-subtle">
              <Code className="w-12 h-12 text-blue-500 group-hover:text-blue-600 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Full Stack Web Applications
            </h3>
            <p className="text-gray-900 dark:text-gray-200">
              End-to-end web solutions with dynamic features, database
              integration, and real-time functionality for complex business
              needs.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-inner">
            <div className="mb-4 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 group-hover:animate-bounce-subtle">
              <Globe className="w-12 h-12 text-green-500 group-hover:text-green-600 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Static Websites
            </h3>
            <p className="text-gray-900 dark:text-gray-200">
              Fast, secure, and cost-effective websites perfect for showcasing
              your business, portfolio, or landing pages.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8 animate-fade-in-up">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Additional Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-inner">
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:animate-bounce-subtle">
                {React.cloneElement(service.icon, {
                  className: `${service.icon.props.className} group-hover:text-opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]`,
                })}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-900 dark:text-gray-200 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => setActivePage("contact")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setActivePage("contact");
            }
          }}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:transform hover:scale-105">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
