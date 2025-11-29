
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button earlier (after 300px)
      const scrolledPastHero = window.scrollY > 300;
      
      // Hide button if near the bottom (where the actual contact form is)
      // to avoid redundancy and clutter.
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 800;

      if (scrolledPastHero && !nearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-40"
        >
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full shadow-2xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 border border-white/10"
          >
            <div className="relative">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black animate-pulse"></span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Disponible ahora</span>
              <span className="text-sm font-bold">Hablar con un experto</span>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
