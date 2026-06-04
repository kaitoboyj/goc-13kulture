import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { I as InquiryForm } from "./InquiryForm-6QGoODuH.mjs";
import { m as mediaShoot } from "./media-shoot-Dbv7aHW9.mjs";
import { V as Video, a as Image, b as Megaphone, c as Music2 } from "../_libs/lucide-react.mjs";
const editing = "/assets/editing-BhL_EFte.jpg";
function Media() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[60vh] min-h-[460px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mediaShoot, alt: "Cinema camera on a film set", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/50 to-navy/95" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 container-x flex flex-col justify-end pb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent uppercase tracking-[0.3em] text-xs mb-4", children: "Branch 03 · Media & PR" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-cream text-5xl md:text-7xl max-w-4xl text-balance", children: [
          "Make work that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent", children: "travels further" }),
          " than you do."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
      icon: Video,
      t: "Corporate Videography",
      d: "Brand films, campaign videos, and event coverage shot in 6K."
    }, {
      icon: Image,
      t: "Photo Editing",
      d: "Retouching, color grading, and editorial post for tier-one publications."
    }, {
      icon: Megaphone,
      t: "Brand PR",
      d: "Press strategy, media relations, and launch campaigns."
    }, {
      icon: Music2,
      t: "Artist Services",
      d: "Roll-out plans, EPKs and visual identity for emerging musicians."
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-6 h-6 text-accent mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.d })
    ] }, s.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-navy text-cream py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-12 flex-wrap gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Recent work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/60 max-w-sm", children: "Selected projects across music, fashion and cultural events." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative overflow-hidden rounded-2xl group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: editing, alt: "Photo editing workstation", loading: "lazy", className: "w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "absolute bottom-4 left-4 right-4 text-cream", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent", children: "Fashion · Photo Editing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "Capsule launch · MARQUE" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative overflow-hidden rounded-2xl group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mediaShoot, alt: "Cinema camera on set", loading: "lazy", className: "w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "absolute bottom-4 left-4 right-4 text-cream", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent", children: "Music · Tour Film" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "AYO KAYO — On Tour" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-4", children: "Start a project" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Tell us about the brand, the artist, or the campaign." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, { defaultService: "Media, PR & Creative" })
    ] })
  ] });
}
export {
  Media as component
};
