import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from '@/components/CookieConsent';
import GoToTop from '@/components/GoToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
      <GoToTop />
    </div>
  );
};

export default Layout;