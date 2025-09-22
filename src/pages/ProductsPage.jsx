import React, { useEffect } from "react";
import {
  ExternalLink,
  Globe,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Users,
  Code,
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
    <div className="space-y-8 sm:space-y-12 py-4 sm:py-6 lg:py-8 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform -skew-y-6" />
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white animate-fade-in">
            Our Products
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our innovative digital products, designed to streamline your
            business operations and achieve digital excellence.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex flex-col gap-6 lg:gap-8 animate-fade-in-up max-w-4xl mx-auto">
        {/* SubletMatch Card */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg border border-blue-100 dark:border-blue-800/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-700 h-full flex flex-col relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6 min-w-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mr-3">
              SubletMatch
            </h3>
              <div className="flex space-x-0.5 flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow text-sm sm:text-base">
            Developed by{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Saan-hub Solutions
            </span>
              , SubletMatch is a comprehensive business management system for service providers to manage bookings, teams, and services efficiently.
          </p>
            
          <div className="flex flex-wrap gap-2 mb-6">
            {features.map((feature, index) => (
              <span
                key={index}
                  className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
                {feature.icon}
                <span className="ml-2">{feature.text}</span>
              </span>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Code className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Angular', 'Node.js', 'Supabase', 'Express', 'Tailwind CSS'].map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200 rounded-md border border-blue-200 dark:border-blue-700/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
            
            <button className="group w-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-all duration-300 py-3 px-4 rounded-xl border border-blue-200 dark:border-blue-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/30">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
          </div>
        </div>

        {/* Fare-Tracker Card */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg border border-green-100 dark:border-green-800/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group hover:-translate-y-2 hover:border-green-200 dark:hover:border-green-700 h-full flex flex-col relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6 min-w-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 dark:text-green-400 mr-3">
              Fare-Tracker
            </h3>
              <div className="flex space-x-0.5 flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow text-sm sm:text-base">
              An AI-powered transportation intelligence platform developed by{" "}
              <span className="text-green-600 dark:text-green-400 font-semibold">
                Saan-hub Solutions
              </span>
              . Features smart route planning, real-time fare tracking, AI predictions, and automated workflows for optimal transportation decisions.
            </p>
            
          <div className="flex flex-wrap gap-2 mb-6">
            {features.map((feature, index) => (
              <span
                key={index}
                  className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700/50">
                {feature.icon}
                <span className="ml-2">{feature.text}</span>
              </span>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Code className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['React', 'JavaScript', 'CSS3', 'HTML5', 'Netlify'].map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-green-100 dark:bg-green-800/50 text-green-800 dark:text-green-200 rounded-md border border-green-200 dark:border-green-700/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
            
            <a 
              href="https://faretracker.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-all duration-300 py-3 px-4 rounded-xl border border-green-200 dark:border-green-700/50 hover:bg-green-50 dark:hover:bg-green-900/30">
              Visit Website
              <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Cymru Unleashed Card */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg border border-red-100 dark:border-red-800/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group hover:-translate-y-2 hover:border-red-200 dark:hover:border-red-700 h-full flex flex-col relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent dark:from-red-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6 min-w-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600 dark:text-red-400 mr-3">
                Cymru Unleashed
              </h3>
              <div className="flex space-x-0.5 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow text-sm sm:text-base">
              A grassroots initiative celebrating Wales' historic participation in UEFA Women's Euro 2025. 
              Empowering young Welsh girls through sport, creativity, and innovation. 
              Built with{" "}
              <span className="text-red-600 dark:text-red-400 font-semibold">
                Saan-hub Solutions
              </span>
              , this platform showcases digital storytelling and cultural pride.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700/50">
                <Users className="w-4 h-4" />
                <span className="ml-2">Community Impact</span>
              </span>
              <span className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700/50">
                <Globe className="w-4 h-4" />
                <span className="ml-2">Cultural Pride</span>
              </span>
              <span className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700/50">
                <Zap className="w-4 h-4" />
                <span className="ml-2">Digital Innovation</span>
              </span>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Code className="w-4 h-4 text-red-600 dark:text-red-400 mr-2" />
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'TypeScript'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-red-100 dark:bg-red-800/50 text-red-800 dark:text-red-200 rounded-md border border-red-200 dark:border-red-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a 
              href="https://cymruunleashed.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold transition-all duration-300 py-3 px-4 rounded-xl border border-red-200 dark:border-red-700/50 hover:bg-red-50 dark:hover:bg-red-900/30">
              Visit Website
              <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Hailey's Hotel Card */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg border border-purple-100 dark:border-purple-800/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group hover:-translate-y-2 hover:border-purple-200 dark:hover:border-purple-700 h-full flex flex-col relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6 min-w-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-600 dark:text-purple-400 mr-3">
                Hailey's Hotel
              </h3>
              <div className="flex space-x-0.5 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow text-sm sm:text-base">
              A comprehensive hotel booking platform developed by{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                Saan-hub Solutions
              </span>
              . Features room reservations, amenities showcase, gallery, and contact management for exceptional hospitality experiences.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50">
                <Users className="w-4 h-4" />
                <span className="ml-2">Hotel Booking</span>
              </span>
              <span className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50">
                <Globe className="w-4 h-4" />
                <span className="ml-2">Room Management</span>
              </span>
              <span className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50">
                <Zap className="w-4 h-4" />
                <span className="ml-2">Online Reservations</span>
              </span>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Code className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'JavaScript', 'CSS3', 'HTML5', 'Netlify'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-800/50 text-purple-800 dark:text-purple-200 rounded-md border border-purple-200 dark:border-purple-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a 
              href="https://haileyhotel.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-all duration-300 py-3 px-4 rounded-xl border border-purple-200 dark:border-purple-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/30">
              Visit Website
              <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* TrackGoal Card */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg border border-orange-100 dark:border-orange-800/30 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group hover:-translate-y-2 hover:border-orange-200 dark:hover:border-orange-700 h-full flex flex-col relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent dark:from-orange-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6 min-w-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600 dark:text-orange-400 mr-3">
                TrackGoal
              </h3>
              <div className="flex space-x-0.5 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow text-sm sm:text-base">
              A powerful goal tracking and productivity platform developed by{" "}
              <span className="text-orange-600 dark:text-orange-400 font-semibold">
                Saan-hub Solutions
              </span>
              . Features goal setting, progress tracking, milestone management, and analytics to help individuals and teams achieve their objectives efficiently.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700/50">
                <Shield className="w-4 h-4" />
                <span className="ml-2">Goal Tracking</span>
              </span>
              <span className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700/50">
                <Zap className="w-4 h-4" />
                <span className="ml-2">Progress Analytics</span>
              </span>
              <span className="inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700/50">
                <Users className="w-4 h-4" />
                <span className="ml-2">Team Collaboration</span>
              </span>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Code className="w-4 h-4 text-orange-600 dark:text-orange-400 mr-2" />
                <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Node.js', 'Supabase', 'Express', 'Tailwind CSS'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-orange-100 dark:bg-orange-800/50 text-orange-800 dark:text-orange-200 rounded-md border border-orange-200 dark:border-orange-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a 
              href="https://trackgoal.online/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold transition-all duration-300 py-3 px-4 rounded-xl border border-orange-200 dark:border-orange-700/50 hover:bg-orange-50 dark:hover:bg-orange-900/30">
              Visit Website
              <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
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
