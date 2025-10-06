# Hacker Portfolio

Personal portfolio for Bahaeddine Melki – offensive security engineer, AI red-team tinkerer, and co-founder of the Tunisian CTF squad **KB4B3T**. The site blends a retro hacker aesthetic (matrix rain, terminal typography) with modern storytelling about tooling, research, and projects.

Live demo → **https://bahamelki0.github.io/Hacker-Portfolio/**

---

## ✨ Highlights

- **Cyber ambience**: custom matrix canvas, frosted-glass cards, neon terminal accents.
- **Story-first narrative**: hero tagline, “Let Me Introduce Myself” blur panel, detailed bio with C2 + AI red-team context.
- **Core competency stacks**: curated lists for offensive tooling, operational utilities, and an AI research toolkit.
- **Projects gallery**: offensive security R&D, analytics, full-stack products, plus placeholders for upcoming labs.
- **Easter egg**: visit `/admin-panel` to trigger a retro countdown before the inevitable rickroll.
- **Accessibility pass**: descriptive alt text, aria labels, hash routing fallback, prefers-reduced-motion friendly matrix rain.

---

## 🧭 Page Map

| Route | Content |
|-------|---------|
| `/` | Matrix hero, command typewriter, intro blur card, social hubs. |
| `/about` | KB4B3T story, Discord RAT mention, TryHackMe badge, core security stack, operational tooling, AI toolkit. |
| `/project` | Highlighted projects (energy forecasting, Voronoi visualiser, Discord C2, offensive lab, etc.). |
| `/resume` | Bullet highlights with CV download button (dark green theme). |
| `/admin-panel` | ... |

Hash-based navigation also works (e.g. `#/project`), and `/admin-panel` automatically rewrites to the hash route when required.

---

## 🛠️ Tech Stack

- **React 18** with **React Router (HashRouter)**
- **React-Bootstrap** grid/components
- Custom CSS (`src/style.css`) for matrix, blur, and neon effects
- **react-icons** for stack/tooling glyphs

No external animation libs are required; the matrix effect is a hand-rolled canvas component.

---

## 📦 Project Structure (key folders)

```
src/
  App.js                  # Router + layout + preloader logic
  components/
    MatrixBackground.js   # Matrix canvas with cleanup + reduced-motion support
    Home/                 # Hero, intro blur card, typewriter commands
    About/                # Bio card, stacks (security, tooling, AI)
    Projects/             # Project card renderer + data source
    Resume/               # Resume highlights + download CTA
    AdminRedirect.js      # Countdown easter egg
  style.css               # Global theming + blur utilities
  index.css               # Font + base styles
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/BahaMelki0/Hacker-Portfolio.git
cd Hacker-Portfolio
npm install
npm start
```

The development server runs at `http://localhost:3000/`. Hot reload is enabled.

### Production Build

```bash
npm run build
```

Outputs a minified bundle in `build/`, ready for GitHub Pages or any static host.

---

## 🔄 Content Maintenance

- **Hero commands** → `src/components/Home/Type.js`
- **Intro copy** → `src/components/Home/Home2.js`
- **Bio & TryHackMe** → `src/components/About/AboutCard.js`
- **Security/Tooling/AI stacks** → `src/components/About/{Techstack,Toolstack,AIStack}.js`
- **Project cards** → `src/components/Projects/Projects.js`
- **Resume highlights** → `src/components/Resume/ResumeNew.js`
- **Matrix tuning** → `src/components/MatrixBackground.js`
- **Easter egg** → `src/components/AdminRedirect.js` (adjust timer/URL as desired)

Images live under `src/Assets/`; drop in new logos or project covers as needed.

---

## ⚠️ Known Quirks / Tips

- Hash routing requires the admin panel fallback already implemented in `App.js`. If you change the base path, revisit the rewrite logic.
- When adding new projects, supply real GitHub/demo links to avoid placeholder buttons.
- Matrix animation is intentionally subtle. If you need more motion, tweak the `drops` increment and alpha in `MatrixBackground.js`.

---

## 📬 Contact

Looking for a March 2025 offensive security or AI red-team internship (open to relocation anywhere in Europe).  
Reach out via LinkedIn → https://www.linkedin.com/in/bahaeddine-melki/  
GitHub → https://github.com/BahaMelki0

---

Crafted with 🛠️ and plenty of KB4B3T drills.
