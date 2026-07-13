import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const WHY_US_FEATURES = [
  "100% Custom Artwork",
  "Professional Artists",
  "Premium Studio",
  "Sterile Equipment",
  "Luxury Experience",
  "Creative Consultation",
  "Aftercare Support",
  "Long-lasting Quality",
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Consult",
    desc: "We listen. We sketch. We refine — until it feels like yours.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Original artwork drawn in-house, sized to your body or wall.",
  },
  {
    num: "03",
    title: "Create",
    desc: "Sterile, unhurried sessions. Music, tea, focus.",
  },
  {
    num: "04",
    title: "Aftercare",
    desc: "Guided healing so the piece stays sharp for decades.",
  },
];

export function WhyUs() {
  return (
    <Section id="why-us">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Why Us */}
        <div>
          <SectionHeading
            eyebrow="Why Us"
            titleFirst="A studio built for"
            titleSecond="the discerning."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-y-6 gap-x-4">
            {WHY_US_FEATURES.map((feature, idx) => (
              <AnimatedSection key={feature} delay={0.05 * idx} className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-gold)] shrink-0" />
                <span className="text-sm text-offwhite">{feature}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Right Column: Creative Process */}
        <div>
          <SectionHeading
            eyebrow="Creative Process"
            titleFirst="From idea"
            titleSecond="to skin."
          />
          <div className="mt-12 space-y-8">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimatedSection key={step.num} delay={0.1 * idx} className="flex gap-6 group">
                <div className="font-display text-3xl sm:text-4xl text-[var(--color-gold)]/50 group-hover:text-[var(--color-gold)] transition-colors">
                  {step.num}
                </div>
                <div className="pt-2 border-t border-white/5 flex-1 group-hover:border-[var(--color-gold)]/30 transition-colors">
                  <div className="text-offwhite mb-2 text-lg">{step.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{step.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
