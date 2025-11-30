
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Llevábamos dos años estancados. En solo 4 meses con Organic Pulse, duplicamos nuestro tráfico orgánico y, lo más importante, las conversiones.",
    author: "Carlos Mendoza",
    role: "CMO",
    company: "Fintech Spain",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    text: "Su enfoque técnico es otro nivel. Entendieron nuestra arquitectura de React cuando otras agencias no sabían ni por dónde empezar.",
    author: "Elena Rivas",
    role: "CTO",
    company: "E-Commerce Moda",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    text: "La transparencia en los reportes es total. Sabes exactamente dónde va cada euro invertido. Son un partner real, no un proveedor.",
    author: "Javier Torres",
    role: "Founder",
    company: "Constructora Torres",
    image: "https://picsum.photos/100/100?random=12"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="cases" className="py-24 md:py-32 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-24">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mb-4">
             Casos de Éxito: Proyectos SEO que Transformaron Negocios
           </h2>
           <p className="text-xl text-gray-600">
             Lo que dicen los líderes del sector.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="flex flex-col justify-between h-full bg-[#F9F9F9] p-8 md:p-10 rounded-3xl hover:shadow-lg transition-shadow duration-300">
              <div>
                <svg className="w-8 h-8 text-gray-300 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.896 14.353 15.975 15.025 15.237C15.697 14.499 16.732 14.13 18.13 14.13L19.539 14.13L19.539 11C19.539 9.623 19.123 8.528 18.291 7.715C17.459 6.901 16.347 6.494 14.956 6.494L13.891 6.494L13.891 3.515C15.939 3.515 17.753 4.172 19.333 5.485C20.913 6.798 21.703 8.637 21.703 11L21.703 21L14.017 21ZM5.296 21L5.296 18C5.296 16.896 5.632 15.975 6.304 15.237C6.976 14.499 8.011 14.13 9.409 14.13L10.818 14.13L10.818 11C10.818 9.623 10.402 8.528 9.57 7.715C8.738 6.901 7.626 6.494 6.235 6.494L5.17 6.494L5.17 3.515C7.218 3.515 9.032 4.172 10.612 5.485C12.192 6.798 12.982 8.637 12.982 11L12.982 21L5.296 21Z" />
                </svg>
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
                  "{item.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sm">{item.author}</h4>
                  <p className="text-sm text-gray-500">{item.role}, {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
