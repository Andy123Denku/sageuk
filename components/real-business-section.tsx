import Image from "next/image";

export function RealBusinessSection() {
  return (
    <section id="learn-more" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
              Real BUSINESSES <br />
              Real <span className="text-primary">CHANGE</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              For over 20 years, SAGE UK has empowered teenage entrepreneurs to
              create real businesses that address urgent social issues. Our
              network, active in over 30 countries on five continents, continues
              to expand, fostering UK change through innovation.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/img/2.jpeg"
                alt="Teenage entrepreneurs presenting their business plan at a SAGE competition"
                width={640}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
