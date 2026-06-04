import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { I as InquiryForm } from "./InquiryForm-6QGoODuH.mjs";
import { e as MapPin, f as Phone, g as Mail } from "../_libs/lucide-react.mjs";
const offices = [{
  city: "Dubai",
  addr: "Gate Village 4, DIFC",
  tel: "+234 916 960 6650"
}, {
  city: "London",
  addr: "12 Berkeley Square, Mayfair",
  tel: "+234 916 960 6650"
}, {
  city: "New York",
  addr: "100 Hudson St, Tribeca",
  tel: "+234 916 960 6650"
}];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-4", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl max-w-4xl text-balance", children: "Tell us where you want to be." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-lg max-w-2xl", children: "Our concierge desk responds within 2 business hours, 24/7." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x pb-24 grid lg:grid-cols-3 gap-6", children: offices.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-2xl border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-6 h-6 text-accent mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: o.city }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-4", children: o.addr }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-accent" }),
        " ",
        o.tel
      ] })
    ] }, o.city)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy text-cream py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-6", children: "Or write directly." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/70 mb-8", children: "Use the form, or reach the relevant desk below." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-cream/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-accent" }),
            " ohagwugabriel@gmail.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-accent" }),
            " +234 916 960 6650"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background text-foreground p-8 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, {}) })
    ] }) })
  ] });
}
export {
  Contact as component
};
