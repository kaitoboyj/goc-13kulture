import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { I as InquiryForm } from "./InquiryForm-6QGoODuH.mjs";
import { H as Hotel, S as Sparkles, C as CalendarHeart } from "../_libs/lucide-react.mjs";
const hospitality = "/assets/hospitality-CYDfxwCf.jpg";
const hotelSuite = "/assets/hotel-suite-7EN5Jtye.jpg";
function Hospitality() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[60vh] min-h-[460px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hospitality, alt: "Luxury resort infinity pool at sunset", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/30 to-navy/85" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 container-x flex flex-col justify-end pb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-4", children: "Branch 02 · Hospitality" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-cream text-5xl md:text-7xl max-w-4xl text-balance", children: [
          "Where you stay ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent", children: "becomes the trip." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-24 grid lg:grid-cols-3 gap-8", children: [{
      icon: Hotel,
      t: "Premium Stays",
      d: "Suites at the Burj Al Arab, Claridge's, The Mark, Aman Tokyo. Pre-arrival preferences honored."
    }, {
      icon: Sparkles,
      t: "Concierge Services",
      d: "Restaurant reservations, private tours, security details, personal shoppers."
    }, {
      icon: CalendarHeart,
      t: "Event Hosting",
      d: "Album release dinners, fashion previews, intimate weddings — venue to RSVP."
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-2xl border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-7 h-7 text-accent mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: s.d })
    ] }, s.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-3", children: "Featured property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-6", children: "Skyline suites that earn their view." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Our hospitality desk maintains direct GM-level relationships at 200+ properties worldwide. The result: upgrades, late check-outs, and the kind of welcome amenity that actually matters." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hotelSuite, alt: "Luxury hotel suite with city skyline view", loading: "lazy", className: "rounded-2xl aspect-[4/3] object-cover w-full" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-4", children: "Plan a stay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Tell us the city, the dates, and the occasion." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, { defaultService: "Hospitality & Stays" })
    ] })
  ] });
}
export {
  Hospitality as component
};
