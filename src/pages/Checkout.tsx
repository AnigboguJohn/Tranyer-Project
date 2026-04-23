/**
 * Checkout Page Component
 * 
 * Multi-step checkout process for completing purchases.
 * Features:
 * - Contact information form
 * - Shipping address form
 * - Payment method selection (Paystack, Stripe, Bank Transfer)
 * - Order summary with items, subtotal, shipping, and total
 * - Form validation
 * - Full multi-language support via useLocalization hook
 * 
 * @component
 */

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, CreditCard, MapPin, User } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { useLocalization } from '@/contexts/LocalizationContext';
import { toast } from 'sonner';

const Checkout = () => {
  // Get cart state and actions
  const { items, subtotal, clearCart } = useCart();
  
  // Get translation and price formatting functions
  const { t, formatPrice } = useLocalization();
  
  // Navigation hook for redirecting after checkout
  const navigate = useNavigate();
  
  // Loading state for form submission
  const [isLoading, setIsLoading] = useState(false);
  
  // Selected payment method
  const [paymentMethod, setPaymentMethod] = useState('paystack');

  // Form data state for all input fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });

  // Calculate shipping and total
  const shipping = subtotal > 5000000 ? 0 : 250000;
  const total = subtotal + shipping;

  /**
   * Handle input field changes
   * Updates formData state with new values
   * @param e - Input change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * Handle form submission
   * Validates form, simulates payment, and redirects on success
   * @param e - Form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state'];
    const missing = requiredFields.filter((field) => !formData[field as keyof typeof formData]);
    
    // Show error if any required field is missing
    if (missing.length > 0) {
      toast.error(t('form.required')); // Translated: Required fields missing
      setIsLoading(false);
      return;
    }

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message and clear cart
    toast.success(t('message.orderPlaced')); // Translated: Order placed successfully
    clearCart();
    navigate('/');
    setIsLoading(false);
  };

  /**
   * Empty cart state
   * Redirects user to continue shopping
   */
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {t('cart.empty')} {/* Translated: Your cart is empty */}
          </h1>
          <Link to="/products">
            <Button>{t('cart.continueShopping')}</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-6">
        {/* Back to cart link */}
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          {t('common.back')} {t('nav.cart')} {/* Translated: Back to Cart */}
        </Link>

        {/* Page Title */}
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-8">
          {t('checkout.title')} {/* Translated: Checkout */}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section - Contact and Shipping */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Contact Information Section */}
              <div className="bg-card rounded-xl p-6">
                <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  {t('form.firstName')} & {t('form.lastName')} {/* Contact Info Header */}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('form.firstName')} *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Last Name */}
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('form.lastName')} *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('form.email')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('form.phone')} *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address Section */}
              <div className="bg-card rounded-xl p-6">
                <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t('checkout.shippingAddress')} {/* Translated: Shipping Address */}
                </h2>
                <div className="space-y-4">
                  {/* Street Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address">{t('form.address')} *</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="123 Main Street"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {/* City, State, Postal Code Grid */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">{t('form.city')} *</Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="Lagos"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">{t('form.state')} *</Label>
                      <Input
                        id="state"
                        name="state"
                        placeholder="Lagos"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">{t('form.zipCode')}</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        placeholder="100001"
                        value={formData.postalCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Section */}
              <div className="bg-card rounded-xl p-6">
                <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  {t('checkout.paymentMethod')} {/* Translated: Payment Method */}
                </h2>
                
                {/* Payment Options Radio Group */}
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-3"
                >
                  {/* Paystack Option - Recommended */}
                  <label className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="paystack" />
                    <div className="flex-1">
                      <p className="font-medium">Paystack</p>
                      <p className="text-sm text-muted-foreground">
                        Pay with card, bank transfer, or USSD
                      </p>
                    </div>
                    <div className="px-3 py-1 bg-success/10 text-success rounded text-xs font-medium">
                      Recommended
                    </div>
                  </label>
                  
                  {/* Stripe Option */}
                  <label className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="stripe" />
                    <div className="flex-1">
                      <p className="font-medium">Stripe</p>
                      <p className="text-sm text-muted-foreground">
                        Pay with international cards
                      </p>
                    </div>
                  </label>
                  
                  {/* Bank Transfer Option */}
                  <label className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="bank" />
                    <div className="flex-1">
                      <p className="font-medium">Bank Transfer</p>
                      <p className="text-sm text-muted-foreground">
                        Direct bank transfer
                      </p>
                    </div>
                  </label>
                </RadioGroup>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 sticky top-24">
                <h2 className="font-display text-lg font-bold mb-4">
                  {t('checkout.orderSummary')} {/* Translated: Order Summary */}
                </h2>

                {/* Cart Items Preview */}
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      {/* Item Image */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-1">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t('common.quantity')}: {item.quantity}
                        </p>
                        <p className="text-sm font-medium">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t('cart.subtotal')}</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t('cart.shipping')}</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-success">{t('products.freeShipping')}</span>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>
                  
                  {/* Total */}
                  <div className="flex justify-between font-bold text-lg pt-3 border-t">
                    <span>{t('cart.total')}</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-6"
                  disabled={isLoading}
                >
                  {isLoading 
                    ? t('common.loading') // Translated: Loading...
                    : `${t('checkout.placeOrder')} ${formatPrice(total)}`
                  }
                </Button>

                {/* Terms Notice */}
                <p className="text-xs text-muted-foreground text-center mt-4">
                  {t('footer.terms')} {/* Translated: Terms & Conditions */}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;
