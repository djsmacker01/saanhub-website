import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  X, Send, Mic, MicOff, Bot, Phone, ChevronRight,
  Search, RotateCcw, Copy, Check, Sparkles,
} from "lucide-react";
import { getBotResponse, CATEGORIES, CATEGORY_STARTERS } from "./chatEngine";

// ─── Render rich markdown-like text ──────────────────────────────────────────
function RichText({ text }) {
  return (
    <div className="chat-rich-text">
      {text.split("\n").map((line, i) => {
        // Blank line → spacer
        if (!line.trim()) return <div key={i} className="h-2" />;

        // Heading: "**Title**" alone on a line at start
        if (/^\*\*[^*]+\*\*$/.test(line.trim())) {
          const content = line.trim().replace(/\*\*/g, "");
          return (
            <div key={i} className="font-bold text-gray-900 dark:text-white mt-3 mb-1 first:mt-0 text-[13px] tracking-wide">
              {content}
            </div>
          );
        }

        // Table row separator
        if (/^\|[-|:\s]+\|$/.test(line.trim())) return null;

        // Table row
        if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
          const cells = line.trim().slice(1, -1).split("|").map(c => c.trim());
          const isHeader = cells.some(c => /^[-:]+$/.test(c));
          if (isHeader) return null;
          return (
            <div key={i} className="flex text-xs gap-2 py-1 border-b border-gray-100 dark:border-gray-700 last:border-0">
              {cells.map((cell, j) => (
                <span key={j} className={`flex-1 ${j === 0 ? "font-semibold text-gray-700 dark:text-gray-200" : "text-gray-600 dark:text-gray-300"}`}>
                  <InlineText text={cell} />
                </span>
              ))}
            </div>
          );
        }

        // Bullet point
        if (/^[•·\-\*]\s/.test(line.trim())) {
          return (
            <div key={i} className="flex items-start gap-2 text-[13px] leading-relaxed py-0.5">
              <span className="text-blue-500 mt-1.5 flex-shrink-0 text-[8px]">●</span>
              <span className="text-gray-700 dark:text-gray-200 flex-1">
                <InlineText text={line.trim().replace(/^[•·\-\*]\s/, "")} />
              </span>
            </div>
          );
        }

        // Numbered list
        if (/^\d+\.\s/.test(line.trim())) {
          const [num, ...rest] = line.trim().split(/\.\s/);
          return (
            <div key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed py-0.5">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">{num}</span>
              <span className="text-gray-700 dark:text-gray-200 flex-1">
                <InlineText text={rest.join(". ")} />
              </span>
            </div>
          );
        }

        // ⭐ Review line
        if (line.trim().startsWith("⭐")) {
          return (
            <div key={i} className="text-amber-500 text-xs font-semibold tracking-wide py-1">
              {line.trim()}
            </div>
          );
        }

        // Italic quote *"..."*
        if (/^\*".*"\*$/.test(line.trim())) {
          return (
            <div key={i} className="italic text-gray-600 dark:text-gray-300 text-[13px] border-l-2 border-blue-300 pl-3 my-1">
              {line.trim().replace(/^\*"?|"?\*$/g, "")}
            </div>
          );
        }

        // Normal line
        return (
          <div key={i} className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-200">
            <InlineText text={line} />
          </div>
        );
      })}
    </div>
  );
}

