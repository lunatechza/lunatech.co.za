# Bolt's Journal - Critical Performance Learnings

## 2025-05-01 - [CSS Bloat]
**Learning:** Found a 56KB legacy animate.css file being loaded for only 3 animations, which were actually broken due to incorrect class prefixing (`animate__` vs legacy `.animated`).
**Action:** Inline only required keyframes and remove the heavy external dependency.

## 2026-05-03 - [Google Fonts Optimization & Purge Prevention]
**Learning:** Migrating to Google Fonts CSS2 API with preconnect hints improves LCP. However, when pruning unused font weights or CSS classes, ensure that JavaScript-driven styles (like active nav links) are included in the Tailwind 'content' path to prevent accidental purging.
**Action:** Always check tailwind.config.js and verify that all source files (HTML, JS, Templates) are scanned for utility classes.

## 2025-05-15 - Font Preloading and Script Deferring
**Learning:** Font Awesome 4.7 icons can cause a Flash of Unstyled Text (FOUT) if not preloaded, and parser-blocking scripts in the header delay DOM completion. Preloading specifically the `.woff` format provides a good balance of compression and compatibility.
**Action:** Always check for critical font assets and use `<link rel="preload">` in source templates. Ensure non-essential scripts like `navigation.js` use the `defer` attribute.

## 2025-05-15 - Build System Awareness
**Learning:** This project uses a `PostHTML` build system where root-level HTML files are artifacts generated from `src/pages/` and `src/templates/`. Modifications to the root files are lost on the next build.
**Action:** Always modify source files in `src/` and run `pnpm build` to propagate changes to the production environment.
