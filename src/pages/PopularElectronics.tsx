import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/mockData';
import { Zap } from 'lucide-react';

const PopularElectronics = () => {
  const electronicsProducts = products.filter((p) => p.categoryId === '2');

  return (
    <Layout>
      <div className="container py-6">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8 text-primary" />
            <h1 className="font-display text-3xl font-bold">Popular in Electronics</h1>
          </div>
          <p className="text-muted-foreground">
            Top-rated electronics and gadgets - {electronicsProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {electronicsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {electronicsProducts.length === 0 && (
          <div className="text-center py-12">
            <Zap className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="font-display text-xl font-semibold mb-2">
              No electronics found
            </h2>
            <p className="text-muted-foreground">
              Check back soon for more products!
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PopularElectronics;
