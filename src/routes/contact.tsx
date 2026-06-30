import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 1 3 Kulture" },
      { name: "description", content: "Reach 1 3 Kulture's concierge desk in Lagos, Nigeria. We respond within 2 business hours." },
      { property: "og:title", content: "Contact — 1 3 Kulture" },
      { property: "og:description", content: "One office, one concierge desk. Always on." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const offices = [
  { city: "Lagos", addr: "Lagos, Nigeria", tel: "+234 916 960 6650" },
];

function Contact() {
  return (
    <div>
      <section className="container-x py-24">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Contact</p>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl text-balance">Tell us where you want to be.</h1>
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl">Our concierge desk responds within 2 business hours, 24/7.</p>
      </section>

      <section className="container-x pb-24 grid lg:grid-cols-1 gap-6">
        {offices.map((o) => (
          <div key={o.city} className="p-8 rounded-2xl border border-border bg-card">
            <MapPin className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-display text-2xl mb-2">{o.city}</h3>
            <p className="text-muted-foreground text-sm mb-4">{o.addr}</p>
            <p className="text-sm flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> {o.tel}</p>
          </div>
        ))}
      </section>

      <section className="bg-navy text-cream py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Or write directly.</h2>
            <p className="text-cream/70 mb-8">Use the form, or reach the relevant desk below.</p>
            <ul className="space-y-4 text-cream/90">
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-accent" /> ohagwugabriel@gmail.com</li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-accent" /> +234 916 960 6650</li>
            </ul>
          </div>
          <div className="bg-background text-foreground p-8 rounded-2xl">
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
