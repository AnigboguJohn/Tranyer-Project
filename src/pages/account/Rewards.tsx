import { Link } from 'react-router-dom';
import { Gift, ChevronLeft, Coins, Ticket, TrendingUp, Star } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const rewards = [
  { id: '1', type: 'cashback', title: '5% Cashback on Electronics', earned: 2500, date: '2025-01-10' },
  { id: '2', type: 'points', title: 'Purchase Points', earned: 500, date: '2025-01-08' },
  { id: '3', type: 'cashback', title: '10% First Order Bonus', earned: 5000, date: '2025-01-01' },
];

const coupons = [
  { id: '1', code: 'WELCOME20', discount: '20% OFF', minOrder: 10000, expiry: '2025-02-01', used: false },
  { id: '2', code: 'FREESHIP', discount: 'Free Shipping', minOrder: 5000, expiry: '2025-01-31', used: false },
  { id: '3', code: 'SAVE500', discount: '₦500 OFF', minOrder: 3000, expiry: '2025-01-20', used: true },
];

const Rewards = () => {
  const totalCashback = rewards.filter(r => r.type === 'cashback').reduce((sum, r) => sum + r.earned, 0);
  const totalPoints = rewards.filter(r => r.type === 'points').reduce((sum, r) => sum + r.earned, 0);
  const nextTier = 10000;
  const progress = (totalPoints / nextTier) * 100;

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/account" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-display text-3xl font-bold flex items-center gap-2">
              <Gift className="w-8 h-8 text-primary" />
              Rewards & Cashback
            </h1>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white">
              <Coins className="w-8 h-8 mb-2" />
              <p className="text-3xl font-bold">₦{totalCashback.toLocaleString()}</p>
              <p className="text-white/80">Total Cashback</p>
            </div>
            <div className="bg-card rounded-xl border p-6">
              <Star className="w-8 h-8 text-yellow-500 mb-2" />
              <p className="text-3xl font-bold">{totalPoints.toLocaleString()}</p>
              <p className="text-muted-foreground">Points Earned</p>
            </div>
            <div className="bg-card rounded-xl border p-6">
              <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
              <p className="text-lg font-bold mb-2">Silver Member</p>
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">{totalPoints}/{nextTier} to Gold</p>
            </div>
          </div>

          {/* Coupons */}
          <div className="bg-card rounded-xl border p-6 mb-8">
            <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
              <Ticket className="w-5 h-5 text-primary" />
              My Coupons
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {coupons.map((coupon) => (
                <div key={coupon.id} className={`border-2 border-dashed rounded-lg p-4 ${coupon.used ? 'opacity-50' : 'border-primary'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-lg text-primary">{coupon.discount}</p>
                      <p className="text-sm text-muted-foreground">Min. order ₦{coupon.minOrder.toLocaleString()}</p>
                    </div>
                    <code className="px-2 py-1 bg-muted rounded text-sm font-mono">{coupon.code}</code>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t">
                    <p className="text-xs text-muted-foreground">Expires: {new Date(coupon.expiry).toLocaleDateString()}</p>
                    {coupon.used ? (
                      <span className="text-xs text-muted-foreground">Used</span>
                    ) : (
                      <Button size="sm" variant="outline">Apply</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* History */}
          <div className="bg-card rounded-xl border p-6">
            <h2 className="font-display text-xl font-bold mb-4">Rewards History</h2>
            <div className="space-y-3">
              {rewards.map((reward) => (
                <div key={reward.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {reward.type === 'cashback' ? (
                      <Coins className="w-8 h-8 text-green-600" />
                    ) : (
                      <Star className="w-8 h-8 text-yellow-500" />
                    )}
                    <div>
                      <p className="font-medium">{reward.title}</p>
                      <p className="text-sm text-muted-foreground">{new Date(reward.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <p className="font-bold text-green-600">
                    +{reward.type === 'cashback' ? `₦${reward.earned.toLocaleString()}` : `${reward.earned} pts`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rewards;
