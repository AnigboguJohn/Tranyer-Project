import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LocalizationProvider } from "@/contexts/LocalizationContext";
import { SecurityProvider } from "@/contexts/SecurityContext";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import { OnboardingProvider } from "@/contexts/OnboardingContext";
import OnboardingModal from "@/components/OnboardingModal";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import AccountPayment from "./pages/account/Payment";
import AccountSell from "./pages/account/Sell";
import AccountAdvertise from "./pages/account/Advertise";
import AccountAIAssistant from "./pages/account/AIAssistant";
import AccountProfile from "./pages/account/Profile";
import AccountOrders from "./pages/account/Orders";
import AccountAddresses from "./pages/account/Addresses";
import AccountRewards from "./pages/account/Rewards";
import AccountSettings from "./pages/account/Settings";
import AccountAnalytics from "./pages/account/Analytics";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminSettings from "./pages/admin/Settings";
import Wishlist from "./pages/Wishlist";
import Deals from "./pages/Deals";
import TopDeals from "./pages/TopDeals";
import NewArrivals from "./pages/NewArrivals";
import PopularElectronics from "./pages/PopularElectronics";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Press from "./pages/Press";
import Help from "./pages/Help";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";
import TrackOrder from "./pages/TrackOrder";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocalizationProvider>
          <TooltipProvider>
            <AuthProvider>
              <SecurityProvider>
                <SubscriptionProvider>
                  <OnboardingProvider>
                    <CartProvider>
                      <WishlistProvider>
                        <Toaster />
                        <Sonner />
                        <OnboardingModal />
                        <BrowserRouter>
                          <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/category/:slug" element={<Category />} />
                            <Route path="/category/:slug/:subcategorySlug" element={<Category />} />
                            <Route path="/categories" element={<Categories />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/auth" element={<Auth />} />
                            <Route path="/account" element={<Account />} />
                            <Route path="/account/payment" element={<AccountPayment />} />
                            <Route path="/account/sell" element={<AccountSell />} />
                            <Route path="/account/advertise" element={<AccountAdvertise />} />
                            <Route path="/account/ai-assistant" element={<AccountAIAssistant />} />
                            <Route path="/account/profile" element={<AccountProfile />} />
                            <Route path="/account/orders" element={<AccountOrders />} />
                            <Route path="/account/addresses" element={<AccountAddresses />} />
                            <Route path="/account/rewards" element={<AccountRewards />} />
                            <Route path="/account/settings" element={<AccountSettings />} />
                            <Route path="/account/analytics" element={<AccountAnalytics />} />
                            <Route path="/admin" element={<AdminLogin />} />
                            <Route path="/admin/dashboard" element={<AdminDashboard />} />
                            <Route path="/admin/settings" element={<AdminSettings />} />
                            <Route path="/wishlist" element={<Wishlist />} />
                            <Route path="/deals" element={<Deals />} />
                            <Route path="/top-deals" element={<TopDeals />} />
                            <Route path="/new-arrivals" element={<NewArrivals />} />
                            <Route path="/popular-electronics" element={<PopularElectronics />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/careers" element={<Careers />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:id" element={<BlogPost />} />
                            <Route path="/press" element={<Press />} />
                            <Route path="/help" element={<Help />} />
                            <Route path="/returns" element={<Returns />} />
                            <Route path="/shipping" element={<Shipping />} />
                            <Route path="/track-order" element={<TrackOrder />} />
                            <Route path="/terms" element={<Terms />} />
                            <Route path="/privacy" element={<Privacy />} />
                            <Route path="/cookies" element={<Cookies />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/pricing" element={<Pricing />} />
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </BrowserRouter>
                      </WishlistProvider>
                    </CartProvider>
                  </OnboardingProvider>
                </SubscriptionProvider>
              </SecurityProvider>
            </AuthProvider>
          </TooltipProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
);

export default App;
