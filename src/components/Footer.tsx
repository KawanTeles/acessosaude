import Link from "next/link";
import { HeartPulse, MapPin, Phone, Mail } from "lucide-react";

// Simple SVG Icons for Socials
const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-accent transition-colors">
                <HeartPulse size={24} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Acesso <span className="text-accent">Saúde</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Rede de clínicas médicas e odontológicas com mais de 20 anos de história, 
              cuidando da saúde da sua família com excelência e carinho.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/redeacessosaude/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/GrupoAcessoSaude" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-accent hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/acessosaude/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-accent hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links: Acesso Saúde */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Acesso Saúde</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#sobre" className="hover:text-accent transition-colors text-sm">Sobre Nós</Link></li>
              <li><Link href="#servicos" className="hover:text-accent transition-colors text-sm">Serviços</Link></li>
              <li><Link href="#especialidades" className="hover:text-accent transition-colors text-sm">Especialidades</Link></li>
              <li><Link href="#unidades" className="hover:text-accent transition-colors text-sm">Nossas Unidades</Link></li>
              <li><Link href="https://franquia.acessosaude.online/" target="_blank" className="hover:text-accent transition-colors text-sm">Seja um Franqueado</Link></li>
            </ul>
          </div>

          {/* Links: Institucional */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Institucional</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="https://acessosaude.com.br/privacidade/" target="_blank" className="hover:text-accent transition-colors text-sm">Política de Privacidade</Link></li>
              <li><Link href="https://acessosaude.com.br/investimento-social/" target="_blank" className="hover:text-accent transition-colors text-sm">Investimento Social</Link></li>
              <li><Link href="https://ouvidoria.acessosaude.com.br/" target="_blank" className="hover:text-accent transition-colors text-sm">Ouvidoria</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Atendimento</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="text-accent shrink-0 mt-0.5" size={18} />
                <span className="text-sm">(41) 3025-3500</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-accent shrink-0 mt-0.5" size={18} />
                <span className="text-sm">marketing@acessosaude.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
                <span className="text-sm leading-relaxed">
                  Encontre a unidade mais próxima de você na nossa página de unidades.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Acesso Saúde. Todos os direitos reservados.</p>
          <p>Feito com tecnologia e cuidado para você.</p>
        </div>
      </div>
    </footer>
  );
}
