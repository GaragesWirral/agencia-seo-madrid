import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { WebDesignPage } from './components/pages/WebDesignPage';
import { SeoPage } from './components/pages/SeoPage';
import { MaintenancePage } from './components/pages/MaintenancePage';
import { GoogleAdsPage } from './components/pages/GoogleAdsPage';
import { LocalSeoPage } from './components/pages/LocalSeoPage';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="w-full min-h-screen bg-[#F4F4F4] text-[#111]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diseno-web" element={<WebDesignPage />} />
            <Route path="/posicionamiento-seo" element={<SeoPage />} />
            <Route path="/mantenimiento-web" element={<MaintenancePage />} />
            <Route path="/google-ads" element={<GoogleAdsPage />} />
            <Route path="/seo-local" element={<LocalSeoPage />} />
          </Routes>
        </main>
        <StickyCTA />
        <Footer />
      </div>
    </Router>
  );
};

export default App;