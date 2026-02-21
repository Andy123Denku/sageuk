import Link from "next/link";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Silver",
    tagline: "Start Your Journey",
    price: "£2,500",
    period: "/ year",
    accentBg: "bg-muted-foreground/10",
    accentText: "text-muted-foreground",
    borderClass: "border-border",
    badgeClass: "bg-muted-foreground/10 text-muted-foreground",
    ctaClass:
      "border border-border bg-background text-foreground hover:border-primary/40 hover:shadow-md",
    perks: [
      "Logo on SAGE UK website",
      "Social media mention (x2/year)",
      "Certificate of sponsorship",
      "Invitation to annual showcase",
      "Newsletter feature",
    ],
  },
  {
    name: "Gold",
    tagline: "Make a Real Impact",
    price: "£7,500",
    period: "/ year",
    featured: true,
    accentBg: "bg-accent/10",
    accentText: "text-accent",
    borderClass: "border-accent/40",
    badgeClass: "bg-accent/10 text-accent",
    ctaClass:
      "bg-primary text-primary-foreground shadow-lg hover:scale-105 hover:shadow-xl",
    perks: [
      "Everything in Silver",
      "Prominent logo on all event materials",
      "Social media campaign (x6/year)",
      "Speaking slot at one SAGE UK event",
      "Access to student talent pool",
      "Quarterly impact report",
      "Co-branded content piece",
    ],
  },
  {
    name: "Platinum",
    tagline: "Lead the Movement",
    price: "£15,000+",
    period: "/ year",
    accentBg: "bg-primary/10",
    accentText: "text-primary",
    borderClass: "border-primary/30",
    badgeClass: "bg-primary/10 text-primary",
    ctaClass:
      "border border-border bg-background text-foreground hover:border-primary/40 hover:shadow-md",
    perks: [
      "Everything in Gold",
      "Title sponsorship of a SAGE UK program",
      "Exclusive naming rights for one event",
      "Dedicated account manager",
      "Custom mentorship program design",
      "Priority media & press coverage",
      "Bespoke CSR reporting",
      "Board-level engagement opportunities",
    ],
  },
];

export function SponsorshipTiersSection() {
  return (
    <section
      id="sponsorship-tiers"
      className="scroll-mt-20 bg-secondary/50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Sponsorship Tiers
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            Choose Your{" "}
            <span className="text-primary">Level of Impact</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every tier is designed to offer meaningful benefits while directly
            funding the programs that change young lives. All packages are
            negotiable — reach out to discuss a custom arrangement.
          </p>
        </div>

        {/* Tiers */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border bg-card transition-all hover:shadow-xl ${
                tier.borderClass
              } ${tier.featured ? "ring-2 ring-accent/40 shadow-xl" : ""}`}
            >
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground shadow">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="border-b border-border p-6 sm:p-8">
                <span
                  className={`mb-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tier.badgeClass}`}
                >
                  {tier.name} Partner
                </span>
                <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-black text-foreground">{tier.price}</span>
                  <span className="mb-1 text-sm text-muted-foreground">{tier.period}</span>
                </div>
              </div>

              {/* Perks */}
              <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
                {tier.perks.map((perk) => (
                  <div key={perk} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tier.accentBg}`}
                    >
                      <Check className={`h-3 w-3 ${tier.accentText}`} />
                    </div>
                    <p className="text-sm text-muted-foreground">{perk}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 pt-0 sm:p-8 sm:pt-0">
                <Link
                  href="#sponsorship-form"
                  className={`block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all ${tier.ctaClass}`}
                >
                  Apply as {tier.name} Sponsor
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prices are indicative. All sponsorship packages are tailored to your
          organisation.{" "}
          <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
            Contact us
          </Link>{" "}
          to discuss a custom arrangement.
        </p>
      </div>
    </section>
  );
}