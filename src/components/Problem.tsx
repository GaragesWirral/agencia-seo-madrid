import React from 'react';
import { RevealText } from './ui/RevealText';
import { motion } from 'framer-motion';

export const Problem: React.FC = () => {
  return (
    <section className="bg-[#111] text-white py-32 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 mb-8">
             <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase">El Problema</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
             <RevealText tag="h2" className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                La mayoría de las agencias venden humo. <br/>
                <span className="text-gray-500">Nosotros vendemos ingeniería de crecimiento.</span>
             </RevealText>
          </div>
          
          <div className="flex flex-col gap-8 md:mt-4">
            <RevealText tag="p" delay={0.2} className="text-xl text-gray-400 leading-relaxed">
              El SEO moderno no va de engañar a Google o repetir palabras clave mil veces. Se trata de crear la mejor respuesta posible para la pregunta del usuario, servida en una plataforma técnicamente impecable.
            </RevealText>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="p-8 border border-gray-800 bg-gray-900/50 rounded-2xl"
            >
               <h3 className="text-2xl font-bold mb-4">¿Por qué fallan otros?</h3>
               <ul className="space-y-4">
                 <li className="flex gap-4 items-start text-gray-300">
                   <span className="text-red-500 font-mono">✕</span>
                   Auditorías automáticas sin contexto de negocio.
                 </li>
                 <li className="flex gap-4 items-start text-gray-300">
                   <span className="text-red-500 font-mono">✕</span>
                   Reportes mensuales llenos de métricas de vanidad.
                 </li>
                 <li className="flex gap-4 items-start text-gray-300">
                   <span className="text-red-500 font-mono">✕</span>
                   Estrategias genéricas de "talla única".
                 </li>
               </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};