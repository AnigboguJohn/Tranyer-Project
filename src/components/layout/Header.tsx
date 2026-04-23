/**
 * Header Component
 * 
 * Main navigation header for the Tranyer e-commerce platform.
 * Features:
 * - Responsive design (desktop/mobile)
 * - Multi-language support via useLocalization hook
 * - Search functionality
 * - Shopping cart with item count
 * - User account, wishlist links
 * - Theme toggle and language/currency selector
 * - WhatsApp support integration
 * 
 * @component
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useLocalization } from '@/contexts/LocalizationContext';
import { categories } from '@/data/mockData';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import BrandLogo from '@/components/BrandLogo';
import WhatsAppSupport from '@/components/WhatsAppSupport';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageCurrencySelector from '@/components/LanguageCurrencySelector';

const Header = () => {
  // State for search input and mobile menu visibility
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Get cart item count from CartContext
  const { itemCount } = useCart();
  
  // Get translation function from LocalizationContext
  const { t } = useLocalization();
  
  // Navigation hook for programmatic routing
  const navigate = useNavigate();

  /**
   * Handle search form submission
   * Navigates to products page with search query parameter
   * @param e - Form submit event
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Only navigate if search query is not empty
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar - Contains logo, search, and action buttons */}
      <div className="bg-header text-header-foreground">
        <div className="container flex h-16 items-center justify-between gap-4">
          
          {/* Logo - Navigates to homepage */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <BrandLogo className="w-10 h-10" />
            <span className="font-display font-bold text-xl hidden sm:block text-accent">Tranyer</span>
          </Link>

          {/* Desktop Search Bar - Hidden on mobile */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder={t('nav.search')} // Translated placeholder
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white focus:text-foreground focus:placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-0 top-0 h-full rounded-l-none bg-primary hover:bg-primary/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Action Buttons - WhatsApp, Theme, Language, Account, Wishlist, Cart */}
          <div className="flex items-center gap-1">
            {/* WhatsApp Support - Header variant (icon only) */}
            <WhatsAppSupport variant="header" />

            {/* Theme Toggle - Light/Dark mode switch */}
            <ThemeToggle />

            {/* Language/Currency Selector - Hidden on small screens */}
            <LanguageCurrencySelector className="hidden sm:flex" />

            {/* Account Link - Translated label */}
            <Link to="/account" className="hidden sm:flex">
              <Button variant="ghost" className="text-header-foreground hover:bg-white/10 gap-2">
                <User className="h-5 w-5" />
                <span className="hidden lg:inline">{t('nav.account')}</span>
              </Button>
            </Link>

            {/* Wishlist Link - Translated label */}
            <Link to="/wishlist" className="hidden sm:flex">
              <Button variant="ghost" className="text-header-foreground hover:bg-white/10 gap-2">
                <Heart className="h-5 w-5" />
                <span className="hidden lg:inline">{t('nav.wishlist')}</span>
              </Button>
            </Link>

            {/* Cart Link - Shows item count badge */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" className="text-header-foreground hover:bg-white/10 gap-2">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden lg:inline">{t('nav.cart')}</span>
                {/* Cart item count badge - Only shown when items exist */}
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center animate-bounce-in">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-header-foreground hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Category Navigation Bar */}
      <nav className="bg-card border-b hidden md:block">
        <div className="container">
          <ul className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
            {/* All Categories Dropdown */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1 font-medium">
                    <Menu className="h-4 w-4" />
                    {t('nav.allCategories')} {/* Translated */}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-popover">
                  {/* Map through all categories */}
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.id} asChild>
                      <Link to={`/category/${category.slug}`} className="cursor-pointer">
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            
            {/* Featured Categories - First 5 categories */}
            {categories.slice(0, 5).map((category) => (
              <li key={category.id}>
                <Link
                  to={`/category/${category.slug}`}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            
            {/* Flash Sales Link - Highlighted */}
            <li>
              <Link
                to="/deals"
                className="px-3 py-2 text-sm font-bold text-destructive hover:text-destructive/80 transition-colors whitespace-nowrap"
              >
                🔥 {t('nav.flashSales')} {/* Translated */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu - Slide down animation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b animate-slide-down">
          <div className="container py-4 space-y-4">
            
            {/* Mobile Search Form */}
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Input
                  type="text"
                  placeholder={t('nav.search')} // Translated placeholder
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-12"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-0 top-0 h-full rounded-l-none"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Mobile Settings Row - Language/Currency and Theme */}
            <div className="flex items-center justify-between py-2 border-b">
              <LanguageCurrencySelector variant="outline" showLabel />
              <ThemeToggle variant="outline" showLabel />
            </div>

            {/* Mobile Categories Grid */}
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  onClick={() => setMobileMenuOpen(false)} // Close menu on navigation
                  className="px-3 py-2 text-sm font-medium bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* Mobile Action Links - Account and Wishlist */}
            <div className="flex gap-2 pt-2 border-t">
              <Link to="/account" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full gap-2">
                  <User className="h-4 w-4" />
                  {t('nav.account')} {/* Translated */}
                </Button>
              </Link>
              <Link to="/wishlist" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full gap-2">
                  <Heart className="h-4 w-4" />
                  {t('nav.wishlist')} {/* Translated */}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
