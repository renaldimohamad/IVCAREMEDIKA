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
  metadataBase: new URL("https://www.ivcaremedika.com"),

  title:
    "Layanan Homecare Premium Jabodetabek & Gorontalo | Infus Vitamin ke Rumah",

  description:
    "IVCare Medika menghadirkan layanan homecare premium dengan dokter & tenaga medis profesional langsung ke rumah di Jabodetabek dan Gorontalo.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Layanan Homecare Premium Jabodetabek & Gorontalo | Infus Vitamin ke Rumah",
    description:
      "Layanan homecare premium dengan dokter & tenaga medis profesional langsung ke rumah.",
    url: "https://www.ivcaremedika.com",
    siteName: "IVCare Medika",
    images: [
      {
        url: "/OG_Image.webp",
        width: 1200,
        height: 630,
        alt: "IVCare Medika Homecare Premium",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Layanan Homecare Premium Jabodetabek & Gorontalo | Infus Vitamin ke Rumah",
    description:
      "Layanan homecare premium dengan dokter & tenaga medis profesional langsung ke rumah.",
    images: ["/OG_Image.webp"],
  },
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
        image: "https://www.ivcaremedika.com/OG_Image.webp",
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
        {/* <FAQ /> */}

        {/* Call directories, checklists, & smartphone phone simulator mockups */}
        {/* <CTASection /> */}
      </main>

      {/* Dark Navy Footer */}
      <Footer />
    </>
  );
}
