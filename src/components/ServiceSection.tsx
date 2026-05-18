"use client";

import { motion } from "framer-motion";
import { Check, ShieldAlert, Award, Activity, HeartPulse } from "lucide-react";

const services = [
  {
    title: "Layanan Homecare",
    subtitle: "Perawatan medis terstandar langsung di rumah Anda.",
    list: [
      "Jasa Perawat Homecare (Harian / Bulanan)",
      "Terapi & Rehabilitasi Pasca Stroke",
      "Pemasangan & Penggantian Alat Medis (NGT, Kateter)",
      "Perawatan Luka Diabetes & Luka Pasca Operasi",
      "Pendampingan Pasien Geriatri (Lansia)"
    ],
    note: "Semua tindakan dilakukan oleh perawat teregistrasi (STR) dengan pengawasan dokter penanggung jawab."
  },
  {
    title: "Layanan Wellness & Vitamin",
    subtitle: "Optimalisasi kebugaran dan imunitas tubuh keluarga.",
    list: [
      "Infus Vitamin C Premium & Multivitamin",
      "Terapi Anti-Aging & Immune Booster",
      "Rehidrasi & Recovery Infusion (Jetlag / Kelelahan)",
      "Injeksi Neurobion & Suplemen Saraf",
      "Skincare & Brightening Infusion Teruji"
    ],
    note: "Formulasi premium disesuaikan dengan kondisi tubuh setelah melalui asesmen medis singkat."
  },
  {
    title: "Pemeriksaan & Edukasi",
    subtitle: "Deteksi dini dan pendampingan kesehatan berkelanjutan.",
    list: [
      "Pemeriksaan Tanda Vital Lengkap (Tensi, Gula, Kolesterol)",
      "Pengambilan Sampel Darah Home Visit",
      "Konsultasi Gizi & Pendampingan Diet Pasien",
      "Edukasi Keluarga mengenai Perawatan Pasien Mandiri",
      "Rujukan Cepat ke Rumah Sakit Mitra Utama"
    ],
    note: "Hasil laboratorium dikirim langsung secara digital lengkap dengan interpretasi klinis dokter."
  }
];

const sopValues = [
  {
    icon: Award,
    title: "Sertifikasi Resmi",
    text: "Perawat terdaftar & terlatih khusus"
  },
  {
    icon: ShieldAlert,
    title: "Sterilisasi Medis",
    text: "Peralatan medis sekali pakai & steril"
  },
  {
    icon: Activity,
    title: "Respons Cepat",
    text: "Layanan cepat tanggap 24/7"
  },
  {
    icon: HeartPulse,
    title: "Monitoring Dokter",
    text: "Tindakan di bawah supervisi klinis"
  }
];

export default function ServiceSection() {
  return (
    <section id="services" className="relative bg-white pt-56 pb-28 overflow-hidden bg-medical-pattern">
      
      {/* Decorative top divider line */}
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-500 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/50">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 mt-6 mb-4 tracking-tight">
            Solusi Medis Profesional <br />
            Dalam Genggaman Anda
          </h2>
          <p className="text-sm md:text-base text-navy-600/60 leading-relaxed font-bold">
            Kami menghadirkan standar rumah sakit internasional langsung ke kamar Anda dengan kesterilan mutlak dan kepedulian yang mendalam.
          </p>
        </div>

        {/* 3-Column Detailed Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 lg:mb-28">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="card-airy flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div>
                {/* Header */}
                <h3 className="text-xl font-extrabold text-navy-700 mb-2">{service.title}</h3>
                <p className="text-xs text-navy-600/60 font-bold mb-6">{service.subtitle}</p>
                <div className="h-[2px] bg-primary-100/30 w-16 mb-6"></div>

                {/* List */}
                <ul className="space-y-4 mb-8">
                  {service.list.map((item, listIdx) => (
                    <li key={listIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-50 border border-primary-100/50 flex items-center justify-center text-primary-500 flex-shrink-0 mt-0.5 shadow-soft">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-[13px] text-navy-600/80 leading-snug font-bold">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note / Disclaimer box */}
              <div className="p-4 rounded-2xl bg-primary-50/50 border border-primary-100/30 flex items-start gap-3 mt-4">
                <span className="text-[11px] leading-relaxed text-primary-700 font-bold">
                  <strong>PENTING:</strong> {service.note}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom SOP Ribbon (Value Grid with overlapping layout) */}
        <motion.div 
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-[2.5rem] p-8 md:p-10 shadow-luxury text-white"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-white/20">
            {sopValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div 
                  key={idx} 
                  className={`flex items-center gap-4 ${
                    idx > 0 ? "lg:pl-6 pt-6 md:pt-0" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0 border border-white/20">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="font-heading font-extrabold text-sm tracking-tight mb-0.5">
                      {value.title}
                    </span>
                    <span className="text-[11px] text-white/70 font-bold">
                      {value.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
