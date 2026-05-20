# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2026-05-20 - [Font & Script Optimization]
**Learning:** Subsetting Font Awesome 4.1.0 directly into the Tailwind input CSS reduced HTTP requests and eliminated the need for a 21KB external stylesheet. Moving navigation scripts to the head with `defer` improves critical path performance by allowing parallel downloads without blocking parser.
**Action:** Prioritize subsetting legacy icon fonts and using `defer` for non-critical JS on all pages.
