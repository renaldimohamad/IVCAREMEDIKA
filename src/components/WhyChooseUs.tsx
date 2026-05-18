"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  ClipboardCheck,
  Home,
  MessageSquare,
} from "lucide-react";

// Custom custom SVG icons to exactly match the screenshot tentang-kami.jpeg
const VisiIcon = () => (
  <svg className="w-6 h-6 text-primary-500 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 5l-7 7m7-7h-5m5 0v5" />
  </svg>
);

const MisiIcon = () => (
  <svg className="w-6 h-6 text-primary-500 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.5V2.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5l5 3-5 3v-6z" fill="currentColor" className="text-primary-500/10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21.5l6-11 5 7.5L21 21.5H3z" />
  </svg>
);

const UserStarIcon = () => (
  <svg className="w-5 h-5 text-primary-500 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14.5l1 2 2 .5-1.5 1.5.5 2-2-1-2 1 .5-2-1.5-1.5 2-.5z" />
  </svg>
);

const HandshakeIcon = () => (
  <svg className="w-5 h-5 text-primary-500 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const valueItems = [
  {
    icon: Heart,
    title: "Peduli",
    description: "Kami melayani dengan hati, penuh empati dan perhatian."
  },
  {
    icon: ShieldCheck,
    title: "Aman",
    description: "Keselamatan pasien adalah prioritas utama kami."
  },
  {
    icon: UserStarIcon,
    title: "Profesional",
    description: "Layanan diberikan oleh tenaga kesehatan sesuai kompetensi."
  },
  {
    icon: HandshakeIcon,
    title: "Terpercaya",
    description: "Integritas dan kejujuran adalah dasar setiap pelayanan."
  },
  {
    icon: TrendingUp,
    title: "Berkualitas",
    description: "Kami berkomitmen untuk terus belajar dan berkembang."
  }
];

