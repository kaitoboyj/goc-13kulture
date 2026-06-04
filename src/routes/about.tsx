import { createFileRoute, Link } from "@tanstack/react-router";
import windowView from "@/assets/window-view.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — 13Kulture" },
      { name: "description", content: "13Kulture is a creative media and cultural platform dedicated to documenting, amplifying, and shaping the next generation of African talent." },
      { property: "og:title", content: "About — 13Kulture" },
      { property: "og:description", content: "The story behind 13Kulture — a creative media and cultural platform rooted in purpose." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { y: "2014", t: "Founded", d: "As a creative media desk documenting touring musicians and cultural events." },
  { y: "2017", t: "Expanded", d: "Media division grows to cover fashion, art, and entertainment across West Africa." },
  { y: "2020", t: "PJ Bookings", d: "Added private jet and international travel bookings to serve our artist clients." },
  { y: "2024", t: "13Kulture today", d: "A full creative media and cultural platform — rooted in purpose, growing through creativity." },
];

function About() {
  return (
    <div>
      <section className="container-x py-24 md:py-32">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">About</p>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl text-balance leading-[1.05]">
          Where Culture Lives. <span className="italic text-accent">Where Legacy Begins.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground text-lg leading-relaxed">
          13Kulture is a creative media and cultural platform dedicated to documenting, amplifying, and shaping the next generation of African talent. Rooted in music, art, fashion, entertainment, and storytelling — we capture the moments that define culture and transform them into timeless visual experiences.
        </p>
      </section>

      <section className="relative">
        <img src={windowView} alt="View from airplane window" className="w-full h-[60vh] object-cover" />
      </section>

      <section className="container-x py-24">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Mission</h2>
            <p className="text-muted-foreground text-lg">To make international travel, hosting and creative work feel like the same craft — done by the same trusted hands.</p>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Standard</h2>
            <p className="text-muted-foreground text-lg">No bookable mediocrity. Every flight is international, every property is vetted, every shoot is led by an award-winning DP.</p>
          </div>
        </div>

        <h2 className="font-display text-4xl mb-10">Timeline</h2>
        <ol className="space-y-10 max-w-3xl">
          {timeline.map((t) => (
            <li key={t.y} className="grid grid-cols-[80px_1fr] gap-6 pb-10 border-b border-border last:border-0">
              <span className="font-display text-3xl text-accent">{t.y}</span>
              <div>
                <h3 className="font-display text-2xl mb-1">{t.t}</h3>
                <p className="text-muted-foreground">{t.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 text-center">
          <Link to="/contact" className="inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition">
            Work with us
          </Link>
        </div>
      </section>
    </div>
  );
}
