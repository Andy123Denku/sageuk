import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/about-hero.jpg"
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
          About SAGE UK
        </p>
        <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Empowering the Next Generation of{" "}
          <span className="text-primary">Changemakers</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          For over two decades, SAGE has been at the forefront of youth
          entrepreneurship, transforming communities across the globe.
        </p>
      </div>
    </section>
  );
}
