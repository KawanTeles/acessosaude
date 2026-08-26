"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const programas = [
  {
    title: "Mulher Poderosa",
    category: "Saúde Feminina",
    description: "Programa focado na saúde e bem-estar da mulher, incluindo exames preventivos essenciais, consultas direcionadas e acompanhamento contínuo para prevenção de fatores de risco.",
    color: "bg-pink-500",
    textCol: "text-pink-500",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1200&q=80", // Placeholder if no specific image
  },
  {
    title: "Homem de Ferro",
    category: "Saúde Masculina",
    description: "Incentiva o cuidado e check-up regular para o público masculino. Foco na prevenção de doenças silenciosas, promovendo longevidade e qualidade de vida.",
    color: "bg-blue-600",
    textCol: "text-blue-600",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Amigo do Peito",
    category: "Saúde Cardiovascular",
    description: "Voltado à proteção do seu coração. Oferecemos pacotes de check-up cardiológico com eletrocardiograma e acompanhamento especialista para garantir seu ritmo ideal.",
    color: "bg-red-500",
    textCol: "text-red-500",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pequeno Príncipe",
    category: "Pediatria",
    description: "Dedicado ao desenvolvimento saudável do seu filho, de 0 a 18 anos. Acompanhamento pediátrico integral, vacinas e orientações para um crescimento seguro.",
    color: "bg-green-500",
    textCol: "text-green-500",
    image: "https://images.unsplash.com/photo-1519500099198-fd81846b8f03?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Saúde Ocular",
    category: "Oftalmologia",
    description: "Cuidado completo para a sua visão. Consultas com oftalmologistas especialistas e exames de refração para manter sua saúde ocular sempre em dia.",
    color: "bg-sky-500",
    textCol: "text-sky-500",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Saúde sem Alergia",
    category: "Alergologia",
    description: "Diagnóstico preciso e tratamento eficaz de alergias respiratórias e dermatológicas para devolver sua qualidade de vida, em qualquer estação do ano.",
    color: "bg-teal-500",
    textCol: "text-teal-500",
    image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&w=1200&q=80",
  }
];

export default function ProgramsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % programas.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % programas.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + programas.length) % programas.length);

  const currentProgram = programas[currentIndex];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight"
          >
            Cuide antes. <span className="text-slate-400 font-light">Viva melhor.</span>
          </motion.h2>
        </div>

        <div 
          className="relative rounded-[2rem] bg-slate-800 border border-slate-700 overflow-hidden flex flex-col lg:flex-row shadow-2xl min-h-[600px] lg:min-h-[500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* IMAGE SIDE (60% Desktop) */}
          <div className="lg:w-[60%] relative h-[300px] lg:h-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={currentProgram.image} 
                  alt={currentProgram.title} 
                  className="w-full h-full object-cover"
                  loading={currentIndex === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/80 via-transparent to-transparent lg:hidden" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* TEXT SIDE (40% Desktop) */}
          <div className="lg:w-[40%] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-slate-900/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full justify-center"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-2 h-2 rounded-full ${currentProgram.color}`}></span>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-300">
                    {currentProgram.category}
                  </span>
                </div>
                
                <h3 className={`text-4xl lg:text-5xl font-black mb-6 ${currentProgram.textCol}`}>
                  {currentProgram.title}
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-md">
                  {currentProgram.description}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    href="#agendar" 
                    className="inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
                  >
                    Conhecer programa <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation & Indicators */}
          <div className="absolute bottom-8 right-8 flex items-center gap-6 z-20">
            <div className="text-white font-mono font-medium tracking-widest">
              {(currentIndex + 1).toString().padStart(2, '0')} <span className="text-slate-500">/ {programas.length.toString().padStart(2, '0')}</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors"
                aria-label="Programa Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors"
                aria-label="Próximo Programa"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800 z-20">
            <motion.div 
              key={`progress-${currentIndex}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className={`h-full ${currentProgram.color}`}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
