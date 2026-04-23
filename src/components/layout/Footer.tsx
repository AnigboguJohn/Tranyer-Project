/**
 * Footer Component
 * 
 * Main footer for the Tranyer e-commerce platform.
 * Features:
 * - Newsletter subscription form
 * - Navigation links (About, Help, Legal, Contact)
 * - Social media links
 * - Payment methods display
 * - Full multi-language support via useLocalization hook
 * 
 * @component
 */

import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLocalization } from '@/contexts/LocalizationContext';

const Footer = () => {
  // Get translation function from LocalizationContext
  const { t } = useLocalization();

  return (
    <footer className="bg-header text-header-foreground mt-12">
      
      {/* Newsletter Subscription Section */}
      <div className="border-b border-white/10">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Newsletter Text */}
            <div>
              <h3 className="font-display text-xl font-bold">
                {t('footer.newsletter')} {/* Translated: Subscribe to our Newsletter */}
              </h3>
              <p className="text-white/70 text-sm">
                {t('footer.newsletterDesc')} {/* Translated: Get updates on new deals */}
              </p>
            </div>
            
            {/* Newsletter Form */}
            <form className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder={t('form.email')} // Translated placeholder
                className="w-full md:w-80 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="shrink-0">
                {t('footer.subscribe')} {/* Translated: Subscribe */}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Navigation Links */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">
              {t('footer.aboutUs')} {/* Translated: About Us */}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  {t('footer.careers')} {/* Translated: Careers */}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  {t('footer.blog')} {/* Translated: Blog */}
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-white transition-colors">
                  {t('footer.press')} {/* Translated: Press */}
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">
              {t('footer.help')} {/* Translated: Help Center */}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/help" className="hover:text-white transition-colors">
                  {t('footer.help')}
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition-colors">
                  {t('footer.returns')} {/* Translated: Returns */}
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition-colors">
                  {t('footer.shipping')} {/* Translated: Shipping Info */}
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-white transition-colors">
                  {t('footer.trackOrder')} {/* Translated: Track Order */}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">
              {t('footer.terms')} {/* Translated: Terms */}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  {t('footer.terms')} {/* Translated: Terms & Conditions */}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  {t('footer.privacy')} {/* Translated: Privacy Policy */}
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-white transition-colors">
                  {t('footer.cookies')} {/* Translated: Cookie Policy */}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">
              {t('footer.contactUs')} {/* Translated: Contact Us */}
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {/* Phone Number */}
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+234 800 123 4567</span>
              </li>
              {/* Email Address */}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@tranyer.com</span>
              </li>
              {/* Physical Address */}
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright, Social Links, Payment Methods */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Logo and Copyright */}
            <div className="flex items-center gap-2">
              <BrandLogo className="w-8 h-8" />
              <span className="font-display font-bold text-accent">Tranyer</span>
              <span className="text-white/50 text-sm">© 2024. All rights reserved.</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            {/* Payment Methods Display */}
            <div className="flex items-center gap-2">
              <span className="text-white/50 text-sm">
                {t('checkout.paymentMethod')}: {/* Translated: Payment */}
              </span>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-white/10 rounded text-xs font-medium">Paystack</div>
                <div className="px-2 py-1 bg-white/10 rounded text-xs font-medium">Stripe</div>
                <div className="px-2 py-1 bg-white/10 rounded text-xs font-medium">Card</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
