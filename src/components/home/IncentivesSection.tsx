/**
 * IncentivesSection Component
 * 
 * Displays trust-building incentives on the homepage.
 * Features:
 * - Free Delivery information
 * - Secure Payment guarantee
 * - Easy Returns policy
 * - 24/7 Support availability
 * - Full multi-language support via useLocalization hook
 * 
 * @component
 */

import { Truck, Shield, CreditCard, Headphones } from 'lucide-react';
import { useLocalization } from '@/contexts/LocalizationContext';

const IncentivesSection = () => {
  // Get translation function from LocalizationContext
  const { t, formatPrice } = useLocalization();

  // Incentives data with icons and translated content
  // Each incentive represents a trust-building feature of the platform
  const incentives = [
    {
      icon: Truck,
      // Translated: Free Delivery
      titleKey: 'products.freeShipping' as const,
      // Description with formatted price threshold
      description: `${formatPrice(5000000)}+`,
    },
    {
      icon: Shield,
      // Translated: Secure Payment
      titleKey: 'checkout.secureCheckout' as const,
      description: '100%',
    },
    {
      icon: CreditCard,
      // Translated: Returns
      titleKey: 'footer.returns' as const,
      description: '7 days',
    },
    {
      icon: Headphones,
      // Translated: Help
      titleKey: 'footer.help' as const,
      description: '24/7',
    },
  ];

  return (
    <section className="py-8">
      {/* Responsive Grid - 2 columns on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {incentives.map((item, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-4 md:p-6 text-center border border-border hover:border-primary/30 hover:shadow-md transition-all"
          >
            {/* Icon Container - Circular background */}
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary flex items-center justify-center">
              <item.icon className="h-6 w-6 text-secondary-foreground" />
            </div>
            
            {/* Incentive Title - Translated */}
            <h3 className="font-semibold text-sm md:text-base mb-1">
              {t(item.titleKey)}
            </h3>
            
            {/* Incentive Description */}
            <p className="text-muted-foreground text-xs md:text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IncentivesSection;
