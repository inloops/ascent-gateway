---
description: Initialize the Astro/Tailwind/GSAP project and create the folder structure and configuration files based on requirements.md
---

PHASE 1 — Validate Required Files

Before doing anything, check that ALL the following files exist:
	•	requirements/knowledge-base.md
	•	requirements/sitemap.md
	•	requirements/design-system.md
	•	astro.config.js
	•	tailwind.config.js
	•	src/components/utilities/GSAPProvider.astro
	•	src/layouts/Layout.astro

If ANY file is missing:
	•	STOP the workflow
	•	Return:
“Missing file: [file path]. Please add the file and run again.”

Do not continue until all files are present.

⸻

PHASE 2 — Parse + Configure
	1.	Parse the following files:
	•	requirements/knowledge-base.md
	•	requirements/design-system.md
	•	requirements/sitemap.md
	2.	Tailwind Setup:
	•	Update theme values from design-system (colors, spacing, typography, etc.) to tailwind.config.mjs
	•	Update theme values from design-system (colors, spacing, typography, etc.) to src/styles/global.css
	3.	GSAP Setup:
	•	Import gsap and ScrollTrigger inside GSAPProvider
	•	Add a simple GSAP context setup for safe animation usage

⸻

PHASE 3 — Structure + Placeholder Files

1. Update Layout
Modify the file src/layouts/Layout.astro:
	•	Add a simple shared header + footer
	•	Keep it basic, no styling decisions
	•	This layout will be used by all pages

2. Create Page Placeholders
Use the parsed list of pages from requirements/sitemap.md.

For each page:
	•	Create src/pages/[page-name].astro
	•	The file must contain ONLY:

---
layout: "../layouts/Layout.astro"
---


	•	No HTML, no components, no design code.

3. No Components
Do not create any components in this workflow.

4. Create Markdown Draft Files
For every [page-name] created, create a matching markdown file:
	•	path: sitemap-plan/[page-name].md
	•	file content:

<!-- User: paste your content overview here -->



Purpose:
The user will type the page’s draft content here.
Later, during /create-page [pagename], the agent must read this .md file and generate the real page.

These .md files are inputs only, not final site files.

⸻

END RESPONSE

After completing all phases, the agent must return:

“Project core structure is complete: configurations, layouts and placeholder pages are set up according to requirements. The agent is now ready to design individual pages. Use /create-page [pagename] next.”