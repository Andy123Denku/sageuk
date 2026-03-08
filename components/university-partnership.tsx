import {
  GraduationCap,
  Users,
  Lightbulb,
  Presentation,
  Handshake,
} from "lucide-react";
import Link from "next/link";

const opportunities = [
  {
    icon: Users,
    title: "University Student Mentors",
    description:
      "Connect your students with secondary school teams to provide mentorship, guidance, and real-world business insights.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Workshops",
    description:
      "Host or co-deliver workshops on entrepreneurship, design thinking, innovation, and business development for young entrepreneurs.",
  },
  {
    icon: Presentation,
    title: "Guest Lectures and Judging Panels",
    description:
      "Provide faculty members and experts as guest speakers and judges at SAGE UK competitions and events.",
  },
  {
    icon: Handshake,
    title: "Collaboration on Youth Entrepreneurship Initiatives",
    description:
      "Partner with SAGE UK on research, programs, and initiatives that advance youth entrepreneurship education.",
  },
];

export function UniversityPartnershipSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Universities & Higher Education
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            University{" "}
            <span className="text-primary">Partnership Programme</span>
          </h2>
        </div>

        {/* Hero Card */}
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-12 mb-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-6">
            <GraduationCap className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            Support the Next Generation of{" "}
            <span className="text-primary">Innovators</span>
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            SAGE UK invites universities to partner with us by providing
            mentors, innovation support, and opportunities for young
            entrepreneurs.
          </p>
        </div>

        {/* Partnership Opportunities */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Partnership <span className="text-primary">Opportunities</span>
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <opportunity.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {opportunity.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {opportunity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="#sponsorship-form"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}