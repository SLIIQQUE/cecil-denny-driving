"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, X, Loader2, MessageCircle, Sparkles } from "lucide-react";

export function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const {
    messages,
    isListening,
    isSpeaking,
    isLoading,
    error,
    startListening,
    stopListening,
    sendMessage,
    clearMessages,
  } = useVoiceAssistant();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Open AI voice assistant"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-red-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-2xl shadow-red-500/30 flex items-center justify-center cursor-pointer hover:from-red-400 hover:to-red-500 transition-all">
          <Sparkles className="w-7 h-7" />
        </div>
        {/* Label */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            AI Assistant
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #141414 0%, #0D0D0D 100%)" }}
          >
            {/* Header */}
            <div className="relative p-4 flex items-center justify-between" style={{ background: "linear-gradient(135deg, #1a0505 0%, #141414 100%)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-xs text-white/50">Powered by AI</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Close assistant"
              >
                <X className="w-5 h-5 text-white/60" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[380px] overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && !error && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/10 to-amber-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-red-400" />
                  </div>
                  <p className="text-white font-medium mb-2">Hi! I&apos;m your AI driving assistant.</p>
                  <p className="text-sm text-white/50 mb-4">
                    Ask me anything about driving lessons, pricing, or how to book.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["How do I book?", "What areas do you cover?", "How much do lessons cost?"].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => {
                          setInputValue(suggestion);
                          sendMessage(suggestion);
                          setInputValue("");
                        }}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-xl">
                  {error}
                </div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {!message.role || message.role === "assistant" ? (
                    <div className="flex items-start gap-2 max-w-[85%]">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-[#1a1a1a] border border-white/10 px-4 py-2.5 rounded-2xl rounded-tl-md text-sm text-white/90">
                        {message.content}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-red-500 to-red-600 px-4 py-2.5 rounded-2xl rounded-tr-md text-sm text-white max-w-[80%]">
                      {message.content}
                    </div>
                  )}
                </motion.div>
              ))}

              {(isLoading || isListening || isSpeaking) && (
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#1a1a1a] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-md">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      {isListening && (
                        <>
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                          >
                            <Mic className="w-4 h-4 text-red-400" />
                          </motion.div>
                          <span>Listening for your voice...</span>
                        </>
                      )}
                      {isSpeaking && (
                        <>
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                          >
                            <Sparkles className="w-4 h-4 text-amber-400" />
                          </motion.div>
                          <span>AI is responding...</span>
                        </>
                      )}
                      {isLoading && !isListening && !isSpeaking && (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white/50" />
                          <span>Thinking...</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-4 space-y-3" style={{ background: "#0D0D0D" }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about driving lessons..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30"
                />
                <Button size="icon" onClick={handleSend} disabled={!inputValue.trim()} className="bg-red-500 hover:bg-red-400 shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                {isListening ? (
                  <Button
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white"
                    onClick={stopListening}
                  >
                    <MicOff className="w-4 h-4 mr-2" />
                    Stop Listening
                  </Button>
                ) : (
                  <Button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white" onClick={startListening}>
                    <Mic className="w-4 h-4 mr-2" />
                    Start Voice Chat
                  </Button>
                )}
                <Button variant="outline" size="sm" onClick={clearMessages} className="border-white/10 text-white/60 hover:text-white hover:bg-white/5">
                  Clear
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
