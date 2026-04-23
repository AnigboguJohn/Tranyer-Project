/**
 * ProductCard Component
 * 
 * Reusable product card for displaying products in grids and lists.
 * Features:
 * - Product image with hover effects
 * - Discount badge display
 * - Out of stock overlay
 * - Wishlist toggle button
 * - Quick view modal trigger
 * - Add to cart button (appears on hover)
 * - Rating display with stars
 * - Price with original price strikethrough for discounts
 * - Full multi-language support via useLocalization hook
 * 
 * @component
 * @param {Product} product - Product data object
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useLocalization } from '@/contexts/LocalizationContext';
import ProductQuickView from './ProductQuickView';

// Props interface for type safety
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Wishlist state for heart icon toggle
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Quick view modal visibility state
  const [showQuickView, setShowQuickView] = useState(false);
  
  // Get addToCart function from CartContext
  const { addToCart } = useCart();
  
  // Get translation and price formatting functions
  const { t, formatPrice } = useLocalization();

  return (
    <>
      <div className="product-card group">
        {/* Image Container with overlay effects */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          {/* Product Image - Links to product detail page */}
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>

          {/* Discount Badge - Shows percentage off */}
          {product.discount && (
            <span className="absolute top-3 left-3 deal-badge">
              -{product.discount}%
            </span>
          )}

          {/* Out of Stock Overlay - Covers entire image when not in stock */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-foreground px-3 py-1 rounded-full text-sm font-medium">
                {t('products.outOfStock')} {/* Translated: Out of Stock */}
              </span>
            </div>
          )}

          {/* Quick Action Buttons - Appear on hover */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {/* Wishlist Toggle Button */}
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full shadow-lg"
              onClick={() => setIsWishlisted(!isWishlisted)}
              aria-label={isWishlisted ? t('products.removeFromWishlist') : t('products.addToWishlist')}
            >
              <Heart
                className={`h-4 w-4 ${isWishlisted ? 'fill-destructive text-destructive' : ''}`}
              />
            </Button>
            
            {/* Quick View Button */}
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full shadow-lg"
              onClick={() => setShowQuickView(true)}
              aria-label={t('products.quickView')}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Add to Cart Button - Slides up on hover (only if in stock) */}
          {product.inStock && (
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
              <Button
                className="w-full gap-2 shadow-lg"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="h-4 w-4" />
                {t('products.addToCart')} {/* Translated: Add to Cart */}
              </Button>
            </div>
          )}
        </div>

        {/* Product Information Section */}
        <div className="p-4">
          {/* Brand Name - Uppercase, muted */}
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {product.brand}
          </p>

          {/* Product Title - Links to detail page */}
          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors mb-2">
              {product.name}
            </h3>
          </Link>

          {/* Rating Display - Star icon with rating and review count */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-4 w-4 fill-rating-star text-rating-star" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price Display - Current price with optional original price */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="price-current text-lg">
              {formatPrice(product.price)}
            </span>
            {/* Show strikethrough original price if discounted */}
            {product.originalPrice && (
              <span className="price-old">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal - Opens when eye button is clicked */}
      <ProductQuickView
        product={product}
        open={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </>
  );
};

export default ProductCard;
