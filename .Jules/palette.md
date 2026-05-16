## 2025-05-14 - [Accessible Icon-only Interactive Elements]
**Learning:** Icon-only interactive elements (like mobile menu toggles or social links) are often invisible to screen readers if they lack ARIA labels. Additionally, relying solely on `focus:outline-none` without providing an alternative focus indicator makes keyboard navigation impossible.
**Action:** Always provide `aria-label` for icon-only buttons/links and ensure a high-contrast focus ring (`focus:ring-2`) is present for keyboard users.

## 2026-02-18 - [Dynamic State Indicators for Static Sites]
**Learning:** In static sites generated from common templates, the lack of "active" navigation states creates a disjointed UX and poor accessibility.
**Action:** Use lightweight client-side JS to inject `aria-current="page"` and toggle "active" classes based on `window.location.pathname` to provide immediate, accessible feedback.

## 2026-02-19 - [Accessible Form Feedback]
**Learning:** Placeholders are not a substitute for labels, as they disappear when the user starts typing and are often skipped by screen readers. Providing visible `<label>` elements and real-time character counters with `aria-live="polite"` significantly improves the UX for all users, especially on mobile and for those using assistive technology.
**Action:** Always include associated `<label>` elements for inputs and use `aria-live` regions for dynamic feedback like character counts or validation messages.

## 2026-02-20 - [Global Keyboard Navigation & Skip Links]
**Learning:** In projects using utility-first CSS like Tailwind, global focus styles are often accidentally suppressed by resets. Implementing a "Skip to Content" link requires consistent use of semantic `<main>` elements across all template-derived pages to ensure a reliable focus target.
**Action:** Ensure all pages have a `<main id="main-content" tabindex="-1">` and use `focus-visible` utilities to provide high-contrast keyboard feedback without affecting mouse users.
