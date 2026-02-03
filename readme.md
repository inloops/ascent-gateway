# Client Website Builder: Non-Technical Guide

Welcome to your AI-powered website factory. This system allows you to build high-quality, custom sites for clients without writing code. You provide the instructions; the AI handles the construction.

follow these steps in order to create a website.

## 1. Define the "Client DNA" (Setup)

Before building, you must define who the website is for and how it should look.
Navigate to the folders and edit these three files:

### A. Client Profile (`requirements/knowledge-base.md`)

- **What to do:** Paste the client's business details, goals, and target audience.
- **Inspiration:** Add links to websites they like. This tells the AI what "style" to aim for.

### B. Design System (`requirements/design-system.md`)

- **What to do:** Define the brand colors (Hex codes), fonts, and visual tone.
- **Why:** This ensures every generated page matches the specific brand identity perfectly.

### C. Sitemap (`sitemap-plan/index.md`)

- **What to do:** List the pages you need (e.g., Home, About, Services, Contact).
- **Format:** Follow the table format inside the file.

### D. Assets (`public/assets/`)

- **What to do:** Place your logo and images here.
- **Format:** All images must be in `.webp` format.
- **Naming:** Use simple lowercase names (e.g., `logo.webp`, `hero-image.webp`).

---

## 2. Initialize the Project

Once the files above are saved, you are ready to set up the project structure.

**Action:** Open the Agent chat and type:
`/create`

**What happens:**

1.  The AI configures the design system (CSS/Tailwind).
2.  It creates empty placeholders for every page you listed in the Sitemap.
3.  **Crucially:** It creates specific "Briefing Files" for each page inside the `sitemap-plan/` folder (e.g., `sitemap-plan/home.md`).

---

## 3. Desribe Page Content

Go to the `sitemap-plan/` folder. You will now see individual files for each page you requested.

**Action:** Open each file (e.g., `sitemap-plan/home.md`) and delete the placeholder text. Paste the real content or detailed instructions for that page.

- _Example:_ "Hero section with headline 'Future of Tech'. Services section with 3 cards. Contact form at the bottom."
- The more descriptive you are here, the better the result.

---

## 4. Build the Website

Now, turn your instructions into a fully coded website.

**To build a single page:**
`/create-page home` (replace 'home' with the page name)

**To build ALL pages at once:**
`/create-page`

**What happens:**

- The AI reads your content brief.
- It writes the code for the page.
- It applies the Design System styles.
- It adds animations automatically.

---

## 5. Review & Refine

**Action:** Run the website locally to see it:
`npm run dev`

**If you need changes:**

1.  Go back to the page's briefing file (e.g., `sitemap-plan/home.md`).
2.  Update the instructions (e.g., "Make the hero headline bigger" or "Change the second image").
3.  Run the build command again: `/create-page home`

---

## Extras

- **Forgot a page?**
  Run `/add-page [page-name]` to add it to the system, then follow steps 3 & 4.

- **Need to change global colors?**
  Update `requirements/design-system.md` and run `/create` again to update the configuration.
