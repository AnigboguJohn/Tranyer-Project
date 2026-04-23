import { Link } from 'react-router-dom';
import { Zap, Crown, Building, Sparkles, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useSubscription, SubscriptionPlan } from '@/contexts/SubscriptionContext';

const planIcons: Record<SubscriptionPlan, React.ElementType> = {
  freemium: Sparkles,
  premium: Crown,
  business: Building,
};

const planColors: Record<SubscriptionPlan, string> = {
  freemium: 'from-slate-500 to-slate-600',
  premium: 'from-primary to-orange-500',
  business: 'from-purple-600 to-indigo-600',
};

const SubscriptionCard = () => {
  const { plan, features, daysRemaining, isTrialActive, trialEndsAt } = useSubscription();
  const Icon = planIcons[plan];

  const trialProgress = isTrialActive ? ((30 - daysRemaining) / 30) * 100 : 100;

  return (
    <div className="bg-card rounded-xl border overflow-hidden">
      {/* Header */}
      <div className={`p-4 bg-gradient-to-r ${planColors[plan]} text-white`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/20">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm opacity-80">Current Plan</p>
              <p className="font-bold text-lg capitalize">{plan}</p>
            </div>
          </div>
          {isTrialActive && (
            <div className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Trial
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Trial Progress */}
        {isTrialActive && (
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Trial Progress</span>
              <span className="font-medium">{daysRemaining} days left</span>
            </div>
            <Progress value={trialProgress} className="h-2" />
            {trialEndsAt && (
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Ends on {trialEndsAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
            )}
          </div>
        )}

        {/* Feature Limits */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-2xl font-bold">{features.maxProducts === -1 ? '∞' : features.maxProducts}</p>
            <p className="text-xs text-muted-foreground">Product Limit</p>
          </div>
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-2xl font-bold">{features.maxAds === -1 ? '∞' : features.maxAds}</p>
            <p className="text-xs text-muted-foreground">Ad Campaigns</p>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Analytics</span>
            <span className={features.analytics ? 'text-green-600 font-medium' : 'text-muted-foreground'}>
              {features.analytics ? 'Included' : 'Not Included'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Priority Support</span>
            <span className={features.prioritySupport ? 'text-green-600 font-medium' : 'text-muted-foreground'}>
              {features.prioritySupport ? 'Included' : 'Not Included'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">API Access</span>
            <span className={features.apiAccess ? 'text-green-600 font-medium' : 'text-muted-foreground'}>
              {features.apiAccess ? 'Included' : 'Not Included'}
            </span>
          </div>
        </div>

        {/* Upgrade CTA */}
        {plan !== 'business' && (
          <Link to="/pricing">
            <Button className="w-full gap-2" variant={isTrialActive ? 'default' : 'outline'}>
              {isTrialActive ? 'Upgrade Before Trial Ends' : 'Upgrade Plan'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
