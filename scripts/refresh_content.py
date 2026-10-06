"""Generate fallback and SQL from the owner's supplied career facts."""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
projects = [
    ('detection-forge', 'Detection Forge', 'Security', 'Case-based detection engineering for Entra ID, Windows and Sysmon logs, with YAML rules, hybrid correlation, cited local AI analysis and investigation reports.', ['Python', 'Entra ID', 'Sysmon', 'Ollama'], 'Detection-Forge'),
    ('apk-sentinel', 'APK Sentinel', 'Security', 'Android AppSec workspace combining static evidence, dependency intelligence, traffic interception and replay, release comparison and tester-validated reporting.', ['Python', 'Android', 'Flask', 'SARIF'], 'Apk-sentinel'),
    ('jobforge', 'JobForge', 'AI', 'Local-first discovery and application workspace for junior IT and cybersecurity roles in France: scheduled collection, explainable ranking, local AI drafting and application tracking.', ['Python', 'FastAPI', 'SQLite', 'Ollama'], 'jobforge'),
    ('securepipeline', 'SecurePipeline', 'Security', 'DevSecOps project integrating security gates into CI workflows to make security checks part of the development pipeline.', ['GitHub Actions', 'DevSecOps', 'Security automation'], 'Secure-Pipeline'),
    ('syscall-graph', 'Windows 11 Call-Graph Toolkit', 'Systems', 'Windows 11 call-graph and reverse-engineering toolkit for exploring DLL exports, syscall relationships and low-level systems security.', ['Python', 'Ghidra', 'Dash', 'PowerShell'], 'Win11Lib_Call_Graph_Construction'),
    ('llm-spoof', 'Voice Spoof Detection', 'AI', 'Research project exploring LLM-based voice spoof detection and the intersection of machine learning and security.', ['Python', 'Machine learning', 'LLMs'], 'llm-spoof-detection-asvspoof5'),
    ('zk-research', 'ZK-SNARK and Polynomial Commitments', 'Systems', 'Research into zero-knowledge proofs, ZK-SNARKs and polynomial commitment techniques.', ['Cryptography', 'ZK-SNARK', 'Polynomial commitments'], 'ZK_Snark'),
]
data = {
    'name': 'Bahaeddine Melki', 'handle': 'bmelki', 'locale': 'Open to roles in France',
    'taglines': ['Recently graduated Telecommunications Engineer.', 'Cybersecurity across cloud identity, detection and offensive security.', 'Building security tools from evidence to investigation.', 'Open to CDI / CDD opportunities in France.'],
    'terminalDemo': [{'cmd': 'whoami', 'out': 'Bahaeddine Melki | Telecommunications Engineer | Cybersecurity'}, {'cmd': 'cat focus.txt', 'out': 'Cloud & Identity / SOC & Detection / OffSec / AppSec / Networking'}, {'cmd': 'ls projects/', 'out': 'Detection Forge / APK Sentinel / JobForge / SecurePipeline'}, {'cmd': 'cat certifications.txt', 'out': 'SC-200 / CRTP / CARTP / eJPT / PT1 | CPTS ongoing'}],
    'bio': 'Recently graduated Telecommunications Engineer specialized in Cybersecurity, combining security engineering, Cloud & Identity, SOC/Detection, offensive security, AppSec/DevSecOps, networking and low-level systems security.\n\nDuring my end-of-studies internship at RandoriSec, I worked on an internal Microsoft Graph / Entra ID / Microsoft 365 security assessment framework, refactoring 15+ modules and building authentication, enumeration, permissions, service-principal, artifact-collection and SQLite persistence workflows. My prior experience at KPMG Tunisia covered network troubleshooting, Active Directory and access-control administration.\n\nI am seeking CDI/CDD opportunities in France where I can investigate, automate and build practical security tooling.',
    'profile': [{'key': 'role', 'val': 'Telecommunications Engineer | Cybersecurity'}, {'key': 'status', 'val': 'Recently graduated'}, {'key': 'focus', 'val': 'Security Engineering / Cloud & Identity / SOC / OffSec / AppSec'}, {'key': 'languages', 'val': 'French / English / Arabic'}, {'key': 'opportunities', 'val': 'CDI / CDD in France'}],
    'skills': {'Cloud & Identity': ['Entra ID', 'Microsoft Graph', 'Microsoft 365', 'IAM', 'OAuth / OIDC', 'Azure', 'Active Directory'], 'SOC & Detection': ['Microsoft Sentinel', 'KQL', 'Defender XDR', 'Windows Event Logs', 'Sysmon', 'MITRE ATT&CK'], 'OffSec & AppSec': ['Pentesting', 'AD attack paths', 'Privilege escalation', 'Lateral movement', 'Threat modeling', 'Vulnerability management', 'DevSecOps'], 'Engineering': ['Python', 'PowerShell', 'Bash', 'Rust', 'C/C++', 'SQL', 'Networking', 'Low-level systems security'], 'Certifications': ['SC-200', 'CRTP', 'CARTP', 'eJPT', 'PT1', 'CPTS (ongoing)']},
    'projects': [dict(id=i, name=n, cat=c, year='', nda=False, summary=s, stack=t, status='research' if i == 'zk-research' else 'active', ghLink='https://github.com/BahaMelki0/' + repo) for i,n,c,s,t,repo in projects],
    'experience': [{'role': 'End-of-studies Cybersecurity Internship', 'org': 'RandoriSec', 'date': 'Completed internship', 'bullets': ['Worked on an internal Microsoft Graph / Entra ID / Microsoft 365 security assessment framework.', 'Refactored 15+ modules.', 'Built authentication, enumeration, permissions, service-principal and artifact-collection workflows with SQLite persistence.']}, {'role': 'IT / Cybersecurity Experience', 'org': 'KPMG Tunisia', 'date': 'Prior experience', 'bullets': ['Network troubleshooting.', 'Active Directory and access-control administration.']}, {'role': 'Telecommunications Engineer — Cybersecurity', 'org': "SUP'COM / EURECOM", 'date': 'Recently graduated', 'bullets': ['Hybrid focus across offensive and defensive security, cloud identity, networking and systems.', 'Portfolio spanning detection engineering, Android AppSec, DevSecOps, voice spoof detection and cryptography.']}],
    'contact': {'email': 'bahaeddine.melki@eurecom.fr', 'github': 'github.com/BahaMelki0', 'linkedin': 'linkedin.com/in/bahaeddine-melki', 'pgp': None}
}
(root / 'src/data/portfolio.js').write_text('const PORTFOLIO = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n\nexport const PROJECT_CATS = ["All", "Security", "AI", "Systems"];\nexport default PORTFOLIO;\n', encoding='utf-8')
def value(v):
    if v is None: return 'null'
    if isinstance(v, bool): return str(v).lower()
    if isinstance(v, int): return str(v)
    if isinstance(v, list): return 'ARRAY[' + ','.join(value(x) for x in v) + ']::text[]'
    return "'" + v.replace("'", "''") + "'"
