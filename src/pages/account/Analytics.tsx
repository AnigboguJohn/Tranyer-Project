import { Link } from 'react-router-dom';
import { BarChart3, ChevronLeft, TrendingUp, DollarSign, ShoppingCart, Users, Eye, MousePointerClick } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const monthlyData = [
  { month: 'Aug', revenue: 1200000, orders: 45 },
  { month: 'Sep', revenue: 1450000, orders: 52 },
  { month: 'Oct', revenue: 1800000, orders: 68 },
  { month: 'Nov', revenue: 2200000, orders: 85 },
  { month: 'Dec', revenue: 3500000, orders: 120 },
  { month: 'Jan', revenue: 2100000, orders: 78 },
];

const topProducts = [
  { name: 'iPhone 15 Pro Max', sales: 45, revenue: 67500000 },
  { name: 'Samsung Galaxy S24', sales: 38, revenue: 45600000 },
  { name: 'MacBook Pro M3', sales: 22, revenue: 88000000 },
  { name: 'AirPods Pro', sales: 67, revenue: 26800000 },
  { name: 'iPad Pro 12.9"', sales: 18, revenue: 36000000 },
];

const Analytics = () => {
  const totalRevenue = monthlyData.reduce((sum, d) => sum + d.revenue, 0);
  const totalOrders = monthlyData.reduce((sum, d) => sum + d.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/account" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-display text-3xl font-bold flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-primary" />
              Analytics Dashboard
            </h1>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">₦{(totalRevenue / 100).toLocaleString()}</p>
                <p className="text-xs text-green-600">+12% from last period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Total Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{totalOrders}</p>
                <p className="text-xs text-green-600">+8% from last period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Avg Order Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">₦{(avgOrderValue / 100).toLocaleString()}</p>
                <p className="text-xs text-green-600">+5% from last period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Users className="w-4 h-4" /> Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs text-green-600">+15% from last period</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyData.map((data) => (
                    <div key={data.month} className="flex items-center gap-4">
                      <span className="w-10 text-sm font-medium">{data.month}</span>
                      <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${(data.revenue / 3500000) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-24 text-right">
                        ₦{(data.revenue / 1000000).toFixed(1)}M
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Products */}
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="font-medium">{product.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{product.sales} sold</p>
                        <p className="text-xs text-muted-foreground">₦{(product.revenue / 100).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ad Performance */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Ad Campaign Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Eye className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                  <p className="text-2xl font-bold">125,000</p>
                  <p className="text-sm text-muted-foreground">Total Impressions</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <MousePointerClick className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="text-2xl font-bold">4,250</p>
                  <p className="text-sm text-muted-foreground">Total Clicks</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <TrendingUp className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                  <p className="text-2xl font-bold">3.4%</p>
                  <p className="text-sm text-muted-foreground">Click-Through Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
