"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, MapPin, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://acessosaude.com.br/wp-content/uploads/2024/09/page-header-bg-1.jpg" 
          alt="Clínica Acesso Saúde" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
        {/* Subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight"
          >
            Sua saúde merece <span className="text-primary">cuidado.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Junte-se às mais de 2.5 milhões de pessoas que confiam na Acesso Saúde. Agende sua consulta ou exame agora mesmo.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="#agendar"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary hover:bg-primary-600 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
            >
              <CalendarCheck size={24} />
              Agendar atendimento
            </Link>
            
            <Link
              href="#unidades"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <MapPin size={24} />
              Encontrar uma unidade
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 text-slate-400"
          >
            <p>Precisa de ajuda com o agendamento?</p>
            <Link 
              href="https://wa.me/554130253500" 
              target="_blank"
              className="flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors"
            >
              <MessageCircle size={20} />
              Falar pelo WhatsApp
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
