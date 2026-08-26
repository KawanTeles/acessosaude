"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, CalendarCheck, HeartPulse, ChevronDown } from "lucide-react";

const HERO_IMAGES = [
  "https://acessosaude.com.br/wp-content/uploads/2024/10/Satisfacao-em-acolher-e-cuidar-de-voce-scaled.jpg",
  "https://acessosaude.com.br/wp-content/uploads/2024/09/page-header-bg-1.jpg",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80", // Atendimento provisório
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80", // Odontologia provisório
];

export default function HeroSection() {
  const [currentImg, setCurrentImg] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // 6 seconds per image
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 min-h-[90vh] flex items-center">
      {/* Background with modern pattern/gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 rounded-bl-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-accent/5 rounded-tr-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content - Fixed while images change */}
          <motion.div 
            style={{ opacity }}
            className="flex-1 text-center lg:text-left z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 uppercase tracking-wider backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Mais de 20 anos cuidando da sua saúde
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tighter">
                Satisfação em acolher <br className="hidden md:block" />
                e cuidar de <span className="text-primary">sua família.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                A Acesso Saúde oferece consultas, exames, especialidades e soluções completas com atendimento humanizado e acessível.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#agendar"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1"
              >
                <CalendarCheck size={20} />
                Agendar atendimento
              </Link>
              <Link
                href="#unidades"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <MapPin size={20} />
                Encontrar uma unidade
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-primary font-semibold text-sm animate-bounce"
            >
              <ChevronDown size={16} />
              Conheça a Acesso Saúde
            </motion.div>
          </motion.div>

          {/* Cinematic Slideshow */}
          <div className="flex-1 w-full relative z-10">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square bg-slate-200"
            >
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentImg}
                  src={HERO_IMAGES[currentImg]}
                  alt="Acesso Saúde"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    opacity: { duration: 1.2, ease: "easeInOut" },
                    scale: { duration: 8, ease: "linear" } 
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Overlay Gradient for readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </motion.div>
            
            {/* Floating Card Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block border border-white"
            >
              <div className="flex gap-4 items-center">
                <div className="bg-accent/10 p-3 rounded-full text-accent shrink-0">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <p className="font-black text-2xl text-slate-800 tracking-tight">20+ Anos</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">História e cuidado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
