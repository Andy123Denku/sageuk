import Link from "next/link"
import { Heart } from "lucide-react"

const sponsors = [
  {
    name: "EY (Ernst & Young)",
    tier: "Platinum",
    description:
      "Global leader in assurance, tax, transaction, and advisory services supporting SAGE's entrepreneurship programs.",
  },
  {
    name: "KPMG",
    tier: "Platinum",
    description:
      "One of the Big Four, providing mentorship opportunities and competition sponsorships to SAGE students.",
  },
  {
    name: "Deloitte Foundation",
    tier: "Gold",
    description:
      "Supporting education initiatives that develop the next generation of business leaders worldwide.",
  },
  {
    name: "Microsoft",
    tier: "Gold",
    description:
      "Empowering SAGE entrepreneurs with technology tools, training, and resources for digital innovation.",
  },
  {
    name: "Junior Achievement",
    tier: "Silver",
    description:
      "Collaborating with SAGE to expand access to financial literacy and work-readiness programs globally.",
  },
  {
    name: "World Bank Group",
    tier: "Silver",
    description:
      "Partnering on initiatives that connect youth entrepreneurship with sustainable development goals.",
  },
]

const tierColors: Record<string, string> = {
  Platinum: "bg-primary/10 text-primary",
  Gold: "bg-accent/10 text-accent",
  Silver: "bg-muted-foreground/10 text-muted-foreground",
}

export function SponsorsSection() {
  return (
    <section id="sponsors" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Partners
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            Sponsors &amp; <span className="text-primary">Partners</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We are grateful to the organizations that invest in youth
            entrepreneurship and help make SAGE's global programs possible.
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              {/* Tier badge */}
              <span
                className={`mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${tierColors[sponsor.tier]}`}
              >
                {sponsor.tier} Partner
              </span>

              <h3 className="text-lg font-bold text-foreground">
                {sponsor.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-xl text-center">
          <div className="rounded-2xl border border-border bg-card p-8">
            <Heart className="mx-auto mb-4 h-8 w-8 text-accent" />
            <h3 className="text-xl font-bold text-foreground">
              Become a Sponsor
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Join our network of partners and help empower teenage
              entrepreneurs around the world. Your support directly funds
              competitions, mentorship, and educational programs.
            </p>
            <Link
              href="#"
              className="mt-6 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
