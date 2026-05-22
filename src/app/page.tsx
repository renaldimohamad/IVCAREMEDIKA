import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ServiceSection from "@/components/sections/ServiceSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BookingFlow from "@/components/sections/BookingFlow";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import { siteConfig } from "@/config/site";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Layanan Homecare Jakarta & Infus Vitamin ke Rumah Premium",
  description:
    "Layanan kesehatan homecare Jakarta terbaik dari IVCareMedika. Dokter & perawat lincah berlisensi STR datang langsung ke rumah. Tersedia infus vitamin C (IV Therapy) premium & medical check-up.",
};

export default function Home() {
  // Generate FAQ JSON-LD dynamically from siteConfig
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqSection.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // Generate MedicalBusiness & WebSite JSON-LD
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.ivcaremedika.com/#medicalbusiness",
        name: "IVCare Medika",
        image: "https://www.ivcaremedika.com/logo-ivcaremedika.png",
        url: "https://www.ivcaremedika.com",
        telephone: "+6281354872379",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kebayoran Baru",
          addressLocality: "Jakarta Selatan",
          addressRegion: "DKI Jakarta",
          postalCode: "12110",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-6.2415",
          longitude: "106.8001",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        sameAs: [
          "https://www.instagram.com/ivcaremedika",
          "https://wa.me/6281354872379",
        ],
        medicalSpecialty: ["EmergencyMedicine", "PrimaryCare", "NursingCare"],
        availableService: siteConfig.servicesSection.list.map((srv) => ({
          "@type": "MedicalProcedure",
          name: srv.title,
          description: srv.subtitle,
          bodyLocation: "Entire Body",
        })),
      },
      {
        "@type": "WebSite",
        "@id": "https://www.ivcaremedika.com/#website",
        url: "https://www.ivcaremedika.com",
        name: "IVCare Medika",
        description:
          "Layanan homecare medis premium & wellness infus vitamin ke rumah Jakarta.",
        publisher: {
          "@id": "https://www.ivcaremedika.com/#medicalbusiness",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.ivcaremedika.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <>
      {/* 🧾 JSON-LD Structured Data Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Sticky Header Nav */}
      <Navbar />

      {/* Main Single Page Layout Sections */}
      <main className="flex-grow">
        {/* Asymmetric Breakout Hero */}
        <Hero />

        {/* Premium Medical Services Grid */}
        {/* <ServiceSection /> */}

        {/* Story, Vision, Values, & Brand Commitment */}
        <WhyChooseUs />

        {/* Booking Procedure flow charts */}
        {/* <BookingFlow /> */}

        {/* Interactive Searchable FAQ Accordions */}
        <FAQ />

        {/* Call directories, checklists, & smartphone phone simulator mockups */}
        {/* <CTASection /> */}
      </main>

      {/* Dark Navy Footer */}
      <Footer />
    </>
  );
}
