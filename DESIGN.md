# Lunatech Website Design System

**Status:** Proposed design direction for the full website rebuild
**Brand direction:** Quiet confidence, technical precision, real-world delivery
**Working name:** **Lunar Precision**

---

## 1. Executive decision

### Primary logo

Use **`Lunatech DK Blue Logo Straight.pdf`** as the source for the primary website logo.

- It is flat, crisp, scalable and more modern than the metallic/gradient original.
- The deep blue is credible, technical and suitable for an enterprise-facing brand.
- The horizontal format works best in a website header, footer and proposal documents.
- It remains clear in small sizes and does not compete with the rest of the interface.

### Supporting variants

| Use | Approved source |
|---|---|
| Primary logo on light backgrounds | `Lunatech DK Blue Logo Straight.pdf` |
| Inverse logo on dark backgrounds | `Lunatech WhiteLogo Straight.pdf` |
| Monochrome and formal print use | `Lunatech DK Slate Grey Logo Straight.pdf` |

### Retire from normal website use

- `Lunatech Original Logo Straight.pdf`
- `Lunatech Original Logo w Slogan.pdf`
- All slogan lockups containing **“DESIGN, CODE, SERVICE”**

The metallic gradient and bevel treatment looks less current, is harder to reproduce consistently and loses clarity at smaller sizes. The slogan lockups also conflict with the current **Design. Code. AI.** positioning.

### Required logo cleanup before implementation

Create the following production SVG assets from the approved vectors:

```text
/public/brand/logo-primary.svg       # blue, transparent background
/public/brand/logo-inverse.svg       # white, transparent background
/public/brand/logo-mono.svg          # near-black, transparent background
/public/brand/logo-mark.svg          # circular icon only
/public/brand/favicon.svg            # simplified icon
/public/brand/apple-touch-icon.png
/public/brand/og-default.png
```

Create a refined primary lockup that reads simply **Lunatech**. Keep **(Pty) Ltd** in the footer, legal pages, invoices and formal documents rather than in the main brand mark.

---

## 2. Brand position

Lunatech should look like a serious, founder-led technology company that can design, build and operate complex systems.

The website must communicate:

1. **Technical depth** without looking cold or overcomplicated.
2. **Modern capability** without generic AI hype or science-fiction styling.
3. **Trust and maturity** appropriate for fintech, enterprise and strategic partners.
4. **Practical delivery** rather than presentation-only consulting.
5. **A South African base with global capability.**

### Core positioning line

> **Intelligent software, built for the real world.**

### Supporting line

> Lunatech designs, develops and operates high-performance platforms across AI, fintech, automation and digital infrastructure.

### Brand signature

Use **Design. Code. AI.** as a flexible brand line, not as part of the permanent logo artwork.

---

## 3. Visual direction

### Design character

The interface should feel:

- clean;
- precise;
- premium;
- spacious;
- calm;
- technical;
- confident;
- human.

The design should not feel:

- cyberpunk;
- neon-heavy;
- crypto-promotional;
- like a generic SaaS template;
- overly corporate;
- full of floating glass cards;
- dependent on stock photography;
- excessively animated.

### Visual concept

Use the circular Lunatech mark as the basis for a restrained visual language:

- orbital arcs;
- concentric rings;
- fine grid lines;
- technical alignment guides;
- controlled radial gradients;
- connected systems and data paths.

These elements should remain abstract and subtle. Do not use literal moon photos, astronauts, robots, glowing brains or floating crypto coins.

### Overall page treatment

- Primarily light surfaces with generous white space.
- A deep navy hero and selected dark feature sections.
- Crisp typography and strong visual hierarchy.
- Real product interfaces, architecture diagrams and project imagery.
- Very restrained gradients and shadows.
- A small number of high-quality components repeated consistently.

---

## 4. Logo rules

### Primary usage

- Use the blue logo on white or very light neutral surfaces.
- Use the white logo on navy, deep blue or photographic backgrounds.
- Use the monochrome logo only where colour is unavailable or inappropriate.

