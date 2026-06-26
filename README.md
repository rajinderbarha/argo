# ARGO Engineering Industries — Corporate Website

A premium, production-ready B2B website for ARGO Engineering Industries, built with
Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Radix UI primitives
in a shadcn/ui style.

> **Note on content:** this project replaces the original "wood/timber" brief with ARGO's
> actual product line — multicrop reaper machines and farm mechanisation equipment —
> based on the logo and product photography supplied. Update `data/company.ts` and
> `data/products.ts` if details need correcting.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
app/                  Routes (App Router)
  about/
  products/[slug]/
  gallery/
  testimonials/
  blog/[slug]/
  contact/
  inquiry/
  layout.tsx          Root layout, fonts, schema.org JSON-LD
  sitemap.ts           Dynamic sitemap.xml
  robots.ts            robots.txt
components/
  layout/              Navbar, Footer
  sections/            Home page sections
  ui/                  Reusable primitives (Button, ProductCard, forms, etc.)
data/                  Mock content — swap for a CMS or API later
lib/                   cn() helper, SEO metadata builder
types/                 Shared TypeScript types
public/images/         Brand logo + product photography
```

## Connecting real data later

All content currently lives in `data/*.ts` as typed mock arrays (`products`, `testimonials`,
`blogs`, `company`). To connect a CMS or database:

1. Replace the array exports with fetch calls (e.g. `getProducts()` from your API/CMS).
2. Keep the existing TypeScript types in `types/index.ts` as your contract.
3. Pages already call `generateStaticParams` for `/products/[slug]` and `/blog/[slug]` —
   swap the static array for an async data source and these will keep working with
   Next.js's static generation or ISR.

## Forms

`ContactForm` and `InquiryForm` currently simulate submission client-side. Wire them to
a real endpoint (e.g. a Next.js Route Handler under `app/api/`, or a third-party form
service) by replacing the `setTimeout` in each component with a `fetch` call.

## Deployment

This project deploys to Vercel with zero configuration:

```bash
npm i -g vercel
vercel
```

Or connect the repository directly in the Vercel dashboard.
