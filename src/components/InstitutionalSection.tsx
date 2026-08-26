"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Stethoscope, HeartHandshake } from "lucide-react";

const diferenciais = [
  {
    icon: Clock,
    title: "Mais de 20 anos de história",
    description: "Duas décadas de experiência e dedicação no cuidado com a saúde dos brasileiros."
  },
  {
    icon: MapPin,
    title: "Ampla rede de atendimento",
    description: "Clínicas espalhadas por todo o Brasil para estar sempre perto de você."
  },
  {
    icon: Stethoscope,
    title: "Mais de 30 especialidades e 2.000 exames",
    description: "Estrutura completa para diagnóstico, prevenção e tratamento num só lugar."
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado e acessível",
    description: "Preços justos e pagamento facilitado sem perder a qualidade e o carinho no atendimento."
  }
];

export default function InstitutionalSection() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Saúde acessível, humana e perto de você.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                A Acesso Saúde atua há mais de duas décadas oferecendo soluções de saúde completas para pessoas que buscam atendimento médico de excelência, com agilidade e respeito, sem depender de um plano de saúde tradicional.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {diferenciais.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img 
                src="https://acessosaude.com.br/wp-content/uploads/2024/09/page-header-bg-1.jpg" 
                alt="Unidade Acesso Saúde" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
