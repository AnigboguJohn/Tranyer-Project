import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/mockData';
import { Sparkles } from 'lucide-react';

const NewArrivals = () => {
  // For demo purposes, show all products as new arrivals
  const newProducts = products;

  return (
    <Layout>
      <div className="container py-6">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="font-display text-3xl font-bold">New Arrivals</h1>
          </div>
          <p className="text-muted-foreground">
            Fresh products just for you - {newProducts.length} new items
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewArrivals;
