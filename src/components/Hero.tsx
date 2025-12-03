
import React from 'react';
import { RevealText } from './ui/RevealText';
import { ArrowDown, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col justify-between overflow-hidden">
      
      {/* Background Image of Madrid - Changed z-index from negative to 0 */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2560&auto=format&fit=crop" 
            alt="Madrid Architecture" 
            className="w-full h-full object-cover grayscale opacity-[0.15]" 
          />
          {/* Gradient Overlays for smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4F4F4] via-transparent to-[#F4F4F4]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F4F4] via-[#F4F4F4]/40 to-transparent" />
        </motion.div>
      </div>

      {/* Background Abstract Visual */}
      <div className="absolute top-0 right-0 w-full h-full md:w-2/3 md:h-full z-0 opacity-30 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-[800px] h-[800px] rounded-full border-[1px] border-gray-400 absolute -top-40 -right-40"
        />
         <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-[600px] h-[600px] rounded-full border-[1px] border-gray-300 absolute top-20 right-20"
        />
      </div>

      <div className="max-w-[1400px] mx-auto w-full h-full flex flex-col justify-center flex-grow relative z-10">
        
        <div className="max-w-6xl mt-10 md:mt-20">
          {/* H1 - Primary Keyword */}
          <RevealText tag="h1" className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6 text-black uppercase">
            Agencia SEO Madrid
          </RevealText>

          {/* H2 - The Hook */}
          <RevealText tag="h2" delay={0.2} className="text-3xl md:text-5xl font-medium tracking-tight text-gray-800 mb-8 leading-tight max-w-4xl">
            Domina los rankings. <span className="text-gray-400">La arquitectura del crecimiento digital.</span>
          </RevealText>
          
          {/* Value Prop - Single Line & Clear */}
          <RevealText tag="p" delay={0.4} className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Transformamos tráfico en ingresos mediante <Link to="/posicionamiento-seo" className="text-black underline decoration-gray-300 hover:decoration-black transition-all">estrategias de SEO</Link> avanzadas, contenido semántico y autoridad de marca.
          </RevealText>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-end gap-8">
            <div className="flex flex-col gap-3 w-full md:w-auto">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm font-medium text-gray-500 ml-1"
                >
                    Contacta con nosotros
                </motion.span>
                <motion.a 
                    href="#contact"
                    onClick={handleScrollToContact}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="group relative inline-flex h-14 w-full md:w-64 items-center justify-center overflow-hidden rounded-full bg-black font-medium text-white transition-all duration-300 hover:w-72 hover:bg-neutral-800 shadow-xl cursor-pointer"
                >
                    <span className="mr-2">Empezar Ahora</span>
                    <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mb-2"
            >
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <img key={i} src={`https://picsum.photos/100/100?random=${i}`} alt="Client" className="w-10 h-10 rounded-full border-2 border-[#F4F4F4]" />
                    ))}
                </div>
                <div className="flex flex-col">
                    <div className="flex text-yellow-500">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">+50 Clientes Satisfechos</span>
                </div>
            </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 flex flex-col items-center md:items-start gap-2 z-10"
      >
        <div className="w-[1px] h-12 bg-gray-300"></div>
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
      </motion.div>
    </section>
  );
};
