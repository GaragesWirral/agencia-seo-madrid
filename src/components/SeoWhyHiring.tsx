import React from 'react';
import { RevealText } from './ui/RevealText';
import { motion } from 'framer-motion';

export const SeoWhyHiring: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
         {/* Left: Title */}
         <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-6">
               <span className="text-xs font-mono border border-gray-200 text-gray-500 px-3 py-1 rounded-full uppercase">
                 Expertise
               </span>
            </div>
            <RevealText tag="h2" className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-black mb-6">
              ¿Por Qué Contratar una Agencia SEO en Madrid Especializada?
            </RevealText>
         </div>

         {/* Right: Content */}
         <div className="lg:w-1/2 flex flex-col gap-8 text-lg text-gray-600 leading-relaxed">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.5 }}
           >
             <p>
               Si estás buscando una agencia que entienda el mercado local y tenga años de experiencia en posicionamiento web, has llegado al lugar correcto. Nuestra agencia de posicionamiento SEO trabaja con empresas de toda la Comunidad de Madrid, desde startups hasta corporaciones consolidadas.
             </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4, duration: 0.5 }}
             className="relative pl-6 border-l-2 border-black"
           >
             <p>
               A diferencia de todas las agencias SEO que prometen resultados inmediatos, somos transparentes: los resultados del SEO pueden tardar entre 3 y 6 meses, pero cuando llegan, son sostenibles a medio y largo plazo. Como consultor SEO con experiencia en el sector, sabemos que una estrategia SEO bien definida es la diferencia entre el éxito y el fracaso.
             </p>
           </motion.div>
         </div>
      </div>
    </section>
  );
};