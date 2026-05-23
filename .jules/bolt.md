# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2026-05-23 - [Font Awesome Subsetting]
**Learning:** Subsetting Font Awesome CSS rules without subsetting the font binary provides only partial wins (reduces CSS size and one HTTP request), but ensures no breaking changes to icon rendering if done carefully. Note that Font Awesome 4.1.0 is missing many icons added in 4.2.0+, like fa-paint-brush.
**Action:** Always check the specific version of Font Awesome before subsetting to ensure all used icons are actually present in the source font file.
