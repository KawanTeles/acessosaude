"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Video, HeartPulse, Apple, Dumbbell, ArrowRight } from "lucide-react";

export default function TelemedicinaSection() {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-100 text-sm font-bold mb-8 border border-primary/30 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                TECNOLOGIA PARA A SUA SAÚDE
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Saúde na palma da <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent">sua mão.</span>
              </h2>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-xl font-medium leading-relaxed">
                Nossa estrutura de teleatendimento conecta você aos melhores especialistas com total segurança, privacidade e praticidade, de onde você estiver.
              </p>
              
              <Link
                href="#agendar"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 group"
              >
                Iniciar atendimento online
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[
              { icon: Video, title: "Telemedicina", desc: "Consultas online com clínicos e especialistas." },
              { icon: HeartPulse, title: "Telepsicologia", desc: "Apoio emocional e terapia com psicólogos." },
              { icon: Apple, title: "Telenutrição", desc: "Acompanhamento nutricional focado em resultados." },
              { icon: Dumbbell, title: "Telepersonal", desc: "Orientação física profissional à distância." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon size={28} className="text-accent group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
