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

## 2026-07-11 - [Refined Hero Image Contrast and Human Visibility]
**Learning:** High-contrast overlays and directional gradients allow for rich photographic backgrounds containing people/subjects to be displayed with full human visibility without sacrificing standard text contrast or compliance.
**Action:** Use multi-layer or responsive overlay mechanisms (e.g., directional gradient overlays for wider viewports where text and faces are decoupled, and uniform dark overlays on smaller viewports where text stacks directly over faces) to maintain optimal WCAG contrast and human connection.

## 2026-07-16 - [Focus Management in Modals & Scrolled Header Contrast]
**Learning:** For users navigating via keyboards and assistive technologies, modal dialogs must trap and manage focus; focusing the primary closing action on open and restoring focus to the initiating trigger upon close preserves orientation. Additionally, dynamic background transitions (such as a header turning from transparent to white on scroll) require corresponding high-contrast navigation link styles to prevent low-contrast or white-on-white text readability failures.
**Action:** Always implement robust focus tracking and restoration handlers for modal elements, and ensure color classes adapt cleanly when an ancestor's background color changes.

## 2026-07-17 - [Single-Page Form Success Transitions and Viewport Context]
**Learning:** When transitioning a long form into a much shorter success container, hiding the form structure can cause the document's height to shrink drastically. If the page was scrolled to the bottom (e.g., to reach the submit button), the success container may get pushed above the viewport fold, creating a confusing blank-page sensation. Shifting programmatic focus to the success heading can also cause the browser to scroll the focused element underneath a fixed header.
**Action:** Always invoke `successContainer.scrollIntoView({ behavior: 'smooth', block: 'center' })` to smoothly adjust the user's viewport focus, and use `element.focus({ preventScroll: true })` to prevent layout jumps or fixed-header occlusion.
