"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <SectionHeading
            eyebrow="Contact"
            titleFirst="Let's design"
            titleSecond="something original."
            description="Free 20-minute consultations in-studio or over WhatsApp. Serious inquiries only."
          />
          
          <AnimatedSection direction="up" delay={0.2} className="mt-12 space-y-8">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 text-[var(--color-gold)] shrink-0 mt-1" />
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-2">Studio</div>
                <p className="text-offwhite text-sm leading-relaxed">
                  Main Chouraha, First Floor, New Rajasthan Bakery, Opposite Shastri<br />
                  Misthan, Near Arya Samaj Marg, Sector 4, Udaipur, Rajasthan 313001
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Phone className="h-5 w-5 text-[var(--color-gold)] shrink-0 mt-1" />
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-2">Call</div>
                <p className="text-offwhite text-sm leading-relaxed">077377 47772</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-5 w-5 text-[var(--color-gold)] shrink-0 mt-1" />
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-2">Hours</div>
                <p className="text-offwhite text-sm leading-relaxed">
                  Mon - Sun · 11:00 AM - 9:00 PM<br />
                  <span className="text-muted-foreground text-xs mt-1 block">By appointment preferred</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Button asChild>
                <a href="tel:07737747772" className="gap-2">
                  <Phone className="h-4 w-4" /> CALL
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/10 text-offwhite">
                <a href="https://wa.me/9107737747772" target="_blank" rel="noreferrer" className="gap-2">
                  WHATSAPP
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/10 text-offwhite">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="gap-2">
                  <InstagramIcon className="h-4 w-4" /> INSTAGRAM
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="left" delay={0.3} className="h-full min-h-[500px] lg:min-h-full">
          <div className="w-full h-full rounded-3xl overflow-hidden glass-card p-2 bg-[var(--color-ink)]/50 border border-white/5 relative min-h-[500px]">
            <div className="absolute inset-2 rounded-[20px] overflow-hidden bg-[var(--color-charcoal)]">
              <iframe
                title="Tattoo Tornado Google Maps Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=First+Floor,+Tattoo+Tornado+%26+Paintings+-+Best+Tattoo+Artist+in+Udaipur+%7C+Best+Tattoo+Studio+in+Udaipur,+new+rajasthan+Bakery,+Near,+Arya+Samaj+Marg,+opposite+Shastri+Misthan,+main+chouraha,+Sector+4,+Pooja+Nagar,+Hiran+Magri,+Udaipur,+Rajasthan+313001&hl=en-IN&z=15&output=embed"
                className="absolute inset-0 w-full h-full filter invert-[90%] hue-rotate-180 contrast-[85%] saturate-[10%]"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
