"use client";

import {
  Heart,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  ClipboardCheck,
  Home,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import GradientBlur from "@/components/ui/GradientBlur";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

// Custom premium SVG icons matching screenshot
const VisiIcon = () => (
  <svg
    className="w-6 h-6 text-primary-500 fill-none stroke-current"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 5l-7 7m7-7h-5m5 0v5"
    />
  </svg>
);

const MisiIcon = () => (
  <svg
    className="w-6 h-6 text-primary-500 fill-none stroke-current"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.5V2.5" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2.5l5 3-5 3v-6z"
      fill="currentColor"
      className="text-primary-500/10"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21.5l6-11 5 7.5L21 21.5H3z"
    />
  </svg>
);

const UserStarIcon = () => (
  <svg
    className="w-5 h-5 text-primary-500 fill-none stroke-current"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 14.5l1 2 2 .5-1.5 1.5.5 2-2-1-2 1 .5-2-1.5-1.5 2-.5z"
    />
  </svg>
);

const HandshakeIcon = () => (
  <svg
    className="w-5 h-5 text-primary-500 fill-none stroke-current"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

export default function WhyChooseUs() {
  const { aboutSection } = siteConfig;

  // Values item icons mapping
  const valueIconsMap = [
    Heart,
    ShieldCheck,
    UserStarIcon,
    HandshakeIcon,
    TrendingUp,
  ];

  // Ribbon icons mapping
  const ribbonIconsMap = [UserCheck, ClipboardCheck, Home, MessageSquare];

  return (
    <Section id="why-us" background="white" hasDivider={true}>
      {/* Dynamic Background Glows */}
      <GradientBlur
        position="top-left"
        color="sky"
        size="md"
        className="-translate-x-1/2 -translate-y-1/2"
      />
      <GradientBlur
        position="bottom-right"
        color="cyan"
        size="md"
        className="translate-x-1/2 translate-y-1/2"
      />

      <Container>
        <div className="w-full flex justify-center mt-10">
          <FadeIn y={24}>
            <span className="text-[11px] lg:text-[11px] font-extrabold tracking-[0.2em] text-primary-600 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/40 mb-6">
              {aboutSection.badge}
            </span>
          </FadeIn>
        </div>
        {/* ROW 1: Hero area of Tentang Kami */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-24 mt-20">
          {/* Left Column: Story */}
          <FadeIn
            className="lg:col-span-7 flex flex-col items-start text-left"
            x={-30}>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-navy-700 leading-[1.2] mb-6 tracking-tight">
              {aboutSection.headlineLine1}
              <br />
              <span className="text-primary-500">
                {aboutSection.headlineLine2}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-navy-600/70 leading-relaxed mb-6 font-medium">
              {aboutSection.paragraph1}
            </p>
            <p className="text-sm sm:text-base text-navy-600/70 leading-relaxed font-medium">
              {aboutSection.paragraph2}
            </p>
          </FadeIn>

          {/* Right Column: Branded Nurse Image */}
          <FadeIn
            className="lg:col-span-5 relative flex items-center justify-center"
            x={30}>
            <div className="relative w-full max-w-[500px] aspect-[1.3] rounded-[2.5rem] overflow-hidden shadow-luxury border border-primary-100/10 z-10 bg-white">
              <img
                src={aboutSection.nurseElderlyImage}
                alt="Perawat IVCareMedika Mendampingi Lansia"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Ambient Background Glow behind image */}
            <GradientBlur
              position="center"
              color="primary"
              size="md"
              className="scale-75 -z-10"
            />
          </FadeIn>
        </div>

        {/* ROW 2: Visi & Misi side-by-side cards */}
        <div className="mb-20 lg:mb-24">
          <FadeIn className="text-center mb-12">
            <h3 className="text-xl md:text-xl font-bold text-navy-700 tracking-tight">
              Visi & Misi Kami
            </h3>
            <div className="w-12 h-1 bg-primary-500 mx-auto mt-3.5 rounded-full"></div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* VISI CARD */}
            <FadeIn y={20}>
              <Card
                variant="airy"
                hoverLift={false}
                className="p-8 h-full flex flex-col justify-start text-left">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary-50 border border-primary-100/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <VisiIcon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-extrabold text-lg text-navy-700 mb-2">
                      {aboutSection.visiCard.title}
                    </span>
                    <p className="text-xs text-navy-600/70 leading-relaxed font-medium">
                      {aboutSection.visiCard.text}
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>

            {/* MISI CARD */}
            <FadeIn y={20} delay={0.15}>
              <Card
                variant="airy"
                hoverLift={false}
                className="p-8 h-full flex flex-col justify-start text-left">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary-50 border border-primary-100/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <MisiIcon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-extrabold text-lg text-navy-700 mb-2">
                      {aboutSection.misiCard.title}
                    </span>
                    <ul className="space-y-2 text-xs text-navy-600/70 leading-relaxed list-disc pl-4 font-medium">
                      {aboutSection.misiCard.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>

        {/* ROW 3: Nilai-Nilai Kami & Komitmen Kami side-by-side */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16 lg:mb-20">
          {/* Left Column: Nilai-Nilai Kami Card */}
          <FadeIn className="lg:col-span-7 flex" x={-20}>
            <Card
              variant="simple"
              hoverLift={false}
              className="p-8 lg:p-10 w-full flex flex-col justify-center bg-primary-50/15 border-primary-100/30 text-left">
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl lg:text-2xl text-navy-700 tracking-tight">
                  Nilai-Nilai Kami
                </h3>
                <div className="w-12 h-1 bg-primary-500 mt-3 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {aboutSection.valuesList.map((val, idx) => {
                  const Icon = valueIconsMap[idx] || Heart;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-primary-50 border border-primary-100/35 flex items-center justify-center text-primary-500 mb-3 shadow-soft">
                        <Icon />
                      </div>
                      <span className="font-heading font-extrabold text-sm text-navy-700 mb-1.5 tracking-tight">
                        {val.title}
                      </span>
                      <p className="text-[10px] font-medium text-navy-600/50 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </FadeIn>

          {/* Right Column: Komitmen Kami Card */}
          <FadeIn className="lg:col-span-5 flex" x={20} delay={0.15}>
            <Card
              variant="airy"
              hoverLift={true}
              className="p-6 w-full flex flex-col md:flex-row lg:flex-row gap-6 items-center lg:items-start text-left">
              {/* Bag Kit Image */}
              <div className="w-full md:w-2/5 lg:w-[180px] aspect-[1.3] md:aspect-[1.1] rounded-lg overflow-hidden shadow-soft border border-primary-50/50 flex-shrink-0 bg-slate-50">
                <img
                  src={aboutSection.medicalBagImage}
                  alt="IVCareMedika Premium Clinical Kit Bag"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Description & Clinical highlighted banner */}
              <div className="flex flex-col justify-between flex-grow h-full">
                <div>
                  <h4 className="text-xl font-bold text-navy-700 mb-2 tracking-tight">
                    Komitmen Kami
                  </h4>
                  <p className="text-[12px] text-navy-600/70 leading-relaxed mb-4 font-medium">
                    Kami berkomitmen untuk menjadi mitra kesehatan terpercaya
                    bagi Anda dan keluarga, dengan layanan yang mengedepankan
                    keselamatan, kenyamanan, dan kepuasan pasien.
                  </p>
                </div>

                <div className="bg-primary-50/30 border border-primary-100/30 rounded-2xl p-3 flex gap-2.5 items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <ShieldCheck size={16} strokeWidth={2.5} />
                  </div>
                  <p className="text-[10px] font-medium text-navy-700 leading-normal">
                    IVCare Medika hadir untuk Anda, di mana pun Anda berada.{" "}
                    <span className="text-primary-500 font-extrabold">
                      Kesehatan Anda, Prioritas Kami.
                    </span>
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>

        {/* ROW 4: Bottom Ribbon / Banner */}
        <FadeIn y={30}>
          <div className="bg-primary-50 border border-primary-100/20 rounded-[2rem] p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-0 items-stretch text-left">

            {/* Statement Column */}
            <div className="lg:col-span-2 flex items-center gap-3 p-4 border-b sm:border-b sm:border-r lg:border-b-0 lg:border-r border-primary-100">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0 shadow-soft">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <div className="flex flex-col pr-4">
                <span className="text-[11px] font-medium text-navy-700 leading-normal">
                  {aboutSection.ribbon.statementLine1}
                </span>
                <span className="text-xs font-extrabold text-primary-500 leading-normal mt-0.5">
                  {aboutSection.ribbon.statementLine2}
                </span>
              </div>
            </div>

            {/* Icons columns */}
            {aboutSection.ribbon.items.map((item, idx) => {
              const Icon = ribbonIconsMap[idx] || UserCheck;

              return (
                <div
                  key={idx}
                  className={`
            flex items-center gap-3.5 p-4
            border-b sm:border-b-0
            sm:border-r
            lg:border-r
            last:border-r-0
            border-primary-100
          `}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100/35 flex items-center justify-center text-primary-500 flex-shrink-0 shadow-soft">
                    <Icon size={18} strokeWidth={2.5} />
                  </div>

                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] font-medium text-navy-600/50 mb-0.5 tracking-tight uppercase">
                      {item.title}
                    </span>
                    <span className="font-heading font-extrabold text-xs text-navy-700">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
