"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All", "Black & Grey", "Minimal", "Realism", "Portrait", "Mandala", 
  "Traditional", "Custom Designs", "Paintings", "Canvas Art", "Wall Art"
];

const PORTFOLIO_ITEMS = [
  { title: "Filigree Study", category: "Black & Grey", rowSpan: 2, imageUrl: "/img/photo-1597852075234-fd721ac361d3.avif" },
  { title: "Botanica", category: "Minimal", rowSpan: 1, imageUrl: "/img/photo-1570168983832-8989dae1522e.avif" },
  { title: "Sacred Geometry", category: "Mandala", rowSpan: 1, imageUrl: "/img/photo-1604374376934-2df6fad6519b.avif" },
  { title: "Silent Watcher", category: "Portrait", rowSpan: 2, imageUrl: "/img/photo-1570168983832-8989dae1522e.avif" },
  { title: "Gilded Ruin", category: "Canvas Art", rowSpan: 1, imageUrl: "/img/photo-1614174487989-10fc7b5382a9.avif" },
  { title: "Full Sleeve", category: "Black & Grey", rowSpan: 1, imageUrl: "/img/photo-1522687533888-1078974f88ec.avif" },
  { title: "The Muse", category: "Paintings", rowSpan: 1, imageUrl: "/img/photo-1614174487989-10fc7b5382a9.avif" },
  { title: "Heirloom", category: "Traditional", rowSpan: 1, imageUrl: "/img/photo-1562962230-16e4623d36e6.avif" },
  { title: "Kintsugi", category: "Wall Art", rowSpan: 1, imageUrl: "/img/photo-1522687533888-1078974f88ec.avif" },
  { title: "Leo", category: "Custom Designs", rowSpan: 1, imageUrl: "/img/photo-1597852075234-fd721ac361d3.avif" },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => 
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <Section id="portfolio">
      <SectionHeading
        eyebrow="Portfolio"
        titleFirst="Signature"
        titleSecond="works."
        description="A curated selection from recent sessions and commissions. Every piece is one-of-one."
      />
      
      {/* Filters */}
      <div className="mt-10 -mx-4 sm:mx-0 overflow-x-auto scrollbar-none">
        <div className="flex gap-2 px-4 sm:px-0 sm:flex-wrap">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-[11px] tracking-[0.2em] uppercase transition",
                activeFilter === category
                  ? "bg-gold-gradient text-[var(--color-ink)] shadow-gold-glow"
                  : "glass-card text-muted-foreground hover:text-[var(--color-gold)]"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px] gap-3 sm:gap-4">
        {filteredItems.map((item, idx) => (
          <AnimatedSection
            key={item.title}
            delay={0.05 * idx}
            className={cn("group relative overflow-hidden rounded-2xl bg-[var(--color-charcoal)]", item.rowSpan === 2 && "sm:row-span-2")}
          >
            {item.imageUrl ? (
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
            ) : (
              <div className="h-full w-full bg-[var(--color-charcoal)] transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
            
            <div className="absolute inset-x-0 bottom-0 p-4 text-left">
              <div className="text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)]">
                {item.category}
              </div>
              <div className="font-display text-lg sm:text-xl text-offwhite mt-1">
                {item.title}
              </div>
            </div>
            
            <div className="absolute top-3 right-3 h-8 w-8 rounded-full glass-gold grid place-items-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-[var(--color-gold)] text-xs">+</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
