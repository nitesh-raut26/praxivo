const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "Spring Boot",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "XGBoost",
  "PostGIS",
  "React Native",
  "Tailwind CSS",
  "Docker",
  "Vercel",
];

export function TechMarquee() {
  return (
    <div className="border-y border-line bg-canvas-soft py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-subtle">
          The stack we build production software on
        </p>
      </div>
      <div className="mask-fade-x relative mt-6 flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3">
          {[...stack, ...stack].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-muted shadow-soft"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
