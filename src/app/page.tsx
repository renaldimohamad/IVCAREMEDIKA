import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingFlow from "@/components/BookingFlow";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Single Page Layout Sections */}
      <main className="flex-grow">

        {/* Hero Section */}
        <Hero />

        {/* <ServiceSection /> */}

        <WhyChooseUs />

        {/* <BookingFlow /> */}

        {/* <FAQ /> */}

        {/* <CTASection /> */}

      </main>

      {/* Dark Navy Footer */}
      {/* <Footer /> */}
    </>
  );
}
