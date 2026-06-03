import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/2349169606650";

export function InquiryForm({ defaultService }: { defaultService?: string }) {
  const [service, setService] = useState(defaultService ?? "");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string)?.trim() || "";
    const email = (fd.get("email") as string)?.trim() || "";
    const phone = (fd.get("phone") as string)?.trim() || "";
    const svc = (fd.get("service") as string)?.trim() || "";
    const message = (fd.get("message") as string)?.trim() || "";

    const text = [
      `Hello 1 3 Kulture, I'd like to make an inquiry.`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      svc ? `Service: ${svc}` : null,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
      <input name="name" required maxLength={100} placeholder="Full name" className="md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" />
      <input name="email" required type="email" maxLength={255} placeholder="Email" className="md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" />
      <input name="phone" maxLength={40} placeholder="Phone (with country code)" className="md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" />
      <select
        name="service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent"
      >
        <option value="" disabled>Service of interest</option>
        <option>Private Jet Charter</option>
        <option>Business Class International</option>
        <option>Hospitality & Stays</option>
        <option>Media, PR & Creative</option>
      </select>
      <textarea name="message" required rows={4} maxLength={2000} placeholder="Tell us about your trip or project…" className="md:col-span-2 p-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" />
      <button className="md:col-span-2 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition">
        Submit inquiry via WhatsApp <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