const ribbonItems = [
  {
    icon: UserCheck,
    title: "Tenaga Kesehatan",
    subtitle: "Berpengalaman"
  },
  {
    icon: ClipboardCheck,
    title: "SOP Sesuai",
    subtitle: "Standar"
  },
  {
    icon: Home,
    title: "Layanan di Rumah",
    subtitle: "Praktis & Nyaman"
  },
  {
    icon: MessageSquare,
    title: "Komunikasi",
    subtitle: "Ramah & Responsif"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-white py-24 lg:py-32 overflow-hidden">

      {/* Subtle Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-50/40 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-50/30 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">

        {/* ROW 1: Hero area of Tentang Kami */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">

          {/* Left Column: Headline and Story */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-600 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/40 mb-6">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-navy-700 leading-[1.2] mb-6 tracking-tight">
              IVCare Medika<br />
              <span className="text-primary-500">Kesehatan dan Kenyamanan Anda, Prioritas Kami.</span>
            </h2>
            <p className="text-sm sm:text-base text-navy-600/70 leading-relaxed mb-6">
              IVCare Medika hadir untuk memberikan layanan kesehatan profesional di rumah dengan pendekatan personal, aman, dan penuh kepedulian.
            </p>
            <p className="text-sm sm:text-base text-navy-600/70 leading-relaxed">
              Kami percaya bahwa setiap individu berhak mendapatkan perawatan yang berkualitas tanpa harus meninggalkan kenyamanan rumah.
            </p>
          </motion.div>

          {/* Right Column: Branded nurse-patient image */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[500px] aspect-[1.3] rounded-[2.5rem] overflow-hidden shadow-luxury border border-primary-100/10 z-10 bg-white">
              <img
                src="/nurse-elderly-patient-rebuild.png"
                alt="Perawat IVCareMedika Mendampingi Lansia"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary-100/40 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>
          </motion.div>

        </div>

        {/* ROW 2: Visi & Misi Centered heading & side-by-side cards */}
        <div className="mb-20 lg:mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-700 tracking-tight">Visi & Misi Kami</h3>
            <div className="w-12 h-1 bg-primary-500 mx-auto mt-3.5 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: VISI */}
            <motion.div
              className="bg-white border border-primary-50 rounded-[2rem] p-8 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-primary-50 border border-primary-100/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <VisiIcon />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-lg text-navy-700 mb-2">VISI</span>
                  <p className="text-xs text-navy-600/70 leading-relaxed">
                    Menjadi penyedia layanan kesehatan di rumah yang terpercaya, berkualitas, dan menjadi pilihan utama masyarakat.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: MISI */}
            <motion.div
              className="bg-white border border-primary-50 rounded-[2rem] p-8 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-primary-50 border border-primary-100/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <MisiIcon />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-lg text-navy-700 mb-2">MISI</span>
                  <ul className="space-y-2 text-xs text-navy-600/70 leading-relaxed list-disc pl-4">
                    <li>Memberikan layanan kesehatan yang aman, profesional, dan berempati.</li>
                    <li>Mengutamakan kebutuhan dan kenyamanan setiap pasien.</li>
                    <li>Mengedukasi masyarakat untuk hidup sehat.</li>
                    <li>Terus meningkatkan kualitas layanan dan kompetensi tenaga kesehatan.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ROW 3: Nilai-Nilai Kami & Komitmen Kami side-by-side */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16 lg:mb-20">

          {/* Left Column: Nilai-Nilai Kami Container Card (60% equivalent) */}
          <motion.div
            className="lg:col-span-7 bg-primary-50/10 border border-primary-100/30 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center lg:text-left mb-10">
              <h3 className="text-2xl font-bold text-navy-700 tracking-tight">Nilai-Nilai Kami</h3>
              <div className="w-12 h-1 bg-primary-500 mt-3 rounded-full lg:mx-0 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {valueItems.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary-50 border border-primary-100/35 flex items-center justify-center text-primary-500 mb-3 shadow-soft">
                      <Icon />
                    </div>
                    <span className="font-heading font-extrabold text-sm text-navy-700 mb-1.5 tracking-tight">
                      {val.title}
                    </span>
                    <p className="text-[10px] font-bold text-navy-600/50 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Komitmen Kami Card (40% equivalent, Side-by-Side inside) */}
          <motion.div
            className="lg:col-span-5 bg-white border border-primary-50 rounded-[2rem] p-6 shadow-soft flex flex-col md:flex-row lg:flex-row gap-6 items-center lg:items-start"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Bag Kit Image (Left side of card) */}
            <div className="w-full md:w-2/5 lg:w-[180px] aspect-[1.3] md:aspect-[1.1] rounded-lg overflow-hidden shadow-soft border border-primary-50/50 flex-shrink-0 bg-slate-50">
              <img
                src="/medical-bag-rebuild.png"
                alt="IVCareMedika Premium Clinical Kit Bag"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content text (Right side of card) */}
            <div className="flex flex-col justify-between flex-grow h-full">
              <div>
                <h4 className="text-xl font-bold text-navy-700 mb-2 tracking-tight">Komitmen Kami</h4>
                <p className="text-[12px] text-navy-600/70 leading-relaxed mb-4">
                  Kami berkomitmen untuk menjadi mitra kesehatan terpercaya bagi Anda dan keluarga, dengan layanan yang mengedepankan keselamatan, kenyamanan, dan kepuasan pasien.
                </p>
              </div>

              {/* Highlighted Banner */}
              <div className="bg-primary-50/30 border border-primary-100/30 rounded-2xl p-3 flex gap-2.5 items-center">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <ShieldCheck size={16} strokeWidth={2.5} />
                </div>
                <p className="text-[10px] font-bold text-navy-700 leading-normal">
                  IVCare Medika hadir untuk Anda, di mana pun Anda berada. <span className="text-primary-500 font-extrabold">Kesehatan Anda, Prioritas Kami.</span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ROW 4: Bottom Ribbon / Banner */}
        <motion.div
          className="bg-primary-50/20 border border-primary-100/20 rounded-[2rem] p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-center divide-y lg:divide-y-0 lg:divide-x divide-primary-100/40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Statement */}
          <div className="lg:col-span-2 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0 shadow-soft">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <div className="flex flex-col pr-4">
              <span className="text-[11px] font-bold text-navy-700 leading-normal">
                Kesehatan terbaik tidak selalu harus di rumah sakit.
              </span>
              <span className="text-xs font-extrabold text-primary-500 leading-normal mt-0.5">
                Kami hadir di rumah Anda, dengan layanan terbaik.
              </span>
            </div>
          </div>

          {/* Ribbon items (4 columns on desktop) */}
          {ribbonItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`flex items-center gap-3.5 pt-4 lg:pt-0 lg:pl-6`}>
                <div className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100/35 flex items-center justify-center text-primary-500 flex-shrink-0 shadow-soft">
                  <Icon size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-bold text-navy-600/50 mb-0.5 tracking-tight uppercase">
                    {item.title}
                  </span>
                  <span className="font-heading font-extrabold text-xs text-navy-700">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