### Clear space

Maintain clear space around the logo equal to at least **half the diameter of the inner circle** in the logo mark.

### Minimum sizes

| Asset | Minimum digital size |
|---|---:|
| Full horizontal logo | 160 px wide |
| Simplified Lunatech wordmark | 120 px wide |
| Icon only | 24 px square |
| Preferred header size | 180-210 px wide |

### Do not

- add drop shadows;
- add bevels or metallic effects;
- stretch or compress the logo;
- rotate the mark;
- alter individual logo colours;
- place the blue logo on low-contrast backgrounds;
- put the full company suffix into every heading or navigation area;
- lock a page-specific slogan into the logo.

---

## 5. Colour system

The approved flat logo blue is approximately **`#2B3896`** and becomes the anchor colour.

### Core palette

| Token | Value | Purpose |
|---|---|---|
| `brand-700` | `#2B3896` | Primary logo, buttons, active states |
| `brand-900` | `#121B4B` | Dark brand sections and deep surfaces |
| `brand-500` | `#4D61D8` | Hover states, links, supporting accents |
| `navy-950` | `#0B1026` | Hero, footer and premium dark backgrounds |
| `accent-500` | `#12A8B4` | Small graphical accents and data visualisation |
| `ink-950` | `#0E1428` | Main headings and primary text |
| `text-700` | `#273248` | Body text |
| `text-500` | `#687386` | Secondary text and metadata |
| `surface` | `#FFFFFF` | Cards and primary surfaces |
| `canvas` | `#F7F9FC` | Main page background |
| `canvas-alt` | `#EEF2F8` | Alternate sections |
| `border` | `#DCE3EE` | Dividers, card and form borders |
| `success` | `#18794E` | Positive feedback |
| `warning` | `#9A6700` | Warning feedback |
| `danger` | `#B42318` | Error feedback |

### Usage ratios

- 65% white and light neutral surfaces
- 20% navy and dark sections
- 10% brand blue
- 5% cyan and status accents

### Colour rules

- Use brand blue as a focused accent, not as a full-page wash.
- Cyan is decorative and should not be used for small text on white.
- Dark text must remain the default on light backgrounds.
- Avoid pure black except where technically required.
- Use gradients only in hero artwork, diagrams or large decorative surfaces.

### Approved gradients

```css
--gradient-hero: linear-gradient(
  135deg,
  #0b1026 0%,
  #121b4b 54%,
  #2b3896 100%
);

--gradient-orbit: radial-gradient(
  circle at 70% 35%,
  rgba(77, 97, 216, 0.34),
  rgba(18, 168, 180, 0.08) 35%,
  transparent 68%
);
```

---

## 6. Typography

### Font families

```css
--font-display: "Manrope", "Inter", system-ui, sans-serif;
--font-body: "Inter", system-ui, -apple-system, sans-serif;
--font-mono: "IBM Plex Mono", ui-monospace, monospace;
```

- **Manrope**: headlines, major numerals and display text.
- **Inter**: body copy, navigation, forms and UI.
- **IBM Plex Mono**: technical labels, small metadata and architecture annotations only.

Self-host compressed WOFF2 files. Do not load unnecessary weights.

### Type scale

| Role | Desktop | Mobile | Weight | Line height |
|---|---:|---:|---:|---:|
| Hero display | 64-72 px | 42-48 px | 650-700 | 1.02-1.08 |
| Page H1 | 56-64 px | 38-44 px | 650-700 | 1.08 |
| H2 | 40-48 px | 32-36 px | 650 | 1.12 |
| H3 | 26-30 px | 24-26 px | 600 | 1.2 |
| Large body | 20 px | 18 px | 400 | 1.55 |
| Body | 16-18 px | 16 px | 400 | 1.65 |
| Small | 14 px | 14 px | 450 | 1.5 |
| Eyebrow | 12-13 px | 12 px | 650 | 1.3 |

### Typography rules

