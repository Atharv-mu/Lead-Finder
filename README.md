# Signalboard — Lead Intelligence Dashboard

A Next.js dashboard for the AI-Powered Lead Intelligence System spec: tracks companies,
their lead score, likely-needed services, and an activity timeline.

This repo currently ships with **sample/mock data** (`lib/data.js`) and mock API routes
(`app/api/companies`) so the whole thing runs and deploys standalone. The full spec
(Python/FastAPI backend, PostgreSQL, scrapers, scheduled jobs, LLM analysis) is a
separate, heavier backend service — see "Connecting the real backend" below.

## What's included

- `app/page.js` — dashboard: stats, filters, lead table
- `app/company/[id]/page.js` — company detail page with timeline
- `app/api/companies/route.js` — mock list/filter API
- `app/api/companies/[id]/route.js` — mock detail API
- `lib/data.js` — sample companies + helper functions (scoring, filtering)
- `components/` — Header, StatCard, FiltersBar, LeadTable, SignalBadge, Timeline

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy — GitHub se Vercel tak (step by step)

1. Is poore folder ko ek naye GitHub repo me push karo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Signalboard lead intelligence dashboard"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. https://vercel.com par jao aur GitHub se login karo.
3. "Add New Project" → apna repo select karo.
4. Framework Preset apne aap "Next.js" detect ho jayega — kuch change karne ki zarurat nahi.
5. "Deploy" pe click karo. 2 minute me live URL mil jayega.

Koi environment variable abhi zaroori nahi hai kyunki data mock/local hai. Jab real backend
jodoge, tab API base URL ko environment variable (`NEXT_PUBLIC_API_URL`) ke through Vercel
project settings me add karna.

## Connecting the real backend (as per project spec)

The original spec calls for a much larger system: Python/FastAPI + PostgreSQL, collectors for
Google/Reddit/Product Hunt/job boards/news, an LLM extraction pipeline, scoring, and continuous
monitoring via background jobs. That backend should be deployed separately (e.g. Railway,
Render, Fly.io, or a VM) since Vercel's serverless functions aren't suited to long-running
scrapers or schedulers.

Once that backend exists:
1. Replace the contents of `lib/data.js`'s exported functions with `fetch` calls to your
   FastAPI endpoints (or keep `lib/data.js` as a typed shape reference and fetch directly in
   `app/api/companies/route.js`).
2. Point requests at `process.env.NEXT_PUBLIC_API_URL`.
3. Everything else — components, pages, filters, scoring badges — will keep working unchanged
   since they're already built against this same data shape.

## Design notes

Dark "signal intelligence" theme: deep ink background, phosphor-teal accent for normal signals,
amber for high-priority leads, monospace for scores/timestamps to read like instrument data. The
pulsing dot next to each lead score is the signature element — a live "blip" reflecting how hot
a lead is.
