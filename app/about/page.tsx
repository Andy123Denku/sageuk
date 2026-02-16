import { Navbar } from "@/components/navbar";
import { AboutHero } from "@/components/about-hero";
import { MissionVisionSection } from "@/components/mission-vision-section";
import { TeamSection } from "@/components/team-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SAGE UK",
  description:
    "Learn about SAGE UK's mission, meet our leadership team, and discover the sponsors who make youth entrepreneurship possible worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <MissionVisionSection />
        <TeamSection />
        <SponsorsSection />
      </main>
      <Footer />
    </>
  );
}
