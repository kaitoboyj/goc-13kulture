import { createFileRoute } from "@tanstack/react-router";
import { Hotel, Sparkles, CalendarHeart } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import hospitality from "@/assets/hospitality.jpg";
import hotelSuite from "@/assets/hotel-suite.jpg";

export const Route = createFileRoute("/hospitality")({
  head: () => ({
    meta: [
      { title: "Hospitality & Hosting — AeroLuxe" },
      { name: "description", content: "Luxury hospitality, concierge stays, and bespoke event hosting in Dubai, London, New York and beyond." },
      { property: "og:title", content: "Hospitality & Hosting — AeroLuxe" },
      { property: "og:description", content: "Curated stays, concierge, and event hosting worldwide." },
      { property: "og:url", content: "/hospitality" },
    ],
    links: [{ rel: "canonical", href: "/hospitality" }],
  }),
  component: Hospitality,
});

function Hospitality() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[460px]">
        <img src={hospitality} alt="Luxury resort infinity pool at sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy/85" />
        <div className="absolute inset-0 container-x flex flex-col justify-end pb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Branch 02 · Hospitality</p>
          <h1 className="font-display text-cream text-5xl md:text-7xl max-w-4xl text-balance">Where you stay <span className="italic text-accent">becomes the trip.</span></h1>
        </div>
      </section>

      <section className="container-x py-24 grid lg:grid-cols-3 gap-8">
        {[
          { icon: Hotel, t: "Premium Stays", d: "Suites at the Burj Al Arab, Claridge's, The Mark, Aman Tokyo. Pre-arrival preferences honored." },
          { icon: Sparkles, t: "Concierge Services", d: "Restaurant reservations, private tours, security details, personal shoppers." },
          { icon: CalendarHeart, t: "Event Hosting", d: "Album release dinners, fashion previews, intimate weddings — venue to RSVP." },
        ].map((s) => (
          <div key={s.t} className="p-8 rounded-2xl border border-border bg-card">
            <s.icon className="w-7 h-7 text-accent mb-4" />
            <h3 className="font-display text-2xl mb-2">{s.t}</h3>
            <p className="text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-cream py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Featured property</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Skyline suites that earn their view.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our hospitality desk maintains direct GM-level relationships at 200+ properties worldwide. The result: upgrades, late check-outs, and the kind of welcome amenity that actually matters.
            </p>
          </div>
          <img src={hotelSuite} alt="Luxury hotel suite with city skyline view" loading="lazy" className="rounded-2xl aspect-[4/3] object-cover w-full" />
        </div>
      </section>

      <section className="container-x py-24">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Plan a stay</h2>
          <p className="text-muted-foreground">Tell us the city, the dates, and the occasion.</p>
        </div>
        <InquiryForm defaultService="Hospitality & Stays" />
      </section>
    </div>
  );
}
