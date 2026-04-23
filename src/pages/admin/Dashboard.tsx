import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Shield, Users, ShoppingBag, Megaphone, DollarSign, AlertTriangle, 
  TrendingUp, Settings, ChevronLeft, Eye, Ban, CheckCircle, LogOut,
  FileText, Palette, Globe, BookOpen, BarChart3, PieChart
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'buyer', status: 'active', orders: 12, joined: '2024-06-15' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'seller', status: 'active', orders: 0, joined: '2024-08-20' },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'buyer', status: 'suspended', orders: 3, joined: '2024-11-10' },
  { id: '4', name: 'Sarah Wilson', email: 'sarah@example.com', role: 'seller', status: 'active', orders: 0, joined: '2025-01-05' },
  { id: '5', name: 'David Brown', email: 'david@example.com', role: 'buyer', status: 'active', orders: 28, joined: '2024-03-15' },
  { id: '6', name: 'Emily Chen', email: 'emily@example.com', role: 'seller', status: 'pending', orders: 0, joined: '2025-01-10' },
];

const sellers = [
  { id: '1', name: 'TechGadgets Store', owner: 'Jane Smith', products: 156, revenue: 4500000, rating: 4.8, status: 'verified' },
  { id: '2', name: 'Fashion Hub', owner: 'Sarah Wilson', products: 89, revenue: 2800000, rating: 4.5, status: 'verified' },
  { id: '3', name: 'Home Essentials', owner: 'Mark Davis', products: 234, revenue: 6200000, rating: 4.7, status: 'pending' },
  { id: '4', name: 'Beauty Palace', owner: 'Lisa Wong', products: 67, revenue: 1500000, rating: 4.2, status: 'verified' },
];

const ads = [
  { id: '1', name: 'Summer Sale Banner', type: 'internal', placement: 'hero', impressions: 45000, clicks: 1200, ctr: 2.67, revenue: 150000, status: 'active' },
  { id: '2', name: 'New Arrivals Promo', type: 'internal', placement: 'category', impressions: 28000, clicks: 850, ctr: 3.04, revenue: 85000, status: 'active' },
  { id: '3', name: 'Google Ads - Electronics', type: 'external', placement: 'sidebar', impressions: 120000, clicks: 3400, ctr: 2.83, revenue: 280000, status: 'active' },
  { id: '4', name: 'Meta Ads - Fashion', type: 'external', placement: 'feed', impressions: 95000, clicks: 2100, ctr: 2.21, revenue: 210000, status: 'paused' },
];

const fraudAlerts = [
  { id: '1', type: 'Multiple failed logins', user: 'unknown@temp.com', ip: '192.168.1.100', time: '5 mins ago', severity: 'high' },
  { id: '2', type: 'Suspicious cart behavior', user: 'test@example.com', ip: '10.0.0.50', time: '15 mins ago', severity: 'medium' },
  { id: '3', type: 'Unusual order pattern', user: 'buyer@mail.com', ip: '172.16.0.25', time: '1 hour ago', severity: 'low' },
  { id: '4', type: 'Multiple accounts same device', user: 'multi@fake.com', ip: '192.168.1.105', time: '2 hours ago', severity: 'high' },
  { id: '5', type: 'Payment fraud attempt', user: 'scammer@test.com', ip: '10.0.0.99', time: '3 hours ago', severity: 'high' },
];