def insert(table, cols, rows):
    return f"insert into {table} ({','.join(cols)}) values\n" + ',\n'.join('  (' + ','.join(value(x) for x in row) + ')' for row in rows) + ';\n'
seed = insert('profile', ['name','handle','locale','bio','email','github','linkedin','pgp'], [[data[k] for k in ['name','handle','locale','bio']] + [data['contact'][k] for k in ['email','github','linkedin','pgp']]])
seed += insert('taglines', ['text','ord'], [[x,i] for i,x in enumerate(data['taglines'])])
seed += insert('terminal_demo', ['cmd','out','ord'], [[x['cmd'],x['out'],i] for i,x in enumerate(data['terminalDemo'])])
seed += insert('profile_kv', ['key','val','ord'], [[x['key'],x['val'],i] for i,x in enumerate(data['profile'])])
seed += insert('skills', ['category','name','ord'], [[c,n,i] for c,items in data['skills'].items() for i,n in enumerate(items)])
seed += insert('projects', ['id','name','cat','year','nda','summary','stack','status','gh_link','ord'], [[x[k] for k in ['id','name','cat','year','nda','summary','stack','status','ghLink']] + [i] for i,x in enumerate(data['projects'])])
seed += insert('experience', ['role','org','date','bullets','ord'], [[x[k] for k in ['role','org','date','bullets']] + [i] for i,x in enumerate(data['experience'])])
schema = root / 'supabase/schema.sql'
current = schema.read_text(encoding='utf-8')
schema.write_text(current[:current.index('insert into profile')] + seed, encoding='utf-8')
folder = root / 'supabase/migrations'
folder.mkdir(exist_ok=True)
guard = """begin;
-- Single-owner portfolio content refresh. Replaces the public content tables only.
do $$ begin
  if exists (select 1 from profile where handle is distinct from 'bmelki') or (select count(*) from profile) > 1 then
    raise exception 'Expected the single-owner bmelki portfolio; no content changed';
  end if;
end $$;
delete from experience;
delete from projects;
delete from skills;
delete from profile_kv;
delete from terminal_demo;
delete from taglines;
delete from profile;
"""
(folder / '20261006_verified_profile.sql').write_text(guard + seed + 'commit;\n', encoding='utf-8')
print('Updated fallback, fresh-install seed and transactional content migration.')
