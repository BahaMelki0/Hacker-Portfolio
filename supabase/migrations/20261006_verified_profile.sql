begin;
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
insert into profile (name,handle,locale,bio,email,github,linkedin,pgp) values
  ('Bahaeddine Melki','bmelki','Open to roles in France','Recently graduated Telecommunications Engineer specialized in Cybersecurity, combining security engineering, Cloud & Identity, SOC/Detection, offensive security, AppSec/DevSecOps, networking and low-level systems security.

During my end-of-studies internship at RandoriSec, I worked on an internal Microsoft Graph / Entra ID / Microsoft 365 security assessment framework, refactoring 15+ modules and building authentication, enumeration, permissions, service-principal, artifact-collection and SQLite persistence workflows. My prior experience at KPMG Tunisia covered network troubleshooting, Active Directory and access-control administration.

I am seeking CDI/CDD opportunities in France where I can investigate, automate and build practical security tooling.','bahaeddine.melki@eurecom.fr','github.com/BahaMelki0','linkedin.com/in/bahaeddine-melki',null);
insert into taglines (text,ord) values
  ('Recently graduated Telecommunications Engineer.',0),
  ('Cybersecurity across cloud identity, detection and offensive security.',1),
  ('Building security tools from evidence to investigation.',2),
  ('Open to CDI / CDD opportunities in France.',3);
insert into terminal_demo (cmd,out,ord) values
  ('whoami','Bahaeddine Melki | Telecommunications Engineer | Cybersecurity',0),
  ('cat focus.txt','Cloud & Identity / SOC & Detection / OffSec / AppSec / Networking',1),
  ('ls projects/','Detection Forge / APK Sentinel / JobForge / SecurePipeline',2),
  ('cat certifications.txt','SC-200 / CRTP / CARTP / eJPT / PT1 | CPTS ongoing',3);
insert into profile_kv (key,val,ord) values
  ('role','Telecommunications Engineer | Cybersecurity',0),
  ('status','Recently graduated',1),
  ('focus','Security Engineering / Cloud & Identity / SOC / OffSec / AppSec',2),
  ('languages','French / English / Arabic',3),
  ('opportunities','CDI / CDD in France',4);
insert into skills (category,name,ord) values
  ('Cloud & Identity','Entra ID',0),
  ('Cloud & Identity','Microsoft Graph',1),
  ('Cloud & Identity','Microsoft 365',2),
  ('Cloud & Identity','IAM',3),
  ('Cloud & Identity','OAuth / OIDC',4),
  ('Cloud & Identity','Azure',5),
  ('Cloud & Identity','Active Directory',6),
  ('SOC & Detection','Microsoft Sentinel',0),
  ('SOC & Detection','KQL',1),
  ('SOC & Detection','Defender XDR',2),
  ('SOC & Detection','Windows Event Logs',3),
  ('SOC & Detection','Sysmon',4),
  ('SOC & Detection','MITRE ATT&CK',5),
  ('OffSec & AppSec','Pentesting',0),
  ('OffSec & AppSec','AD attack paths',1),
  ('OffSec & AppSec','Privilege escalation',2),
  ('OffSec & AppSec','Lateral movement',3),
  ('OffSec & AppSec','Threat modeling',4),
  ('OffSec & AppSec','Vulnerability management',5),
  ('OffSec & AppSec','DevSecOps',6),
  ('Engineering','Python',0),
  ('Engineering','PowerShell',1),
  ('Engineering','Bash',2),
  ('Engineering','Rust',3),
  ('Engineering','C/C++',4),
  ('Engineering','SQL',5),
  ('Engineering','Networking',6),
  ('Engineering','Low-level systems security',7),
  ('Certifications','SC-200',0),
  ('Certifications','CRTP',1),
  ('Certifications','CARTP',2),
  ('Certifications','eJPT',3),
  ('Certifications','PT1',4),
  ('Certifications','CPTS (ongoing)',5);
insert into projects (id,name,cat,year,nda,summary,stack,status,gh_link,ord) values
  ('detection-forge','Detection Forge','Security','',false,'Case-based detection engineering for Entra ID, Windows and Sysmon logs, with YAML rules, hybrid correlation, cited local AI analysis and investigation reports.',ARRAY['Python','Entra ID','Sysmon','Ollama']::text[],'active','https://github.com/BahaMelki0/Detection-Forge',0),
  ('apk-sentinel','APK Sentinel','Security','',false,'Android AppSec workspace combining static evidence, dependency intelligence, traffic interception and replay, release comparison and tester-validated reporting.',ARRAY['Python','Android','Flask','SARIF']::text[],'active','https://github.com/BahaMelki0/Apk-sentinel',1),
  ('jobforge','JobForge','AI','',false,'Local-first discovery and application workspace for junior IT and cybersecurity roles in France: scheduled collection, explainable ranking, local AI drafting and application tracking.',ARRAY['Python','FastAPI','SQLite','Ollama']::text[],'active','https://github.com/BahaMelki0/jobforge',2),
  ('securepipeline','SecurePipeline','Security','',false,'DevSecOps project integrating security gates into CI workflows to make security checks part of the development pipeline.',ARRAY['GitHub Actions','DevSecOps','Security automation']::text[],'active','https://github.com/BahaMelki0/Secure-Pipeline',3),
  ('syscall-graph','Windows 11 Call-Graph Toolkit','Systems','',false,'Windows 11 call-graph and reverse-engineering toolkit for exploring DLL exports, syscall relationships and low-level systems security.',ARRAY['Python','Ghidra','Dash','PowerShell']::text[],'active','https://github.com/BahaMelki0/Win11Lib_Call_Graph_Construction',4),
  ('llm-spoof','Voice Spoof Detection','AI','',false,'Research project exploring LLM-based voice spoof detection and the intersection of machine learning and security.',ARRAY['Python','Machine learning','LLMs']::text[],'active','https://github.com/BahaMelki0/llm-spoof-detection-asvspoof5',5),
  ('zk-research','ZK-SNARK and Polynomial Commitments','Systems','',false,'Research into zero-knowledge proofs, ZK-SNARKs and polynomial commitment techniques.',ARRAY['Cryptography','ZK-SNARK','Polynomial commitments']::text[],'research','https://github.com/BahaMelki0/ZK_Snark',6);
insert into experience (role,org,date,bullets,ord) values
  ('End-of-studies Cybersecurity Internship','RandoriSec','Completed internship',ARRAY['Worked on an internal Microsoft Graph / Entra ID / Microsoft 365 security assessment framework.','Refactored 15+ modules.','Built authentication, enumeration, permissions, service-principal and artifact-collection workflows with SQLite persistence.']::text[],0),
  ('IT / Cybersecurity Experience','KPMG Tunisia','Prior experience',ARRAY['Network troubleshooting.','Active Directory and access-control administration.']::text[],1),
  ('Telecommunications Engineer — Cybersecurity','SUP''COM / EURECOM','Recently graduated',ARRAY['Hybrid focus across offensive and defensive security, cloud identity, networking and systems.','Portfolio spanning detection engineering, Android AppSec, DevSecOps, voice spoof detection and cryptography.']::text[],2);
commit;
