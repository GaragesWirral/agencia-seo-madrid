
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
    image: "/images/Diseño-web-que-convierte.png"
  },
  {
    id: "02",
    title: "Posicionamiento SEO: Domina los Resultados de Búsqueda",
    description: [
      "Nuestros servicios SEO están diseñados para hacer que tu empresa aparezca en los primeros resultados cuando tus clientes buscan tus productos o servicios. Como agencia especializada en posicionamiento web en Madrid, entendemos el algoritmo de Google y sabemos cómo optimizar tu sitio web para lograr el mejor posicionamiento posible.",
      "Trabajamos con palabras clave estratégicas que atraen a tu público objetivo y generan tráfico orgánico cualificado. Ya sea que necesites posicionamiento natural para tu blog corporativo, SEO local para tu negocio físico, o SEO internacional para expandirte globalmente, tenemos la experiencia para lograrlo."
    ],
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "SEO Local: Domina tu Mercado en Madrid",
    description: "Si tienes un negocio local en Madrid, el SEO local es fundamental. Optimizamos tu presencia en Google Maps y resultados de búsqueda locales para que aparezcas cuando los clientes cercanos te buscan. Desde restaurantes hasta clínicas dentales, ayudamos a negocios locales a aumentar su visibilidad y atraer más clientes.",
    image: "/images/agenciaseomadridmejoras.jpg"
  },
  {
    id: "04",
    title: "Consultoría SEO y SEO y SEM Integrado",
    description: "Como consultor experto, ofrecemos consultoría SEO personalizada para empresas que buscan mejorar su posicionamiento. También integramos campañas de Google Ads (SEM) cuando tiene sentido estratégico, combinando posicionamiento orgánico y pagado para maximizar resultados.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "05",
    title: "Diseño Web SEO: Páginas Web Optimizadas desde el Inicio",
    description: [
      "Diseñar una página web sin pensar en SEO es un error costoso. Nuestra agencia de marketing digital crea páginas web optimizadas desde el primer día, con arquitectura web seo que facilita el rastreo de los buscadores y mejora la experiencia del usuario.",
      "Ya sea que necesites una tienda online o un sitio corporativo, diseñamos pensando en conversión y posicionamiento."
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "06",
    title: "Publicidad de Pago que Funciona",
    description: "Las campañas de Google Ads complementan tu estrategia de posicionamiento SEO en Madrid, generando resultados inmediatos mientras trabajamos en tu posicionamiento orgánico a largo plazo.",
    image: "/images/google-ads-resultados.png"
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
            Servicios de Posicionamiento Web que Impulsan tu Visibilidad Online
          </RevealText>
        </div>
        <div className="md:w-1/3 flex items-end">
           <div className="text-gray-600 text-lg">
             <p className="mb-4">Estrategias digitales que impulsan tu negocio.</p>
             <p>Un enfoque integral que combina diseño, posicionamiento y conversión para maximizar tus resultados.</p>
           </div>
        </div>
      </div>

      <div className="flex flex-col">
        {services.map((service) => (
          <div key={service.id} className="border-t border-gray-200">
            <button 
              onClick={() => setActiveId(activeId === service.id ? null : service.id)}
              className="w-full py-8 md:py-12 flex items-start md:items-center justify-between group text-left transition-colors hover:bg-gray-50 px-2"
            >
              <div className="flex items-start md:items-center gap-6 md:gap-12 w-full pr-8">
                <span className="text-sm md:text-base font-mono text-gray-400 mt-1 md:mt-0 flex-shrink-0">({service.id})</span>
                <h3 className={`text-xl md:text-3xl lg:text-4xl font-bold tracking-tight transition-colors duration-300 ${activeId === service.id ? 'text-black' : 'text-gray-400 group-hover:text-gray-600'}`}>
                  {service.title}
                </h3>
              </div>
              <span className={`p-2 rounded-full border transition-all duration-300 flex-shrink-0 ${activeId === service.id ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-400'}`}>
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
                        <div className="text-lg text-gray-700 leading-relaxed mb-8">
                          {Array.isArray(service.description) ? (
                            service.description.map((para, i) => (
                              <p key={i} className="mb-4 last:mb-0">{para}</p>
                            ))
                          ) : (
                            <p>{service.description}</p>
                          )}
                        </div>
                        
                        {service.details && service.details.length > 0 && (
                          <ul className="space-y-4 mb-8">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-600">
                                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        <button 
                          onClick={handleScrollToContact}
                          className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-300"
                        >
                          Solicitar Presupuesto
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Image Column - Animated Slide In */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden bg-gray-100 shadow-2xl"
                    >
                         <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                         />
                         {/* Subtle Overlay */}
                         <div className="absolute inset-0 bg-black/5 pointer-events-none" />
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
