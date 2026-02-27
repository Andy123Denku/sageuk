import { Target, Eye, Lightbulb, Globe, Users, Monitor, GraduationCap } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Lightbulb,
    title: "We Provide",
    description:
      "Provide students with functional economic citizenship education to eliminate poverty, conflicts and massive youth unemployment.",
  },
  {
    icon: Users,
    title: "We Build",
    description:
      "Build a network of teachers, Community leaders, University mentors and volunteers that deliver potent hands-on entrepreneurship and community service education in schools and communities.",
  },
  {
    icon: Monitor,
    title: "We Monitor",
    description:
      "Monitor the progress of each team as teachers engage their students to complete business and community service projects.",
  },
  {
    icon: GraduationCap,
    title: "We Prepare",
    description:
      "Prepare ALL regional champions to participate at the yearly SAGE competitions May/June.",
  },
];

const coreActivities = [
  "Build and train a network of teachers, University students, community leaders and business leaders who serve as Advisors and Mentors to SAGE teams.",
  "Teens between the ages of 13-19 years are trained and galvanized to complete REAL PROJECTS",
  "Monitor the progress of each school/community as teachers, community leaders, mentors engage their students on a complete business and community service project.",
  "Prepare Teams to compete at the regional champions at the yearly National SAGE competitions May/June.",
  "Best Teams advance from the National tournament that climaxes to the SAGE World Cup",
];

const studentLearnings = [
  "How to discover what they are good at doing and how to turn it into a socially responsible business idea.",
  "How to write a business plan",
  "How to raise funds to finance the business",
  "How to invest this money to pay for the business's start-up costs",
  "How to operate the business",
  "The notion of risk and return",
  "That ethical decisions are good decisions",
  "That even though some businesses will be unsuccessful, this doesn't make the student a failure",
  "Why paying taxes is essential to a well-functioning democracy",
  "The importance of oral and written presentation skills to 'sell' the idea to prospective funders.",
];

export function MissionVisionSection() {
  return (
    <section id="mission" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About SAGE */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
              About SAGE UK
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              SAGE- an acronym for Students for the Advancement of Global Entrepreneurship. It is a nonprofit Organization initiated at the California State University Chico USA. It is currently operating in all the continents of the world.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              It engages young people in a hands-on learning process on how to create wealth, help others and their communities.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Since the initiation of the SAGE Programme in 2002, it has shown that it is a potent model for educational reform, youth re-orientation, community service learning and youth employment generation. SAGE strategy is to prepare and empower youths through a youth entrepreneurship and community service programme, while simultaneously emphasizing the importance of financial literacy, ethical business practices, civic engagement and environmental awareness.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision cards */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 mt-16">
          {/* Vision */}
          <div className="flex-1 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Eye className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              SAGE <span className="text-accent">Vision</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Creating better futures through social enterprises, socially responsible businesses and community service.
            </p>
          </div>

          {/* Mission */}
          <div className="flex-1 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              SAGE <span className="text-primary">Mission</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              To help create the next generation of entrepreneurial leaders whose innovations and social enterprises address the major unmet needs of our global community.
            </p>
          </div>
        </div>

        {/* What We Do - 4 Cards */}
        <div className="mt-16">
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-start gap-4 rounded-xl border border-border bg-secondary p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Activities */}
        <div className="mt-16">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-6">
              Core <span className="text-primary">Activities</span>
            </h3>
            <ul className="space-y-4">
              {coreActivities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {activity}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What Students Learn */}
        <div className="mt-16">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              What Students <span className="text-primary">Learn</span>
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              After completing the program, students learn:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studentLearnings.map((learning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1 shrink-0">✓</span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {learning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}