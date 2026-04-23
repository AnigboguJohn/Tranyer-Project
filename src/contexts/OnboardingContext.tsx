import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export type MarketplaceRole = 'buyer' | 'seller' | 'advertiser' | 'explorer';

interface OnboardingData {
  language: string;
  currency: string;
  role: MarketplaceRole;
  notificationsEnabled: boolean;
  aiAssistantEnabled: boolean;
  completedAt?: Date;
}

interface OnboardingContextType {
  isOnboardingComplete: boolean;
  currentStep: number;
  totalSteps: number;
  onboardingData: OnboardingData;
  showOnboarding: boolean;
  setShowOnboarding: (show: boolean) => void;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateOnboardingData: (data: Partial<OnboardingData>) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  skipOnboarding: () => void;
}

const defaultOnboardingData: OnboardingData = {
  language: 'en',
  currency: 'NGN',
  role: 'buyer',
  notificationsEnabled: true,
  aiAssistantEnabled: true,
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const totalSteps = 5;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(() => {
    const saved = localStorage.getItem('tranyer_onboarding_complete');
    return saved === 'true';
  });
  const [onboardingData, setOnboardingData] = useState<OnboardingData>(() => {
    const saved = localStorage.getItem('tranyer_onboarding_data');
    return saved ? JSON.parse(saved) : defaultOnboardingData;
  });

  // Trigger onboarding after first login
  useEffect(() => {
    if (user && !isOnboardingComplete) {
      // Small delay to ensure smooth transition after login
      const timer = setTimeout(() => {
        setShowOnboarding(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [user, isOnboardingComplete]);

  const setStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateOnboardingData = (data: Partial<OnboardingData>) => {
    setOnboardingData(prev => {
      const updated = { ...prev, ...data };
      localStorage.setItem('tranyer_onboarding_data', JSON.stringify(updated));
      return updated;
    });
  };

  const completeOnboarding = () => {
    const completedData = { ...onboardingData, completedAt: new Date() };
    setOnboardingData(completedData);
    setIsOnboardingComplete(true);
    setShowOnboarding(false);
    localStorage.setItem('tranyer_onboarding_complete', 'true');
    localStorage.setItem('tranyer_onboarding_data', JSON.stringify(completedData));
    
    // Apply preferences
    localStorage.setItem('tranyer_language', completedData.language);
    localStorage.setItem('tranyer_currency', completedData.currency);
    localStorage.setItem('tranyer_user_role', completedData.role);
  };

  const resetOnboarding = () => {
    setCurrentStep(1);
    setIsOnboardingComplete(false);
    setOnboardingData(defaultOnboardingData);
    localStorage.removeItem('tranyer_onboarding_complete');
    localStorage.removeItem('tranyer_onboarding_data');
  };

  const skipOnboarding = () => {
    completeOnboarding();
  };

  return (
    <OnboardingContext.Provider
      value={{
        isOnboardingComplete,
        currentStep,
        totalSteps,
        onboardingData,
        showOnboarding,
        setShowOnboarding,
        setStep,
        nextStep,
        prevStep,
        updateOnboardingData,
        completeOnboarding,
        resetOnboarding,
        skipOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
