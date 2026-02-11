import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { UsaCompetitionHero } from "@/components/usa-competition-hero"
import { UsaWinnersSection } from "@/components/usa-winners-section"
import { UsaRequirementsSection } from "@/components/usa-requirements-section"
import { UsaGuidelinesSection } from "@/components/usa-guidelines-section"
import { UsaDetailsSection } from "@/components/usa-details-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "SAGE USA Competition | SAGE Global",
  description:
    "The SAGE USA National Competition is where teenage entrepreneurs from across the country showcase their businesses and compete for a chance to represent the United States at the SAGE World Cup.",
}

export default function UsaCompetitionPage() {
  return (
    <main>
      <Navbar />
      <UsaCompetitionHero />
      <UsaWinnersSection />
      <UsaRequirementsSection />
      <UsaGuidelinesSection />
      <UsaDetailsSection />
      <Footer />
    </main>
  )
}
