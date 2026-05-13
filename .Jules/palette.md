## 2025-05-14 - [Accessible Icon-only Interactive Elements]
**Learning:** Icon-only interactive elements (like mobile menu toggles or social links) are often invisible to screen readers if they lack ARIA labels. Additionally, relying solely on `focus:outline-none` without providing an alternative focus indicator makes keyboard navigation impossible.
**Action:** Always provide `aria-label` for icon-only buttons/links and ensure a high-contrast focus ring (`focus:ring-2`) is present for keyboard users.

## 2026-02-18 - [Dynamic State Indicators for Static Sites]
**Learning:** In static sites generated from common templates, the lack of "active" navigation states creates a disjointed UX and poor accessibility.
**Action:** Use lightweight client-side JS to inject `aria-current="page"` and toggle "active" classes based on `window.location.pathname` to provide immediate, accessible feedback.

## 2026-02-19 - [Accessible Form Feedback]
**Learning:** Placeholders are not a substitute for labels, as they disappear when the user starts typing and are often skipped by screen readers. Providing visible `<label>` elements and real-time character counters with `aria-live="polite"` significantly improves the UX for all users, especially on mobile and for those using assistive technology.
**Action:** Always include associated `<label>` elements for inputs and use `aria-live` regions for dynamic feedback like character counts or validation messages.

## 2026-05-13 - [Escape Key and Focus Restoration in Overlays]
**Learning:** Modals and mobile menus that lack keyboard support (Escape key to close) and focus management (focus restoration to the trigger) create navigation traps for keyboard and screen reader users. Simply toggling a 'hidden' class is insufficient for a polished and accessible micro-UX.
**Action:** When implementing overlays, always add a global `keydown` listener for 'Escape' and capture the `activeElement` before opening to restore focus upon closing.
