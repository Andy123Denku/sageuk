"use client";

import { useState } from "react";
import {
  Award,
  Users,
  Briefcase,
  Globe,
  GraduationCap,
  X,
  Send,
  CheckCircle,
} from "lucide-react";

const benefits = [
  "Official SAGE UK Mentor Certification",
  "Leadership and mentoring experience",
  "Opportunity to guide young entrepreneurs",
  "Access to the SAGE global innovation network",
  "Participation in SAGE competitions and events",
];

const whoShouldApply = [
  "University students",
  "Young professionals",
  "Entrepreneurs",
  "Educators and researchers",
];

export function MentorTrainingSection() {
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
    organisationName: "",
    courseOrProfession: "",
    currentRole: "",
    yearOfStudy: "",
    hasExperience: "",
    experienceDescription: "",
    whyMentor: "",
    skillsToShare: "",
    monthlyHours: "",
    willingToSupportTeams: "",
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
      organisationName: "",
      courseOrProfession: "",
      currentRole: "",
      yearOfStudy: "",
      hasExperience: "",
      experienceDescription: "",
      whyMentor: "",
      skillsToShare: "",
      monthlyHours: "",
      willingToSupportTeams: "",
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
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Mentor Programme 2026
            </p>
            <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
              SAGE UK Mentor{" "}
              <span className="text-primary">Training Programme</span>
            </h2>
          </div>

          {/* Hero Card */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-12 mb-12 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-6">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Call for University Mentors
            </h3>
            <p className="text-xl font-semibold text-primary mb-6">
              Shape the Future of Young Entrepreneurs
            </p>
            <p className="text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              SAGE UK is inviting university students, professionals, and
              educators to join our Mentor Training Programme and support
              secondary school teams developing innovative business and social
              enterprise ideas.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto mt-4">
              This programme prepares mentors with the skills and tools to guide
              young innovators as they build solutions that address real-world
              challenges.
            </p>
          </div>

          {/* Programme Benefits */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Programme <span className="text-primary">Benefits</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-background p-5 hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Apply */}
          <div className="mb-12">
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-foreground text-center mb-6">
                Who Should <span className="text-primary">Apply</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {whoShouldApply.map((item, index) => {
                  const icons = [
                    GraduationCap,
                    Briefcase,
                    Users,
                    Award,
                  ];
                  const Icon = icons[index];
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center gap-3"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground mb-6">
              Become Part of a Global Movement Supporting Youth Innovation
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Apply Now
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
                    Thank you for applying to the SAGE UK Mentor Training
                    Programme 2026. Our team will review your application and
                    contact shortlisted mentors with information about the
                    mentor training sessions and programme activities.
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
                    SAGE UK Mentor Training Programme 2026 – Application Form
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                    Thank you for your interest in the SAGE UK Mentor Training
                    Programme 2026. SAGE UK is inviting university students,
                    professionals, and educators to become mentors and support
                    secondary school students developing innovative business and
                    social enterprise ideas. Mentors will receive training and
                    guidance to help young entrepreneurs build impactful
                    solutions while gaining valuable leadership and mentoring
                    experience. Please complete the form below. Selected
                    applicants will receive further information about mentor
                    training and programme activities.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Section 1: Personal Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 1 – Personal Information
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

                    {/* Section 2: Professional / Academic Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 2 – Professional / Academic Information
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="organisationName"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            University / Organisation Name{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <input
                            id="organisationName"
                            name="organisationName"
                            type="text"
                            required
                            value={form.organisationName}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="courseOrProfession"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Course / Profession / Area of Expertise{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <input
                            id="courseOrProfession"
                            name="courseOrProfession"
                            type="text"
                            required
                            value={form.courseOrProfession}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="currentRole"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Current Role{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <select
                            id="currentRole"
                            name="currentRole"
                            required
                            value={form.currentRole}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          >
                            <option value="">Select role...</option>
                            <option value="University Student">
                              University Student
                            </option>
                            <option value="Professional">Professional</option>
                            <option value="Entrepreneur">Entrepreneur</option>
                            <option value="Educator / Lecturer">
                              Educator / Lecturer
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="yearOfStudy"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Year of Study (If a student)
                          </label>
                          <select
                            id="yearOfStudy"
                            name="yearOfStudy"
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
                            <option value="Not applicable">
                              Not applicable
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Experience */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 3 – Experience
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="hasExperience"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Do you have experience in entrepreneurship,
                            innovation, or mentoring?{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <select
                            id="hasExperience"
                            name="hasExperience"
                            required
                            value={form.hasExperience}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          >
                            <option value="">Select an option...</option>
                            <option value="Yes">Yes</option>
                            <option value="Some experience">
                              Some experience
                            </option>
                            <option value="No">No</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="experienceDescription"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Please briefly describe any relevant experience
                            (leadership, mentoring, business, volunteering,
                            etc.) <span className="text-primary">*</span>
                          </label>
                          <textarea
                            id="experienceDescription"
                            name="experienceDescription"
                            required
                            rows={4}
                            value={form.experienceDescription}
                            onChange={handleChange}
                            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Motivation */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 4 – Motivation
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="whyMentor"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Why do you want to become a SAGE UK Mentor?{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <textarea
                            id="whyMentor"
                            name="whyMentor"
                            required
                            rows={4}
                            value={form.whyMentor}
                            onChange={handleChange}
                            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="skillsToShare"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            What skills or knowledge would you like to share
                            with student teams?{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <textarea
                            id="skillsToShare"
                            name="skillsToShare"
                            required
                            rows={4}
                            value={form.skillsToShare}
                            onChange={handleChange}
                            className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 5: Availability */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 5 – Availability
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="monthlyHours"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            How many hours per month can you dedicate to
                            mentoring? <span className="text-primary">*</span>
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
                            htmlFor="willingToSupportTeams"
                            className="text-sm font-medium text-foreground block mb-1.5"
                          >
                            Are you willing to support student teams preparing
                            for competitions?{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <select
                            id="willingToSupportTeams"
                            name="willingToSupportTeams"
                            required
                            value={form.willingToSupportTeams}
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

                    {/* Section 6: Final Question */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                        Section 6 – Final Question
                      </h4>
                      <div>
                        <label
                          htmlFor="impactGoal"
                          className="text-sm font-medium text-foreground block mb-1.5"
                        >
                          What impact would you like to make as a SAGE Mentor?{" "}
                          <span className="text-primary">*</span>
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