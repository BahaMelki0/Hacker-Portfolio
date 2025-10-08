import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

const projectData = [
  {
    title: "Offensive Lab Environment",
    short: "Segmented lab for malware RE & PoC testing",
    description:
      "Self-hosted, segmented pentest playground for reverse engineering, safe PoC validation and solving CTF/HTB/THM challenges in controlled conditions to push more safer testing.",
    tags: ["Pentest Lab", "Reverse Engineering", "Automation"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "ZK-SNARK Implementation",
    short: "Fiat–Shamir zk-SNARK implementation in Rust",
    description:
      "Semester project implementing polynomial commitments and a Fiat–Shamir non-interactive proof flow in Rust, with tests and a transparent setup for reproducible experiments.",
    tags: ["Zero-Knowledge", "Cryptography", "Rust"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "LLM-Spoof Detection (ASVspoof-5)",
    short: "ASR + LLM pipeline for voice spoof detection",
    description:
      "Detection pipeline for the ASVspoof-5 task using Wav2Vec2 ASR transcripts and fine-tuned language models (DistilBERT / Whisper variants) to identify spoofed speech and benchmark performance.",
    tags: ["ASVspoof", "LLM", "Wav2Vec2"],
    ghLink: "https://github.com/BahaMelki0/llm-spoof-detection-asvspoof5",
    demoLink: null,
  },
  {
    title: "Red-Team Implant - Discord RAT",
    short: "Lab-only implant to study evasion & detection",
    description:
      "Research-grade implant developed for controlled lab experiments to investigate evasion techniques and detection tuning; strictly used in private, ethical testbeds.",
    tags: ["Red Team", "Detection", "Research"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Energy Consumption Forecast",
    short: "GRU/LSTM ensemble for energy prediction",
    description:
      "Time-series pipeline using GRU/LSTM ensembles and feature engineering to forecast facility energy consumption and produce tunable models for anomaly detection.",
    tags: ["Time-Series", "LSTM", "GRU"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Voronoi Diagrams Generator",
    short: "Fortune's algorithm C++ implementation",
    description:
      "C++ implementation of Fortune’s algorithm to generate interactive Voronoi diagrams — a project focused on computational geometry and spatial analysis.",
    tags: ["C++", "Algorithms", "Computational Geometry"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Student Projects Portal",
    short: "Oracle-backed archive for SUP'COM projects",
    description:
      "Database system converting legacy Excel inventories into a searchable, maintainable platform with update controls and reporting tools for faculty oversight.",
    tags: ["Oracle", "SQL", "Data Platform"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Opportune",
    short: "Mobile app matching IT talent & offers",
    description:
      "Full-stack mobile platform connecting IT candidates and employers with AI-assisted chat, curated feeds and Firebase-secured messaging to streamline hiring.",
    tags: ["React Native", "Firebase", "Product"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Die Lux",
    short: "Luxury storefront — front-end showcase",
    description:
      "React-based luxury e-commerce frontend featuring dynamic galleries, lookbook storytelling and CMS-driven merchandising for boutique retail experiences.",
    tags: ["React", "E-commerce", "UI"],
    ghLink: null,
    demoLink: null,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <div className="projects-intro">
          <h1 className="project-heading">
            Highlighted <strong className="purple">Projects</strong>
          </h1>
          <p>A snapshot of what i have done.</p>
        </div>
        <Row className="project-grid-row justify-content-center">
          {projectData.map(({ title, short, description, tags, ghLink, demoLink }) => (
            <Col xs={12} md={6} lg={4} className="project-card" key={title}>
              <ProjectCard
                title={title}
                short={short}
                description={description}
                tags={tags}
                ghLink={ghLink}
                demoLink={demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
