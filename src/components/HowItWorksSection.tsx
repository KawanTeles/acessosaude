"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Escolha o atendimento",
    description: "Selecione a especialidade médica, exame ou tratamento odontológico que você precisa.",
  },
  {
    icon: MapPin,
    title: "2. Encontre uma unidade",
    description: "Temos diversas clínicas espalhadas. Escolha a mais próxima de você.",
  },
  {
    icon: Calendar,
    title: "3. Agende seu horário",
    description: "Entre em contato via WhatsApp ou telefone e marque o melhor horário.",
  },
  {
    icon: HeartHandshake,
    title: "4. Seja atendido",
    description: "Compareça no dia agendado e receba um atendimento humano e de qualidade.",
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Cuidar da sua saúde ficou mais fácil
          </h2>
          <p className="text-slate-600 text-lg">
            A Acesso Saúde descomplica o acesso à medicina de qualidade. Veja como é simples ser atendido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center relative group"
            >
              <div className="w-24 h-24 rounded-full bg-slate-50 border-8 border-white shadow-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                <step.icon size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