const revenueData = {
  today: 450000,
  week: 2800000,
  month: 12500000,
  year: 145000000,
  growth: 15.5,
  commissions: 1875000,
  adRevenue: 725000,
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated');
    if (!auth) {
      navigate('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_session_start');
    toast.success('Logged out successfully');
    navigate('/admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link to="/" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-display text-3xl font-bold flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  Admin Dashboard
                </h1>
                <p className="text-muted-foreground">Platform management & analytics</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link to="/admin/settings">
                  <Settings className="w-4 h-4 mr-2" /> Settings
                </Link>
              </Button>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Users className="w-4 h-4" /> Total Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">12,547</p>
                <p className="text-xs text-green-600">+234 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" /> Active Sellers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">1,892</p>
                <p className="text-xs text-green-600">+45 this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Megaphone className="w-4 h-4" /> Active Ads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">156</p>
                <p className="text-xs text-muted-foreground">₦{(revenueData.adRevenue / 1000).toLocaleString()}K revenue</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-primary-foreground/80 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Monthly Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">₦{(revenueData.month / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-primary-foreground/80">+{revenueData.growth}% growth</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="users" className="space-y-6">
            <TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2">
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="sellers">Sellers</TabsTrigger>
              <TabsTrigger value="ads">Ads</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="fraud">Fraud</TabsTrigger>
              <TabsTrigger value="whitelabel">White-Label</TabsTrigger>
              <TabsTrigger value="docs">Docs</TabsTrigger>
            </TabsList>

            {/* Users Tab */}
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>View, suspend, and manage platform users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-medium">User</th>
                          <th className="text-left py-3 px-2 font-medium">Role</th>
                          <th className="text-left py-3 px-2 font-medium">Status</th>
                          <th className="text-left py-3 px-2 font-medium">Orders</th>
                          <th className="text-left py-3 px-2 font-medium">Joined</th>
                          <th className="text-right py-3 px-2 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className="border-b last:border-0">
                            <td className="py-3 px-2">
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </td>
                            <td className="py-3 px-2">
                              <Badge variant={user.role === 'seller' ? 'default' : 'secondary'}>{user.role}</Badge>
                            </td>
                            <td className="py-3 px-2">
                              <Badge variant={user.status === 'active' ? 'outline' : user.status === 'pending' ? 'secondary' : 'destructive'}>
                                {user.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-2">{user.orders}</td>
                            <td className="py-3 px-2 text-muted-foreground">{new Date(user.joined).toLocaleDateString()}</td>
                            <td className="py-3 px-2 text-right">
                              <Button size="sm" variant="ghost"><Eye className="w-4 h-4" /></Button>
                              {user.status === 'active' ? (
                                <Button size="sm" variant="ghost" className="text-destructive"><Ban className="w-4 h-4" /></Button>
                              ) : (
                                <Button size="sm" variant="ghost" className="text-green-600"><CheckCircle className="w-4 h-4" /></Button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sellers Tab */}
            <TabsContent value="sellers">
              <Card>
                <CardHeader>
                  <CardTitle>Seller Management</CardTitle>
                  <CardDescription>Approve, manage, and monitor seller performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-medium">Store</th>
                          <th className="text-left py-3 px-2 font-medium">Products</th>
                          <th className="text-left py-3 px-2 font-medium">Revenue</th>
                          <th className="text-left py-3 px-2 font-medium">Rating</th>
                          <th className="text-left py-3 px-2 font-medium">Status</th>
                          <th className="text-right py-3 px-2 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sellers.map((seller) => (
                          <tr key={seller.id} className="border-b last:border-0">
                            <td className="py-3 px-2">
                              <p className="font-medium">{seller.name}</p>
                              <p className="text-sm text-muted-foreground">{seller.owner}</p>
                            </td>
                            <td className="py-3 px-2">{seller.products}</td>
                            <td className="py-3 px-2">₦{(seller.revenue / 1000000).toFixed(1)}M</td>
                            <td className="py-3 px-2">
                              <span className="flex items-center gap-1">
                                ⭐ {seller.rating}
                              </span>
                            </td>
                            <td className="py-3 px-2">
                              <Badge variant={seller.status === 'verified' ? 'default' : 'secondary'}>
                                {seller.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-2 text-right">
                              <Button size="sm" variant="ghost"><Eye className="w-4 h-4" /></Button>
                              {seller.status === 'pending' && (
                                <Button size="sm" variant="ghost" className="text-green-600"><CheckCircle className="w-4 h-4" /></Button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Ads Tab */}
            <TabsContent value="ads">
              <Card>
                <CardHeader>
                  <CardTitle>Ad Management</CardTitle>
                  <CardDescription>Monitor billboard ads, placements, and performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-medium">Campaign</th>
                          <th className="text-left py-3 px-2 font-medium">Type</th>
                          <th className="text-left py-3 px-2 font-medium">Placement</th>
                          <th className="text-left py-3 px-2 font-medium">Impressions</th>
                          <th className="text-left py-3 px-2 font-medium">CTR</th>
                          <th className="text-left py-3 px-2 font-medium">Revenue</th>
                          <th className="text-left py-3 px-2 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ads.map((ad) => (
                          <tr key={ad.id} className="border-b last:border-0">
                            <td className="py-3 px-2 font-medium">{ad.name}</td>
                            <td className="py-3 px-2">
                              <Badge variant={ad.type === 'internal' ? 'default' : 'secondary'}>{ad.type}</Badge>
                            </td>
                            <td className="py-3 px-2">{ad.placement}</td>
                            <td className="py-3 px-2">{ad.impressions.toLocaleString()}</td>
                            <td className="py-3 px-2">{ad.ctr}%</td>
                            <td className="py-3 px-2">₦{(ad.revenue / 1000).toLocaleString()}K</td>
                            <td className="py-3 px-2">
                              <Badge variant={ad.status === 'active' ? 'outline' : 'secondary'}>{ad.status}</Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Revenue Tab */}
            <TabsContent value="revenue">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground">Today</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">₦{(revenueData.today / 1000).toLocaleString()}K</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground">This Week</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">₦{(revenueData.week / 1000000).toFixed(1)}M</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground">This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">₦{(revenueData.month / 1000000).toFixed(1)}M</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground">This Year</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">₦{(revenueData.year / 1000000).toFixed(0)}M</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="w-5 h-5" /> Revenue Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Product Commissions</span>
                        <span className="text-sm font-medium">₦{(revenueData.commissions / 1000000).toFixed(1)}M</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Ad Revenue</span>
                        <span className="text-sm font-medium">₦{(revenueData.adRevenue / 1000).toLocaleString()}K</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Premium Subscriptions</span>
                        <span className="text-sm font-medium">₦250K</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" /> Demo Revenue Simulation
                    </CardTitle>
                    <CardDescription>Projected earnings based on current growth</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Next Month Projection</p>
                      <p className="text-2xl font-bold">₦{((revenueData.month * 1.15) / 1000000).toFixed(1)}M</p>
                      <p className="text-xs text-green-600">+15% expected growth</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Q1 2025 Projection</p>
                      <p className="text-2xl font-bold">₦45.5M</p>
                      <p className="text-xs text-green-600">Based on current trajectory</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Fraud Tab */}
            <TabsContent value="fraud">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    Fraud Detection Alerts
                  </CardTitle>
                  <CardDescription>Monitor and investigate suspicious activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fraudAlerts.map((alert) => (
                      <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                        alert.severity === 'high' ? 'border-l-red-500 bg-red-50 dark:bg-red-900/20' :
                        alert.severity === 'medium' ? 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
                        'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{alert.type}</p>
                            <p className="text-sm text-muted-foreground">User: {alert.user} • IP: {alert.ip}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={alert.severity === 'high' ? 'destructive' : alert.severity === 'medium' ? 'secondary' : 'outline'}>
                              {alert.severity}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* White-Label Tab */}
            <TabsContent value="whitelabel">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5" /> Branding Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Logo</h4>
                      <p className="text-sm text-muted-foreground mb-2">Upload your brand logo (SVG, PNG recommended)</p>
                      <Button variant="outline" size="sm">Upload Logo</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Color Theme</h4>
                      <p className="text-sm text-muted-foreground mb-2">Primary: #F97316 (Orange)</p>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded bg-primary"></div>
                        <div className="w-8 h-8 rounded bg-secondary"></div>
                        <div className="w-8 h-8 rounded bg-accent"></div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Typography</h4>
                      <p className="text-sm text-muted-foreground">Display: Plus Jakarta Sans</p>
                      <p className="text-sm text-muted-foreground">Body: Inter</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5" /> Domain & Environment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Custom Domain</h4>
                      <p className="text-sm text-muted-foreground mb-2">Configure your custom domain</p>
                      <code className="text-xs bg-muted px-2 py-1 rounded">marketplace.yourdomain.com</code>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">API Keys</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ Payment Gateway (Paystack/Stripe)</li>
                        <li>✓ Email Service (Resend)</li>
                        <li>✓ SMS Service (Twilio)</li>
                        <li>○ Analytics (Google/Mixpanel)</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Environment</h4>
                      <Badge>Production</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Docs Tab */}
            <TabsContent value="docs">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" /> Seller Onboarding Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium">Step 1: Registration</h4>
                        <p className="text-sm text-muted-foreground">Complete seller profile with business details</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium">Step 2: Verification</h4>
                        <p className="text-sm text-muted-foreground">Submit business documents for verification</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium">Step 3: Store Setup</h4>
                        <p className="text-sm text-muted-foreground">Configure store name, logo, and policies</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium">Step 4: Product Listing</h4>
                        <p className="text-sm text-muted-foreground">Add products with images, pricing, inventory</p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium">Step 5: Go Live</h4>
                        <p className="text-sm text-muted-foreground">Launch store and start selling</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" /> Marketplace Policies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Commission Structure</h4>
                        <p className="text-sm text-muted-foreground">15% platform commission on all sales</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Payment Terms</h4>
                        <p className="text-sm text-muted-foreground">Weekly payouts to seller accounts</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Return Policy</h4>
                        <p className="text-sm text-muted-foreground">7-day return window for all products</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Prohibited Items</h4>
                        <p className="text-sm text-muted-foreground">No counterfeit, illegal, or harmful products</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-medium">Best Practices</h4>
                        <p className="text-sm text-muted-foreground">High-quality images, accurate descriptions, fast shipping</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
