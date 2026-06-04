import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpeg.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream mt-32 border-t border-accent/20">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo.url} alt="1 3 Kulture logo" className="w-9 h-9 rounded-full object-cover ring-1 ring-accent/40" />
              <span className="font-display font-semibold">1 3 <span className="text-accent">Kulture</span></span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
              Creative media and cultural services — documenting, amplifying, and shaping the next generation of African talent.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><Link to="/flights" className="hover:text-accent">International Flights</Link></li>
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a href="https://wa.me/2349169606650" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  WhatsApp: +234 916 960 6650
                </a>
              </li>
              <li>
                <a href="mailto:ohagwugabriel@gmail.com" className="hover:text-accent">
                  ohagwugabriel@gmail.com
                </a>
              </li>
              <li>Available 24/7 · Worldwide</li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent"><Linkedin className="w-4 h-4" /></a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} 13Kulture. All rights reserved.</p>
          <p>ohagwugabriel@gmail.com · +234 916 960 6650</p>
        </div>
      </div>
    </footer>
  );
}
