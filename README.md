# Bahaeddine Melki — Cybersecurity Portfolio

[Live portfolio](https://bahaeddine-melki.vercel.app/) · [GitHub](https://github.com/BahaMelki0) · [LinkedIn](https://linkedin.com/in/bahaeddine-melki)

Personal portfolio for a recently graduated Telecommunications Engineer specialized in Cybersecurity, open to CDI/CDD roles in France. It presents Security Engineering, Cloud & Identity, SOC/Detection, offensive security, AppSec/DevSecOps, networking and systems work through a Matrix-inspired interface.

## Featured work

| Project | Focus |
| --- | --- |
| Detection Forge | Case-based detection engineering, identity telemetry and investigations |
| APK Sentinel | Android AppSec, static evidence, runtime traffic and validation |
| JobForge | Local AI, junior-France job discovery and application tracking |
| SecurePipeline | DevSecOps security gates |
| Windows 11 Call-Graph Toolkit | Reverse engineering and systems security |
| Voice Spoof Detection | Machine learning and security research |
| ZK-SNARK / Polynomial Commitments | Cryptography research |

## Stack and setup

React 18, React Router 7, Vite, Supabase, Bootstrap CSS and Vitest. Node.js 24 is required.

```powershell
git clone https://github.com/BahaMelki0/Hacker-Portfolio.git
cd Hacker-Portfolio
Copy-Item .env.example .env
npm ci
npm start
```

Open http://localhost:3000. Copy the environment file only on first setup. Configure `REACT_APP_SUPABASE_URL` and `REACT_APP_SUPABASE_ANON_KEY`; the equivalent `VITE_` names are also supported. These variables are public browser configuration, never service-role credentials.

## Content and routes

Routes use HashRouter: home, about, projects (`#/project`), resume and contact. Supabase supplies profile, taglines, terminal demo, profile fields, skills, projects and experience. Failed sections retain curated fallback data independently; requests are bounded to 15 seconds. Successful empty tables remain empty. Static content is in `src/data/portfolio.js`.

The contact form sends through Formspree, independently of Supabase. The CV download uses the existing bundled PDF; its content requires separate review.

## Validation and deployment

```powershell
npm test
npm run build
npm audit
```

Production output is `build/`; preview with `npm run preview`. The connected Vercel project deploys pushes to `main`, using `vercel.json`. Hash routes need no server route rewrite. AWS hosting is not configured.

The Matrix canvas stays fixed outside the content's stacking context. Reduced-motion preference disables animation. Manual desktop/mobile visual review remains required alongside automated tests.

## Guides

- [Graduate content and Supabase migration](docs/CONTENT_UPDATE.md)
- [Dependency security and deployment compatibility](docs/DEPENDENCY_SECURITY.md)

No private environment files, generated builds, databases or service-role credentials belong in the repository. Dependency advisory checks are not a full application security assessment.
