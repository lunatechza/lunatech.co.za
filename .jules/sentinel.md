## 2025-05-15 - [Tabnabbing and Iframe Hardening]
**Vulnerability:** Tabnabbing via `target="_blank"` and overly permissive `iframe` permissions.
**Learning:** Even in a static site, external links and embedded content (like Google Maps) can pose security risks if standard defensive attributes are missing.
**Prevention:** Always include `rel="noopener noreferrer"` for external links using `target="_blank"`. Use `sandbox` and `referrerpolicy` for all `iframes` to follow the principle of least privilege.

## 2026-05-21 - [Static Site Contact Form Hardening]
**Vulnerability:** Automated spam submissions via contact forms on static sites.
**Learning:** Without server-side validation or CAPTCHA, static site forms are highly susceptible to bot spam. A honeypot field combined with client-side validation provides a low-friction first line of defense.
**Prevention:** Implement a visually hidden honeypot field (e.g., using `sr-only`) and validate it via JavaScript before allowing the form submission event to proceed.
