import { Globe, MapPin, Trophy } from "lucide-react"

const blocks = [
  {
    icon: Trophy,
    title: "What is the SAGE World Cup?",
    content:
      "The SAGE World Cup is the ultimate showcase of teenage entrepreneurs from across the globe. Every year, young changemakers present real businesses creating real impact, competing for the title of the world's top student enterprise.",
  },
  {
    icon: Globe,
    title: "A Global Tradition",
    content:
      "Each year, we travel to a new country to host the SAGE World Cup, immersing participants in different cultures and providing a truly international experience. From South Africa to Ukraine, the United States to Japan, the competition unites young innovators on a global stage.",
  },
  {
    icon: MapPin,
    title: "2025 World Cup",
    content:
      "In 2025, Georgia will serve as the next host country, bringing together student entrepreneurs, judges, and mentors from 30+ nations for a competition like no other!",
  },
]

export function WorldCupAboutSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
          About the SAGE World Cup
        </p>

        <div className="mt-12 space-y-12">
          {blocks.map((block) => {
            const Icon = block.icon
            return (
              <div key={block.title} className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    {block.content}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
