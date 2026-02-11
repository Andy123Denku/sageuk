import Link from "next/link"
import { MonitorPlay, ClipboardCheck, Search } from "lucide-react"

const guidelines = [
  {
    icon: MonitorPlay,
    title: "Presentation Format:",
    bullets: [
      {
        text: "Live 13 minute video presentation + 7 minute Q&A session.",
        href: null,
      },
      {
        text: "4 Page Annual Report",
        href: null,
      },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Judging Criteria:",
    bullets: [
      {
        text: "Judging Rubric Shown Here.",
        href: "/resources",
      },
    ],
  },
  {
    icon: Search,
    title: "Judge\u2019s Focus:",
    bullets: [
      {
        text: "Judges assess teams on how effectively they integrate the five criteria into their ventures. This includes insights into their decision-making process, challenges, and measurable successes.",
        href: null,
      },
    ],
  },
]

export function UsaGuidelinesSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Rules & Criteria
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl text-balance">
            Competition <span className="text-primary">Guidelines</span>
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid gap-8 md:grid-cols-3">
          {guidelines.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-secondary p-6"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                <item.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold text-foreground">
                {item.title}
              </h3>

              {/* Bullets */}
              <ul className="space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet.text} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {bullet.href ? (
                      <Link
                        href={bullet.href}
                        className="text-base text-primary underline-offset-4 transition-colors hover:underline"
                      >
                        {bullet.text}
                      </Link>
                    ) : (
                      <span className="text-base leading-relaxed text-muted-foreground">
                        {bullet.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
