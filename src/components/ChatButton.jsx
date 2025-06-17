import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatInterface from "./ChatInterface";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleChatClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleChatClick();
            }
          }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50 flex items-center justify-center group">
          <MessageCircle className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
          <span className="absolute right-full mr-4 px-3 py-1 bg-gray-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with Saan-hub Solutions
          </span>
        </button>
      </div>
      {isChatOpen && <ChatInterface onClose={handleChatClose} />}
    </>
  );
};

export default ChatButton;
