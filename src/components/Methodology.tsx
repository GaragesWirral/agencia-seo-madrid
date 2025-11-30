
import React from 'react';
import { Search, Globe, Settings } from 'lucide-react';
import { RevealText } from './ui/RevealText';

export const Methodology: React.FC = () => {
  const steps = [
    {
      title: "1. Auditoría SEO Completa",
      description: "Analizamos tu sitio web desde todos los ángulos: velocidad, estructura, contenido y autoridad. Identificamos oportunidades de optimización que mejorar el posicionamiento web de tu empresa en los motores de búsqueda.",
      icon: Search
    },
    {
      title: "2. Estrategia de Marketing Digital Integrada",
      description: "El SEO es una estrategia que debe trabajar en conjunto con otras acciones de marketing online. Integramos posicionamiento orgánico con Google Ads cuando es necesario, creando una estrategia digital completa que genera tráfico de calidad y clientes potenciales.",
      icon: Globe
    },
    {
      title: "3. Optimización On-Page y Off-Page",
      description: "Trabajamos para mejorar el posicionamiento orgánico mediante optimización técnica y construcción de enlaces naturales. Nuestros expertos en SEO optimizan cada elemento de tu página web para que el buscador entienda tu contenido y lo posicione en las primeras posiciones de Google.",
      icon: Settings
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto bg-gray-50 rounded-[3rem] my-12">
      <div className="mb-16 text-center">
         <RevealText tag="h2" className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Nuestra Metodología de Trabajo: <br/> Estrategia de Posicionamiento que Funciona
         </RevealText>
         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Como mejor agencia SEO de Madrid, nuestra metodología combina SEO técnico, contenido de calidad y construcción de autoridad. Cada estrategia de SEO está personalizada según tu público objetivo y objetivos comerciales.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
             <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7" />
             </div>
             <h3 className="text-xl font-bold mb-4">{step.title}</h3>
             <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
