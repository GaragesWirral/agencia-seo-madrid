
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText } from '../ui/RevealText';
import { Contact } from '../Contact';
import { Plus, Minus, User, Code, LineChart } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en verse resultados con el SEO?",
    answer: "El SEO es una estrategia a medio-largo plazo. Generalmente, los primeros movimientos se notan a partir del tercer mes, y los resultados significativos y el retorno de inversión (ROI) sólido suelen consolidarse entre los 6 y 12 meses, dependiendo de la competencia de tu sector."
  },
  {
    question: "¿Hacéis webs a medida o usáis plantillas?",
    answer: "Nos enfocamos en el rendimiento. Si bien podemos trabajar con plantillas premium optimizadas para reducir costes iniciales, nuestra especialidad es la personalización y optimización del código para asegurar que la web cargue rápido y cumpla con los Core Web Vitals de Google."
  },
  {
    question: "¿Hay compromiso de permanencia?",
    answer: "No creemos en atar a los clientes con contratos abusivos. Trabajamos con acuerdos mensuales porque confiamos en que nuestros resultados son la mejor razón para que te quedes. Sin embargo, recomendamos un compromiso mental de al menos 6 meses para ver la efectividad real del SEO."
  },
  {
    question: "¿Trabajáis solo con empresas de Madrid?",
    answer: "Aunque somos especialistas en el mercado de Madrid y el SEO local, trabajamos con clientes de toda España e internacionalmente. Las herramientas digitales nos permiten operar con la misma eficacia sin importar la ubicación física."
  },
  {
    question: "¿Qué incluye vuestro mantenimiento web?",
    answer: "Nuestro plan de mantenimiento incluye actualizaciones de seguridad, copias de seguridad diarias en la nube, monitoreo de tiempo de actividad 24/7 y optimización de velocidad. Es un seguro de vida para tu negocio digital."
  }
];

export const AboutPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // SEO Meta Tags
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') || "";

    document.title = "Sobre Nosotros | Organic Pulse SEO";
    if (metaDescription) {
      metaDescription.setAttribute('content', "Conoce a Joseph Gough y al equipo detrás de Organic Pulse SEO. Expertos en diseño web y posicionamiento SEO en Madrid con enfoque técnico.");
    }

    // Robots
    let metaRobots = document.querySelector("meta[name='robots']") as HTMLMetaElement;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large";

    // Canonical
    let linkCanonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.agencia-seomadrid.com/sobre-nosotros";

    return () => {
      document.title = previousTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#111] text-white py-32 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto text-center">
           <div className="flex items-center justify-center gap-2 mb-8">
             <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase">La Agencia</span>
          </div>
          <div className="max-w-4xl mx-auto">
            <RevealText tag="h1" className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Sobre Nosotros
            </RevealText>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Somos una agencia técnica. Sin comerciales agresivos ni promesas vacías. Solo estrategia, código y resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 px-4 md:px-8 bg-white max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Image / Visual */}
            <div className="w-full md:w-1/2 relative">
                <div className="aspect-[3/4] md:aspect-square rounded-[2rem] overflow-hidden bg-gray-100 relative shadow-2xl">
                    <img 
                        src="/images/joseph-gough-profile.jpg" 
                        alt="Joseph Gough" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                        <h3 className="text-white text-2xl font-bold">Joseph Gough</h3>
                        <p className="text-gray-300 font-mono text-sm">Fundador & Estratega SEO</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ingeniería Web y Marketing Digital</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        Hola, soy <strong>Joseph Gough</strong>.
                    </p>
                    <p>
                        Fundé Organic Pulse SEO con una idea clara: cerrar la brecha entre el diseño web estético y el rendimiento técnico en buscadores. A mis 30 años, he dedicado la última década a perfeccionar estrategias digitales que funcionan en el mundo real, no solo en la teoría.
                    </p>
                    <p>
                        Mi enfoque combina la precisión del desarrollo web con la visión estratégica del marketing. No busco ser la agencia más grande, sino la más efectiva para mis clientes. Me involucro personalmente en la arquitectura de cada proyecto para asegurar que la base técnica sea impecable.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                        <Code className="w-8 h-8 mb-3 text-black" />
                        <span className="font-bold text-sm">Desarrollo Limpio</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                        <LineChart className="w-8 h-8 mb-3 text-black" />
                        <span className="font-bold text-sm">SEO Técnico</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                        <User className="w-8 h-8 mb-3 text-black" />
                        <span className="font-bold text-sm">Trato Directo</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
                <p className="text-gray-500">Resolvemos tus dudas antes de empezar.</p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <button 
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                            aria-expanded={openFaq === index}
                        >
                            <span className="font-bold text-lg text-gray-900 pr-8">{faq.question}</span>
                            <span className={`p-2 rounded-full border transition-colors flex-shrink-0 ${openFaq === index ? 'bg-black text-white border-black' : 'bg-gray-50 text-gray-400 border-gray-200'}`}>
                                {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                        </button>
                        
                        <motion.div
                            initial={false}
                            animate={{ 
                                height: openFaq === index ? "auto" : 0,
                                opacity: openFaq === index ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                {faq.answer}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Reuse Contact Section */}
      <div className="bg-white">
        <Contact />
      </div>
    </div>
  );
};
