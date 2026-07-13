"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--color-ink)]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <Image
          src="/img/photo-1562962230-16e4623d36e6.avif"
          alt="Tattoo Studio Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)]/70 via-[var(--color-ink)]/60 to-[var(--color-ink)] z-10" />
        <div 
          className="absolute inset-0 z-10" 
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(207,168,86,0.15) 0%, transparent 60%)" }} 
        />
      </div>

      {/* Gold Particles */}
      <div className="pointer-events-none absolute inset-0 z-20 opacity-50">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[var(--color-gold)]/60 blur-[1px]"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-36 sm:pt-40 lg:pt-44 pb-20 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-4xl">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-3 rounded-full glass-gold px-4 py-2 mb-8">
              <Star className="h-3.5 w-3.5 text-[var(--color-gold)] fill-[var(--color-gold)]" />
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]">
                Est. Udaipur · Rajasthan
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="font-display leading-none tracking-tighter text-[var(--color-offwhite)] text-[42px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[92px] xl:text-[108px]">
              Tattoo <span className="italic text-gold-gradient">Tornado</span>
              <span className="block">And Paintings</span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6 tracking-[0.4em] uppercase text-muted-foreground not-italic font-sans font-light">
                - Tattoo Shop -
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              A private atelier for permanent art and painted canvas — where every line is drawn once, and drawn forever. Handcrafted in Udaipur.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild>
                <Link href="#contact" className="group gap-3">
                  Book Appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#portfolio" className="gap-3">
                  View Portfolio
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="gap-3">
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.5}>
            <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl">
              <div className="border-l border-[var(--color-gold)]/30 pl-4">
                <div className="font-display text-2xl sm:text-3xl text-[var(--color-gold)]">10+</div>
                <div className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mt-1">Years of craft</div>
              </div>
              <div className="border-l border-[var(--color-gold)]/30 pl-4">
                <div className="font-display text-2xl sm:text-3xl text-[var(--color-gold)]">2K+</div>
                <div className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mt-1">Original pieces</div>
              </div>
              <div className="border-l border-[var(--color-gold)]/30 pl-4">
                <div className="font-display text-2xl sm:text-3xl text-[var(--color-gold)]">5★</div>
                <div className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mt-1">Client-loved</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground z-30">
        <div className="animate-pulse">Scroll</div>
      </div>
    </section>
  );
}
