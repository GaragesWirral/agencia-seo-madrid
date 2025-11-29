import React from 'react';

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
                <li><a href="#" className="hover:text-white">Auditoría SEO</a></li>
                <li><a href="#" className="hover:text-white">Link Building</a></li>
                <li><a href="#" className="hover:text-white">Contenidos</a></li>
                <li><a href="#" className="hover:text-white">SEO Local</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Twitter / X</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2024 Organic Pulse SEO. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};