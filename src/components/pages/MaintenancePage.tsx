
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../ui/RevealText';
import { ShieldCheck, RefreshCw, Clock, Server, AlertTriangle, CheckCircle2, Activity, Wrench, TrendingUp, Lock, Database, Search, ArrowRight } from 'lucide-react';
import { Contact } from '../Contact';
import { Link } from 'react-router-dom';

export const MaintenancePage: React.FC = () => {
  useEffect(() => {
    // Store previous values
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') || "";

    // Set new values
    document.title = "Mantenimiento web";
    if (metaDescription) {
      metaDescription.setAttribute('content', "Mantenimiento web: Asegura el éxito de tu sitio web con un servicio de mantenimiento web profesional. Actualización y optimización web continua.");
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#111] text-white py-32 px-4 md:px-8 overflow-hidden relative">
        {/* Background 'Pulse' Effect */}
        <div className="absolute top-1/2 right-10 md:right-1/4 w-96 h-96 bg-green-900/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
           <div className="flex items-center gap-2 mb-8">
             <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase">Servicios</span>
             <span className="text-xs font-mono text-gray-500">/</span>
             <span className="text-xs font-mono text-white uppercase">Soporte Técnico</span>
          </div>
          <div className="max-w-4xl">
            <RevealText tag="h1" className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Mantenimiento Web WordPress: <br/>
              <span className="text-gray-500">seguridad y actualizaciones profesionales.</span>
            </RevealText>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
              Tu página web es tu activo más valioso. Nosotros nos encargamos de que esté siempre segura, actualizada y funcionando al 100%, para que tú solo te preocupes de vender. Nuestro servicio de mantenimiento web garantiza que tu sitio web esté protegido 24/7.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <motion.a 
                    href="#contact"
                    onClick={handleScrollToContact}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-lg hover:shadow-white/10"
                >
                    Solicitar Presupuesto
                    <ArrowRight className="w-5 h-5" />
                </motion.a>

                <div className="flex items-center gap-2 text-green-500 font-mono text-sm">
                    <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Estado: Sistemas Operativos · Monitorización 24/7 Activa
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Maintenance / Risks Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
                <span className="text-xs font-mono border border-gray-200 text-gray-500 px-3 py-1 rounded-full uppercase mb-6 inline-block">La Importancia</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué es el mantenimiento web y por qué es esencial?</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    El mantenimiento web es el conjunto de tareas necesarias para mantener un sitio web seguro, rápido y actualizado. Sin un mantenimiento regular, tu sitio web se vuelve vulnerable a hackeos, errores críticos y caídas del servidor que te hacen perder clientes y dinero.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Mantener tu web actualizada no es opcional: es la diferencia entre tener una web profesional que genera confianza o una página web obsoleta que aleja a tus visitantes.
                </p>
                
                <div className="bg-red-50 border border-red-100 rounded-2xl p-6 space-y-6 mb-10">
                    <h3 className="font-bold text-red-900 text-lg mb-2">⚠️ Principales Riesgos de No Realizar el Mantenimiento:</h3>
                    
                    <div className="flex gap-4 items-start">
                        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-red-900">Riesgo de Hackeo y Vulnerabilidades</h4>
                            <p className="text-red-700 text-sm leading-relaxed">Plugins desactualizados y la falta de parches de seguridad son la puerta de entrada #1 para malware.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <Server className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-red-900">Caídas del Servidor y Pérdida de Ventas</h4>
                            <p className="text-red-700 text-sm leading-relaxed">Si tu web se cae un viernes por la noche, ¿quién lo arregla? Sin soporte, cada minuto offline significa clientes perdidos.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <TrendingUp className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-red-900">Pérdida de <Link to="/posicionamiento-seo" className="underline decoration-red-300 hover:text-red-700 transition-colors">Posicionamiento SEO</Link></h4>
                            <p className="text-red-700 text-sm leading-relaxed">Los tiempos de carga lentos y una web sin optimización afectan directamente tu ranking en Google.</p>
                        </div>
                    </div>
                </div>

                <a 
                    href="#contact"
                    onClick={handleScrollToContact}
                    className="inline-flex items-center gap-2 text-lg font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors group"
                >
                    Protege tu web ahora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            <div className="relative lg:sticky lg:top-32">
                {/* Visual Representation of 'Active Protection System' */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                        <span className="font-mono text-sm text-gray-400">Sistema de Protección Activo</span>
                        <span className="font-bold text-green-600 flex items-center gap-2 text-sm bg-green-50 px-3 py-1 rounded-full">
                            <Activity className="w-4 h-4" /> En línea
                        </span>
                    </div>
                    
                    <div className="space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><RefreshCw className="w-5 h-5" /></div>
                                <div>
                                    <p className="font-bold text-sm">Actualización de Plugins y Núcleo</p>
                                    <p className="text-xs text-gray-400">Comprobando compatibilidad...</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Completado</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><ShieldCheck className="w-5 h-5" /></div>
                                <div>
                                    <p className="font-bold text-sm">Escaneo Malware y Seguridad</p>
                                    <p className="text-xs text-gray-400">Firewall activo. 0 amenazas.</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Completado</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-orange-50 rounded-lg text-orange-600"><Database className="w-5 h-5" /></div>
                                <div>
                                    <p className="font-bold text-sm">Copia de Seguridad Diaria</p>
                                    <p className="text-xs text-gray-400">Guardado en la nube.</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Completado</span>
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-gray-100 rounded-3xl" />
            </div>
        </div>
      </section>

      {/* Services Grid / Plans */}
      <section className="bg-gray-50 py-24 px-4 md:px-8 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes de Mantenimiento Web</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    ¿Qué incluye nuestro servicio? Ofrecemos planes adaptados a cada tipo de proyecto web, desde corporativos hasta tiendas online.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <ShieldCheck className="w-10 h-10 text-black mb-6" />
                    <h3 className="text-xl font-bold mb-3">Seguridad Blindada</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Instalación de firewall premium, monitoreo de tiempo de actividad (Uptime) 24/7 y limpieza de malware inmediata. Protegemos tu inversión digital.
                    </p>
                </div>
                
                {/* Card 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <RefreshCw className="w-10 h-10 text-black mb-6" />
                    <h3 className="text-xl font-bold mb-3">Actualizaciones WordPress</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Mantenemos el núcleo de WordPress, temas y plugins actualizados semanalmente. Esencial para mantener una web segura y compatible.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <Database className="w-10 h-10 text-black mb-6" />
                    <h3 className="text-xl font-bold mb-3">Copias de Seguridad</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Backups diarios automáticos almacenados en servidores externos. El mantenimiento preventivo que evita desastres mayores.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <Activity className="w-10 h-10 text-black mb-6" />
                    <h3 className="text-xl font-bold mb-3">Optimización WPO</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Limpieza de base de datos y caché para asegurar que tu web cargue rápido. El rendimiento afecta directamente a tu <Link to="/posicionamiento-seo" className="text-black underline decoration-gray-300 hover:decoration-black transition-all">SEO</Link> y conversiones.
                    </p>
                </div>

                {/* Card 5 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300 md:col-span-2 lg:col-span-2">
                    <Wrench className="w-10 h-10 text-black mb-6" />
                    <h3 className="text-xl font-bold mb-3">Soporte Técnico y Servidor</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Asistencia técnica prioritaria para resolver cualquier problema. Desde configuración de formularios hasta ajustes en el alojamiento web, nos encargamos de la gestión completa.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* NEW: Practice & Process Section (Dark) */}
      <section className="bg-[#111] text-white py-32 px-4 md:px-8">
         <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">¿En Qué Consiste en la Práctica?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "Actualización continua", desc: "Plugins y temas siempre al día." },
                    { title: "Monitorización 24/7", desc: "Vigilancia del uptime de tu sitio." },
                    { title: "Optimización SEO técnico", desc: "Mejora de estructura online." },
                    { title: "Seguridad proactiva", desc: "Escaneo constante contra malware." },
                    { title: "Backups inteligentes", desc: "Restauración rápida garantizada." },
                    { title: "Mantenimiento del servidor", desc: "Coordinación con el hosting." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                        <div className="bg-green-500/20 p-2 rounded-lg">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* NEW: Pricing & Why Hire Pro (Light) */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto bg-white">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <span className="text-xs font-mono border border-gray-200 text-gray-500 px-3 py-1 rounded-full uppercase mb-6 inline-block">Costes y Valor</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Precios y Planes</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    El coste del mantenimiento web varía según el tamaño y complejidad. Ofrecemos desde mantenimiento web barato para pequeños negocios hasta servicios premium.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Contratar un servicio de mantenimiento profesional es más económico que reparar un sitio hackeado o recuperar ventas perdidas. <span className="font-bold text-black">Es una inversión, no un gasto.</span>
                </p>
                
                <h3 className="text-2xl font-bold mb-6">Nuestra Especialidad: WordPress</h3>
                <p className="text-gray-600 mb-4">Ofrecemos:</p>
                <ul className="space-y-3">
                    <li className="flex gap-3 items-center text-gray-700"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Mantenimiento de un sitio web completo</li>
                    <li className="flex gap-3 items-center text-gray-700"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Planes personalizados y adaptados</li>
                    <li className="flex gap-3 items-center text-gray-700"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Buen mantenimiento garantizado</li>
                    <li className="flex gap-3 items-center text-gray-700"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Web actualizada constantemente</li>
                </ul>
            </div>

            <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 h-full">
                <h3 className="text-2xl font-bold mb-8">¿Por Qué Contratar un Servicio Profesional?</h3>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-black font-bold flex-shrink-0">XP</div>
                        <div>
                            <h4 className="font-bold text-lg">Experiencia en WordPress</h4>
                            <p className="text-gray-600 text-sm">Conocemos cada aspecto del <Link to="/diseno-web" className="text-black underline decoration-gray-300 hover:decoration-black transition-all">desarrollo y programación web</Link>.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-black font-bold flex-shrink-0">PRO</div>
                        <div>
                            <h4 className="font-bold text-lg">De forma profesional</h4>
                            <p className="text-gray-600 text-sm">No improvisamos, seguimos protocolos probados.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-black font-bold flex-shrink-0">24h</div>
                        <div>
                            <h4 className="font-bold text-lg">Disponibilidad</h4>
                            <p className="text-gray-600 text-sm">Tu web siempre vigilada, incluso cuando duermes.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-black font-bold flex-shrink-0">OK</div>
                        <div>
                            <h4 className="font-bold text-lg">Tranquilidad</h4>
                            <p className="text-gray-600 text-sm">Tener tu web en manos expertas te permite enfocarte en tu negocio.</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 px-4 md:px-8 text-center border-t border-gray-100">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para tener una web segura?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                El mantenimiento de páginas web es la diferencia entre un sitio profesional y uno vulnerable. Mantener un sitio web nunca fue tan fácil.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500 mb-12">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Web siempre disponible</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Sin complicaciones técnicas</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Resultados optimizados</span>
            </div>
         </div>
      </section>

      {/* Reuse Contact Section */}
      <div className="bg-gray-50">
        <Contact />
      </div>
    </div>
  );
};
