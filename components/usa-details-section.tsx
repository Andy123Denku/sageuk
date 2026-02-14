import {
  CalendarDays,
  Mail,
  CheckCircle2,
  Clock,
  Trophy,
  HelpCircle,
} from "lucide-react";

const details = [
  {
    icon: CheckCircle2,
    text: "After submitting the outreach form, you will receive a confirmation email from SAGE UK.",
  },
  {
    icon: CalendarDays,
    text: "To sign up for a time slot, your Annual Report must be submitted by May 2nd, 2026.",
  },
  {
    icon: Clock,
    text: "Zoom time slots will be available for scheduling from May 2 to May 16.",
  },
  {
    icon: Trophy,
    text: "Results for SAGE United Kindom will be announced on our Instagram page and this webpage on May 23.",
  },
];

export function UsaDetailsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Important Info
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl text-balance">
            Additional <span className="text-primary">Details</span>
          </h2>
        </div>

        {/* Detail items */}
        <div className="mx-auto max-w-3xl space-y-5">
          {details.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}

          {/* Contact item with mailto link */}
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              For additional questions, please contact our Director of Coaching,
              Shane Hooker, at{" "}
              <a
                href="mailto:shooker@sageglobal.org"
                className="text-primary underline-offset-4 transition-colors hover:underline"
              >
                shooker@sageUK.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
