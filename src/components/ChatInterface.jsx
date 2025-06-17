import React, { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Mic, MicOff } from "lucide-react";

const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

const ChatInterface = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Initialize speech recognition
    if ("webkitSpeechRecognition" in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) {
      return;
    }

    const userMessage = inputMessage.trim();
    const timestamp = new Date().toISOString();
    setInputMessage("");

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
        timestamp: timestamp,
        id: Date.now(),
      },
    ]);

    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(true);

    try {
      if (!WEBHOOK_URL) {
        throw new Error(
          "Webhook URL is not configured. Please check your environment variables."
        );
      }

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        mode: "cors",
        credentials: "omit",
        body: JSON.stringify({
          chatInput: userMessage,
          timestamp: timestamp,
          type: "user_message",
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Webhook Error Response:", {
          status: response.status,
          statusText: response.statusText,
          errorText: errorText,
        });

        let errorMessage =
          "Sorry, I'm having trouble connecting. Please try again later.";
        try {
          const errorJson = JSON.parse(errorText);
          if (errorJson.message) {
            if (errorJson.message === "Error in workflow") {
              errorMessage =
                "The chat service is currently experiencing issues. Please try again in a few moments.";
            } else {
              errorMessage = `Error: ${errorJson.message}`;
            }
          }
        } catch (e) {
          console.error("Error parsing error response:", e);
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("Webhook Response Data:", data);

      const botResponse =
        data.output ||
        data.response ||
        data.message ||
        data.text ||
        data.content;

      if (!botResponse) {
        console.error("Invalid response format:", data);
        throw new Error(
          "The chat service returned an invalid response. Please try again."
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: botResponse,
          timestamp: new Date().toISOString(),
          id: Date.now(),
        },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error.message ||
            "Sorry, I'm having trouble connecting. Please try again later.",
          timestamp: new Date().toISOString(),
          id: Date.now(),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col z-50 transform transition-all duration-300 ease-in-out hover:shadow-2xl">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
        <h3 className="font-semibold">Chat with Saan-hub Solutions</h3>
        <button
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onClose();
            }
          }}
          className="text-white hover:text-gray-200 transition-colors duration-200">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            } animate-fade-in`}>
            <div className="flex flex-col max-w-[80%]">
              <div
                className={`rounded-lg p-3 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : message.isError
                    ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-bl-none"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none"
                } shadow-md transition-all duration-200 hover:shadow-lg`}>
                {message.content}
              </div>
              <span
                className={`text-xs text-gray-500 mt-1 ${
                  message.role === "user" ? "text-right" : "text-left"
                }`}>
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 shadow-md">
              <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSendMessage}
        className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
          />
          <button
            type="button"
            onClick={toggleListening}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleListening();
              }
            }}
            className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${
              isListening
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
            }`}
            title={isListening ? "Stop listening" : "Start voice input"}>
            {isListening ? (
              <MicOff className="w-5 h-5 animate-pulse" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </button>
          <button
            type="submit"
            disabled={isLoading || !inputMessage.trim()}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
