# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2026-06-25 - [PostHTML Build & Resource Prioritization]
**Learning:** Resource hints (preload) and deferred script loading must be applied to individual source pages in `src/pages/`, as applying them solely to shared templates like `header.html` can lead to inefficient discovery for route-specific LCP candidates. Additionally, defining explicit `width` and `height` for the site logo (235x57) in shared templates (`src/templates/`) successfully eliminates Cumulative Layout Shift (CLS) globally without requiring per-page overrides.
**Action:** Always audit the final build output in the root directory when using PostHTML to ensure template-level changes didn't introduce unexpected layout behavior or redundant resource hints.
