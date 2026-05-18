"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Layanan", href: "#services" },
  { name: "Tentang Kami", href: "#why-us" },
  { name: "Edukasi", href: "#education" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px 0px 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? "py-3.5 bg-white/85 backdrop-blur-md border-primary-100/30 shadow-soft"
        : "py-5 bg-white/40 backdrop-blur-sm border-transparent"
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          onClick={() => handleLinkClick("#home")}
        >
          {/* <div className="relative w-10 h-10 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          </div> */}

          <div className="flex gap-0 items-center">
            <img
              src="/ivcare_logo.svg"
              alt="IVCareMedika Logo"
              className="w-14 h-14 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-extrabold text-lg tracking-wider text-primary-600">
                IVCARE
              </span>
              <span className="font-heading font-bold text-[10px] tracking-[0.25em] text-primary-600 -mt-0.5">
                MEDIKA
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-heading font-extrabold text-[13px] tracking-wide transition-all relative group py-2 ${activeLink === link.href
                  ? "text-primary-600"
                  : "text-navy-600/70 hover:text-primary-500"
                  }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-primary-500 transition-all duration-300 ${activeLink === link.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-50"
                    }`}
                ></span>
              </a>
            ))}
          </div>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/6281354872379"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-full px-6 py-2.5 text-xs font-bold flex items-center gap-2 hover:shadow-glow shadow-soft transition-all duration-300"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.599-1.01-5.048-2.868-6.912C16.608 2.086 14.167.972 11.586.972c-5.442 0-9.866 4.372-9.87 9.746 0 1.992.521 3.94 1.512 5.66l-.951 3.477 3.57-.923zm12.015-7.794c-.328-.164-1.938-.956-2.232-1.062-.295-.107-.51-.16-.723.164-.213.324-.826 1.062-1.012 1.275-.187.213-.375.24-.703.076-.328-.164-1.386-.51-2.64-1.627-.976-.87-1.633-1.947-1.824-2.275-.192-.328-.02-.505.144-.668.148-.146.328-.383.492-.574.164-.192.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.723-1.74-.991-2.385-.262-.633-.529-.547-.723-.557-.187-.01-.4-.011-.613-.011-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.668 0 1.574 1.147 3.094 1.307 3.307.16.213 2.258 3.448 5.47 4.836.764.33 1.36.527 1.824.674.767.244 1.467.21 2.018.128.614-.092 1.938-.792 2.213-1.558.275-.767.275-1.424.192-1.558-.083-.134-.294-.213-.623-.377z" />
            </svg>
            Booking via WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-soft text-navy-600 border border-primary-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-5 flex flex-col gap-1 border border-primary-100/50 transition-all duration-300 origin-top ${isMobileMenuOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`px-4 py-3 font-bold text-sm text-navy-600 hover:bg-primary-50 rounded-2xl transition-all ${activeLink === link.href ? "text-primary-600 bg-primary-50/50" : ""
              }`}
            onClick={() => handleLinkClick(link.href)}
          >
            {link.name}
          </a>
        ))}
        <div className="h-px bg-primary-50/50 my-2"></div>
        <a
          href="https://wa.me/6281354872379"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full py-3.5 gap-2 rounded-full text-sm font-bold flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.599-1.01-5.048-2.868-6.912C16.608 2.086 14.167.972 11.586.972c-5.442 0-9.866 4.372-9.87 9.746 0 1.992.521 3.94 1.512 5.66l-.951 3.477 3.57-.923zm12.015-7.794c-.328-.164-1.938-.956-2.232-1.062-.295-.107-.51-.16-.723.164-.213.324-.826 1.062-1.012 1.275-.187.213-.375.24-.703.076-.328-.164-1.386-.51-2.64-1.627-.976-.87-1.633-1.947-1.824-2.275-.192-.328-.02-.505.144-.668.148-.146.328-.383.492-.574.164-.192.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.723-1.74-.991-2.385-.262-.633-.529-.547-.723-.557-.187-.01-.4-.011-.613-.011-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.668 0 1.574 1.147 3.094 1.307 3.307.16.213 2.258 3.448 5.47 4.836.764.33 1.36.527 1.824.674.767.244 1.467.21 2.018.128.614-.092 1.938-.792 2.213-1.558.275-.767.275-1.424.192-1.558-.083-.134-.294-.213-.623-.377z" />
          </svg>
          Booking via WhatsApp
        </a>
      </div>
    </nav>
  );
}
