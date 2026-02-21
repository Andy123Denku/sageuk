import Link from "next/link";
import {
  Bus,
  Globe,
  Lightbulb,
  Users,
  BookOpen,
  Network,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    id: "edu-tour",
    tag: "Educational Tourism",
    icon: Bus,
    accentClass: "bg-primary/10 text-primary",
    borderAccent: "hover:border-primary/40",
    tagClass: "bg-primary/10 text-primary",
    title: "SAGE Industrial Edu-Tour",
    tagline: "Embarking on a Journey of Knowledge: Igniting the Flame of Learning",
    description:
      "SAGE Industrial Edu-Tour is an educational tourism program for high school students that offers a unique and enriching opportunity to combine learning with travel. It involves organized trips to various destinations that provide educational value, enhance students' knowledge and skills designed to complement the school curriculum and provide practical learning experiences beyond the classroom.",
    highlights: [
      {
        icon: Globe,
        title: "Real-World Exploration",
        text: "Visit historical sites, museums, cultural landmarks, scientific institutions, and businesses — witnessing first-hand what students have been studying in textbooks.",
      },
      {
        icon: Lightbulb,
        title: "Skills Development",
        text: "Students develop critical thinking, problem-solving, and communication skills while gaining exposure to diverse cultures, traditions, and perspectives.",
      },
      {
        icon: Users,
        title: "Expert Interaction",
        text: "Engage with professionals, local communities, and industry leaders through interactive workshops, field trips, and discussions.",
      },
      {
        icon: Network,
        title: "Networking Opportunities",
        text: "Connect theoretical concepts with real-world applications and build a network of peers and mentors from across the globe.",
      },
    ],
    outcome:
      "A unique blend of learning and adventure that broadens horizons, ignites curiosity, and creates lifelong memories — equipping students with the skills and knowledge needed to succeed in an increasingly interconnected world.",
  },
  // Placeholder slots for future programs — remove or populate as needed
];

export function ProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Programs
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            Initiatives Built for{" "}
            <span className="text-primary">Impact</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Each program is carefully designed to meet young people where they
            are and take them further than they imagined possible.
          </p>
        </div>

        {/* Programs list */}
        <div className="mt-16 flex flex-col gap-16">
          {programs.map((program) => (
            <article
              key={program.id}
              className={`rounded-2xl border border-border bg-card transition-all ${program.borderAccent} hover:shadow-xl`}
            >
              {/* Program header */}
              <div className="border-b border-border p-8 sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${program.accentClass}`}
                  >
                    <program.icon className="h-7 w-7" />
                  </div>

                  <div className="flex-1">
                    {/* Tag */}
                    <span
                      className={`mb-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${program.tagClass}`}
                    >
                      {program.tag}
                    </span>

                    <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                      {program.title}
                    </h3>
                    <p className="mt-1 text-sm italic text-muted-foreground">
                      {program.tagline}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlights grid */}
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                {program.highlights.map((highlight, i) => (
                  <div
                    key={highlight.title}
                    className={`flex items-start gap-4 p-6 sm:p-8 ${
                      i % 2 === 0 && i + 1 < program.highlights.length
                        ? "sm:border-r sm:border-border"
                        : ""
                    } ${i < program.highlights.length - 2 ? "border-b border-border" : ""}`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <highlight.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {highlight.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Outcome footer */}
              <div className="border-t border-border bg-secondary/50 px-8 py-6 sm:px-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Program Outcome:{" "}
                      </span>
                      {program.outcome}
                    </p>
                  </div>
                  <Link
                    href={`#contact`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow transition-all hover:scale-105 hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mx-auto">
              <Globe className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              Interested in Our Programs?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Whether you're a student, school, or organization — reach out to
              learn how you can get involved with SAGE UK's programs and bring
              transformative experiences to young entrepreneurs near you.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="#contact"
                className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Get Involved
              </Link>
              <Link
                href="/about#sponsors"
                className="inline-block rounded-lg border border-border bg-background px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:shadow-md"
              >
                View Our Sponsors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}