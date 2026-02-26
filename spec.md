# Specification

## Summary
**Goal:** Fix the Cases page hero image rendering, add navigation-to-appointment on service card clicks, and implement scroll-to-top on all internal navigation actions.

**Planned changes:**
- Fix the Cases page hero section background image URL by encoding parentheses (`(` → `%28`, `)` → `%29`) so the image renders correctly with `object-fit: cover` and no lazy-loading
- Add `onClick` handlers to all five service cards (Civil, Criminal, Family, Property, Documentation) on the Home page to navigate to `/appointment` and call `window.scrollTo(0, 0)`
- Implement a router-level scroll restoration effect in `App.tsx` that calls `window.scrollTo(0, 0)` on every route change, ensuring all navbar links, CTA buttons, and programmatic navigations start at the top of the destination page

**User-visible outcome:** The Cases hero image displays correctly, clicking any service card takes the user to the top of the Appointment page, and every page navigation across the site always starts from the top of the page.
