import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acesso Saúde | Cuidar da sua saúde ficou mais fácil",
  description: "Encontre consultas, exames, programas de saúde e odontologia com a qualidade e cuidado que você merece.",
  keywords: "Acesso Saúde, consulta médica, dentista, exames, especialidades médicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased text-foreground bg-background">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
