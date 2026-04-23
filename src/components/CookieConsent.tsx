import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie, Settings, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'tranyer_cookie_consent';

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: true, marketing: false });
  const location = useLocation();

  // Only show on landing page and only on first visit
  useEffect(() => {
    const hasConsented = localStorage.getItem(COOKIE_CONSENT_KEY);
    const isLandingPage = location.pathname === '/';
    
    if (isLandingPage && !hasConsented) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location.pathname]);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ 
      accepted: true, 
      preferences: { analytics: true, marketing: true },
      timestamp: new Date().toISOString()
    }));
    setShow(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ 
      accepted: false, 
      preferences: { analytics: false, marketing: false },
      timestamp: new Date().toISOString()
    }));
    setShow(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ 
      accepted: true, 
      preferences,
      timestamp: new Date().toISOString()
    }));
    setShow(false);
    setShowPreferences(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-card border rounded-xl shadow-lg p-6">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Cookie className="w-8 h-8 text-primary shrink-0" />
            <div className="flex-1">
              <p className="font-medium mb-1">We use cookies</p>
              <p className="text-sm text-muted-foreground">
                We use cookies to improve your experience. By continuing, you agree to our{' '}
                <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowPreferences(true)}>
                <Settings className="w-4 h-4 mr-1" />Customize
              </Button>
              <Button variant="outline" size="sm" onClick={handleRejectAll}>Reject All</Button>
              <Button size="sm" onClick={handleAcceptAll}>Accept All</Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Cookie Preferences</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowPreferences(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-3 mb-4">
              <label className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <span className="font-medium">Essential Cookies</span>
                  <p className="text-xs text-muted-foreground">Required for basic website functionality</p>
                </div>
                <input type="checkbox" checked disabled className="w-4 h-4" />
              </label>
              <label className="flex items-center justify-between p-3 bg-muted rounded-lg cursor-pointer">
                <div>
                  <span className="font-medium">Analytics Cookies</span>
                  <p className="text-xs text-muted-foreground">Help us understand how you use our site</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.analytics} 
                  onChange={(e) => setPreferences(p => ({ ...p, analytics: e.target.checked }))} 
                  className="w-4 h-4" 
                />
              </label>
              <label className="flex items-center justify-between p-3 bg-muted rounded-lg cursor-pointer">
                <div>
                  <span className="font-medium">Marketing Cookies</span>
                  <p className="text-xs text-muted-foreground">Used to show relevant ads</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.marketing} 
                  onChange={(e) => setPreferences(p => ({ ...p, marketing: e.target.checked }))} 
                  className="w-4 h-4" 
                />
              </label>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleRejectAll} className="flex-1">Reject All</Button>
              <Button onClick={handleSavePreferences} className="flex-1">Save Preferences</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
