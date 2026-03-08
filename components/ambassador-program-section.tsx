"use client";

import { useState } from "react";
import {
  Award,
  Users,
  Briefcase,
  Globe,
  CheckCircle,
  X,
  Send,
} from "lucide-react";

const roles = [
  "Promote SAGE UK programmes within your university",
  "Recruit and support student mentors",
  "Help organise entrepreneurship workshops and events",
  "Support secondary school teams preparing for competitions",
  "Represent SAGE UK at university and community events",
];

const whoCanApply = [
  "University students passionate about entrepreneurship",
  "Students interested in leadership and youth development",
  "Students involved in innovation, business, or social impact",
];

const benefits = [
  {
    icon: Award,
    title: "Official SAGE UK Ambassador Certificate",
  },
  {
    icon: Briefcase,
    title: "Leadership and programme management experience",
  },
  {
    icon: Users,
    title: "Opportunity to mentor young entrepreneurs",
  },
  {
    icon: Globe,
    title: "Access to the SAGE global entrepreneurship network",
  },
];

const programmeStructure = [
  "Receive training from SAGE UK",
  "Support local SAGE activities",
  "Help grow the SAGE mentor network",
  "Contribute to national entrepreneurship events",
];

export function AmbassadorProgramSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    universityName: "",
    courseOfStudy: "",
    yearOfStudy: "",
    entrepreneurshipInterest: "",
    leadershipExperience: "",
    whyAmbassador: "",
    monthlyHours: "",
    willingToRecruit: "",
    impactGoal: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mzdjzpza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        const errorMessage =
          data?.errors
            ?.map((err: { message: string }) => err.message)
            .join(", ") ?? "Something went wrong. Please try again.";
        setError(errorMessage);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setError(null);
    setForm({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      universityName: "",
      courseOfStudy: "",
      yearOfStudy: "",
      entrepreneurshipInterest: "",
      leadershipExperience: "",
      whyAmbassador: "",
      monthlyHours: "",
      willingToRecruit: "",
      impactGoal: "",
    });
  }

  function closeModal() {
    setIsModalOpen(false);
    if (submitted) {
      handleReset();
    }
  }

  return (
    <>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              University Programme
            </p>
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
              SAGE UK University{" "}
              <span className="text-primary">Ambassador Programme</span>
            </h2>
          </div>

          {/* Intro */}
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Become a SAGE UK Ambassador
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              The SAGE UK University Ambassador Programme empowers university
              students to promote entrepreneurship, innovation, and youth
              leadership by supporting secondary school students participating
              in the SAGE programme.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Ambassadors serve as leaders on campus, helping recruit mentors,
              support student teams, and promote SAGE activities within their
              universities and communities.
            </p>
          </div>

          {/* Role of a SAGE Ambassador */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Role of a SAGE <span className="text-primary">Ambassador</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-secondary p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Apply */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Who Can <span className="text-primary">Apply</span>
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              We are looking for:
            </p>
            <div className="space-y-3">
              {whoCanApply.map((criteria, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {criteria}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              <span className="text-primary">Benefits</span>
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-border bg-secondary p-4 text-center">
              <p className="text-sm font-medium text-foreground">
                Recognition at SAGE UK national events
              </p>
            </div>
          </div>

          {/* Programme Structure */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Programme <span className="text-primary">Structure</span>
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              Ambassadors will:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {programmeStructure.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-12 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Join the <span className="text-primary">Movement</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of a global initiative empowering young entrepreneurs and
              innovators.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Apply to Become a SAGE UK Ambassador
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-card rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>

            <div className="p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="mb-4 h-14 w-14 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Application Submitted!
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Thank you for applying to the SAGE UK University Ambassador
                    Programme. Our team will review your application and contact
                    shortlisted candidates.
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    Together, we can empower the next generation of
                    entrepreneurs.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-8 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-2">
                    SAGE UK University Ambassador Programme Application
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                    Thank you for your interest in becoming a SAGE UK University
                    Ambassador. This programme empowers university students to
                    promote entrepreneurship, mentor young innovators, and
                    support SAGE activities within their universities and
                    communities. Please complete the form below. Selected
                    applicants will be contacted with further details about the
                    programme and training.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Section 1: Personal Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 1: Personal Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="fullName"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            value={form.fullName}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-foreground block mb-1.5"
                            >
                              Email Address{" "}
                              <span className="text-primary">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="text-sm font-medium text-foreground block mb-1.5"
                            >
                              Phone Number{" "}
                              <span className="text-primary">*</span>
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              value={form.phone}
                              onChange={handleChange}
                              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="city"
                              className="text-sm font-medium text-foreground block mb-1.5"
                            >
                              City <span className="text-primary">*</span>
                            </label>
                            <input
                              id="city"
                              name="city"
                              type="text"
                              required
                              value={form.city}
                              onChange={handleChange}
                              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="country"
                              className="text-sm font-medium text-foreground block mb-1.5"
                            >
                              Country <span className="text-primary">*</span>
                            </label>
                            <input
                              id="country"
                              name="country"
                              type="text"
                              required
                              value={form.country}
                              onChange={handleChange}
                              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: University Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 2: University Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="universityName"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            University Name{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <input
                            id="universityName"
                            name="universityName"
                            type="text"
                            required
                            value={form.universityName}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="courseOfStudy"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Course / Field of Study{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <input
                            id="courseOfStudy"
                            name="courseOfStudy"
                            type="text"
                            required
                            value={form.courseOfStudy}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="yearOfStudy"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Year of Study{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <select
                            id="yearOfStudy"
                            name="yearOfStudy"
                            required
                            value={form.yearOfStudy}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          >
                            <option value="">Select year...</option>
                            <option value="Year 1">Year 1</option>
                            <option value="Year 2">Year 2</option>
                            <option value="Year 3">Year 3</option>
                            <option value="Year 4">Year 4</option>
                            <option value="Postgraduate">Postgraduate</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Experience & Interest */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 3: Experience & Interest
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="entrepreneurshipInterest"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Are you interested in entrepreneurship, innovation,
                            or youth development?{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <select
                            id="entrepreneurshipInterest"
                            name="entrepreneurshipInterest"
                            required
                            value={form.entrepreneurshipInterest}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          >
                            <option value="">Select an option...</option>
                            <option value="Yes">Yes</option>
                            <option value="Somewhat">Somewhat</option>
                            <option value="Not sure">Not sure</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="leadershipExperience"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Do you have any experience in leadership, mentoring,
                            or volunteering?{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <textarea
                            id="leadershipExperience"
                            name="leadershipExperience"
                            required
                            rows={3}
                            value={form.leadershipExperience}
                            onChange={handleChange}
                            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="whyAmbassador"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Why do you want to become a SAGE UK Ambassador?{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <textarea
                            id="whyAmbassador"
                            name="whyAmbassador"
                            required
                            rows={4}
                            value={form.whyAmbassador}
                            onChange={handleChange}
                            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Commitment */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 4: Commitment
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="monthlyHours"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            How many hours per month can you dedicate to the
                            programme? <span className="text-primary">*</span>
                          </label>
                          <select
                            id="monthlyHours"
                            name="monthlyHours"
                            required
                            value={form.monthlyHours}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          >
                            <option value="">Select hours...</option>
                            <option value="2–4 hours">2–4 hours</option>
                            <option value="5–8 hours">5–8 hours</option>
                            <option value="10+ hours">10+ hours</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="willingToRecruit"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Are you willing to help recruit mentors and support
                            school teams? <span className="text-primary">*</span>
                          </label>
                          <select
                            id="willingToRecruit"
                            name="willingToRecruit"
                            required
                            value={form.willingToRecruit}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          >
                            <option value="">Select an option...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section 5: Final Question */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 5: Final Question
                      </h4>
                      <div>
                        <label
                          htmlFor="impactGoal"
                          className="text-sm font-medium text-foreground block mb-1.5"
                        >
                          What impact would you like to create as a SAGE
                          Ambassador? <span className="text-primary">*</span>
                        </label>
                        <textarea
                          id="impactGoal"
                          name="impactGoal"
                          required
                          rows={4}
                          value={form.impactGoal}
                          onChange={handleChange}
                          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    {/* Error message */}
                    {error && (
                      <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                        {error}
                      </p>
                    )}

                    {/* Submit button */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="text-primary">*</span> Required fields
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}