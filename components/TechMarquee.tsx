const tech = [
  "KUBERNETES",
  "DOCKER",
  "AWS CLOUD",
  "REACT",
  "NODE.JS",
  "TYPESCRIPT",
  "TAILWIND",
  "SUPABASE",
  "POSTGRESQL",
  "GITHUB",
  "VERCEL",
];

export default function TechMarquee() {
  return (
    <section className="overflow-hidden border-t border-b border-zinc-800 bg-zinc-950 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Stack & Tools
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Engineered for
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Performance.
            </h2>
          </div>
        </div>

        <div className="flex min-w-full animate-marquee gap-8 whitespace-nowrap text-sm uppercase tracking-[0.25em] text-zinc-300">
          {[...tech, ...tech].map((item, index) => (
            <span key={`${item}-${index}`} className="inline-block">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
