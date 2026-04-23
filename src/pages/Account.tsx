import { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
  Gift,
  ShoppingBag,
  Megaphone,
  Bot,
  TrendingUp,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import SubscriptionCard from '@/components/account/SubscriptionCard';

const menuItems = [
  { icon: User, label: 'Profile', href: '/account/profile' },
  { icon: Package, label: 'Orders', href: '/account/orders' },
  { icon: Heart, label: 'Wishlist', href: '/wishlist' },
  { icon: MapPin, label: 'Addresses', href: '/account/addresses' },
  { icon: CreditCard, label: 'Payment Methods', href: '/account/payment' },
  { icon: Gift, label: 'Rewards & Cashback', href: '/account/rewards' },
  { icon: Settings, label: 'Settings', href: '/account/settings' },
];

const sellerItems = [
  { icon: ShoppingBag, label: 'Sell an Item', href: '/account/sell', color: 'text-green-600' },
  { icon: Megaphone, label: 'Advertise Your Brand', href: '/account/advertise', color: 'text-blue-600' },
  { icon: Bot, label: 'AI Sales Assistant', href: '/account/ai-assistant', color: 'text-purple-600' },
];

const recentOrders = [
  { id: 'ORD-001234', date: '2025-01-10', status: 'delivered', total: 125999, items: 3 },
  { id: 'ORD-001233', date: '2025-01-08', status: 'shipped', total: 89500, items: 2 },
  { id: 'ORD-001232', date: '2025-01-05', status: 'processing', total: 256000, items: 1 },
];

const topSales = [
  { name: 'iPhone 15 Pro Max', sales: 45, revenue: 67500000 },
  { name: 'Samsung Galaxy S24', sales: 38, revenue: 45600000 },
  { name: 'MacBook Pro M3', sales: 22, revenue: 88000000 },
];

const statusColors: Record<string, string> = {
  pending: 'bg-muted text-muted-foreground',
  processing: 'bg-accent/20 text-accent-foreground',
  shipped: 'bg-primary/20 text-primary',
  delivered: 'bg-green-100 text-green-700',
  cancelled: 'bg-destructive/20 text-destructive',
};

const Account = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const action = searchParams.get('action');

  // Handle action from URL (from ad billboards)
  if (action === 'sell') {
    navigate('/account/sell');
    return null;
  }
  if (action === 'advertise') {
    navigate('/account/advertise');
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out successfully');
    navigate('/');
  };

  const userData = {
    name: user?.user_metadata?.full_name || 'User',
    email: user?.email || 'user@example.com',
    avatar: user?.user_metadata?.avatar_url || '',
  };

  return (
    <Layout>
      <div className="container py-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-card rounded-xl p-6">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={userData.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                    {userData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">{userData.name}</h2>
                  <p className="text-sm text-muted-foreground">{userData.email}</p>
                </div>
              </div>

              {/* Main Menu */}
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                  </Link>
                ))}
                <button 
                  onClick={handleSignOut}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-destructive/10 text-destructive w-full transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>

            {/* Seller Menu */}
            <div className="bg-card rounded-xl p-6">
              <h3 className="font-display font-bold mb-4">Seller Tools</h3>
              <nav className="space-y-1">
                {sellerItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Subscription Card */}
            <SubscriptionCard />

            {/* Welcome Banner */}
            <div className="promo-gradient rounded-xl p-6 md:p-8 text-white">
              <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Welcome back, {userData.name.split(' ')[0]}!
              </h1>
              <p className="text-white/80">
                Manage your orders, wishlist, and account settings
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">Total Orders</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">Wishlist Items</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">₦2.5K</p>
                <p className="text-sm text-muted-foreground">Cashback Earned</p>
              </div>
              <div className="bg-card rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Active Coupons</p>
              </div>
            </div>

            {/* Top Sales */}
            <div className="bg-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-bold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Top Sales
                </h2>
                <Link to="/account/analytics" className="text-primary text-sm hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {topSales.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                        #{index + 1}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.sales} units</p>
                      <p className="text-sm text-muted-foreground">₦{(item.revenue / 100).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-bold">Recent Orders</h2>
                <Link to="/account/orders" className="text-primary text-sm hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.date).toLocaleDateString('en-NG', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                        {' · '}
                        {order.items} item{order.items > 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${
                          statusColors[order.status]
                        }`}
                      >
                        {order.status}
                      </span>
                      <p className="font-medium mt-1">
                        ₦{(order.total / 100).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
