"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CartaoSection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Conheça o Cartão Acesso Saúde
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                O melhor cartão de descontos e benefícios do Brasil. Mais economia para você e proteção para toda a sua família, sem carência e sem limite de uso.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Descontos de até 70% em consultas e exames",
                  "Válido em toda a rede Acesso Saúde e parceiros",
                  "Descontos em farmácias, academias e cursos",
                  "Planos individuais e familiares"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="https://cartaoacessosaude.com.br/"
                target="_blank"
                className="inline-block bg-primary hover:bg-primary-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Conhecer o cartão
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative min-h-[400px] bg-slate-100 flex items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md aspect-[1.6/1] rounded-2xl shadow-2xl bg-gradient-to-tr from-primary to-blue-800 p-6 flex flex-col justify-between overflow-hidden"
            >
              {/* Card visual representation */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex justify-between items-center">
                <span className="text-white/80 font-bold tracking-widest uppercase text-sm">Cartão Benefício</span>
                <div className="text-white font-bold text-xl">Acesso Saúde</div>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-8 bg-amber-300/80 rounded-md mb-6 opacity-80"></div>
                <div className="text-white text-xl tracking-[0.2em] font-mono opacity-90">
                  **** **** **** ****
                </div>
              </div>
              <div className="relative z-10 flex justify-between items-end">
                <div className="text-white/80 text-sm font-medium">
                  Seu nome impresso aqui
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
