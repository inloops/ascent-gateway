---
trigger: always_on
---

ASTRO + TAILWIND DIRECTORY MAP

This is the immutable file structure for the project. The generator must adhere to these paths.

├── astro.config.mjs                 # Astro integrations + build settings
├── tailwind.config.mjs              # Tailwind tokens, utilities, content paths
├── package.json                     # Dependencies + scripts
├── public/
│   ├── _comment                     # Favicons, robots.txt, manifest.json
│   └── assets/                      # All static images/videos (strictly .webp)
│
└── src/
    ├── components/
    │   ├── _comment                 # All reusable UI elements
    │   ├── common/                  # Shared UI: SEOHead, Navbar, Button, etc.
    │   ├── blocks/                  # Content-driven sections: Hero, Features, etc.
    │   └── ui/                      # Client-side logic + GSAP interaction scripts
    │
    ├── layouts/
    │   └── Layout.astro             # Global HTML shell, includes header/footer slots
    │
    ├── styles/
    │   └── global.css               # Font imports, Tailwind layers, custom resets
    │
    ├── content/
    │   ├── _comment                 # Astro Content Collections — source of truth
    │   ├── config.ts                # Collection schema: pages, posts, meta fields
    │   ├── pages/                   # Markdown for generic pages: home.md, about.md
    │   └── posts/                   # Blog post MD content
    │
    └── pages/
        ├── index.astro              # Homepage entry point (SSR output)
        ├── 404.astro                # Not-found page
        ├── [slug].astro             # Generic dynamic renderer for /[slug]
        └── slug_name/
            └── [slug].astro         # Nested dynamic route group