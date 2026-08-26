"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Anos de história" },
  { value: "30+", label: "Especialidades Médicas" },
  { value: "2.000+", label: "Tipos de Exames" },
  { value: "15M+", label: "Atendimentos Realizados" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-primary-100 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
