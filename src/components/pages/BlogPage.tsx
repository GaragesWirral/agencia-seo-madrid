
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText } from '../ui/RevealText';
import { Contact } from '../Contact';
import { Calendar, User, ArrowRight, Tag, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Google Core Update 2025: Todo lo que necesitas saber",
    excerpt: "Analizamos los cambios más recientes en el algoritmo de búsqueda de Google y cómo afectan al posicionamiento de tu sitio web. Descubre las claves para mantener tu ranking.",
    category: "SEO",
    date: "15 Oct 2024",
    author: "Joseph Gough",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "SEO Local: Cómo dominar Google Maps en Madrid",
    excerpt: "Estrategias prácticas para optimizar tu ficha de Google Business Profile y aparecer en las búsquedas locales de tu barrio o ciudad.",
    category: "SEO Local",
    date: "10 Oct 2024",
    author: "Maria López",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2669&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "¿Cuánto cuesta realmente una página web en 2025?",
    excerpt: "Desglosamos los costes reales de desarrollo, mantenimiento y hosting. ¿Merece la pena una plantilla o un desarrollo a medida?",
    category: "Diseño Web",
    date: "05 Oct 2024",
    author: "Joseph Gough",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2664&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Google Ads vs SEO: ¿Cuál es mejor para mi negocio?",
    excerpt: "La eterna pregunta. Comparamos el retorno de inversión (ROI), costes y plazos de ambas estrategias para ayudarte a decidir dónde invertir.",
    category: "PPC",
    date: "28 Sep 2024",
    author: "Carlos Ruiz",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Core Web Vitals: La métrica que no puedes ignorar",
    excerpt: "La velocidad de carga y la estabilidad visual son factores de ranking confirmados. Aprende a medirlos y optimizarlos.",
    category: "Técnico",
    date: "22 Sep 2024",
    author: "Joseph Gough",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Tendencias de Diseño Web para el próximo año",
    excerpt: "Minimalismo, tipografías gigantes y micro-interacciones. Repasamos lo que se llevará en el diseño de interfaces.",
    category: "Diseño Web",
    date: "15 Sep 2024",
    author: "Ana Martínez",
    image: "https://images.unsplash.com/photo-1509395062550-4b0d0e68e3da?q=80&w=2670&auto=format&fit=crop"
  }
];

const categories = ["Todos", "SEO", "SEO Local", "Diseño Web", "PPC", "Técnico"];

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    // SEO Meta Tags
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') || "";

    document.title = "Blog de Marketing Digital y SEO | Organic Pulse";
    if (metaDescription) {
      metaDescription.setAttribute('content', "Blog de marketing digital, SEO y diseño web. Consejos, estrategias y novedades para hacer crecer tu negocio online.");
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#111] text-white py-32 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto text-center">
           <div className="flex items-center justify-center gap-2 mb-8">
             <span className="text-xs font-mono border border-gray-700 text-gray-400 px-2 py-1 rounded-full uppercase">Actualidad</span>
          </div>
          <div className="max-w-4xl mx-auto">
            <RevealText tag="h1" className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Blog & Insights
            </RevealText>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Estrategias de crecimiento, análisis técnicos y novedades del sector digital. Conocimiento directo de nuestra agencia a tu pantalla.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-100 sticky top-24 z-30">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 overflow-x-auto no-scrollbar">
            <div className="flex gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                            selectedCategory === cat 
                            ? 'bg-black text-white shadow-lg' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto bg-white">
        
        {/* Featured Post (Only show if 'Todos' is selected or category matches) */}
        {selectedCategory === "Todos" && (
            <div className="mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center cursor-pointer"
                >
                    <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] bg-gray-100">
                         <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                             <Tag className="w-3 h-3" /> Destacado
                         </div>
                         <img 
                            src={blogPosts[0].image} 
                            alt={blogPosts[0].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                    </div>
                    <div className="lg:pr-10">
                         <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-mono">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {blogPosts[0].date}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {blogPosts[0].author}</span>
                         </div>
                         <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-gray-600 transition-colors">
                            {blogPosts[0].title}
                         </h2>
                         <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            {blogPosts[0].excerpt}
                         </p>
                         <span className="inline-flex items-center gap-2 text-lg font-bold underline underline-offset-4 decoration-gray-300 group-hover:decoration-black transition-all">
                            Leer Artículo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                         </span>
                    </div>
                </motion.div>
            </div>
        )}

        {/* Regular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode='popLayout'>
            {filteredPosts
                .filter(post => selectedCategory !== "Todos" || !post.featured) // Skip featured if showing all
                .map((post) => (
                <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer flex flex-col h-full"
                >
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 mb-6">
                        <span className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            {post.category}
                        </span>
                        <img 
                           src={post.image} 
                           alt={post.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col flex-grow">
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-mono">
                           <span>{post.date}</span>
                           <span className="w-1 h-1 bg-gray-300 rounded-full" />
                           <span>{post.author}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-gray-600 transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                            {post.excerpt}
                        </p>
                        <span className="text-sm font-bold flex items-center gap-2 mt-auto">
                            Leer más <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
      </section>

      {/* Reuse Contact Section */}
      <div className="bg-gray-50">
        <Contact />
      </div>
    </div>
  );
};
