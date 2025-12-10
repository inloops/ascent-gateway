---
description: Apply precise changes to an existing page and its associated components.
---

Trigger:
/modify-page <pagename> | <instruction>

⸻

PHASE 0 — INPUT CHECK
	•	If no page name → reply: “No page name received. Stopping workflow.”
	•	Else → continue.

⸻

PHASE 1 — ANALYSIS & SCOPE
	1.	Locate files
	•	Primary: src/pages/[pagename].astro
	•	Supporting components directly tied to requested change (only if needed).
	2.	Break instruction into atomic edits
	•	Convert request into a short numbered list.
	•	For each edit, record: target file, location, code change, and reason.

⸻

PHASE 2 — EXECUTION
	1.	Apply only required edits
	•	Modify existing files only.
	•	Do not generate new components unless absolutely required.
	2.	Follow constraints
	•	Tailwind classes match design_system tokens and ordering.
	•	Use correct color, spacing, font tokens.
	•	Keep accessibility intact.
	•	Leave animations and unrelated logic untouched.

⸻

PHASE 3 — ARTIFACTS
	1.	Unified Code Diff
	•	Show modified lines only, grouped by file.
	2.	Screenshot Summary
	•	Provide a descriptive visual verification (before/after view).
	3.	Change Log
	•	Short list of modifications performed.

⸻

PHASE 4 — VERIFICATION
	•	Quick static check: Tailwind token use, class order, a11y.
	•	Report warnings if any rule is broken.

⸻

FINAL RESPONSE FORMAT

Modifications for page [pagename] have been completed as requested. All changes adhere to the design system. Please review the highlighted code diff and screenshot.