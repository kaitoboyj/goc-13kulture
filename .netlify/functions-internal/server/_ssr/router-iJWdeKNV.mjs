import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { X, M as Menu, I as Instagram, L as Linkedin, T as Twitter } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-BaQZaWGX.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const logoAsset = "/assets/logo-9hRo0YEi.jpeg";
const WHATSAPP_URL = "https://wa.me/2349169606650?text=" + encodeURIComponent("Hello 1 3 Kulture, I'd like to book a consultation.");
const nav = [
  { to: "/", label: "Home" },
  { to: "/flights", label: "Flights" },
  { to: "/media", label: "Media & PR" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset, alt: "1 3 Kulture logo", className: "w-9 h-9 rounded-full object-cover ring-1 ring-accent/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold tracking-tight text-foreground", children: [
          "1 3 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Kulture" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-7", children: nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          activeProps: { className: "text-accent" },
          activeOptions: { exact: n.to === "/" },
          className: "text-sm text-foreground/80 hover:text-accent transition-colors",
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: WHATSAPP_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hidden lg:inline-flex h-10 items-center justify-center rounded-full bg-accent text-accent-foreground px-5 text-sm font-medium hover:opacity-90 transition",
          children: "Book a consultation"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen(!open),
          className: "lg:hidden p-2 text-foreground",
          "aria-label": "Toggle menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-4 flex flex-col gap-3", children: [
      nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          onClick: () => setOpen(false),
          className: "text-base text-foreground/90 py-2",
          children: n.label
        },
        n.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: WHATSAPP_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-2 inline-flex h-11 items-center justify-center rounded-full bg-accent text-accent-foreground px-5 text-sm font-medium",
          children: "Book a consultation"
        }
      )
    ] }) })
  ] });
}
const url = "/__l5e/assets-v1/edc0c623-f978-42c0-9877-c55297009f59/logo.jpeg";
const logo = {
  url
};
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-navy text-cream mt-32 border-t border-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo.url, alt: "1 3 Kulture logo", className: "w-9 h-9 rounded-full object-cover ring-1 ring-accent/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold", children: [
            "1 3 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Kulture" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-cream/70 leading-relaxed max-w-xs", children: "Creative media and cultural services — documenting, amplifying, and shaping the next generation of African talent." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-accent mb-4", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-cream/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/flights", className: "hover:text-accent", children: "International Flights" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/media", className: "hover:text-accent", children: "Media & PR" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-accent mb-4", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-cream/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-accent", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers", className: "hover:text-accent", children: "Careers" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-accent", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold uppercase tracking-wider text-accent mb-4", children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-cream/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/2349169606650", target: "_blank", rel: "noopener noreferrer", className: "hover:text-accent", children: "WhatsApp: +234 916 960 6650" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:ohagwugabriel@gmail.com", className: "hover:text-accent", children: "ohagwugabriel@gmail.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Available 24/7 · Worldwide" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "LinkedIn", className: "w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Twitter", className: "w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "w-4 h-4" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " 13Kulture. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ohagwugabriel@gmail.com · +234 916 960 6650" })
    ] })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "1 3 Kulture — Creative Media & Cultural Platform" },
      { name: "description", content: "13Kulture: premium photography, videography, creative media, and PJ bookings for artists, brands, events, and cultural movements." },
      { property: "og:site_name", content: "1 3 Kulture" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logoAsset },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoAsset },
      { name: "theme-color", content: "#000000" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: logoAsset },
      { rel: "apple-touch-icon", href: logoAsset },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./media-Bi1ctMrm.mjs");
const Route$6 = createFileRoute("/media")({
  head: () => ({
    meta: [{
      title: "Media, PR & Creative — 1 3 Kulture"
    }, {
      name: "description",
      content: "Corporate videography, photo editing, brand PR and artist management for emerging artists and ambitious small brands."
    }, {
      property: "og:title",
      content: "Media, PR & Creative — 1 3 Kulture"
    }, {
      property: "og:description",
      content: "Videography, photo editing and PR for artists and brands."
    }, {
      property: "og:url",
      content: "/media"
    }],
    links: [{
      rel: "canonical",
      href: "/media"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./hospitality-skRfHwMC.mjs");
const Route$5 = createFileRoute("/hospitality")({
  head: () => ({
    meta: [{
      title: "Hospitality & Hosting — 1 3 Kulture"
    }, {
      name: "description",
      content: "Luxury hospitality, concierge stays, and bespoke event hosting in Dubai, London, New York and beyond."
    }, {
      property: "og:title",
      content: "Hospitality & Hosting — 1 3 Kulture"
    }, {
      property: "og:description",
      content: "Curated stays, concierge, and event hosting worldwide."
    }, {
      property: "og:url",
      content: "/hospitality"
    }],
    links: [{
      rel: "canonical",
      href: "/hospitality"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./flights-BVK3fRx1.mjs");
const Route$4 = createFileRoute("/flights")({
  head: () => ({
    meta: [{
      title: "International Flight Booking — 1 3 Kulture"
    }, {
      name: "description",
      content: "Private jet charter, business class international flights, and corporate group travel. International routes only — no local flights."
    }, {
      property: "og:title",
      content: "International Flight Booking — 1 3 Kulture"
    }, {
      property: "og:description",
      content: "Premium international flights & private jet charter."
    }, {
      property: "og:url",
      content: "/flights"
    }],
    links: [{
      rel: "canonical",
      href: "/flights"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-D9upkkQK.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — 1 3 Kulture"
    }, {
      name: "description",
      content: "Reach 1 3 Kulture's concierge desk in Dubai, London or New York. We respond within 2 business hours."
    }, {
      property: "og:title",
      content: "Contact — 1 3 Kulture"
    }, {
      property: "og:description",
      content: "Three offices, one concierge desk. Always on."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./careers-jY9M2iUq.mjs");
const Route$2 = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers — 1 3 Kulture"
    }, {
      name: "description",
      content: "Join 13Kulture — open roles across our media, flights, and creative branches."
    }, {
      property: "og:title",
      content: "Careers — 13Kulture"
    }, {
      property: "og:description",
      content: "Open roles across media, PR and flights."
    }, {
      property: "og:url",
      content: "/careers"
    }],
    links: [{
      rel: "canonical",
      href: "/careers"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-B9zZmEg6.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — 13Kulture"
    }, {
      name: "description",
      content: "13Kulture is a creative media and cultural platform dedicated to documenting, amplifying, and shaping the next generation of African talent."
    }, {
      property: "og:title",
      content: "About — 13Kulture"
    }, {
      property: "og:description",
      content: "The story behind 13Kulture — a creative media and cultural platform rooted in purpose."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-d630-jnA.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "13KULTURE — Documenting Culture. Creating Legacy."
    }, {
      name: "description",
      content: "Premium photography, videography, and creative media coverage for artists, brands, events, and cultural movements. Rooted in purpose. Growing through creativity."
    }, {
      property: "og:title",
      content: "13KULTURE — Documenting Culture. Creating Legacy."
    }, {
      property: "og:description",
      content: "13Kulture is a creative media and cultural platform dedicated to documenting, amplifying, and shaping the next generation of African talent."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const MediaRoute = Route$6.update({
  id: "/media",
  path: "/media",
  getParentRoute: () => Route$7
});
const HospitalityRoute = Route$5.update({
  id: "/hospitality",
  path: "/hospitality",
  getParentRoute: () => Route$7
});
const FlightsRoute = Route$4.update({
  id: "/flights",
  path: "/flights",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const CareersRoute = Route$2.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CareersRoute,
  ContactRoute,
  FlightsRoute,
  HospitalityRoute,
  MediaRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
