import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function ContributeHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/img/5.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Make a Difference
        </p>
        <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Invest in the{" "}
          <span className="text-primary">Future</span> of Entrepreneurship
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Your contribution — whether as a sponsor, donor, or partner — directly
          funds programs that transform teenagers into confident, socially-conscious
          entrepreneurs across the UK and beyond.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#sponsorship-form"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Become a Sponsor
          </Link>
          <Link
            href="#why-sponsor"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/80 px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:shadow-md"
          >
            Learn More
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}