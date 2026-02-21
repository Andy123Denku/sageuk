"use client";

import { useState } from "react";
import { Send, CheckCircle, Building2 } from "lucide-react";

const sponsorshipTiers = ["Silver (£2,500/yr)", "Gold (£7,500/yr)", "Platinum (£15,000+/yr)", "Custom / In-Kind"];
const organisationTypes = [
  "Corporation / Business",
  "Foundation / Charity",
  "Government / Public Sector",
  "Academic Institution",
  "Individual / Private Donor",
  "Other",
];
const contributionTypes = [
  "Financial Sponsorship",
  "In-Kind Contribution",
  "Mentorship / Expertise",
  "Scholarship Funding",
  "Multiple / Combination",
];

export function SponsorshipFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    organisation: "",
    organisationType: "",
    email: "",
    phone: "",
    website: "",
    sponsorshipTier: "",
    contributionType: "",
    motivation: "",
    additionalInfo: "",
    agreeToContact: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prev) => ({ ...prev, [e.target.name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to your backend / CRM / email service
    setSubmitted(true);
  }

  return (
    <section
      id="sponsorship-form"
      className="scroll-mt-20 bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Sponsorship Application
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            Ready to <span className="text-primary">Partner With Us?</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Complete the form below and a member of our partnerships team will
            get back to you within 3 business days to discuss the next steps.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="mb-4 h-14 w-14 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  Application Submitted!
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thank you for your interest in supporting SAGE UK. Our
                  partnerships team will review your application and be in touch
                  within 3 business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      firstName: "",
                      lastName: "",
                      jobTitle: "",
                      organisation: "",
                      organisationType: "",
                      email: "",
                      phone: "",
                      website: "",
                      sponsorshipTier: "",
                      contributionType: "",
                      motivation: "",
                      additionalInfo: "",
                      agreeToContact: false,
                    });
                  }}
                  className="mt-8 rounded-lg border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:shadow-md"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                {/* Section: Personal Details */}
                <div>
                  <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs">1</span>
                    Your Details
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          First Name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="firstName" name="firstName" type="text" required
                          value={form.firstName} onChange={handleChange} placeholder="Jane"
                          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Last Name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="lastName" name="lastName" type="text" required
                          value={form.lastName} onChange={handleChange} placeholder="Doe"
                          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange} placeholder="jane@company.com"
                          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone Number <span className="text-muted-foreground/60 text-xs font-normal">(optional)</span>
                        </label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange} placeholder="+44 7700 000000"
                          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="jobTitle" className="text-sm font-medium text-foreground">
                        Job Title / Role <span className="text-primary">*</span>
                      </label>
                      <input
                        id="jobTitle" name="jobTitle" type="text" required
                        value={form.jobTitle} onChange={handleChange} placeholder="e.g. Head of CSR, CEO, Foundation Director"
                        className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border" />

                {/* Section: Organisation Details */}
                <div>
                  <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs">2</span>
                    Organisation Details
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="organisation" className="text-sm font-medium text-foreground">
                          Organisation Name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="organisation" name="organisation" type="text" required
                          value={form.organisation} onChange={handleChange} placeholder="Acme Corporation"
                          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="website" className="text-sm font-medium text-foreground">
                          Website <span className="text-muted-foreground/60 text-xs font-normal">(optional)</span>
                        </label>
                        <input
                          id="website" name="website" type="url"
                          value={form.website} onChange={handleChange} placeholder="https://www.example.com"
                          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="organisationType" className="text-sm font-medium text-foreground">
                        Organisation Type <span className="text-primary">*</span>
                      </label>
                      <select
                        id="organisationType" name="organisationType" required
                        value={form.organisationType} onChange={handleChange}
                        className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="" disabled>Select organisation type…</option>
                        {organisationTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border" />

                {/* Section: Sponsorship Preferences */}
                <div>
                  <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs">3</span>
                    Sponsorship Preferences
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="sponsorshipTier" className="text-sm font-medium text-foreground">
                          Preferred Tier <span className="text-primary">*</span>
                        </label>
                        <select
                          id="sponsorshipTier" name="sponsorshipTier" required
                          value={form.sponsorshipTier} onChange={handleChange}
                          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="" disabled>Select a tier…</option>
                          {sponsorshipTiers.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contributionType" className="text-sm font-medium text-foreground">
                          Contribution Type <span className="text-primary">*</span>
                        </label>
                        <select
                          id="contributionType" name="contributionType" required
                          value={form.contributionType} onChange={handleChange}
                          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="" disabled>Select contribution type…</option>
                          {contributionTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="motivation" className="text-sm font-medium text-foreground">
                        Why do you want to support SAGE UK? <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="motivation" name="motivation" required rows={4}
                        value={form.motivation} onChange={handleChange}
                        placeholder="Tell us about your organisation's goals and why youth entrepreneurship matters to you…"
                        className="resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="additionalInfo" className="text-sm font-medium text-foreground">
                        Additional Information{" "}
                        <span className="text-muted-foreground/60 text-xs font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="additionalInfo" name="additionalInfo" rows={3}
                        value={form.additionalInfo} onChange={handleChange}
                        placeholder="Any specific programs, events, or regions you're interested in supporting…"
                        className="resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border" />

                {/* Consent & Submit */}
                <div className="flex flex-col gap-5">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreeToContact"
                      required
                      checked={form.agreeToContact}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      I agree to be contacted by SAGE UK regarding this sponsorship application
                      and understand that my information will be handled in accordance with
                      SAGE UK&apos;s privacy policy. <span className="text-primary">*</span>
                    </span>
                  </label>

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                      <span className="text-primary">*</span> Required fields
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                      Submit Application
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}