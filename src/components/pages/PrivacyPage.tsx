
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Contact } from '../Contact';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <section className="bg-[#111] text-white py-24 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto text-center">
            <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase mb-4 inline-block">Legal</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Política de Privacidad</h1>
            <p className="text-gray-400 text-lg">Última actualización: Octubre 2024</p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white text-gray-800">
        <div className="max-w-[800px] mx-auto space-y-12">
            
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">1. Responsable del Tratamiento</h2>
                <p className="leading-relaxed">
                    Organic Pulse SEO (en adelante, "la Agencia"), con domicilio en Madrid, España, es la responsable del tratamiento de los datos personales del usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR) relativo a la protección de las personas físicas.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">2. Finalidad del Tratamiento</h2>
                <p className="leading-relaxed">
                    Tratamos la información que nos facilitan las personas interesadas con el fin de:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Gestionar el envío de la información que nos soliciten.</li>
                    <li>Facilitar a los interesados ofertas de productos y servicios de su interés (Auditorías SEO, Consultoría, Desarrollo Web).</li>
                    <li>Mejorar la experiencia de usuario en nuestra web.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">3. Legitimación</h2>
                <p className="leading-relaxed">
                    La base legal para el tratamiento de sus datos es el consentimiento. Al rellenar los formularios de contacto en la web o suscribirse a nuestra newsletter, el usuario acepta nuestra política de privacidad.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">4. Destinatarios de los datos</h2>
                <p className="leading-relaxed">
                    Los datos no se comunicarán a terceros, salvo obligación legal. No obstante, para prestar servicios estrictamente necesarios para el desarrollo de la actividad, compartimos datos con prestadores de servicios como Google Analytics (análisis de tráfico) bajo sus correspondientes condiciones de privacidad.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">5. Derechos del Usuario</h2>
                <p className="leading-relaxed">
                    El usuario tiene derecho a:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Retirar el consentimiento en cualquier momento.</li>
                    <li>Acceder, rectificar y suprimir sus datos.</li>
                    <li>Limitar u oponerse al tratamiento de sus datos.</li>
                    <li>Solicitar la portabilidad de sus datos.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                    Para ejercer sus derechos puede dirigirse por escrito a nuestro domicilio social o enviar un email a través de nuestro <Link to="/#contact" className="underline hover:text-black">formulario de contacto</Link>.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">6. Seguridad de los Datos</h2>
                <p className="leading-relaxed">
                    La Agencia implementa medidas de seguridad técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, protegiendo los datos personales contra la destrucción, pérdida o alteración accidental o ilícita.
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
