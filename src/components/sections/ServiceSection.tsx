"use client";

import { Check, Award, ShieldAlert, Activity, HeartPulse } from "lucide-react";
import { siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";

export default function ServiceSection() {
  const { servicesSection } = siteConfig;

  // Icon map for the bottom SOP Ribbon
  const iconMap = [Award, ShieldAlert, Activity, HeartPulse];

  return (
    <Section
      id="services"
      background="medical-pattern"
      className="pt-28 sm:pt-36 lg:pt-48 pb-24"
      hasDivider={true}
    >
      <Container>
        
        {/* Section Heading */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-primary-500 uppercase bg-primary-50 px-4 py-2 rounded-full border border-primary-100/50">
            {servicesSection.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-700 mt-6 mb-4 tracking-tight">
            {servicesSection.title}
          </h2>
          <p className="text-sm md:text-base text-navy-600/60 leading-relaxed font-medium">
            {servicesSection.subtitle}
          </p>
        </FadeIn>

        {/* 3-Column Detailed Services Grid with Stagger Entrance */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 lg:mb-28">
          {servicesSection.list.map((service, idx) => (
            <FadeIn key={idx} className="h-full flex">
              <Card
                variant="airy"
                hoverLift={true}
                className="w-full flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <h3 className="text-xl font-extrabold text-navy-700 mb-2">{service.title}</h3>
                  <p className="text-xs text-navy-600/60 font-medium mb-6">{service.subtitle}</p>
                  <div className="h-[2px] bg-primary-100/30 w-16 mb-6"></div>

                  {/* Bullet Lists */}
                  <ul className="space-y-4 mb-8">
                    {service.list.map((item, listIdx) => (
                      <li key={listIdx} className="flex items-start gap-3 text-left">
                        <div className="w-5 h-5 rounded-full bg-primary-50 border border-primary-100/50 flex items-center justify-center text-primary-500 flex-shrink-0 mt-0.5 shadow-soft">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-[13px] text-navy-600/80 leading-snug font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Clinical Disclaimer box */}
                <div className="p-4 rounded-2xl bg-primary-50/50 border border-primary-100/30 flex items-start gap-3 mt-4 text-left">
                  <span className="text-[11px] leading-relaxed text-primary-700 font-medium">
                    <strong className="font-extrabold">PENTING:</strong> {service.note}
                  </span>
                </div>
              </Card>
            </FadeIn>
          ))}
        </FadeInStagger>

        {/* Bottom SOP Ribbon (Value Grid with overlapping layout) */}
        <FadeIn y={30}>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-[2.5rem] p-8 md:p-10 shadow-luxury text-white text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-white/20">
              {servicesSection.sopValues.map((value, idx) => {
                const Icon = iconMap[idx] || Award;
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
                      <span className="text-[11px] text-white/80 font-medium">
                        {value.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

      </Container>
    </Section>
  );
}
