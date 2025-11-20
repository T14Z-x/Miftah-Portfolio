import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PartnersSection } from "@/components/PartnersSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { TokenSection } from "@/components/TokenSection";
import { UniverseSection } from "@/components/UniverseSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 -top-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/16 to-fuchsia-500/22 blur-3xl" />
        <div className="absolute right-[-16%] top-[12%] h-[380px] w-[480px] rounded-full bg-gradient-to-br from-fuchsia-500/20 via-rose-500/20 to-cyan-400/16 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.07),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.06),transparent_30%)]" />
      </div>

      <Navbar />
      <ScrollProgressBar />
      <main className="relative isolate">
        <Hero />
        <ProductsSection />
        <UniverseSection />
        <TokenSection />
        <PartnersSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
