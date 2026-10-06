# Hacker Portfolio

Personal portfolio for Bahaeddine Melki, a recently graduated Telecommunications Engineer specialized in Cybersecurity, seeking CDI/CDD roles in France. Covers Security Engineering, Cloud & Identity, SOC/Detection, offensive security, AppSec/DevSecOps, networking and systems security.

Live → **[https://bahaeddine-melki.vercel.app/]**

---

## Stack

- **React 18** + **React Router v7** (HashRouter), built with **Vite**, tested with **Vitest**
- **Supabase** (Postgres) — live content DB, editable via dashboard
- **Vercel** — CI/CD, auto-deploys on push to `main`
- Custom CSS (`mx.css`) for the matrix/terminal theme
- **react-icons**, **typewriter-effect**, **Bootstrap CSS**

---

## Pages

| Route | Content |
|-------|---------|
| `/` | Hero — glitch name, typewriter taglines, live terminal demo |
| `/about` | Bio, profile KV, tabbed skill grid |
| `/project` | Filterable project cards (Security / AI / Systems) |
| `/resume` | Career timeline + PDF download |
| `/contact` | Contact form (Formspree) + links |
| `/admin-panel` | Easter egg |

---

## Content Management

All content is stored in **Supabase** and fetched at runtime. To update anything:

1. Go to your [Supabase dashboard](https://supabase.com) → **Table Editor**
2. Find the relevant table and edit inline — changes are live immediately

Tables: `profile`, `taglines`, `terminal_demo`, `profile_kv`, `skills`, `projects`, `experience`

Static fallback data lives in `src/data/portfolio.js` — used if Supabase is unreachable.

---

## Local Development

```bash
git clone https://github.com/BahaMelki0/Hacker-Portfolio.git
cd Hacker-Portfolio
cp .env.example .env   # fill in your Supabase credentials
npm ci
npm start              # http://localhost:3000
```

Or with Docker:
```bash
docker run --rm -p 3004:3000 \
  -v "$(pwd):/app" -w /app \
  node:24-slim sh -c "npm ci && npm start -- --host 0.0.0.0"
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `REACT_APP_SUPABASE_URL` | Your Supabase project URL |
| `REACT_APP_SUPABASE_ANON_KEY` | Your Supabase anon/public key |

Set these in Vercel under **Project Settings → Environment Variables**.

---

## Deploy

Pushes to `main` trigger the connected Vercel deployment. `vercel.json` selects Vite, `npm run build` and output directory `build/`; Node.js 24 is required. Existing public Supabase environment names remain compatible. Check the deployment result after pushing.

## Dependency checks

Run `npm test`, `npm run build` and `npm audit`. The October 6 refresh passed three tests and a production build, with zero npm audit vulnerabilities in the resolved lockfile. See [dependency security and deployment notes](docs/DEPENDENCY_SECURITY.md).

---

## Contact

[linkedin.com/in/bahaeddine-melki](https://linkedin.com/in/bahaeddine-melki) · [github.com/BahaMelki0](https://github.com/BahaMelki0)


## Verified graduate content

See [content refresh and Supabase migration](docs/CONTENT_UPDATE.md). Updated fallback and fresh-install seed include RandoriSec framework work, KPMG, certifications and seven portfolio projects. Existing Supabase content requires the transactional migration; the public read key cannot administer it. The downloadable CV PDF is retained for separate review. AWS hosting has not been configured.
