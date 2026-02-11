import Link from "next/link"
import { Users, GraduationCap, Briefcase } from "lucide-react"

const cards = [
  {
    number: 1,
    icon: Users,
    title: "For Teens",
    description: "Learn how you can compete at the national level.",
    buttons: [
      { label: "USA Competition", href: "#", variant: "solid" as const },
      { label: "Contact Us", href: "#", variant: "outline" as const },
    ],
  },
  {
    number: 2,
    icon: GraduationCap,
    title: "For Educators",
    description:
      "Support your students by starting a SAGE Entrepreneurship Club.",
    buttons: [
      { label: "Contact Us", href: "#", variant: "solid" as const },
    ],
  },
  {
    number: 3,
    icon: Briefcase,
    title: "For Business Leaders",
    description:
      "Help us by volunteering to judge at our next competition!",
    buttons: [
      { label: "Contact Us", href: "#", variant: "solid" as const },
    ],
  },
]

export function GetInvolvedSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            From Local Businesses to Global Recognition
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  )
}
