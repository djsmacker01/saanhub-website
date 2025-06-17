import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
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

  useEffect(() => {
    localStorage.setItem("activePage", activePage);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage setActivePage={setActivePage} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage setActivePage={setActivePage} />;
      case "blog":
        return <BlogPage />;
      case "contact":
        return <ContactPage />;
      case "products":
        return <ProductsPage setActivePage={setActivePage} />;
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "subletmatch":
      case "fare-tracker":
        return <LoadingPage setActivePage={setActivePage} />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />

        <div className="flex-1 ml-64">
          <Header isDarkMode={isDarkMode} />

          <main
            className={`${
              isDarkMode ? "bg-gray-900" : "bg-gray-50"
            } min-h-screen p-8`}>
            {renderPage()}
          </main>

          <Footer setActivePage={setActivePage} />
        </div>

        <ChatButton />
      </div>
    </div>
  );
};

export default App;
