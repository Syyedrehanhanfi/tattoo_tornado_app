"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-[var(--color-charcoal)]/30">
      <SectionHeading
        align="center"
        eyebrow="Testimonials"
        titleFirst="Words from"
        titleSecond="our clients."
      />
      
      <div className="mt-16 max-w-3xl mx-auto">
        <AnimatedSection direction="up" delay={0.2} className="text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 text-[var(--color-gold)] fill-[var(--color-gold)]" />
            ))}
          </div>

          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-offwhite leading-relaxed italic">
            “The most detailed fine-line work I've ever seen — worth flying to Udaipur for.”
          </p>
          
          <div className="mt-10">
            <div className="text-sm text-offwhite font-medium">Aditi Sharma</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
              MUMBAI - FINE LINE PORTRAIT
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button className="h-10 w-10 rounded-full border border-white/10 grid place-items-center text-muted-foreground hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/50 transition">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              <span className="h-1 w-6 rounded-full bg-[var(--color-gold)]" />
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="h-1 w-1 rounded-full bg-white/20" />
            </div>
            <button className="h-10 w-10 rounded-full border border-white/10 grid place-items-center text-muted-foreground hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/50 transition">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
