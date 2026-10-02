# Signalboard — Lead Intelligence Dashboard

A Next.js dashboard for the AI-Powered Lead Intelligence System specification. It tracks companies, their lead scores, likely-needed services, and an activity timeline.

This repository currently ships with **sample/mock data** (`lib/data.js`) and mock API routes (`app/api/companies`), so the entire application can run and deploy independently. The full specification — including the Python/FastAPI backend, PostgreSQL database, scrapers, scheduled jobs, and LLM analysis — is a separate, more extensive backend service. See **"Connecting the Real Backend"** below.

## What's Included

* `app/page.js` — Dashboard with statistics, filters, and lead table
* `app/company/[id]/page.js` — Company detail page with activity timeline
* `app/api/companies/route.js` — Mock list/filter API
* `app/api/companies/[id]/route.js` — Mock company detail API
* `lib/data.js` — Sample companies and helper functions for scoring and filtering
* `components/` — Header, StatCard, FiltersBar, LeadTable, SignalBadge, Timeline

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Deploy — GitHub to Vercel (Step by Step)

1. Push the entire folder to a new GitHub repository:

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Signalboard lead intelligence dashboard"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. Go to https://vercel.com and log in with GitHub.

3. Select **"Add New Project"** and choose your repository.

4. The **Framework Preset** will automatically detect **Next.js**. You do not need to change anything.

5. Click **"Deploy"**. Your live URL should be available within a couple of minutes.

No environment variables are currently required because the application uses mock/local data. When you connect the real backend, add the API base URL as an environment variable (`NEXT_PUBLIC_API_URL`) in your Vercel project settings.

## Connecting the Real Backend (According to the Project Specification)

The original specification calls for a much larger system:

* Python/FastAPI backend
* PostgreSQL database
* Data collectors for Google, Reddit, Product Hunt, job boards, and news
* LLM-based data extraction and analysis pipeline
* Lead scoring
* Continuous monitoring through background jobs

The backend should be deployed separately — for example, on Railway, Render, Fly.io, or a dedicated VM — because Vercel's serverless functions are not designed for long-running scrapers or scheduled background processes.

Once the backend is available:

1. Replace the contents of the exported functions in `lib/data.js` with `fetch` calls to your FastAPI endpoints.

   Alternatively, you can keep `lib/data.js` as a reference for the expected data structure and perform the API requests directly inside:

   `app/api/companies/route.js`

2. Point your requests to:

   ```javascript
   process.env.NEXT_PUBLIC_API_URL
   ```

3. Everything else — including the components, pages, filters, scoring badges, and UI — should continue working without changes because they are already built around the same data structure.

## Design Notes

The dashboard uses a dark **"signal intelligence"** theme:

* Deep ink-colored background
* Phosphor-teal accents for normal signals
* Amber accents for high-priority leads
* Monospace typography for scores and timestamps, giving the interface an instrument/data-terminal appearance

The **pulsing dot next to each lead score** is the signature visual element. It acts as a live "blip" that represents how strong or "hot" a lead currently is.
