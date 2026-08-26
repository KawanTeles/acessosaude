"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, Phone, Navigation } from "lucide-react";

// Real data from Acesso Saude
const REAL_UNITS = [
  {
    id: 1,
    name: "Acesso Saúde - Curitiba",
    city: "Curitiba, PR",
    address: "Rua Barão do Serro Azul, 198 – 1º Andar – Centro",
    phone: "(41) 3025-3500",
    hours: "Segunda a Sábado - Agendamento via Central",
    services: "Consultas médicas, odontologia, exames laboratoriais e de imagem."
  },
  {
    id: 2,
    name: "Acesso Saúde - Mafra",
    city: "Mafra, SC",
    address: "Rua Felipe Schimdt, 509 – Sala 01 – Centro II",
    phone: "(41) 3025-3500",
    hours: "Segunda a Sábado - Agendamento via Central",
    services: "Consultas médicas e exames laboratoriais."
  },
  {
    id: 3,
    name: "Acesso Saúde - Manaus (Compensa)",
    city: "Manaus, AM",
    address: "Av. Brasil, 2549 - Compensa",
    phone: "(41) 3025-3500",
    hours: "Segunda a Sábado - Agendamento via Central",
    services: "Consultas médicas e exames laboratoriais."
  },
  {
    id: 4,
    name: "Acesso Saúde - Manaus (Manoa)",
    city: "Manaus, AM",
    address: "Av. Francisco Queiroz, nº 924 - Manoa",
    phone: "(41) 3025-3500",
    hours: "Segunda a Sábado - Agendamento via Central",
    services: "Consultas médicas e exames laboratoriais."
  }
];

export default function UnitsSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUnits = REAL_UNITS.filter((unit) =>
    unit.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
    unit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="unidades" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/5 rounded-full mb-4 text-primary">
            <MapPin size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Encontre uma Acesso Saúde perto de você
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Nossa rede está em constante expansão. Busque pela sua cidade ou bairro e veja a clínica mais próxima.
          </p>

          <div className="w-full relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Digite sua cidade (ex: Curitiba, Pinhais)..."
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 px-12 py-4 rounded-2xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredUnits.length > 0 ? (
            filteredUnits.map((unit, index) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{unit.name}</h3>
                    <p className="text-primary font-medium text-sm">{unit.city}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <p className="text-slate-600 text-sm flex items-start gap-2">
                    <MapPin className="text-slate-400 shrink-0 mt-0.5" size={16} />
                    {unit.address}
                  </p>
                  <p className="text-slate-600 text-sm flex items-center gap-2">
                    <Phone className="text-slate-400 shrink-0" size={16} />
                    {unit.phone}
                  </p>
                  <p className="text-slate-600 text-sm flex items-start gap-2">
                    <Calendar className="text-slate-400 shrink-0 mt-0.5" size={16} />
                    {unit.hours}
                  </p>
                  {unit.services && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-2">Serviços Disponíveis</p>
                      <p className="text-slate-700 text-sm font-medium">{unit.services}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://wa.me/554130253500"
                    target="_blank"
                    className="flex-1 bg-green-50 text-green-700 hover:bg-green-600 hover:text-white py-2.5 rounded-xl text-center font-semibold text-sm transition-colors"
                  >
                    WhatsApp
                  </a>
                  <button className="flex-1 bg-slate-50 text-slate-700 hover:bg-primary hover:text-white flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                    <Navigation size={16} />
                    Como chegar
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500">
              Nenhuma unidade encontrada para "{searchTerm}". <br /> 
              Tente buscar por outra cidade ou entre em contato conosco.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Temporary icon component for Calendar since it wasn't imported at top
function Calendar(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
