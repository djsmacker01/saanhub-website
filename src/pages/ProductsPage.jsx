import React, { useEffect } from "react";
import {
  ExternalLink,
  Globe,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Users,
} from "lucide-react";

const ProductsPage = ({ activePage, setActivePage }) => {
  // Update document title
  useEffect(() => {
    document.title = "Products | Saan-hub Solutions";
  }, []);

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: "Enterprise Security" },
    { icon: <Zap className="w-6 h-6" />, text: "Lightning Fast" },
    { icon: <Users className="w-6 h-6" />, text: "User-Friendly" },
  ];

  // SubletMatch Content
  const renderSubletMatch = () => (
    <div className="space-y-8 py-8 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        SubletMatch
      </h1>
      <p className="text-xl text-gray-800 dark:text-gray-200 text-justify">
        SubletMatch is a comprehensive business management system designed for
        service providers. It streamlines bookings, team management, and service
        delivery, ensuring efficient operations.
      </p>
      {/* Add more specific content, features, screenshots etc. for SubletMatch here */}
      <button
        onClick={() => setActivePage("products")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setActivePage("products");
          }
        }}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
        <ArrowRight className="w-5 h-5 transform rotate-180" />
        Back to Products Overview
      </button>
    </div>
  );

  // Fare-Tracker Content
  const renderFareTracker = () => (
    <div className="space-y-8 py-8 animate-fade-in-up">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Fare-Tracker
      </h1>
      <p className="text-xl text-gray-800 dark:text-gray-200 text-justify">
        Fare-Tracker is a revolutionary transportation solution by Saan-hub
        Solutions. It makes fare tracking effortless and efficient, transforming
        urban mobility.
      </p>
      {/* Add more specific content, features, screenshots etc. for Fare-Tracker here */}
      <button
        onClick={() => setActivePage("products")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setActivePage("products");
          }
        }}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
        <ArrowRight className="w-5 h-5 transform rotate-180" />
        Back to Products Overview
      </button>
    </div>
  );

  if (activePage === "subletmatch") {
    return renderSubletMatch();
  }

  if (activePage === "fare-tracker") {
    return renderFareTracker();
  }

  return (
    <div className="space-y-12 py-8 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="text-center mb-16 relative px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform -skew-y-6" />
        <div className="relative">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in">
            Our Products
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore our innovative digital products, designed to streamline your
            business operations and achieve digital excellence.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 animate-fade-in-up">
        {/* SubletMatch Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group hover:-translate-y-1 hover:shadow-inner">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-blue-600">
              SubletMatch
            </h3>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
          <p className="text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
            Developed by{" "}
            <span className="text-blue-600 font-semibold">
              Saan-hub Solutions
            </span>
            , SubletMatch is a testament to our commitment to creating
            innovative and impactful digital products. We have a robust business
            management system for service providers to manage bookings, teams,
            and services efficiently.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {feature.icon}
                <span className="ml-2">{feature.text}</span>
              </span>
            ))}
          </div>
          <button className="group flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 transform group-hover:translate-x-1">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Fare-Tracker Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group hover:-translate-y-1 hover:shadow-inner">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-green-600">
              Fare-Tracker
            </h3>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
          <p className="text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
            Fare-Tracker is a revolutionary transportation solution developed by
            Saan-hub Solutions. We believe in making fare tracking effortless
            and efficient for everyone. Learn more about our dedication to
            transforming urban mobility and enhancing your digital presence.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                {feature.icon}
                <span className="ml-2">{feature.text}</span>
              </span>
            ))}
          </div>
          <button className="group flex items-center text-green-600 hover:text-green-800 font-medium transition-all duration-300 transform group-hover:translate-x-1">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Global Reach Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-3xl relative overflow-hidden px-4 md:px-8 lg:px-16 animate-fade-in-up">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">Global Reach</h3>
            <p className="text-lg leading-relaxed">
              While proudly headquartered in Cardiff, our vision extends
              globally. We're committed to delivering world-class digital
              solutions that transcend borders, helping businesses worldwide
              achieve their digital transformation goals through innovative
              technology and exceptional service.
            </p>
          </div>
          <div className="relative">
            <div className="w-40 h-40 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-pulse">
              <Globe className="w-20 h-20" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-ping" />
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-12 rounded-3xl px-4 md:px-8 lg:px-16 animate-fade-in-up">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xl text-gray-900 dark:text-gray-200 leading-relaxed">
            <span className="text-blue-600 font-semibold">
              Saan-hub Solutions
            </span>
            , legally registered as Saan-hub Solutions, is a software
            development company based in Cardiff, United Kingdom. We specialize
            in delivering high-quality software solutions and comprehensive
            maintenance services to businesses of all sizes.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                number: "100+",
                label: "Projects Completed",
              },
              {
                number: "50+",
                label: "Happy Clients",
              },
              {
                number: "24/7",
                label: "Support",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="text-2xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-12 rounded-3xl px-4 md:px-8 lg:px-16 animate-fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg leading-relaxed mb-8">
              From startups to established enterprises, our software solutions
              are powering businesses across the United Kingdom. Join the
              growing number of organizations achieving digital excellence with
              Saan-hub Solutions.
            </p>
            <button
              onClick={() => setActivePage("contact")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActivePage("contact");
                }
              }}
              className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Custom Development",
              "AI Integration",
              "Cloud Solutions",
              "24/7 Support",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <p className="text-center font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
