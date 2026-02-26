# Specification

## Summary
**Goal:** Rebuild the entire Nishanth HC Advocate website from scratch as a React + TypeScript single-page application with React Router, replacing the static HTML files that cause blank white screens in preview.

**Planned changes:**
- Replace `frontend/src/App.tsx` with a fully functional React app defining routes for `/` (Home), `/about`, `/cases`, `/appointment`, and `/contact`
- Create a shared Layout component with sticky navbar (NHC gold logo, nav links, mobile hamburger menu, scroll opacity), pulsing WhatsApp float button, and shared footer with full contact details
- Create Home page with full-screen hero (background image, animated heading, CTA buttons), language switcher (EN / ಕನ್ನಡ / हिंदी with localStorage persistence), animated stats counters, service cards with 3D tilt hover, and scroll reveal animations
- Create About page with hero banner, two-column responsive layout (profile images with fallbacks, bio, practice areas, Bar Council details), glassmorphism quote block, and scroll reveal animations
- Create Cases page with hero banner (background image), five detailed service category cards (Civil, Criminal, Family, Property, Documentation) with 3D tilt and scroll reveal, and a CTA linking to `/appointment`
- Create Appointment page with contact info column and appointment form (name, phone, date, case type, message) that validates fields and opens a pre-filled WhatsApp message on submit
- Create Contact page with three glassmorphism info cards (phone, email, WhatsApp), full address block, embedded Google Maps iframe, and WhatsApp CTA section
- Apply premium visual theme across all pages: gold (`#d4af37`) accents, Playfair Display headings, Inter body text, glassmorphism styling, scroll reveal via IntersectionObserver, 3D tilt hover effects, mobile-first responsive layout

**User-visible outcome:** A fully functional five-page advocate website that renders all content without blank screens, with a consistent premium gold/white theme, working navigation, WhatsApp integration, appointment booking form, and embedded map.
