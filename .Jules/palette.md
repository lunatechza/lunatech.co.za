## 2025-05-14 - [Accessible Icon-only Interactive Elements]
**Learning:** Icon-only interactive elements (like mobile menu toggles or social links) are often invisible to screen readers if they lack ARIA labels. Additionally, relying solely on `focus:outline-none` without providing an alternative focus indicator makes keyboard navigation impossible.
**Action:** Always provide `aria-label` for icon-only buttons/links and ensure a high-contrast focus ring (`focus:ring-2`) is present for keyboard users.

## 2026-02-18 - [Dynamic State Indicators for Static Sites]
**Learning:** In static sites generated from common templates, the lack of "active" navigation states creates a disjointed UX and poor accessibility.
**Action:** Use lightweight client-side JS to inject `aria-current="page"` and toggle "active" classes based on `window.location.pathname` to provide immediate, accessible feedback.

## 2026-02-19 - [Accessible Form Feedback]
**Learning:** Placeholders are not a substitute for labels, as they disappear when the user starts typing and are often skipped by screen readers. Providing visible `<label>` elements and real-time character counters with `aria-live="polite"` significantly improves the UX for all users, especially on mobile and for those using assistive technology.
**Action:** Always include associated `<label>` elements for inputs and use `aria-live` regions for dynamic feedback like character counts or validation messages.

## 2026-05-23 - [Navigation Accessibility and Semantic Landmarks]
**Learning:** For keyboard-only users, traversing repetitive navigation menus on every page load is frustrating and inefficient. Semantic landmarks like <main> are also critical for screen reader users to jump directly to the primary content of a page.
**Action:** Implement a visually hidden "Skip to main content" link that becomes visible on focus at the top of every page, and ensure core content is wrapped in a <main> tag with a matching ID.

## 2026-06-25 - [Accessible Modal Dialog Pattern]
**Learning:** Modals that lack focus management and keyboard support are major accessibility barriers. Screen reader users may not know a modal has opened if it lacks appropriate ARIA roles and labels, and keyboard users can get "trapped" or lose their place if focus isn't managed.
**Action:** Always implement `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` for modals. Ensure focus is moved into the modal on open (e.g., to the close button) and restored to the trigger element on close. Always support the `Escape` key for closing.
