import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = ({ isDarkMode }) => {
  return (
    <header className={`${isDarkMode ? "bg-gray-800" : "bg-gray-50"} border-b ${isDarkMode ? "border-gray-700" : "border-gray-200"} py-2 hidden md:block`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center space-x-6 text-sm">
          <a
            href="tel:+447459253102"
            className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}>
            <Phone className="w-4 h-4" />
            <span>+447459253102</span>
          </a>
          <a
            href="mailto:adedeji.adewale2022@gmail.com"
            className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}>
            <Mail className="w-4 h-4" />
            <span>adedeji.adewale2022@gmail.com</span>
          </a>
          <div className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            <MapPin className="w-4 h-4" />
            <span>Cardiff, United Kingdom</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
