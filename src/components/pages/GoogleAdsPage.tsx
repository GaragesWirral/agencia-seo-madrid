import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../ui/RevealText';
import { BarChart3, Target, MousePointer2, PieChart, TrendingUp, DollarSign, Search } from 'lucide-react';
import { Contact } from '../Contact';

export const GoogleAdsPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#111] text-white py-32 px-4 md:px-8 overflow-hidden relative">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#gradient)" />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4285F4" /> {/* Google Blue */}
                        <stop offset="100%" stopColor="#34A853" /> {/* Google Green */}
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
           <div className="flex items-center gap-2 mb-8">
             <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase">Servicios</span>
             <span className="text-xs font-mono text-gray-500">/</span>
             <span className="text-xs font-mono text-white uppercase">SEM & PPC</span>
          </div>
          <div className="max-w-4xl">
            <RevealText tag="h1" className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Agencia Google Ads Madrid <br/>
              <span className="text-gray-500">tráfico que convierte.</span>
            </RevealText>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Deje de quemar presupuesto en clics que no venden. Diseñamos campañas de PPC de alta precisión enfocadas en una sola métrica: el Retorno de Inversión (ROI).
            </p>
            
            <div className="mt-8 flex gap-6">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white">4.5x</span>
                    <span className="text-sm text-gray-500 font-mono uppercase">ROAS Promedio</span>
                </div>
                <div className="w-[1px] h-12 bg-gray-800" />
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white">-35%</span>
                    <span className="text-sm text-gray-500 font-mono uppercase">Coste por Lead</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem: Wasted Budget */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">El 90% de las cuentas de Ads tiran el dinero.</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Google Ads es complejo. Sin una gestión experta, es fácil pagar por búsquedas irrelevantes ("gratis", "empleo", "barato") que consumen tu presupuesto diario antes del mediodía.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Nosotros no trabajamos con "piloto automático". Gestionamos tus pujas manualmente, negativizamos palabras clave a diario y optimizamos tus landing pages para que cada euro cuente.
                </p>
            </div>
            
            <div className="md:w-1/2 w-full">
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative">
                    <div className="absolute top-6 right-6 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 opacity-50">
                            <div className="flex items-center gap-3">
                                <Search className="w-5 h-5 text-gray-400" />
                                <span className="text-gray-400 line-through">"servicios seo gratis"</span>
                            </div>
                            <span className="text-red-500 text-sm font-bold">-2.50€</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 opacity-50">
                            <div className="flex items-center gap-3">
                                <Search className="w-5 h-5 text-gray-400" />
                                <span className="text-gray-400 line-through">"trabajo marketing madrid"</span>
                            </div>
                            <span className="text-red-500 text-sm font-bold">-1.80€</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md border-l-4 border-l-green-500 transform scale-105">
                            <div className="flex items-center gap-3">
                                <Search className="w-5 h-5 text-green-600" />
                                <span className="text-black font-bold">"contratar agencia seo madrid"</span>
                            </div>
                            <span className="text-green-600 text-sm font-bold">CONVERSIÓN</span>
                        </div>
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-6 font-mono">FILTRADO DE TRÁFICO INTELIGENTE</p>
                </div>
            </div>
        </div>
      </section>

      {/* Campaign Types Grid */}
      <section className="bg-[#F9F9F9] py-24 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Dominamos todos los formatos</h2>
                <p className="text-gray-600">Estrategias multicanal para capturar al usuario en cualquier fase del embudo.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                        <Search className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Red de Búsqueda (Search)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Aparece exactamente cuando alguien busca tus servicios. Capturamos la demanda existente con anuncios de texto de alta relevancia y extensiones optimizadas.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                        <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Google Shopping</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Imprescindible para E-commerce. Mostramos tus productos con foto y precio directamente en los resultados, gestionando tu feed de Merchant Center.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                        <MousePointer2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Display & Remarketing</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Persigue a los usuarios que visitaron tu web sin comprar. Anuncios visuales (banners) que refuerzan tu marca y recuperan carritos abandonados.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Performance Max (PMax)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Utilizamos la IA de Google para encontrar conversiones en todo el inventario (YouTube, Gmail, Maps) con creatividades optimizadas.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
         <div className="bg-black text-white rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Transparencia Total. <br/>Propiedad Tuya.</h2>
                    <div className="space-y-6 text-gray-300">
                        <p className="text-lg">
                            Muchas agencias "secuestran" tu cuenta de Ads. Nosotros no. Tú eres el dueño de la cuenta, de los datos y de las campañas. Siempre.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                Acceso administrativo 24/7
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                Pago directo a Google (sin comisiones ocultas)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                Dashboard de resultados en tiempo real (Looker Studio)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="w-full max-w-sm bg-gray-900 rounded-2xl p-6 border border-gray-800">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-sm text-gray-400">Conversiones (Mes)</span>
                            <span className="text-green-400 text-sm font-bold">+24%</span>
                        </div>
                        <div className="flex items-end gap-2 h-32 mb-4">
                            {[20, 35, 45, 30, 55, 65, 80].map((h, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    className="flex-1 bg-white rounded-t-sm opacity-80 hover:opacity-100 hover:bg-blue-500 transition-colors"
                                />
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 font-mono">
                            <span>01</span>
                            <span>15</span>
                            <span>30</span>
                        </div>
                    </div>
                </div>
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