import React, { useState, useEffect } from "react";
import {
  Code,
  Globe,
  Brain,
  Cog,
  ArrowRight,
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Droplets,
  Thermometer,
  AlertCircle,
} from "lucide-react";

const HomePage = ({ setActivePage }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationName, setLocationName] = useState("Loading...");
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [weatherError, setWeatherError] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null);

  // Update document title
  useEffect(() => {
    document.title = "Home | Saan-hub Solutions";
  }, []);

  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  // Debug environment variable
  useEffect(() => {
    const hasGeolocation = "geolocation" in navigator;
    const debugData = {
      apiKey: OPEN_WEATHER_API_KEY ? "Present" : "Missing",
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      geolocation: hasGeolocation ? "Supported" : "Not Supported",
    };
    console.log("Debug Info:", debugData);
    setDebugInfo(debugData);
  }, []);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      setLoadingWeather(true);
      setWeatherError(null);
      try {
        if (!OPEN_WEATHER_API_KEY) {
          console.error("Missing OpenWeather API Key");
          throw new Error(
            "Weather service is not configured. Please check your environment variables."
          );
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;
        console.log("Fetching weather from:", url);

        const response = await fetch(url);

        if (!response.ok) {
          const errorText = await response.text();
          console.error("OpenWeatherMap API Error Response:", {
            status: response.status,
            statusText: response.statusText,
            errorText: errorText,
          });
          throw new Error(
            `Weather data unavailable (${response.status}): ${errorText}`
          );
        }

        const data = await response.json();
        console.log("Weather data received:", data);

        if (!data || !data.main || !data.weather) {
          throw new Error("Invalid weather data received from API");
        }

        setWeatherData(data);
        setLocationName(`${data.name}, ${data.sys.country}`);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherError(
          error.message ||
            "Failed to fetch weather data. Please try again later."
        );
        setLocationName("N/A");
      } finally {
        setLoadingWeather(false);
      }
    };

    const getCurrentLocationWeather = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Got location:", position.coords);
            fetchWeather(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            console.error("Geolocation error:", error);
            setWeatherError(
              `Location access denied (${error.code}). Showing default weather.`
            );
            // Fallback to a default location (Sydney, Australia)
            fetchWeather(-33.8688, 151.2093);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      } else {
        console.log("Geolocation not supported");
        setWeatherError(
          "Location services not supported. Showing default weather."
        );
        // Fallback to a default location (Sydney, Australia)
        fetchWeather(-33.8688, 151.2093);
      }
    };

    getCurrentLocationWeather();
  }, []); // Empty dependency array means this effect runs once on mount

  const featuredServices = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Full Stack Web Applications",
      description:
        "End-to-end web solutions with dynamic features, database integration, and real-time functionality for complex business needs.",
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Static Websites",
      description:
        "Fast, secure, and cost-effective websites perfect for showcasing your business, portfolio, or landing pages.",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "AI Integration",
      description:
        "Leverage the power of artificial intelligence to automate tasks, gain insights, and enhance decision-making processes.",
    },
    {
      icon: <Cog className="w-8 h-8 text-blue-400" />,
      title: "Process Automation",
      description:
        "Transform your business operations with smart automation that eliminates repetitive tasks, reduces errors, and boosts productivity.",
    },
  ];

  const getWeatherIcon = (weatherCode) => {
    // Map weather codes to icons with different colors
    if (weatherCode >= 200 && weatherCode < 300) {
      return <CloudRain className="w-12 h-12 text-yellow-400" />; // Thunderstorm
    }
    if (weatherCode >= 300 && weatherCode < 400) {
      return <CloudRain className="w-12 h-12 text-blue-400" />; // Drizzle
    }
    if (weatherCode >= 500 && weatherCode < 600) {
      return <CloudRain className="w-12 h-12 text-blue-500" />; // Rain
    }
    if (weatherCode >= 600 && weatherCode < 700) {
      return <CloudRain className="w-12 h-12 text-blue-300" />; // Snow
    }
    if (weatherCode >= 700 && weatherCode < 800) {
      return <Cloud className="w-12 h-12 text-gray-400" />; // Atmosphere (fog, mist)
    }
    if (weatherCode === 800) {
      return <Sun className="w-12 h-12 text-yellow-400" />; // Clear
    }
    if (weatherCode > 800) {
      return <Cloud className="w-12 h-12 text-gray-300" />; // Clouds
    }
    return <Sun className="w-12 h-12 text-yellow-400" />; // Default
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-50 animate-bg-pan" />
        <div className="relative text-center">
          <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent animate-fade-in animate-scale-in">
            Website Development with SEO and AI Integration 
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-200 max-w-4xl mx-auto mb-12 leading-loose text-justify">
            Saan-hub Solutions is a Cardiff-based company delivering full-cycle
            software development services that drives digital transformation. Our
            team combines deep technical skills with industry knowledge to build
            smart and scalable solutions.
          </p>
          <button
            onClick={() => setActivePage("services")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActivePage("services");
              }
            }}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center mx-auto space-x-2">
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Featured Services */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16 animate-fade-in-up">
        {featuredServices.map((service, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100 dark:border-gray-700 hover:shadow-inner">
            <div className="mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 animate-bounce-subtle">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Weather Widget */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl shadow-xl mx-4 relative overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 bg-pattern-light opacity-10" />
        <div className="relative">
          {loadingWeather ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
              <p className="text-lg">Loading weather...</p>
            </div>
          ) : weatherError ? (
            <div className="text-center p-4 bg-red-500/20 rounded-lg">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <AlertCircle className="w-6 h-6 text-red-200" />
                <p className="text-red-200 text-lg">{weatherError}</p>
              </div>
              {debugInfo && (
                <div className="text-xs text-red-200/80 mt-2">
                  <p>Debug Info: API Key - {debugInfo.apiKey}</p>
                  <p>Geolocation - {debugInfo.geolocation}</p>
                </div>
              )}
            </div>
          ) : weatherData ? (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div>
                  <h3 className="text-3xl font-semibold mb-2">
                    {locationName}
                  </h3>
                  <p className="text-sm opacity-90">
                    {new Date(weatherData.dt * 1000).toLocaleDateString(
                      undefined,
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}{" "}
                    •{" "}
                    {new Date(weatherData.dt * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <div className="text-center sm:text-right mt-4 sm:mt-0">
                  <div className="flex items-center justify-center sm:justify-end space-x-2">
                    {getWeatherIcon(weatherData.weather[0].id)}
                    <div>
                      <div className="text-6xl font-bold">
                        {Math.round(weatherData.main.temp)}°C
                      </div>
                      <p className="text-lg mt-1 capitalize">
                        {weatherData.weather[0].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <Wind className="w-5 h-5 text-blue-200" />
                  <div>
                    <p className="text-sm opacity-80">Wind</p>
                    <p className="font-semibold">
                      {weatherData.wind.speed} km/h
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <Droplets className="w-5 h-5 text-blue-200" />
                  <div>
                    <p className="text-sm opacity-80">Humidity</p>
                    <p className="font-semibold">
                      {weatherData.main.humidity}%
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <Thermometer className="w-5 h-5 text-blue-200" />
                  <div>
                    <p className="text-sm opacity-80">Feels Like</p>
                    <p className="font-semibold">
                      {Math.round(weatherData.main.feels_like)}°C
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <Cloud className="w-5 h-5 text-blue-200" />
                  <div>
                    <p className="text-sm opacity-80">Pressure</p>
                    <p className="font-semibold">
                      {weatherData.main.pressure} hPa
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <div>
                    <p className="text-sm opacity-80">Min Temp</p>
                    <p className="font-semibold">
                      {Math.round(weatherData.main.temp_min)}°C
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <div>
                    <p className="text-sm opacity-80">Max Temp</p>
                    <p className="font-semibold">
                      {Math.round(weatherData.main.temp_max)}°C
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <div>
                    <p className="text-sm opacity-80">Visibility</p>
                    <p className="font-semibold">
                      {(weatherData.visibility / 1000).toFixed(1)} km
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-center opacity-80 bg-white/5 p-3 rounded-lg">
                <p>
                  UV Index: N/A (OpenWeatherMap free tier does not provide UV
                  index directly)
                </p>
              </div>
            </div>
          ) : (
            <p className="text-center text-lg">Weather data not available.</p>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-12 rounded-2xl shadow-xl mx-4 text-center relative overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 bg-pattern-dark opacity-10" />
        <div className="relative">
          <h2 className="text-4xl font-bold mb-6">
            Need a solution? We are happy to help.
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Let's discuss how we can transform your business with our innovative
            digital solutions.
          </p>
          <button
            onClick={() => setActivePage("contact")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setActivePage("contact");
              }
            }}
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
