import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { RealBusinessSection } from "@/components/real-business-section";
import { SeizeFutureSection } from "@/components/seize-future-section";
import { JourneySection } from "@/components/journey-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <RealBusinessSection />
        <SeizeFutureSection />
        <JourneySection />
      </main>
      <Footer />
    </>
  );
}
