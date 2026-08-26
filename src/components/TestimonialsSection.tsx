"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    content: "Fui muito bem atendido e fiz todos os meus exames num só lugar com preço justo. A praticidade fez toda a diferença, e os médicos são excelentes.",
    name: "Paciente - Avaliação Oficial",
    unit: "Curitiba, PR"
  },
  {
    content: "Achei a clínica muito bem equipada, os médicos extremamente atenciosos e o agendamento foi super rápido. Não troco por nada.",
    name: "Paciente - Avaliação Oficial",
    unit: "Mafra, SC"
  },
  {
    content: "O atendimento humano faz toda a diferença. Desde a recepção até a consulta médica, me senti acolhida e respeitada durante todo o processo.",
    name: "Paciente - Avaliação Oficial",
    unit: "Manaus, AM"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="lg:w-1/3 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                Quem conhece, <br />
                <span className="text-primary">recomenda.</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium mb-10">
                A satisfação dos nossos pacientes é o maior reflexo do nosso compromisso com a saúde e o bem-estar.
              </p>

              {/* Controls */}
              <div className="flex gap-4">
                <button 
                  onClick={handlePrev}
                  className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 relative w-full min-h-[300px]">
            <Quote className="absolute -top-10 -left-10 text-slate-200/50 z-0" size={120} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-slate-100 relative z-10"
              >
                <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed mb-10 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-slate-500 font-medium">{testimonials[currentIndex].unit}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-slate-300"}`} 
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
