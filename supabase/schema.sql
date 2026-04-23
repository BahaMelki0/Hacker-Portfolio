-- ============================================================
-- HACKER PORTFOLIO — Supabase Schema + Seed
-- Run this entire file in the Supabase SQL Editor
-- ============================================================

-- ── Tables ──────────────────────────────────────────────────

create table if not exists profile (
  id      serial primary key,
  name    text not null,
  handle  text,
  locale  text,
  bio     text,
  email   text,
  github  text,
  linkedin text,
  pgp     text
);

create table if not exists taglines (
  id   serial primary key,
  text text not null,
  ord  int  not null default 0
);

create table if not exists terminal_demo (
  id  serial primary key,
  cmd text not null,
  out text not null,
  ord int  not null default 0
);

create table if not exists profile_kv (
  id  serial primary key,
  key text not null,
  val text not null,
  ord int  not null default 0
);

create table if not exists skills (
  id       serial primary key,
  category text not null,
  name     text not null,
  ord      int  not null default 0
);

create table if not exists projects (
  id      text primary key,
  name    text not null,
  cat     text not null,
  year    text,
  nda     boolean default false,
  summary text,
  stack   text[],
  status  text default 'shipped',
  gh_link text,
  ord     int  not null default 0
);

create table if not exists experience (
  id      serial primary key,
  role    text not null,
  org     text not null,
  date    text,
  bullets text[],
  ord     int  not null default 0
);

-- ── RLS: public read-only ────────────────────────────────────

alter table profile      enable row level security;
alter table taglines     enable row level security;
alter table terminal_demo enable row level security;
alter table profile_kv   enable row level security;
alter table skills       enable row level security;
alter table projects     enable row level security;
alter table experience   enable row level security;

create policy "public read" on profile       for select using (true);
create policy "public read" on taglines      for select using (true);
create policy "public read" on terminal_demo for select using (true);
create policy "public read" on profile_kv    for select using (true);
create policy "public read" on skills        for select using (true);
create policy "public read" on projects      for select using (true);
create policy "public read" on experience    for select using (true);

-- ── Seed Data ───────────────────────────────────────────────

insert into profile (name, handle, locale, bio, email, github, linkedin, pgp) values (
  'Bahaeddine Melki',
  'bmelki',
  'Sophia Antipolis · FR',
  'Pentest Intern at RandoriSec and Post-Master''s student at EURECOM in the SUP''COM × EURECOM program — Security of Computer Systems and Communications. I like shells on cloud tenants, adversarial ML, and writing tools that are uncomfortably effective.',
  'bahaeddine.melki@eurecom.fr',
  'github.com/BahaMelki0',
  'linkedin.com/in/bahaeddine-melki',
  'A3F1 9C2D … 88EE'
);

insert into taglines (text, ord) values
  ('Breaking Azure tenants by day.', 0),
  ('Post-Master @ EURECOM × SUP''COM.', 1),
  ('Building red-team tooling in Rust.', 2),
  ('Poking at LLMs until they lie.', 3);

insert into terminal_demo (cmd, out, ord) values
  ('whoami',                                          'bmelki (uid=1337)  groups=redteam,eurecom', 0),
  ('cat /etc/identity',                               'Bahaeddine Melki · Offensive Security · FR/TN', 1),
  ('nmap -sS -A target.corp',                         '22/tcp open  ssh  ·  443/tcp open  https  ·  3389/tcp filtered', 2),
  ('az ad signed-in-user show',                       'svc_backup@tenant.onmicrosoft.com  ·  MFA: disabled ⚠', 3),
  ('python3 rat_analyzer.py --sample discord_c2.exe', '[+] C2 channel detected · discord://gateway · entropy=7.8', 4);

insert into profile_kv (key, val, ord) values
  ('role',      'Pentest Intern @ RandoriSec', 0),
  ('study',     'Post-Master · EURECOM × SUP''COM', 1),
  ('focus',     'Azure red team · Adversarial AI · C2 dev', 2),
  ('languages', 'FR · EN · AR', 3),
  ('pgp',       'A3F1 9C2D … 88EE', 4);

