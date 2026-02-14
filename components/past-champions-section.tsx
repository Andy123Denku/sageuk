import Image from "next/image";

export function PastChampionsSection() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative w-full h-[550px] flex items-center justify-center text-center text-white">
        <Image
          src="/images/fireworks-hero.jpg"
          alt="Celebration fireworks"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SAGE World Cup Winners
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            We are pleased to announce the winners of the 2023 SAGE competition...
          </p>
        </div>
      </section>

      {/* WINNERS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* FIRST PLACE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <a
              href="/files/kids-helping-kids-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition duration-300">
                <Image
                  src="/images/kids-helping-kids.jpg"
                  alt="Kids Helping Kids Report"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </a>

            <div>
              <span className="inline-block mb-4 px-4 py-2 text-sm font-bold uppercase rounded-full text-white bg-gradient-to-r from-yellow-400 to-yellow-600">
                🥇 First Place
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kids Helping Kids Sacramento - USA
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                To view the annual report, click on the image.
                To view their video presentation, click{" "}
                <a
                  href="https://www.youtube.com/watch?v=..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  HERE
                </a>.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
