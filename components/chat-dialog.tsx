'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, X, Bot } from 'lucide-react'
import { Button } from './ui/button'

interface Message {
  role: 'user' | 'bot';
  content: string;
}

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatDialog({ isOpen, onClose }: ChatDialogProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hi! I am Hung\'s AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    await processMessage(userMessage);
  };

  const processMessage = async (content: string) => {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: content }),
      });
      const data = await res.json();
      const botMsg = data.response || 'Sorry, I encountered an error.';
      setMessages(prev => [...prev, { role: 'bot', content: botMsg }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: 'Connection failed.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[1000] w-[calc(100vw-3rem)] sm:w-[400px] overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-pink-500 to-rose-500 p-4 text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Hùng's Assistant</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] opacity-80 uppercase tracking-wider font-medium">Online</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="rounded-full p-2 hover:bg-white/20 transition-all">
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="h-[450px] overflow-y-auto p-4 space-y-4 bg-slate-50/50 scroll-smooth custom-scrollbar"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                msg.role === 'user'
                  ? 'bg-pink-500 text-white rounded-tr-none'
                  : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce [animation-duration:0.6s]"></div>
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.1s]"></div>
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-border p-4 bg-background">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-grow rounded-lg border border-border bg-card px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all"
          />
          <Button size="icon" type="submit" disabled={isLoading} className="bg-pink-500 hover:bg-pink-600 text-white transition-colors">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}

