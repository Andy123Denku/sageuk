import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { RealBusinessSection } from "@/components/real-business-section";
import { SeizeFutureSection } from "@/components/seize-future-section";
import { JourneySection } from "@/components/journey-section";
import { MentorTrainingSection } from "@/components/mentor-training-section";
import { GallerySection } from "@/components/gallery-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <RealBusinessSection />
        <SeizeFutureSection />
        <MentorTrainingSection />
        <GallerySection />
        <JourneySection />
      </main>
      <Footer />
    </>
  );
}
