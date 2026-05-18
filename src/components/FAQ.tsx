"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  Plus, 
  Minus,
  BriefcaseMedical,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  CreditCard
} from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Layanan Homecare",
    q: "Apa itu layanan homecare IVCare Medika?",
    a: "Layanan homecare kami adalah perawatan medis terstandar rumah sakit yang dilakukan langsung di rumah pasien oleh perawat berlisensi resmi (STR). Layanan meliputi rawat luka, pendampingan stroke, pemasangan kateter, NGT, hingga perawatan lansia."
  },
  {
    category: "Layanan Homecare",
    q: "Apakah perawat standby 24 jam di rumah?",
    a: "Ya, kami menyediakan paket pendampingan perawat standby mulai dari kunjungan harian (visit), shift 12 jam, hingga standby penuh 24 jam (menginap) sesuai dengan kondisi klinis dan kebutuhan keluarga pasien."
  },
  {
    category: "Layanan Homecare",
    q: "Bagaimana kualifikasi perawat yang dikirim?",
    a: "Seluruh perawat IVCare Medika wajib memiliki Surat Tanda Registrasi (STR) aktif, berlatar belakang pendidikan minimal D3/S1 Keperawatan, memiliki sertifikasi kegawatdaruratan (BTCLS), serta lolos pelatihan SOP asuhan keperawatan rumah tangga kami."
  },
  {
    category: "Layanan Homecare",
    q: "Apakah melayani sewa alat medis pendukung?",
    a: "Kami menyediakan sewa alat medis habis pakai pendukung tindakan keperawatan (seperti tiang infus, perlak medis, syringe pump, dll) yang disesuaikan secara khusus dengan jenis paket tindakan home visit yang Anda pesan."
  },
  {
    category: "Pemeriksaan Kesehatan",
    q: "Apakah layanan dilakukan oleh tenaga kesehatan profesional?",
    a: "Tentu saja. Semua jenis tindakan pemeriksaan kesehatan, pengambilan darah laboratorium, maupun pemasangan infus dilakukan secara langsung oleh perawat profesional di bawah pengawasan serta rekomendasi klinis tim dokter penanggung jawab kami."
  },
  {
    category: "Pemeriksaan Kesehatan",
    q: "Bagaimana cara melihat hasil lab pemeriksaan?",
    a: "Hasil sampel laboratorium yang diambil perawat di rumah Anda akan dikirimkan secara langsung dalam format PDF digital (melalui WhatsApp/Email) lengkap dengan interpretasi medis resmi dan saran rujukan klinis dari dokter mitra laboratorium terpercaya kami."
  },
  {
    category: "Pemeriksaan Kesehatan",
    q: "Apakah bisa melakukan medical check-up kolektif?",
    a: "Ya, kami melayani pemesanan paket Medical Check-Up (MCU) secara kolektif untuk kebutuhan keluarga besar, komunitas, maupun kunjungan korporasi (karyawan kantor) langsung ke lokasi yang Anda tentukan."
  },
  {
    category: "Wellness & Relaksasi",
    q: "Apa saja manfaat dari Infus Vitamin (Wellness Infusion)?",
    a: "Wellness infusion bermanfaat mempercepat penyerapan vitamin oleh sel tubuh secara optimal 100% guna meningkatkan imunitas, mengatasi kelelahan kronis (jetlag), mencerahkan kulit secara sehat dari dalam, serta membantu hidrasi tubuh pasca sakit."
  },
  {
    category: "Wellness & Relaksasi",
    q: "Apakah aman melakukan infus vitamin tanpa resep?",
    a: "Sangat aman karena tim medis kami akan melakukan pre-tindakan asesmen (skrining tekanan darah, riwayat alergi, kondisi ginjal/kondisi khusus) terlebih dahulu secara cermat untuk memastikan formulasinya sesuai dengan metabolisme tubuh Anda."
  },
  {
    category: "Prosedur & Keamanan",
    q: "Apakah alat yang digunakan dijamin steril?",
    a: "Mutlak steril. Kami berkomitmen menerapkan 'Zero Infection SOP'. Seluruh jarum, selang infus, spuit, kasa, dan sarung tangan medis yang digunakan oleh perawat kami adalah perlengkapan baru sekali pakai (disposable) yang dibuka langsung di hadapan pasien."
  },
  {
    category: "Prosedur & Keamanan",
    q: "Bagaimana jika terjadi kondisi darurat saat tindakan?",
    a: "Perawat kami dibekali dengan modul tanggap darurat (First Aid SOP). Jika terjadi reaksi alergi obat atau kondisi gawat lainnya, perawat akan segera menghubungi tim dokter penanggung jawab kami dan berkoordinasi cepat dengan rumah sakit rujukan terdekat."
  },
  {
    category: "Pembayaran & Reservasi",
    q: "Bagaimana cara memesan layanan dan membayarnya?",
    a: "Pemesanan dapat dilakukan dengan mudah melalui tombol chat WhatsApp admin. Pembayaran dilakukan secara aman via transfer bank resmi rekening perusahaan IVCare Medika setelah jadwal kunjungan dikonfirmasi."
  }
];

