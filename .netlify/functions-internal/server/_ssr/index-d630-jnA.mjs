import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as heroJet, d as destDubai, a as destLondon, b as destNY, c as destParis, e as destTokyo } from "./dest-tokyo-B7_7X3Om.mjs";
import { w as windowView } from "./window-view-Cf17qGqN.mjs";
import { m as mediaShoot } from "./media-shoot-Dbv7aHW9.mjs";
import { A as ArrowRight, P as Plane, h as Camera, i as Award, E as Earth, j as Clock } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const services = [{
  icon: Plane,
  title: "International Flights & PJ Bookings",
  desc: "Premium and business class international itineraries, plus on-demand private jet charter and travel bookings.",
  href: "/flights",
  img: heroJet
}, {
  icon: Camera,
  title: "Media, PR & Creative",
  desc: "Photography, videography, creative direction, and brand PR for artists, events, and cultural movements.",
  href: "/media",
  img: mediaShoot
}];
const destinations = [{
  name: "Dubai",
  img: destDubai,
  tag: "UAE"
}, {
  name: "London",
  img: destLondon,
  tag: "United Kingdom"
}, {
  name: "New York",
  img: destNY,
  tag: "USA"
}, {
  name: "Paris",
  img: destParis,
  tag: "France"
}, {
  name: "Tokyo",
  img: destTokyo,
  tag: "Japan"
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[92vh] min-h-[640px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "absolute inset-0 w-full h-full object-cover", src: heroJet, alt: "Private jet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 container-x flex flex-col justify-end pb-20 md:pb-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-6 animate-fade-in", children: "13KULTURE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-cream text-5xl md:text-7xl lg:text-8xl font-semibold max-w-5xl text-balance leading-[1.02]", children: [
          "Documenting Culture.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent italic font-normal", children: "Creating" }),
          " Legacy."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-cream/80 text-lg", children: "Premium photography, videography, and creative media coverage for artists, brands, events, and cultural movements." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-accent-foreground font-medium hover:bg-card transition", children: [
            "Book a Session ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/media", className: "inline-flex items-center gap-2 h-12 px-6 rounded-full border border-cream/40 text-cream hover:bg-card/10 transition", children: "Explore our work" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-center md:text-left", children: [{
      k: "60+",
      v: "Countries served"
    }, {
      k: "12k",
      v: "International itineraries"
    }, {
      k: "98%",
      v: "Client retention"
    }, {
      k: "24/7",
      v: "Concierge desk"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-4xl text-foreground", children: s.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: s.v })
    ] }, s.v)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-3", children: "Our branches" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl max-w-2xl text-balance", children: [
            "Two disciplines. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-normal", children: "One standard." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md", children: "Each branch is led by specialists. Each engagement is treated like the only one." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.href, className: "group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition duration-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-6 h-6 text-accent mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent", children: [
            "Explore ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy text-cream py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12 gap-6 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-3", children: "Featured cities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl max-w-2xl", children: "Where our clients fly this season." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/flights", className: "text-accent inline-flex items-center gap-2 text-sm", children: [
          "View all destinations ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: destinations.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative overflow-hidden rounded-xl group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, loading: "lazy", className: "w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition duration-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent", children: d.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: d.name })
        ] })
      ] }, d.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: windowView, alt: "View from airplane window at sunset", loading: "lazy", className: "rounded-2xl w-full aspect-[4/5] object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl max-w-[220px] hidden md:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-6 h-6 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg leading-tight", children: "Recognized concierge of the year, 2024." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-3", children: "Why 13Kulture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-6 text-balance", children: "A cultural platform built on purpose and creativity." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-8", children: "We started documenting culture for touring artists. Today we cover international events, produce campaigns, book PJ travel, and help artists and brands tell stories that last." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: [{
          icon: Earth,
          t: "International only",
          d: "We don't book local flights — every itinerary crosses a border."
        }, {
          icon: Clock,
          t: "24/7 live concierge",
          d: "Real humans in Dubai, London and New York."
        }, {
          icon: Award,
          t: "Vetted partners",
          d: "Only IATA carriers, 4★+ properties, and award-winning crews."
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-5 h-5 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: f.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: f.d })
          ] })
        ] }, f.t)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-foreground text-background p-12 md:p-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl max-w-3xl mx-auto text-balance", children: "Your next chapter starts at the boarding gate." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-background/70 max-w-xl mx-auto", children: "Tell us where you want to be — we will handle the flight, the stay, and the story." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 mt-10 h-12 px-8 rounded-full bg-accent text-accent-foreground font-medium hover:bg-card transition", children: [
        "Start your inquiry ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
