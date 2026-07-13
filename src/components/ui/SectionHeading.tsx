import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  eyebrow: string;
  titleFirst: string;
  titleSecond: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  titleFirst,
  titleSecond,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-[var(--color-gold)]"></span>
        <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[var(--color-gold)]">
          {eyebrow}
        </span>
      </div>
      
      <h2 className="mt-5 font-display leading-[1] tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        {titleFirst} <span className="italic text-gold-gradient">{titleSecond}</span>
      </h2>
      
      {description && (
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
