
import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { RevealText } from './ui/RevealText';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to JSON object
    const data: Record<string, any> = {};
    formData.forEach((value, key) => data[key] = value);

    // Add FormSubmit configuration params programmatically
    // This keeps them out of the DOM if we don't want them visible, 
    // though FormSubmit works fine either way.
    const payload = {
        ...data,
        _subject: "Nuevo contacto web: Organic Pulse SEO",
        _captcha: "false", // Disable captcha for smoother UX if email is verified
        _template: "table"
    };

    try {
        const response = await fetch("https://formsubmit.co/ajax/contacto@agencia-seomadrid.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            setFormStatus('success');
            form.reset();
        } else {
            setFormStatus('error');
        }
    } catch (err) {
        setFormStatus('error');
    }
  };

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
            {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">¡Mensaje Enviado!</h3>
                    <p className="text-gray-600 text-lg max-w-md">
                        Gracias por contactar con Organic Pulse SEO. Hemos recibido tu solicitud correctamente y nos pondremos en contacto contigo en menos de 24 horas.
                    </p>
                    <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-8 text-black underline hover:text-gray-600 font-medium"
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                   
                   {/* Honeypot for spam protection */}
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
                          disabled={formStatus === 'submitting'}
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
                          disabled={formStatus === 'submitting'}
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
                        disabled={formStatus === 'submitting'}
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
                        disabled={formStatus === 'submitting'}
                     />
                   </div>

                   {formStatus === 'error' && (
                       <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                           <AlertCircle className="w-5 h-5" />
                           <p className="text-sm font-medium">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o escríbenos directamente a contacto@agencia-seomadrid.com</p>
                       </div>
                   )}
                   
                   <button 
                     type="submit"
                     disabled={formStatus === 'submitting'}
                     className="w-full bg-black text-white font-bold py-5 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-black/10 disabled:opacity-70 disabled:cursor-not-allowed"
                   >
                     {formStatus === 'submitting' ? (
                         <>
                            Enviando...
                            <Loader2 className="w-5 h-5 animate-spin" />
                         </>
                     ) : (
                         <>
                            Enviar Mensaje
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                         </>
                     )}
                   </button>
                </form>
            )}
         </div>

       </div>
    </section>
  );
};
