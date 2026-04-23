/**
 * Cart Page Component
 * 
 * Shopping cart page displaying all items added by the user.
 * Features:
 * - List of cart items with images, prices, quantities
 * - Quantity adjustment controls (+/-)
 * - Remove item functionality
 * - Order summary with subtotal, shipping, and total
 * - Responsive design for mobile and desktop
 * - Full multi-language support via useLocalization hook
 * 
 * @component
 */

import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useLocalization } from '@/contexts/LocalizationContext';

const Cart = () => {
  // Get cart state and actions from CartContext
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, itemCount } = useCart();
  
  // Get translation and price formatting functions
  const { t, formatPrice } = useLocalization();

  /**
   * Empty cart state
   * Shows a friendly message and button to continue shopping
   */
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="max-w-md mx-auto text-center">
            {/* Empty cart icon */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            
            {/* Empty cart message - Translated */}
            <h1 className="font-display text-2xl font-bold mb-3">
              {t('cart.empty')} {/* Translated: Your cart is empty */}
            </h1>
            <p className="text-muted-foreground mb-6">
              {t('cart.continueShopping')} {/* Translated: Continue Shopping */}
            </p>
            
            {/* Continue shopping button */}
            <Link to="/products">
              <Button size="lg" className="gap-2">
                <ShoppingBag className="h-4 w-4" />
                {t('cart.continueShopping')}
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Calculate shipping - Free for orders over ₦50,000
  const shipping = subtotal > 5000000 ? 0 : 250000;
  const total = subtotal + shipping;

  return (
    <Layout>
      <div className="container py-6">
        {/* Page Header with cart title and clear button */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-2xl md:text-3xl font-bold">
            {t('nav.cart')} ({itemCount}) {/* Translated: Cart */}
          </h1>
          <Button variant="ghost" size="sm" onClick={clearCart}>
            {t('common.delete')} {/* Translated: Clear All */}
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-card rounded-xl p-4 md:p-6 flex gap-4"
              >
                {/* Product Image - Clickable link to product detail */}
                <Link
                  to={`/product/${item.product.id}`}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-muted shrink-0"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  {/* Brand name */}
                  <p className="text-xs text-muted-foreground uppercase">
                    {item.product.brand}
                  </p>
                  
                  {/* Product name - Clickable link */}
                  <Link
                    to={`/product/${item.product.id}`}
                    className="font-medium hover:text-primary transition-colors line-clamp-2"
                  >
                    {item.product.name}
                  </Link>

                  {/* Price display */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="price-current">{formatPrice(item.product.price)}</span>
                    {/* Show original price if discounted */}
                    {item.product.originalPrice && (
                      <span className="price-old text-xs">
                        {formatPrice(item.product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Mobile Quantity Controls and Remove Button */}
                  <div className="flex items-center justify-between mt-4 md:hidden">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-r-none"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-10 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-l-none"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive"
                      onClick={() => removeFromCart(item.product.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Desktop Quantity Controls and Remove Button */}
                <div className="hidden md:flex items-center gap-4">
                  {/* Quantity selector */}
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-r-none"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-l-none"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Line item total */}
                  <div className="text-right min-w-[120px]">
                    <p className="font-bold text-lg">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>

                  {/* Remove button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-destructive/10"
                    onClick={() => removeFromCart(item.product.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}

            {/* Continue Shopping Link */}
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('cart.continueShopping')} {/* Translated: Continue Shopping */}
            </Link>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 sticky top-24">
              <h2 className="font-display text-xl font-bold mb-6">
                {t('checkout.orderSummary')} {/* Translated: Order Summary */}
              </h2>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                {/* Subtotal */}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {t('cart.subtotal')} ({itemCount}) {/* Translated: Subtotal */}
                  </span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                
                {/* Shipping */}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {t('cart.shipping')} {/* Translated: Shipping */}
                  </span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-success">
                        {t('products.freeShipping')} {/* Translated: Free Shipping */}
                      </span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                
                {/* Free shipping threshold message */}
                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground">
                    {t('products.freeShipping')} {formatPrice(5000000)}+
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-bold text-lg">
                    {t('cart.total')} {/* Translated: Total */}
                  </span>
                  <span className="font-bold text-lg">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                <Button size="lg" className="w-full">
                  {t('cart.checkout')} {/* Translated: Checkout */}
                </Button>
              </Link>

              {/* Payment Methods Info */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-xs text-muted-foreground text-center mb-3">
                  {t('checkout.secureCheckout')} {/* Translated: Secure payment with */}
                </p>
                <div className="flex justify-center gap-3">
                  <div className="px-3 py-1 bg-muted rounded text-xs font-medium">
                    Paystack
                  </div>
                  <div className="px-3 py-1 bg-muted rounded text-xs font-medium">
                    Stripe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
