## 2025-05-15 - [Tabnabbing and Iframe Hardening]
**Vulnerability:** Tabnabbing via `target="_blank"` and overly permissive `iframe` permissions.
**Learning:** Even in a static site, external links and embedded content (like Google Maps) can pose security risks if standard defensive attributes are missing.
**Prevention:** Always include `rel="noopener noreferrer"` for external links using `target="_blank"`. Use `sandbox` and `referrerpolicy` for all `iframes` to follow the principle of least privilege.

## 2026-05-25 - [Honeypot Anti-Spam Implementation]
**Vulnerability:** Contact forms on static sites are often targeted by automated spam bots, leading to resource exhaustion or phishing risks.
**Learning:** A client-side honeypot can effectively filter low-sophistication bots without requiring complex backend integrations. Using an `alert()` for failure notification is disruptive; replacing the form with a success message is a more seamless "silent failure" pattern.
**Prevention:** Use visually hidden fields (`.sr-only`) with `tabindex="-1"` and `aria-hidden="true"`. Intercept `submit` events to validate these fields and provide a fake success state to deceive bots.
