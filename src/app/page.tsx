import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedTattoos } from "@/components/sections/Tattoos";
import { Paintings } from "@/components/sections/Paintings";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedTattoos />
        <Paintings />
        <Portfolio />
        <Services />
        <WhyUs />
        <Testimonials />
        <InstagramGallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
