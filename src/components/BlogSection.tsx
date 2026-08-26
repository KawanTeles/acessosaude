"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "A importância do Apoio Psicológico na atualidade",
    category: "Saúde Mental",
    date: "10 Out 2023",
    summary: "Descubra como um ambiente seguro onde o paciente pode expressar sentimentos sem julgamentos promove bem-estar emocional.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    link: "https://acessosaude.com.br/"
  },
  {
    title: "Cuidados essenciais com pacientes de Alzheimer",
    category: "Neurologia",
    date: "25 Set 2023",
    summary: "Orientações práticas sobre como manter a rotina estruturada e um ambiente seguro e acolhedor para o paciente em casa.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80", 
    link: "https://acessosaude.com.br/"
  },
  {
    title: "Hanseníase: Tratamento e Prevenção Eficaz",
    category: "Saúde Pública",
    date: "15 Ago 2023",
    summary: "Entenda por que, após o início do tratamento clínico adequado, o paciente deixa de transmitir a doença.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    link: "https://acessosaude.com.br/"
  }
];

export default function BlogSection() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
            >
              Informação também <span className="text-primary">é cuidado.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg font-medium"
            >
              Acompanhe dicas de saúde, bem-estar e as últimas novidades preparadas por nossos especialistas.
            </motion.p>
          </div>
          <Link href="https://acessosaude.com.br/" target="_blank" className="hidden md:flex text-primary font-bold hover:text-accent transition-colors items-center gap-2 group">
            Ver todas as notícias <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-slate-100 group flex flex-col transition-all duration-500 cursor-pointer"
            >
              <div className="h-56 bg-slate-200 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary text-xs font-bold px-4 py-2 rounded-full z-10 shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 relative bg-white z-20">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-4">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                  {post.summary}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-primary font-bold group-hover:text-accent transition-colors">
                  Ler artigo <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
          <Link href="https://acessosaude.com.br/" target="_blank" className="flex text-primary font-bold hover:text-accent transition-colors items-center gap-2 group">
            Ver todas as notícias <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
