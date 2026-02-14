import Image from "next/image";
import Link from "next/link";

const judgingCriteria = [
  "Business Model",
  "Social Impact",
  "Innovation",
  "Sustainability",
  "Presentation Quality",
];

export function WhatToExpectSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <div className="flex-1">
            <div className="mx-auto max-w-md overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/competition-presenting.jpg"
                alt="Teenage entrepreneurs presenting their business at a SAGE competition"
                width={560}
                height={560}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              What to Expect
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl text-balance">
              Empowering Teens, Creating Real Change
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              SAGE UK competitions empower teenage entrepreneurs to create
              businesses that tackle urgent social and environmental issues.
              Whether at the local, national, or international level,
              participants are evaluated on their ability to make a real impact.
              Competitors are judged on:
            </p>

            {/* Numbered list */}
            <ol className="mt-6 space-y-3">
              {judgingCriteria.map((item, index) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-lg font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            {/* CTA link */}
            <div className="mt-8">
              <Link
                href="#"
                className="inline-block rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:scale-105"
              >
                Judging Rubric
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
