"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Stethoscope, FlaskConical, Video, Heart, ShieldCheck, Activity } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consultas Médicas",
    description: "Atendimento presencial e online em mais de 30 especialidades médicas com profissionais qualificados.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: FlaskConical,
    title: "Exames Laboratoriais e Imagem",
    description: "Mais de 2.000 tipos de exames com equipamentos modernos para um diagnóstico preciso.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Vacinas",
    description: "Ampla variedade de vacinas para garantir a imunização de toda a família.",
    color: "text-green-600",
    bgColor: "bg-green-100",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Activity,
    title: "Exame Toxicológico",
    description: "Rapidez e segurança para renovação de CNH e admissões.",
    color: "text-rose-600",
    bgColor: "bg-rose-100",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Heart,
    title: "Carnê da Saúde",
    description: "Parcele seus procedimentos e cirurgias em até 24x, mesmo sem cartão de crédito.",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    colSpan: "md:col-span-2 lg:col-span-2",
  }
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Tudo para cuidar da sua saúde
            </h2>
            <p className="text-slate-600 text-lg">
              Oferecemos uma estrutura completa e integrada de soluções em saúde para você e sua família.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all group ${service.colSpan} flex flex-col justify-between`}
            >
              <div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bgColor} ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              </div>
              
              <Link href="#agendar" className="inline-block mt-auto text-sm font-bold text-primary hover:text-accent transition-colors">
                Saiba mais &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
