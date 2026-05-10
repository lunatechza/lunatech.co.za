# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2026-05-15 - [LCP and CLS Optimization in Templated Systems]
**Learning:** In systems using PostHTML or similar templating, applying explicit image dimensions in shared templates (header/footer) is a highly efficient way to eliminate CLS across the entire site. For large LCP assets like hero images (1.7MB), using `link rel="preload"` combined with `fetchpriority="high"` in the specific page source ensures the browser prioritizes these assets before the CSS is fully parsed.
**Action:** Prioritize dimensioning shared visual components and use high-priority preloads for page-specific LCP elements.
