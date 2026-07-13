import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { InstagramIcon } from "@/components/ui/icons";

const INSTAGRAM_IMAGES = [
  "/img/photo-1570168983832-8989dae1522e.avif",
  "/img/photo-1562962230-16e4623d36e6.avif",
  "/img/photo-1597852075234-fd721ac361d3.avif",
  "/img/photo-1604374376934-2df6fad6519b.avif",
  "/img/photo-1522687533888-1078974f88ec.avif",
];

export function InstagramGallery() {
  return (
    <Section id="instagram" className="px-0 sm:px-0 lg:px-0 max-w-none border-none pt-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10 mb-10 flex flex-col sm:flex-row justify-between items-end gap-6">
        <SectionHeading
          eyebrow="Instagram"
          titleFirst="From the"
          titleSecond="studio floor."
        />
        <AnimatedSection direction="left" delay={0.2}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-[var(--color-gold)] transition-colors group"
          >
            <InstagramIcon className="h-4 w-4" />
            @tattoo_tornado_official
          </a>
        </AnimatedSection>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {INSTAGRAM_IMAGES.map((imgSrc, idx) => (
          <AnimatedSection
            key={idx}
            delay={0.1 * idx}
            className="aspect-square relative group overflow-hidden bg-[var(--color-charcoal)]"
          >
            <Image
              src={imgSrc}
              alt={`Instagram post ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-ink)]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 grid place-items-center">
              <InstagramIcon className="h-6 w-6 text-offwhite opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
