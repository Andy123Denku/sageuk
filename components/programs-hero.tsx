import Image from "next/image";

export function ProgramsHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/img/3.jpg"
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
          What We Do
        </p>
        <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Programs That{" "}
          <span className="text-primary">Transform</span> Young Lives
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From educational tours to entrepreneurship competitions, our programs
          equip teenagers with the skills, experiences, and networks to become
          tomorrow's leaders.
        </p>
      </div>
    </section>
  );
}