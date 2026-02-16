"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import Link from "next/link";

export function UKNetworkSection() {
  const [activeTab, setActiveTab] = useState<"map" | "satellite">("map");

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
          A UK Network of <span className="text-primary">CHANGE</span>
        </h2>

        <div className="mt-14 flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left text */}
          <div className="flex flex-1 flex-col justify-center gap-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our programs span over 30 countries across 5 continents,
              connecting teens, educators, and business leaders to foster
              collaboration and innovation.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              SAGE alumni are driving positive change worldwide in
              sustainability, technology, education, and beyond.
            </p>
          </div>

          {/* Map card */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              {/* Tabs */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveTab("map")}
                    className={`pb-1 text-sm font-medium transition-colors ${
                      activeTab === "map"
                        ? "border-b-2 border-primary text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Map
                  </button>
                  <button
                    onClick={() => setActiveTab("satellite")}
                    className={`pb-1 text-sm font-medium transition-colors ${
                      activeTab === "satellite"
                        ? "border-b-2 border-primary text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Satellite
                  </button>
                </div>
                <button
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Fullscreen map"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              {/* Map embed */}
              <div className="relative aspect-[4/3] w-full">
                <iframe
                  title="SAGE UK Network Map"
                  src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49894836.49369379!2d10!3d30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e${
                    activeTab === "satellite" ? "1" : "0"
                  }!3m2!1sen!2sus!4v1700000000000`}
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* List View button */}
        <div className="mt-10 text-center">
          <Link
            href="#"
            className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            List View
          </Link>
        </div>
      </div>
    </section>
  );
}
