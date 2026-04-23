import { Link } from 'react-router-dom';
import { Package, ChevronLeft, Eye, Truck, CheckCircle, Clock, XCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const orders = [
  { id: 'ORD-001234', date: '2025-01-10', status: 'delivered', total: 125999, items: [
    { name: 'iPhone 15 Pro Max', quantity: 1, price: 125999, image: 'https://picsum.photos/100?random=1' }
  ]},
  { id: 'ORD-001233', date: '2025-01-08', status: 'shipped', total: 89500, items: [
    { name: 'Samsung Galaxy Buds', quantity: 1, price: 45000, image: 'https://picsum.photos/100?random=2' },
    { name: 'Phone Case', quantity: 1, price: 44500, image: 'https://picsum.photos/100?random=3' }
  ]},
  { id: 'ORD-001232', date: '2025-01-05', status: 'processing', total: 256000, items: [
    { name: 'MacBook Pro M3', quantity: 1, price: 256000, image: 'https://picsum.photos/100?random=4' }
  ]},
  { id: 'ORD-001231', date: '2024-12-28', status: 'cancelled', total: 35000, items: [
    { name: 'Wireless Mouse', quantity: 1, price: 35000, image: 'https://picsum.photos/100?random=5' }
  ]},
];

const statusConfig: Record<string, { icon: any; color: string; bg: string }> = {
  processing: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  shipped: { icon: Truck, color: 'text-blue-600', bg: 'bg-blue-100' },
  delivered: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
  cancelled: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-100' },
};

const Orders = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/account" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-display text-3xl font-bold flex items-center gap-2">
              <Package className="w-8 h-8 text-primary" />
              My Orders
            </h1>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {orders.map((order) => {
                const status = statusConfig[order.status];
                const StatusIcon = status.icon;
                return (
                  <div key={order.id} className="bg-card rounded-xl border p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-bold">{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.date).toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${status.bg}`}>
                        <StatusIcon className={`w-4 h-4 ${status.color}`} />
                        <span className={`text-sm font-medium capitalize ${status.color}`}>{order.status}</span>
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-medium">₦{(item.price / 100).toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <p className="font-bold">Total: ₦{(order.total / 100).toLocaleString()}</p>
                      <div className="flex gap-2">
                        {order.status === 'shipped' && (
                          <Button size="sm" variant="outline">
                            <Truck className="w-4 h-4 mr-2" /> Track
                          </Button>
                        )}
                        <Button size="sm" variant="ghost">
                          <Eye className="w-4 h-4 mr-2" /> Details
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
