import React, { useEffect } from 'react';
import { Contact } from '../Contact';

export const CookiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    linkCanonical.href = "https://www.agencia-seomadrid.com/cookies";
  }, []);

  return (
    <div className="pt-20">
      <section className="bg-[#111] text-white py-24 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto text-center">
            <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase mb-4 inline-block">Legal</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Política de Cookies</h1>
            <p className="text-gray-400 text-lg">Información sobre el uso de cookies en Organic Pulse SEO</p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white text-gray-800">
        <div className="max-w-[800px] mx-auto space-y-12">
            
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">1. ¿Qué son las cookies?</h2>
                <p className="leading-relaxed">
                    Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">2. Tipos de cookies utilizadas</h2>
                <p className="leading-relaxed">
                    Este sitio web utiliza las siguientes cookies propias y de terceros:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan.
                    </li>
                    <li>
                        <strong>Cookies de análisis:</strong> Son aquellas que, tratadas por nosotros o por terceros (como Google Analytics), nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.
                    </li>
                    <li>
                        <strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario (idioma, tipo de navegador, etc.).
                    </li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">3. Desactivación o eliminación de cookies</h2>
                <p className="leading-relaxed">
                    En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li><strong>Chrome:</strong> Configuración &rarr; Privacidad y seguridad &rarr; Cookies y otros datos de sitios.</li>
                    <li><strong>Firefox:</strong> Opciones &rarr; Privacidad y seguridad.</li>
                    <li><strong>Safari:</strong> Preferencias &rarr; Privacidad.</li>
                    <li><strong>Edge:</strong> Configuración &rarr; Cookies y permisos del sitio.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">4. Notas adicionales</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.</li>
                    <li>Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debe efectuar su derecho a eliminación o desactivación de las mismas.</li>
                </ul>
            </div>

        </div>
      </section>

      <div className="bg-gray-50">
        <Contact />
      </div>
    </div>
  );
};