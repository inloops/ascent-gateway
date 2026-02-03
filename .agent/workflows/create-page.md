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

PHASE 1 — PLANNING

1. Read overview again:
   sitemap-plan/[page_name].md
2. Validate page file existence:
   src/pages/[page_name].astro (must exist)
3. Design references:
   • requirements/design-system.md
   • requirements/knowledge-base.md → primary goal 4. Produce a Planning Artifact containing:
   • UI specs needed for this page
   • High-level page structure
   • GSAP animation plan (ScrollTrigger, Timelines, triggers, expected motion)
   • Keep it short but specific

⸻

PHASE 2 — PAGE CONSTRUCTION (HYBRID)

Rules
• The Content File (`src/content/pages/[name].md`) IS THE SOURCE OF TRUTH.
• The Page File (`src/pages/[name].astro`) IS THE DESIGN.
• You MUST NOT hardcode text.
• You MUST import `getEntry` and fetch the content.

⸻

Step 1 — Verify Content

1. Read `src/content/pages/[page_name].md`.
2. Ensure it has the data you need (title, images, etc).

Step 2 — Design the Page
Edit `src/pages/[page_name].astro`.

Required Structure:

```astro
---
import Layout from "../layouts/Layout.astro";
import { getEntry } from 'astro:content';

const page = await getEntry('pages', '[page_name]');
if (!page) return Astro.redirect('/404');
const { Content } = await page.render();
---

<Layout title={page.data.title}>
  <!--
      BUILD YOUR DESIGN HERE
      Use Tailwind for styling.
      Use page.data.* for all text/images.
  -->

  <section class="hero relative h-[50vh]">
      <img src={page.data.heroImage} class="absolute inset-0 w-full h-full object-cover" />
      <h1>{page.data.title}</h1>
  </section>

  <article class="prose">
      <Content />
  </article>

</Layout>
```

⸻

PHASE 3 — ANIMATION INTEGRATION
• Add GSAP animation logic directly inside the page (client:load or client:visible).
• Target the elements you built in Step 2.

⸻

PHASE 4 — VISUAL VERIFICATION

1. Run `npm run dev`.
2. Visit http://localhost:4321/[page_name].
3. Inspect for:
   - Design quality
   - Content correctness (is it pulling the right title?)
   - Console errors
4. Fix bugs immediately.
5. Capture a verification screenshot.

Verification Artifact:
• Screenshot of the rendered page.
• Code snippet showing the `getEntry` logic.

CONCLUSION (FINAL RESPONSE)

“Page [pagename] has been designed.
• Design: `src/pages/[pagename].astro`
• Content Source: `src/content/pages/[pagename].md`
It is fully styled and connected to the CMS.”
