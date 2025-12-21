import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = ({ activePage, setActivePage, isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "products", label: "Products", hasDropdown: true },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const productItems = [
    { id: "subletmatch", label: "SubletMatch", href: null },
    { id: "faretracker", label: "Fare-Tracker", href: "https://faretracker.netlify.app/" },
    { id: "cymru", label: "Cymru Unleashed", href: "https://cymruunleashed.com/" },
    { id: "hailey", label: "Hailey's Hotel", href: "https://haileyhotel.netlify.app/" },
    { id: "trackgoal", label: "TrackGoal", href: "https://trackgoal.online/" },
  ];

  const handleNavClick = (itemId) => {
    if (itemId === "products") {
      setShowProductsDropdown(!showProductsDropdown);
    } else {
      setActivePage(itemId);
      setIsMobileMenuOpen(false);
      setShowProductsDropdown(false);
    }
  };

  return (
    <nav className={`${isDarkMode ? "bg-gray-900" : "bg-white"} shadow-lg sticky top-0 z-50 border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"} transition-all duration-300 animate-fade-in-down`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => {
                setActivePage("home");
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-3 group bg-slate-700 px-4 py-2.5 rounded-lg hover:bg-slate-600 transition-all duration-200">
              <div className="relative flex items-center justify-center bg-white rounded p-1.5">
                <img
                  src="/saan-hub-logo.jpg"
                  alt="Saan-hub Solutions Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/log1.png";
                  }}
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg sm:text-xl font-bold leading-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  SAAN-HUB
                </span>
                <span className="text-xs font-semibold text-gray-300 leading-tight tracking-wide">
                  SOLUTIONS
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div 
                key={item.id} 
                className="relative"
                onMouseEnter={() => {
                  if (item.hasDropdown) {
                    setShowProductsDropdown(true);
                  }
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown) {
                    setShowProductsDropdown(false);
                  }
                }}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                    activePage === item.id
                      ? `${isDarkMode ? "bg-slate-700 text-white shadow-md scale-105" : "bg-slate-700 text-gray-100 shadow-md scale-105"}`
                      : `${isDarkMode ? "bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white hover:scale-105 hover:shadow-lg" : "bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white hover:scale-105 hover:shadow-lg"}`
                  } flex items-center space-x-1.5 transform`}>
                  <span className="relative inline-block">
                    {item.label}
                    {activePage === item.id && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                    )}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showProductsDropdown ? "rotate-180" : ""}`} />
                  )}
                </button>

                {/* Products Dropdown - positioned with padding to bridge gap */}
                {item.hasDropdown && (
                  <div 
                    className={`absolute top-full left-0 w-56 z-50 ${
                      showProductsDropdown 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    } transition-all duration-300`}
                    style={{ paddingTop: '8px' }}>
                    <div className="rounded-lg shadow-2xl bg-slate-700 border border-slate-600 py-2">
                      {productItems.map((product, index) => (
                        product.href ? (
                          <a
                            key={product.id}
                            href={product.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-gray-300 hover:bg-slate-600 hover:text-white transition-all duration-200 rounded mx-1 hover:translate-x-1 hover:shadow-md"
                            style={{ animationDelay: `${index * 0.05}s` }}>
                            {product.label}
                          </a>
                        ) : (
                          <button
                            key={product.id}
                            onClick={() => {
                              setActivePage(product.id);
                              setShowProductsDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2.5 text-gray-300 hover:bg-slate-600 hover:text-white transition-all duration-200 rounded mx-1 hover:translate-x-1 hover:shadow-md"
                            style={{ animationDelay: `${index * 0.05}s` }}>
                            {product.label}
                          </button>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`ml-4 p-2.5 rounded-lg bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white transition-colors`}
              aria-label="Toggle dark mode">
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-lg bg-slate-700 text-gray-300 hover:bg-slate-600 transition-colors"
              aria-label="Toggle dark mode">
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-lg bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white transition-colors`}
              aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden pb-4 border-t ${isDarkMode ? "border-slate-700" : "border-slate-700"}`}>
            <div className="pt-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-between ${
                      activePage === item.id
                        ? "bg-slate-600 text-white shadow-md"
                        : "bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white"
                    }`}>
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${showProductsDropdown ? "rotate-180" : ""}`} />
                    )}
                  </button>
                  {item.hasDropdown && showProductsDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {productItems.map((product) => (
                        product.href ? (
                          <a
                            key={product.id}
                            href={product.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 rounded-lg bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white transition-colors">
                            {product.label}
                          </a>
                        ) : (
                          <button
                            key={product.id}
                            onClick={() => {
                              setActivePage(product.id);
                              setShowProductsDropdown(false);
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 rounded-lg bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white transition-colors">
                            {product.label}
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

