import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLocalization } from '@/contexts/LocalizationContext';

interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: '1',
    author: 'Chioma A.',
    location: 'Lagos, Nigeria',
    rating: 5,
    title: 'Excellent service and fast delivery!',
    content: 'I ordered a Samsung phone and it arrived within 2 days. The product was genuine and exactly as described. Customer service was very responsive when I had questions. Will definitely order again!',
    date: '2026-01-15',
    verified: true,
  },
  {
    id: '2',
    author: 'Emmanuel O.',
    location: 'Abuja, Nigeria',
    rating: 5,
    title: 'Best marketplace experience ever',
    content: 'Tranyer has completely changed how I shop online. The prices are competitive, the product variety is amazing, and the WhatsApp support is incredibly helpful. Highly recommended!',
    date: '2026-01-14',
    verified: true,
  },
  {
    id: '3',
    author: 'Sarah M.',
    location: 'Port Harcourt, Nigeria',
    rating: 4,
    title: 'Great products, reliable sellers',
    content: 'I was skeptical at first but Tranyer proved me wrong. The electronics I bought were genuine and the return policy gave me confidence. Only minor issue was a slight delay in shipping.',
    date: '2026-01-12',
    verified: true,
  },
  {
    id: '4',
    author: 'Michael K.',
    location: 'Nairobi, Kenya',
    rating: 5,
    title: 'International shipping works perfectly',
    content: 'Living in Kenya, I was worried about international shipping but Tranyer handled everything smoothly. Package arrived in good condition with proper tracking all the way.',
    date: '2026-01-10',
    verified: true,
  },
  {
    id: '5',
    author: 'Fatima B.',
    location: 'Kano, Nigeria',
    rating: 5,
    title: 'Authentic products guaranteed',
    content: 'Finally a marketplace where I can trust the products are genuine. Bought an iPhone and it came with all original accessories and warranty. The price was also the best I could find.',
    date: '2026-01-08',
    verified: true,
  },
  {
    id: '6',
    author: 'David A.',
    location: 'Accra, Ghana',
    rating: 5,
    title: 'Seamless shopping experience',
    content: 'The website is easy to navigate, payment options are convenient, and the AI assistant helped me find exactly what I was looking for. Top-notch customer experience!',
    date: '2026-01-06',
    verified: true,
  },
];

const TrustpilotReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const { formatPrice } = useLocalization();

  const visibleReviews = 3;
  const maxIndex = reviews.length - visibleReviews;

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-[#00b67a] text-[#00b67a]' : 'fill-muted text-muted'}`}
      />
    ));
  };

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            {/* Trustpilot Logo */}
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 126 31" className="h-6" fill="none">
                <path d="M33.3 10.1h4.9l1.5 4.6 1.5-4.6h4.9l-4 2.9 1.5 4.6-4-2.9-4 2.9 1.5-4.6-3.8-2.9z" fill="#00b67a"/>
                <path d="M0 10.1h10.8v2.7H6.9v12.4H4V12.8H0v-2.7zm22.8 0h3.8l4.5 12.8V10.1h2.8v15.1h-3.8l-4.5-12.8v12.8h-2.8V10.1zm-8.9 0h2.9v15.1h-2.9V10.1zm56.4 0h2.9v15.1h-2.9V10.1zm4.3 0h2.9v12.4h5.3v2.7h-8.2V10.1zm8.6 7.6c0-4.5 3.4-7.9 7.7-7.9s7.7 3.4 7.7 7.9-3.4 7.9-7.7 7.9-7.7-3.4-7.7-7.9zm12.4 0c0-2.9-2-5.1-4.7-5.1s-4.7 2.2-4.7 5.1 2 5.1 4.7 5.1 4.7-2.2 4.7-5.1zm6.9-7.6h8.9v2.7h-6v3.6h5.4v2.6h-5.4v6.2h-2.9V10.1zm14.2 0h2.9v15.1h-2.9V10.1zm-66.5 0h5.4c4.1 0 5.7 1.6 5.7 4.5 0 2.5-1.7 4.2-4.7 4.5l5.4 6.1h-3.6l-5.1-6v6h-2.9V10.1h-.2zm2.9 6.7h2.4c2.1 0 3-1 3-2.1s-1-2.1-3-2.1H52V16.8z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="font-bold text-lg">{averageRating}</span>
          </div>
          <p className="text-muted-foreground">
            Rated <span className="font-semibold text-foreground">Excellent</span> based on{' '}
            <span className="font-semibold text-foreground">{reviews.length.toLocaleString()}+ reviews</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleReviews)}%)` }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[calc(33.333%-0.67rem)] md:min-w-[calc(33.333%-0.67rem)] flex-shrink-0 cursor-pointer"
              onClick={() => setSelectedReview(review)}
            >
              <div className="bg-card border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(review.rating)}
                  {review.verified && (
                    <span className="text-xs bg-[#00b67a]/10 text-[#00b67a] px-2 py-0.5 rounded-full font-medium">
                      Verified
                    </span>
                  )}
                </div>
                <h4 className="font-bold mb-2 line-clamp-1">{review.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {review.content}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium">{review.author}</p>
                    <p className="text-muted-foreground text-xs">{review.location}</p>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="flex justify-center gap-1.5 mt-4 md:hidden">
        {Array.from({ length: reviews.length }).map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>

      {/* Review Detail Modal */}
      <Dialog open={!!selectedReview} onOpenChange={() => setSelectedReview(null)}>
        <DialogContent className="sm:max-w-lg">
          {selectedReview && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                    {selectedReview.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{selectedReview.author}</p>
                    <p className="text-sm text-muted-foreground font-normal">{selectedReview.location}</p>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {renderStars(selectedReview.rating)}
                  {selectedReview.verified && (
                    <span className="text-xs bg-[#00b67a]/10 text-[#00b67a] px-2 py-0.5 rounded-full font-medium">
                      Verified Purchase
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">{selectedReview.title}</h3>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10" />
                    <p className="text-muted-foreground pl-4">{selectedReview.content}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Reviewed on {new Date(selectedReview.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TrustpilotReviews;
