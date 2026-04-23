import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Settings as SettingsIcon, ChevronLeft, Globe, CreditCard, Shield, Bell, 
  Palette, ToggleLeft, Save, RefreshCw
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const AdminSettings = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [settings, setSettings] = useState({
    // Localization
    defaultLanguage: 'en',
    defaultCurrency: 'NGN',
    autoDetectLocation: true,
    // Payment Gateways
    paystackEnabled: true,
    paystackPublicKey: 'pk_test_xxxxx',
    paystackSecretKey: '••••••••••••',
    stripeEnabled: true,
    stripePublicKey: 'pk_test_xxxxx',
    stripeSecretKey: '••••••••••••',
    cardPaymentsEnabled: true,
    bankTransferEnabled: true,
    // Security
    rateLimit: 100,
    maxLoginAttempts: 5,
    sessionTimeout: 30,
    deviceFingerprinting: true,
    ipTracking: true,
    fraudDetection: true,
    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    slackIntegration: false,
    // Feature Flags
    sellersEnabled: true,
    adsEnabled: true,
    reviewsEnabled: true,
    wishlistEnabled: true,
    aiAssistantEnabled: true,
    subscriptionsEnabled: true,
  });

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated');
    if (!auth) {
      navigate('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('admin_settings', JSON.stringify(settings));
      setIsSaving(false);
      toast.success('Settings saved successfully');
    }, 1000);
  };

  if (!isAuthenticated) return null;

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link to="/admin/dashboard" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-display text-3xl font-bold flex items-center gap-2">
                  <SettingsIcon className="w-8 h-8 text-primary" />
                  Admin Settings
                </h1>
                <p className="text-muted-foreground">Platform configuration & management</p>
              </div>
            </div>
            <Button onClick={handleSave} disabled={isSaving} className="gap-2">
              {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Save Changes
            </Button>
          </div>

          <Tabs defaultValue="localization" className="space-y-6">
            <TabsList className="grid grid-cols-2 lg:grid-cols-5 gap-2">
              <TabsTrigger value="localization">Localization</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>

            {/* Localization Tab */}
            <TabsContent value="localization">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" /> Localization Settings
                  </CardTitle>
                  <CardDescription>Configure default language, currency, and region settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Default Language</Label>
                      <Select value={settings.defaultLanguage} onValueChange={(v) => setSettings(s => ({ ...s, defaultLanguage: v }))}>
                        <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                          <SelectItem value="pt">Português</SelectItem>
                          <SelectItem value="nl">Nederlands</SelectItem>
                          <SelectItem value="ar">العربية</SelectItem>
                          <SelectItem value="zh">中文</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Default Currency</Label>
                      <Select value={settings.defaultCurrency} onValueChange={(v) => setSettings(s => ({ ...s, defaultCurrency: v }))}>
                        <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="NGN">Nigerian Naira (₦)</SelectItem>
                          <SelectItem value="USD">US Dollar ($)</SelectItem>
                          <SelectItem value="EUR">Euro (€)</SelectItem>
                          <SelectItem value="GBP">British Pound (£)</SelectItem>
                          <SelectItem value="GHS">Ghanaian Cedi (₵)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Auto-Detect User Location</p>
                      <p className="text-sm text-muted-foreground">Automatically set language and currency based on IP</p>
                    </div>
                    <Switch checked={settings.autoDetectLocation} onCheckedChange={(v) => setSettings(s => ({ ...s, autoDetectLocation: v }))} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payments Tab */}
            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" /> Payment Gateway Settings
                  </CardTitle>
                  <CardDescription>Configure payment providers and methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Paystack */}
                  <div className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant={settings.paystackEnabled ? 'default' : 'secondary'}>Paystack</Badge>
                        {settings.paystackEnabled && <span className="text-xs text-green-600">Active</span>}
                      </div>
                      <Switch checked={settings.paystackEnabled} onCheckedChange={(v) => setSettings(s => ({ ...s, paystackEnabled: v }))} />
                    </div>
                    {settings.paystackEnabled && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Public Key</Label>
                          <Input value={settings.paystackPublicKey} onChange={(e) => setSettings(s => ({ ...s, paystackPublicKey: e.target.value }))} className="mt-1" />
                        </div>
                        <div>
                          <Label>Secret Key</Label>
                          <Input type="password" value={settings.paystackSecretKey} onChange={(e) => setSettings(s => ({ ...s, paystackSecretKey: e.target.value }))} className="mt-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Stripe */}
                  <div className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant={settings.stripeEnabled ? 'default' : 'secondary'}>Stripe</Badge>
                        {settings.stripeEnabled && <span className="text-xs text-green-600">Active</span>}
                      </div>
                      <Switch checked={settings.stripeEnabled} onCheckedChange={(v) => setSettings(s => ({ ...s, stripeEnabled: v }))} />
                    </div>
                    {settings.stripeEnabled && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Public Key</Label>
                          <Input value={settings.stripePublicKey} onChange={(e) => setSettings(s => ({ ...s, stripePublicKey: e.target.value }))} className="mt-1" />
                        </div>
                        <div>
                          <Label>Secret Key</Label>
                          <Input type="password" value={settings.stripeSecretKey} onChange={(e) => setSettings(s => ({ ...s, stripeSecretKey: e.target.value }))} className="mt-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Other Methods */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <span className="font-medium">Card Payments</span>
                      <Switch checked={settings.cardPaymentsEnabled} onCheckedChange={(v) => setSettings(s => ({ ...s, cardPaymentsEnabled: v }))} />
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <span className="font-medium">Bank Transfer</span>
                      <Switch checked={settings.bankTransferEnabled} onCheckedChange={(v) => setSettings(s => ({ ...s, bankTransferEnabled: v }))} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" /> Security & Fraud Prevention
                  </CardTitle>
                  <CardDescription>Configure security settings and fraud detection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label>Rate Limit (requests/min)</Label>
                      <Input type="number" value={settings.rateLimit} onChange={(e) => setSettings(s => ({ ...s, rateLimit: parseInt(e.target.value) }))} className="mt-1" />
                    </div>
                    <div>
                      <Label>Max Login Attempts</Label>
                      <Input type="number" value={settings.maxLoginAttempts} onChange={(e) => setSettings(s => ({ ...s, maxLoginAttempts: parseInt(e.target.value) }))} className="mt-1" />
                    </div>
                    <div>
                      <Label>Session Timeout (mins)</Label>
                      <Input type="number" value={settings.sessionTimeout} onChange={(e) => setSettings(s => ({ ...s, sessionTimeout: parseInt(e.target.value) }))} className="mt-1" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { key: 'deviceFingerprinting', label: 'Device Fingerprinting', desc: 'Track devices to detect fraud' },
                      { key: 'ipTracking', label: 'IP Tracking', desc: 'Monitor IP addresses for suspicious activity' },
                      { key: 'fraudDetection', label: 'Fraud Detection', desc: 'Automatic fraud pattern detection' },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                        <Switch checked={settings[item.key as keyof typeof settings] as boolean} onCheckedChange={(v) => setSettings(s => ({ ...s, [item.key]: v }))} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" /> Notification Settings
                  </CardTitle>
                  <CardDescription>Configure system notifications and alerts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { key: 'emailNotifications', label: 'Email Notifications', desc: 'Send order and system alerts via email' },
                    { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Send critical alerts via SMS' },
                    { key: 'slackIntegration', label: 'Slack Integration', desc: 'Post alerts to Slack channel' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <Switch checked={settings[item.key as keyof typeof settings] as boolean} onCheckedChange={(v) => setSettings(s => ({ ...s, [item.key]: v }))} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ToggleLeft className="w-5 h-5" /> Feature Flags
                  </CardTitle>
                  <CardDescription>Enable or disable platform features</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { key: 'sellersEnabled', label: 'Seller Marketplace', desc: 'Allow third-party sellers' },
                    { key: 'adsEnabled', label: 'Advertisements', desc: 'Display billboards and sponsored content' },
                    { key: 'reviewsEnabled', label: 'Product Reviews', desc: 'Allow customers to leave reviews' },
                    { key: 'wishlistEnabled', label: 'Wishlist', desc: 'Allow users to save products' },
                    { key: 'aiAssistantEnabled', label: 'AI Assistant', desc: 'Enable AI-powered support' },
                    { key: 'subscriptionsEnabled', label: 'Subscriptions', desc: 'Enable premium subscription plans' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <Switch checked={settings[item.key as keyof typeof settings] as boolean} onCheckedChange={(v) => setSettings(s => ({ ...s, [item.key]: v }))} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AdminSettings;

