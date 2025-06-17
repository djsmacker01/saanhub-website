import React, { useState } from "react";

const Sidebar = ({ activePage, setActivePage, isDarkMode, setIsDarkMode }) => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👥" },
    { id: "services", label: "Services", icon: "⚙️" },
    { id: "blog", label: "Blog", icon: "📝" },
    { id: "contact", label: "Contact", icon: "📞" },
    { id: "products", label: "Our Products", icon: "🚀" },
    { id: "privacy-policy", label: "Privacy Policy", icon: "🛡️" },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white min-h-screen fixed left-0 top-0 z-50 transform -translate-x-full animate-slide-in-left">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8 flex px-4">
          <img
            src="/log1.png"
            alt="Saan-hub Solutions Logo"
            className="h-24 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <button
                onClick={() => {
                  if (item.id === "products") {
                    setActivePage("products");
                    setShowProductsDropdown(!showProductsDropdown);
                  } else {
                    setActivePage(item.id);
                    setShowProductsDropdown(false);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (item.id === "products") {
                      setActivePage("products");
                      setShowProductsDropdown(!showProductsDropdown);
                    } else {
                      setActivePage(item.id);
                      setShowProductsDropdown(false);
                    }
                  }
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 hover:translate-x-1 shadow-md hover:shadow-lg ${
                  activePage === item.id ||
                  (item.id === "products" &&
                    (activePage === "subletmatch" ||
                      activePage === "fare-tracker"))
                    ? "bg-blue-700 text-white shadow-xl scale-105"
                    : "text-gray-100 hover:bg-slate-700 hover:text-white"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
                {item.id === "products" && (
                  <span className="text-xs ml-auto">
                    {showProductsDropdown ? "▲" : "▼"}
                  </span>
                )}
              </button>
              {item.id === "products" && showProductsDropdown && (
                <div
                  className="ml-8 space-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
                  <button
                    onClick={() => setActivePage("subletmatch")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActivePage("subletmatch");
                      }
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 transform hover:scale-105 hover:translate-x-1 shadow-md hover:shadow-lg ${
                      activePage === "subletmatch"
                        ? "bg-blue-600 text-white shadow-xl"
                        : "text-gray-100 hover:bg-slate-600 hover:text-white"
                    }`}>
                    SubletMatch
                  </button>
                  <button
                    onClick={() => setActivePage("fare-tracker")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActivePage("fare-tracker");
                      }
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 transform hover:scale-105 hover:translate-x-1 shadow-md hover:shadow-lg ${
                      activePage === "fare-tracker"
                        ? "bg-blue-600 text-white shadow-xl"
                        : "text-gray-100 hover:bg-slate-600 hover:text-white"
                    }`}>
                    Fare-Tracker
                  </button>
                </div>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <div className="absolute bottom-6 left-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-100">Light Mode</span>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsDarkMode(!isDarkMode);
                }
              }}
              className={`w-12 h-6 rounded-full ${
                isDarkMode ? "bg-blue-600 shadow-md" : "bg-gray-400 shadow-md"
              } relative transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}>
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                  isDarkMode ? "translate-x-6" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
