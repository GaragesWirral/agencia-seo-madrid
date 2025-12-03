
import React from 'react';
import { MessageSquare, Target, FileText } from 'lucide-react';
import { RevealText } from './ui/RevealText';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const AgencyDifference: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
            <RevealText tag="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-4 justify-center">
                No Más <span className="text-gray-400 mx-2">Experiencias Frustrantes</span> con Agencias
            </RevealText>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto"
            >
              Redefinimos el estándar de servicio para que te centres en lo que importa: tu negocio.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <MessageSquare className="w-7 h-7" />
                    </div>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 font-bold text-sm font-mono group-hover:bg-black group-hover:text-white transition-colors duration-300">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Soporte</h3>
                <p className="text-gray-600 leading-relaxed">
                    A diferencia de las agencias que desaparecen después de contratarte, tendrás acceso directo a nuestro equipo a través de un canal dedicado. Obtén respuestas inmediatas a tus preguntas y nunca te sientas abandonado con tu marketing.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <Target className="w-7 h-7" />
                    </div>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 font-bold text-sm font-mono group-hover:bg-black group-hover:text-white transition-colors duration-300">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Estrategias Personalizadas</h3>
                <p className="text-gray-600 leading-relaxed">
                    Planes de SEO adaptados para Amazon, <Link to="/seo-local" className="text-black font-medium underline decoration-gray-300 hover:decoration-black transition-all">SEO Local</Link> y éxito Web. Alineamos nuestros esfuerzos con tus objetivos para asegurar que tu marca destaque y crezca en su nicho. Tu estrategia es única, diseñada específicamente para las necesidades de tu negocio.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <FileText className="w-7 h-7" />
                    </div>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 font-bold text-sm font-mono group-hover:bg-black group-hover:text-white transition-colors duration-300">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Informes Mensuales Detallados</h3>
                <p className="text-gray-600 leading-relaxed">
                    Recibe informes mensuales detallados que muestran exactamente cómo se están desempeñando tus inversiones en marketing. Rastreamos leads, conversiones y ROI para que puedas ver el impacto real en tu negocio.
                </p>
            </div>
        </div>
    </section>
  );
}
