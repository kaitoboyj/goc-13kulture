import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { w as windowView } from "./window-view-Cf17qGqN.mjs";
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
const timeline = [{
  y: "2014",
  t: "Founded",
  d: "As a creative media desk documenting touring musicians and cultural events."
}, {
  y: "2017",
  t: "Expanded",
  d: "Media division grows to cover fashion, art, and entertainment across West Africa."
}, {
  y: "2020",
  t: "PJ Bookings",
  d: "Added private jet and international travel bookings to serve our artist clients."
}, {
  y: "2024",
  t: "13Kulture today",
  d: "A full creative media and cultural platform — rooted in purpose, growing through creativity."
}];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-4", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl max-w-4xl text-balance leading-[1.05]", children: [
        "Where Culture Lives. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent", children: "Where Legacy Begins." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-muted-foreground text-lg leading-relaxed", children: "13Kulture is a creative media and cultural platform dedicated to documenting, amplifying, and shaping the next generation of African talent. Rooted in music, art, fashion, entertainment, and storytelling — we capture the moments that define culture and transform them into timeless visual experiences." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: windowView, alt: "View from airplane window", className: "w-full h-[60vh] object-cover" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl mb-4", children: "Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "To make international travel, hosting and creative work feel like the same craft — done by the same trusted hands." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl mb-4", children: "Standard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "No bookable mediocrity. Every flight is international, every property is vetted, every shoot is led by an award-winning DP." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl mb-10", children: "Timeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-10 max-w-3xl", children: timeline.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid grid-cols-[80px_1fr] gap-6 pb-10 border-b border-border last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl text-accent", children: t.y }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-1", children: t.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: t.d })
        ] })
      ] }, t.y)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition", children: "Work with us" }) })
    ] })
  ] });
}
export {
  About as component
};
