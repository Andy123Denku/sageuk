import Image from "next/image"
import Link from "next/link"

export function UsaWinnersSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="h-72 w-72 overflow-hidden rounded-full shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src="/images/usa-winners.jpg"
                alt="2025 SAGE USA Competition winners celebrating with trophy"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              2025 SAGE USA <span className="text-primary">Winners</span>
            </h2>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-block rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105"
              >
                Click here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
