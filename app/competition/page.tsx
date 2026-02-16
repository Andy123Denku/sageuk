import { Navbar } from "@/components/navbar";
import { CompetitionHero } from "@/components/competition-hero";
import { WhatToExpectSection } from "@/components/what-to-expect-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { GetInvolvedSection } from "@/components/get-involved-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competition Overview | SAGE UK",
  description:
    "Learn about SAGE UK competitions, from local showcases to the World Cup. Discover how teenage entrepreneurs build real businesses that create lasting change.",
};

export default function CompetitionPage() {
  return (
    <>
      <Navbar />
      <main>
        <CompetitionHero />
        <WhatToExpectSection />
        <HowItWorksSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </>
  );
}
