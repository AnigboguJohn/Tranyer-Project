import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-36 right-4 z-40 w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform"
      aria-label="Go to top"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default GoToTop;