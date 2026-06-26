"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CustomIconWhatsapp } from "../ui/CustomIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Active link highlighting via intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-80px 0px 0px 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-24 w-full max-w-[100vw] flex items-center transition-all duration-300 border-b ${isScrolled
        ? "bg-white/90 backdrop-blur-md border-primary-100/30 shadow-lg"
        : "bg-white/70 backdrop-blur-sm border-transparent shadow-none"
        }`}>
      <Container className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 group"
          onClick={() => handleLinkClick("#home")}>
          <div className="flex gap-0 items-center">
            <img
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              className="w-14 h-14 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-extrabold text-sm tracking-wider text-primary-600">
                {siteConfig.name.split(" ")[0].toUpperCase()}
              </span>
              <span className="font-heading font-bold text-[8px] tracking-[0.25em] text-primary-600 -mt-0.5">
                {siteConfig.name.split(" ")[1].toUpperCase()}
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 py-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-heading font-extrabold text-[13px] tracking-wide transition-all relative group py-2 ${activeLink === link.href
                  ? "text-primary-600"
                  : "text-navy-600/70 hover:text-primary-500"
                  }`}
                onClick={() => handleLinkClick(link.href)}>
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-primary-500 transition-all duration-300 ${activeLink === link.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-50"
                    }`}></span>
              </a>
            ))}
          </div>

          {/* Direct CTA Booking Button */}
          <Button
            href={siteConfig.whatsapp.consultationUrl}
            variant="primary"
            size="sm"
            icon={<CustomIconWhatsapp size={18} />}>
            Booking via WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-soft text-navy-600 border border-primary-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {/* Mobile Glassmorphic Navigation Panel */}
      <div
        className={`lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-5 flex flex-col gap-1 border border-primary-100/50 transition-all duration-300 origin-top ${isMobileMenuOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}>
        {siteConfig.navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`px-4 py-3 font-bold text-sm text-navy-600 hover:bg-primary-50 rounded-2xl transition-all ${activeLink === link.href
              ? "text-primary-600 bg-primary-50/50"
              : ""
              }`}
            onClick={() => handleLinkClick(link.href)}>
            {link.name}
          </a>
        ))}
        <div className="h-px bg-primary-50/50 my-2"></div>
        {/* WhatsApp Mobile Button */}
        <Button
          href={siteConfig.whatsapp.consultationUrl}
          variant="primary"
          size="md"
          className="w-full gap-2"
          icon={<CustomIconWhatsapp size={18} />}>
          Booking via WhatsApp
        </Button>
      </div>
    </nav>
  );
}
