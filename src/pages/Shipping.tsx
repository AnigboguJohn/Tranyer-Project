import Layout from '@/components/layout/Layout';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

const Shipping = () => (
  <Layout>
    <div className="container py-12 max-w-4xl">
      <div className="text-center mb-12">
        <Truck className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="font-display text-4xl font-bold mb-4">Shipping Information</h1>
        <p className="text-xl text-muted-foreground">Fast and reliable delivery across Nigeria</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {[
          { icon: Clock, title: 'Lagos', time: '2-3 business days', price: '₦1,500' },
          { icon: MapPin, title: 'Other States', time: '5-7 business days', price: '₦2,500' },
        ].map((item) => (
          <div key={item.title} className="bg-card rounded-xl border p-6">
            <item.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">Delivery: {item.time}</p>
            <p className="text-primary font-bold mt-2">From {item.price}</p>
          </div>
        ))}
      </div>
      <div className="bg-primary/10 rounded-xl p-6 text-center">
        <Package className="w-10 h-10 text-primary mx-auto mb-2" />
        <h3 className="font-bold text-lg">Free Shipping on orders over ₦50,000!</h3>
      </div>
    </div>
  </Layout>
);
export default Shipping;
