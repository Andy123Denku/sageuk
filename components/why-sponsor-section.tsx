import { TrendingUp, Users, Globe, Award, Megaphone, Handshake } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Drive Social Impact",
    description:
      "Your investment directly funds real programs that equip teenagers with entrepreneurial skills to tackle pressing social challenges in their communities.",
  },
  {
    icon: Users,
    title: "Connect with Future Talent",
    description:
      "Get early access to the next generation of business leaders. Sponsors benefit from direct engagement with high-achieving, ambitious young entrepreneurs.",
  },
  {
    icon: Globe,
    title: "Global Brand Visibility",
    description:
      "SAGE UK operates across 30+ countries. Your brand is prominently featured at international competitions, events, and across our digital platforms.",
  },
  {
    icon: Award,
    title: "Recognition & Prestige",
    description:
      "Be recognised as a champion of youth entrepreneurship. Sponsorship places your organisation alongside world-class partners like EY, KPMG, and Microsoft.",
  },
  {
    icon: Megaphone,
    title: "Marketing Opportunities",
    description:
      "Receive prominent logo placement, speaking opportunities at events, features in newsletters, and co-branded content reaching thousands of stakeholders.",
  },
  {
    icon: Handshake,
    title: "Tailored Partnerships",
    description:
      "We work with every sponsor to create a bespoke partnership package that aligns your CSR goals, employee engagement programs, and brand values.",
  },
];

const ways = [
  {
    step: "01",
    title: "Financial Sponsorship",
    description:
      "Choose a sponsorship tier — Platinum, Gold, or Silver — and provide direct funding that keeps our competitions, mentorship programs, and educational tours running.",
  },
  {
    step: "02",
    title: "In-Kind Contributions",
    description:
      "Donate products, services, software licenses, venues, or resources that our students and teams can use directly in their programs and competitions.",
  },
  {
    step: "03",
    title: "Mentorship & Expertise",
    description:
      "Offer your professionals' time as mentors, judges, or workshop facilitators — sharing real-world expertise that textbooks simply can't provide.",
  },
  {
    step: "04",
    title: "Scholarship Funding",
    description:
      "Sponsor individual students or schools from underserved communities, ensuring that financial barriers never prevent talented young people from participating.",
  },
];

export function WhySponsorSection() {
  return (
    <section id="why-sponsor" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Why Sponsor */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Why Partner With Us
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            The Benefits of{" "}
            <span className="text-primary">Supporting SAGE UK</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Sponsoring SAGE UK is more than a donation — it&apos;s a strategic
            partnership that delivers real value for your organisation while
            creating lasting change for young people.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* How to Contribute */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Ways to Contribute
            </p>
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
              How You Can{" "}
              <span className="text-primary">Get Involved</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              There are many ways to support SAGE UK — find the approach that
              best aligns with your organisation&apos;s goals and capacity.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ways.map((way) => (
              <div
                key={way.step}
                className="flex items-start gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <span className="shrink-0 text-4xl font-black text-primary/20 leading-none">
                  {way.step}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{way.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {way.description}
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