import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ContactHero } from "@/components/contact-hero";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us | SAGE UK",
  description:
    "Get in touch with SAGE UK. Whether you're a student, school, sponsor, or partner — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}