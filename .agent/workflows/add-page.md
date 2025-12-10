---
description: Update the project documentation and structure to include a new page that was missed in the initial sitemap.
---

If no page name(s) was received → reply that no page name was received and stop the workflow.
Trigger Example: /add-page pricing

Goal: Add a new page that was missing in the sitemap. Update docs, structure, and prepare it for /create-page.

⸻

PHASE 0 — INPUT CHECK
	•	If no page name → stop.
	•	If page name exists → continue.

⸻

PHASE 1 — DOCUMENTATION UPDATE
	1.	Update requirements.md
	•	Add the new page under Sitemap & Structure.
	•	Add its final route path.
	2.	Check if the page needs a new Content Collection
	•	Example: /case-studies → case_studies collection.
	•	If yes → update the Content Collections Table inside requirements.md.
	3.	Add unsplash rules note
	•	Add a short line in requirements.md that this page must use minimal unsplash  images later when /create-page runs.

⸻

PHASE 2 — PROJECT STRUCTURE UPDATE
	1.	Create the new page file
	•	src/pages/[pagename].astro (blank placeholder)
	2.	If a new Content Collection is needed:
	•	Update src/content/config.ts and add the new schema.
	•	Create folder: src/content/[collection]/
	•	Add a placeholder .md file.
	3.	Add unsplash  prep
	•	Inside the new collection folder, make space for minimal unsplash image fields in future markdown.

⸻

PHASE 3 — SUMMARY
	•	List every file changed and what was added/updated.
	•	No design.
	•	No HTML.
	•	No GSAP.
	•	No page content.

⸻

CONCLUSION
Response:
“Page [pagename] has been successfully added to the project sitemap and structure. Documentation (requirements.md) and structural files have been updated. The next step is to run /create-page [pagename] to design the new page.”