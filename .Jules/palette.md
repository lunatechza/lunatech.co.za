## 2025-05-14 - [Accessible Icon-only Interactive Elements]
**Learning:** Icon-only interactive elements (like mobile menu toggles or social links) are often invisible to screen readers if they lack ARIA labels. Additionally, relying solely on `focus:outline-none` without providing an alternative focus indicator makes keyboard navigation impossible.
**Action:** Always provide `aria-label` for icon-only buttons/links and ensure a high-contrast focus ring (`focus:ring-2`) is present for keyboard users.

## 2026-02-13 - [Form Feedback & Accessibility]
**Learning:** Forms without explicit labels are inaccessible to screen readers, and static sites often lack feedback after submission. Using `sr-only` labels preserves the design while providing accessibility. Simple JS micro-interactions (e.g., button state changes) significantly improve perceived responsiveness.
**Action:** Always include labels (visible or `sr-only`) and provide immediate visual/textual feedback for form actions, even on static sites.
