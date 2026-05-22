## 2025-05-15 - [Tabnabbing and Iframe Hardening]
**Vulnerability:** Tabnabbing via `target="_blank"` and overly permissive `iframe` permissions.
**Learning:** Even in a static site, external links and embedded content (like Google Maps) can pose security risks if standard defensive attributes are missing.
**Prevention:** Always include `rel="noopener noreferrer"` for external links using `target="_blank"`. Use `sandbox` and `referrerpolicy` for all `iframes` to follow the principle of least privilege.

## 2026-05-22 - [Silent Honeypot Failure for Anti-Spam]
**Vulnerability:** Automated contact form spam via bots.
**Learning:** Simple honeypots are effective but must be implemented with silent failure logic (generic success message) to avoid alerting bots that they have been caught, while also ensuring the field is invisible to legitimate users.
**Prevention:** Use a visually hidden field (via `.sr-only`) with `tabindex="-1"` and `autocomplete="off"`. Validate on submission and intercept with a generic success response if populated.
