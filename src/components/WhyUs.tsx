
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { RevealText } from './ui/RevealText';

export const WhyUs: React.FC = () => {
  const reasons = [
    { title: "Expertos en Posicionamiento Web Orgánico", desc: "Nuestro equipo tiene años de experiencia ayudando a empresas a mejorar su posicionamiento en Google de forma sostenible." },
    { title: "Resultados Medibles", desc: "Cada acción SEO está respaldada por datos. Te mostramos exactamente cómo cada optimización impacta tus objetivos SEO." },
    { title: "Estrategias de Marketing Digital Completas", desc: "No solo hacemos SEO. Integramos marketing de contenidos, analítica, CRO y más para una estrategia de marketing completa." },
    { title: "Transparencia Total", desc: "Acceso completo a todas las métricas y acciones que realizamos en tus proyectos SEO." },
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Why Us Column */}
        <div>
           <RevealText tag="h2" className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              ¿Por Qué Somos la Mejor Agencia de Posicionamiento Web en Madrid?
           </RevealText>
           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
             Buscando una agencia SEO puede ser abrumador. Hay cientos de opciones, pero pocas son una buena agencia que realmente entienda tu negocio. Aquí está lo que nos diferencia:
           </p>
           <ul className="space-y-6">
             {reasons.map((item, idx) => (
               <li key={idx} className="flex gap-4 items-start group">
                  <div className="mt-1 bg-green-100 p-1 rounded-full text-green-700 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
               </li>
             ))}
           </ul>
        </div>

        {/* Marketing Digital Column */}
        <div className="bg-[#111] text-white p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
           {/* Abstract decoration */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full blur-[80px] opacity-30 pointer-events-none" />

           <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 leading-tight">Agencia de Marketing Digital: Más Allá del Posicionamiento Web</h2>
           <div className="space-y-6 text-gray-400 relative z-10 leading-relaxed text-lg font-light">
              <p>
                Como agencia de marketing integral, ofrecemos servicios que van más allá del posicionamiento SEO. Desde estrategias de contenido hasta marketing online completo, somos tu partner para el crecimiento digital.
              </p>
              <p>
                Entendemos que cada negocio es único. Por eso personalizamos cada propuesta para adaptarnos a tus necesidades específicas, presupuesto y objetivos. Ya sea que necesites mejorar tu posicionamiento web actual o construir una presencia digital desde cero, tenemos la experiencia en el sector para hacerlo realidad.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};
