"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Tattoos", href: "#tattoos" },
  { name: "Paintings", href: "#paintings" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-[var(--color-ink)]/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 sm:py-4 lg:py-5">
          {/* Logo */}
          <Link href="#home" className="min-w-0 flex items-center gap-3 group">
            <Image 
              src="/logo/logo.png" 
              alt="Tattoo Tornado Logo" 
              width={56} 
              height={56} 
              className="shrink-0 h-10 w-10 sm:h-12 sm:w-12 object-contain"
              priority
            />
            <span className="min-w-0 leading-[1.15]">
              <span className="block font-display text-base xs:text-lg sm:text-xl md:text-2xl text-[var(--color-offwhite)] tracking-wide">
                Tattoo Tornado And Paintings
              </span>
              <span className="block text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[var(--color-gold)]/80 mt-0.5">
                - Tattoo Shop
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-[13px] tracking-wide text-muted-foreground hover:text-[var(--color-gold)] transition-colors relative group"
              >
                {link.name}
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--color-gold)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
            <Button asChild className="ml-3">
              <Link href="#contact">Book Appointment</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Open menu"
            className="xl:hidden shrink-0 grid place-items-center h-11 w-11 rounded-full border border-white/10 text-offwhite hover:border-[var(--color-gold)]/60 hover:text-[var(--color-gold)] transition"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
