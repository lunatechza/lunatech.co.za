## 2025-05-14 - [Accessible Icon-only Interactive Elements]
**Learning:** Icon-only interactive elements (like mobile menu toggles or social links) are often invisible to screen readers if they lack ARIA labels. Additionally, relying solely on `focus:outline-none` without providing an alternative focus indicator makes keyboard navigation impossible.
**Action:** Always provide `aria-label` for icon-only buttons/links and ensure a high-contrast focus ring (`focus:ring-2`) is present for keyboard users.

## 2026-02-18 - [Dynamic State Indicators for Static Sites]
**Learning:** In static sites generated from common templates, the lack of "active" navigation states creates a disjointed UX and poor accessibility.
**Action:** Use lightweight client-side JS to inject `aria-current="page"` and toggle "active" classes based on `window.location.pathname` to provide immediate, accessible feedback.

## 2026-05-11 - [Feedback-rich and Accessible Contact Forms]
**Learning:** Contact forms are critical conversion points. Moving from placeholder-only inputs to semantic <label> elements significantly improves accessibility for screen readers. Adding real-time feedback like character counters with visual warning states (e.g., at 95% limit) reduces user frustration and prevents silent submission failures.
**Action:** Always use semantic <label> elements for form inputs and provide real-time character count feedback for textareas with length constraints.
