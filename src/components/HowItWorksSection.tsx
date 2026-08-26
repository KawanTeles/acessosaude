"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Escolha o atendimento",
    description: "Selecione a especialidade médica, exame ou odontologia.",
  },
  {
    icon: MapPin,
    title: "Encontre uma unidade",
    description: "Busque a clínica mais próxima de você.",
  },
  {
    icon: Calendar,
    title: "Agende seu horário",
    description: "Tudo online ou pelo nosso WhatsApp central.",
  },
  {
    icon: HeartHandshake,
    title: "Seja atendido",
    description: "Receba um atendimento humano e de qualidade.",
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Cuidar da sua saúde <br className="hidden md:block" />
                <span className="text-accent">ficou mais fácil.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-12 max-w-lg leading-relaxed">
                A Acesso Saúde descomplica a medicina de qualidade. Sem burocracia, sem mensalidade e com o respeito que sua família merece. Veja como é simples:
              </p>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                      <step.icon size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-slate-500 font-medium">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[700px] w-full"
            >
              {/* Fallback pattern while loading */}
              <div className="absolute inset-0 bg-slate-100 animate-pulse -z-10" />
              
              <img 
                src="https://acessosaude.com.br/wp-content/uploads/2024/09/page-header-bg-1.jpg" 
                alt="Paciente sendo atendido" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
