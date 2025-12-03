
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText } from '../ui/RevealText';
import { Search, Globe, CheckCircle2, TrendingUp, Check, Trophy, Layers, Briefcase, LineChart, ChevronDown, ArrowRight, Plus, Minus, BarChart3, Map, Link as LinkIcon, FileText, Laptop, Share2, Megaphone } from 'lucide-react';
import { Contact } from '../Contact';
import { Link } from 'react-router-dom';

export const SeoPage: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
  useEffect(() => {
    // Store previous values
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') || "";

    // Set new values
    document.title = "Posicionamiento Web Madrid";
    if (metaDescription) {
      metaDescription.setAttribute('content', "Posicionamiento Web Madrid. Agencia SEO en Madrid especializada en posicionamiento web orgánico. Expertos en posicionamiento SEO y web.");
    }

    // Restore previous values on cleanup (unmount)
    return () => {
      document.title = previousTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const seoServices = [
    {
      id: 1,
      title: "Auditoría SEO completa",
      icon: Search,
      color: "bg-blue-50 text-blue-600 border-blue-100",
      summary: "Detectamos errores y oportunidades en la arquitectura y velocidad.",
      description: "Realizamos auditorías SEO profundas para detectar errores, oportunidades y mejoras. Analizamos la arquitectura técnica, la velocidad y la experiencia del usuario en tu sitio web. Identificamos los elementos que impedirían posicionar correctamente en buscadores."
    },
    {
      id: 2,
      title: "Estrategia SEO personalizada",
      icon: Layers,
      color: "bg-purple-50 text-purple-600 border-purple-100",
      summary: "Plan personalizado adaptado a tu sector y objetivos.",
      description: "Cada negocio es diferente. Desarrollamos una estrategia de SEO y estrategia de marketing personalizada adaptada a tu público objetivo. Incluimos acciones de SEO on page, SEO técnico y contenidos optimizados enfocados en el crecimiento orgánico. Como agencia de posicionamiento web, definimos objetivos SEO claros."
    },
    {
      id: 3,
      title: "SEO On Page",
      icon: FileText,
      color: "bg-green-50 text-green-600 border-green-100",
      summary: "Optimización técnica de títulos, estructura y contenido.",
      description: "Optimizar tu sitio web es clave para posicionar. Mejoramos títulos, contenidos, URLs, enlazado interno, imágenes y experiencia del usuario en tu sitio web. Nos enfocamos en mejorar el posicionamiento web sin perder calidad ni naturalidad. El posicionamiento de las páginas depende de esta optimización fundamental."
    },
    {
      id: 4,
      title: "SEO Off Page & Linkbuilding",
      icon: LinkIcon,
      color: "bg-orange-50 text-orange-600 border-orange-100",
      summary: "Construcción de autoridad mediante enlaces de calidad.",
      description: "El SEO off page es esencial para aumentar la autoridad. Creamos estrategias de enlaces de calidad, menciones en medios y presencia digital para fortalecer la reputación online de tu marca. Trabajamos web en internet para mejorar tu posicionamiento en buscadores."
    },
    {
      id: 5,
      title: "SEO Local en Madrid",
      icon: Map,
      color: "bg-red-50 text-red-600 border-red-100",
      summary: "Posicionamiento en Google Maps para captar clientes locales.",
      description: "Si buscas aparecer primero en Google Maps o posicionarte en un barrio específico, trabajamos SEO local adaptado a negocios físicos. Desde optimizar tu web a gestionar reseñas y perfiles locales. El SEO de Madrid requiere conocimiento específico del mercado local."
    },
    {
      id: 6,
      title: "SEO Internacional",
      icon: Globe,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
      summary: "Estrategias multilingües para expandir tu negocio.",
      description: "Si tu negocio opera fuera de España, implementamos SEO internacional con estrategias multilingües, estructura web adecuada y contenido orientado a nuevos mercados."
    },
    {
      id: 7,
      title: "Marketing y analítica web",
      icon: BarChart3,
      color: "bg-teal-50 text-teal-600 border-teal-100",
      summary: "Medición constante de tráfico, rankings y conversiones.",
      description: "Todo nuestro trabajo se acompaña de analítica web, informes, mediciones de tráfico web y acciones constantes de marketing digital y marketing online. Solo así se consiguen resultados de búsqueda estables y crecimiento real."
    }
  ];

  return (
    <div className="pt-20">
      {/* SEO Hero Section - Dark */}
      <section className="bg-[#111] text-white py-32 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
           <div className="flex items-center gap-2 mb-8">
             <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase">Agencia SEO Madrid</span>
             <span className="text-xs font-mono text-gray-500">/</span>
             <span className="text-xs font-mono text-white uppercase">Posicionamiento Web</span>
          </div>
          <div className="max-w-5xl">
            <RevealText tag="h1" className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Posicionamiento SEO Madrid: <br/> Agencia SEO en Madrid Especializada
            </RevealText>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light mb-10">
              Maximizamos tu visibilidad en Google con estrategias de posicionamiento web orgánico diseñadas para convertir visitas en clientes. Como <Link to="/" className="text-white underline decoration-gray-600 hover:decoration-white transition-all">agencia SEO Madrid</Link> especializada en posicionamiento web, trabajamos con expertos en posicionamiento web orgánico para que tu negocio domine los resultados de búsqueda.
            </p>
            
            <motion.a 
                href="#contact"
                onClick={handleScrollToContact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-lg hover:shadow-white/10"
            >
                Solicitar Auditoría Gratis
                <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Intro Section - White Background */}
      <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto bg-white relative z-10">
        <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Por qué contratar una agencia SEO en Madrid especializada?</h2>
            <p className="text-gray-600 max-w-3xl text-lg leading-relaxed mb-6">
                No basta con estar en internet. En un mundo digital cada vez más competitivo, necesitas una estrategia técnica y de contenidos que supere a tu competencia en los motores de búsqueda. Como agencia de posicionamiento SEO, combinamos técnicas de SEO avanzadas con estrategias de <Link to="/google-ads" className="text-black underline decoration-gray-300 hover:decoration-black transition-all">marketing digital</Link> para mejorar el posicionamiento web de forma sostenible.
            </p>
            <p className="text-gray-600 max-w-2xl text-lg font-medium">
                Una agencia especializada en SEO aporta experiencia técnica, conocimiento del entorno digital y una estrategia personalizada.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Optimización Técnica</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Eliminamos errores técnicos que frenan tu crecimiento. Una base sólida para competir. Nuestro equipo de técnicos SEO y consultores SEO trabaja en:
                </p>
                <div className="w-full h-[1px] bg-gray-100 mb-4" />
                <ul className="space-y-3">
                    <li className="flex gap-3 items-center text-sm font-medium text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> Sin errores de rastreo en tu sitio web</li>
                    <li className="flex gap-3 items-center text-sm font-medium text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> Velocidad de carga optimizada</li>
                    <li className="flex gap-3 items-center text-sm font-medium text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> Arquitectura web perfecta para buscadores</li>
                </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Tráfico Cualificado</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Atraemos a usuarios que buscan exactamente lo que ofreces, aumentando tus conversiones. Como expertos en SEO, nos enfocamos en tráfico orgánico de alta calidad.
                </p>
                <div className="w-full h-[1px] bg-gray-100 mb-4" />
                <ul className="space-y-3">
                    <li className="flex gap-3 items-center text-sm font-medium text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> Palabras clave transaccionales</li>
                    <li className="flex gap-3 items-center text-sm font-medium text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> Más ventas y conversiones</li>
                    <li className="flex gap-3 items-center text-sm font-medium text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> Mejor ROI en marketing digital</li>
                </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Autoridad de Marca</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Posicionamiento estable que convierte a tu empresa en la referencia del sector. Trabajamos el posicionamiento orgánico a largo plazo.
                </p>
                <div className="w-full h-[1px] bg-gray-100 mb-4" />
                <ul className="space-y-3">
                    <li className="flex gap-3 items-center text-sm font-medium text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> Link building de calidad</li>
                    <li className="flex gap-3 items-center text-sm font-medium text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> Visibilidad sostenible</li>
                    <li className="flex gap-3 items-center text-sm font-medium text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> Posicionamiento natural en Google</li>
                </ul>
            </div>
        </div>

        {/* Secondary CTA after features */}
        <div className="mt-20 flex justify-center">
             <a 
                href="#contact"
                onClick={handleScrollToContact}
                className="group inline-flex items-center gap-2 text-xl font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
             >
                Ver Cómo Podemos Ayudarte
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
             </a>
        </div>
      </section>

      {/* Services Grid - Light Grey Background for Contrast */}
      <section className="bg-gray-50 py-32 px-4 md:px-8 border-y border-gray-200">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-bold mb-6">Nuestra Metodología SEO</h2>
               <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                 Acciones concretas para resultados medibles. Como una de las mejores agencias SEO en Madrid, implementamos servicio SEO integral.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {seoServices.map((service, index) => (
                 <motion.div 
                    key={service.id}
                    layout
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className={`bg-white p-8 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg ${expandedService === service.id ? 'border-black ring-1 ring-black' : 'border-gray-200'} ${index === 6 ? 'md:col-span-2 lg:col-span-3' : ''}`}
                 >
                    <div className="flex justify-between items-start mb-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.color}`}>
                            <service.icon className="w-7 h-7" />
                        </div>
                        <div className={`p-2 rounded-full transition-colors ${expandedService === service.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                            {expandedService === service.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                    </div>
                    
                    <div className="flex gap-4 items-baseline mb-2">
                        <span className="text-xs font-mono text-gray-400">0{service.id}</span>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-2 leading-relaxed">
                        {service.summary}
                    </p>

                    <AnimatePresence>
                        {expandedService === service.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 mt-4 border-t border-gray-100">
                                    <p className="text-gray-800 text-base leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Differentiators Section - Dark Background */}
      <section className="bg-[#111] text-white py-32 px-4 md:px-8">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <span className="text-xs font-mono border border-gray-700 text-gray-400 px-3 py-1 rounded-full uppercase mb-8 inline-block">Nuestra Diferencia</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Agencia de SEO en Madrid: Resultados, no promesas</h2>
                    <p className="text-gray-400 text-xl mb-12 leading-relaxed">
                        Combinamos experiencia técnica y análisis de datos. Trabajamos tanto con pequeños negocios como con grandes empresas que buscan rentabilidad. Somos considerados entre las mejores agencias SEO en Madrid gracias a nuestra metodología probada.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors duration-300">
                            <div className="p-3 bg-black rounded-xl border border-gray-800"><LineChart className="w-6 h-6 text-blue-500" /></div>
                            <div>
                                <span className="font-bold text-lg block text-white">Estrategias basadas en datos</span>
                                <span className="text-sm text-gray-400">Analítica web avanzada</span>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors duration-300">
                            <div className="p-3 bg-black rounded-xl border border-gray-800"><Layers className="w-6 h-6 text-purple-500" /></div>
                            <div>
                                <span className="font-bold text-lg block text-white">Optimización SEO Avanzada</span>
                                <span className="text-sm text-gray-400">Técnicas de SEO actualizadas</span>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors duration-300">
                            <div className="p-3 bg-black rounded-xl border border-gray-800"><Briefcase className="w-6 h-6 text-green-500" /></div>
                            <div>
                                <span className="font-bold text-lg block text-white">Expertos Senior</span>
                                <span className="text-sm text-gray-400">Consultores SEO y especialistas</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] p-10 border border-gray-800 h-[600px] flex flex-col justify-center items-center overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20 opacity-50" />
                    
                    <div className="relative z-10 p-8 bg-black/50 backdrop-blur-md rounded-full border border-white/10 mb-8">
                        <Trophy className="w-24 h-24 text-yellow-500 drop-shadow-lg" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-6 relative z-10 text-center">Supera a tu competencia</h3>
                    <p className="text-gray-400 text-lg text-center max-w-sm relative z-10 leading-relaxed">
                        Implementamos estrategias de alto rendimiento para que tu web sea visible tanto en búsquedas orgánicas como locales.
                    </p>
                </div>
            </div>
         </div>
      </section>

      {/* NEW: Complementary Services Section */}
      <section className="py-32 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
                <span className="text-xs font-mono border border-gray-200 text-gray-500 px-3 py-1 rounded-full uppercase mb-4 inline-block">Más Valor</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Servicios Complementarios: Marketing Digital Integral</h2>
                <p className="text-gray-600 max-w-2xl text-lg">Como agencia de posicionamiento integral, ofrecemos más que solo SEO para asegurar el éxito de tu proyecto.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <Laptop className="w-10 h-10 text-black mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Diseño de páginas web</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Si necesitas crear tu sitio web desde cero o renovarlo, ofrecemos <Link to="/diseno-web" className="text-black underline decoration-gray-300 hover:decoration-black transition-all">diseño web</Link> y web a medida optimizada para buscadores desde el primer día.
                    </p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <Share2 className="w-10 h-10 text-black mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Integramos social media marketing con tu estrategia SEO para maximizar visibilidad en todos los canales digitales.
                    </p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <Megaphone className="w-10 h-10 text-black mb-6" />
                    <h3 className="text-2xl font-bold mb-4">SEO y Marketing Digital</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Combinamos SEO y marketing digital para estrategias de marketing digital completas que aumentan tanto tu tráfico orgánico como tus conversiones.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA / Final Benefits - White Background */}
      <section className="py-32 px-4 md:px-8 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 p-4 rounded-full shadow-lg flex items-center justify-center z-20">
             <ChevronDown className="w-6 h-6 text-black" />
        </div>

        <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-black">
                Contratar una agencia SEO en Madrid nunca fue tan fácil
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
                Convierte tu página web en una herramienta de ventas. Trabajamos para que tu web sea la referencia de tu sector. Si necesitas una <Link to="/diseno-web" className="text-black underline decoration-gray-300 hover:decoration-black transition-all">agencia de diseño web</Link> que también entienda posicionamiento SEO y SEM, ofrecemos servicios completos.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
                {["Posicionar en Google", "Estrategia Eficiente", "Tráfico Cualificado", "Página Optimizada"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 px-8 py-4 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-green-100 p-1 rounded-full">
                            <Check className="w-4 h-4 text-green-700" />
                        </div>
                        <span className="font-bold text-gray-800">{item}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto bg-white border-t border-gray-100">
        <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-12 font-semibold">Herramientas que Utilizamos</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold text-black">Ahrefs</span>
            <span className="text-2xl font-bold text-black">Semrush</span>
            <span className="text-2xl font-bold text-black">ScreamingFrog</span>
            <span className="text-2xl font-bold text-black">Search Console</span>
            <span className="text-2xl font-bold text-black">GA4</span>
        </div>
      </section>

      {/* Final Closing Section */}
      <section className="bg-gray-50 py-24 px-4 md:px-8">
         <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Por qué somos la mejor agencia SEO para tu proyecto?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Mejorar tu posicionamiento requiere experiencia, metodología y dedicación. Como agencia SEO en Madrid especializada, combinamos experiencia probada y un equipo senior de expertos.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Experiencia probada en Madrid</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Equipo senior de expertos</li>
                    </ul>
                </div>
                <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Ofrecemos una metodología clara para mejorar el posicionamiento web, resultados medibles con reporting transparente y una atención totalmente personalizada para cada estrategia.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Metodología clara y medible</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Atención personalizada</li>
                    </ul>
                </div>
            </div>
            <p className="mt-12 text-lg font-medium text-black">
                Si buscas posicionar tu tienda online, mejorar tu posicionamiento web o conseguir una estrategia de marketing efectiva, estamos preparados para ayudarte.
            </p>
         </div>
      </section>

      {/* Reuse Contact Section */}
      <div className="bg-white">
        <Contact />
      </div>
    </div>
  );
};
