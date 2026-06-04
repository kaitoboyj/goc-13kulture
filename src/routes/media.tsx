import { createFileRoute } from "@tanstack/react-router";
import { Video, Image as ImageIcon, Megaphone, Music2 } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import mediaShoot from "@/assets/media-shoot.jpg";
import editing from "@/assets/editing.jpg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media, PR & Creative — 1 3 Kulture" },
      { name: "description", content: "Corporate videography, photo editing, brand PR and artist management for emerging artists and ambitious small brands." },
      { property: "og:title", content: "Media, PR & Creative — 1 3 Kulture" },
      { property: "og:description", content: "Videography, photo editing and PR for artists and brands." },
      { property: "og:url", content: "/media" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: Media,
});

const work = [
  { t: "Capsule launch · MARQUE", k: "Fashion", img: editing },
  { t: "Tour film · AYO KAYO", k: "Music", img: mediaShoot },
  { t: "Hotel campaign · The Pavilion", k: "Hospitality", img: "/__placeholder" },
];

function Media() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[460px]">
        <img src={mediaShoot} alt="Cinema camera on a film set" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy/95" />
        <div className="absolute inset-0 container-x flex flex-col justify-end pb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Branch 03 · Media & PR</p>
          <h1 className="font-display text-cream text-5xl md:text-7xl max-w-4xl text-balance">Make work that <span className="italic text-accent">travels further</span> than you do.</h1>
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Video, t: "Corporate Videography", d: "Brand films, campaign videos, and event coverage shot in 6K." },
          { icon: ImageIcon, t: "Photo Editing", d: "Retouching, color grading, and editorial post for tier-one publications." },
          { icon: Megaphone, t: "Brand PR", d: "Press strategy, media relations, and launch campaigns." },
          { icon: Music2, t: "Artist Services", d: "Roll-out plans, EPKs and visual identity for emerging musicians." },
        ].map((s) => (
          <div key={s.t} className="p-6 rounded-2xl border border-border bg-card">
            <s.icon className="w-6 h-6 text-accent mb-3" />
            <h3 className="font-display text-xl mb-2">{s.t}</h3>
            <p className="text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-navy text-cream py-24">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <h2 className="font-display text-4xl md:text-5xl">Recent work</h2>
            <p className="text-cream/60 max-w-sm">Selected projects across music, fashion and cultural events.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="relative overflow-hidden rounded-2xl group">
              <img src={editing} alt="Photo editing workstation" loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-cream">
                <p className="text-xs uppercase tracking-widest text-accent">Fashion · Photo Editing</p>
                <p className="font-display text-2xl">Capsule launch · MARQUE</p>
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-2xl group">
              <img src={mediaShoot} alt="Cinema camera on set" loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-cream">
                <p className="text-xs uppercase tracking-widest text-accent">Music · Tour Film</p>
                <p className="font-display text-2xl">AYO KAYO — On Tour</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Start a project</h2>
          <p className="text-muted-foreground">Tell us about the brand, the artist, or the campaign.</p>
        </div>
        <InquiryForm defaultService="Media, PR & Creative" />
      </section>
    </div>
  );
}
