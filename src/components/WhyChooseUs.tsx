"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Award, HeartHandshake, Eye, Target } from "lucide-react";

const valueGrid = [
  {
    icon: ShieldCheck,
    title: "Medis Profesional",
    desc: "Perawat berlisensi resmi & bersertifikat kompetensi klinis aktif."
  },
  {
    icon: Award,
    title: "Alat Medis Steril",
    desc: "Menggunakan peralatan sekali pakai medis standard sterilisasi penuh."
  },
  {
    icon: Heart,
    title: "Layanan Empati",
    desc: "Merawat layaknya keluarga sendiri dengan sentuhan ramah & telaten."
  },
  {
    icon: HeartHandshake,
    title: "Asesmen Dokter",
    desc: "Asesmen medis sebelum tindakan untuk resep terapi yang presisi."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-navy-50 py-24 lg:py-36 overflow-hidden">
      
      {/* Top decorative line divider */}
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="container-custom relative z-10">
        
        {/* Row 1: Story & Large Image */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          
          {/* Left Column: Story block */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-500 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/50 mb-6">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 leading-tight mb-6 tracking-tight">
              Membawa Kehangatan & <br />
              Keahlian Medis ke Rumah Anda
            </h2>
            <p className="text-sm md:text-base text-navy-600/70 leading-relaxed mb-6 font-bold">
              IVCare Medika lahir dari kepedulian yang mendalam terhadap kebutuhan keluarga modern akan layanan kesehatan berkualitas tinggi yang fleksibel. Kami percaya bahwa proses penyembuhan dan optimalisasi kebugaran dapat berjalan jauh lebih efektif di lingkungan yang paling nyaman, yaitu rumah Anda sendiri.
            </p>
            <p className="text-xs sm:text-sm text-navy-600/60 leading-relaxed mb-8 font-bold">
              Didukung oleh tim perawat profesional yang telah tersertifikasi khusus, kami menyediakan layanan rawat jalan medis (home visit) mulai dari keperawatan intensif pasca stroke, terapi infus wellness, hingga pemeriksaan kesehatan komprehensif harian secara aman dan higienis.
            </p>
            
            {/* Split Visi & Misi */}
            <div className="grid sm:grid-cols-2 gap-6 w-full">
              <div className="p-5 rounded-2xl bg-white border border-primary-50 shadow-soft">
                <div className="flex items-center gap-3 mb-3 text-primary-500">
                  <Eye size={20} strokeWidth={2.5} />
                  <span className="font-heading font-extrabold text-sm text-navy-700">Visi Kami</span>
                </div>
                <p className="text-[11px] font-bold text-navy-600/50 leading-relaxed">
                  Menjadi penyedia layanan homecare & wellness medis terpercaya nomor satu di Indonesia dengan standar mutu internasional yang mengutamakan cinta kasih.
                </p>
              </div>
              
              <div className="p-5 rounded-2xl bg-white border border-primary-50 shadow-soft">
                <div className="flex items-center gap-3 mb-3 text-primary-500">
                  <Target size={20} strokeWidth={2.5} />
                  <span className="font-heading font-extrabold text-sm text-navy-700">Misi Kami</span>
                </div>
                <p className="text-[11px] font-bold text-navy-600/50 leading-relaxed">
                  Menyediakan perawat berlisensi resmi, menjamin sterilisasi peralatan medis sekali pakai, serta mengintegrasikan monitoring klinis berkala di bawah pengawasan dokter.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Beautiful Medical Graphic Block */}
          <motion.div 
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* The main large photo (Nurse advising elderly patient on sofa) */}
            <div className="relative w-full max-w-[460px] aspect-[1.1] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-luxury border border-primary-100/10 z-10 bg-white">
              <img 
                src="/nurse-elderly-patient.png" 
                alt="Perawat IVCareMedika Mendampingi Lansia" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none"></div>
            </div>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary-100/40 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>
          </motion.div>

        </div>

        {/* Row 2: Branded Medical Kit & Clinical Core Values */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Branded Medical Zipper Bag Photo */}
          <motion.div 
            className="lg:col-span-5 relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Zipper bag image box */}
            <div className="relative w-full max-w-[420px] aspect-[1.1] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-premium border border-primary-50 bg-white z-10">
              <img 
                src="/medical-bag.png" 
                alt="IVCareMedika Premium Clinical Zipper Kit" 
                className="w-full h-full object-cover object-center"
              />
              {/* Product Badge overlay */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-primary-500/90 text-white rounded-full font-heading font-extrabold text-[10px] tracking-wider uppercase border border-white/20 shadow-soft">
                Clinical Kit
              </div>
            </div>
            {/* Backing glow */}
            <div className="absolute inset-0 bg-cyan-100/30 rounded-full blur-[70px] -z-10"></div>
          </motion.div>

          {/* Right Column: Clinical Core Values Deck */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-500 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/50 mb-6">
              Komitmen Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 leading-tight mb-6 tracking-tight">
              Pilar Keamanan & Kenyamanan <br />
              Layanan Medis IVCare Medika
            </h2>
            <p className="text-sm md:text-base text-navy-600/70 leading-relaxed mb-10 font-bold">
              Setiap perawat yang kami tugaskan dibekali dengan **Clinical Zipper Bag khusus** berlogo IVCare Medika, berisi perlengkapan sekali pakai yang dijamin steril, guna menghadirkan ketenangan jiwa dan keamanan medis mutlak bagi Anda.
            </p>

            {/* Core Values 2x2 Grid */}
            <div className="grid sm:grid-cols-2 gap-6 w-full">
              {valueGrid.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="flex gap-4 p-5 bg-white border border-primary-50/50 rounded-2xl shadow-soft">
                    <div className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                      <Icon size={18} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="font-heading font-extrabold text-sm text-navy-700 mb-1">
                        {value.title}
                      </span>
                      <span className="text-[11px] font-bold text-navy-600/50 leading-relaxed">
                        {value.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
