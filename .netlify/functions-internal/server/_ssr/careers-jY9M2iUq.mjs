import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const roles = [{
  t: "Senior Travel Concierge",
  l: "Full-time",
  d: "Flights branch"
}, {
  t: "Director of Photography",
  l: "Contract",
  d: "Media branch"
}, {
  t: "PR Account Manager",
  l: "Remote · Full-time",
  d: "Media branch"
}, {
  t: "Creative Director",
  l: "Full-time",
  d: "Media branch"
}];
function Careers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-4", children: "Careers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl max-w-4xl text-balance", children: [
        "Build a career that ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent", children: "crosses borders." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-muted-foreground text-lg", children: "We hire generalists with deep taste — people who can hold a conversation with a label CEO at 2am and book a private leg out of Geneva by 3." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-8", children: "Open roles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border border-y border-border", children: roles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 flex flex-col md:flex-row md:items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: r.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            r.d,
            " · ",
            r.l
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 text-accent font-medium", children: [
          "Apply ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }, r.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid md:grid-cols-3 gap-10", children: [{
      t: "Global mobility",
      d: "Annual rotation between Dubai, London and New York for all staff."
    }, {
      t: "Travel credit",
      d: "Personal annual flight credit on partner carriers."
    }, {
      t: "Learning budget",
      d: "Annual stipend for courses, conferences and creative tools."
    }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: p.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: p.d })
    ] }, p.t)) }) })
  ] });
}
export {
  Careers as component
};
