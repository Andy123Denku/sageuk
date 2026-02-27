import Link from "next/link";

export function WorldCupCtaBanner() {
  return (
    <section className="bg-foreground py-14">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-background sm:text-4xl text-balance">
          Are you attending? Click here for info!
        </h2>
        <div className="mt-8">
          <Link
            href="https://docs.google.com/forms/u/2/d/1zI6yD14l4yPVQOxTYwUAi7j9Sll-SNUpzwg9_PlZdXw/edit"
            target="_blank"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-xl"
          >
            2026 World Cup
          </Link>
        </div>
      </div>
    </section>
  );
}
