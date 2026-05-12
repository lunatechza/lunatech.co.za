## 2025-05-14 - [Accessible Icon-only Interactive Elements]
**Learning:** Icon-only interactive elements (like mobile menu toggles or social links) are often invisible to screen readers if they lack ARIA labels. Additionally, relying solely on `focus:outline-none` without providing an alternative focus indicator makes keyboard navigation impossible.
**Action:** Always provide `aria-label` for icon-only buttons/links and ensure a high-contrast focus ring (`focus:ring-2`) is present for keyboard users.

## 2026-02-18 - [Dynamic State Indicators for Static Sites]
**Learning:** In static sites generated from common templates, the lack of "active" navigation states creates a disjointed UX and poor accessibility.
**Action:** Use lightweight client-side JS to inject `aria-current="page"` and toggle "active" classes based on `window.location.pathname` to provide immediate, accessible feedback.

## 2026-02-19 - [Accessible Form Feedback]
**Learning:** Placeholders are not a substitute for labels, as they disappear when the user starts typing and are often skipped by screen readers. Providing visible `<label>` elements and real-time character counters with `aria-live="polite"` significantly improves the UX for all users, especially on mobile and for those using assistive technology.
**Action:** Always include associated `<label>` elements for inputs and use `aria-live` regions for dynamic feedback like character counts or validation messages.

## 2026-02-20 - [Keyboard Accessibility for Modals and Navigation]
**Learning:** Skipping repetitive content (navigation) is essential for keyboard and screen reader accessibility. Furthermore, modals and menus that don't capture the `Escape` key or manage focus (initial focus and focus restoration) break the user's mental model and navigation flow.
**Action:** Implement "Skip to content" links as a baseline for accessibility, and ensure all interactive overlays handle the `Escape` key and restore focus to the triggering element upon closing.
