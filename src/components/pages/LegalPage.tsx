
import React, { useEffect } from 'react';
import { Contact } from '../Contact';

export const LegalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <section className="bg-[#111] text-white py-24 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto text-center">
            <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase mb-4 inline-block">Legal</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Aviso Legal</h1>
            <p className="text-gray-400 text-lg">Cumplimiento de la Ley LSSI-CE</p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white text-gray-800">
        <div className="max-w-[800px] mx-auto space-y-12">
            
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">1. Datos Identificativos</h2>
                <p className="leading-relaxed">
                    En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los siguientes datos:
                </p>
                <p className="leading-relaxed font-medium bg-gray-50 p-6 rounded-xl border border-gray-100">
                    Titular: Organic Pulse SEO<br/>
                    Domicilio: Madrid, España<br/>
                    Email de contacto: info@organicpulse.es<br/>
                    Actividad: Agencia de Marketing Digital y Desarrollo Web
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">2. Usuarios</h2>
                <p className="leading-relaxed">
                    El acceso y/o uso de este portal de Organic Pulse SEO atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">3. Uso del Portal</h2>
                <p className="leading-relaxed">
                    Organic Pulse SEO proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Organic Pulse SEO a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">4. Propiedad Intelectual e Industrial</h2>
                <p className="leading-relaxed">
                    Organic Pulse SEO es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, etc.).
                </p>
                <p className="leading-relaxed">
                    Todos los derechos reservados. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Organic Pulse SEO.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">5. Exclusión de Garantías y Responsabilidad</h2>
                <p className="leading-relaxed">
                    Organic Pulse SEO no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">6. Modificaciones</h2>
                <p className="leading-relaxed">
                    Organic Pulse SEO se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">7. Legislación Aplicable y Jurisdicción</h2>
                <p className="leading-relaxed">
                    La relación entre Organic Pulse SEO y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Madrid.
                </p>
            </div>

        </div>
      </section>

      <div className="bg-gray-50">
        <Contact />
      </div>
    </div>
  );
};
