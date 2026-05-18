"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Home,
  Heart,
  ClipboardCheck,
  Calendar
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Tenaga Kesehatan Berpengalaman",
    description: "Dilayani oleh tenaga kesehatan sesuai kompetensi dan SOP."
  },
  {
    icon: Home,
    title: "Layanan di Rumah",
    description: "Praktis, nyaman, dan efisien tanpa perlu keluar rumah."
  },
  {
    icon: Heart,
    title: "Pendekatan Personal",
    description: "Perawatan dengan empati dan komunikasi yang baik."
  },
  {
    icon: ClipboardCheck,
    title: "Aman & Terpercaya",
    description: "Keselamatan dan kenyamanan Anda adalah prioritas kami."
  }
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-white gradient-premium pt-32 pb-40 lg:pt-40 lg:pb-44 flex flex-col justify-between overflow-visible"
    >
      {/* Premium Ambient Background Blur Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-100/35 rounded-full blur-[130px] -translate-y-1/3 translate-x-1/4 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/25 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      {/* Main Container */}
      <div className="container-custom relative z-10 w-full flex-grow flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

          {/* Left Side Content Block (6 Cols for balanced visual roominess and perfect two-line headline) */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Small Badge/Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100/40 text-primary-600 font-extrabold text-[11px] tracking-wider mb-6">
              Layanan Kesehatan di Rumah Anda
            </div>

            {/* Headline (2 lines matching reference pixel-perfectly) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-navy-700 leading-[1.2] mb-6 tracking-tight">
              Perawatan Profesional,<br className="hidden lg:inline" />
              Kenyamanan <span className="text-primary-500">di Rumah</span>
            </h1>

            {/* Subheadline description */}
            <p className="text-[14px] sm:text-[14px] text-navy-600/70 mb-10 max-w-xl leading-relaxed">
              IVCare Medika hadir memberikan layanan kesehatan dengan pendekatan personal, aman, dan penuh kepedulian untuk Anda dan keluarga.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary WhatsApp Button */}
              <a
                href="https://wa.me/6281354872379"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-primary rounded-full px-8 py-4 text-xs font-bold flex items-center justify-center gap-2.5 hover:scale-102 active:scale-98 transition-all duration-300 shadow-soft hover:shadow-glow"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.599-1.01-5.048-2.868-6.912C16.608 2.086 14.167.972 11.586.972c-5.442 0-9.866 4.372-9.87 9.746 0 1.992.521 3.94 1.512 5.66l-.951 3.477 3.57-.923zm12.015-7.794c-.328-.164-1.938-.956-2.232-1.062-.295-.107-.51-.16-.723.164-.213.324-.826 1.062-1.012 1.275-.187.213-.375.24-.703.076-.328-.164-1.386-.51-2.64-1.627-.976-.87-1.633-1.947-1.824-2.275-.192-.328-.02-.505.144-.668.148-.146.328-.383.492-.574.164-.192.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.723-1.74-.991-2.385-.262-.633-.529-.547-.723-.557-.187-.01-.4-.011-.613-.011-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.668 0 1.574 1.147 3.094 1.307 3.307.16.213 2.258 3.448 5.47 4.836.764.33 1.36.527 1.824.674.767.244 1.467.21 2.018.128.614-.092 1.938-.792 2.213-1.558.275-.767.275-1.424.192-1.558-.083-.134-.294-.213-.623-.377z" />
                </svg>
                Booking via WhatsApp
              </a>

              {/* Secondary Consultation Button */}
              <a
                href="https://wa.me/6281354872379?text=Halo%20IVCareMedika,%20saya%20ingin%20berkonsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-white rounded-full px-8 py-4 text-xs font-bold flex items-center justify-center gap-2 hover:scale-102 hover:bg-slate-50 transition-all duration-300 border border-primary-200/50"
              >
                <svg className="w-4 h-4 text-primary-500 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Konsultasi Sekarang
              </a>
            </div>
          </motion.div>

          {/* Right Side Image Block (6 Cols for balanced visual roominess and perfect two-line headline) */}
          <motion.div
            className="lg:col-span-6 relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            {/* Modern rounded, borderless image container with precise aspect ratio */}
            <div className="relative w-full max-w-[600px] lg:max-w-none aspect-[1.2] sm:aspect-[1.25] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-luxury bg-slate-50 group z-10 border border-primary-50/20">
              <img
                src="/hero-nurse-rebuild.png"
                alt="Assisting Nurse & Patient Infusion Homecare"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              {/* Ambient top-gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Backing ambient blue glow */}
            <div className="absolute inset-0 bg-primary-100/40 rounded-full blur-[90px] -z-10 animate-pulse-slow"></div>
          </motion.div>

        </div>
      </div>

      {/* Below Hero: Overlapping Floating Trust Ribbon (divide-x column borders, padded offsets) */}
      <motion.div
        className="container-custom relative z-20 w-full mt-16 -mb-48"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <div className="bg-white rounded-[2rem] shadow-luxury border border-primary-50/60 p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-primary-100/60">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-row items-center gap-4 flex-1 ${idx > 0 ? "lg:pl-8" : ""
                  }`}
              >
                {/* Icon circle container */}
                <div className="w-12 h-12 rounded-full bg-primary-50 border border-primary-100/40 flex items-center justify-center text-primary-500 flex-shrink-0 shadow-soft">
                  <Icon size={20} strokeWidth={2.5} />
                </div>

                {/* Title & Subtitle blocks */}
                <div className="flex flex-col leading-tight pr-2">
                  <span className="font-heading font-extrabold text-sm text-navy-700 mb-0.5 tracking-tight">
                    {item.title}
                  </span>
                  <span className="text-[11px] font-bold text-navy-600/55 leading-normal">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

    </section>
  );
}
