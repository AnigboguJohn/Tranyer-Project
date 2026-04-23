import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; content: string };

const cannedReply = (message: string): string => {
  const lower = message.toLowerCase();
  if (lower.includes('order') || lower.includes('track')) {
    return 'Order tracking is currently available on the Help page. Visit /help for more details or contact support@tranyer.com.';
  }
  if (lower.includes('discount') || lower.includes('deal') || lower.includes('price')) {
    return 'Check our current deals on the Deals page and browse categories for the best prices.';
  }
  if (lower.includes('return') || lower.includes('refund')) {
    return 'Returns are accepted within 7 days of delivery. Please visit the Returns page for full policy details.';
  }
  if (lower.includes('payment') || lower.includes('checkout')) {
    return 'Payments are handled directly in the checkout flow. You can review available payment methods when checking out.';
  }
  return 'Tranyer Assistant is currently running in offline mode. Browse products, use the wishlist, or visit Help for support.';
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I\'m your Tranyer shopping assistant. How can I help you today?' }
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

    const reply = cannedReply(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      setIsLoading(false);
    }, 700);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-20 right-4 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform flex items-center justify-center ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[360px] h-[500px] bg-card border rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              <div>
                <p className="font-bold">Tranyer Assistant</p>
                <p className="text-xs opacity-80">Offline mode</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-primary-foreground hover:bg-primary/80">
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'assistant' && <Bot className="w-6 h-6 text-primary shrink-0" />}
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  {msg.content}
                </div>
                {msg.role === 'user' && <User className="w-6 h-6 text-muted-foreground shrink-0" />}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2">
                <Bot className="w-6 h-6 text-primary" />
                <div className="bg-muted p-3 rounded-lg"><span className="animate-pulse">Typing...</span></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t">
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
