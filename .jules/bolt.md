# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2026-05-24 - [Avoid Destructive Library Subsetting]
**Learning:** Manually sub-setting a CSS library (like Font Awesome) into a global stylesheet cripples future extensibility and creates significant technical debt, even if it saves a few KB. Performance optimizations should prioritize non-destructive methods like resource hints (`preload`) and rendering stability (`width`/`height` attributes).
**Action:** Focus on non-destructive optimizations that maintain codebase flexibility and developer experience.
