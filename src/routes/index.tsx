import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plane, Hotel, Camera, Globe2, Award, Clock } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import heroJet from "@/assets/hero-jet.jpg";
import windowView from "@/assets/window-view.jpg";
import hospitality from "@/assets/hospitality.jpg";
import mediaShoot from "@/assets/media-shoot.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destLondon from "@/assets/dest-london.jpg";
import destNY from "@/assets/dest-newyork.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destTokyo from "@/assets/dest-tokyo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AeroLuxe International — Fly Beyond Borders" },
      { name: "description", content: "Premium international private and business class flights, luxury hospitality, and creative media services. Three branches, one standard: extraordinary." },
      { property: "og:title", content: "AeroLuxe International — Fly Beyond Borders" },
      { property: "og:description", content: "International flights, hospitality and creative media for the world's most discerning clients." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: Plane,
    title: "International Flights",
    desc: "Premium and business class international itineraries, plus on-demand private jet charter.",
    href: "/flights",
    img: heroJet,
  },
  {
    icon: Hotel,
    title: "Hospitality & Hosting",
    desc: "Curated luxury stays, concierge services and bespoke event hosting in the world's great cities.",
    href: "/hospitality",
    img: hospitality,
  },
  {
    icon: Camera,
    title: "Media, PR & Creative",
    desc: "Corporate videography, photo editing and brand PR for artists and ambitious small brands.",
    href: "/media",
    img: mediaShoot,
  },
] as const;

const destinations = [
  { name: "Dubai", img: destDubai, tag: "UAE" },
  { name: "London", img: destLondon, tag: "United Kingdom" },
  { name: "New York", img: destNY, tag: "USA" },
  { name: "Paris", img: destParis, tag: "France" },
  { name: "Tokyo", img: destTokyo, tag: "Japan" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          poster={heroJet}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/90" />
        <div className="absolute inset-0 container-x flex flex-col justify-end pb-20 md:pb-28">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-6 animate-fade-in">International · Since 2014</p>
          <h1 className="font-display text-cream text-5xl md:text-7xl lg:text-8xl font-semibold max-w-5xl text-balance leading-[1.02]">
            Fly beyond borders.<br />
            <span className="text-accent italic font-normal">Stay</span> beyond ordinary.
          </h1>
          <p className="mt-6 max-w-xl text-cream/80 text-lg">
            Three branches under one roof: international flight booking, hospitality, and creative media for artists and brands worth remembering.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/flights" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-accent-foreground font-medium hover:bg-cream transition">
              Book a flight <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition">
              Speak with concierge
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-center md:text-left">
          {[
            { k: "60+", v: "Countries served" },
            { k: "12k", v: "International itineraries" },
            { k: "98%", v: "Client retention" },
            { k: "24/7", v: "Concierge desk" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl md:text-4xl text-foreground">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Our branches</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl text-balance">
              Three disciplines. <span className="italic font-normal">One standard.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Each branch is led by specialists. Each engagement is treated like the only one. We do not do local flights — only international.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent transition"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6">
                <s.icon className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-navy text-cream py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Featured cities</p>
              <h2 className="font-display text-4xl md:text-5xl max-w-2xl">Where our clients fly this season.</h2>
            </div>
            <Link to="/flights" className="text-accent inline-flex items-center gap-2 text-sm">View all destinations <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {destinations.map((d, i) => (
              <div key={d.name} className={`relative overflow-hidden rounded-xl group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-widest text-accent">{d.tag}</p>
                  <h3 className="font-display text-2xl">{d.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT FEATURE */}
      <section className="container-x py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={windowView} alt="View from airplane window at sunset" loading="lazy" className="rounded-2xl w-full aspect-[4/5] object-cover" />
          <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl max-w-[220px] hidden md:block">
            <Award className="w-6 h-6 mb-2" />
            <p className="font-display text-lg leading-tight">Recognized concierge of the year, 2024.</p>
          </div>
        </div>
        <div>
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Why AeroLuxe</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-balance">A travel house that thinks like a creative studio.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We started as a private flights desk for touring artists. Today we book international travel, host stays in three continents, and produce the campaigns those artists need when they land.
          </p>
          <div className="space-y-5">
            {[
              { icon: Globe2, t: "International only", d: "We don't book local flights — every itinerary crosses a border." },
              { icon: Clock, t: "24/7 live concierge", d: "Real humans in Dubai, London and New York." },
              { icon: Award, t: "Vetted partners", d: "Only IATA carriers, 4★+ properties, and award-winning crews." },
            ].map((f) => (
              <div key={f.t} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">{f.t}</h4>
                  <p className="text-sm text-muted-foreground">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="rounded-3xl bg-foreground text-background p-12 md:p-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto text-balance">
            Your next chapter starts at the boarding gate.
          </h2>
          <p className="mt-6 text-background/70 max-w-xl mx-auto">
            Tell us where you want to be — we will handle the flight, the stay, and the story.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-10 h-12 px-8 rounded-full bg-accent text-accent-foreground font-medium hover:bg-cream transition">
            Start your inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
