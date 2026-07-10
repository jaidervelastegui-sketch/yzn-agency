import { LenisController, MotionController } from "@/components/animations";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageShell from "@/components/layout/PageShell";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Agency from "@/components/sections/Agency";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <PageShell>
      <LenisController />
      <MotionController />
      <Navbar />
      <main>
        <Hero />
        <Agency />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </PageShell>
  );
}