insert into skills (category, name, ord) values
  ('Security', 'Azure Red Team', 0),
  ('Security', 'Active Directory', 1),
  ('Security', 'Web Pentest', 2),
  ('Security', 'Malware Analysis', 3),
  ('Security', 'Privilege Escalation', 4),
  ('Security', 'C2 Dev', 5),
  ('Tooling',  'Rust', 6),
  ('Tooling',  'Python', 7),
  ('Tooling',  'PowerShell', 8),
  ('Tooling',  'Bash', 9),
  ('Tooling',  'Docker', 10),
  ('Tooling',  'Linux', 11),
  ('AI / ML',  'Adversarial ML', 12),
  ('AI / ML',  'PyTorch', 13),
  ('AI / ML',  'LLM Evaluation', 14),
  ('AI / ML',  'LSTM / GRU', 15),
  ('AI / ML',  'Anomaly Detection', 16),
  ('AI / ML',  'ZK-SNARK', 17);

insert into projects (id, name, cat, year, nda, summary, stack, status, gh_link, ord) values
  ('azure-rt',     'Azure Red Team Arsenal',   'Security', '2026', true,  'Suite of Azure tenant enumeration and abuse primitives. Covers graph API, devicecode phish, service principal pivoting.', ARRAY['Python','PowerShell','Azure CLI','Graph API'], 'active',   null, 0),
  ('zk-rust',      'ZK-SNARK in Rust',         'Systems',  '2025', false, 'From-scratch Groth16 verifier in safe Rust. Bilinear pairing math and transparent setup for reproducible experiments.', ARRAY['Rust','Cryptography','bls12-381'], 'shipped', null, 1),
  ('llm-spoof',    'LLM Spoof Detection',      'AI',       '2025', false, 'ASR + LLM pipeline for the ASVspoof-5 task. Fine-tuned DistilBERT and Wav2Vec2 variants to identify spoofed speech.', ARRAY['PyTorch','HF Transformers','Wav2Vec2'], 'shipped', 'https://github.com/BahaMelki0/llm-spoof-detection-asvspoof5', 2),
  ('syscall-graph','Win11 Syscall Call Graph',  'Security', '2025', false, 'Toolkit that maps Windows 11 DLL exports (kernel32, advapi32, user32) to their ntdll syscall stubs via automated Ghidra analysis. Produces unified call graphs, reachability sets, and an interactive Dash UI for exploring hook surface.', ARRAY['Python','Ghidra','Dash','igraph','PowerShell'], 'shipped', 'https://github.com/BahaMelki0/Win11Lib_Call_Graph_Construction', 3),
  ('discord-rat',  'Discord RAT Research',     'Security', '2024', false, 'Lab-only research implant to study C2 evasion techniques and tune detection rules. Strictly used in private ethical testbeds.', ARRAY['Python','YARA','Wireshark'], 'shipped', null, 4),
  ('energy-lstm',  'Energy Forecasting LSTM',  'AI',       '2024', false, 'GRU/LSTM ensemble for short-horizon electrical load forecasting with tunable anomaly detection output.', ARRAY['PyTorch','Pandas','Keras'], 'shipped', null, 5),
  ('voronoi',      'Voronoi Diagram Generator','Systems',  '2024', false, 'C++ implementation of Fortune''s sweep-line algorithm for interactive Voronoi diagrams — computational geometry focus.', ARRAY['C++','Algorithms','Geometry'], 'shipped', null, 6);

insert into experience (role, org, date, bullets, ord) values
  ('Pentest Intern',                       'RandoriSec',      '2026 —',      ARRAY['Azure red-team engagements','Internal AD assessments','Offensive tool dev in Python / PowerShell'], 0),
  ('MSc — Security of Computer Systems',  'EURECOM',         '2024 — 2026', ARRAY['Security of Computer Systems & Communications','Applied cryptography, adversarial ML','Thesis: offensive use of LLMs'], 1),
  ('Research Intern',                      'Tunisian Grid Lab','2024',        ARRAY['Load forecasting with LSTM / GRU','Dataset cleaning and feature engineering'], 2),
  ('Engineer Degree — Telecommunications','SUP''COM',         '2022 — 2024', ARRAY['Telecommunications engineering, security focus','Top 5% of cohort'], 3);
