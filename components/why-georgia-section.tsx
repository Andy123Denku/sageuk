"use client"

import Image from "next/image"

const cards = [
  {
    image: "/images/georgia-landmarks.jpg",
    alt: "Gergeti Trinity Church in the Caucasus Mountains, Georgia",
    title: "Iconic Landmarks",
    description:
      "Did you know? Georgia is home to breathtaking sites like Gergeti Trinity Church, perched high in the Caucasus Mountains, offering stunning views and centuries of history.",
  },
  {
    image: "/images/georgia-supra.jpg",
    alt: "Traditional Georgian Supra feast with dishes and wine",
    title: "Traditional Supra",
    description:
      "Did you know? A Georgian Supra is more than just a feast\u2014it's a time-honored tradition where a Tamada (toastmaster) leads heartfelt toasts, turning every meal into a shared experience of culture and connection.",
  },
  {
    image: "/images/georgia-baths.jpg",
    alt: "Historic sulfur baths district in Tbilisi, Georgia",
    title: "Excursions",
    description:
      "Did you know? Tbilisi's historic sulfur baths have been a staple of relaxation for centuries, known for their natural healing properties and stunning mosaic interiors.",
  },
  {
    image: "/images/georgia-art.jpg",
    alt: "Traditional Georgian folk dancers in national costumes",
    title: "Art & History",
    description:
      "Did you know? Georgia's rich history is reflected in its ancient frescoes, medieval manuscripts, and vibrant folk dances, each telling the story of a nation that has bridged cultures for centuries.",
  },
]

export function WhyGeorgiaSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Why Georgia?
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Discover Georgia: Our 2025 Host Country
          </h2>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text area */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-primary">
                    {"Did you know? "}
                  </span>
                  {card.description.replace("Did you know? ", "")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
