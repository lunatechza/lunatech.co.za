## 2025-05-14 - [Accessible Icon-only Interactive Elements]
**Learning:** Icon-only interactive elements (like mobile menu toggles or social links) are often invisible to screen readers if they lack ARIA labels. Additionally, relying solely on `focus:outline-none` without providing an alternative focus indicator makes keyboard navigation impossible.
**Action:** Always provide `aria-label` for icon-only buttons/links and ensure a high-contrast focus ring (`focus:ring-2`) is present for keyboard users.

## 2026-02-18 - [Dynamic State Indicators for Static Sites]
**Learning:** In static sites generated from common templates, the lack of "active" navigation states creates a disjointed UX and poor accessibility.
**Action:** Use lightweight client-side JS to inject `aria-current="page"` and toggle "active" classes based on `window.location.pathname` to provide immediate, accessible feedback.

## 2026-05-22 - [Interactive Form Feedback & Semantic Labels]
**Learning:** Placeholder-only forms are inaccessible to screen readers and confusing once the user starts typing. Additionally, large textareas benefit from real-time character counters to prevent silent failures on submission due to length limits.
**Action:** Always use semantic `<label>` elements associated with inputs via `id` and `for`. Implement a live character counter with `aria-live="polite"` for limited text fields.
