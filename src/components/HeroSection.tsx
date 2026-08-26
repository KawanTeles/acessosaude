"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, CalendarCheck, HeartPulse } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with modern pattern/gradient */}
      <div className="absolute inset-0 bg-slate-50 -z-10">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 rounded-bl-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-accent/5 rounded-tr-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Mais de 20 anos cuidando de você
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
                Satisfação em acolher e cuidar de <span className="text-primary">sua família.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Bem-vindo à rede Acesso Saúde. Aqui você encontra médicos especialistas, exames laboratoriais e odontologia com a qualidade e o respeito que você merece.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#agendar"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
              >
                <CalendarCheck size={20} />
                Agendar Atendimento
              </Link>
              <Link
                href="#unidades"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg"
              >
                <MapPin size={20} />
                Encontrar Unidade
              </Link>
            </motion.div>

            {/* Microtrust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <span>Atendimento Rápido</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <ArrowRight size={16} />
                </div>
                <span>Sem Burocracia</span>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square"
            >
              {/* Fallback image style while no real image is loaded */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-slate-900 flex items-center justify-center text-white">
                <span className="text-lg opacity-50">Imagem de Médicos/Clínica</span>
              </div>
              
              {/* Optional: Add an actual placeholder from unspash if needed */}
              <img 
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=800&q=80" 
                alt="Médicos cuidando de paciente" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-90"
              />
            </motion.div>
            
            {/* Floating Card Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block"
            >
              <div className="flex gap-4 items-center">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <p className="font-bold text-2xl text-slate-800">1 Milhão+</p>
                  <p className="text-xs text-slate-500 font-medium">Atendimentos realizados</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
