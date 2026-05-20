"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GradientBlur from "@/components/ui/GradientBlur";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Hero() {
  const { hero, whatsapp } = siteConfig;
  const IconShield = ShieldCheck;
  const IconHeart = HeartPulse;

  return (
    <Section
      id="home"
      spacing="hero"
      background="white"
      hasDivider={false}
      className="overflow-x-hidden overflow-y-visible scrollbar-hide">
      {/* 🌌 Atmospheric Background Glows */}
      <GradientBlur
        position="top-right"
        color="primary"
        size="xl"
        className="-translate-y-1/4 translate-x-1/4 z-[1]"
      />
      <GradientBlur
        position="custom"
        color="cyan"
        size="lg"
        className="absolute top-1/4 right-[30%] z-[1]"
      />
      <GradientBlur
        position="bottom-left"
        color="primary"
        size="lg"
        className="-translate-x-1/4 z-[1]"
      />
      <GradientBlur
        position="custom"
        color="cyan"
        size="md"
        className="absolute top-1/2 left-1/4 z-[1]"
      />

      {/* LEFT: Medical Ambient Texture — full section height, left half on desktop */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none overflow-hidden z-[1]">
        <img
          src="/medical_ambient_bg.png"
          alt=""
          className="w-full h-full object-cover object-left blur-2xl"
        />
        {/* Right-side dissolve into white */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/40 to-white z-10" />
        {/* Bottom dissolve */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent z-10" />
        {/* Top dissolve — hides image behind navbar area */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
        {/* Mobile vertical fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 lg:hidden z-10" />
      </div>

      {/* RIGHT: Nurse Image — full section height, right half — DESKTOP ONLY */}
      <motion.div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden z-[5]"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}>
        <div className="hero-breakout-mask w-full h-full relative">
          <img
            src={hero.nurseImage}
            alt="Assisting Nurse & Patient Infusion Homecare"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Subtle top fade — hides image behind navbar, matches ambient bg */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/50 to-transparent z-10 pointer-events-none" />
          {/* Subtle bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/60 via-white/20 to-transparent z-10 pointer-events-none" />
          {/* Left-edge blend into text column */}
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />

          {/* 🫧 Floating Badge 1 */}
          <div className="flex absolute top-32 left-10 bg-white/70 backdrop-blur-xl rounded-[1.75rem] p-3.5 shadow-luxury border border-white/60 items-center gap-3 animate-float z-20 max-w-[200px]">
            <div className="w-9 h-9 rounded-full bg-primary-50 border border-primary-100/30 flex items-center justify-center text-primary-500 flex-shrink-0 shadow-soft">
              <IconShield size={16} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-extrabold text-[11px] text-navy-700">
                {hero.floatingBadges.badge1.title}
              </span>
              <span className="text-[9px] text-primary-500 font-bold">
                {hero.floatingBadges.badge1.subtitle}
              </span>
            </div>
          </div>

          {/* 🫧 Floating Badge 2 */}
          <div
            className="flex absolute bottom-36 left-6 bg-white/70 backdrop-blur-xl rounded-[1.75rem] p-3.5 shadow-luxury border border-white/60 items-center gap-3 animate-float z-20 max-w-[210px]"
            style={{ animationDelay: "2s" }}>
            <div className="w-9 h-9 rounded-full bg-cyan-50 border border-cyan-100/30 flex items-center justify-center text-cyan-500 flex-shrink-0 shadow-soft">
              <IconHeart size={16} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-extrabold text-[11px] text-navy-700">
                {hero.floatingBadges.badge2.title}
              </span>
              <span className="text-[9px] text-cyan-600 font-bold">
                {hero.floatingBadges.badge2.subtitle}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full relative z-10 flex flex-col lg:flex-row lg:min-h-screen">
        {/* Left: Text column — left half on desktop with proper padding */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="w-full container-custom lg:pr-12">
            <FadeIn
              className="flex flex-col justify-center text-center lg:text-left pt-32 pb-10 lg:py-36 max-w-xl mx-auto lg:mx-0"
              x={-30}
              duration={0.8}>
              {/* Badge Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-primary-100/30 text-primary-600 font-extrabold text-[11px] tracking-wider mb-5 w-fit shadow-soft animate-float mx-auto lg:mx-0">
                <Sparkles size={12} className="text-primary-500" />
                {hero.badge}
              </div>
              {/* Headline */}
              <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-navy-700 leading-[1.15] mb-5 tracking-tight font-heading">
                {hero.headlineLine1}
                <br />
                <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-600">
                  {hero.headlineLine2}
                </span>
              </h1>
              {/* Description */}
              <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-navy-600/70 mb-8 max-w-sm sm:max-w-md lg:max-w-xl leading-relaxed font-bold mx-auto lg:mx-0">
                {hero.description}
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full">
                <Button
                  href={whatsapp.url}
                  variant="primary"
                  size="md"
                  icon={
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.599-1.01-5.048-2.868-6.912C16.608 2.086 14.167.972 11.586.972c-5.442 0-9.866 4.372-9.87 9.746 0 1.992.521 3.94 1.512 5.66l-.951 3.477 3.57-.923zm12.015-7.794c-.328-.164-1.938-.956-2.232-1.062-.295-.107-.51-.16-.723.164-.213.324-.826 1.062-1.012 1.275-.187.213-.375.24-.703.076-.328-.164-1.386-.51-2.64-1.627-.976-.87-1.633-1.947-1.824-2.275-.192-.328-.02-.505.144-.668.148-.146.328-.383.492-.574.164-.192.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.723-1.74-.991-2.385-.262-.633-.529-.547-.723-.557-.187-.01-.4-.011-.613-.011-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.668 0 1.574 1.147 3.094 1.307 3.307.16.213 2.258 3.448 5.47 4.836.764.33 1.36.527 1.824.674.767.244 1.467.21 2.018.128.614-.092 1.938-.792 2.213-1.558.275-.767.275-1.424.192-1.558-.083-.134-.294-.213-.623-.377z" />
                    </svg>
                  }
                  className="w-full sm:w-auto">
                  Booking via WhatsApp
                </Button>
                <Button
                  href={whatsapp.consultationUrl}
                  variant="white"
                  size="md"
                  icon={
                    <svg
                      className="w-4 h-4 text-primary-500 fill-none stroke-current"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  }
                  className="w-full sm:w-auto">
                  Konsultasi Sekarang
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right: MOBILE-ONLY nurse image (desktop version is absolute above) */}
        <motion.div
          className="lg:hidden w-full px-4 pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}>
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] relative overflow-hidden rounded-[2rem]">
            <img
              src={hero.nurseImage}
              alt="Assisting Nurse & Patient Infusion Homecare"
              className="w-full h-full object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />

            {/* Badges visible from sm on mobile */}
            <div className="hidden sm:flex absolute top-5 left-5 bg-white/70 backdrop-blur-xl rounded-[1.75rem] p-3 shadow-luxury border border-white/60 items-center gap-3 animate-float z-20 max-w-[190px]">
              <div className="w-8 h-8 rounded-full bg-primary-50 border border-primary-100/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                <IconShield size={14} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-extrabold text-[10px] text-navy-700">
                  {hero.floatingBadges.badge1.title}
                </span>
                <span className="text-[9px] text-primary-500 font-bold">
                  {hero.floatingBadges.badge1.subtitle}
                </span>
              </div>
            </div>

            <div
              className="hidden sm:flex absolute bottom-5 left-4 bg-white/70 backdrop-blur-xl rounded-[1.75rem] p-3 shadow-luxury border border-white/60 items-center gap-3 animate-float z-20 max-w-[200px]"
              style={{ animationDelay: "2s" }}>
              <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-100/30 flex items-center justify-center text-cyan-500 flex-shrink-0">
                <IconHeart size={14} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-extrabold text-[10px] text-navy-700">
                  {hero.floatingBadges.badge2.title}
                </span>
                <span className="text-[9px] text-cyan-600 font-bold">
                  {hero.floatingBadges.badge2.subtitle}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Desktop right spacer — keeps flex row balanced */}
        <div className="hidden lg:block lg:w-1/2" />
      </div>

      {/* 🎴 Trust Ribbon */}
      <FadeIn
        className="container-custom relative z-20 w-full mt-10 sm:mt-16 lg:mt-0 -mb-32 sm:-mb-40 lg:-mb-52 pb-10 lg:pb-0"
        y={30}
        delay={0.4}>
        <div className="bg-white rounded-[1.5rem] lg:rounded-[2rem] shadow-luxury border border-primary-50/60 p-5 md:p-8 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 divide-y-0 lg:divide-x divide-primary-100/60">
          {hero.trustItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-row items-center gap-3 flex-1 ${idx > 0 ? "lg:pl-8" : ""}`}>
              <div className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100/40 flex items-center justify-center text-primary-500 flex-shrink-0 shadow-soft font-heading font-black text-sm">
                {idx + 1}
              </div>
              <div className="flex flex-col leading-tight pr-1 text-left">
                <span className="font-heading font-extrabold text-[12px] text-navy-700 mb-0.5 tracking-tight">
                  {item.title}
                </span>
                <span className="text-[10px] font-bold text-navy-600/55 leading-normal">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
