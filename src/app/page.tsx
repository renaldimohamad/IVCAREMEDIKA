import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ServiceSection from "@/components/sections/ServiceSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BookingFlow from "@/components/sections/BookingFlow";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
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
