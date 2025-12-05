
import React from 'react';
import { Send } from 'lucide-react';
import { RevealText } from './ui/RevealText';

export const Contact: React.FC = () => {
  // Calculate the redirect URL dynamically to work on both localhost and production
  // Since we use HashRouter, we append /#/gracias
  const nextUrl = `${window.location.origin}/#/gracias`;

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
       <div className="max-w-4xl mx-auto">
         
         <div className="text-center mb-16">
            <RevealText tag="h2" className="text-4xl md:text-5xl font-bold mb-4 tracking-tight justify-center text-black">
              Hablemos de Tu Proyecto
            </RevealText>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ¿Listo para llevar tu negocio al siguiente nivel? Como expertos en posicionamiento web, sabemos cómo optimizar tu sitio web para que atraiga más clientes potenciales y genere más ingresos. Completa el formulario y te responderemos en 24 horas con una estrategia inicial personalizada para tu negocio.
            </p>
         </div>

         <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
            <form 
              action="https://formsubmit.co/contacto@agencia-seomadrid.com" 
              method="POST"
              className="space-y-8"
            >
               {/* FormSubmit Configuration */}
               <input type="hidden" name="_subject" value="Nuevo contacto web: Organic Pulse SEO" />
               <input type="hidden" name="_captcha" value="false" />
               <input type="hidden" name="_template" value="table" />
               <input type="hidden" name="_next" value={nextUrl} />
               <input type="text" name="_honey" style={{ display: 'none' }} />

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Nombre Completo</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      autoComplete="name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-base text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" 
                      placeholder="Tu nombre" 
                      required
                    />
                  </div>
                  {/* Teléfono */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                      Teléfono
                    </label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      autoComplete="tel"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-base text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" 
                      placeholder="+34 600 000 000" 
                      required
                    />
                  </div>
               </div>

               {/* Email */}
               <div>
                 <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                 <input 
                    id="email"
                    name="email"
                    type="email" 
                    autoComplete="email"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-base text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" 
                    placeholder="tu@email.com" 
                    required
                 />
               </div>

               {/* Mensaje */}
               <div>
                 <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">Mensaje</label>
                 <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-base text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none" 
                    placeholder="Cuéntanos sobre tu proyecto y objetivos..." 
                    required
                 />
               </div>
               
               <button 
                 type="submit" 
                 className="w-full bg-black text-white font-bold py-5 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-black/10"
               >
                 Enviar Mensaje
                 <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </form>
         </div>

       </div>
    </section>
  );
};
