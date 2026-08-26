"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "A importância do Apoio Psicológico",
    category: "Saúde Mental",
    date: "10 Out 2023",
    summary: "Aborda o ambiente seguro onde o paciente pode expressar sentimentos sem julgamentos, promovendo bem-estar emocional.",
    image: "https://acessosaude.com.br/wp-content/uploads/2023/10/apoio-psicologico.jpg", // Placeholder
    link: "https://acessosaude.com.br/"
  },
  {
    title: "Cuidados com o Alzheimer",
    category: "Neurologia",
    date: "25 Set 2023",
    summary: "Orientações práticas sobre como manter a rotina estruturada e um ambiente seguro para o paciente em casa.",
    image: "https://acessosaude.com.br/wp-content/uploads/2023/09/alzheimer.jpg", // Placeholder
    link: "https://acessosaude.com.br/"
  },
  {
    title: "Hanseníase - Tratamento e Prevenção",
    category: "Saúde Pública",
    date: "15 Ago 2023",
    summary: "Explica que após o início do tratamento, o paciente deixa de transmitir a doença e detalha os cuidados clínicos.",
    image: "https://acessosaude.com.br/wp-content/uploads/2023/08/hanseniase.jpg", // Placeholder
    link: "https://acessosaude.com.br/"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Informação também é cuidado.
            </h2>
            <p className="text-slate-600 text-lg">
              Acompanhe dicas de saúde, bem-estar e novidades da rede Acesso Saúde.
            </p>
          </div>
          <Link href="https://acessosaude.com.br/" target="_blank" className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-2">
            Ver todas as notícias <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 group flex flex-col hover:shadow-xl transition-all"
            >
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                {/* Fallback pattern */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20"></div>
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm line-clamp-3">
                  {post.summary}
                </p>
                <Link href={post.link} target="_blank" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors mt-auto">
                  Ler artigo <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
