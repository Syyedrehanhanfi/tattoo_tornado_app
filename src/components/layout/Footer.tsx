import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 md:py-16 bg-[var(--color-ink)]">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-3">
              <Image 
                src="/logo/logo.png" 
                alt="Tattoo Tornado Logo" 
                width={48} 
                height={48} 
                className="shrink-0 h-8 w-8 object-contain"
              />
              <span className="font-display text-lg text-[var(--color-offwhite)] tracking-wide">
                Tattoo Tornado And Paintings
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A boutique atelier for permanent art and painted canvas — handcrafted in Udaipur, Rajasthan.
            </p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-6">Explore</div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-[var(--color-gold)] transition-colors">About</Link></li>
              <li><Link href="#portfolio" className="hover:text-[var(--color-gold)] transition-colors">Portfolio</Link></li>
              <li><Link href="#services" className="hover:text-[var(--color-gold)] transition-colors">Services</Link></li>
              <li><Link href="#gallery" className="hover:text-[var(--color-gold)] transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-6">Connect</div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="tel:07737747772" className="inline-flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors">
                  <Phone className="h-4 w-4" /> 077377 47772
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors">
                  <InstagramIcon className="h-4 w-4" /> @tattoo_tornado_official
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Tattoo Tornado And Paintings. All rights reserved.</div>
          <div className="tracking-[0.2em] uppercase">Crafted in Udaipur · India</div>
        </div>
      </Container>
    </footer>
  );
}
