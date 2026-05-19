"use client";

import { ShieldCheck, Heart, ExternalLink } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  const { footer, whatsapp, logo, navLinks } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-900 text-white pt-20 pb-10 overflow-hidden">

      {/* Subtle top primary line indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600"></div>

      <Container>

        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10 text-left">

          {/* Column 1: Brand Info Box (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14">
                <img
                  src={logo.pngSrc}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-extrabold text-lg tracking-wider text-white">
                  {siteConfig.name.split(" ")[0].toUpperCase()}
                </span>
                <span className="font-heading font-bold text-[10px] tracking-[0.25em] text-primary-400 -mt-0.5">
                  {siteConfig.name.split(" ")[1].toUpperCase()}
                </span>
              </div>
            </Link>
            <p className="text-[12px] text-white/50 leading-relaxed mb-6 font-bold">
              {footer.description}
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
          <div className="lg:col-span-3 lg:pl-10 flex flex-col items-start">
            <span className="font-heading font-extrabold text-[11px] uppercase tracking-widest text-primary-400 mb-6">
              Navigasi Halaman
            </span>
            <ul className="space-y-3.5 text-xs font-bold text-white/70">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors flex items-center gap-1">
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medis Services (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col items-start">
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
              {/* <li>
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
              </li> */}
            </ul>
          </div>

          {/* Column 4: Operational Address (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col items-start">
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
            {footer.copyrightPrefix} {currentYear} {footer.copyrightSuffix}
          </p>
          <div className="flex items-center gap-6">
            {footer.legalLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-primary-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </Container>
    </footer>
  );
}
