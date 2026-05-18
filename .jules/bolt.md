# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2026-05-18 - [Font Awesome Subsetting & Version Mismatch]
**Learning:** Found that Font Awesome 4.1.0 was being loaded as a full 21KB library while only 17 icons were used. Also discovered 'fa-paint-brush' was referenced in source HTML but didn't exist in the project's v4.1.0 font file (introduced in v4.2.0), causing a blank icon.
**Action:** Manually subsetted used icons into 'src/css/input.css', added 'font-display: swap', and preloaded the WOFF file. Replaced the missing 'fa-paint-brush' with the existing 'fa-pencil' (\f040).
