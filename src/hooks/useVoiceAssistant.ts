"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { VoiceMessage } from "@/types/voice";

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

interface UseVoiceAssistantReturn {
  messages: VoiceMessage[];
  isListening: boolean;
  isSpeaking: boolean;
  isLoading: boolean;
  error: string | null;
  startListening: () => void;
  stopListening: () => void;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

export function useVoiceAssistant(): UseVoiceAssistantReturn {
  const [messages, setMessages] = useState<VoiceMessage[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const messagesRef = useRef<VoiceMessage[]>([]);

  const speak = useCallback((text: string) => {
    if (!synthRef.current) return;

    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    utterance.rate = 0.95;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  }, []);

  const handleUserMessage = useCallback(async (content: string) => {
    const userMessage: VoiceMessage = { role: "user", content };
    messagesRef.current = [...messagesRef.current, userMessage];
    setMessages([...messagesRef.current]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/voice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messagesRef.current,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantContent = data.content || "I'm sorry, I didn't catch that.";

      const assistantMessage: VoiceMessage = {
        role: "assistant",
        content: assistantContent,
      };

      messagesRef.current = [...messagesRef.current, assistantMessage];
      setMessages([...messagesRef.current]);
      speak(assistantContent);
    } catch (err) {
      setError("Sorry, I'm having trouble connecting. Please try again.");
      speak("Sorry, I'm having trouble connecting. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [speak]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognitionAPI = (window as unknown as { SpeechRecognition?: new () => SpeechRecognition; webkitSpeechRecognition?: new () => SpeechRecognition }).SpeechRecognition || (window as unknown as { webkitSpeechRecognition?: new () => SpeechRecognition }).webkitSpeechRecognition;
    
    if (SpeechRecognitionAPI) {
      recognitionRef.current = new SpeechRecognitionAPI();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-GB";

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        handleUserMessage(transcript);
      };

      recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error("Speech recognition error:", event.error);
        setError(`Speech error: ${event.error}`);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    synthRef.current = window.speechSynthesis;

    return () => {
      recognitionRef.current?.abort();
      synthRef.current?.cancel();
    };
  }, [handleUserMessage]);

  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening) {
      synthRef.current?.cancel();
      setIsListening(true);
      setError(null);
      recognitionRef.current.start();
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    handleUserMessage(content);
  }, [handleUserMessage]);

  const clearMessages = useCallback(() => {
    messagesRef.current = [];
    setMessages([]);
    synthRef.current?.cancel();
  }, []);

  return {
    messages,
    isListening,
    isSpeaking,
    isLoading,
    error,
    startListening,
    stopListening,
    sendMessage,
    clearMessages,
  };
}
