import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

interface RateLimits {
  login: RateLimitConfig;
  signup: RateLimitConfig;
  checkout: RateLimitConfig;
  payment: RateLimitConfig;
  ai: RateLimitConfig;
  adCreation: RateLimitConfig;
}

interface FraudFlag {
  id: string;
  type: 'multiple_accounts' | 'unusual_order' | 'abnormal_spending' | 'suspicious_behavior' | 'rate_limit_exceeded';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  details: string;
  resolved: boolean;
}

interface DeviceFingerprint {
  id: string;
  userAgent: string;
  screenResolution: string;
  timezone: string;
  language: string;
  platform: string;
  colorDepth: number;
  touchSupport: boolean;
  createdAt: Date;
}

interface SecurityContextType {
  deviceFingerprint: DeviceFingerprint | null;
  fraudFlags: FraudFlag[];
  ipReputation: 'trusted' | 'neutral' | 'suspicious' | 'blocked';
  checkRateLimit: (action: keyof RateLimits) => { allowed: boolean; remainingAttempts: number; resetIn: number };
  recordAttempt: (action: keyof RateLimits) => void;
  flagSuspiciousBehavior: (type: FraudFlag['type'], details: string, severity: FraudFlag['severity']) => void;
  resolveFlag: (flagId: string) => void;
  isBlocked: boolean;
  sessionRiskScore: number;
}

const rateLimits: RateLimits = {
  login: { maxAttempts: 5, windowMs: 15 * 60 * 1000 }, // 5 attempts per 15 min
  signup: { maxAttempts: 3, windowMs: 60 * 60 * 1000 }, // 3 attempts per hour
  checkout: { maxAttempts: 10, windowMs: 60 * 60 * 1000 }, // 10 per hour
  payment: { maxAttempts: 5, windowMs: 30 * 60 * 1000 }, // 5 per 30 min
  ai: { maxAttempts: 50, windowMs: 60 * 60 * 1000 }, // 50 AI requests per hour
  adCreation: { maxAttempts: 10, windowMs: 24 * 60 * 60 * 1000 }, // 10 ads per day
};

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

const generateFingerprint = (): DeviceFingerprint => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl');
  
  return {
    id: btoa(JSON.stringify({
      ua: navigator.userAgent,
      screen: `${screen.width}x${screen.height}`,
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      lang: navigator.language,
      platform: navigator.platform,
      touch: 'ontouchstart' in window,
      webgl: gl ? gl.getParameter(gl.RENDERER) : 'none',
    })).slice(0, 32),
    userAgent: navigator.userAgent,
    screenResolution: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
    platform: navigator.platform,
    colorDepth: screen.colorDepth,
    touchSupport: 'ontouchstart' in window,
    createdAt: new Date(),
  };
};

export const SecurityProvider = ({ children }: { children: ReactNode }) => {
  const [deviceFingerprint, setDeviceFingerprint] = useState<DeviceFingerprint | null>(null);
  const [fraudFlags, setFraudFlags] = useState<FraudFlag[]>(() => {
    const saved = localStorage.getItem('tranyer_fraud_flags');
    return saved ? JSON.parse(saved) : [];
  });
  const [ipReputation, setIpReputation] = useState<'trusted' | 'neutral' | 'suspicious' | 'blocked'>('neutral');
  const [attempts, setAttempts] = useState<Record<string, { count: number; firstAttempt: number }>>({});
  const [sessionRiskScore, setSessionRiskScore] = useState(0);

  useEffect(() => {
    // Generate device fingerprint on mount
    const fingerprint = generateFingerprint();
    setDeviceFingerprint(fingerprint);
    
    // Check if this device has been seen with multiple accounts
    const savedFingerprints = JSON.parse(localStorage.getItem('tranyer_device_fingerprints') || '[]');
    const matchingFingerprints = savedFingerprints.filter((f: DeviceFingerprint) => f.id === fingerprint.id);
    
    if (matchingFingerprints.length > 2) {
      flagSuspiciousBehavior('multiple_accounts', 'Multiple accounts detected from same device', 'medium');
    }
    
    // Save fingerprint
    if (!savedFingerprints.find((f: DeviceFingerprint) => f.id === fingerprint.id)) {
      savedFingerprints.push(fingerprint);
      localStorage.setItem('tranyer_device_fingerprints', JSON.stringify(savedFingerprints.slice(-10)));
    }
  }, []);

  useEffect(() => {
    // Calculate session risk score
    let score = 0;
    const unresolvedFlags = fraudFlags.filter(f => !f.resolved);
    
    unresolvedFlags.forEach(flag => {
      switch (flag.severity) {
        case 'low': score += 10; break;
        case 'medium': score += 25; break;
        case 'high': score += 50; break;
        case 'critical': score += 100; break;
      }
    });
    
    setSessionRiskScore(Math.min(100, score));
    
    // Update IP reputation based on risk
    if (score >= 100) setIpReputation('blocked');
    else if (score >= 50) setIpReputation('suspicious');
    else if (score === 0) setIpReputation('trusted');
    else setIpReputation('neutral');
  }, [fraudFlags]);

  useEffect(() => {
    localStorage.setItem('tranyer_fraud_flags', JSON.stringify(fraudFlags));
  }, [fraudFlags]);

  const checkRateLimit = useCallback((action: keyof RateLimits) => {
    const config = rateLimits[action];
    const key = `rate_${action}`;
    const current = attempts[key];
    const now = Date.now();
    
    if (!current || now - current.firstAttempt > config.windowMs) {
      return { allowed: true, remainingAttempts: config.maxAttempts, resetIn: 0 };
    }
    
    const remaining = config.maxAttempts - current.count;
    const resetIn = Math.ceil((current.firstAttempt + config.windowMs - now) / 1000);
    
    return { allowed: remaining > 0, remainingAttempts: Math.max(0, remaining), resetIn };
  }, [attempts]);

  const recordAttempt = useCallback((action: keyof RateLimits) => {
    const key = `rate_${action}`;
    const now = Date.now();
    const config = rateLimits[action];
    
    setAttempts(prev => {
      const current = prev[key];
      
      if (!current || now - current.firstAttempt > config.windowMs) {
        return { ...prev, [key]: { count: 1, firstAttempt: now } };
      }
      
      const newCount = current.count + 1;
      
      // Flag if rate limit exceeded
      if (newCount > config.maxAttempts) {
        flagSuspiciousBehavior('rate_limit_exceeded', `Rate limit exceeded for ${action}`, 'medium');
      }
      
      return { ...prev, [key]: { ...current, count: newCount } };
    });
  }, []);

  const flagSuspiciousBehavior = useCallback((
    type: FraudFlag['type'],
    details: string,
    severity: FraudFlag['severity']
  ) => {
    const newFlag: FraudFlag = {
      id: `flag_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      type,
      severity,
      timestamp: new Date(),
      details,
      resolved: false,
    };
    
    setFraudFlags(prev => [...prev, newFlag]);
  }, []);

  const resolveFlag = useCallback((flagId: string) => {
    setFraudFlags(prev => prev.map(flag => 
      flag.id === flagId ? { ...flag, resolved: true } : flag
    ));
  }, []);

  const isBlocked = ipReputation === 'blocked';

  return (
    <SecurityContext.Provider
      value={{
        deviceFingerprint,
        fraudFlags,
        ipReputation,
        checkRateLimit,
        recordAttempt,
        flagSuspiciousBehavior,
        resolveFlag,
        isBlocked,
        sessionRiskScore,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};
