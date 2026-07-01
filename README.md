# Blog

> A minimal, dark-mode blog — inspired by [Framer Design System](https://www.framer.com/design/).

## Design Language

| Token         | Value                          | Usage                  |
|---------------|--------------------------------|------------------------|
| Background    | `#0A0A0A`                      | Page / card surfaces   |
| Foreground    | `#F5F5F5`                      | Primary text           |
| Accent        | `#BBEEFF`                      | Links / highlights     |
| Accent Alt    | `#FF6B6B`                      | Warm secondary accent  |
| Surface       | `rgba(255,255,255,0.06)`       | Glass card fill        |
| Border        | `rgba(255,255,255,0.10)`       | Subtle dividers        |

- **Typography**: Variable font (weight 300–900), OpenType ligatures & stylistic sets
- **Motion**: Bezier `cubic-bezier(0.44, 0, 0.56, 1)`, spring physics, default 300ms
- **Breakpoint**: Desktop 1200px
- **Aesthetic**: Glassmorphism, high-contrast on dark, minimal & polished

---

## Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Framework  | Astro (SSG)             |
| Styling    | Tailwind CSS v4 + `@tailwindcss/vite` |
| Content    | Markdown (file-driven)  |
| Runtime    | Node.js >= 18           |
| Language   | TypeScript (strict)     |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm (or pnpm / yarn)

### Install & Run

```bash
# 1. Clone the repository
git clone <repo-url> && cd blog

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start dev server
npm run dev
```

The site should be available at `http://localhost:4321`.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Environment Variables

Create a `.env.local` file in the project root (see `.env.example` for reference).

| Variable          | Required | Description                        |
|-------------------|----------|------------------------------------|
| `SITE_URL`        | Yes      | Canonical site URL for SEO & OG    |
| `ANALYTICS_ID`    | No       | Analytics tracking identifier      |

---

## Project Structure

```
blog/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.astro     # Primary / Secondary / Accent variants
│   │   ├── Card.astro       # Glassmorphism card
│   │   ├── Navbar.astro     # Sticky glass nav
│   │   └── Footer.astro     # Site footer
│   ├── content/
│   │   ├── config.ts        # Content collection schema
│   │   └── posts/           # Markdown blog posts
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout
│   ├── pages/
│   │   ├── index.astro      # Home (hero + latest posts)
│   │   ├── about.astro      # About page
│   │   └── blog/
│   │       └── [slug].astro # Dynamic blog post page
│   └── styles/
│       └── globals.css      # Tailwind import + design tokens
├── .env.example
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## License

MIT
