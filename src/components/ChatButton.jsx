import React, { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import ChatInterface from "./ChatInterface";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  const [nudgeDismissed, setNudgeDismissed] = useState(false);

  // Show attention nudge after 5s (only once, and only if chat hasn't been opened)
  useEffect(() => {
    if (nudgeDismissed || isOpen) return;
    const t = setTimeout(() => setShowNudge(true), 5000);
    return () => clearTimeout(t);
  }, [nudgeDismissed, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowNudge(false);
    setNudgeDismissed(true);
  };

  const handleClose = () => setIsOpen(false);

  const toggle = () => {
    if (isOpen) handleClose();
    else handleOpen();
  };

  return (
    <>
      {/* Animated chat window */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        aria-live="polite">
        <div
          className={`absolute bottom-0 right-0 pointer-events-auto transition-all duration-500 origin-bottom-right ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-4 pointer-events-none"
          }`}
          style={{ transitionTimingFunction: isOpen ? "cubic-bezier(0.34,1.56,0.64,1)" : "ease-in" }}>
          {isOpen && <ChatInterface onClose={handleClose} />}
        </div>
      </div>

      {/* Floating button area */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Nudge tooltip bubble */}
        {showNudge && !isOpen && (
          <div
            className="relative flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-[12px] font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce-slow"
            style={{ animation: "floatUp 0.4s ease-out" }}>
            <Sparkles className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
            <span>Got a question? Ask me!</span>
            <button
              onClick={() => { setShowNudge(false); setNudgeDismissed(true); }}
              className="ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <X className="w-3 h-3" />
            </button>
            {/* Tail */}
            <div className="absolute -bottom-2 right-6 w-4 h-2 overflow-hidden">
              <div className="w-3 h-3 bg-white dark:bg-gray-800 border-r border-b border-gray-100 dark:border-gray-700 rotate-45 translate-y-[-50%] translate-x-1 shadow-sm" />
            </div>
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={toggle}
          aria-label={isOpen ? "Close chat" : "Open chat assistant"}
          className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          style={{
            background: isOpen
              ? "linear-gradient(135deg, #374151, #1f2937)"
              : "linear-gradient(135deg, #1d4ed8, #7c3aed)",
            boxShadow: isOpen
              ? "0 8px 32px rgba(55,65,81,0.4)"
              : "0 8px 32px rgba(59,130,246,0.45), 0 2px 8px rgba(124,58,237,0.3)",
          }}>

          {/* Icons — cross-fade */}
          <span className={`absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}>
            <X className="w-6 h-6 text-white" />
          </span>
          <span className={`absolute transition-all duration-300 ${isOpen ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}>
            <MessageCircle className="w-6 h-6 text-white" />
          </span>

          {/* Unread badge */}
          {!isOpen && showNudge && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[9px] font-bold shadow-md">
              1
            </span>
          )}

          {/* Pulse ring — only when closed */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping pointer-events-none" style={{ animationDuration: "2.5s" }} />
              <span className="absolute inset-0 rounded-full bg-purple-400 opacity-10 animate-ping pointer-events-none" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
            </>
          )}
        </button>
      </div>

      <style>{`
        @keyframes floatUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default ChatButton;
