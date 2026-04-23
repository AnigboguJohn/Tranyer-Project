import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Package, Search } from 'lucide-react';
import { useState } from 'react';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  return (
    <Layout>
      <div className="container py-12 max-w-2xl">
        <div className="text-center mb-8">
          <Package className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="font-display text-4xl font-bold mb-4">Track Your Order</h1>
          <p className="text-muted-foreground">Enter your order number to see delivery status</p>
        </div>
        <div className="bg-card rounded-xl border p-8">
          <div className="flex gap-2">
            <Input placeholder="Enter order number (e.g., ORD-123456)" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} className="flex-1" />
            <Button className="gap-2"><Search className="w-4 h-4" />Track</Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">You can find your order number in your confirmation email</p>
        </div>
      </div>
    </Layout>
  );
};
export default TrackOrder;
