# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2026-05-12 - [Critical Path & Font FOIT]
**Learning:** In a template-based architecture using PostHTML, including scripts in shared templates without the 'defer' attribute can lead to render-blocking behavior across all pages. Additionally, third-party icon fonts like Font Awesome 4.1.0 can cause Flash of Invisible Text (FOIT) if not explicitly preloaded in the source page head, especially since they are often discovered late by the browser via external CSS.
**Action:** Always use the 'defer' attribute for non-critical shared scripts and implement manual font preloading in source pages to prioritize these assets.
