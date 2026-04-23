/**
 * HeroCarousel Component
 * 
 * Promotional banner carousel for the homepage.
 * Features:
 * - Auto-sliding every 5 seconds
 * - Manual navigation with arrows and dots
 * - Responsive aspect ratio
 * - Translated CTA button
 * 
 * @component
 */

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { promoBanners } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { useLocalization } from '@/contexts/LocalizationContext';

const HeroCarousel = () => {
  // Current slide index state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get translation function from LocalizationContext
  const { t } = useLocalization();

  /**
   * Auto-slide effect
   * Changes slide every 5 seconds automatically
   * Cleans up interval on component unmount
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /**
   * Navigate to specific slide by index
   * @param index - Target slide index
   */
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  /**
   * Navigate to next slide
   * Wraps around to first slide after last
   */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promoBanners.length);
  };

  /**
   * Navigate to previous slide
   * Wraps around to last slide before first
   */
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promoBanners.length) % promoBanners.length);
  };

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Slides Container - Horizontal scrolling with CSS transform */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Map through all promotional banners */}
        {promoBanners.map((banner) => (
          <Link
            key={banner.id}
            to={banner.link}
            className="min-w-full relative aspect-[21/9] md:aspect-[3/1]"
          >
            {/* Banner Image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            
            {/* Content Overlay with gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="px-8 md:px-16 max-w-lg">
                {/* Banner Title */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2 md:mb-4">
                  {banner.title}
                </h2>
                
                {/* Optional Subtitle */}
                {banner.subtitle && (
                  <p className="text-sm md:text-lg text-white/90 mb-4 md:mb-6">
                    {banner.subtitle}
                  </p>
                )}
                
                {/* CTA Button - Translated */}
                <Button size="lg" className="font-semibold">
                  {t('hero.shopNow')} {/* Translated: Shop Now */}
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Left Navigation Arrow */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10 md:h-12 md:w-12"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </Button>
      
      {/* Right Navigation Arrow */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10 md:h-12 md:w-12"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </Button>

      {/* Dot Navigation Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {promoBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6 md:w-8' // Active slide - wider
                : 'bg-white/50 hover:bg-white/75' // Inactive slides
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
