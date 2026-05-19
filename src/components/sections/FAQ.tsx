"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  BriefcaseMedical,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  CreditCard
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function FAQ() {
  const { faqSection } = siteConfig;
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua Pertanyaan");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Category Icon Resolver mapping
  const categoryIcons: Record<string, any> = {
    "Semua Pertanyaan": HelpCircle,
    "Layanan Homecare": BriefcaseMedical,
    "Pemeriksaan Kesehatan": Stethoscope,
    "Wellness & Relaksasi": Sparkles,
    "Prosedur & Keamanan": ShieldCheck,
    "Pembayaran & Reservasi": CreditCard,
  };

  // Perform client-side fuzzy searching
  const filteredFaqs = useMemo(() => {
    return faqSection.faqs.filter((item) => {
      const matchesSearch = 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        activeCategory === "Semua Pertanyaan" || 
        item.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, faqSection.faqs]);

  // Compute question category items count dynamically
  const getCategoryCount = (catName: string) => {
    if (catName === "Semua Pertanyaan") return faqSection.faqs.length;
    return faqSection.faqs.filter(item => item.category === catName).length;
  };

  return (
    <Section id="faq" background="navy-50" hasDivider={true}>
      <Container>
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-500 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/50">
            {faqSection.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 mt-6 mb-4 tracking-tight">
            {faqSection.title}
          </h2>
          <p className="text-sm md:text-base text-navy-600/60 leading-relaxed font-bold">
            {faqSection.subtitle}
          </p>

          {/* Search Box */}
          <div className="relative mt-10 max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-navy-600/35" size={18} />
            <input
              type="text"
              placeholder={faqSection.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-primary-100/50 rounded-full py-4 pl-12 pr-6 text-sm text-navy-700 font-bold focus:outline-none focus:ring-2 focus:ring-primary-500/20 shadow-soft transition-all"
            />
          </div>
        </div>

        {/* Sidebar & FAQ Accordion Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Category Sidebar Filters */}
          <div className="lg:col-span-4 space-y-3 bg-white p-6 rounded-3xl border border-primary-50/50 shadow-soft text-left">
            <span className="text-[10px] font-heading font-extrabold tracking-wider text-navy-700/40 uppercase pl-3 block mb-2">
              Kategori Pertanyaan
            </span>
            {faqSection.categories.map((catName) => {
              const Icon = categoryIcons[catName] || HelpCircle;
              return (
                <button
                  key={catName}
                  onClick={() => {
                    setActiveCategory(catName);
                    setOpenIndex(null);
                  }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left text-xs font-bold transition-all duration-300 ${
                    activeCategory === catName
                      ? "bg-primary-50 text-primary-600 border border-primary-100/30"
                      : "text-navy-600/65 hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      activeCategory === catName ? "bg-primary-500 text-white" : "bg-primary-50 text-primary-500"
                    }`}>
                      <Icon size={14} strokeWidth={2.5} />
                    </div>
                    <span>{catName}</span>
                  </div>
                  <span className={`text-[10px] font-heading font-extrabold px-2.5 py-0.5 rounded-full ${
                    activeCategory === catName ? "bg-primary-500 text-white" : "bg-primary-50 text-primary-600"
                  }`}>
                    {getCategoryCount(catName)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Side: FAQ Accordion Panel */}
          <div className="lg:col-span-8 space-y-4 text-left">
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
                    {faqSection.emptyMessage}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </Container>
    </Section>
  );
}
