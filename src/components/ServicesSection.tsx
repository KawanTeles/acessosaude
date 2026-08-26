"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Stethoscope, FlaskConical, Video, Heart, ShieldCheck, Activity } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consultas Presenciais",
    description: "Atendimento presencial humanizado com médicos especialistas de diversas áreas.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: FlaskConical,
    title: "Exames Laboratoriais",
    description: "Coleta e análise laboratorial rápida para um diagnóstico preciso.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Video,
    title: "Telemedicina",
    description: "Consultas online por vídeo com segurança e praticidade sem sair de casa.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Heart,
    title: "Programas de Saúde",
    description: "Programas exclusivos como Mulher Poderosa e Homem de Ferro focados em prevenção.",
    color: "text-rose-600",
    bgColor: "bg-rose-100",
  },
  {
    icon: ShieldCheck,
    title: "Cartão Acesso Saúde",
    description: "Cartão de descontos e benefícios exclusivos em toda a rede e parceiros.",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    icon: Activity,
    title: "Odontologia",
    description: "Tratamentos odontológicos completos para cuidar do seu sorriso.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  }
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Encontre o atendimento que precisa
            </h2>
            <p className="text-slate-600 text-lg">
              Oferecemos uma estrutura completa e integrada para a sua saúde e bem-estar.
            </p>
          </div>
          <Link href="#agendar" className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-2">
            Ver todos os serviços &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bgColor} ${service.color} group-hover:scale-110 transition-transform`}>
                <service.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              
              <Link href="#agendar" className="inline-block text-sm font-bold text-primary hover:text-accent transition-colors">
                Agendar Atendimento &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
