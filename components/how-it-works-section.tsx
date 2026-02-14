import Image from "next/image";
import { Rocket, Award, Globe } from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "Entrepreneurial Beginnings",
    description:
      "Teens begin their journey by developing business solutions within their schools, clubs, or with the encouragement of their parents. They reach out to their local networks, including teachers, business leaders, and mentors, to refine their ideas and businesses and prepare for competition.",
  },
  {
    icon: Award,
    title: "National Stage",
    description:
      "Teams present their businesses at their country's national competition, representing their communities and showcasing the growth of their ventures. This stage is an opportunity for teens to further develop their strategies, improve their presentations, and gain recognition for their efforts.",
  },
  {
    icon: Globe,
    title: "SAGE World Cup",
    description:
      "The top two teams from each country are invited to the annual SAGE World Cup. This UK event allows students to present their businesses on an international stage, connect with industry leaders, and network with fellow teenage entrepreneurs from around the world. The World Cup combines competition with cultural exchange, fostering collaboration and inspiring the next generation of UK leaders.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            How it <span className="text-primary">Works</span>
          </h2>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text column */}
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-muted-foreground">
              SAGE equips teenage entrepreneurs to build real businesses under
              the guidance of their teachers and mentors. The preparation for
              SAGE competitions, from local events to the prestigious SAGE World
              Cup, helps students refine their business models, develop
              real-world skills, and gain confidence. By working through the
              SAGE process, teens transform their initial ideas into impactful
              businesses, ready to compete on national and UK stages.
            </p>

            {/* Steps */}
            <div className="mt-10 space-y-8">
              {steps.map((step) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
              Through this process, SAGE participants gain invaluable
              experience, building both their businesses and the skills
              necessary to make lasting impacts on their communities and beyond.
            </p>
          </div>

          {/* Image column */}
          <div className="flex-1">
            <div className="mx-auto max-w-md overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/competition-event.jpg"
                alt="SAGE international competition event with teams from around the world"
                width={560}
                height={560}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
