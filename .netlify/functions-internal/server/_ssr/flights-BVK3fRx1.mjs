import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { I as InquiryForm } from "./InquiryForm-6QGoODuH.mjs";
import { h as heroJet, d as destDubai, a as destLondon, b as destNY, c as destParis, e as destTokyo } from "./dest-tokyo-B7_7X3Om.mjs";
import { w as windowView } from "./window-view-Cf17qGqN.mjs";
import { P as Plane, B as Briefcase, U as Users, d as Check } from "../_libs/lucide-react.mjs";
const jetInterior = "/assets/jet-interior-Bgg1JYL3.jpg";
function Flights() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[60vh] min-h-[460px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroJet, alt: "Private jet above clouds at sunset", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 container-x flex flex-col justify-end pb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-4", children: "Branch 01 · Flights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-cream text-5xl md:text-7xl max-w-4xl text-balance", children: [
          "International only. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent", children: "Always premium." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-24 grid lg:grid-cols-3 gap-8", children: [{
      icon: Plane,
      t: "Private Jet Charter",
      d: "On-demand light, mid and heavy jets for 4–16 passengers. Routed in under 4 hours."
    }, {
      icon: Briefcase,
      t: "Business Class International",
      d: "Negotiated fares with 30+ flag carriers — Emirates, BA, Lufthansa, Qatar, ANA."
    }, {
      icon: Users,
      t: "Corporate Group Travel",
      d: "Roadshow logistics for boards, sports teams, and touring artists."
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-2xl border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-7 h-7 text-accent mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: s.d })
    ] }, s.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy text-cream py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: jetInterior, alt: "Private jet cabin interior", loading: "lazy", className: "rounded-2xl aspect-[4/3] object-cover w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-6", children: "The cabin sets the tone for the trip." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80 mb-8 text-lg", children: "From the boarding lounge in Dubai to the last glass of champagne over the Atlantic — we curate every touchpoint." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: ["IATA-certified operators only", "Personal cabin attendant on charters", "In-flight catering by Michelin alumni", "Ground transfers in S-Class or equivalent", "Lounge access included worldwide"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-accent shrink-0 mt-1" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, b)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-12 max-w-2xl", children: "Routes our clients fly most." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: [{
        n: "Dubai",
        img: destDubai
      }, {
        n: "London",
        img: destLondon
      }, {
        n: "New York",
        img: destNY
      }, {
        n: "Paris",
        img: destParis
      }, {
        n: "Tokyo",
        img: destTokyo
      }].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.n, loading: "lazy", className: "w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "absolute bottom-3 left-4 font-display text-xl text-cream", children: d.n })
      ] }, d.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: windowView, alt: "", loading: "lazy", className: "rounded-2xl w-full aspect-[4/5] object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-4", children: "Request a quote" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Share your route. We respond in under 2 hours during business days." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, { defaultService: "Business Class International" })
      ] })
    ] }) })
  ] });
}
export {
  Flights as component
};
