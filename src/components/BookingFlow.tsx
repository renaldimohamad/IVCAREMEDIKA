"use client";

import { motion } from "framer-motion";
import { MessageSquareCode, ShieldQuestion, CalendarCheck2, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquareCode,
    num: "01",
    title: "Hubungi WhatsApp",
    desc: "Konsultasikan kebutuhan medis atau wellness Anda dengan tim admin kami yang responsif."
  },
  {
    icon: ShieldQuestion,
    num: "02",
    title: "Asesmen Medis",
    desc: "Dokter kami akan melakukan asesmen singkat untuk memastikan kesesuaian dosis & tindakan."
  },
  {
    icon: CalendarCheck2,
    num: "03",
    title: "Jadwalkan Tindakan",
    desc: "Pilih tanggal, jam, dan lokasi kunjungan yang paling nyaman bagi jadwal harian Anda."
  },
  {
    icon: HeartHandshake,
    num: "04",
    title: "Perawatan di Rumah",
    desc: "Perawat berlisensi kami akan datang dengan peralatan steril lengkap berlogo IVCare Medika."
  }
];

export default function BookingFlow() {
  return (
    <section id="education" className="relative bg-white py-24 lg:py-36 overflow-hidden">
      
      {/* Top decorative line divider */}
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-500 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/50">
            Alur Layanan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 mt-6 mb-4 tracking-tight">
            Prosedur Pemesanan <br />
            Sangat Praktis & Cepat
          </h2>
          <p className="text-sm md:text-base text-navy-600/60 leading-relaxed font-bold">
            Dapatkan pelayanan kesehatan berkualitas tinggi hanya dalam empat langkah sederhana tanpa repot mengantre.
          </p>
        </div>

        {/* 4-Step Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 -translate-y-12 -z-10"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-primary-50 shadow-soft hover:shadow-luxury hover:border-primary-100 transition-all duration-500 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Number badge */}
                <span className="text-[10px] font-heading font-black text-primary-400 bg-primary-50 border border-primary-100/20 px-3 py-1 rounded-full mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  STEP {step.num}
                </span>

                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-primary-50 border border-primary-100/40 flex items-center justify-center text-primary-500 shadow-soft mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} strokeWidth={2} />
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-extrabold text-base text-navy-700 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[11px] font-bold text-navy-600/50 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
