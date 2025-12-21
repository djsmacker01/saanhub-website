import React, { useState, useEffect } from "react";
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

const App = () => {
  const [activePage, setActivePage] = useState(() => {
    const savedPage = localStorage.getItem("activePage");
    return savedPage || "home";
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  useEffect(() => {
    localStorage.setItem("activePage", activePage);
  }, [activePage]);

  const handlePageChange = (newPage) => {
    setIsPageTransitioning(true);
    setTimeout(() => {
      setActivePage(newPage);
      setTimeout(() => {
        setIsPageTransitioning(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }, 200);
  };

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage setActivePage={handlePageChange} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage setActivePage={handlePageChange} />;
      case "blog":
        return <BlogPage />;
      case "contact":
        return <ContactPage />;
      case "products":
        return <ProductsPage setActivePage={handlePageChange} />;
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "subletmatch":
      case "fare-tracker":
        return <LoadingPage setActivePage={handlePageChange} />;
      default:
        return <HomePage setActivePage={handlePageChange} />;
    }
  };

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
            className={`max-w-7xl mx-auto ${
              isPageTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            } transition-all duration-300 ease-out`}>
            {renderPage()}
          </div>
        </main>

        <Footer setActivePage={handlePageChange} />
      </div>

      <ChatButton />
    </div>
  );
};

export default App;
