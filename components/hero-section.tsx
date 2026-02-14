import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/img/1.jpeg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Discover the IMPACT made by our Teenage Entrepreneurs
        </h1>
        <div className="mt-10">
          <Link
            href="#learn-more"
            className="inline-block rounded-lg bg-primary px-8 py-3.5 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
