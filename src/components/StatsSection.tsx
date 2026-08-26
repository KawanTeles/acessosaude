"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 20, suffix: "+", label: "Anos de história" },
  { value: 30, suffix: "+", label: "Especialidades Médicas" },
  { value: 2000, suffix: "+", label: "Tipos de Exames" },
  { value: 15, suffix: "M+", label: "Atendimentos Realizados" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative -mt-16 z-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-primary rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border border-primary-800"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-60"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="flex flex-col items-center justify-center relative"
              >
                {/* Separator line for desktop */}
                {index !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
                )}
                
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter tabular-nums">
                  {isInView ? (
                    <CountUp end={stat.value} duration={2.5} separator="." />
                  ) : (
                    "0"
                  )}
                  <span className="text-accent ml-1">{stat.suffix}</span>
                </div>
                <div className="text-primary-100 font-bold text-xs md:text-sm uppercase tracking-widest opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
