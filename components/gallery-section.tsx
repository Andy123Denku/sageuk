import Image from "next/image";

const images = [
  {
    src: "/images/gallery/1.jpeg",
    alt: "SAGE World Cup participants presenting",
  },
  {
    src: "/images/gallery/2.jpeg",
    alt: "Students working on their business projects",
  },
  {
    src: "/images/gallery/3.jpeg",
    alt: "Award ceremony at SAGE competition",
  },
  {
    src: "/images/gallery/4.jpeg",
    alt: "Mentors guiding student teams",
  },
  {
    src: "/images/gallery/5.jpeg",
    alt: "SAGE World Cup venue",
  },
  {
    src: "/images/gallery/6.jpeg",
    alt: "Team collaboration and innovation",
  },
];

export function GallerySection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Gallery
          </p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
            Moments from <span className="text-primary">SAGE Events</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}