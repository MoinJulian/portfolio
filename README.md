# Julian's Developer Portfolio

A modern, high-performance developer portfolio built with **SvelteKit**, **TypeScript**, and **TailwindCSS**.

## Features

- 🌑 Dark mode by default
- ⚡ Fast loading with SvelteKit
- 📱 Fully responsive (mobile-first)
- 🎨 Clean design inspired by Vercel / linear.app
- 🔍 SEO-friendly with OpenGraph meta tags
- ✨ Subtle animations and microinteractions
- ♿ Accessible HTML with ARIA attributes

## Sections

1. **Hero** – Name, tagline, CTA buttons
2. **About** – Introduction + skills overview (Frontend, Backend, DevOps)
3. **Projects** – Project cards with tech stack and links
4. **Experience** – Timeline of jobs, education, and open source
5. **Contact** – Email and social links

## Stack

- [SvelteKit](https://kit.svelte.dev/) – Full-stack web framework
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [TailwindCSS](https://tailwindcss.com/) – Utility-first styling
- [Vite](https://vitejs.dev/) – Build tool

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) 9+

### Install & Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
pnpm build
pnpm preview
```

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   └── portfolio/     # New portfolio components
│   │       ├── Navbar.svelte
│   │       ├── SectionContainer.svelte
│   │       ├── SectionHeading.svelte
│   │       ├── ProjectCard.svelte
│   │       └── TimelineItem.svelte
│   └── data/              # Typed data files
│       ├── projects.ts
│       ├── experience.ts
│       └── skills.ts
└── routes/
    └── +page.svelte       # Main portfolio page (single-page layout)
```

## Customization

Edit the data files in `src/lib/data/` to update your projects, experience, and skills.

## License

MIT
