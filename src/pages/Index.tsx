/**
 * Index Page (Homepage) Component
 * 
 * Main landing page for the Tranyer e-commerce platform.
 * Features:
 * - Hero carousel with promotional banners
 * - Incentives section (free delivery, secure payment, etc.)
 * - Category grid for browsing by category
 * - Internal ad billboards for platform promotions
 * - Deals section with countdown timer
 * - Featured product sections (Top Deals, New Arrivals, Electronics)
 * - External ad billboards for partner advertisements
 * - Trustpilot reviews section
 * 
 * All content is fully translated using the localization system.
 * 
 * @component
 */

import Layout from '@/components/layout/Layout';
import HeroCarousel from '@/components/home/HeroCarousel';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import DealsSection from '@/components/home/DealsSection';
import IncentivesSection from '@/components/home/IncentivesSection';
import TrustpilotReviews from '@/components/home/TrustpilotReviews';
import { InternalAdBillboard, ExternalAdBillboard } from '@/components/home/AdBillboards';
import { useLocalization } from '@/contexts/LocalizationContext';

const Index = () => {
  // Get translation function from LocalizationContext
  const { t } = useLocalization();

  return (
    <Layout>
      <div className="container py-4 md:py-6 space-y-8">
        {/* Hero Carousel - Promotional banners */}
        <HeroCarousel />
        
        {/* Incentives Section - Free delivery, secure payment, etc. */}
        <IncentivesSection />
        
        {/* Category Grid - Shop by category */}
        <CategoryGrid />
        
        {/* Internal Ad Billboard - Platform promotions */}
        <InternalAdBillboard />
        
        {/* Deals Section - Flash sales with countdown */}
        <DealsSection />
        
        {/* Top Deals Section - Products with discounts */}
        <FeaturedProducts
          title={t('sections.topDeals')} // Translated: Top Deals for You
          subtitle={t('sections.recommended')} // Translated: Handpicked products
          filter={(p) => !!p.discount} // Only show products with discounts
          limit={6}
          viewAllLink="/top-deals"
        />
        
        {/* New Arrivals Section */}
        <FeaturedProducts
          title={t('sections.newArrivals')} // Translated: New Arrivals
          subtitle={t('sections.featuredProducts')} // Translated: Fresh products just for you
          limit={6}
          viewAllLink="/new-arrivals"
        />
        
        {/* External Ad Billboard - Partner advertisements */}
        <ExternalAdBillboard />
        
        {/* Popular Electronics Section */}
        <FeaturedProducts
          title={t('sections.popular')} // Translated: Popular in Electronics
          filter={(p) => p.categoryId === '2'} // Electronics category
          limit={6}
          viewAllLink="/popular-electronics"
        />
        
        {/* Trustpilot Reviews Section */}
        <TrustpilotReviews />
      </div>
    </Layout>
  );
};

export default Index;
