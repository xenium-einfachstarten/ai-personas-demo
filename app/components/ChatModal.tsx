'use client';

import { useState, useRef, useEffect, type FormEvent, type CSSProperties } from 'react';
import { Persona, Message } from '../types/persona';
import { getPersonaResponse } from '../data/personas';

interface ChatModalProps {
  persona: Persona;
  onClose: () => void;
}

export default function ChatModal({ persona, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hallo! Ich bin ${persona.name}. Wie kann ich dir helfen?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getPersonaResponse(persona.id, input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl h-[600px] glass rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2" style={{ borderColor: persona.color }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10" style={{ backgroundColor: `${persona.color}20` }}>
          <div className="flex items-center gap-3">
            <img
              src={persona.avatar}
              alt={persona.name}
              className="w-12 h-12 rounded-full border-2"
              style={{ borderColor: persona.color }}
            />
            <div>
              <h3 className="text-lg font-bold text-white">{persona.name}</h3>
              <p className="text-sm text-white/70">{persona.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-xenium-lime text-xenium-navy'
                    : 'glass-dark text-white border'
                }`}
                style={message.role === 'assistant' ? { borderColor: `${persona.color}40` } : {}}
              >
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-60 mt-1 block">
                  {message.timestamp.toLocaleTimeString('de-DE', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="glass-dark rounded-2xl px-4 py-3 border" style={{ borderColor: `${persona.color}40` }}>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-black/20">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nachricht eingeben..."
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
              style={{ '--tw-ring-color': persona.color } as CSSProperties}
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: persona.color,
                color: persona.color === '#d4ff00' ? '#1e3a5f' : '#ffffff',
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
