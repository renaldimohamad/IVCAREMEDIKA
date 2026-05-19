"use client";

import { MessageSquareCode, ShieldQuestion, CalendarCheck2, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export default function BookingFlow() {
  const { bookingSection } = siteConfig;

  // Icons map in procedural order
  const stepIcons = [MessageSquareCode, ShieldQuestion, CalendarCheck2, HeartHandshake];

  return (
    <Section id="education" background="white" hasDivider={true}>
      <Container>
        
        {/* Section Heading */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-500 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/50">
            {bookingSection.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 mt-6 mb-4 tracking-tight">
            {bookingSection.title}
          </h2>
          <p className="text-sm md:text-base text-navy-600/60 leading-relaxed font-bold">
            {bookingSection.subtitle}
          </p>
        </FadeIn>

        {/* 4-Step Cards Layout */}
        <div className="relative">
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-[6.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-100 via-primary-200 to-primary-100 -z-10"></div>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSection.steps.map((step, idx) => {
              const Icon = stepIcons[idx] || MessageSquareCode;
              return (
                <FadeIn key={idx} className="h-full flex">
                  <Card
                    variant="airy"
                    hoverLift={true}
                    className="w-full p-6 flex flex-col items-center text-center group"
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
                  </Card>
                </FadeIn>
              );
            })}
          </FadeInStagger>
        </div>

      </Container>
    </Section>
  );
}
