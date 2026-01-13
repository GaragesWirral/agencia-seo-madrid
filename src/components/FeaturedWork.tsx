
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { RevealText } from './ui/RevealText';

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
    image: "/images/database-school.jpg" 
  },
  {
    id: 2,
    title: "Elios Finance",
    category: "Fintech Website",
    year: "2023",
    image: "/images/elios-finance.jpg" 
  },
  {
    id: 3,
    title: "Webflow Campaign",
    category: "Marketing Landing Page",
    year: "2024",
    image: "/images/webflow-campaign.jpg" 
  },
  {
    id: 4,
    title: "Transform 9",
    category: "AI Healthcare SaaS",
    year: "2024",
    image: "/images/transform-9.jpg" 
  }
];

export const FeaturedWork: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="work" className="py-32 bg-[#111] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
           <div className="flex items-center gap-2 mb-4">
             <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase">Portfolio</span>
          </div>
          <RevealText tag="h2" className="text-4xl md:text-6xl font-bold tracking-tighter">
            Diseño que <br/> <span className="text-gray-500">genera resultados.</span>
          </RevealText>
        </div>
        
        <div className="flex gap-4">
           <p className="text-gray-400 max-w-sm text-sm md:text-base">
             Una selección de proyectos donde la estrategia SEO y el diseño de alto impacto se encuentran. Arrastra para explorar.
           </p>
        </div>
      </div>

      <div className="pl-4 md:pl-8">
        <motion.div 
          ref={carousel} 
          className="cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-8 md:gap-12"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className="min-w-[85vw] md:min-w-[600px] relative group"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-gray-800 bg-gray-900">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="bg-white text-black p-3 rounded-full">
                        <ArrowUpRight className="w-5 h-5" />
                     </div>
                  </div>
                </div>

                <div className="flex justify-between items-start border-t border-gray-800 pt-6">
                   <div>
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-gray-500 font-mono text-sm">{project.category}</p>
                   </div>
                   <span className="text-gray-600 font-mono text-sm">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Progress Bar Visual */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-12">
         <div className="w-full h-[1px] bg-gray-800 relative overflow-hidden">
            <motion.div 
               className="absolute top-0 left-0 h-full bg-white w-1/4" 
               animate={{ x: ["0%", "300%"] }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
         </div>
         <div className="flex justify-between mt-4 text-xs font-mono text-gray-500 uppercase">
            <span>Drag to navigate</span>
            <span>{projects.length} Proyectos</span>
         </div>
      </div>
    </section>
  );
};
