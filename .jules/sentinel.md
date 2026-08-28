## 2025-05-15 - [Tabnabbing and Iframe Hardening]
**Vulnerability:** Tabnabbing via `target="_blank"` and overly permissive `iframe` permissions.
**Learning:** Even in a static site, external links and embedded content (like Google Maps) can pose security risks if standard defensive attributes are missing.
**Prevention:** Always include `rel="noopener noreferrer"` for external links using `target="_blank"`. Use `sandbox` and `referrerpolicy` for all `iframes` to follow the principle of least privilege.

## 2026-07-17 - [Contact Form Input Sanitization and Validation]
**Vulnerability:** Downstream HTML Injection/XSS and DoS via unsanitized contact form inputs.
**Learning:** Even though a static contact form compiles and submits data client-side via `mailto:` links, unsanitized inputs with HTML tags can cause HTML/script injection in downstream parsers, helpdesk ticketing systems, or email clients. Furthermore, a lack of JS-level length and regex validations allows malformed submissions to bypass basic browser checks.
**Prevention:** Implement lightweight, robust HTML tag-stripping sanitization and enforce defense-in-depth length and email regex checks in Javascript prior to compilation and link submission.
