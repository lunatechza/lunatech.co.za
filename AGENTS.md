# Instructions for AI Agents

Welcome, Agent. You are working on the Lunatech (Pty) Ltd. repository. This site has been rebranded for a **2026 AI-First Vision**. Please adhere to the following guidelines:

## Branding & Identity
- **Slogan:** Always use "Design. CODE. AI." (Note the capitalization).
- **Vision:** The company's narrative is centered on the year 2026, focusing on Autonomous Agents, LLM Orchestration, and AI-augmented software development.
- **Copyright:** Use the range "2014-2026".

## Technical Constraints
- **Framework:** The site uses **Tailwind CSS** for styling. Use utility classes for all design work.
- **Build System:** We use **PostHTML** with the `posthtml-include` plugin to manage reusable components (header, footer).
- **Source Files:**
  - Source HTML files are in `src/pages/`.
  - Reusable components are in `src/templates/`.
  - CSS source is in `src/css/input.css`.
- **Build Process:** Run `npm run build` to compile the CSS and HTML. The output is placed in the root directory for GitHub Pages compatibility.
- **Icons:** We use **Font Awesome 4.7**. Newer icons (like `fa-robot` or `fa-brain`) are NOT available. Use semantic alternatives like `fa-terminal`, `fa-flask`, or `fa-magic`.

## Content Integrity
- **Team:** Maintain the updated team list (Ryno, Sam, Jonathan, Stephen, Lyle, Nathan, Dustin, Duwayne).
- **Projects:** The primary showcased projects are **ChainEX** and the **LunaAI Framework**. References to legacy projects like Blocktix or Particl should remain removed unless specified otherwise.

## Verification
- Always verify UI changes with Playwright screenshots.
- Ensure the footer and its modals (Disclaimer/Privacy) are consistent across all five main pages: `index.html`, `about.html`, `service.html`, `portfolio.html`, and `contact.html`.
