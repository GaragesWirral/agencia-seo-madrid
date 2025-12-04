import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../ui/RevealText';
import { MapPin, Star, Navigation, Users, Store, MessageSquare, Phone, Search, BarChart3, CheckCircle2, Globe, ArrowRight } from 'lucide-react';
import { Contact } from '../Contact';
import { Link } from 'react-router-dom';

export const LocalSeoPage: React.FC = () => {
  useEffect(() => {
    // Store previous values
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') || "";

    // Set new values
    document.title = "SEO Local en Madrid";
    if (metaDescription) {
      metaDescription.setAttribute('content', "SEO Local en Madrid. Mejora el posicionamiento y visibilidad de tu sitio web en la búsqueda local. Optimizar Google My Business con una agencia SEO local para mejores resultados.");
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
    linkCanonical.href = "https://www.agencia-seomadrid.com/seo-local";

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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#111] text-white py-32 px-4 md:px-8 overflow-hidden relative">
        {/* Background Map Abstract */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-ping" />
            <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-red-500 rounded-full animate-ping delay-700" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
           <div className="flex items-center gap-2 mb-8">
             <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase">Servicios</span>
             <span className="text-xs font-mono text-gray-500">/</span>
             <span className="text-xs font-mono text-white uppercase">SEO Local</span>
          </div>
          <div className="max-w-4xl">
            <RevealText tag="h1" className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              SEO Local en Madrid: <br/>
              <span className="text-gray-500">aumenta la visibilidad de tu negocio local.</span>
            </RevealText>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
              El 46% de todas las búsquedas en Google tienen intención local. Hacemos que tu negocio aparezca justo cuando tus vecinos buscan lo que ofreces. Mejoramos tu posicionamiento en Google Maps y el Local Pack.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
                 <motion.a 
                    href="#contact"
                    onClick={handleScrollToContact}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-lg hover:shadow-white/10"
                >
                    Solicitar Auditoría Local
                    <ArrowRight className="w-5 h-5" />
                </motion.a>
                <div className="flex flex-wrap gap-4 items-center">
                    <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-mono flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" /> Google Maps Top 3
                    </span>
                    <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-mono flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" /> Gestión de Reseñas
                    </span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Local */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">¿Qué es el SEO Local y Por Qué es Importante?</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        El SEO local es el proceso de optimizar tu presencia online para atraer más clientes potenciales desde búsquedas geolocalizadas. Si tienes un negocio con ubicación física (clínica, abogado, restaurante, tienda), es la diferencia entre un teléfono que suena todo el día y uno que está en silencio.
                    </p>
                    <p>
                        Permite a tu negocio aparecer en los resultados de búsqueda cuando alguien busca productos o servicios cerca. Google analiza múltiples factores para determinar qué empresas mostrar en el codiciado "Local Pack", <strong>incluyendo tu estrategia de SEO local.</strong>
                    </p>
                </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">¿Por Qué es Importante?</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    El Local Pack se lleva la inmensa mayoría de los clics en resultados de búsqueda móviles. Para un negocio local, estar ahí no es opcional. Es captar tráfico de alta conversión.
                </p>
                <img 
                    src="/images/localseo.jpg" 
                    alt="SEO Local Estrategia y Posicionamiento"
                    className="w-full rounded-2xl shadow-lg border border-gray-200"
                />
            </div>
        </div>
      </section>

      {/* 3 Pillars Grid */}
      <section className="bg-[#F9F9F9] py-24 px-4 md:px-8 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
                <span className="text-xs font-mono border border-gray-200 text-gray-500 px-3 py-1 rounded-full uppercase mb-4 inline-block">Los 3 Pilares</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Cómo Funciona el SEO Local</h2>
                <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                    Factores críticos que nuestra agencia optimiza para determinar qué negocio muestra Google.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-black transition-colors duration-300">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <Store className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">1. Google Business Profile</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Tu escaparate digital en <strong>Google My Business</strong>. Convertimos tu ficha en una landing page de alta conversión.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Información completa y precisa</li>
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Optimización visual (fotos)</li>
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Google Posts semanales</li>
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> Gestión de atributos</li>
                    </ul>
                </div>

                {/* Pillar 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-black transition-colors duration-300">
                    <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                        <Users className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">2. Consistencia NAP y Citas</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Aseguramos que tu Nombre, Dirección y Teléfono sean idénticos en todos los directorios, <strong>lo que mejora tu estrategia de SEO local.</strong>
                    </p>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> Páginas Amarillas</li>
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> Yelp y TripAdvisor</li>
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> Apple Maps</li>
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> Directorios sectoriales</li>
                    </ul>
                </div>

                {/* Pillar 3 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-black transition-colors duration-300">
                    <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                        <MessageSquare className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">3. Reseñas y Reputación</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Las estrellas venden. Un negocio con 50+ reseñas positivas <strong>domina los resultados de búsqueda local.</strong>
                    </p>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" /> Sistema automatizado</li>
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" /> Respuestas profesionales</li>
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" /> Gestión de reputación</li>
                        <li className="flex gap-3 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" /> Monitorización de menciones</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Methodology Section - Dark */}
      <section className="bg-[#111] text-white py-32 px-4 md:px-8">
         <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">Cómo Hacer SEO Local: Metodología</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-200 border-b border-gray-800 pb-4">Auditoría Inicial</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex gap-3"><span className="text-white font-bold">01.</span> Análisis de perfil y competidores</li>
                        <li className="flex gap-3"><span className="text-white font-bold">02.</span> Investigación de keywords locales</li>
                        <li className="flex gap-3"><span className="text-white font-bold">03.</span> Revisión de consistencia NAP</li>
                        <li className="flex gap-3"><span className="text-white font-bold">04.</span> Evaluación de reputación online</li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-200 border-b border-gray-800 pb-4">Optimización On-Site</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex gap-3"><span className="text-white font-bold">01.</span> Títulos y metas con keyword local</li>
                        <li className="flex gap-3"><span className="text-white font-bold">02.</span> Schema markup local</li>
                        <li className="flex gap-3"><span className="text-white font-bold">03.</span> Contenido localizado por barrios</li>
                        <li className="flex gap-3"><span className="text-white font-bold">04.</span> Optimización móvil prioritaria</li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-200 border-b border-gray-800 pb-4">Estrategia de Contenido</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex gap-3"><span className="text-white font-bold">01.</span> Páginas de ubicación específicas para tu <strong>perfil de empresa de Google</strong>.</li>
                        <li className="flex gap-3"><span className="text-white font-bold">02.</span> <Link to="/blog" className="text-gray-400 hover:text-white underline decoration-gray-700 transition-all">Blog</Link> con temas y noticias locales</li>
                        <li className="flex gap-3"><span className="text-white font-bold">03.</span> FAQs para búsquedas long-tail</li>
                        <li className="flex gap-3"><span className="text-white font-bold">04.</span> Casos de éxito locales en la gestión de <strong>Google My Business</strong>.</li>
                    </ul>
                </div>
            </div>
         </div>
      </section>

      {/* Location Pages Map Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto bg-white">
         <div className="bg-black text-white rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase mb-6 inline-block">Estrategia Avanzada</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Páginas de Ubicación</h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        Si tienes varias sedes o sirves a varios barrios de Madrid (Barrio de Salamanca, Chamartín, Malasaña...), creamos páginas específicas para cada zona y <strong>optimizamos tu perfil de empresa en Google.</strong>
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Esto te permite posicionar no solo por "abogado madrid", sino por "abogado laboralista chamartín", capturando tráfico local menos competido y más cualificado. Personalizamos cada página con dirección, mapa, teléfono y testimonios locales.
                    </p>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="grid grid-cols-2 gap-4 text-center">
                        {['Madrid Centro', 'Alcobendas', 'Pozuelo', 'Las Rozas', 'Majadahonda', 'Getafe'].map((place) => (
                            <div key={place} className="bg-gray-900 border border-gray-800 py-6 rounded-xl hover:border-white transition-colors cursor-default group">
                                <MapPin className="w-6 h-6 mx-auto mb-2 text-gray-500 group-hover:text-red-500 transition-colors" />
                                <span className="font-bold">{place}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Tools & Complementary Services */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Tools */}
            <div>
                <h3 className="text-2xl font-bold mb-8">Herramientas SEO que Utilizamos</h3>
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <div className="p-2 bg-gray-100 rounded-lg"><BarChart3 className="w-5 h-5 text-gray-700" /></div>
                        <div>
                            <h4 className="font-bold">Google Search Console & Analytics</h4>
                            <p className="text-sm text-gray-600">Monitorizamos impresiones, clics locales y comportamiento de usuarios.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="p-2 bg-gray-100 rounded-lg"><MapPin className="w-5 h-5 text-gray-700" /></div>
                        <div>
                            <h4 className="font-bold">BrightLocal / Whitespark</h4>
                            <p className="text-sm text-gray-600">Gestión profesional de citas y directorios para consistencia NAP y <strong>optimización de tu perfil de empresa en Google.</strong></p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="p-2 bg-gray-100 rounded-lg"><Search className="w-5 h-5 text-gray-700" /></div>
                        <div>
                            <h4 className="font-bold">SEMrush Local & Keyword Planner</h4>
                            <p className="text-sm text-gray-600">Seguimiento de ranking por ubicación e investigación de palabras clave.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Complementary */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-8">Servicio SEO Local Complementario</h3>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 text-black shrink-0" />
                        <div>
                            <span className="font-bold block text-lg">
                                <Link to="/google-ads" className="hover:underline decoration-black underline-offset-2 transition-all">Google Ads Local</Link>
                            </span>
                            <span className="text-gray-600 text-sm">Complementamos orgánico con campañas geolocalizadas para visibilidad inmediata.</span>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 text-black shrink-0" />
                        <div>
                            <span className="font-bold block text-lg">Marketing Digital Integrado</span>
                            <span className="text-gray-600 text-sm">Email marketing local y social media con contenido de zona.</span>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 text-black shrink-0" />
                        <div>
                            <span className="font-bold block text-lg">Seguimiento Continuo</span>
                            <span className="text-gray-600 text-sm">Monitorizamos cambios de ranking mensuales y movimientos de competidores.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* Success & Why Hire */}
      <section className="bg-gray-900 text-white py-24 px-4 md:px-8">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <h3 className="text-3xl font-bold mb-6">Funciona el SEO Local: Resultados</h3>
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white/10 p-4 rounded-xl flex items-center gap-4">
                        <span className="text-2xl">👀</span>
                        <div>
                            <p className="font-bold">Aumento de visibilidad</p>
                            <p className="text-sm text-gray-400">Pasa de página 2 a <strong>primeras posiciones en resultados de búsqueda</strong> en 3-6 meses.</p>
                        </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl flex items-center gap-4">
                        <span className="text-2xl">📞</span>
                        <div>
                            <p className="font-bold">Más llamadas</p>
                            <p className="text-sm text-gray-400">El teléfono sonará más con tráfico cualificado.</p>
                        </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl flex items-center gap-4">
                        <span className="text-2xl">🏪</span>
                        <div>
                            <p className="font-bold">Tráfico a tienda física</p>
                            <p className="text-sm text-gray-400">Google Maps genera visitas reales.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-3xl font-bold mb-6">¿Por Qué Contratar una Agencia?</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    Hacer SEO local correctamente requiere experiencia técnica y conocimiento del mercado. Nuestra agencia combina experiencia probada, conocimiento de Madrid y una <strong><Link to="/posicionamiento-seo" className="text-white underline decoration-green-500 hover:decoration-white transition-all">estrategia de SEO personalizada</Link> para mejorar tu perfil de empresa en Google.</strong>
                </p>
                <p className="text-gray-400 leading-relaxed border-l-2 border-green-500 pl-4">
                    El SEO local es el proceso más efectivo para empresas con presencia física. No compites contra toda España, sino contra tu barrio. Dominar tu área local es completamente alcanzable.
                </p>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-24 px-4 md:px-8 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Cómo Mejorar tu Posicionamiento Local Hoy</h2>
            <p className="text-xl text-gray-600 mb-12">
                ¿Listo para que tu negocio domine tu zona? <Link to="/diseno-web" className="text-black font-medium underline decoration-gray-300 hover:decoration-black transition-all">Optimizamos tu web</Link>, mejoramos tu perfil y superamos a la competencia para convertir búsquedas en clientes reales.
            </p>
            
            <motion.a 
                href="#contact" 
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-2xl cursor-pointer"
            >
                Destaca en tu Barrio Ahora
            </motion.a>
            <p className="mt-6 text-sm text-gray-500 font-medium">El SEO local permite que destaques cuando más importa.</p>
         </div>
      </section>

      {/* Reuse Contact Section */}
      <div className="bg-gray-50">
        <Contact />
      </div>
    </div>
  );
};