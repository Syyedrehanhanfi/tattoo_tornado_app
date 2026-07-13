import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryItem } from "@/components/ui/GalleryItem";

const TATTOOS = [
  {
    title: "Silent Watcher",
    category: "Portrait · 9 hrs",
    imageUrl: "/img/photo-1570168983832-8989dae1522e.avif"
  },
  {
    title: "Filigree Study",
    category: "Black & Grey · 6 hrs",
    imageUrl: "/img/photo-1597852075234-fd721ac361d3.avif"
  },
  {
    title: "Sacred Geometry",
    category: "Mandala · 5 hrs",
    imageUrl: "/img/photo-1604374376934-2df6fad6519b.avif"
  },
];

export function FeaturedTattoos() {
  return (
    <Section id="tattoos">
      <SectionHeading
        eyebrow="Featured Tattoos"
        titleFirst="Ink, drawn"
        titleSecond="once."
      />
      
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TATTOOS.map((tattoo) => (
          <GalleryItem
            key={tattoo.title}
            title={tattoo.title}
            category={tattoo.category}
            imageUrl={tattoo.imageUrl}
          />
        ))}
      </div>
    </Section>
  );
}
