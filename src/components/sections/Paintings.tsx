import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryItem } from "@/components/ui/GalleryItem";

const PAINTINGS = [
  {
    title: "Ethereal Forms",
    category: "Oil on Canvas · 36x48",
    imageUrl: "/img/photo-1614174487989-10fc7b5382a9.avif",
  },
  {
    title: "Nocturne",
    category: "Acrylic · 24x24",
    imageUrl: "/img/photo-1522687533888-1078974f88ec.avif",
  },
];

export function Paintings() {
  return (
    <Section id="paintings" className="bg-[var(--color-charcoal)]/30">
      <SectionHeading
        eyebrow="Paintings Gallery"
        titleFirst="Painted"
        titleSecond="on canvas."
      />
      
      <div className="mt-16 grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-[1000px]">
        {PAINTINGS.map((painting) => (
          <GalleryItem
            key={painting.title}
            title={painting.title}
            category={painting.category}
            imageUrl={painting.imageUrl}
            aspectRatio="square"
          />
        ))}
      </div>
    </Section>
  );
}
