import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/img/4.jpg"
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
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          We&apos;d Love to{" "}
          <span className="text-primary">Hear From You</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Whether you&apos;re a student, school, sponsor, or simply curious about
          what we do — reach out and let&apos;s start a conversation.
        </p>
      </div>
    </section>
  );
}