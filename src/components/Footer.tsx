
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-tighter mb-4">OrganicPulse.</h2>
            <p className="text-gray-400 max-w-xs">
              Agencia de posicionamiento web estratégico. <br/>
              Diseñando el futuro digital de las empresas de Madrid.
            </p>
          </div>
          
          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/diseno-web" className="hover:text-white transition-colors">Diseño Web</Link></li>
                <li><Link to="/posicionamiento-seo" className="hover:text-white transition-colors">Posicionamiento SEO</Link></li>
                <li><Link to="/mantenimiento-web" className="hover:text-white transition-colors">Mantenimiento Web</Link></li>
                <li><Link to="/google-ads" className="hover:text-white transition-colors">Google Ads</Link></li>
                <li><Link to="/seo-local" className="hover:text-white transition-colors">SEO Local</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2024 Organic Pulse SEO. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link to="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
