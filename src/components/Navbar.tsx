
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks: NavItem[] = [
  { label: 'Agencia SEO Madrid', href: '/' },
  { 
    label: 'Servicios', 
    subItems: [
      { label: 'Diseño Web', href: '/diseno-web' },
      { label: 'Posicionamiento SEO', href: '/posicionamiento-seo' },
      { label: 'Mantenimiento Web', href: '/mantenimiento-web' },
      { label: 'Google Ads', href: '/google-ads' },
      { label: 'SEO Local', href: '/seo-local' },
    ]
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
  const [desktopHover, setDesktopHover] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Robust navigation handler
  const handleNavigation = (href: string) => {
    setIsOpen(false); // Close mobile menu if open

    // 1. Handle External Links (if any)
    if (href.startsWith('http')) {
      window.open(href, '_blank');
      return;
    }

    // 2. Handle Routes (e.g. /diseno-web) vs Anchors (e.g. /#contact)
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const targetId = hash;

      // If the path is just "/" or matches current path, try to scroll
      const isCurrentPage = path === '' || path === '/' || location.pathname === path;

      if (isCurrentPage) {
         // Check if target element exists on current page
         const element = document.getElementById(targetId);
         if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
           return;
         }
      }

      // If not on current page or element not found, navigate then scroll
      navigate(path || '/');
      
      // Wait for navigation and render, then scroll
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);

    } else {
      // Standard route navigation
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#F4F4F4]/90 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
          <button onClick={() => handleNavigation('/')} className="text-xl font-bold tracking-tighter uppercase font-grotesk z-50">
            Organic<span className="text-gray-500">Pulse</span>.
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.subItems) {
                return (
                  <div 
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setDesktopHover(link.label)}
                    onMouseLeave={() => setDesktopHover(null)}
                  >
                    <button className="flex items-center gap-1 text-sm font-medium hover:text-gray-500 transition-colors py-2">
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${desktopHover === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {desktopHover === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden py-2"
                        >
                          {link.subItems.map((subItem) => (
                            <button 
                              key={subItem.label}
                              onClick={() => handleNavigation(subItem.href || '')}
                              className="block w-full text-left px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button 
                  key={link.label} 
                  onClick={() => handleNavigation(link.href || '/')}
                  className="text-sm font-medium hover:text-gray-500 transition-colors"
                >
                  {link.label}
                </button>
              );
            })}
            <button 
              onClick={() => handleNavigation('/#contact')}
              className="bg-black text-white px-7 py-3 text-base font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Auditoría Gratis
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#F4F4F4] z-40 flex flex-col pt-32 px-8 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => {
                if (link.subItems) {
                  return (
                    <div key={link.label} className="flex flex-col">
                      <button 
                        onClick={() => setMobileSubMenuOpen(mobileSubMenuOpen === link.label ? null : link.label)}
                        className="flex items-center justify-between text-2xl font-bold font-grotesk hover:text-gray-500 transition-colors text-left"
                      >
                        {link.label}
                        <ChevronDown className={`w-6 h-6 transition-transform ${mobileSubMenuOpen === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileSubMenuOpen === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col pl-4 border-l-2 border-gray-200 mt-4 space-y-4"
                          >
                            {link.subItems.map((subItem) => (
                              <button 
                                key={subItem.label}
                                onClick={() => handleNavigation(subItem.href || '')}
                                className="text-lg text-gray-600 font-medium hover:text-black block text-left"
                              >
                                {subItem.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button 
                    key={link.label} 
                    onClick={() => handleNavigation(link.href || '/')}
                    className="text-2xl font-bold font-grotesk hover:text-gray-500 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                );
              })}
               <button 
                onClick={() => handleNavigation('/#contact')}
                className="mt-8 text-xl underline underline-offset-4 text-left"
              >
                Solicitar Auditoría
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
