import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  PenTool,
  User,
  Layers,
  Sparkles,
  Feather,
  Waves,
  Brush,
  Palette,
  Image as ImageIcon,
  Home,
  Briefcase
} from "lucide-react";

const TATTOO_SERVICES = [
  { title: "Custom Tattoo", desc: "Original, drawn for you.", icon: PenTool },
  { title: "Portrait Tattoo", desc: "Photorealistic likeness.", icon: User },
  { title: "Sleeve Tattoo", desc: "Full-arm compositions.", icon: Layers },
  { title: "Cover-Up Tattoo", desc: "Second chances, better.", icon: Sparkles },
  { title: "Fine Line Tattoo", desc: "Delicate single-needle work.", icon: Feather },
  { title: "Blackwork Tattoo", desc: "Bold, saturated black.", icon: Waves },
  { title: "Traditional Tattoo", desc: "Classic linework.", icon: Brush },
  { title: "Minimal Tattoo", desc: "Quiet, elegant marks.", icon: PenTool },
];

const PAINTING_SERVICES = [
  { title: "Canvas Paintings", desc: "Original acrylic & oil.", icon: Palette },
  { title: "Hand-Painted Portraits", desc: "Commissioned likeness.", icon: User },
  { title: "Wall Murals", desc: "For homes & studios.", icon: Home },
  { title: "Custom Commissions", desc: "Created to brief.", icon: Briefcase },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        titleFirst="What we"
        titleSecond="offer."
      />
      
      <div className="mt-12">
        <div className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)] mb-6">Tattoo Services</div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TATTOO_SERVICES.map((svc, idx) => (
            <AnimatedSection key={svc.title} delay={0.05 * idx}>
              <div className="group relative overflow-hidden rounded-2xl glass-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-xl glass-gold grid place-items-center text-[var(--color-gold)]">
                  <svc.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-xl text-offwhite mt-4">{svc.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{svc.desc}</p>
                <div className="absolute -bottom-px left-6 right-6 h-px bg-[var(--color-gold)]/0 group-hover:bg-[var(--color-gold)]/50 transition" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)] mb-6">Painting Services</div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PAINTING_SERVICES.map((svc, idx) => (
            <AnimatedSection key={svc.title} delay={0.05 * idx}>
              <div className="group relative overflow-hidden rounded-2xl glass-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-xl glass-gold grid place-items-center text-[var(--color-gold)]">
                  <svc.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-xl text-offwhite mt-4">{svc.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{svc.desc}</p>
                <div className="absolute -bottom-px left-6 right-6 h-px bg-[var(--color-gold)]/0 group-hover:bg-[var(--color-gold)]/50 transition" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
