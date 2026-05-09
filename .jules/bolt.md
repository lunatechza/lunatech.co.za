# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2026-05-09 - [Preloading Critical Assets]
**Learning:** Preloading the Largest Contentful Paint (LCP) image (images/slider.png) with fetchpriority="high" and the Font Awesome WOFF font (fonts/fontawesome-webfont862f.woff) significantly reduces initial render time and prevents Flash of Unstyled Icons (FOUI).
**Action:** Always identify the LCP element and critical fonts, and preload them in the head of source HTML files. Use boolean 'crossorigin' for fonts to maintain consistency.
