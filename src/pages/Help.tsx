import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HelpCircle, Search, MessageCircle, Phone, Mail, FileText, Package, CreditCard, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SupportChatBot from '@/components/SupportChatBot';

const helpTopics = [
  { icon: Package, title: 'Orders & Delivery', description: 'Track orders, delivery times, and more', link: '/track-order' },
  { icon: CreditCard, title: 'Payments', description: 'Payment methods, refunds, and billing', link: '/account/payment' },
  { icon: Truck, title: 'Shipping', description: 'Shipping options and delivery information', link: '/shipping' },
  { icon: FileText, title: 'Returns & Refunds', description: 'Return policies and refund process', link: '/returns' },
];

const faqs = [
  { question: 'How do I track my order?', answer: 'You can track your order by visiting the Track Order page and entering your order number, or by logging into your account and viewing your order history.' },
  { question: 'What payment methods do you accept?', answer: 'We accept Visa, Mastercard, American Express, PayPal, Paystack, Stripe, and Bank Transfer. All payments are secure and encrypted.' },
  { question: 'How long does delivery take?', answer: 'Delivery typically takes 2-5 business days within Lagos, and 5-10 business days for other locations in Nigeria.' },
  { question: 'Can I return an item?', answer: 'Yes, you can return most items within 7 days of delivery. Visit our Returns page for more details on the return process.' },
  { question: 'How do I contact customer support?', answer: 'You can reach us via phone at +234 800 123 4567, email at support@tranyer.com, or use our live chat feature.' },
];

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSupportChatOpen, setIsSupportChatOpen] = useState(false);

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="font-display text-4xl font-bold mb-4">How Can We Help?</h1>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {helpTopics.map((topic) => (
            <Link
              key={topic.title}
              to={topic.link}
              className="p-6 bg-card rounded-xl border hover:border-primary transition-colors group"
            >
              <topic.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold mb-1 flex items-center">
                {topic.title}
                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </Link>
          ))}
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="p-6 bg-card rounded-xl border group">
                <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="bg-muted rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">Still Need Help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-xl">
              <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-4">Available 24/7</p>
              <Button variant="outline">+234 800 123 4567</Button>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-4">We'll respond within 24hrs</p>
              <Button variant="outline">support@tranyer.com</Button>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">Chat with our support team</p>
              <Button 
                onClick={() => setIsSupportChatOpen(true)}
                className="bg-green-600 hover:bg-green-700"
              >
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Chat Widget */}
      <SupportChatBot 
        isOpen={isSupportChatOpen} 
        onClose={() => setIsSupportChatOpen(false)} 
      />
    </Layout>
  );
};

export default Help;
