import { Quote } from "lucide-react"

export function SeizeFutureSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            Seize your <span className="text-primary">FUTURE</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Join a global community of young innovators making a lasting impact
            through entrepreneurship, mentorship, and real-world experience.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative rounded-2xl border border-border bg-secondary p-8 shadow-lg sm:p-10">
            <Quote className="absolute -top-4 left-8 h-8 w-8 text-primary" />
            <blockquote className="text-lg leading-relaxed text-muted-foreground italic">
              {`"SAGE has prepared me for the challenges of the real world by teaching me the basics to entrepreneurship...no one comes up to 9th grade, 10th grade or highschool knowing how to write a business report, an annual report or how to do accounting...Preparing for SAGE has taught me how."`}
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <p className="text-sm font-semibold text-primary">
                Jungmeen Lee, SAGE South Korea
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
