import { createFileRoute } from "@tanstack/react-router";
import { Plane, Briefcase, Users, Check } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import jetInterior from "@/assets/jet-interior.jpg";
import heroJet from "@/assets/hero-jet.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destLondon from "@/assets/dest-london.jpg";
import destNY from "@/assets/dest-newyork.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destTokyo from "@/assets/dest-tokyo.jpg";
import windowView from "@/assets/window-view.jpg";

export const Route = createFileRoute("/flights")({
  head: () => ({
    meta: [
      { title: "International Flight Booking — AeroLuxe" },
      { name: "description", content: "Private jet charter, business class international flights, and corporate group travel. International routes only — no local flights." },
      { property: "og:title", content: "International Flight Booking — AeroLuxe" },
      { property: "og:description", content: "Premium international flights & private jet charter." },
      { property: "og:url", content: "/flights" },
    ],
    links: [{ rel: "canonical", href: "/flights" }],
  }),
  component: Flights,
});

function Flights() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[460px]">
        <img src={heroJet} alt="Private jet above clouds at sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/90" />
        <div className="absolute inset-0 container-x flex flex-col justify-end pb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Branch 01 · Flights</p>
          <h1 className="font-display text-cream text-5xl md:text-7xl max-w-4xl text-balance">International only. <span className="italic text-accent">Always premium.</span></h1>
        </div>
      </section>

      <section className="container-x py-24 grid lg:grid-cols-3 gap-8">
        {[
          { icon: Plane, t: "Private Jet Charter", d: "On-demand light, mid and heavy jets for 4–16 passengers. Routed in under 4 hours." },
          { icon: Briefcase, t: "Business Class International", d: "Negotiated fares with 30+ flag carriers — Emirates, BA, Lufthansa, Qatar, ANA." },
          { icon: Users, t: "Corporate Group Travel", d: "Roadshow logistics for boards, sports teams, and touring artists." },
        ].map((s) => (
          <div key={s.t} className="p-8 rounded-2xl border border-border bg-card">
            <s.icon className="w-7 h-7 text-accent mb-4" />
            <h3 className="font-display text-2xl mb-2">{s.t}</h3>
            <p className="text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-navy text-cream py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={jetInterior} alt="Private jet cabin interior" loading="lazy" className="rounded-2xl aspect-[4/3] object-cover w-full" />
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">The cabin sets the tone for the trip.</h2>
            <p className="text-cream/80 mb-8 text-lg">From the boarding lounge in Dubai to the last glass of champagne over the Atlantic — we curate every touchpoint.</p>
            <ul className="space-y-3">
              {["IATA-certified operators only","Personal cabin attendant on charters","In-flight catering by Michelin alumni","Ground transfers in S-Class or equivalent","Lounge access included worldwide"].map((b) => (
                <li key={b} className="flex gap-3 items-start"><Check className="w-5 h-5 text-accent shrink-0 mt-1" /> <span>{b}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <h2 className="font-display text-4xl md:text-5xl mb-12 max-w-2xl">Routes our clients fly most.</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { n: "Dubai", img: destDubai }, { n: "London", img: destLondon },
            { n: "New York", img: destNY }, { n: "Paris", img: destParis },
            { n: "Tokyo", img: destTokyo },
          ].map((d) => (
            <div key={d.n} className="relative overflow-hidden rounded-xl group">
              <img src={d.img} alt={d.n} loading="lazy" className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <h3 className="absolute bottom-3 left-4 font-display text-xl text-cream">{d.n}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <img src={windowView} alt="" loading="lazy" className="rounded-2xl w-full aspect-[4/5] object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Request a quote</h2>
            <p className="text-muted-foreground mb-8">Share your route. We respond in under 2 hours during business days.</p>
            <InquiryForm defaultService="Business Class International" />
          </div>
        </div>
      </section>
    </div>
  );
}
