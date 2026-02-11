import Image from "next/image"
import Link from "next/link"

export function JourneySection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Small circular image */}
        <div className="mx-auto mb-8 h-24 w-24 overflow-hidden rounded-full border-2 border-primary shadow-lg">
          <Image
            src="/images/journey.jpg"
            alt="SAGE competition winners celebrating"
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>

        <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
          Your Journey Starts <span className="text-primary">HERE</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From coaching and mentorship to world-class competitions, SAGE
          provides the tools and community you need to turn your ideas into
          impactful businesses.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#"
            className="inline-block rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Our Competitions
          </Link>
          <Link
            href="#"
            className="inline-block rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  )
}
