import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ContributeHero } from "@/components/contribute-hero";
import { WhySponsorSection } from "@/components/why-sponsor-section";
import { SponsorshipTiersSection } from "@/components/sponsorship-tiers-section";
import { SponsorshipFormSection } from "@/components/sponsorship-form-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contribute & Sponsor | SAGE UK",
  description:
    "Partner with SAGE UK to empower young entrepreneurs. Learn about sponsorship tiers, contribution opportunities, and how your support makes a difference.",
};

export default function ContributePage() {
  return (
    <>
      <Navbar />
      <main>
        <ContributeHero />
        <WhySponsorSection />
        <SponsorshipTiersSection />
        <SponsorshipFormSection />
      </main>
      <Footer />
    </>
  );
}