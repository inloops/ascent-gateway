---
description: Update the project documentation and structure to include a new page that was missed in the initial sitemap.
---

If no page name(s) was received → reply that no page name was received and stop the workflow.
Trigger Example: /add-page pricing

Goal: Add a new page that was missing in the sitemap. Update docs, structure, and prepare it for /create-page.

⸻

PHASE 0 — INPUT CHECK
• If no page name → stop.
• If page name exists → continue.

⸻

PHASE 1 — DOCUMENTATION UPDATE 1. Update sitemap-plan/index.md
• Add the new page under Sitemap & Structure.
• Add its final route path. 2. Check if the page needs a new Content Collection
• Example: /case-studies → case_studies collection.
• If yes → update the Content Collections Table inside sitemap-plan/index.md. 3. Add unsplash rules note
• Add a short line in sitemap-plan/index.md that this page must use minimal unsplash images later when /create-page runs.

⸻

PHASE 2 — HYBRID STRUCTURE CREATION

1. Create the Content File
   • Path: `src/content/pages/[pagename].md`
   • Action: Create with standard frontmatter (title, description, heroImage) and dummy body text.

2. Create the Page File
   • Path: `src/pages/[pagename].astro`
   • Action: Create a minimal file that fetches the content.
   • Template:

   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   import { getEntry } from 'astro:content';

   const page = await getEntry('pages', '[pagename]');
   if (!page) throw new Error('Could not find content for [pagename]');
   const { Content } = await page.render();
   ---

   <Layout title={page.data.title}>
     <main>
       <!-- DESIGN GOES HERE -->
       <h1>{page.data.title}</h1>
       <Content />
     </main>
   </Layout>
   ```

3. Update Collections (if needed)
   • If a new collection type is required, update `src/content/config.ts`.

⸻

PHASE 3 — SUMMARY
• Files Initialized: 2 (Content + Page)
• Design Status: Basic Skeleton
• Next Step: Run `/create-page [pagename]` to apply unique design.

⸻

CONCLUSION
Response:
“Hybrid Page [pagename] initialized.

1. Content: `src/content/pages/[pagename].md`
2. Design: `src/pages/[pagename].astro`
   Run `/create-page [pagename]` to style the page.”
