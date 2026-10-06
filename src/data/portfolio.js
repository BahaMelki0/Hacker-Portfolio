const PORTFOLIO = {
  "name": "Bahaeddine Melki",
  "handle": "bmelki",
  "locale": "Open to roles in France",
  "taglines": [
    "Recently graduated Telecommunications Engineer.",
    "Cybersecurity across cloud identity, detection and offensive security.",
    "Building security tools from evidence to investigation.",
    "Open to CDI / CDD opportunities in France."
  ],
  "terminalDemo": [
    {
      "cmd": "whoami",
      "out": "Bahaeddine Melki | Telecommunications Engineer | Cybersecurity"
    },
    {
      "cmd": "cat focus.txt",
      "out": "Cloud & Identity / SOC & Detection / OffSec / AppSec / Networking"
    },
    {
      "cmd": "ls projects/",
      "out": "Detection Forge / APK Sentinel / JobForge / SecurePipeline"
    },
    {
      "cmd": "cat certifications.txt",
      "out": "SC-200 / CRTP / CARTP / eJPT / PT1 | CPTS ongoing"
    }
  ],
  "bio": "Recently graduated Telecommunications Engineer specialized in Cybersecurity, combining security engineering, Cloud & Identity, SOC/Detection, offensive security, AppSec/DevSecOps, networking and low-level systems security.\n\nDuring my end-of-studies internship at RandoriSec, I worked on an internal Microsoft Graph / Entra ID / Microsoft 365 security assessment framework, refactoring 15+ modules and building authentication, enumeration, permissions, service-principal, artifact-collection and SQLite persistence workflows. My prior experience at KPMG Tunisia covered network troubleshooting, Active Directory and access-control administration.\n\nI am seeking CDI/CDD opportunities in France where I can investigate, automate and build practical security tooling.",
  "profile": [
    {
      "key": "role",
      "val": "Telecommunications Engineer | Cybersecurity"
    },
    {
      "key": "status",
      "val": "Recently graduated"
    },
    {
      "key": "focus",
      "val": "Security Engineering / Cloud & Identity / SOC / OffSec / AppSec"
    },
    {
      "key": "languages",
      "val": "French / English / Arabic"
    },
    {
      "key": "opportunities",
      "val": "CDI / CDD in France"
    }
  ],
  "skills": {
    "Cloud & Identity": [
      "Entra ID",
      "Microsoft Graph",
      "Microsoft 365",
      "IAM",
      "OAuth / OIDC",
      "Azure",
      "Active Directory"
    ],
    "SOC & Detection": [
      "Microsoft Sentinel",
      "KQL",
      "Defender XDR",
      "Windows Event Logs",
      "Sysmon",
      "MITRE ATT&CK"
    ],
    "OffSec & AppSec": [
      "Pentesting",
      "AD attack paths",
      "Privilege escalation",
      "Lateral movement",
      "Threat modeling",
      "Vulnerability management",
      "DevSecOps"
    ],
    "Engineering": [
      "Python",
      "PowerShell",
      "Bash",
      "Rust",
      "C/C++",
      "SQL",
      "Networking",
      "Low-level systems security"
    ],
    "Certifications": [
      "SC-200",
      "CRTP",
      "CARTP",
      "eJPT",
      "PT1",
      "CPTS (ongoing)"
    ]
  },
  "projects": [
    {
      "id": "detection-forge",
      "name": "Detection Forge",
      "cat": "Security",
      "year": "",
      "nda": false,
      "summary": "Case-based detection engineering for Entra ID, Windows and Sysmon logs, with YAML rules, hybrid correlation, cited local AI analysis and investigation reports.",
      "stack": [
        "Python",
        "Entra ID",
        "Sysmon",
        "Ollama"
      ],
      "status": "active",
      "ghLink": "https://github.com/BahaMelki0/Detection-Forge"
    },
    {
      "id": "apk-sentinel",
      "name": "APK Sentinel",
      "cat": "Security",
      "year": "",
      "nda": false,
      "summary": "Android AppSec workspace combining static evidence, dependency intelligence, traffic interception and replay, release comparison and tester-validated reporting.",
      "stack": [
        "Python",
        "Android",
        "Flask",
        "SARIF"
      ],
      "status": "active",
      "ghLink": "https://github.com/BahaMelki0/Apk-sentinel"
    },
    {
      "id": "jobforge",
      "name": "JobForge",
      "cat": "AI",
      "year": "",
      "nda": false,
      "summary": "Local-first discovery and application workspace for junior IT and cybersecurity roles in France: scheduled collection, explainable ranking, local AI drafting and application tracking.",
      "stack": [
        "Python",
        "FastAPI",
        "SQLite",
        "Ollama"
      ],
      "status": "active",
      "ghLink": "https://github.com/BahaMelki0/jobforge"
    },
    {
      "id": "securepipeline",
      "name": "SecurePipeline",
      "cat": "Security",
      "year": "",
      "nda": false,
      "summary": "DevSecOps project integrating security gates into CI workflows to make security checks part of the development pipeline.",
      "stack": [
        "GitHub Actions",
        "DevSecOps",
        "Security automation"
      ],
      "status": "active",
      "ghLink": "https://github.com/BahaMelki0/Secure-Pipeline"
    },
    {
      "id": "syscall-graph",
      "name": "Windows 11 Call-Graph Toolkit",
      "cat": "Systems",
      "year": "",
      "nda": false,
      "summary": "Windows 11 call-graph and reverse-engineering toolkit for exploring DLL exports, syscall relationships and low-level systems security.",
      "stack": [
        "Python",
        "Ghidra",
        "Dash",
        "PowerShell"
      ],
      "status": "active",
      "ghLink": "https://github.com/BahaMelki0/Win11Lib_Call_Graph_Construction"
    },
    {
      "id": "llm-spoof",
      "name": "Voice Spoof Detection",
      "cat": "AI",
      "year": "",
      "nda": false,
      "summary": "Research project exploring LLM-based voice spoof detection and the intersection of machine learning and security.",
      "stack": [
        "Python",
        "Machine learning",
        "LLMs"
      ],
      "status": "active",
      "ghLink": "https://github.com/BahaMelki0/llm-spoof-detection-asvspoof5"
    },
    {
      "id": "zk-research",
      "name": "ZK-SNARK and Polynomial Commitments",
      "cat": "Systems",
      "year": "",
      "nda": false,
      "summary": "Research into zero-knowledge proofs, ZK-SNARKs and polynomial commitment techniques.",
      "stack": [
        "Cryptography",
        "ZK-SNARK",
        "Polynomial commitments"
      ],
      "status": "research",
      "ghLink": "https://github.com/BahaMelki0/ZK_Snark"
    }
  ],
  "experience": [
    {
      "role": "End-of-studies Cybersecurity Internship",
      "org": "RandoriSec",
      "date": "Completed internship",
      "bullets": [
        "Worked on an internal Microsoft Graph / Entra ID / Microsoft 365 security assessment framework.",
        "Refactored 15+ modules.",
        "Built authentication, enumeration, permissions, service-principal and artifact-collection workflows with SQLite persistence."
      ]
    },
    {
      "role": "IT / Cybersecurity Experience",
      "org": "KPMG Tunisia",
      "date": "Prior experience",
      "bullets": [
        "Network troubleshooting.",
        "Active Directory and access-control administration."
      ]
    },
    {
      "role": "Telecommunications Engineer — Cybersecurity",
      "org": "SUP'COM / EURECOM",
      "date": "Recently graduated",
      "bullets": [
        "Hybrid focus across offensive and defensive security, cloud identity, networking and systems.",
        "Portfolio spanning detection engineering, Android AppSec, DevSecOps, voice spoof detection and cryptography."
      ]
    }
  ],
  "contact": {
    "email": "bahaeddine.melki@eurecom.fr",
    "github": "github.com/BahaMelki0",
    "linkedin": "linkedin.com/in/bahaeddine-melki",
    "pgp": null
  }
};

export const PROJECT_CATS = ["All", "Security", "AI", "Systems"];
export default PORTFOLIO;
