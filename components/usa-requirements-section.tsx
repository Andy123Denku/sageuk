import Link from "next/link"
import { FileText, Clock, Presentation, Package } from "lucide-react"

const requirements = [
  {
    icon: FileText,
    number: 1,
    title: "Written Annual Report:",
    description: 'Limited to four (4) printed pages (8 \u00BD x 11)',
    bullets: [
      {
        text: "Sample Annual Report Shown Here.",
        href: "/resources",
      },
    ],
  },
  {
    icon: Clock,
    number: 2,
    title: "Time Limit:",
    description: "Presentations must not exceed 13 minutes.",
    bullets: [
      {
        text: "A clear indication of the 12-minute mark (one minute warning) will be provided by SAGE Global.",
        href: null,
      },
    ],
  },
  {
    icon: Presentation,
    number: 3,
    title: "Content:",
    description:
      "Teams should present their business, including key operations, impact, and achievements.",
    bullets: [
      {
        text: "Audio-visual elements such as slides, videos, or graphics can be incorporated but are optional.",
        href: null,
      },
      {
        text: "Judging Rubric Shown Here.",
        href: "/resources",
      },
    ],
  },
  {
    icon: Package,
    number: 4,
    title: "Product Demonstration:",
    description:
      "While product demonstrations are allowed, it is important to note that at the SAGE World Cup, judges are not permitted to touch or inspect products or materials other than annual reports showcased by teams.",
    bullets: [
      {
        text: "To align with this standard, it is not recommended to rely on physical products or additional materials as a core part of your presentation. Instead, focus on clearly and effectively communicating the key aspects of your business through your oral delivery and any optional audio-visual elements such as slides or graphics.",
        href: null,
      },
    ],
  },
]

export function UsaRequirementsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Submission Info
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl text-balance">
            Requirements for <span className="text-primary">Submission</span>
          </h2>
        </div>

        {/* Intro paragraph */}
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          For the SAGE USA National Competition, teams will participate in a
          20-minute session designed to replicate an in-person experience,
          consisting of a 13-minute live video presentation followed by a
          7-minute Q&A session. While slides are encouraged, they are not
          required. Teams should follow these guidelines:
        </p>

        {/* Requirement cards grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {requirements.map((req) => (
            <div
              key={req.number}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30"
            >
              {/* Card header */}
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {req.number}
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <req.icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-bold text-foreground">
                {req.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed text-muted-foreground">
                {req.description}
              </p>

              {/* Bullet points */}
              <ul className="mt-4 space-y-2">
                {req.bullets.map((bullet) => (
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
                      <span className="text-base text-muted-foreground">
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
