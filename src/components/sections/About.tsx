import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const ABOUT_FEATURES = [
  {
    title: "Originality",
    description: "No stencils twice. Every piece is drawn for you.",
  },
  {
    title: "Premium Hygiene",
    description: "Single-use, sterile equipment. Medical-grade protocols.",
  },
  {
    title: "Attention to Detail",
    description: "Fine-line precision honed over a decade.",
  },
  {
    title: "Artistic Excellence",
    description: "Trained in fine art. Painters first, tattooers always.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:gap-20 lg:grid-cols-[1.1fr_1fr] items-center">
        <div>
          <SectionHeading
            eyebrow="The Studio"
            titleFirst="An atelier for"
            titleSecond="permanent art."
            description="Tattoo Tornado And Paintings - Tattoo Shop is a boutique studio in the heart of Udaipur — devoted to hand-drawn tattoos and canvas paintings. We treat skin, and canvas, with the same reverence: as a surface for original work that lasts a lifetime."
          />
          
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {ABOUT_FEATURES.map((feature, idx) => (
              <AnimatedSection key={feature.title} delay={0.1 * idx}>
                <div className="glass-card rounded-2xl p-5 hover-lift">
                  <div className="font-display text-xl text-[var(--color-gold)]">
                    {feature.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

          <AnimatedSection direction="up" className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxury">
            <div className="w-full h-[420px] sm:h-[520px] bg-[var(--color-charcoal)] relative">
               <Image
                 src="/img/photo-1522687533888-1078974f88ec.avif"
                 alt="Studio Details"
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-transparent z-10" />
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-4 sm:-left-8 glass-gold rounded-2xl p-5 sm:p-6 max-w-xs shadow-gold-glow z-20">
            <div className="font-display text-4xl text-[var(--color-gold)]">10+</div>
            <div className="text-xs tracking-[0.25em] uppercase text-offwhite/80 mt-1">Years of craft</div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
