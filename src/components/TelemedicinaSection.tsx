"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Video, HeartPulse, Apple, Dumbbell } from "lucide-react";

export default function TelemedicinaSection() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary-800/20 rounded-bl-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Saúde na palma da sua mão.
              </h2>
              <p className="text-primary-100 text-lg mb-8 max-w-xl">
                O cuidado que você precisa onde você estiver. Nossa estrutura de teleatendimento conecta você aos melhores especialistas com total segurança e praticidade.
              </p>
              
              <Link
                href="#agendar"
                className="inline-block bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Conhecer atendimento online
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[
              { icon: Video, title: "Telemedicina", desc: "Consultas médicas online em diversas especialidades." },
              { icon: HeartPulse, title: "Telepsicologia", desc: "Apoio emocional e terapia com psicólogos qualificados." },
              { icon: Apple, title: "Telenutrição", desc: "Acompanhamento nutricional e reeducação alimentar." },
              { icon: Dumbbell, title: "Telepersonal", desc: "Orientação para exercícios físicos e bem-estar." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all"
              >
                <item.icon size={32} className="text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
