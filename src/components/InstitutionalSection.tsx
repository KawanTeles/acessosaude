"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Stethoscope, HeartHandshake } from "lucide-react";

const diferenciais = [
  {
    icon: Clock,
    title: "20+ Anos de História",
    description: "Experiência comprovada no cuidado com a saúde dos brasileiros."
  },
  {
    icon: MapPin,
    title: "Ampla Rede",
    description: "Estrutura moderna espalhada por todo o Brasil."
  },
  {
    icon: Stethoscope,
    title: "2.000+ Exames",
    description: "Estrutura laboratorial completa num só lugar."
  },
  {
    icon: HeartHandshake,
    title: "Cuidado Humano",
    description: "Atendimento acolhedor sem mensalidades."
  }
];

export default function InstitutionalSection() {
  return (
    <section id="sobre" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-16 items-center">
          
          <div className="lg:w-1/2 relative w-full h-[500px] lg:h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100"
            >
              <img 
                src="https://acessosaude.com.br/wp-content/uploads/2024/09/page-header-bg-1.jpg" 
                alt="Unidade Acesso Saúde" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
            </motion.div>

            {/* Floating Element 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-12 -left-6 lg:-left-12 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 backdrop-blur-md border border-slate-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-black text-xl text-slate-800 tracking-tight">20+ Anos</p>
                <p className="text-xs text-slate-500 font-bold uppercase">De História</p>
              </div>
            </motion.div>

            {/* Floating Element 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-16 -right-6 lg:-right-10 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 backdrop-blur-md border border-slate-100"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Stethoscope size={24} />
              </div>
              <div>
                <p className="font-black text-xl text-slate-800 tracking-tight">30+ Áreas</p>
                <p className="text-xs text-slate-500 font-bold uppercase">Especialidades</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                Por que escolher a <br className="hidden md:block" />
                <span className="text-primary">Acesso Saúde?</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-12">
                Nós transformamos o acesso à saúde no Brasil. Oferecemos excelência médica, tecnologia avançada e atendimento humano sem que você precise pagar mensalidades caríssimas.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {diferenciais.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className="flex gap-4 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                      <item.icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 text-lg">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
