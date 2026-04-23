import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, TranslationKey } from '@/lib/translations';

export type Language = 'en' | 'fr' | 'es' | 'de' | 'pt' | 'ar' | 'zh' | 'nl';
export type Currency = 'NGN' | 'USD' | 'EUR' | 'GBP' | 'KES' | 'ZAR' | 'GHS';

export type { TranslationKey };

interface Market {
  country: string;
  currency: Currency;
  language: Language;
  currencySymbol: string;
  exchangeRate: number; // Rate to NGN
}

const markets: Record<string, Market> = {
  NG: { country: 'Nigeria', currency: 'NGN', language: 'en', currencySymbol: '₦', exchangeRate: 1 },
  US: { country: 'United States', currency: 'USD', language: 'en', currencySymbol: '$', exchangeRate: 0.00065 },
  GB: { country: 'United Kingdom', currency: 'GBP', language: 'en', currencySymbol: '£', exchangeRate: 0.00051 },
  DE: { country: 'Germany', currency: 'EUR', language: 'de', currencySymbol: '€', exchangeRate: 0.00059 },
  FR: { country: 'France', currency: 'EUR', language: 'fr', currencySymbol: '€', exchangeRate: 0.00059 },
  ES: { country: 'Spain', currency: 'EUR', language: 'es', currencySymbol: '€', exchangeRate: 0.00059 },
  KE: { country: 'Kenya', currency: 'KES', language: 'en', currencySymbol: 'KSh', exchangeRate: 0.083 },
  ZA: { country: 'South Africa', currency: 'ZAR', language: 'en', currencySymbol: 'R', exchangeRate: 0.012 },
  GH: { country: 'Ghana', currency: 'GHS', language: 'en', currencySymbol: '₵', exchangeRate: 0.0078 },
  PT: { country: 'Portugal', currency: 'EUR', language: 'pt', currencySymbol: '€', exchangeRate: 0.00059 },
  CN: { country: 'China', currency: 'USD', language: 'zh', currencySymbol: '$', exchangeRate: 0.00065 },
  AE: { country: 'UAE', currency: 'USD', language: 'ar', currencySymbol: '$', exchangeRate: 0.00065 },
};

const localeMap: Record<Language, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  es: 'es-ES',
  de: 'de-DE',
  pt: 'pt-PT',
  ar: 'ar-AE',
  zh: 'zh-CN',
  nl: 'nl-NL',
};

const languageNames: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  pt: 'Português',
  nl: 'Nederlands',
  ar: 'العربية',
  zh: '中文',
};

const currencyNames: Record<Currency, string> = {
  NGN: 'Nigerian Naira (₦)',
  USD: 'US Dollar ($)',
  EUR: 'Euro (€)',
  GBP: 'British Pound (£)',
  KES: 'Kenyan Shilling (KSh)',
  ZAR: 'South African Rand (R)',
  GHS: 'Ghanaian Cedi (₵)',
};

interface LocalizationContextType {
  language: Language;
  currency: Currency;
  currencySymbol: string;
  country: string;
  setLanguage: (lang: Language) => void;
  setCurrency: (curr: Currency) => void;
  formatPrice: (priceInNGN: number) => string;
  languages: typeof languageNames;
  currencies: typeof currencyNames;
  detectLocation: () => Promise<void>;
  t: (key: TranslationKey) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('tranyer_language');
    return (saved as Language) || 'en';
  });
  
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('tranyer_currency');
    return (saved as Currency) || 'NGN';
  });
  
  const [country, setCountry] = useState(() => {
    return localStorage.getItem('tranyer_country') || 'Nigeria';
  });
  
  const [currencySymbol, setCurrencySymbol] = useState(() => {
    const curr = localStorage.getItem('tranyer_currency') as Currency || 'NGN';
    return Object.values(markets).find(m => m.currency === curr)?.currencySymbol || '₦';
  });

  const detectLocation = async () => {
    try {
      // Using a free IP geolocation API
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const countryCode = data.country_code;
      
      if (markets[countryCode]) {
        const market = markets[countryCode];
        setLanguageState(market.language);
        setCurrencyState(market.currency);
        setCountry(market.country);
        setCurrencySymbol(market.currencySymbol);
        
        localStorage.setItem('tranyer_language', market.language);
        localStorage.setItem('tranyer_currency', market.currency);
        localStorage.setItem('tranyer_country', market.country);
      }
    } catch (error) {
      console.log('Location detection failed, using defaults');
    }
  };

  useEffect(() => {
    // Only auto-detect if user hasn't set preferences
    const hasPreferences = localStorage.getItem('tranyer_currency');
    if (!hasPreferences) {
      detectLocation();
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('tranyer_language', lang);
  };

  const setCurrency = (curr: Currency) => {
    setCurrencyState(curr);
    const market = Object.values(markets).find(m => m.currency === curr);
    if (market) {
      setCurrencySymbol(market.currencySymbol);
      setCountry(market.country);
    }
    localStorage.setItem('tranyer_currency', curr);
  };

  const formatPrice = (priceInNGN: number): string => {
    const market = Object.values(markets).find((m) => m.currency === currency);
    const rate = market?.exchangeRate || 1;
    const locale = localeMap[language] || 'en-US';
    const convertedPrice = (priceInNGN / 100) * rate;

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(convertedPrice);
  };

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LocalizationContext.Provider 
      value={{ 
        language, 
        currency, 
        currencySymbol,
        country,
        setLanguage, 
        setCurrency, 
        formatPrice,
        languages: languageNames,
        currencies: currencyNames,
        detectLocation,
        t,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
