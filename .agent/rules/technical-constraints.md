---
trigger: always_on
---

TECHNICAL CONSTRAINTS & LOCALIZATION
Framework: Astro 5.0+
Styling: Tailwind CSS v4.0
Animation: GSAP (ScrollTrigger + entrance animations only)
Images: .webp only. Use https://placehold.co/600x400.webp as fallback.
Localization: Dates must use DD/MM/YYYY.
SEO: Must output correct OpenGraph meta tags for WhatsApp & Facebook previews.
Performance: Generated pages should target Lighthouse Mobile 90+.
Icons: No emojis or built-in icon sets. If an icon is needed, fetch from unsplash (transparent outlined .webp only).
Copywriting: When content is missing → generate structured “Lorem Ipsum,” never empty strings.


STRICT GENERATION RULES (REENGINEERED)
Directory Enforcement
Follow .agent/rules/file-structure.md exactly. No files outside the allowed tree.

Design Tokens
All colors, spacing, radii, typography, breakpoints come from .requirements/design-system.md.

Content Binding
Every string, every image src, every URL → must be read from:
src/content/pages/[page_name].md
Pages must have:
	•	Frontmatter: short strings + asset paths
	•	Body: rich content

No hard-coded text or images in .astro files.

Components
Only minimal, presentational components are allowed. No over-componentizing.
Blocks must receive data via props or content variables.

Animations
Use GSAP only.
Only approved utility classes such as .anim-fade-up.
Scripts must run under client:load or client:visible.