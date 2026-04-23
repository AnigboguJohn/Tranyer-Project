/**
 * FeaturedProducts Component
 * 
 * Displays a section of featured products with customizable filtering.
 * Features:
 * - Accepts custom title and subtitle
 * - Optional filter function to select specific products
 * - Configurable product limit
 * - "See All" link with translated text
 * 
 * @component
 * @param {string} title - Section title
 * @param {string} subtitle - Optional section subtitle
 * @param {Function} filter - Optional filter function for products
 * @param {number} limit - Maximum number of products to display
 * @param {boolean} showViewAll - Whether to show "See All" link
 * @param {string} viewAllLink - URL for "See All" link
 */

import { Link } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/mockData';
import { useLocalization } from '@/contexts/LocalizationContext';

// Props interface for type safety
interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  filter?: (product: typeof products[0]) => boolean;
  limit?: number;
  showViewAll?: boolean;
  viewAllLink?: string;
}

const FeaturedProducts = ({
  title,
  subtitle,
  filter,
  limit = 6,
  showViewAll = true,
  viewAllLink = '/products',
}: FeaturedProductsProps) => {
  // Get translation function from LocalizationContext
  const { t } = useLocalization();
  
  // Apply optional filter to products, then limit the count
  const filteredProducts = filter ? products.filter(filter) : products;
  const displayProducts = filteredProducts.slice(0, limit);

  return (
    <section className="py-8">
      {/* Section Header with title and "See All" link */}
      <div className="flex items-center justify-between mb-6">
        <div>
          {/* Section Title */}
          <h2 className="font-display text-2xl font-bold">{title}</h2>
          
          {/* Optional Subtitle */}
          {subtitle && (
            <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
          )}
        </div>
        
        {/* "See All" Link - Translated */}
        {showViewAll && (
          <Link to={viewAllLink} className="text-primary font-medium hover:underline">
            {t('common.viewAll')} {/* Translated: See All */}
          </Link>
        )}
      </div>

      {/* Products Grid - Responsive columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {/* Map through filtered products and render ProductCard for each */}
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
