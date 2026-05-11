# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2026-05-11 - [Critical Path Resource Prioritization]
**Learning:** Prioritizing resources via preloads (`fetchpriority="high"` for LCP images), deferring non-critical scripts, and setting explicit image dimensions (CLS) provides significant perceived performance wins with minimal code changes. Swapping preloads for more critical assets (e.g., fonts over logos) further optimizes the critical rendering path.
**Action:** Always audit preloads on a per-page basis and ensure LCP elements are prioritized while render-blocking assets are deferred or preloaded.
