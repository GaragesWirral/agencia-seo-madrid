
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, X as XIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/110342290",
      label: "LinkedIn"
    },
    {
      icon: <XIcon className="w-5 h-5" />,
      href: "https://x.com/organicpulseseo",
      label: "Twitter / X"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/organicpulseseo/?igsh=OGJrdHZleG8waHgw&utm_source=qr#",
      label: "Instagram"
    }
  ];

  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-tighter mb-4">OrganicPulse.</h2>
            <p className="text-gray-400 max-w-xs mb-6">
              Agencia de posicionamiento web estratégico. <br/>
              Diseñando el futuro digital de las empresas de Madrid.
            </p>
            {/* Social Icons Section */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-500 hover:text-white transition-colors duration-300 bg-gray-900/50 p-2.5 rounded-full border border-gray-800 hover:border-gray-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
                <li><a href="#contact" onClick={handleContactClick} className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://www.linkedin.com/company/110342290" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://x.com/organicpulseseo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter / X</a></li>
                <li><a href="https://www.instagram.com/organicpulseseo/?igsh=OGJrdHZleG8waHgw&utm_source=qr#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="mailto:contacto@agencia-seomadrid.com" className="hover:text-white transition-colors">
                    contacto@agencia-seomadrid.com
                  </a>
                </li>
                <li>
                  <a href="tel:+34613034482" className="hover:text-white transition-colors">
                    613 034 482
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2025 Organic Pulse SEO. Todos los derechos reservados.</p>
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
