# Mado Design

The [Mado Design](https://www.madodesign.co) marketing site — a Next.js 14 (App Router) rebuild of the design in [`project/Mado Design.html`](./project/Mado%20Design.html), the original Claude Design handoff bundle (see [`project/HANDOFF_README.md`](./project/HANDOFF_README.md) and [`chats/`](./chats) for that history).

**Repo:** `madodesign/mado-design-co`

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS** — design tokens (colors, fonts, breakpoints) configured in `tailwind.config.ts` to match the original design system
- **next/font** — self-hosted Schibsted Grotesk (headings) and Hanken Grotesk (body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/                 # App Router entry — layout (fonts, SEO metadata), page composition
components/
  layout/             # Header, MobileMenu, Footer, BackToTop
  sections/            # Page sections: Hero, Offer, Fit, Work, Contact
  ui/                  # Reusable primitives: Button, Pill, Eyebrow, OfferCard, WorkCard, Carousel…
  icons/               # Inline SVG icon components
lib/content.ts        # Page copy and data, kept separate from markup
public/assets/         # Images and logo
```

## Archive

`project/` and `chats/` preserve the original Claude Design export and the full design conversation that produced it — kept for reference, not part of the running app.
