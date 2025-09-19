import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

const Footer = ({ setActivePage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white p-4 sm:p-6 lg:p-8 mt-12 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div>
            <p className="text-gray-400 mb-4">
              Making digital impact through innovative software solutions.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://facebook.com/saan-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
                aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/djsmacker01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nuruade/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors transform hover:scale-110"
                aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/saan-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110"
                aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/djsmacker01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors transform hover:scale-110"
                aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => setActivePage("subletmatch")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActivePage("subletmatch");
                    }
                  }}
                  className="hover:text-blue-400 transition-colors text-left w-full">
                  SubletMatch
                </button>
              </li>
              <li>
                <a
                  href="https://faretracker.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors text-left w-full block">
                  Fare-Tracker
                </a>
              </li>
              <li>
                <a
                  href="https://cymruunleashed.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors text-left w-full block">
                  Cymru Unleashed
                </a>
              </li>
              <li>
                <a
                  href="https://haileyhotel.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors text-left w-full block">
                  Hailey's Hotel
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => setActivePage("privacy-policy")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActivePage("privacy-policy");
                    }
                  }}
                  className="hover:text-blue-400 transition-colors text-left w-full">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage("contact")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActivePage("contact");
                    }
                  }}
                  className="hover:text-blue-400 transition-colors text-left w-full">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm animate-fade-in">
            © {currentYear} Saan-hub Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
