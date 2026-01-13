import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { RevealText } from './ui/RevealText';

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Sitios Web que Convierten",
    description: "No basta con tener un sitio web bonito. Necesitas una máquina de generación de leads que convierta visitantes en clientes.",
    details: [
      "Diseño optimizado para conversión y experiencia de usuario",
      "Velocidad de carga ultrarrápida para mejor SEO",
      "Formularios optimizados que generan más leads",
      "Diseño responsive perfecto en todos los dispositivos"
    ],
    image: "/images/Diseño-web-que-convierte.png" // Your local image
  },
  {
    id: "02",
    title: "Posiciona #1 en Google",
    description: "El 75% de los usuarios nunca pasan de la primera página. Nosotros te llevamos al top con estrategias SEO probadas.",
    details: [
      "SEO Técnico: Optimización completa de tu sitio web para los motores de búsqueda",
      "Contenido Optimizado: Estrategia de contenidos que atrae y convierte",
      "Link Building & PR: Aumentamos la autoridad de tu dominio con enlaces de calidad",
      "SEO Local: Dominamos las búsquedas locales de tu área"
    ],
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Publicidad de Pago que Funciona",
    description: "Genera leads cualificados desde el primer día con campañas de Google Ads y Meta Ads optimizadas para máximo ROI.",
    details: [
      "Campañas de Google Ads dirigidas a búsquedas de alta intención",
      "Meta Ads (Facebook e Instagram) para alcance masivo",
      "Remarketing inteligente para convertir visitantes en clientes",
      "Optimización continua basada en datos reales"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  }
];

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>("01");

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-10">
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
             <span className="text-xs font-mono border border-gray-300 px-2 py-1 rounded-full uppercase">Nuestros Servicios</span>
          </div>
          <RevealText tag="h2" className="text-4xl md:text-5xl font-bold tracking-tight">
            Estrategias digitales <br/>
            que impulsan tu negocio.
          </RevealText>
        </div>
        <div className="md:w-1/3 flex items-end">
           <p className="text-gray-600 text-lg">
             Un enfoque integral que combina diseño, posicionamiento y conversión para maximizar tus resultados.
           </p>
        </div>
      </div>

      <div className="flex flex-col">
        {services.map((service) => (
          <div key={service.id} className="border-t border-gray-200">
            <button 
              onClick={() => setActiveId(activeId === service.id ? null : service.id)}
              className="w-full py-8 md:py-12 flex items-start md:items-center justify-between group text-left transition-colors hover:bg-gray-50 px-2"
            >
              <div className="flex items-start md:items-center gap-6 md:gap-12">
                <span className="text-sm md:text-base font-mono text-gray-400 mt-1 md:mt-0">({service.id})</span>
                <h3 className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${activeId === service.id ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>
                  {service.title}
                </h3>
              </div>
              <span className={`p-2 rounded-full border transition-all duration-300 ${activeId === service.id ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-400'}`}>
                {activeId === service.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>
            
            <AnimatePresence>
              {activeId === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="pb-12 pl-0 md:pl-28 pr-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Content Column */}
                    <div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {service.description}
                        </p>
                        <ul className="space-y-4 mb-8">
                        {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2" />
                            <span>{detail}</span>
                            </li>
                        ))}
                        </ul>
                        
                        <button 
                          onClick={handleScrollToContact}
                          className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300"
                        >
                          Solicitar Presupuesto
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Image Column - Interactive zoom to see full details */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl group cursor-pointer"
                    >
                         <img 
                            src={service.image} 
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                         />
                         {/* Hover hint */}
                         <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           Hover para ver más
                         </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <div className="border-t border-gray-200" />
      </div>
    </section>
  );
};
