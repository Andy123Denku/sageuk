import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ProgramsHero } from "@/components/programs-hero";
import { ProgramsSection } from "@/components/programs-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Our Programs | SAGE UK",
  description:
    "Explore SAGE UK's transformative programs designed to empower young entrepreneurs through real-world experiences, education, and innovation.",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProgramsHero />
        <ProgramsSection />
      </main>
      <Footer />
    </>
  );
}