const categories = [
  { name: "Semua Pertanyaan", icon: HelpCircle },
  { name: "Layanan Homecare", icon: BriefcaseMedical },
  { name: "Pemeriksaan Kesehatan", icon: Stethoscope },
  { name: "Wellness & Relaksasi", icon: Sparkles },
  { name: "Prosedur & Keamanan", icon: ShieldCheck },
  { name: "Pembayaran & Reservasi", icon: CreditCard }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua Pertanyaan");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesSearch = 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        activeCategory === "Semua Pertanyaan" || 
        item.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const getCategoryCount = (catName: string) => {
    if (catName === "Semua Pertanyaan") return faqData.length;
    return faqData.filter(item => item.category === catName).length;
  };

  return (
    <section id="faq" className="relative bg-navy-50 py-24 lg:py-36 overflow-hidden">
      
      {/* Decorative top divider line */}
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-500 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/50">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 mt-6 mb-4 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm md:text-base text-navy-600/60 leading-relaxed font-bold">
            Punya pertanyaan mengenai layanan kami? Temukan jawaban lengkap seputar prosedur medis kami di bawah ini.
          </p>

          {/* Search Box */}
          <div className="relative mt-10 max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-navy-600/35" size={18} />
            <input
              type="text"
              placeholder="Cari pertanyaan atau kata kunci medis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-primary-100/50 rounded-full py-4 pl-12 pr-6 text-sm text-navy-700 font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/20 shadow-soft transition-all"
            />
          </div>
        </div>

        {/* Sidebar & FAQ Accordion Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Category Sidebar Filters */}
          <div className="lg:col-span-4 space-y-3 bg-white p-6 rounded-3xl border border-primary-50/50 shadow-soft">
            <span className="text-[10px] font-heading font-extrabold tracking-wider text-navy-700/40 uppercase pl-3 block mb-2">
              Kategori Pertanyaan
            </span>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    setOpenIndex(null);
                  }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left text-xs font-bold transition-all duration-300 ${
                    activeCategory === cat.name
                      ? "bg-primary-50 text-primary-600 border border-primary-100/30"
                      : "text-navy-600/65 hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      activeCategory === cat.name ? "bg-primary-500 text-white" : "bg-primary-50 text-primary-500"
                    }`}>
                      <Icon size={14} strokeWidth={2.5} />
                    </div>
                    <span>{cat.name}</span>
                  </div>
                  <span className={`text-[10px] font-heading font-extrabold px-2.5 py-0.5 rounded-full ${
                    activeCategory === cat.name ? "bg-primary-500 text-white" : "bg-primary-50 text-primary-600"
                  }`}>
                    {getCategoryCount(cat.name)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Side: FAQ Accordion Panel */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <motion.div
                      key={faq.q}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-3xl border border-primary-50/50 shadow-soft overflow-hidden transition-all duration-300 hover:border-primary-100/50"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-7 h-7 rounded-full bg-primary-50 border border-primary-100/20 text-primary-600 font-heading font-black text-xs flex items-center justify-center flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-heading font-extrabold text-sm text-navy-700 tracking-tight leading-snug">
                            {faq.q}
                          </span>
                        </div>
                        <div className={`w-8 h-8 rounded-full border border-primary-100/25 flex items-center justify-center text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "bg-primary-50 rotate-180" : ""
                        }`}>
                          <ChevronDown size={14} strokeWidth={3} />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-start gap-4">
                              <div className="w-7 h-7 flex-shrink-0"></div>
                              <p className="text-[13px] font-bold text-navy-600/55 leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  layout
                  className="bg-white rounded-3xl p-10 border border-primary-50/50 text-center shadow-soft"
                >
                  <p className="text-sm font-bold text-navy-600/40">
                    Maaf, tidak menemukan hasil FAQ untuk kata kunci atau filter tersebut.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
