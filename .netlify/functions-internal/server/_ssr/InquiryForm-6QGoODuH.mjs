import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
const WHATSAPP_BASE = "https://wa.me/2349169606650";
function InquiryForm({ defaultService }) {
  const [service, setService] = reactExports.useState(defaultService ?? "");
  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.trim() || "";
    const email = fd.get("email")?.trim() || "";
    const phone = fd.get("phone")?.trim() || "";
    const svc = fd.get("service")?.trim() || "";
    const message = fd.get("message")?.trim() || "";
    const text = [
      `Hello 1 3 Kulture, I'd like to make an inquiry.`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      svc ? `Service: ${svc}` : null,
      ``,
      `Message:`,
      message
    ].filter(Boolean).join("\n");
    const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid md:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", required: true, maxLength: 100, placeholder: "Full name", className: "md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "email", required: true, type: "email", maxLength: 255, placeholder: "Email", className: "md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "phone", maxLength: 40, placeholder: "Phone (with country code)", className: "md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        name: "service",
        value: service,
        onChange: (e) => setService(e.target.value),
        className: "md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Service of interest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Private Jet Charter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Business Class International" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Media, PR & Creative" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "PJ Bookings (Travels)" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", required: true, rows: 4, maxLength: 2e3, placeholder: "Tell us about your trip or project…", className: "md:col-span-2 p-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "md:col-span-2 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition", children: [
      "Submit inquiry ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
    ] })
  ] });
}
export {
  InquiryForm as I
};
