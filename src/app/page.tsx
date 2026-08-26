import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import UnitsSection from "@/components/UnitsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <SpecialtiesSection />
      <StatsSection />
      <UnitsSection />
      
      {/* CTA Section / WhatsApp */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-primary/20">
            {/* BG pattern */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para cuidar da sua saúde?
              </h2>
              <p className="text-primary-100 text-lg mb-0">
                Fale agora mesmo com nossa equipe de atendimento pelo WhatsApp ou agende sua consulta e exames.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a 
                href="https://wa.me/554130253500" 
                target="_blank"
                className="bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Falar no WhatsApp
              </a>
              <a 
                href="#unidades" 
                className="bg-primary-800 hover:bg-primary-900 border border-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all"
              >
                Ver Unidades
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
