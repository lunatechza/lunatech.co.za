## 2025-05-15 - [Tabnabbing and Iframe Hardening]
**Vulnerability:** Tabnabbing via `target="_blank"` and overly permissive `iframe` permissions.
**Learning:** Even in a static site, external links and embedded content (like Google Maps) can pose security risks if standard defensive attributes are missing.
**Prevention:** Always include `rel="noopener noreferrer"` for external links using `target="_blank"`. Use `sandbox` and `referrerpolicy` for all `iframes` to follow the principle of least privilege.

## 2026-05-23 - [CSP Hardening and Honeypot Anti-Spam]
**Vulnerability:** Broad Content Security Policy and lack of bot protection on contact forms.
**Learning:** A static site can still benefit from a strict CSP that explicitly defines `connect-src` and `manifest-src`, and disables `worker-src` if not needed. Honeypots are effective "silent" failures for bots that don't execute JS but are trapped by the hidden field.
**Prevention:** Explicitly define all CSP directives instead of relying on `default-src`. Use visually hidden honeypots with `tabindex="-1"` and `autocomplete="off"` to prevent human interference while trapping bots.
