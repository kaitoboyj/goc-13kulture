import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export function InquiryForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  if (sent) {
    return (
      <div className="border border-accent/40 rounded-2xl p-10 bg-accent/5 text-center">
        <div className="w-12 h-12 rounded-full bg-accent mx-auto flex items-center justify-center mb-4">
          <Check className="w-5 h-5 text-accent-foreground" />
        </div>
        <h3 className="font-display text-2xl mb-2">Inquiry received</h3>
        <p className="text-muted-foreground">Our concierge team will reach out within 24 hours.</p>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
      <input required placeholder="Full name" className="md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" />
      <input required type="email" placeholder="Email" className="md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" />
      <input placeholder="Phone (with country code)" className="md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" />
      <select defaultValue={defaultService ?? ""} className="md:col-span-1 h-12 px-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent">
        <option value="" disabled>Service of interest</option>
        <option>Private Jet Charter</option>
        <option>Business Class International</option>
        <option>Hospitality & Stays</option>
        <option>Media, PR & Creative</option>
      </select>
      <textarea required rows={4} placeholder="Tell us about your trip or project…" className="md:col-span-2 p-4 rounded-lg border border-border bg-card focus:outline-none focus:border-accent" />
      <button className="md:col-span-2 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-foreground text-background font-medium hover:bg-accent hover:text-accent-foreground transition">
        Submit inquiry <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
