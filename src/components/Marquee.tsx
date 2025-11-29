import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "TechGrowth", "InnovaMadrid", "ConstructoraSur", "AbogadosDigital", 
  "ClinicaDentalPro", "StartupX", "FinanzasGlobal", "EcommerceElite"
];

export const Marquee: React.FC = () => {
  return (
    <div className="w-full py-16 bg-white overflow-hidden border-y border-gray-100">
      <div className="flex relative">
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <span 
              key={`${logo}-${index}`} 
              className="text-2xl md:text-4xl font-bold text-gray-300 uppercase tracking-tighter select-none"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};