- Use sentence case for headings and navigation.
- All caps is reserved for short eyebrow labels.
- Keep body copy to approximately 55-70 characters per line.
- Avoid centre-aligning long paragraphs.
- Use a maximum of three font weights per family.
- Avoid decorative text gradients on important content.
- Do not use oversized headings merely to fill space.

---

## 7. Layout system

### Container

```css
--container-max: 1240px;
--content-max: 760px;
--gutter-mobile: 20px;
--gutter-tablet: 28px;
--gutter-desktop: 40px;
```

### Grid

- 12-column desktop grid.
- 8-column tablet grid.
- 4-column mobile grid.
- Use asymmetric layouts where useful, but preserve clear alignment.

### Section spacing

| Context | Desktop | Mobile |
|---|---:|---:|
| Standard section | 104 px | 64 px |
| Major feature section | 128 px | 80 px |
| Compact section | 72 px | 48 px |
| Card internal padding | 28-36 px | 22-24 px |

### Spacing scale

```text
4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128
```

### Borders and radius

```css
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
```

Use medium radii. Avoid making every element a pill or rounded floating panel.

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(14, 20, 40, 0.06);
--shadow-md: 0 12px 32px rgba(14, 20, 40, 0.08);
--shadow-lg: 0 24px 64px rgba(14, 20, 40, 0.12);
```

Most cards should use a border and minimal shadow. Large shadows are reserved for hero product visuals or modal surfaces.

---

## 8. Navigation and header

### Desktop

- Header height: 76-84 px.
- Sticky after the user starts scrolling.
- White or lightly translucent background on light pages.
- Transparent over the dark home hero, becoming solid on scroll.
- Logo left.
- Main navigation centred or right-aligned.
- Primary CTA at the far right: **Start a project**.

### Main navigation

```text
Home
Services
Work
About
Contact
```

Use **Work** instead of **Portfolio**. It feels more direct and less agency-template-like.

### Mobile

- Logo left, menu button right.
- Full-height or large-sheet navigation panel.
- Large tap targets, at least 44 px high.
- Keep the primary CTA visible in the menu.
- Prevent background scrolling while the menu is open.

---

## 9. Buttons and links

### Primary button

- Brand blue background.
- White text.
- Minimum height: 48 px.
- Radius: 10 px.
- Padding: 0 22 px.
- Hover: slightly lighter blue and 1-2 px upward movement.

### Secondary button

- Transparent or white background.
- Dark text.
- 1 px neutral border.
- Strong hover border and subtle surface tint.

### Text link

- Sentence case.
- Clear arrow or underline treatment.
- Underline appears or strengthens on hover.

### Button copy

Use clear actions:

- Start a project
- View our work
- Discuss your platform
- Explore the case study
- Meet the team

Avoid vague labels such as **Learn more** where a specific action is possible.

---

## 10. Core components

Build these components first and reuse them across all pages.

### Global

- Header
- Mobile navigation
- Footer
- Section header
- Breadcrumbs
- Primary, secondary and text buttons
- Accessible modal or drawer
- Cookie/privacy notice only if legally required

### Content

- Hero
- Capability card
- Feature list
- Project card
- Case study summary
- Metric/stat block
- Process step
- Quote/testimonial
- Team profile
- Logo strip
- Technical stack tags
- CTA band
- FAQ accordion

### Forms

- Text input
- Email input
- Select
- Text area
- File/brief upload where supported
- Checkbox
- Validation message
- Success and error states

### Component rules

- Every interactive component must have hover, focus, active and disabled states.
- Do not use icons without labels where the meaning is not obvious.
- Use one icon family throughout the site.
- Icons should use a consistent 1.5-2 px stroke.
- Avoid nested cards inside cards.

---

## 11. Imagery and art direction

### Replace generic stock imagery

The new site should prioritise:

1. real product screenshots;
2. real architecture and system diagrams;
3. real team and office photography;
4. real Jeffreys Bay or Eastern Cape environmental details where relevant;
5. restrained abstract brand artwork derived from the Lunatech mark.

### Product screenshots

- Use clean browser or device frames.
- Crop intentionally around the valuable interface area.
- Remove private client data.
- Use high-resolution source captures.
- Maintain consistent perspective and shadow treatment.

### Photography

- Natural light.
- Real team members and real working environments.
- Neutral colour grading with slightly cool shadows.
- Avoid staged handshakes, fake celebrations and anonymous office stock.

### Diagrams

- White or very light canvas.
- Fine neutral lines with brand blue highlights.
- Use mono labels sparingly.
- Keep diagrams understandable without animation.

---

## 12. Motion

Motion should communicate quality and system behaviour, not attract attention for its own sake.

### Approved motion

- 180-280 ms UI transitions.
- Fade and 8-16 px translate for section reveals.
- Slow orbital movement in the hero background.
- Subtle card elevation on hover.
- Animated connector lines in diagrams where useful.
- Number animation only for real metrics.

### Do not use

- parallax on every section;
- continuous floating cards;
- cursor trails;
- particle explosions;
- large loading animations;
- autoplay background video;
- motion that blocks navigation or delays content.

Always support `prefers-reduced-motion`.

---

## 13. Content principles

### Voice

- direct;
- technically credible;
- calm;
- evidence-led;
- commercially aware;
- practical.

### Copy rules

- Lead with the client problem and business outcome.
- Explain capability in plain English before technical detail.
- Use short paragraphs and strong subheadings.
- Prefer specific proof over broad claims.
- Remove unnecessary repetition of the current year.
- Avoid unsupported metrics and absolute claims.
- Avoid terms such as “revolutionary”, “unprecedented”, “world-class”, “next-gen” and “zero downtime” unless there is evidence.
- Use **Lunatech** in normal copy and the full legal name only where necessary.

### Preferred language

Use:

- intelligent software;
- product engineering;
- automation;
- secure platforms;
- reliable infrastructure;
- systems integration;
- real-world delivery;
- measurable outcomes;
- technical ownership.

Use sparingly:

- AI-first;
- autonomous;
- disruption;
- digital transformation;
- innovation;
- ecosystem.

---

## 14. Page specification: Home

### Objective

Immediately establish credibility, show what Lunatech builds and move serious prospects toward a conversation.

### Recommended structure

#### 1. Hero

**Eyebrow:** `DESIGN · CODE · AI`
**H1:** `Intelligent software, built for the real world.`
**Body:** `Lunatech designs, develops and operates high-performance platforms across AI, fintech, automation and digital infrastructure.`

Primary CTA: **Start a project**
Secondary CTA: **View our work**

Visual:

- deep navy background;
- subtle orbital SVG derived from the logo;
- one or two real interface panels or system diagrams;
- no generic coding stock image.

#### 2. Credibility strip

Use four restrained proof points:

- Founded in 2014
- Founder-led technical delivery
- South African team, global partnerships
- Product, platform and infrastructure capability

#### 3. What we build

Four primary capability blocks:

1. Product engineering
2. AI and automation
3. Fintech and blockchain
4. Cloud, integration and infrastructure

Each block should include:

- a one-sentence outcome;
- 3-4 specific deliverables;
- a relevant project or proof point.

#### 4. Selected work

Feature three strong projects rather than a long logo list.

Suggested initial projects, subject to approval:

- ChainEX
- VektorIQ
- One approved enterprise platform or automation project

Each card should show:

- project image;
- sector;
- problem;
- Lunatech's role;
- concise outcome;
- case study link.

#### 5. How we work

Four steps:

1. Understand
2. Architect
3. Build
4. Operate

Explain that Lunatech remains technically accountable from strategy through production.

#### 6. Why Lunatech

Use an editorial split layout rather than six identical cards.

Themes:

- senior technical ownership;
- practical AI integration;
- complex financial and operational systems;
- automation-first delivery;
- long-term platform thinking.

#### 7. Final CTA

**Heading:** `Have a serious system to build?`
**Body:** `Let us understand the problem, the constraints and what success needs to look like.`
CTA: **Discuss your project**

---

## 15. Page specification: Services

### Objective

Explain what Lunatech can deliver, for whom and in what form.

### Page hero

**H1:** `Technology capability from strategy to production.`

Supporting copy should make it clear that Lunatech can advise, build, integrate and operate.

### Service groups

#### Product engineering

- Web platforms
- Mobile applications
- Internal business systems
- SaaS products
- API design
- Legacy modernisation

#### AI and automation

- AI agent workflows
- Retrieval and knowledge systems
- Process automation
- Decision-support tools
- Model and provider integration
- Human approval and audit controls

#### Fintech and blockchain

- Exchange and brokerage infrastructure
- Wallet and custody integrations
- Payments and stablecoin flows
- Trading and liquidity systems
- Compliance and audit tooling
- Secure digital identity

#### Data and integrations

- System integration
- Data pipelines
- Third-party APIs
- Reporting and operational dashboards
- Migration tooling
- Event-driven architecture

#### Cloud and DevOps

- Cloud architecture
- CI/CD
- Observability
- Security hardening
- Backup and disaster recovery
- Cost and performance optimisation

#### Technical strategy

- Product discovery
- Architecture review
- Fractional CTO support
- Technical due diligence
- Delivery rescue and stabilisation
- Roadmaps and implementation planning

### Engagement models

Show three clear options:

1. Defined project
2. Embedded technical team
3. Ongoing platform partnership

Each service section should answer:

- what business problem it solves;
- what Lunatech delivers;
- what the engagement normally looks like;
- which work proves the capability.

---

## 16. Page specification: Work

### Objective

Turn the portfolio into evidence of capability rather than a collection of logos.

### Work index

Use project cards with:

- large visual;
- project name;
- sector label;
- two-line summary;
- key Lunatech responsibility;
- optional approved outcome.

Do not add filters until there are enough published case studies to justify them.

### Case study template

Each case study should contain:

1. Project overview
2. Client or product context
3. The problem
4. Constraints
5. Lunatech's role
6. What was designed and built
7. Architecture or workflow visual
8. Technology used
9. Outcome and current status
10. Related capabilities
11. CTA

### Outcome rules

Only publish figures that can be substantiated. Where metrics are confidential, use meaningful qualitative outcomes such as:

- reduced manual intervention;
- enabled regulatory or operational readiness;
- replaced a fragile legacy workflow;
- supported scale across multiple organisations;
- improved auditability;
- shortened release cycles.

---

## 17. Page specification: About

### Objective

Build trust through history, people, principles and location.

### Recommended structure

1. Introductory company story
2. Founded in 2014 timeline
3. What Lunatech believes about good software
4. Founder and leadership profile
5. Team grid with real photography
6. Operating principles
7. Jeffreys Bay base and global delivery
8. CTA

### Operating principles

Suggested principles:

- Build the right thing
- Own the technical outcome
- Automate repeatable work
- Keep systems understandable
- Protect trust and data
- Improve continuously

### Team profiles

Each profile should include:

- full name;
- role;
- 40-60 word professional summary;
- relevant specialisation;
- optional LinkedIn link.

Avoid humorous placeholder biographies on the final site unless they are intentionally balanced with credible professional detail.

---

## 18. Page specification: Contact

### Objective

Make it easy for serious prospects and partners to start a useful conversation.

### Page hero

**H1:** `Tell us what needs to be built.`

Supporting line:

> Share the problem, the current environment and the outcome you need. We will respond with the right next step.

### Contact form

Recommended fields:

- Name
- Work email
- Company
- Project type
- Brief description
- Target timeline
- Indicative budget range, optional
- Attachment, optional
- Consent checkbox

Keep the initial form manageable. Detailed discovery belongs in the follow-up conversation.

### Contact information

Show:

- email address;
- Jeffreys Bay office address;
- expected response time;
- LinkedIn link;
- business hours and time zone where helpful.

### Form behaviour

- Clear inline validation.
- Preserve input after an error.
- Accessible success state.
- Spam protection that does not punish legitimate users.
- Server-side validation.
- Send to the correct Google Workspace inbox and retain a structured lead record.

---

## 19. Footer

Use a deep navy footer with the inverse logo.

### Footer structure

- Simplified Lunatech logo
- One-sentence positioning statement
- Navigation
- Services summary
- Contact details
- LinkedIn
- Privacy policy
- Disclaimer or terms
- Full legal company name and copyright

Keep legal text on dedicated pages rather than displaying long legal modals on every page.

---

## 20. Responsive behaviour

### Breakpoints

```text
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Required behaviour

