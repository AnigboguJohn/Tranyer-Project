import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/mockData';
import { Flame } from 'lucide-react';

const Deals = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  const dealProducts = products.filter((p) => p.discount && p.discount >= 10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer for new deals
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <Layout>
      <div className="container py-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-destructive to-orange-500 rounded-2xl p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Flame className="w-10 h-10" />
              <div>
                <h1 className="font-display text-3xl font-bold">Flash Sales</h1>
                <p className="text-white/80">Grab these deals before they're gone!</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/80">Ends in:</span>
              <div className="flex gap-1">
                <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[50px]">
                  <span className="text-2xl font-bold">{formatTime(timeLeft.hours)}</span>
                  <p className="text-xs text-white/70">HRS</p>
                </div>
                <span className="text-2xl font-bold self-center">:</span>
                <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[50px]">
                  <span className="text-2xl font-bold">{formatTime(timeLeft.minutes)}</span>
                  <p className="text-xs text-white/70">MIN</p>
                </div>
                <span className="text-2xl font-bold self-center">:</span>
                <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[50px]">
                  <span className="text-2xl font-bold">{formatTime(timeLeft.seconds)}</span>
                  <p className="text-xs text-white/70">SEC</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {dealProducts.length === 0 && (
          <div className="text-center py-12">
            <Flame className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="font-display text-xl font-semibold mb-2">
              No flash deals available right now
            </h2>
            <p className="text-muted-foreground">
              Check back soon for amazing deals!
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Deals;
