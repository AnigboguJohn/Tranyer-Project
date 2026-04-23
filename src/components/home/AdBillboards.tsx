import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Ad {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
  type: 'image' | 'video';
  videoUrl?: string;
}

// Internal business ads - for platform sellers/businesses
const internalAds: Ad[] = [
  {
    id: 'int-1',
    title: 'Sell on Tranyer',
    subtitle: 'Reach millions of customers',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop',
    link: '/account?action=sell',
    type: 'image',
  },
  {
    id: 'int-2',
    title: 'Advertise Your Brand',
    subtitle: 'Boost your visibility with targeted ads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop',
    link: '/account?action=advertise',
    type: 'image',
  },
  {
    id: 'int-3',
    title: 'Free Shipping Week',
    subtitle: 'All orders above ₦10,000 ship free',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&h=400&fit=crop',
    link: '/deals',
    type: 'image',
  },
  {
    id: 'int-4',
    title: 'Join Seller Program',
    subtitle: 'Get 0% commission for first 3 months',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop',
    link: '/account?action=sell',
    type: 'image',
  },
];

// External ads placeholder - for Google/Meta Ads
const externalAds: Ad[] = [
  {
    id: 'ext-1',
    title: 'Partner Ad Space',
    subtitle: 'Premium advertising placement',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=400&fit=crop',
    link: '#ad-partner',
    type: 'image',
  },
  {
    id: 'ext-2',
    title: 'Featured Brand',
    subtitle: 'Sponsored content',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop',
    link: '#ad-partner',
    type: 'image',
  },
  {
    id: 'ext-3',
    title: 'Premium Partner',
    subtitle: 'Exclusive offers',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop',
    link: '#ad-partner',
    type: 'image',
  },
];

interface BillboardProps {
  ads: Ad[];
  variant: 'internal' | 'external';
}

const Billboard = ({ ads, variant }: BillboardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, variant === 'internal' ? 6000 : 8000);
    return () => clearInterval(interval);
  }, [ads.length, variant]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % ads.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);

  const currentAd = ads[currentIndex];

  return (
    <div className="relative overflow-hidden rounded-xl bg-card border">
      {/* Header */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
        <span className={`px-3 py-1.5 text-xs font-medium rounded-full ${
          variant === 'internal' 
            ? 'bg-primary/90 text-primary-foreground' 
            : 'bg-muted text-muted-foreground'
        }`}>
          {variant === 'internal' ? 'Tranyer Ads' : 'Sponsored'}
        </span>
      </div>

      {/* Ad Content - Medium height hero style */}
      <Link 
        to={currentAd.link}
        className="block relative h-[200px] md:h-[280px]"
      >
        <img
          src={currentAd.image}
          alt={currentAd.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-center">
          <div className="px-6 md:px-10 max-w-lg">
            <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-2">
              {currentAd.title}
            </h3>
            {currentAd.subtitle && (
              <p className="text-sm md:text-lg text-white/80 mb-4">
                {currentAd.subtitle}
              </p>
            )}
            <Button 
              size="sm" 
              className="mt-2"
              variant={variant === 'internal' ? 'default' : 'secondary'}
            >
              Learn More
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      {ads.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10"
            onClick={(e) => { e.preventDefault(); prevSlide(); }}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10"
            onClick={(e) => { e.preventDefault(); nextSlide(); }}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Individual billboard components for separate placement
export const InternalAdBillboard = () => {
  return <Billboard ads={internalAds} variant="internal" />;
};

export const ExternalAdBillboard = () => {
  return <Billboard ads={externalAds} variant="external" />;
};

// Legacy export for backwards compatibility (not used anymore)
const AdBillboards = () => {
  return (
    <div className="space-y-6">
      <InternalAdBillboard />
      <ExternalAdBillboard />
    </div>
  );
};

export default AdBillboards;
