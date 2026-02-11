import Image from "next/image"

export function UsaCompetitionHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/usa-competition-hero.jpg"
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
          Welcome USA teenage entrepreneurs!
        </p>
        <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          SAGE USA <span className="text-primary">Competition</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          The SAGE USA National Competition is where teenage entrepreneurs from
          across the country showcase their businesses and compete for a chance
          to represent the United States at the prestigious SAGE World Cup. Join
          us as we celebrate innovation, creativity, and real-world impact driven
          by young leaders.
        </p>
      </div>
    </section>
  )
}
