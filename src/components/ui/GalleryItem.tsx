import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

interface GalleryItemProps {
  title: string;
  category: string;
  imageUrl?: string;
  className?: string;
  aspectRatio?: "square" | "portrait" | "video";
}

export function GalleryItem({
  title,
  category,
  imageUrl,
  className,
  aspectRatio = "portrait",
}: GalleryItemProps) {
  return (
    <AnimatedSection direction="up" delay={0.1} className={className}>
      <div
        className={`group relative overflow-hidden rounded-3xl hover-lift w-full ${
          aspectRatio === "portrait" ? "h-[460px] sm:h-[520px]" : "aspect-[4/5]"
        }`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[var(--color-charcoal)] transition-transform duration-[1.2s] group-hover:scale-105" />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/20 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold)]">
            {category}
          </div>
          <div className="font-display text-2xl sm:text-3xl text-[var(--color-offwhite)] mt-1 sm:mt-2">
            {title}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
