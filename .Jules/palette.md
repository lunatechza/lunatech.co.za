## 2025-05-14 - [Accessible Icon-only Interactive Elements]
**Learning:** Icon-only interactive elements (like mobile menu toggles or social links) are often invisible to screen readers if they lack ARIA labels. Additionally, relying solely on `focus:outline-none` without providing an alternative focus indicator makes keyboard navigation impossible.
**Action:** Always provide `aria-label` for icon-only buttons/links and ensure a high-contrast focus ring (`focus:ring-2`) is present for keyboard users.

## 2026-02-18 - [Dynamic State Indicators for Static Sites]
**Learning:** In static sites generated from common templates, the lack of "active" navigation states creates a disjointed UX and poor accessibility.
**Action:** Use lightweight client-side JS to inject `aria-current="page"` and toggle "active" classes based on `window.location.pathname` to provide immediate, accessible feedback.

## 2026-02-20 - [Forms Without Semantic Labels]
**Learning:** Relying solely on placeholders for form inputs creates a significant accessibility barrier as they are often ignored by screen readers and disappear once the user starts typing, leading to cognitive load and potential errors.
**Action:** Always use semantic `<label>` elements associated with inputs via `id` attributes. Style them to maintain the design aesthetic while ensuring they remain visible at all times. Use `aria-labelledby` for the form container when a descriptive heading is available.
