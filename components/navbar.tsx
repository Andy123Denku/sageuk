"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const competitionLinks = [
  { label: "Competition Overview", href: "/competition" },
  { label: "National Competition", href: "/competition/usa" },
  { label: "World Cup Competition", href: "/competition/world-cup" },
  { label: "Resources", href: "#" },
];

const aboutLinks = [
  { label: "Our Mission", href: "/about#mission" },
  { label: "Our Team", href: "/about#team" },
  { label: "Sponsors", href: "/about#sponsors" },
];

function DropdownMenu({
  label,
  links,
  isOpen,
  onToggle,
}: {
  label: string;
  links: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-muted-foreground hover:text-black transition-colors text-sm font-medium"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-card border border-border shadow-xl py-2 z-50">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 bg-white right-0 z-50 transition-all duration-300`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ✅ Logo Image */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logp.jpg"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu
              label="Competition"
              links={competitionLinks}
              isOpen={openDropdown === "competition"}
              onToggle={() =>
                setOpenDropdown(
                  openDropdown === "competition" ? null : "competition"
                )
              }
            />
            <DropdownMenu
              label="About Us"
              links={aboutLinks}
              isOpen={openDropdown === "about"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "about" ? null : "about")
              }
            />
            {/* <Link
              href="/past-champions"
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors"
            >
              Past Champions
            </Link> */}
            <Link
              href="/programs"
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors"
            >
              Programs
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#"
              className="rounded-lg border border-primary/40 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              Contribute
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-border">
            <div className="flex flex-col gap-1">
              <p className="px-3 pt-3 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Competition
              </p>
              {competitionLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <p className="px-3 pt-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                About Us
              </p>
              {aboutLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#"
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Past Champions
              </Link>
              <Link
                href="#"
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Us
              </Link>
              <div className="flex gap-3 px-3 pt-4">
                <Link
                  href="#"
                  className="rounded-lg border border-primary/40 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                >
                  Contribute
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
