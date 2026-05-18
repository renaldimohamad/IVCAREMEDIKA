"use client";

import { ShieldCheck, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-900 text-white pt-20 pb-10 overflow-hidden">
      
      {/* Subtle top primary line indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600"></div>

      <div className="container-custom relative z-10">
        
        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info Box (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex-shrink-0 bg-white rounded-xl p-1 shadow-soft">
                <img
                  src="/ivcare_logo.png"
                  alt="IVCareMedika Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="font-heading font-extrabold text-lg tracking-wider text-white">
                  IVCARE
                </span>
                <span className="font-heading font-bold text-[10px] tracking-[0.25em] text-primary-400 -mt-0.5">
                  MEDIKA
                </span>
              </div>
            </a>
            <p className="text-[12px] text-white/50 leading-relaxed mb-6 font-bold text-left">
              IVCare Medika adalah penyedia layanan kesehatan homecare & wellness medis premium bertaraf internasional yang melayani dengan keahlian, kepedulian mendalam, serta kesterilan peralatan mutlak langsung di rumah Anda.
            </p>
            
            {/* Quick trust metrics */}
            <div className="flex items-center gap-4 text-xs font-bold text-primary-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} />
                <span>STR Certified</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              <div className="flex items-center gap-1.5">
                <Heart size={14} />
                <span>Empathetic Care</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 lg:pl-10 flex flex-col items-start text-left">
            <span className="font-heading font-extrabold text-[11px] uppercase tracking-widest text-primary-400 mb-6">
              Navigasi Halaman
            </span>
            <ul className="space-y-3.5 text-xs font-bold text-white/70">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors flex items-center gap-1">
                  <span>Beranda</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors flex items-center gap-1">
                  <span>Layanan Kami</span>
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-primary-400 transition-colors flex items-center gap-1">
                  <span>Tentang Kami</span>
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-primary-400 transition-colors flex items-center gap-1">
                  <span>Alur Layanan</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-400 transition-colors flex items-center gap-1">
                  <span>Pertanyaan (FAQ)</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors flex items-center gap-1">
                  <span>Hubungi Kontak</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Medis Services (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <span className="font-heading font-extrabold text-[11px] uppercase tracking-widest text-primary-400 mb-6">
              Layanan Medis
            </span>
            <ul className="space-y-3.5 text-xs font-bold text-white/70">
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink size={10} className="text-white/30" />
                  <span>Jasa Perawat Homecare</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink size={10} className="text-white/30" />
                  <span>Pasca Stroke Rehab</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink size={10} className="text-white/30" />
                  <span>Perawatan Luka Bedah</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink size={10} className="text-white/30" />
                  <span>Wellness Vitamin C Infusion</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink size={10} className="text-white/30" />
                  <span>Immune Booster Terapi</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink size={10} className="text-white/30" />
                  <span>Pengambilan Sampel Lab</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Address (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <span className="font-heading font-extrabold text-[11px] uppercase tracking-widest text-primary-400 mb-6">
              Kontak & Operasional
            </span>
            <div className="space-y-4 text-xs font-bold text-white/70">
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-white/30 uppercase tracking-wide mb-1">Jam Operasional</span>
                <span>Siaga 24 Jam / 7 Hari</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-white/30 uppercase tracking-wide mb-1">Wilayah Layanan</span>
                <span>DKI Jakarta & Sekitarnya</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Legal Notice Footer Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-bold text-white/30">
          <p className="text-center sm:text-left">
            © {currentYear} IVCare Medika. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-primary-400 transition-colors">Kebijakan Privasi</a>
            <div className="w-1 h-1 rounded-full bg-white/10"></div>
            <a href="#home" className="hover:text-primary-400 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
