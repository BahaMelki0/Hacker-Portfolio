# Hacker Portfolio

Personal portfolio for Bahaeddine Melki — offensive security engineer, Post-Master's student at EURECOM × SUP'COM, and member of the Tunisian CTF squad **KB4B3T**. Built with a retro hacker aesthetic: matrix rain, terminal typography, glitch effects.

Live → **[https://bahaeddine-melki.vercel.app/]**

---

## Stack

- **React 18** + **React Router v6** (HashRouter)
- **Supabase** (Postgres) — live content DB, editable via dashboard
- **Vercel** — CI/CD, auto-deploys on push to `main`
- Custom CSS (`mx.css`) for the matrix/terminal theme
- **react-icons**, **typewriter-effect**, **react-bootstrap**

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
npm install
npm start              # http://localhost:3000
```

Or with Docker:
```bash
docker run --rm -p 3004:3000 \
  -v "$(pwd):/app" -w /app \
  node:20-slim sh -c "npm install && npm start"
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

Pushes to `main` auto-deploy via Vercel. No manual steps needed.

---

## Contact

[linkedin.com/in/bahaeddine-melki](https://linkedin.com/in/bahaeddine-melki) · [github.com/BahaMelki0](https://github.com/BahaMelki0)
