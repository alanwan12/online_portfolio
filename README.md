# Alan Wan -- Portfolio

A clean, single-page portfolio built on the PWW vanilla template (Next.js 16,
React 19, Tailwind CSS 4). Light/dark toggle, tabbed sections, tech-stack chips, a "Story So
Far" timeline with expandable roles, project cards with screenshots, honors,
and career exploration.

All content lives in [`config/portfolio.ts`](config/portfolio.ts). Images are in
`public/img/`.

## Run locally
```bash
pnpm install
pnpm dev
```

## Deploy on Vercel
Push to GitHub, import the repo at vercel.com/new, keep the default Next.js
settings, and deploy. (Or run `npx vercel --prod`.) The font is self-hosted, so
builds never need Google Fonts.

## Notes
- The page is split into tabs (About, Story, Projects, Honors, Career). Link to a
  tab directly with `/#projects`, `/#story`, etc.
- Add a resume by dropping a PDF in `public/` and setting `social.resume` to its
  path (e.g. `"/Alan-Wan-Resume.pdf"`).
- Template credit ("Designed by Bruin Software Engineers. Inspired by Mohit
  Singh") is kept in the footer.
