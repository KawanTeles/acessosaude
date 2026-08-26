"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HeartPulse, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Consultas & Exames", href: "#servicos" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Unidades", href: "#unidades" },
    { name: "Sobre Nós", href: "#sobre" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-accent transition-colors">
            <HeartPulse size={24} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-2xl tracking-tight text-primary">
            Acesso <span className="text-accent">Saúde</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="https://wa.me/554130253500"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
          >
            WhatsApp
          </Link>
          <Link
            href="#agendar"
            className="bg-accent hover:bg-orange-500 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Agendar Atendimento
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg absolute w-full"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-slate-100 my-2 w-full"></div>
              <Link
                href="#agendar"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-white text-center p-4 rounded-xl font-bold text-lg"
              >
                Agendar Atendimento
              </Link>
              <Link
                href="https://wa.me/554130253500"
                target="_blank"
                className="bg-slate-100 text-slate-800 text-center p-4 rounded-xl font-medium"
              >
                Falar no WhatsApp
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
