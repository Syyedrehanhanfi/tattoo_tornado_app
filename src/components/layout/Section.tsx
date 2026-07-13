import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
  id?: string;
}

export function Section({ className, containerClassName, children, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28 lg:py-36 border-t border-white/5", className)}
      {...props}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
