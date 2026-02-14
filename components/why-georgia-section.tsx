"use client"

import Image from "next/image"

const cards = [
  {
    image: "/images/vietnam-ha-long-bay.jpg",
    alt: "Limestone karsts in Ha Long Bay, Vietnam",
    title: "Iconic Landscapes",
    description:
      "Did you know? Vietnam is home to Ha Long Bay, a UNESCO World Heritage Site featuring thousands of limestone karsts rising dramatically from emerald waters.",
  },
  {
    image: "/images/vietnam-street-food.jpg",
    alt: "Vietnamese street food with pho and banh mi",
    title: "World-Famous Cuisine",
    description:
      "Did you know? Vietnamese cuisine is celebrated worldwide for its fresh ingredients and bold flavors—from pho and banh mi to fresh spring rolls and rich Vietnamese coffee.",
  },
  {
    image: "/images/vietnam-hoi-an.jpg",
    alt: "Lantern-lit streets of Hoi An, Vietnam",
    title: "Cultural Experiences",
    description:
      "Did you know? The ancient town of Hoi An transforms each evening with glowing lanterns, reflecting Vietnam’s deep cultural heritage and centuries-old trading history.",
  },
  {
    image: "/images/vietnam-traditions.jpg",
    alt: "Traditional Vietnamese Ao Dai dress",
    title: "Art & Tradition",
    description:
      "Did you know? Vietnam’s traditions shine through its elegant Ao Dai dress, water puppet theater, and vibrant festivals that celebrate community and history.",
  },
]

export function WhyVietnamSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Why Vietnam?
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Discover Vietnam: Our 2026 Host Country
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
