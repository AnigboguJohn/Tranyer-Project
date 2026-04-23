import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

type AuthMode = 'signin' | 'signup' | 'forgot-password' | 'reset-password';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get('mode') as AuthMode || 'signin';
  
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const { signIn, signUp, signInWithGoogle, resetPassword, updatePassword, user, pendingCartAction } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    newPassword: '',
    agreeToTerms: false,
  });

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      if (pendingCartAction) {
        pendingCartAction();
      }
      navigate('/');
    }
  }, [user, navigate, pendingCartAction]);

  // Handle mode from URL
  useEffect(() => {
    const urlMode = searchParams.get('mode') as AuthMode;
    if (urlMode && ['signin', 'signup', 'forgot-password', 'reset-password'].includes(urlMode)) {
      setMode(urlMode);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === 'signin') {
        if (!formData.email || !formData.password) {
          toast.error('Please fill in all required fields');
          return;
        }
        const { error } = await signIn(formData.email, formData.password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast.error('Invalid email or password');
          } else {
            toast.error(error.message);
          }
          return;
        }
        toast.success('Welcome back!');
        navigate('/');
      } else if (mode === 'signup') {
        if (!formData.email || !formData.password || !formData.name) {
          toast.error('Please fill in all required fields');
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          toast.error('Passwords do not match');
          return;
        }
        if (formData.password.length < 6) {
          toast.error('Password must be at least 6 characters');
          return;
        }
        if (!formData.agreeToTerms) {
          toast.error('Please agree to the terms and conditions');
          return;
        }
        const { error } = await signUp(formData.email, formData.password, formData.name);
        if (error) {
          if (error.message.includes('already registered')) {
            toast.error('This email is already registered. Please sign in.');
          } else {
            toast.error(error.message);
          }
          return;
        }
        toast.success('Account created successfully! Please check your email to verify.');
        setMode('signin');
      } else if (mode === 'forgot-password') {
        if (!formData.email) {
          toast.error('Please enter your email');
          return;
        }
        const { error } = await resetPassword(formData.email);
        if (error) {
          toast.error(error.message);
          return;
        }
        toast.success('Password reset email sent! Check your inbox.');
        setMode('signin');
      } else if (mode === 'reset-password') {
        if (!formData.newPassword) {
          toast.error('Please enter a new password');
          return;
        }
        if (formData.newPassword.length < 6) {
          toast.error('Password must be at least 6 characters');
          return;
        }
        const { error } = await updatePassword(formData.newPassword);
        if (error) {
          toast.error(error.message);
          return;
        }
        toast.success('Password updated successfully!');
        navigate('/');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    // Deprecated: handleGoogleSignIn
    setIsLoading(true);
    // This function is now replaced by GoogleLogin below
    setIsLoading(false);
  };

  const renderModeContent = () => {
    switch (mode) {
      case 'forgot-password':
        return (
          <>
            <button onClick={() => setMode('signin')} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to sign in
            </button>
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">Reset your password</h1>
            <p className="text-muted-foreground mb-8">
              Enter your email and we'll send you a reset link
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          </>
        );
      case 'reset-password':
        return (
          <>
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">Set new password</h1>
            <p className="text-muted-foreground mb-8">
              Enter your new password below
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter new password"
                    className="pl-10 pr-10"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Update Password'}
              </Button>
            </form>
          </>
        );
      default:
                    {/* Logout Button for Google JWT login */}
                    <div className="mb-6">
                      <Button
                        variant="destructive"
                        className="w-full h-12 font-medium"
                        onClick={async () => {
                          setIsLoading(true);
                          try {
                            const res = await fetch('http://localhost:5000/auth/google-jwt/logout', {
                              method: 'POST',
                              credentials: 'include',
                            });
                            const data = await res.json();
                            if (res.ok) {
                              toast.success('Logged out successfully');
                              navigate('/auth');
                            } else {
                              toast.error(data.message || 'Logout failed');
                            }
                          } catch (err) {
                            toast.error('Logout error');
                          } finally {
                            setIsLoading(false);
                          }
                        }}
                        disabled={isLoading}
                      >
                        Log Out
                      </Button>
                    </div>
        return (
          <>
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
              {mode === 'signin' ? 'Welcome back' : 'Create an account'}
            </h1>
            <p className="text-muted-foreground mb-8">
              {mode === 'signin'
                ? 'Sign in to continue shopping'
                : 'Join Tranyer and start shopping'}
            </p>

            {/* Google Login Button */}
            <div className="space-y-3 mb-6">
              <GoogleLogin
                width="100%"
                theme="outline"
                size="large"
                shape="rect"
                text="continue_with"
                onSuccess={async credentialResponse => {
                  if (credentialResponse.credential) {
                    setIsLoading(true);
                    try {
                      const res = await fetch('http://localhost:5000/auth/google-jwt', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                        body: JSON.stringify({ credential: credentialResponse.credential }),
                      });
                      const data = await res.json();
                      if (res.ok) {
                        toast.success('Google login successful!');
                        setTimeout(() => navigate('/account'), 500);
                      } else {
                        toast.error(data.message || 'Google login failed');
                      }
                    } catch (err) {
                      toast.error('Google login error');
                    } finally {
                      setIsLoading(false);
                    }
                  } else {
                    toast.error('No credential received');
                  }
                }}
                onError={() => {
                  toast.error('Login Failed');
                }}
              />
              <Button variant="outline" className="w-full h-12 font-medium" disabled>
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Continue with Apple
              </Button>
              <Button variant="outline" className="w-full h-12 font-medium" disabled>
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#F25022" d="M1 1h10v10H1z"/>
                  <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                  <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                  <path fill="#FFB900" d="M13 13h10v10H13z"/>
                </svg>
                Continue with Microsoft
              </Button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="pl-10"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {mode === 'signup' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        className="pl-10"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <Checkbox
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          agreeToTerms: checked as boolean,
                        }))
                      }
                      className="mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </>
              )}

              {mode === 'signin' && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox />
                    <span className="text-sm">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setMode('forgot-password')}
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading
                  ? 'Please wait...'
                  : mode === 'signin'
                  ? 'Sign In'
                  : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                {mode === 'signin' ? (
                  <>
                    Don't have an account?{' '}
                    <button
                      onClick={() => setMode('signup')}
                      className="text-primary font-medium hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={() => setMode('signin')}
                      className="text-primary font-medium hover:underline"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </p>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <BrandLogo className="w-10 h-10" />
            <span className="font-display font-bold text-xl text-accent">Tranyer</span>
          </Link>

          {renderModeContent()}
        </div>
      </div>

      {/* Right side - Video Only (No Text) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-foreground overflow-hidden">
        {/* Video Background - Promo/Lifestyle/Product Montage */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=1800&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/4065906/4065906-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
        </video>
        
        {/* Subtle overlay for better visual depth - no text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default Auth;
