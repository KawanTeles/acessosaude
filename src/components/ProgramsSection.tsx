"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programas = [
  {
    title: "Mulher Poderosa",
    description: "Focado na saúde feminina, prevenção de fatores de risco e exames preventivos.",
    color: "bg-pink-500",
  },
  {
    title: "Homem de Ferro",
    description: "Foco no público masculino. Incentiva o check-up regular para evitar doenças silenciosas.",
    color: "bg-blue-600",
  },
  {
    title: "Amigo do Peito",
    description: "Voltado à saúde cardiovascular, oferecendo pacotes de check-up para proteger o coração.",
    color: "bg-red-500",
  },
  {
    title: "Pequeno Príncipe",
    description: "Dedicado à pediatria (0 a 18 anos), focando no desenvolvimento infantil.",
    color: "bg-green-500",
  },
  {
    title: "Saúde Ocular",
    description: "Cuidado completo para a sua visão com oftalmologistas especialistas.",
    color: "bg-sky-500",
  },
  {
    title: "Saúde sem Alergia",
    description: "Diagnóstico e tratamento de alergias para melhor qualidade de vida.",
    color: "bg-teal-500",
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Cuide antes. Viva melhor.
          </h2>
          <p className="text-slate-600 text-lg">
            Conheça os programas de prevenção Acesso Saúde. Pacotes exclusivos focados na sua qualidade de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programas.map((programa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group"
            >
              <div className={`h-2 w-full ${programa.color}`}></div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{programa.title}</h3>
                <p className="text-slate-600 mb-6 flex-1">{programa.description}</p>
                <Link href="#agendar" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                  Conhecer programa <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
