import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';
}

export const RevealText: React.FC<RevealTextProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  tag = 'div' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const text = typeof children === 'string' ? children : '';
  
  // If children is not a simple string, we just wrap it
  if (!text) {
     const Component = motion[tag];
     return (
        <Component
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.33, 1, 0.68, 1] }}
            className={className}
        >
            {children}
        </Component>
     );
  }

  const words = text.split(" ");
  const Component = motion[tag] as any; // Type assertion for dynamic motion component

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Component
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-[0.25em] inline-block">
          {word}
          {/* Add a hidden space for SEO crawlers and screen readers to prevent word concatenation */}
          <span className="sr-only">&nbsp;</span>
        </motion.span>
      ))}
    </Component>
  );
};