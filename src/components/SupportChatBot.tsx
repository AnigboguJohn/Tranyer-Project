import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send, Headphones, User } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; content: string };

interface SupportChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const cannedSupportResponse = (message: string): string => {
  const lower = message.toLowerCase();
  if (lower.includes('order') || lower.includes('track')) {
    return 'Orders are handled through the Track Order page. Enter your order number there or email support@tranyer.com for assistance.';
  }
  if (lower.includes('refund') || lower.includes('return')) {
    return 'You can return most items within 7 days of delivery. Visit the Returns page for full return instructions.';
  }
  if (lower.includes('payment') || lower.includes('checkout')) {
    return 'Payment is completed on the Checkout page. We accept multiple secure payment methods for your convenience.';
  }
  if (lower.includes('account') || lower.includes('login')) {
    return 'Account management is available from your account page. Sign in to update your profile and view orders.';
  }
  return 'Support chat is currently running in offline mode. Please use our Help page or email support@tranyer.com for immediate assistance.';
};

const SupportChatBot = ({ isOpen, onClose }: SupportChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I\'m your Tranyer Support Agent. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const reply = cannedSupportResponse(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      setIsLoading(false);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div className="w-[350px] h-[450px] bg-card border rounded-xl shadow-xl flex flex-col overflow-hidden">
        <div className="bg-green-600 text-white p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm">Tranyer Support</p>
              <p className="text-xs opacity-80">Offline support mode</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20 h-8 w-8">
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-muted/30">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0">
                  <Headphones className="w-3.5 h-3.5" />
                </div>
              )}
              <div className={`max-w-[80%] p-2.5 rounded-lg text-sm ${
                msg.role === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card border'
              }`}>
                {msg.content}
              </div>
              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center">
                <Headphones className="w-3.5 h-3.5" />
              </div>
              <div className="bg-card border p-2.5 rounded-lg">
                <span className="animate-pulse text-sm">Typing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-2.5 border-t bg-card">
          <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 h-9 text-sm"
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="bg-green-600 hover:bg-green-700 h-9 w-9">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportChatBot;
