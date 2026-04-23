import { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Product } from '@/types';
import { formatPrice } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import { useLocalization } from '@/contexts/LocalizationContext';
import { Link } from 'react-router-dom';

interface ProductQuickViewProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

const ProductQuickView = ({ product, open, onClose }: ProductQuickViewProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { t } = useLocalization();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
    setQuantity(1);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.discount && (
              <span className="absolute top-4 left-4 deal-badge text-sm">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors md:hidden"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
              {product.brand}
            </p>
            <h2 className="font-display text-xl font-bold mb-3">{product.name}</h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-rating-star text-rating-star'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="price-current text-2xl">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="price-old text-base">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <span className="text-success font-medium">✓ {t('products.inStock')}</span>
              ) : (
                <span className="text-destructive font-medium">{t('products.outOfStock')}</span>
              )}
            </div>

            {/* Quantity Selector */}
            {product.inStock && (
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium">{t('common.quantity')}:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-r-none"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-l-none"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <Button
                className="flex-1 gap-2"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
                {t('products.addToCart')}
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* View Full Details */}
            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="text-center text-sm text-primary hover:underline mt-4"
            >
              {t('products.quickView')} →
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