- Hero becomes a single column below tablet width.
- Product visuals move below the hero copy.
- Three-column cards become two, then one.
- Large split layouts stack with copy first unless the visual is essential context.
- Navigation becomes a drawer or sheet.
- Tables become scrollable or are transformed into stacked rows.
- All tap targets remain at least 44 px.
- No text, card or image may cause horizontal scrolling at 320 px width.

---

## 21. Accessibility

Target **WCAG 2.2 AA**.

Required:

- semantic HTML;
- logical heading order;
- visible keyboard focus;
- skip-to-content link;
- full keyboard navigation;
- accessible mobile menu;
- properly associated form labels;
- descriptive validation messages;
- meaningful image alt text;
- decorative imagery hidden from assistive technology;
- no information conveyed by colour alone;
- captions or transcripts for meaningful video;
- reduced-motion support;
- minimum body text contrast of 4.5:1;
- minimum large text and essential UI contrast of 3:1.

---

## 22. Performance

The site should feel immediate and stable.

### Targets

- LCP below 2.5 seconds on a representative mobile connection
- INP below 200 ms
- CLS below 0.1
- Lighthouse Accessibility, Best Practices and SEO at 95 or above
- Lighthouse mobile Performance at 90 or above on production builds

### Implementation rules

- Use SVG for logos and vector graphics.
- Use AVIF or WebP for photographs and project visuals.
- Specify image width and height.
- Lazy-load below-the-fold media.
- Avoid autoplay video.
- Keep public-page JavaScript small.
- Do not ship an animation framework for effects achievable in CSS.
- Self-host fonts and preload only critical files.
- Cache immutable assets aggressively.

