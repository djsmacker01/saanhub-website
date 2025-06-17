import React from "react";
import { Home } from "lucide-react";

const LoadingPage = ({ setActivePage }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 md:px-8 lg:px-16">
      <div className="text-center space-y-8 animate-fade-in animate-scale-in">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto" />

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Please wait while we load the page for you...
        </h1>

        <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
          We're preparing something amazing for you. In the meantime, you can
          return to the main page.
        </p>

        <button
          onClick={() => setActivePage("home")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setActivePage("home");
            }
          }}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:transform hover:scale-105">
          <Home className="w-5 h-5 mr-2" />
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default LoadingPage;
