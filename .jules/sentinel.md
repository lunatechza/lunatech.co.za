## 2025-05-15 - [Tabnabbing and Iframe Hardening]
**Vulnerability:** Tabnabbing via `target="_blank"` and overly permissive `iframe` permissions.
**Learning:** Even in a static site, external links and embedded content (like Google Maps) can pose security risks if standard defensive attributes are missing.
**Prevention:** Always include `rel="noopener noreferrer"` for external links using `target="_blank"`. Use `sandbox` and `referrerpolicy` for all `iframes` to follow the principle of least privilege.

## 2026-05-20 - [CSP Hardening and Inline Style Removal]
**Vulnerability:** Use of `'unsafe-inline'` in Content Security Policy (CSP).
**Learning:** Allowing `'unsafe-inline'` in `style-src` significantly weakens CSP protection against XSS. Even minor inline styles (like `style="border:0"`) force the use of this unsafe directive.
**Prevention:** Eliminate all inline `style` attributes and inline `<style>` blocks. Use Tailwind CSS utility classes instead. This allows for a strict CSP that forbids `'unsafe-inline'`, providing a robust defense-in-depth layer.
