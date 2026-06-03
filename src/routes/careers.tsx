import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — 1 3 Kulture" },
      { name: "description", content: "Join 1 3 Kulture — open roles across our flights, hospitality and media branches in Dubai, London and New York." },
      { property: "og:title", content: "Careers — 1 3 Kulture" },
      { property: "og:description", content: "Open roles across flights, hospitality and media." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const roles = [
  { t: "Senior Travel Concierge", l: "Dubai · Full-time", d: "Flights branch" },
  { t: "Hospitality Partnerships Lead", l: "London · Full-time", d: "Hospitality branch" },
  { t: "Director of Photography", l: "New York · Contract", d: "Media branch" },
  { t: "PR Account Manager", l: "Remote · Full-time", d: "Media branch" },
  { t: "Night-shift Concierge", l: "Dubai · Full-time", d: "Flights branch" },
];

function Careers() {
  return (
    <div>
      <section className="container-x py-24">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Careers</p>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl text-balance">Build a career that <span className="italic text-accent">crosses borders.</span></h1>
        <p className="mt-8 max-w-2xl text-muted-foreground text-lg">We hire generalists with deep taste — people who can hold a conversation with a label CEO at 2am and book a private leg out of Geneva by 3.</p>
      </section>

      <section className="container-x pb-24">
        <h2 className="font-display text-3xl mb-8">Open roles</h2>
        <div className="divide-y divide-border border-y border-border">
          {roles.map((r) => (
            <div key={r.t} className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-xl">{r.t}</h3>
                <p className="text-sm text-muted-foreground">{r.d} · {r.l}</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-medium">
                Apply <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container-x grid md:grid-cols-3 gap-10">
          {[
            { t: "Global mobility", d: "Annual rotation between Dubai, London and New York for all staff." },
            { t: "Travel credit", d: "Personal annual flight credit on partner carriers." },
            { t: "Learning budget", d: "Annual stipend for courses, conferences and creative tools." },
          ].map((p) => (
            <div key={p.t}>
              <h3 className="font-display text-2xl mb-2">{p.t}</h3>
              <p className="text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
