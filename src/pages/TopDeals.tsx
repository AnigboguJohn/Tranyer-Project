import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/mockData';
import { Tag } from 'lucide-react';

const TopDeals = () => {
  const dealProducts = products.filter((p) => p.discount);

  return (
    <Layout>
      <div className="container py-6">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Tag className="w-8 h-8 text-primary" />
            <h1 className="font-display text-3xl font-bold">Top Deals for You</h1>
          </div>
          <p className="text-muted-foreground">
            Handpicked products at the best prices - {dealProducts.length} deals available
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TopDeals;
