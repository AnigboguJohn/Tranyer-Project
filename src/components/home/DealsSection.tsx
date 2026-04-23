import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Timer } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/mockData';

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProducts = products.filter((p) => p.discount && p.discount >= 10).slice(0, 4);

  return (
    <section className="py-8">
      <div className="promo-gradient rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              🔥 Flash Sales
            </h2>
            <p className="text-white/80 mt-1">Limited time offers - Don't miss out!</p>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-3">
            <Timer className="h-5 w-5 text-white" />
            <span className="text-white/80 text-sm">Ends in:</span>
            <div className="flex gap-2">
              {[
                { value: timeLeft.hours, label: 'H' },
                { value: timeLeft.minutes, label: 'M' },
                { value: timeLeft.seconds, label: 'S' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[50px] text-center"
                >
                  <span className="text-white font-bold text-lg">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-white/70 text-xs ml-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deal Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/deals"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
          >
            View All Deals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
