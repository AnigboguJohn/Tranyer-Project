import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings as SettingsIcon, ChevronLeft, Bell, Shield, Globe, Moon, Sun, Eye, EyeOff } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    orderUpdates: true,
    promotions: true,
    newsletter: false,
    twoFactorAuth: false,
    language: 'en',
    currency: 'NGN',
    darkMode: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSave = () => {
    toast.success('Settings saved successfully');
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/account" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-display text-3xl font-bold flex items-center gap-2">
              <SettingsIcon className="w-8 h-8 text-primary" />
              Settings
            </h1>
          </div>

          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifications
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch checked={settings.emailNotifications} onCheckedChange={(v) => setSettings(s => ({ ...s, emailNotifications: v }))} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Browser push notifications</p>
                  </div>
                  <Switch checked={settings.pushNotifications} onCheckedChange={(v) => setSettings(s => ({ ...s, pushNotifications: v }))} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">Order updates via SMS</p>
                  </div>
                  <Switch checked={settings.smsNotifications} onCheckedChange={(v) => setSettings(s => ({ ...s, smsNotifications: v }))} />
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Security
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Switch checked={settings.twoFactorAuth} onCheckedChange={(v) => setSettings(s => ({ ...s, twoFactorAuth: v }))} />
                </div>
                <div className="pt-4 border-t">
                  <Label>Change Password</Label>
                  <div className="relative mt-2">
                    <Input type={showPassword ? 'text' : 'password'} placeholder="New password" className="pr-10" />
                    <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <Button variant="outline" className="mt-2">Update Password</Button>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-card rounded-xl border p-6">
              <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Preferences
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Language</Label>
                  <Select value={settings.language} onValueChange={(v) => setSettings(s => ({ ...s, language: v }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="pt">Português</SelectItem>
                      <SelectItem value="ar">العربية</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Currency</Label>
                  <Select value={settings.currency} onValueChange={(v) => setSettings(s => ({ ...s, currency: v }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NGN">₦ Nigerian Naira</SelectItem>
                      <SelectItem value="USD">$ US Dollar</SelectItem>
                      <SelectItem value="EUR">€ Euro</SelectItem>
                      <SelectItem value="GBP">£ British Pound</SelectItem>
                      <SelectItem value="GHS">₵ Ghanaian Cedi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  {settings.darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  <span className="font-medium">Dark Mode</span>
                </div>
                <Switch checked={settings.darkMode} onCheckedChange={(v) => setSettings(s => ({ ...s, darkMode: v }))} />
              </div>
            </div>

            <Button onClick={handleSave} className="w-full">Save All Settings</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
