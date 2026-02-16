import { Target, Eye, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We encourage creative thinking and novel approaches to solving the world's most pressing social challenges.",
  },
  {
    icon: Globe,
    title: "UK Impact",
    description:
      "Our programs connect young entrepreneurs across 30+ countries, fostering cross-cultural collaboration and understanding.",
  },
];

export function MissionVisionSection() {
  return (
    <section id="mission" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision cards */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Mission */}
          <div className="flex-1 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              SAGE UK is dedicated to empowering teenagers around the world to
              develop entrepreneurial skills through the creation of real
              businesses that address urgent social issues. We believe that
              young people have the power to drive meaningful, lasting change in
              their communities and beyond.
            </p>
          </div>

          {/* Vision */}
          <div className="flex-1 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Eye className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Our <span className="text-accent">Vision</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We envision a world where every young person has the opportunity,
              resources, and mentorship to turn innovative ideas into
              sustainable enterprises. Through UK collaboration, we aim to build
              a generation of socially-conscious leaders who reshape industries
              and uplift communities worldwide.
            </p>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-16">
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            What Drives Us
          </h3>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-1 items-start gap-4 rounded-xl border border-border bg-secondary p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
