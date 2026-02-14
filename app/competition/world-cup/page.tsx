import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { WorldCupHero } from "@/components/worldcup-hero";
import { WorldCupCtaBanner } from "@/components/worldcup-cta-banner";
import { WorldCupAboutSection } from "@/components/worldcup-about-section";
import { WhyVietnamSection } from "@/components/why-georgia-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "2025 SAGE World Cup | Hosted in Georgia",
  description:
    "The 2025 SAGE World Cup brings together teenage entrepreneurs from 30+ nations to compete in Georgia. Discover the ultimate showcase of student enterprise on a UK stage.",
};

export default function WorldCupPage() {
  return (
    <main>
      <Navbar />
      <WorldCupHero />
      <WorldCupCtaBanner />
      <WorldCupAboutSection />
      <WhyVietnamSection />
      <Footer />
    </main>
  );
}
