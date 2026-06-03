import { Link } from "@tanstack/react-router";
import { Plane, Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream mt-32">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Plane className="w-4 h-4 text-accent-foreground -rotate-45" />
              </span>
              <span className="font-display font-semibold">AeroLuxe<span className="text-accent">.</span></span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
              International travel, hospitality and creative services — engineered for the world's most discerning clients.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><Link to="/flights" className="hover:text-accent">International Flights</Link></li>
              <li><Link to="/hospitality" className="hover:text-accent">Hospitality</Link></li>
              <li><Link to="/media" className="hover:text-accent">Media & PR</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><Link to="/about" className="hover:text-accent">About</Link></li>
              <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Offices</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>Dubai · DIFC</li>
              <li>London · Mayfair</li>
              <li>New York · Tribeca</li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent"><Linkedin className="w-4 h-4" /></a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} AeroLuxe International. All rights reserved.</p>
          <p>hello@aeroluxe.com · +1 (555) 019-2834</p>
        </div>
      </div>
    </footer>
  );
}
