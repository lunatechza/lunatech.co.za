# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2026-05-22 - [Font Awesome Subsetting & Optimization]
**Learning:** Inlining a subset of Font Awesome icons directly into the main CSS bundle eliminates an external HTTP request and reduces total CSS weight by avoiding the full library. Using `font-display: swap` ensures that text and content remain usable during font load, improving perceived performance.
**Action:** Identify used icons using grep and inline only the necessary :before rules into the Tailwind input CSS.
