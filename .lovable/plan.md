## Overview
Build a premium, visually immersive multi-page website for an international travel and creative services brand. The site will feel luxurious, aspirational, and editorial — think Condé Nast Traveler meets a modern private-jet concierge. No generic templates; every page should feel designed and purposeful.

---

## Brand & Identity
- **Name**: "AeroLuxe International" (placeholder — swap for your real name)
- **Tagline**: "Fly Beyond Borders. Stay Beyond Ordinary. Create Beyond Limits."
- **Tone**: Premium, confident, global, creative
- **Contact placeholders**: hello@aeroluxe.com, +1 (555) 019-2834, Dubai / London / New York, IG @aeroluxeintl

---

## Design Direction
- **Palette**: Deep navy/slate primary with warm gold/amber accents, crisp white, and soft cream surfaces. Conveys trust, luxury, and global sophistication.
- **Typography**: Space Grotesk (headings) + DM Sans (body) — modern, clean, editorial.
- **Layout**: Full-width cinematic hero sections with video backgrounds, asymmetric card grids for services, generous whitespace, sharp editorial photography.
- **Motion**: Smooth scroll-triggered reveals, subtle parallax on hero images, elegant page transitions.
- **Key visual motifs**: Flight paths (thin curved lines), horizon lines, world map textures, editorial aviation photography.

---

## Pages & Routes
All routes use TanStack Start file-based routing with unique `head()` metadata for SEO.

1. **Home** (`/`)
   - Cinematic hero with looping aviation video (private jets, airport tarmacs, golden hour takeoffs)
   - Three service pillars: International Flights, Hospitality, Media/PR
   - Featured destinations marquee
   - Trust/social proof section
   - Newsletter CTA

2. **International Flight Booking** (`/flights`)
   - Hero with stunning aerial/cloud photography
   - Service breakdown: Private jet charter, Business class international, Group corporate travel
   - Destinations grid with real city imagery
   - Booking inquiry form (no backend — frontend form with validation)

3. **Hospitality & Hosting** (`/hospitality`)
   - Hero with luxury hotel/resort imagery
   - Service cards: Premium stays, Concierge, Event hosting
   - Destination spotlight carousel
   - Inquiry form

4. **Media, PR & Creative** (`/media`)
   - Hero with cinematic videography stills
   - Service breakdown: Corporate videography, Photo editing, Brand PR, Artist management
   - Portfolio grid (use generated/lifestyle imagery)
   - Case study snippets
   - Inquiry form

5. **About** (`/about`)
   - Brand story, mission, global presence (Dubai/London/NY)
   - Team section (placeholder avatars)
   - Timeline/heritage feel

6. **Contact** (`/contact`)
   - Contact form with service selector
   - Office locations with map-like visual blocks
   - Social links

7. **Careers** (`/careers`)
   - Open positions list
   - Culture section
   - Application form

---

## Assets & Media Strategy
- **Video**: Embed a hero background video (aviation/cinematic travel theme) on the home page. Use a high-quality stock-style aerial video or generate one.
- **Images**: Generate 8–12 premium aviation, luxury travel, and creative-media images. No generic stock-photo look — cinematic lighting, golden hour, editorial composition.
- **Icons**: Lucide icons, minimal line style.

---

## Technical Stack
- TanStack Start (Vite + React 19 + SSR)
- Tailwind CSS v4 with custom design tokens in `src/styles.css`
- shadcn/ui components for forms, cards, dialogs
- Framer Motion for scroll animations and transitions
- React Player or HTML5 video for hero video embedding

---

## SEO & Performance
- Unique `title`, `description`, `og:title`, `og:description`, and `canonical` per route
- Lazy-loaded images below the fold
- Responsive breakpoints: mobile-first, tablet, desktop
- Semantic HTML (nav, main, section, article)

---

## What This Plan Delivers
A complete, launch-ready frontend website with 7 distinct pages, cinematic visuals, editorial photography, and premium motion design. Ready to wire into a backend (Lovable Cloud) later for actual booking/forms if needed.
