"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Fui muito bem atendido e fiz todos os meus exames num só lugar com preço justo. A praticidade fez toda a diferença.",
    name: "Paciente Satisfeito",
    unit: "Acesso Saúde - Curitiba/PR"
  },
  {
    content: "Achei a clínica muito bem equipada, os médicos atenciosos e o agendamento foi super rápido. Não troco por nada.",
    name: "Paciente Satisfeito",
    unit: "Acesso Saúde - Mafra/SC"
  },
  {
    content: "O atendimento humano faz toda a diferença. Desde a recepção até a consulta médica, me senti acolhida.",
    name: "Paciente Satisfeito",
    unit: "Acesso Saúde - Manaus/AM"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Quem conhece, recomenda.
          </h2>
          <p className="text-slate-600 text-lg">
            A satisfação dos nossos pacientes é o nosso maior compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-slate-100" size={48} />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-accent fill-accent" size={18} />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 italic relative z-10">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.unit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
