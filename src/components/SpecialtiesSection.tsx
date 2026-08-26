"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const SPECIALTIES = [
  "Clínica Médica", "Cardiologia", "Ginecologia", "Ortopedia", 
  "Pediatria", "Dermatologia", "Oftalmologia", "Otorrinolaringologia",
  "Urologia", "Endocrinologia", "Neurologia", "Psiquiatria",
  "Psicologia", "Nutrição", "Gastroenterologia", "Fisioterapia"
];

export default function SpecialtiesSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = SPECIALTIES.filter(s => 
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="especialidades" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Encontre sua especialidade
          </h2>
          <p className="text-slate-600 text-lg">
            Mais de 30 especialidades médicas disponíveis para você e sua família.
          </p>
        </div>

        <div className="max-w-xl mx-auto relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Buscar especialidade..."
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 px-12 py-4 rounded-2xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {filtered.length > 0 ? (
            filtered.map((specialty, index) => (
              <motion.div
                key={specialty}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="bg-slate-50 hover:bg-primary/5 hover:border-primary/30 border border-slate-200 text-slate-700 font-medium px-5 py-3 rounded-full cursor-pointer transition-all hover:-translate-y-1"
              >
                {specialty}
              </motion.div>
            ))
          ) : (
            <p className="text-slate-500 py-8">Nenhuma especialidade encontrada para "{searchTerm}".</p>
          )}
        </div>
      </div>
    </section>
  );
}
