# Graduate profile content update

The October 6, 2026 refresh uses the owner's supplied career facts: recent Telecommunications Engineering graduate specialized in Cybersecurity; RandoriSec Graph/Entra/M365 framework internship (15+ modules); KPMG IT/cybersecurity work; SC-200, CRTP, CARTP, eJPT and PT1; CPTS ongoing; CDI/CDD opportunities in France.

The seven featured projects cover Detection Forge, APK Sentinel, JobForge, SecurePipeline, Windows 11 call-graph work, voice spoof detection and ZK-SNARK/polynomial commitment research. Unverified client engagements, thesis details, cohort ranking, placeholder PGP and project implementation claims were removed. Exact education/employment dates were not invented.

## Supabase refresh

The deployed app reads Supabase at runtime, so updating fallback data alone does not update successful database responses.

1. Export/back up the seven public content tables before replacing their contents.
2. In your project's Supabase SQL Editor, run `supabase/migrations/20261006_verified_profile.sql`.
3. The transaction checks for the single-owner `bmelki` profile, then replaces profile, taglines, terminal_demo, profile_kv, skills, projects and experience. It preserves schemas/RLS policies and leaves unrelated tables alone. All seven content tables are curated replacements, including any prior custom entries.
4. Reload the deployed portfolio and verify graduate status, KPMG, seven project links and CPTS ongoing. Verify the About skill tabs after loading remote data.

Only an anon/public read key is configured locally. No live database writes were attempted with it. Do not expose a service-role key in browser environment variables.

`supabase/schema.sql` contains the same content for a fresh installation. Use the migration on an existing database, rather than rerunning the full schema.

## Maintained sources

`scripts/refresh_content.py` regenerates the fallback, seed and migration from the curated facts. Updating Supabase manually remains supported; regenerate/apply only when deliberately replacing the curated dataset.

The existing downloadable CV PDF was retained. Review its dates, certifications and contact details separately before treating it as synchronized with this content.

Hosting remains on Vercel with Supabase. No AWS resources or billing settings were changed.
