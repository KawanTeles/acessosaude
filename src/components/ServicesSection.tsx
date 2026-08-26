"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Stethoscope, FlaskConical, Heart, ShieldCheck, Activity, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consultas Médicas",
    description: "Atendimento presencial e online em mais de 30 especialidades com os melhores especialistas.",
    color: "text-blue-500",
    bgGradient: "from-blue-500/10 to-transparent",
    hoverGradient: "group-hover:from-blue-500 group-hover:to-blue-600",
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: FlaskConical,
    title: "Exames e Imagem",
    description: "Mais de 2.000 exames laboratoriais e de imagem com precisão, agilidade e tecnologia de ponta.",
    color: "text-purple-500",
    bgGradient: "from-purple-500/10 to-transparent",
    hoverGradient: "group-hover:from-purple-500 group-hover:to-purple-600",
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Vacinas",
    description: "Ampla variedade de vacinas para garantir a imunização segura da sua família.",
    color: "text-green-500",
    bgGradient: "from-green-500/10 to-transparent",
    hoverGradient: "group-hover:from-green-500 group-hover:to-green-600",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Activity,
    title: "Exame Toxicológico",
    description: "Rapidez e segurança para renovação de CNH e exames admissionais.",
    color: "text-rose-500",
    bgGradient: "from-rose-500/10 to-transparent",
    hoverGradient: "group-hover:from-rose-500 group-hover:to-rose-600",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Heart,
    title: "Carnê da Saúde",
    description: "Parcele consultas e exames em até 24x. Acesso facilitado sem depender de cartão de crédito.",
    color: "text-amber-500",
    bgGradient: "from-amber-500/10 to-transparent",
    hoverGradient: "group-hover:from-amber-500 group-hover:to-amber-600",
    colSpan: "md:col-span-2 lg:col-span-2",
  }
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-1/2 bg-primary/5 rounded-bl-[100px] blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Tudo para cuidar da <span className="text-primary">sua saúde</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg md:text-xl font-medium"
          >
            Uma estrutura completa e integrada. Do diagnóstico ao tratamento, tudo o que você precisa num só lugar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${service.colSpan} flex flex-col p-8 md:p-10`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${service.bgGradient} rounded-bl-full opacity-60 transition-opacity duration-500 group-hover:opacity-10`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 bg-slate-50 transition-all duration-500 ${service.hoverGradient} group-hover:text-white`}>
                <service.icon size={32} strokeWidth={2} className={`${service.color} transition-colors duration-500 group-hover:text-white`} />
              </div>
              
              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                  {service.title}
                </h3>
                
                {/* Description - Fades in on hover / visible on mobile by default */}
                <p className="text-slate-600 font-medium leading-relaxed mb-8 opacity-100 lg:opacity-0 lg:h-0 lg:overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:h-auto group-hover:-translate-y-2">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-4 flex items-center gap-3 font-bold text-primary transition-all duration-500 group-hover:text-accent group-hover:-translate-y-2">
                  <span>Agendar agora</span>
                  <ArrowRight size={18} className="transform transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
