## 2025-05-14 - [Accessible Icon-only Interactive Elements]
**Learning:** Icon-only interactive elements (like mobile menu toggles or social links) are often invisible to screen readers if they lack ARIA labels. Additionally, relying solely on `focus:outline-none` without providing an alternative focus indicator makes keyboard navigation impossible.
**Action:** Always provide `aria-label` for icon-only buttons/links and ensure a high-contrast focus ring (`focus:ring-2`) is present for keyboard users.

## 2026-02-18 - [Dynamic State Indicators for Static Sites]
**Learning:** In static sites generated from common templates, the lack of "active" navigation states creates a disjointed UX and poor accessibility.
**Action:** Use lightweight client-side JS to inject `aria-current="page"` and toggle "active" classes based on `window.location.pathname` to provide immediate, accessible feedback.

## 2026-05-09 - [Form Accessibility and Real-time Feedback]
**Learning:** Relying solely on placeholders for form inputs is an accessibility anti-pattern as they disappear on focus/input, leaving users without context. Additionally, for fields with strict length constraints (like message textareas), the lack of real-time feedback can lead to frustrating submission errors.
**Action:** Always provide persistent semantic `<label>` elements and implement `aria-live` character counters for limited-length inputs to ensure continuous context and immediate validation feedback.
