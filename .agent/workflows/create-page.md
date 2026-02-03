---
description: Read the design system and build the specified Astro page component, applying the layout and styles.
---

Trigger example: /create-page about
If no page name is given → build all pages defined in sitemap-plan/index.md.

⸻

PHASE 0 — CONTENT PREP

For each target page: 1. Read overview from:
sitemap-plan/[page_name].md 2. Create + populate:
src/content/pages/[page_name].md
• Images: pick 1–3 minimal Unsplash images per page using unsplash . Use small/optimized asset variants and store links in the page frontmatter as heroImage, thumbnail, gallery[]. Images must match page theme and be visually simple. 3. Rules for the content file:
• YAML Frontmatter → short strings, titles, labels, image paths, links, metadata
• Ensure content.data contains unsplash links and local derived paths (example: content.data.heroImage should be a unsplash URL or assets/images/unsplash-/[name].jpg).
• Markdown Body → long paragraphs, rich content
• Must be complete and ready for use by the page

⸻

PHASE 1 — PLANNING 1. Read overview again:
sitemap-plan/[page_name].md 2. Validate page file existence:
src/pages/[page_name].astro (must exist) 3. Design references:
• requirements/design-system.md
• requirements/knowledge-base.md → primary goal 4. Produce a Planning Artifact containing:
• UI specs needed for this page
• High-level page structure
• GSAP animation plan (ScrollTrigger, Timelines, triggers, expected motion)
• Keep it short but specific

⸻

PHASE 2 — PAGE CONSTRUCTION

Rules
• Shared components allowed: create only minimal, reusable components for site-wide use. No other components may be created in this workflow.
• All HTML goes inside the page file.
• Only allowed imports → layout + getEntry.
• No hard-coded text or image paths.
• All values come from the Markdown content file.

⸻

Step 1 — Content Fetching

Content file:
src/content/pages/[page_name].md

Agent must:

const content = await getEntry('pages', '[page_name]');
const { Content } = await content.render();

Use:
• content.data → short text + asset paths
• <Content /> → long text body

⸻

Step 2 — Build Page (inside src/pages/[page_name].astro)

Minimal structure:

---

import Layout from "../layouts/Layout.astro";
const content = await getEntry('pages', '[page_name]');
const { Content } = await content.render();

---

<Layout>
  <!-- Page HTML (all hand-built here) -->
</Layout>

HTML, layout blocks, sections, grids → all written directly inside the .astro file.

Example usage (simple but strict):

<section>
  <h1>{content.data.title}</h1>
  <img src={content.data.heroImage} alt="" />
</section>

<section>
  <Content />
</section>

Styling:
• Use Tailwind only
• Tailwind classes must follow design-system palette

⸻

PHASE 3 — ANIMATION INTEGRATION
• Add GSAP animation logic directly inside the page (client:load or client:visible)
• Use ScrollTrigger / Timelines exactly as described in the Planning Artifact
• Follow GSAP best practices (refs, scoped selectors)

Verification Artifact:
• Simulated screenshot or rendering summary
• Short description of what animations do

⸻

CONCLUSION (FINAL RESPONSE)

For each page, end with:

“Page [pagename] has been fully designed, styled, and animated according to the project specifications. The code is complete and follows the defined design system. Please review the Artifacts.”