function InlineText({ text }) {
  // Handles **bold**, `code`, and em-dashes
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="font-semibold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return <code key={i} className="bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 text-[11px] px-1.5 py-0.5 rounded font-mono">{part.slice(1, -1)}</code>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

// ─── Copy button ─────────────────────────────────────────────────────────────
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(text.replace(/\*\*/g, "").replace(/`/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
      title="Copy message">
      {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
    </button>
  );
}

// ─── Message bubble ───────────────────────────────────────────────────────────
function MessageBubble({ msg }) {
  const isUser = msg.role === "user";
  const fmt = (date) => new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  if (isUser) {
    return (
      <div className="flex justify-end mb-4">
        <div className="flex flex-col items-end max-w-[80%]">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white px-4 py-2.5 rounded-2xl rounded-br-sm text-[13px] leading-relaxed shadow-md">
            {msg.text}
          </div>
          <span className="text-[10px] text-gray-400 mt-1 px-1">{fmt(msg.timestamp)}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-4 group">
      <div className="flex gap-2.5 max-w-[90%]">
        {/* Bot avatar */}
        <div className="flex-shrink-0 mt-1">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm">
            <Bot className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm">
            <RichText text={msg.text} />
            <div className="absolute top-2 right-2">
              <CopyButton text={msg.text} />
            </div>
          </div>
          <span className="text-[10px] text-gray-400 mt-1 px-1">{fmt(msg.timestamp)}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Typing indicator ─────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex gap-2.5">
        <div className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm">
          <Bot className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm px-4 py-3.5 rounded-2xl rounded-bl-sm">
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.18}s`, animationDuration: "0.9s" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Category tabs ─────────────────────────────────────────────────────────────
function CategoryTabs({ active, onChange }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="flex gap-1.5 overflow-x-auto px-4 py-2.5 border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 scrollbar-hide flex-shrink-0"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
            active === cat.id
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/30"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}>
          <span>{cat.icon}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Quick starters grid ──────────────────────────────────────────────────────
function StarterGrid({ category, onSelect }) {
  const starters = CATEGORY_STARTERS[category] || [
    "What services do you offer?",
    "How much does it cost?",
    "Tell me about your products",
    "How do I contact you?",
  ];
  return (
    <div className="grid grid-cols-2 gap-2 p-4 pt-2">
      {starters.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl p-3 text-[12px] text-gray-700 dark:text-gray-200 transition-all duration-200 group shadow-sm hover:shadow-md">
          <div className="font-medium leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
            {q}
          </div>
          <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-blue-500 mt-1 transition-colors" />
        </button>
      ))}
    </div>
  );
}

// ─── Suggestion chips ─────────────────────────────────────────────────────────
function SuggestionChips({ suggestions, onSelect }) {
  if (!suggestions || suggestions.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-2 mb-1 pl-9">
      {suggestions.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className="flex items-center gap-1 text-[11px] font-semibold bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200">
          <Sparkles className="w-2.5 h-2.5" />
          {s}
        </button>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const ChatInterface = ({ onClose }) => {
  const WELCOME_ID = "welcome";
  const [messages, setMessages] = useState([
    {
      id: WELCOME_ID,
      role: "bot",
      text: `👋 **Welcome to Saan-hub Solutions!**

I'm your AI assistant — think of me as an encyclopedia for everything about Saan-hub.

I can instantly answer questions about our **services**, **pricing**, **products**, **process**, **technology**, and **team**. Use the category tabs above to explore, or just ask me anything below.

For anything I can't answer, I'll connect you directly with our team on **07459 253102**.`,
      timestamp: new Date(),
      suggestions: ["What services do you offer?", "How much does it cost?", "What products have you built?"],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showStarters, setShowStarters] = useState(true);
  const [searchMode, setSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!searchMode) inputRef.current?.focus();
  }, [searchMode]);

  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      recognitionRef.current = new SR();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-GB";
      recognitionRef.current.onresult = (e) => {
        setInput(e.results[0][0].transcript);
        setIsListening(false);
      };
      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => setIsListening(false);
    }
    return () => recognitionRef.current?.stop();
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) { recognitionRef.current.stop(); }
    else { recognitionRef.current.start(); setIsListening(true); }
  };

  const sendMessage = useCallback(async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setInput("");
    setShowStarters(false);
    setSearchMode(false);
    setSearchQuery("");

    const userMsg = { id: Date.now(), role: "user", text: trimmed, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    const delay = Math.min(700 + trimmed.length * 10, 2000);
    await new Promise((r) => setTimeout(r, delay));
    setIsTyping(false);

    const { response, suggestions } = getBotResponse(trimmed);
    const botMsg = {
      id: Date.now() + 1,
      role: "bot",
      text: response,
      timestamp: new Date(),
      suggestions,
    };
    setMessages((prev) => [...prev, botMsg]);
  }, [isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId !== "all" && showStarters) {
      // scrolls to bottom of starter grid
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    }
    if (catId === "all") setShowStarters(true);
    else setShowStarters(true);
  };

  const handleReset = () => {
    setMessages([{
      id: "welcome-new",
      role: "bot",
      text: `Chat reset! 👋 How can I help you today? Ask me anything about Saan-hub Solutions — or use the category tabs to explore.`,
      timestamp: new Date(),
      suggestions: ["What services do you offer?", "How much does it cost?", "Contact details"],
    }]);
    setShowStarters(true);
    setActiveCategory("all");
    setInput("");
  };

  const hasSpeech = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  const lastBotMsg = [...messages].reverse().find(m => m.role === "bot");

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[440px] max-w-[440px] h-[640px] flex flex-col z-50 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950"
      style={{ boxShadow: "0 25px 80px -10px rgba(59,130,246,0.25), 0 0 0 1px rgba(255,255,255,0.05)" }}>

      {/* ── HEADER ── */}
      <div className="flex-shrink-0 bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 px-4 py-3.5 text-white"
        style={{ backgroundImage: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 40%, #7c3aed 100%)" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Bot avatar */}
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-sm leading-tight">Saan-hub Assistant</p>
                <div className="bg-white/20 text-white/90 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">AI</div>
              </div>
              <p className="text-[11px] text-blue-100 mt-0.5">Encyclopedic knowledge · Instant replies</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Search toggle */}
            <button
              onClick={() => { setSearchMode(s => !s); setSearchQuery(""); }}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors"
              title="Search topics">
              <Search className="w-4 h-4" />
            </button>
            {/* Reset */}
            <button
              onClick={handleReset}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors"
              title="Reset chat">
              <RotateCcw className="w-4 h-4" />
            </button>
            {/* Call button */}
            <a
              href="tel:07459253102"
              className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all"
              title="Call us">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Call</span>
            </a>
            {/* Close */}
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchMode && (
          <div className="mt-3 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/60" />
            <input
              autoFocus
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && searchQuery.trim()) { sendMessage(searchQuery); setSearchMode(false); setSearchQuery(""); } }}
              placeholder="Search topics (e.g. 'pricing', 'AI', 'SubletMatch')…"
              className="w-full bg-white/15 border border-white/25 text-white placeholder-white/50 rounded-lg pl-9 pr-4 py-2 text-[12px] outline-none focus:bg-white/20 focus:border-white/40 transition-all"
            />
          </div>
        )}
      </div>

      {/* ── CATEGORY TABS ── */}
      <CategoryTabs active={activeCategory} onChange={handleCategoryChange} />

      {/* ── MESSAGES ── */}
      <div className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50 dark:bg-gray-950">

        {/* Messages */}
        {messages.map((msg) => (
          <div key={msg.id}>
            <MessageBubble msg={msg} />
            {/* Suggestion chips directly after the last bot message */}
            {msg.role === "bot" && msg === lastBotMsg && msg.suggestions?.length > 0 && !isTyping && (
              <SuggestionChips suggestions={msg.suggestions} onSelect={sendMessage} />
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && <TypingIndicator />}

        {/* Category starter grid */}
        {showStarters && !isTyping && messages.length <= 2 && (
          <StarterGrid
            category={activeCategory === "all" ? "services" : activeCategory}
            onSelect={sendMessage}
          />
        )}

        <div ref={bottomRef} />
      </div>

      {/* ── CONTACT NUDGE STRIP ── */}
      <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 border-t border-blue-100 dark:border-blue-800/50 px-4 py-2 flex-shrink-0">
        <p className="text-[11px] text-blue-700 dark:text-blue-300 font-medium">
          Speak to our team directly
        </p>
        <a
          href="tel:07459253102"
          className="flex items-center gap-1.5 text-[11px] font-bold text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors bg-blue-100 dark:bg-blue-900/40 px-3 py-1.5 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/60">
          <Phone className="w-3 h-3" />
          <span>07459 253102</span>
        </a>
      </div>

      {/* ── INPUT ── */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-3 py-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex-shrink-0">
        {/* Voice input */}
        {hasSpeech && (
          <button
            type="button"
            onClick={toggleListening}
            className={`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-200 ${
              isListening
                ? "bg-red-500 text-white animate-pulse shadow-lg shadow-red-200"
                : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            title={isListening ? "Stop listening" : "Voice input"}>
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>
        )}
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); } }}
            placeholder="Ask me anything about Saan-hub…"
            className="w-full px-4 py-2.5 text-[13px] bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl border-0 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 text-white hover:from-blue-700 hover:to-purple-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-md shadow-blue-200 dark:shadow-blue-900/30">
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
