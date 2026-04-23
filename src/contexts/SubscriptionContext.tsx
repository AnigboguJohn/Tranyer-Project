import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export type SubscriptionPlan = 'freemium' | 'premium' | 'business';

interface PlanFeatures {
  maxProducts: number;
  maxAds: number;
  analytics: boolean;
  aiAssistant: boolean;
  prioritySupport: boolean;
  customBranding: boolean;
  apiAccess: boolean;
}

const planFeatures: Record<SubscriptionPlan, PlanFeatures> = {
  freemium: {
    maxProducts: 10,
    maxAds: 2,
    analytics: false,
    aiAssistant: true,
    prioritySupport: false,
    customBranding: false,
    apiAccess: false,
  },
  premium: {
    maxProducts: 100,
    maxAds: 20,
    analytics: true,
    aiAssistant: true,
    prioritySupport: true,
    customBranding: false,
    apiAccess: false,
  },
  business: {
    maxProducts: -1, // unlimited
    maxAds: -1,
    analytics: true,
    aiAssistant: true,
    prioritySupport: true,
    customBranding: true,
    apiAccess: true,
  },
};

const planPricing: Record<SubscriptionPlan, { monthly: number; yearly: number }> = {
  freemium: { monthly: 0, yearly: 0 },
  premium: { monthly: 9999, yearly: 99999 },
  business: { monthly: 29999, yearly: 299999 },
};

interface SubscriptionContextType {
  plan: SubscriptionPlan;
  features: PlanFeatures;
  pricing: typeof planPricing;
  trialEndsAt: Date | null;
  daysRemaining: number;
  isTrialActive: boolean;
  upgradePlan: (newPlan: SubscriptionPlan) => void;
  canUseFeature: (feature: keyof PlanFeatures) => boolean;
  extendTrial: (days: number) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  
  const [plan, setPlan] = useState<SubscriptionPlan>(() => {
    const saved = localStorage.getItem('tranyer_subscription_plan');
    return (saved as SubscriptionPlan) || 'freemium';
  });

  const [trialEndsAt, setTrialEndsAt] = useState<Date | null>(() => {
    const saved = localStorage.getItem('tranyer_trial_ends');
    if (saved) return new Date(saved);
    // Default 30-day trial for new users
    const defaultTrial = new Date();
    defaultTrial.setDate(defaultTrial.getDate() + 30);
    return defaultTrial;
  });

  const [daysRemaining, setDaysRemaining] = useState(0);
  const [isTrialActive, setIsTrialActive] = useState(true);

  useEffect(() => {
    if (trialEndsAt) {
      const now = new Date();
      const diff = Math.ceil((trialEndsAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      setDaysRemaining(Math.max(0, diff));
      setIsTrialActive(diff > 0 && plan === 'freemium');
    }
  }, [trialEndsAt, plan]);

  useEffect(() => {
    localStorage.setItem('tranyer_subscription_plan', plan);
    if (trialEndsAt) {
      localStorage.setItem('tranyer_trial_ends', trialEndsAt.toISOString());
    }
  }, [plan, trialEndsAt]);

  const upgradePlan = (newPlan: SubscriptionPlan) => {
    setPlan(newPlan);
    if (newPlan !== 'freemium') {
      setTrialEndsAt(null);
    }
  };

  const canUseFeature = (feature: keyof PlanFeatures): boolean => {
    const value = planFeatures[plan][feature];
    if (typeof value === 'boolean') return value;
    return value !== 0;
  };

  const extendTrial = (days: number) => {
    const newEnd = trialEndsAt ? new Date(trialEndsAt) : new Date();
    newEnd.setDate(newEnd.getDate() + days);
    setTrialEndsAt(newEnd);
  };

  return (
    <SubscriptionContext.Provider
      value={{
        plan,
        features: planFeatures[plan],
        pricing: planPricing,
        trialEndsAt,
        daysRemaining,
        isTrialActive,
        upgradePlan,
        canUseFeature,
        extendTrial,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};
