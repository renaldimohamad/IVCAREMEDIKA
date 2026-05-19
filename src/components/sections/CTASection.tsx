"use client";

import { Phone, Mail, MapPin, Check, ShieldCheck, CalendarClock, MessageSquareShare } from "lucide-react";
import { siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import GradientBlur from "@/components/ui/GradientBlur";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CTASection() {
  const { contactSection } = siteConfig;

  // Map contact cards to Lucide icons
  const contactIconsMap: Record<string, any> = {
    whatsapp: Phone,
    email: Mail,
    map: MapPin,
  };

  return (
    <Section id="contact" background="white" hasDivider={true}>
      <Container>
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct Call Directories & Pre-booking lists */}
          <FadeIn className="lg:col-span-7 flex flex-col items-start text-left" x={-30}>
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-500 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/50 mb-6">
              {contactSection.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 leading-tight mb-6 tracking-tight">
              {contactSection.title}
            </h2>
            <p className="text-sm md:text-base text-navy-600/70 leading-relaxed mb-10 font-bold">
              {contactSection.subtitle}
            </p>

            {/* Direct Call Directory (3 Columns using our reusable Card) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
              {contactSection.contactCards.map((card, idx) => {
                const Icon = contactIconsMap[card.type] || Phone;
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
                {contactSection.standardsTitle}
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactSection.checklists.map((check, idx) => (
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

          </FadeIn>

          {/* Right Column: Smartphone Simulator Mockup */}
          <FadeIn className="lg:col-span-5 relative flex items-center justify-center" x={30}>
            
            {/* The main large photo (Hand holding phone simulating chat) */}
            <div className="relative w-full max-w-[430px] aspect-[1.1] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-luxury border border-primary-100/10 z-10 bg-white">
              <img
                src={contactSection.phoneImage}
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
            <GradientBlur position="center" color="primary" size="md" className="scale-90 -z-10" />

          </FadeIn>

        </div>

      </Container>
    </Section>
  );
}