---

## 23. SEO and social presentation

Every page must include:

- unique page title;
- useful meta description;
- canonical URL;
- Open Graph title, description and image;
- Twitter/X card metadata where applicable;
- one clear H1;
- meaningful internal links;
- structured data where appropriate;
- sitemap;
- robots configuration;
- descriptive image names and alt text.

### Structured data

Use relevant schema for:

- Organisation
- Professional service
- Person profiles where appropriate
- Breadcrumbs
- Articles or case studies where applicable

### Default title format

```text
Page title | Lunatech
```

---

## 24. Recommended implementation stack

The design system is framework-independent.

For a greenfield marketing rebuild, prefer:

```text
Astro
TypeScript
Tailwind CSS or token-based CSS modules
Minimal client-side islands
Cloudflare Pages
Cloudflare Worker for the contact form
Google Workspace routing
```

Use Next.js instead where the repository, integrations or future application requirements justify it. Do not add application complexity to a mostly static marketing site without a clear reason.

### Suggested project structure

```text
src/
  components/
    global/
    content/
    forms/
  layouts/
  pages/
  styles/
    tokens.css
    globals.css
  content/
    projects/
    team/
public/
  brand/
  images/
  icons/
```

---

## 25. Design tokens starter

```css
:root {
  --brand-700: #2b3896;
  --brand-900: #121b4b;
  --brand-500: #4d61d8;
  --navy-950: #0b1026;
  --accent-500: #12a8b4;

  --ink-950: #0e1428;
  --text-700: #273248;
  --text-500: #687386;
  --surface: #ffffff;
  --canvas: #f7f9fc;
  --canvas-alt: #eef2f8;
  --border: #dce3ee;

  --success: #18794e;
  --warning: #9a6700;
  --danger: #b42318;

  --font-display: "Manrope", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --container-max: 1240px;
  --content-max: 760px;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-pill: 999px;

  --shadow-sm: 0 1px 2px rgba(14, 20, 40, 0.06);
  --shadow-md: 0 12px 32px rgba(14, 20, 40, 0.08);
  --shadow-lg: 0 24px 64px rgba(14, 20, 40, 0.12);

  --transition-fast: 160ms ease;
  --transition-base: 240ms cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## 26. Content and visual inventory required

Before final page build, collect:

- approved primary, inverse, mono and icon SVGs;
- updated team list and role descriptions;
- real team photographs;
- office or local environment photographs;
- approved ChainEX screenshots and project summary;
- approved VektorIQ screenshots and project summary;
- at least one additional credible case study;
- approved client or partner logos;
- verified company history and milestones;
- verified metrics only;
- current legal, privacy and contact details;
- LinkedIn URL;
- contact form destination and workflow.

Do not fill missing proof with generic claims or fabricated metrics.

---

## 27. Quality gates

The rebuild is not complete until all gates pass.

### Brand

- [ ] Primary blue logo is used correctly on light backgrounds.
- [ ] White logo is used correctly on dark backgrounds.
- [ ] Gradient and old slogan variants are absent from normal page UI.
- [ ] Header uses **Lunatech**, not the full legal suffix, where the refined asset is available.
- [ ] Visual language is consistent across every page.

### Content

- [ ] No unsupported claims or artificial statistics.
- [ ] No unnecessary repeated references to the current year.
- [ ] Every service explains an outcome and deliverable.
- [ ] Every featured project contains real evidence.
- [ ] No placeholder team copy or generic stock imagery remains.

### Responsive

- [ ] Reviewed at 320, 390, 768, 1024, 1440 and 1920 px widths.
- [ ] No horizontal overflow.
- [ ] Navigation works by touch and keyboard.
- [ ] Typography remains readable without awkward wrapping.
- [ ] Images crop correctly at every breakpoint.

### Accessibility

- [ ] WCAG 2.2 AA contrast passes.
- [ ] Keyboard flow is logical.
- [ ] Focus states are visible.
- [ ] Forms are fully labelled and validated.
- [ ] Reduced-motion mode is supported.
- [ ] Heading structure is valid.

### Performance and technical quality

- [ ] Production Lighthouse targets pass.
- [ ] Images are optimised and dimensioned.
- [ ] No unused large libraries are shipped.
- [ ] Metadata and social images are present.
- [ ] Sitemap and robots files are valid.
- [ ] Contact submissions are logged and delivered reliably.
- [ ] Broken-link scan passes.
- [ ] Visual regression screenshots are approved for all pages.

---

## 28. Delivery sequence

### Phase 1: Brand preparation

1. Export and clean the approved SVG logo variants.
2. Produce the simplified **Lunatech** lockup and icon-only asset.
3. Confirm colour tokens and typography.
4. Prepare the default Open Graph image.

### Phase 2: Foundation

1. Implement tokens, type, grid and global styles.
2. Build the header, footer, buttons, forms and section primitives.
3. Build reusable project and capability components.
4. Add accessibility and responsive foundations.

### Phase 3: Pages

1. Home
2. Services
3. Work index
4. Case study template
5. About
6. Contact
7. Privacy and legal pages

### Phase 4: Content and evidence

1. Replace temporary copy.
2. Add approved screenshots and photography.
3. Add case studies.
4. Verify all claims and metrics.
5. Review tone and consistency.

### Phase 5: Quality and launch

1. Visual review at all target widths.
2. Accessibility audit.
3. Performance audit.
4. SEO and social preview audit.
5. Form and delivery testing.
6. Final content sign-off.
7. Production launch and post-launch monitoring.

---

## 29. Final design test

Before approving any page, ask:

1. Does this look like a company trusted to build critical software?
2. Is the message clear within ten seconds?
3. Is the page based on evidence rather than hype?
4. Does every visual support the content?
5. Is the interface calm, consistent and easy to use?
6. Could this page still look credible in three to five years?

If the answer to any question is no, the page is not finished.
