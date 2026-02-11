import Image from "next/image"

export function WorldCupHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/worldcup-hero.jpg"
        alt="Narikala Fortress overlooking Tbilisi, Georgia"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          SAGE Global Competition
        </p>
        <h1 className="text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
          2025 SAGE World Cup
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-primary font-semibold">
          Hosted in the country of Georgia!
        </p>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Where the world's top teenage entrepreneurs compete on a global stage.
        </p>
      </div>
    </section>
  )
}
