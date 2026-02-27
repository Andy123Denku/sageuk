import Link from "next/link";
import { Users, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

const cards = [
  {
    number: 1,
    icon: Users,
    title: "For Teens",
    description: "Learn how you can compete at the national level.",
    buttons: [{ label: "Contact Us", href: "#", variant: "solid" as const }],
  },
  {
    number: 2,
    icon: GraduationCap,
    title: "For Educators",
    description:
      "Support your students by starting a SAGE Entrepreneurship Club.",
    buttons: [{ label: "Contact Us", href: "#", variant: "solid" as const }],
  },
  {
    number: 3,
    icon: Briefcase,
    title: "University Mentors",
    description: "Supports students on their entrepreneurship journey",
    buttons: [{ label: "Contact Us", href: "#", variant: "solid" as const }],
  },
  {
    number: 4,
    icon: Briefcase,
    title: "For Business Leaders",
    description: "Help us by volunteering to judge at our next competition!",
    buttons: [{ label: "Contact Us", href: "#", variant: "solid" as const }],
  },
];

const teamRequirements = [
  "A 'team' of at least 3 teenagers is organized and creates a real, operating business.",
  "The team can form within a class at their high school, an after-school program, within a community program, or on their own.",
  "All teams must have an adult supervisor to participate in SAGE.",
  "A school may have several SAGE teams, as long as each team has a sponsoring teacher, adult or sponsoring organization.",
  "All businesses, including for-profit and non-profit, may compete in SAGE.",
  '"Veteran" SAGE teams may re-enter its business for a period of two years.',
];

export function GetInvolvedSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            From Local Businesses to UK Recognition
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            How to Get <span className="text-primary">Involved</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you are a student, educator, or business leader, there is a
            place for you in the SAGE community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.number}
              className="group relative rounded-2xl border border-border bg-secondary p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Number badge */}
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {card.number}
                </span>
                <card.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {card.description}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                {card.buttons.map((btn, btnIdx) => (
                  <div key={btn.label}>
                    {btnIdx > 0 && (
                      <p className="mb-3 text-center text-sm text-muted-foreground">
                        or
                      </p>
                    )}
                    <Link
                      href={btn.href}
                      className={`block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg ${
                        btn.variant === "solid"
                          ? "bg-primary text-primary-foreground"
                          : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      }`}
                    >
                      {btn.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* How to Start a SAGE Team Section */}
        <div className="mt-20">
          <div className="rounded-2xl border border-border bg-background p-8 sm:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-foreground sm:text-4xl">
                How to Start a SAGE Team in Your{" "}
                <span className="text-primary">School/Community</span>
              </h3>
            </div>

            {/* Intro paragraph */}
            <div className="mb-10 rounded-xl bg-primary/5 p-6 border-l-4 border-primary">
              <p className="text-base leading-relaxed text-muted-foreground">
                The key to starting a team is to find an enthusiastic group of
                teenage leaders who are interested in starting their own
                business venture, along with an adult ally who is willing to
                encourage and support their participation as a SAGE sponsor.
                Once a group of teens has decided to participate, the ally who
                becomes their adviser should register the team.
              </p>
              <div className="mt-6">
                <Link
                  href="#register"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
                >
                  Register Your Team
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Requirements grid */}
            <div className="grid gap-4 md:grid-cols-2">
              {teamRequirements.map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg bg-secondary p-4 border border-border"
                >
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {requirement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}