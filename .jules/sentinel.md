## 2025-05-15 - [Tabnabbing and Iframe Hardening]
**Vulnerability:** Tabnabbing via `target="_blank"` and overly permissive `iframe` permissions.
**Learning:** Even in a static site, external links and embedded content (like Google Maps) can pose security risks if standard defensive attributes are missing.
**Prevention:** Always include `rel="noopener noreferrer"` for external links using `target="_blank"`. Use `sandbox` and `referrerpolicy` for all `iframes` to follow the principle of least privilege.

## 2026-05-08 - [Harden CSP and Remove Unsafe-Inline]
**Vulnerability:** Potential for CSS-based injection and data leakage through 'unsafe-inline' style-src and overly permissive img-src.
**Learning:** Hardening CSP by removing 'unsafe-inline' requires refactoring all inline `style` attributes to external CSS classes (e.g., Tailwind utilities) to maintain functionality without compromising security.
**Prevention:** Avoid inline `style` attributes on all elements, especially iframes. Centralize all styling in Tailwind CSS and enforce a strict CSP that prohibits 'unsafe-inline'.
