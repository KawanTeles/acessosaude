"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img 
                src="https://acessosaude.com.br/novo/wp-content/uploads/2024/09/acesso-branca.png" 
                alt="Acesso Saúde" 
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm">
              Mais de 20 anos oferecendo acesso à saúde de qualidade com atendimento humanizado, acessível e perto de você.
            </p>
            
            <div className="flex gap-4">
              <a href="https://www.facebook.com/AcessoSaude/" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/acessosaude.inst/" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/company/acessosaude/" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Acesso Saúde</h4>
            <ul className="space-y-4">
              <li><Link href="#sobre" className="hover:text-primary transition-colors">Quem somos</Link></li>
              <li><Link href="https://acessosaude.com.br/historia/" target="_blank" className="hover:text-primary transition-colors">Nossa história</Link></li>
              <li><Link href="#unidades" className="hover:text-primary transition-colors">Unidades</Link></li>
              <li><Link href="#contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Para pacientes</h4>
            <ul className="space-y-4">
              <li><Link href="#agendar" className="hover:text-primary transition-colors">Consultas</Link></li>
              <li><Link href="#agendar" className="hover:text-primary transition-colors">Exames</Link></li>
              <li><Link href="#especialidades" className="hover:text-primary transition-colors">Especialidades</Link></li>
              <li><Link href="#agendar" className="hover:text-primary transition-colors">Telemedicina</Link></li>
              <li><Link href="#programas" className="hover:text-primary transition-colors">Programas de Prevenção</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Serviços</h4>
            <ul className="space-y-4">
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Vacinas</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Exame Toxicológico</Link></li>
              <li><Link href="https://cartaoacessosaude.com.br/" target="_blank" className="hover:text-primary transition-colors">Cartão Acesso Saúde</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Carnê da Saúde</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Institucional</h4>
              <ul className="space-y-4">
                <li><Link href="https://acessosaude.com.br/privacidade/" target="_blank" className="hover:text-primary transition-colors">Privacidade (LGPD)</Link></li>
                <li><Link href="https://acessosaude.com.br/investimento-social/" target="_blank" className="hover:text-primary transition-colors">Investimento Social</Link></li>
                <li><Link href="https://ouvidoria.acessosaude.com.br/" target="_blank" className="hover:text-primary transition-colors">Ouvidoria</Link></li>
                <li><Link href="https://franquia.acessosaude.online/" target="_blank" className="hover:text-accent font-medium transition-colors">Seja um Franqueado</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Canais Oficiais de Atendimento</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Central de Agendamento</p>
                    <p className="text-lg font-bold text-primary">(41) 3025-3500</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">SAC (Atendimento ao Cliente)</p>
                    <p className="text-lg font-bold text-accent">(41) 3411-5699</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-slate-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Marketing e Parcerias</p>
                    <a href="mailto:marketing@acessosaude.com.br" className="text-sm hover:text-primary transition-colors">marketing@acessosaude.com.br</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-slate-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Dúvidas / CIRE / LGPD</p>
                    <a href="mailto:cire@acessosaude.com.br" className="text-sm hover:text-primary transition-colors">cire@acessosaude.com.br</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Acesso Saúde. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://acessosaude.com.br/privacidade/" target="_blank" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="https://acessosaude.com.br/" target="_blank" className="hover:text-white transition-colors">
              Site Oficial
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
