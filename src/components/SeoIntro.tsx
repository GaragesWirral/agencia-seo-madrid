
import React from 'react';
import { RevealText } from './ui/RevealText';

export const SeoIntro: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-4xl mx-auto text-left md:text-center">
        <RevealText tag="h2" className="text-3xl md:text-5xl font-bold mb-8 text-black tracking-tight leading-tight">
          ¿Por Qué Contratar una Agencia SEO en Madrid Especializada?
        </RevealText>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
           <p>
             Si estás buscando una agencia que entienda el mercado local y tenga años de experiencia en posicionamiento web, has llegado al lugar correcto. Nuestra agencia de posicionamiento SEO trabaja con empresas de toda la Comunidad de Madrid, desde startups hasta corporaciones consolidadas.
           </p>
           <p>
             A diferencia de todas las agencias SEO que prometen resultados inmediatos, somos transparentes: los resultados del SEO pueden tardar entre 3 y 6 meses, pero cuando llegan, son sostenibles a medio y largo plazo. Como consultor SEO con experiencia en el sector, sabemos que una estrategia SEO bien definida es la diferencia entre el éxito y el fracaso.
           </p>
        </div>
      </div>
    </section>
  );
};
