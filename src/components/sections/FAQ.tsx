"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  { question: "Is tattooing at your studio safe?", answer: "We maintain hospital-grade sterilization standards. Every needle and tube is single-use and opened in front of you. Workstations are thoroughly sanitized between sessions." },
  { question: "How much does a tattoo hurt?", answer: "Pain varies by placement and individual tolerance. Most describe it as a consistent scratching sensation. Our artists work gently and we can take breaks as needed." },
  { question: "How long is the healing process?", answer: "Initial surface healing takes 2-3 weeks. Complete healing below the skin takes about 1-2 months. We provide detailed aftercare instructions to ensure perfect healing." },
  { question: "What aftercare do you recommend?", answer: "Keep it clean, moisturize sparingly with unscented lotion, avoid direct sunlight and soaking in water for the first 3 weeks. Full instructions are provided after your session." },
  { question: "How do I book an appointment?", answer: "Fill out the consultation form below, or reach out via WhatsApp. We'll discuss your idea, size, and placement, then find a date that works." },
  { question: "How is pricing decided?", answer: "Pricing depends on the size, detail, and placement of the piece. We provide an estimated range during the consultation before booking." },
  { question: "Can I order a custom painting?", answer: "Yes. We take on select canvas commissions. Contact us with your concept, preferred size, and style." },
  { question: "Do you do fully custom artwork?", answer: "Always. Every tattoo and painting is 100% custom drawn for the client. We do not copy other artists' work." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            titleFirst="Answers to the"
            titleSecond="asked."
          />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AnimatedSection key={idx} delay={0.05 * idx}>
                <div 
                  className={cn(
                    "border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer bg-[var(--color-ink)]",
                    isOpen ? "glass-card" : "hover:border-white/10"
                  )}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <span className={cn("text-sm sm:text-base transition-colors", isOpen ? "text-[var(--color-gold)]" : "text-offwhite")}>
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-muted-foreground ml-4">
                      {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </div>
                  
                  <div 
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="p-6 pt-0 text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
