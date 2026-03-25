import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LoadingPage from "./pages/LoadingPage";
import AIReadinessPage from "./pages/AIReadinessPage";

// Map page IDs (used by child components) → URL paths
const PAGE_TO_PATH = {
  home: "/",
  about: "/about",
  services: "/services",
  "ai-readiness": "/ai-readiness",
  products: "/products",
  blog: "/blog",
  contact: "/contact",
  "privacy-policy": "/privacy-policy",
  subletmatch: "/subletmatch",
  "fare-tracker": "/fare-tracker",
};

// Derive an active-page ID from a pathname (for Navbar highlight)
export const pathToPage = (pathname) => {
  if (pathname === "/") return "home";
  const seg = pathname.replace(/^\//, "").split("/")[0];
  return seg || "home";
};

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handlePageChange = (page) => {
    const path = PAGE_TO_PATH[page] ?? `/${page}`;
    setTransitioning(true);
    setTimeout(() => {
      navigate(path);
      setTimeout(() => setTransitioning(false), 50);
    }, 150);
  };

  const activePage = pathToPage(location.pathname);

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex flex-col">
        <Header isDarkMode={isDarkMode} />
        <Navbar
          activePage={activePage}
          setActivePage={handlePageChange}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />

        <main
          className={`${
            isDarkMode ? "bg-gray-900" : "bg-white"
          } min-h-screen flex-1 transition-colors duration-300`}>
          <div
            className={`transition-all duration-200 ease-out ${
              transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}>
            {/* No max-width here — each page controls its own container */}
            <Routes>
              <Route path="/" element={<HomePage setActivePage={handlePageChange} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage setActivePage={handlePageChange} />} />
              <Route path="/ai-readiness" element={<AIReadinessPage setActivePage={handlePageChange} />} />
              <Route path="/products" element={<ProductsPage setActivePage={handlePageChange} />} />
              <Route path="/blog" element={<BlogPage setActivePage={handlePageChange} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy setActivePage={handlePageChange} />} />
              <Route path="/subletmatch" element={<LoadingPage setActivePage={handlePageChange} />} />
              <Route path="/fare-tracker" element={<LoadingPage setActivePage={handlePageChange} />} />
              {/* Catch-all → home */}
              <Route path="*" element={<HomePage setActivePage={handlePageChange} />} />
            </Routes>
          </div>
        </main>

        <Footer setActivePage={handlePageChange} />
      </div>

      <ChatButton />
    </div>
  );
};

export default App;
