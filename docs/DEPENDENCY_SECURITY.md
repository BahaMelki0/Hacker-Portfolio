# Dependency security refresh

On October 6, 2026, the portfolio migrated from Create React App/react-scripts to Vite and Vitest. This removed the old Webpack/dev-server/SVGO toolchain instead of forcing incompatible transitive overrides. Supabase, React Router and testing dependencies were refreshed; unused gh-pages and escape-string-regexp tooling was removed.

## Verification

Use Node.js 24:

```powershell
npm ci
npm test
npm run build
npm audit
```

The updated lockfile returned **zero npm audit vulnerabilities**, including development dependencies. Three tests cover navigation, flagship project filtering and graduate/certification content. Production output remains in `build/`.

This is a dependency advisory result, not a guarantee that application logic, live Supabase policies or deployment configuration is free of vulnerabilities. Re-run the audit as new advisories appear.

## Deployment compatibility

`vercel.json` selects Vite, `npm run build` and `build/`; the package requests Node 24. Existing `REACT_APP_SUPABASE_URL` / `REACT_APP_SUPABASE_ANON_KEY` remain supported. New installations may use `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`. These are public client variables: do not place service-role or other private credentials in either public prefix.

The HTML entry is now root `index.html`; JSX source files use `.jsx`. `npm start` serves localhost:3000 and `npm run preview` serves the production build. Hash routes remain compatible. A container must explicitly bind Vite to `0.0.0.0`.

GitHub Dependabot alerts may take time to refresh after the lockfile push. Verify the Vercel deployment separately; a local build does not confirm deployment completion.
