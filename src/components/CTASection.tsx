"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Check,
  MessageSquareShare,
  CalendarClock,
  ShieldCheck
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Nomor WhatsApp",
    val: "+62 813-5487-2379",
    href: "https://wa.me/6281354872379"
  },
  {
    icon: Mail,
    title: "Email Support",
    val: "support@ivcaremedika.com",
    href: "mailto:support@ivcaremedika.com"
  },
  {
    icon: MapPin,
    title: "Lokasi Pusat",
    val: "Kebayoran Baru, Jakarta Selatan",
    href: "https://maps.google.com"
  }
];

const checklists = [
  "Pre-tindakan asesmen medis klinis dari dokter mitra",
  "Peralatan steril baru segel dibuka di depan pasien",
  "Monitoring rekam medis digital secara berkelanjutan",
  "Jaminan perawat berlisensi STR aktif nasional"
];

export default function CTASection() {
  return (
    <section id="contact" className="relative bg-white py-24 lg:py-36 overflow-hidden">

      {/* Decorative top divider line */}
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Direct Call Directories & Pre-booking lists */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-500 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/50 mb-6">
              Hubungi Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 leading-tight mb-6 tracking-tight">
              Reservasi Layanan Homecare <br />
              Premium Anda Sekarang
            </h2>
            <p className="text-sm md:text-base text-navy-600/70 leading-relaxed mb-10 font-bold">
              Hubungi layanan admin medis kami yang siaga melayani kebutuhan konsultasi awal Anda secara gratis dan ramah. Kami siap mengirimkan perawat terbaik langsung ke rumah Anda.
            </p>

            {/* Direct Call Directory (3 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <a
                    key={idx}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-navy-50 border border-primary-50/50 shadow-soft hover:shadow-luxury hover:bg-white hover:border-primary-100 transition-all duration-300 flex flex-col items-start group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary-50 border border-primary-100/30 flex items-center justify-center text-primary-500 mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-heading font-black text-navy-700/40 uppercase tracking-wide mb-1">
                      {card.title}
                    </span>
                    <span className="text-[11px] font-bold text-navy-700 leading-snug group-hover:text-primary-500 transition-colors">
                      {card.val}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Pre-booking Clinical Checklists */}
            <div className="bg-primary-50/50 border border-primary-100/35 rounded-3xl p-6 md:p-8 w-full">
              <h4 className="font-heading font-extrabold text-sm text-navy-700 mb-4 flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary-500" />
                Standar Kenyamanan & Keamanan IVCare Medika:
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {checklists.map((check, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-soft">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="text-[11px] text-navy-600/80 leading-relaxed font-bold">
                      {check}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Smartphone Simulator Mockup */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* The main large photo (Hand holding phone simulating chat) */}
            <div className="relative w-full max-w-[430px] aspect-[1.1] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-luxury border border-primary-100/10 z-10 bg-white">
              <img
                src="/hand-holding-phone.png"
                alt="Smartphone Booking Simulator IVCareMedika"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none"></div>

              {/* Floating Treatment overlay 1 */}
              <div className="absolute top-8 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-luxury border border-primary-100/40 flex items-center gap-3 animate-float max-w-[200px] z-20">
                <div className="w-8 h-8 rounded-full bg-primary-50 border border-primary-100/30 flex items-center justify-center text-primary-500">
                  <CalendarClock size={14} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-heading font-extrabold text-[10px] text-navy-700">Home Visit Schedule</span>
                  <span className="text-[9px] text-primary-500 font-bold">Confirmed Today</span>
                </div>
              </div>

              {/* Floating Treatment overlay 2 */}
              <div className="absolute bottom-8 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-luxury border border-primary-100/40 flex items-center gap-3 animate-float max-w-[200px] z-20" style={{ animationDelay: "2s" }}>
                <div className="w-8 h-8 rounded-full bg-green-50 border border-green-100/30 flex items-center justify-center text-green-500">
                  <MessageSquareShare size={14} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-heading font-extrabold text-[10px] text-navy-700">Dokter Mitra Asesmen</span>
                  <span className="text-[9px] text-green-500 font-bold">STR Registered</span>
                </div>
              </div>
            </div>

            {/* Backing Ambient Blur */}
            <div className="absolute inset-0 bg-primary-100/30 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
