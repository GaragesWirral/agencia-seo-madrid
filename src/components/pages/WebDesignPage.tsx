
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../ui/RevealText';
import { ArrowRight, Zap, Smartphone, Search } from 'lucide-react';
import { Contact } from '../Contact';
import { Link } from 'react-router-dom';

// Reusing project structure from FeaturedWork logic but inside this page as requested
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Database School",
    category: "EdTech Platform",
    year: "2024",
    image: "/images/website-design-example-1.jpg" 
  },
  {
    id: 2,
    title: "Elios Finance",
    category: "Fintech Website",
    year: "2023",
    image: "/images/website-design-example-2.jpg" 
  },
  {
    id: 3,
    title: "Webflow Campaign",
    category: "Marketing Landing Page",
    year: "2024",
    image: "/images/website-design-example-3.jpg" 
  },
  {
    id: 4,
    title: "Transform 9",
    category: "AI Healthcare SaaS",
    year: "2024",
    image: "/images/website-design-example-4.jpg" 
  }
];

export const WebDesignPage: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // SEO Meta Tags
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') || "";

    document.title = "Diseño Web Madrid";
    if (metaDescription) {
      metaDescription.setAttribute('content', "Diseño Web Madrid. Creamos tu página web y tienda online. Impulsa tu negocio online con el mejor diseño web en Madrid y posicionamiento SEO.");
    }

    // Carousel Width Calculation
    const updateWidth = () => {
        if (carousel.current) {
            // Calculate total scrollable width minus the visible width
            // This determines how far left we can drag the content
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    };

    // Initial calculation
    updateWidth();
    
    // Recalculate on resize
    window.addEventListener('resize', updateWidth);
    
    // Safety checks for layout shifts (ensures width is correct after rendering)
    const timer1 = setTimeout(updateWidth, 100);
    const timer2 = setTimeout(updateWidth, 500);
    const timer3 = setTimeout(updateWidth, 1000);

    return () => {
        // Cleanup SEO
        document.title = previousTitle;
        if (metaDescription) {
            metaDescription.setAttribute('content', previousDescription);
        }
        // Cleanup Carousel
        window.removeEventListener('resize', updateWidth);
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
    };
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const processSteps = [
    { title: "Análisis del proyecto y objetivos" },
    { title: "Diseño de interfaces (UI/UX)" },
    { title: "Desarrollo y maquetación web" },
    { title: <>Optimización <Link to="/posicionamiento-seo" className="underline hover:text-black decoration-gray-300 underline-offset-4 transition-colors">SEO On-Page</Link></> },
    { title: <>Integración con <Link to="/google-ads" className="underline hover:text-black decoration-gray-300 underline-offset-4 transition-colors">Google Ads</Link></> },
    { title: "Configuración CMS/WordPress" },
    { title: "Pruebas y correcciones" },
    { title: <>Lanzamiento y <Link to="/mantenimiento-web" className="underline hover:text-black decoration-gray-300 underline-offset-4 transition-colors">mantenimiento web</Link></> }
  ];

  return (
    <div className="pt-20">
      {/* SEO Hero Section */}
      <section className="bg-[#111] text-white py-36 md:py-48 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
           <div className="flex items-center gap-3 mb-8 text-xs font-mono uppercase tracking-wide">
             <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
             <span className="text-gray-600">/</span>
             <span className="text-gray-400">Servicios</span>
             <span className="text-gray-600">/</span>
             <span className="text-white border border-gray-700 px-3 py-1 rounded-full">Diseño Web</span>
          </div>
          <div className="max-w-5xl">
            <RevealText tag="h1" className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Diseño Web Madrid: <br/>
              <span className="text-gray-500">Páginas Web Profesionales y SEO.</span>
            </RevealText>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              En nuestra agencia de diseño web en Madrid, creamos páginas web profesionales, rápidas, <Link to="/posicionamiento-seo" className="text-white underline decoration-gray-600 underline-offset-4 hover:decoration-white transition-all">optimizadas para SEO</Link> y preparadas para escalar tu negocio online. Desarrollamos cada sitio web con un enfoque estratégico para mejorar tu visibilidad y atraer clientes en toda la Comunidad de Madrid.
            </p>
          </div>
        </div>
      </section>

      {/* Draggable Project Slider - Off-White Background to stand out */}
      <section className="py-36 md:py-48 bg-gray-50 text-black overflow-hidden border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Diseño que <br/> genera resultados.</h2>
                </div>
                <div className="mb-2">
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                        Arrastra para explorar
                    </p>
                </div>
            </div>
        </div>

        <div className="pl-4 md:pl-8">
            <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-hidden">
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }} 
                    whileTap={{ cursor: "grabbing" }}
                    dragElastic={0.2}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    className="flex gap-8 md:gap-12 pr-8 md:pr-12"
                >
                    {projects.map((project) => (
                    <motion.div 
                        key={project.id} 
                        className="min-w-[85vw] md:min-w-[700px] relative group"
                    >
                        <div className="relative overflow-hidden rounded-3xl aspect-[16/10] mb-8 border border-gray-200 bg-white shadow-lg group-hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none" />
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 pointer-events-none select-none" 
                            />
                        </div>

                        <div className="flex justify-between items-start px-2">
                            <div>
                                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">{project.category}</p>
                            </div>
                            <span className="text-gray-400 font-mono text-sm border border-gray-200 px-3 py-1 rounded-full">{project.year}</span>
                        </div>
                    </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>

        {/* Small CTA after slider */}
        <div className="mt-20 text-center px-4">
            <a 
                href="#contact" 
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-3 text-lg font-medium hover:text-gray-600 transition-colors group cursor-pointer"
            >
                <span className="border-b-2 border-black pb-1 group-hover:border-gray-600">¿Te gustan nuestros proyectos? Solicita Presupuesto</span> 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </section>

      {/* Main Content / Benefits & Process - White Background */}
      <section className="py-36 md:py-48 px-4 md:px-8 max-w-[1400px] mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
            {/* Left Column: Benefits */}
            <div className="flex flex-col justify-center">
                <span className="text-xs font-mono border border-gray-200 text-gray-500 px-3 py-1 rounded-full uppercase mb-8 self-start">Propuesta de Valor</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">
                    Nuestro Servicio de <br/>Diseño Web en Madrid
                </h2>
                <div className="space-y-8 text-xl text-gray-600 leading-relaxed mb-16">
                    <p>
                        Ofrecemos diseño web profesional, diseño web a medida y desarrollo en WordPress para empresas que buscan una web profesional, elegante y efectiva. 
                    </p>
                    <p>
                        Nuestro equipo de diseñadores web crea experiencias digitales fáciles de usar, accesibles y optimizadas para buscadores.
                    </p>
                </div>
                
                <div className="space-y-16">
                    {[
                        {
                            icon: Zap,
                            title: "Rendimiento y Funcionalidad",
                            desc: "Tiempo de carga rápido y una web fácil de administrar desde tu cuenta para un rendimiento superior."
                        },
                        {
                            icon: Search,
                            title: "Estrategias Reales de SEO",
                            desc: <>Contenido persuasivo y <Link to="/posicionamiento-seo" className="underline hover:text-black decoration-gray-300 underline-offset-4 transition-colors">preparado para SEO</Link>, construido para aparecer en los resultados de búsqueda.</>
                        },
                        {
                            icon: Smartphone,
                            title: "Web Responsive y Usabilidad",
                            desc: "Diseño visual coherente con tu identidad de marca, web responsive y experiencia del usuario superior."
                        }
                    ].map((feature, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="flex gap-8 items-start group"
                        >
                            <div className="w-20 h-20 bg-black text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:rotate-3 transition-transform duration-300">
                                <feature.icon className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="font-bold text-2xl mb-3 text-black">{feature.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Column: Process (Simplified List) */}
            <div className="lg:pt-20">
                <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-14 sticky top-32 shadow-sm border border-gray-100">
                    <h3 className="text-3xl font-bold mb-12">Proceso de Diseño Web Madrid</h3>
                    
                    <div className="space-y-8">
                        {processSteps.map((item, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 items-center border-b border-gray-200 pb-6 last:border-0 last:pb-0 group"
                            >
                                {/* Number as clean text */}
                                <span className="text-3xl font-bold text-gray-300 font-grotesk group-hover:text-black transition-colors duration-300 w-12">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                
                                <h4 className="text-lg md:text-xl font-medium text-gray-900 leading-tight group-hover:translate-x-2 transition-transform duration-300">
                                    {item.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SEO CTA Section - High Contrast Break */}
      <section className="py-32 px-4 md:px-8 bg-[#111] text-white">
         <div className="max-w-[1000px] mx-auto text-center">
            <RevealText tag="h2" className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter justify-center">
                Creemos tu página web <br/> <span className="text-gray-500">profesional en Madrid.</span>
            </RevealText>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Creamos sitios web, desarrollamos tu web y optimizamos tu posicionamiento SEO para ayudarte a alcanzar tus objetivos online. ¿Listo para tener una web de calidad?
            </p>
            <motion.a 
                href="#contact" 
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-200 transition-colors shadow-2xl cursor-pointer"
            >
                Solicita presupuesto ahora
            </motion.a>
         </div>
      </section>

      {/* Reuse Contact Section */}
      <div className="bg-gray-50">
        <Contact />
      </div>
    </div>
  );
};
