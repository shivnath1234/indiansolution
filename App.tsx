import React, { Suspense, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { AdminProvider } from '@/lib/admin-context';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Payment from '@/pages/Payment';
import Owner from '@/pages/Owner';
import Register from '@/pages/Register';
import { SignInPage } from '@/components/ui/sign-in-flow-1';
import NotFoundPage from '@/components/ui/page-not-found';
import { BouncingDots } from '@/components/ui/bouncing-dots';

const LoadingScreen = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
    <BouncingDots size="large" />
    <p className="mt-4 text-muted-foreground animate-pulse">Initializing Morado...</p>
  </div>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Force instant scroll to top on route change to avoid fighting global smooth scroll CSS
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  
  return null;
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="nexus-theme">
             <LoadingScreen />
        </ThemeProvider>
    )
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="nexus-theme">
      <AdminProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/login" element={<SignInPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/owner" element={<Owner />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Router>
      </AdminProvider>
    </ThemeProvider>
  );
}