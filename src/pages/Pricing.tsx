import { useState } from 'react';
import { Check, X, Sparkles, Crown, Building, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useSubscription, SubscriptionPlan } from '@/contexts/SubscriptionContext';
import { useLocalization } from '@/contexts/LocalizationContext';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const plans = [
  {
    id: 'freemium' as SubscriptionPlan,
    name: 'Freemium',
    icon: Sparkles,
    description: 'Perfect for getting started',
    color: 'from-slate-500 to-slate-600',
    features: {
      maxProducts: 10,
      maxAds: 2,
      analytics: false,
      aiAssistant: true,
      prioritySupport: false,
      customBranding: false,
      apiAccess: false,
      commission: '10%',
    },
  },
  {
    id: 'premium' as SubscriptionPlan,
    name: 'Premium',
    icon: Crown,
    description: 'Best for growing sellers',
    color: 'from-primary to-orange-500',
    popular: true,
    features: {
      maxProducts: 100,
      maxAds: 20,
      analytics: true,
      aiAssistant: true,
      prioritySupport: true,
      customBranding: false,
      apiAccess: false,
      commission: '5%',
    },
  },
  {
    id: 'business' as SubscriptionPlan,
    name: 'Business',
    icon: Building,
    description: 'For large-scale operations',
    color: 'from-purple-600 to-indigo-600',
    features: {
      maxProducts: -1,
      maxAds: -1,
      analytics: true,
      aiAssistant: true,
      prioritySupport: true,
      customBranding: true,
      apiAccess: true,
      commission: '2%',
    },
  },
];

const featureLabels = [
  { key: 'maxProducts', label: 'Product Listings', format: (v: number) => v === -1 ? 'Unlimited' : `Up to ${v}` },
  { key: 'maxAds', label: 'Ad Campaigns', format: (v: number) => v === -1 ? 'Unlimited' : `Up to ${v}` },
  { key: 'commission', label: 'Platform Commission', format: (v: string) => v },
  { key: 'analytics', label: 'Advanced Analytics', format: (v: boolean) => v },
  { key: 'aiAssistant', label: 'AI Sales Assistant', format: (v: boolean) => v },
  { key: 'prioritySupport', label: 'Priority Support', format: (v: boolean) => v },
  { key: 'customBranding', label: 'Custom Branding', format: (v: boolean) => v },
  { key: 'apiAccess', label: 'API Access', format: (v: boolean) => v },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { plan: currentPlan, pricing, upgradePlan, daysRemaining, isTrialActive } = useSubscription();
  const { formatPrice } = useLocalization();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSelectPlan = (planId: SubscriptionPlan) => {
    if (!user) {
      toast.info('Please sign in to upgrade your plan');
      navigate('/auth');
      return;
    }

    if (planId === currentPlan) {
      toast.info('You are already on this plan');
      return;
    }

    // For demo purposes, just upgrade the plan
    upgradePlan(planId);
    toast.success(`Successfully upgraded to ${planId.charAt(0).toUpperCase() + planId.slice(1)} plan!`);
  };

  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan for your business. All plans include a 30-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-muted rounded-full">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly <span className="text-primary">(Save 17%)</span>
            </span>
          </div>
        </div>

        {/* Current Plan Status */}
        {user && (
          <div className="max-w-md mx-auto mb-12 p-4 bg-primary/10 rounded-xl text-center">
            <p className="text-sm text-muted-foreground">Current Plan</p>
            <p className="font-bold text-lg capitalize">{currentPlan}</p>
            {isTrialActive && (
              <p className="text-sm text-primary mt-1">
                <Zap className="inline w-4 h-4 mr-1" />
                {daysRemaining} days remaining in trial
              </p>
            )}
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => {
            const monthlyPrice = pricing[plan.id].monthly;
            const yearlyPrice = pricing[plan.id].yearly;
            const displayPrice = isYearly ? yearlyPrice / 12 : monthlyPrice;
            const isCurrentPlan = currentPlan === plan.id;

            return (
              <div
                key={plan.id}
                className={`relative bg-card border rounded-2xl p-6 ${
                  plan.popular ? 'border-primary shadow-lg scale-105' : ''
                } ${isCurrentPlan ? 'ring-2 ring-primary' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {isCurrentPlan && (
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    CURRENT
                  </div>
                )}

                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} mb-4`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  {displayPrice === 0 ? (
                    <div className="text-4xl font-bold">Free</div>
                  ) : (
                    <>
                      <div className="text-4xl font-bold">
                        {formatPrice(displayPrice)}
                        <span className="text-lg font-normal text-muted-foreground">/mo</span>
                      </div>
                      {isYearly && (
                        <p className="text-sm text-muted-foreground">
                          Billed {formatPrice(yearlyPrice)} yearly
                        </p>
                      )}
                    </>
                  )}
                </div>

                <Button
                  className={`w-full mb-6 ${plan.popular ? 'bg-gradient-to-r ' + plan.color : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => handleSelectPlan(plan.id)}
                  disabled={isCurrentPlan}
                >
                  {isCurrentPlan ? 'Current Plan' : displayPrice === 0 ? 'Get Started' : 'Upgrade Now'}
                </Button>

                <ul className="space-y-3">
                  {featureLabels.map((feature) => {
                    const value = plan.features[feature.key as keyof typeof plan.features];
                    const formatted = feature.format(value as never);
                    const isIncluded = typeof formatted === 'boolean' ? formatted : true;

                    return (
                      <li key={feature.key} className="flex items-center gap-2 text-sm">
                        {isIncluded ? (
                          <Check className="w-4 h-4 text-green-500 shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground shrink-0" />
                        )}
                        <span className={isIncluded ? '' : 'text-muted-foreground'}>
                          {typeof formatted === 'boolean' ? feature.label : `${feature.label}: ${formatted}`}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I switch plans anytime?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                q: 'What happens after the free trial?',
                a: 'After your 30-day trial, you\'ll continue on the Freemium plan with limited features. Upgrade anytime to unlock more.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 14-day money-back guarantee on all paid plans. No questions asked.',
              },
              {
                q: 'Can I extend my trial?',
                a: 'Contact our support team and they can extend your trial based on your needs.',
              },
            ].map((faq, i) => (
              <details key={i} className="p-4 bg-card rounded-xl border group">
                <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
