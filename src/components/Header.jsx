import React from "react";
import { Phone, Mail } from "lucide-react";

const Header = ({ isDarkMode }) => {
  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } shadow-sm p-4 flex justify-between items-center sticky top-0 z-40`}>
      <div className="flex items-center space-x-4">
        <a
          href="tel:+447459253102"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors flex items-center">
          📞 +447459253102
        </a>
        <a
          href="mailto:info@saan-hub.com.au"
          className="flex items-center space-x-2 bg-blue-50 dark:bg-gray-700 px-4 py-2 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors">
          <Mail className="w-4 h-4" />
          <span className="text-sm">info@saan-hub.com.au</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
