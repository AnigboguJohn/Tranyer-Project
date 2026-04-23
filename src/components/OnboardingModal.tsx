import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Globe, 
  DollarSign, 
  ShoppingBag, 
  Store, 
  Megaphone, 
  Compass,
  Bell,
  BellOff,
  Bot,
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  X
} from 'lucide-react';
import { useOnboarding, MarketplaceRole } from '@/contexts/OnboardingContext';
import { useLocalization, Language, Currency } from '@/contexts/LocalizationContext';
import { cn } from '@/lib/utils';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

const currencies: { code: Currency; name: string; symbol: string }[] = [
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
  { code: 'GHS', name: 'Ghanaian Cedi', symbol: '₵' },
];

const roles: { id: MarketplaceRole; name: string; description: string; icon: React.ReactNode }[] = [
  { id: 'buyer', name: 'Shop & Buy', description: 'Find amazing deals and products', icon: <ShoppingBag className="w-6 h-6" /> },
  { id: 'seller', name: 'Sell Products', description: 'List and sell your products', icon: <Store className="w-6 h-6" /> },
  { id: 'advertiser', name: 'Advertise Brand', description: 'Promote your brand and products', icon: <Megaphone className="w-6 h-6" /> },
  { id: 'explorer', name: 'Just Exploring', description: 'Browse and discover the marketplace', icon: <Compass className="w-6 h-6" /> },
];

const OnboardingModal = () => {
  const { 
    showOnboarding, 
    setShowOnboarding, 
    currentStep, 
    totalSteps, 
    nextStep, 
    prevStep,
    onboardingData,
    updateOnboardingData,
    completeOnboarding,
    skipOnboarding
  } = useOnboarding();
  
  const { setLanguage, setCurrency } = useLocalization();

  const progress = (currentStep / totalSteps) * 100;

  const handleLanguageSelect = (lang: Language) => {
    updateOnboardingData({ language: lang });
    setLanguage(lang);
  };

  const handleCurrencySelect = (curr: Currency) => {
    updateOnboardingData({ currency: curr });
    setCurrency(curr);
  };

  const handleRoleSelect = (role: MarketplaceRole) => {
    updateOnboardingData({ role });
  };

  const handleComplete = () => {
    completeOnboarding();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 text-center">
            <div className="inline-flex p-4 rounded-full bg-primary/10">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Welcome to Tranyer!</h2>
              <p className="text-muted-foreground mt-2">
                Africa's premier e-commerce marketplace. Let's personalize your experience in just a few steps.
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <p className="text-sm font-medium">What you'll set up:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Choose your language</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Select your currency</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Tell us how you'll use Tranyer</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Configure notifications & AI assistant</li>
              </ul>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Choose Your Language</h2>
              <p className="text-muted-foreground mt-1">Select your preferred language for the platform</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border-2 transition-all hover:border-primary/50",
                    onboardingData.language === lang.code 
                      ? "border-primary bg-primary/5" 
                      : "border-border"
                  )}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {onboardingData.language === lang.code && (
                    <Check className="w-4 h-4 text-primary ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Select Your Currency</h2>
              <p className="text-muted-foreground mt-1">All prices will be displayed in your selected currency</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => handleCurrencySelect(curr.code)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border-2 transition-all hover:border-primary/50",
                    onboardingData.currency === curr.code 
                      ? "border-primary bg-primary/5" 
                      : "border-border"
                  )}
                >
                  <span className="text-xl font-bold text-primary">{curr.symbol}</span>
                  <div className="text-left">
                    <p className="font-medium text-sm">{curr.code}</p>
                    <p className="text-xs text-muted-foreground">{curr.name}</p>
                  </div>
                  {onboardingData.currency === curr.code && (
                    <Check className="w-4 h-4 text-primary ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold">How will you use Tranyer?</h2>
              <p className="text-muted-foreground mt-1">This helps us personalize your experience</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-lg border-2 transition-all hover:border-primary/50 text-left",
                    onboardingData.role === role.id 
                      ? "border-primary bg-primary/5" 
                      : "border-border"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-full",
                    onboardingData.role === role.id ? "bg-primary text-primary-foreground" : "bg-muted"
                  )}>
                    {role.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{role.name}</p>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                  {onboardingData.role === role.id && (
                    <Check className="w-5 h-5 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Final Preferences</h2>
              <p className="text-muted-foreground mt-1">Configure notifications and AI assistance</p>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => updateOnboardingData({ notificationsEnabled: !onboardingData.notificationsEnabled })}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all hover:border-primary/50 text-left",
                  onboardingData.notificationsEnabled ? "border-primary bg-primary/5" : "border-border"
                )}
              >
                <div className={cn(
                  "p-3 rounded-full",
                  onboardingData.notificationsEnabled ? "bg-primary text-primary-foreground" : "bg-muted"
                )}>
                  {onboardingData.notificationsEnabled ? <Bell className="w-6 h-6" /> : <BellOff className="w-6 h-6" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Get alerts for deals, orders, and updates</p>
                </div>
                <div className={cn(
                  "w-12 h-6 rounded-full transition-colors",
                  onboardingData.notificationsEnabled ? "bg-primary" : "bg-muted"
                )}>
                  <div className={cn(
                    "w-5 h-5 rounded-full bg-white mt-0.5 transition-transform",
                    onboardingData.notificationsEnabled ? "translate-x-6" : "translate-x-0.5"
                  )} />
                </div>
              </button>
              
              <button
                onClick={() => updateOnboardingData({ aiAssistantEnabled: !onboardingData.aiAssistantEnabled })}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all hover:border-primary/50 text-left",
                  onboardingData.aiAssistantEnabled ? "border-primary bg-primary/5" : "border-border"
                )}
              >
                <div className={cn(
                  "p-3 rounded-full",
                  onboardingData.aiAssistantEnabled ? "bg-primary text-primary-foreground" : "bg-muted"
                )}>
                  <Bot className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">AI Shopping Assistant</p>
                  <p className="text-sm text-muted-foreground">Get personalized product recommendations</p>
                </div>
                <div className={cn(
                  "w-12 h-6 rounded-full transition-colors",
                  onboardingData.aiAssistantEnabled ? "bg-primary" : "bg-muted"
                )}>
                  <div className={cn(
                    "w-5 h-5 rounded-full bg-white mt-0.5 transition-transform",
                    onboardingData.aiAssistantEnabled ? "translate-x-6" : "translate-x-0.5"
                  )} />
                </div>
              </button>
            </div>
            
            <div className="bg-success/10 border border-success/20 rounded-lg p-4 text-center">
              <p className="text-success font-medium">🎉 You're all set!</p>
              <p className="text-sm text-muted-foreground mt-1">Click "Get Started" to explore Tranyer</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Dialog open={showOnboarding} onOpenChange={setShowOnboarding}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
        {/* Progress bar */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
            <Button variant="ghost" size="sm" onClick={skipOnboarding} className="text-muted-foreground">
              Skip <X className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {renderStep()}
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between p-6 border-t bg-muted/30">
          <Button 
            variant="ghost" 
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          
          {currentStep < totalSteps ? (
            <Button onClick={nextStep}>
              Continue
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handleComplete} className="bg-success hover:bg-success/90">
              Get Started
              <Sparkles className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
