import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocalization, Language, Currency } from '@/contexts/LocalizationContext';

interface LanguageCurrencySelectorProps {
  variant?: 'ghost' | 'outline' | 'default';
  showLabel?: boolean;
  className?: string;
}

const LanguageCurrencySelector = ({ 
  variant = 'ghost', 
  showLabel = false, 
  className = '' 
}: LanguageCurrencySelectorProps) => {
  const { language, currency, setLanguage, setCurrency, languages, currencies, currencySymbol } = useLocalization();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size={showLabel ? 'default' : 'sm'}
          className={`${className} ${variant === 'ghost' ? 'text-header-foreground hover:bg-white/10' : ''} gap-1`}
        >
          <Globe className="h-4 w-4" />
          {showLabel && (
            <span className="hidden lg:inline">{languages[language]} / {currencySymbol}</span>
          )}
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-popover">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        {(Object.entries(languages) as [Language, string][]).map(([code, name]) => (
          <DropdownMenuItem 
            key={code}
            onClick={() => setLanguage(code)}
            className={language === code ? 'bg-muted' : ''}
          >
            {name}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel>Currency</DropdownMenuLabel>
        {(Object.entries(currencies) as [Currency, string][]).map(([code, name]) => (
          <DropdownMenuItem 
            key={code}
            onClick={() => setCurrency(code)}
            className={currency === code ? 'bg-muted' : ''}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageCurrencySelector;
