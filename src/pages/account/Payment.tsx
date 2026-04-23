import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Plus, Trash2, Check, Building, Wallet } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const paymentMethods = [
  { id: '1', type: 'visa', last4: '4242', expiry: '12/25', isDefault: true },
  { id: '2', type: 'mastercard', last4: '8888', expiry: '06/26', isDefault: false },
];

const Payment = () => {
  const [methods, setMethods] = useState(paymentMethods);
  const [showAddCard, setShowAddCard] = useState(false);

  const cardLogos: Record<string, string> = {
    visa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png',
    mastercard: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png',
    amex: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png',
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/account" className="hover:text-primary">Account</Link>
            <span>/</span>
            <span>Payment Methods</span>
          </div>

          <h1 className="font-display text-3xl font-bold mb-8">Payment Methods</h1>

          {/* Saved Cards */}
          <div className="bg-card rounded-xl border p-6 mb-6">
            <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Saved Cards
            </h2>
            <div className="space-y-3">
              {methods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <img src={cardLogos[method.type]} alt={method.type} className="h-8 w-auto" />
                    <div>
                      <p className="font-medium">•••• •••• •••• {method.last4}</p>
                      <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                    </div>
                    {method.isDefault && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Default</span>
                    )}
                  </div>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button onClick={() => setShowAddCard(!showAddCard)} variant="outline" className="mt-4">
              <Plus className="w-4 h-4 mr-2" /> Add New Card
            </Button>
          </div>

          {/* Other Payment Options */}
          <div className="bg-card rounded-xl border p-6 mb-6">
            <h2 className="font-display text-lg font-bold mb-4">Other Payment Options</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" alt="PayPal" className="h-6" />
                <span className="font-medium">PayPal</span>
                <Button size="sm" variant="outline" className="ml-auto">Connect</Button>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs">PS</div>
                <span className="font-medium">Paystack</span>
                <Button size="sm" variant="outline" className="ml-auto">Connect</Button>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-xs">ST</div>
                <span className="font-medium">Stripe</span>
                <Button size="sm" variant="outline" className="ml-auto">Connect</Button>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <Building className="w-6 h-6 text-muted-foreground" />
                <span className="font-medium">Bank Transfer</span>
                <Check className="w-4 h-4 text-green-600 ml-auto" />
              </div>
            </div>
          </div>

          {/* Crypto Wallets */}
          <div className="bg-card rounded-xl border p-6">
            <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-primary" />
              Crypto Wallets
            </h2>
            <p className="text-sm text-muted-foreground mb-4">Connect your crypto wallet for blockchain payments</p>
            <div className="grid md:grid-cols-3 gap-3">
              <Button variant="outline" className="h-auto py-3">
                <span className="text-xl mr-2">₿</span> Bitcoin
              </Button>
              <Button variant="outline" className="h-auto py-3">
                <span className="text-xl mr-2">Ξ</span> Ethereum
              </Button>
              <Button variant="outline" className="h-auto py-3">
                <span className="text-xl mr-2">₮</span> USDT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
