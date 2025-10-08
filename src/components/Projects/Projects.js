import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

const projectData = [
  {
    title: "Energy Consumption Forecast",
    short: "GRU/LSTM ensemble for predicting energy usage",
    description:
      "Deep learning pipelines combining GRU/LSTM ensembles with feature engineering to forecast consumption, flag anomalies, and benchmark data-driven energy strategies.",
    tags: ["Python", "LSTM", "GRU", "Time-Series"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Voronoi Diagrams Generator",
    short: "Spatial analysis tool using Fortune's algorithm",
    description:
      "Web-based visualiser that turns OpenStreetMap data into interactive Voronoi maps using Fortune's algorithm, aiding spatial analysis and network planning use-cases.",
    tags: ["Fortune's Algorithm", "OSM", "Visualization"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "ZK-Snark",
    short: "Post-quantum polynomial commitments",
    description:
      "Lattice-based polynomial commitment implementation with post-quantum guarantees, fast verification, and transparent setup leveraging FRI-style folding and lattice homomorphism.",
    tags: ["Zero-Knowledge", "Cryptography", "Rust"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Opportune",
    short: "Mobile platform for matching IT talent",
    description:
      "Full-stack mobile platform connecting IT talent and employers with AI-assisted chat, curated feeds, and Firebase-secured messaging to streamline hiring.",
    tags: ["React Native", "Firebase", "Recruitment"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Die Lux",
    short: "Boutique fashion storefront",
    description:
      "Luxury fashion storefront built with React, dynamic product galleries, lookbook storytelling, and CMS-powered merchandising for a boutique brand.",
    tags: ["React", "E-commerce", "CMS"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Student Projects Portal",
    short: "Oracle-backed archive for SUP'COM capstones",
    description:
      "Oracle-backed platform cataloguing SUP'COM capstone work with relational modelling, media storage, and granular query/report tooling for faculty oversight.",
    tags: ["Oracle", "SQL", "Academic"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Discord RAT C2",
    short: "Discord-driven implant for red-team labs",
    description:
      "Research-grade remote access tool that provisions Discord channels, supports live tasking, persistence modes, and Defender bypass for controlled red-team drills.",
    tags: ["Discord", "C2", "Persistence"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "Offensive Lab Environment",
    short: "Dedicated purple-team playground",
    description:
      "Self-hosted pentest lab with segmented networks, intentionally vulnerable services, and automation scripts to rehearse exploit chains and blue-team detection tuning.",
    tags: ["Infrastructure", "Automation", "Ops"],
    ghLink: null,
    demoLink: null,
  },
  {
    title: "AI Red-Team Harness",
    short: "LLM jailbreak + guardrail testbed",
    description:
      "Experimental harness for testing LLM guardrails, jailbreak prompts, and autonomy boundaries in AI security research.",
    tags: ["AI Security", "LLM", "Guardrails"],
    ghLink: null,
    demoLink: null,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <div className="projects-intro">
          <h1 className="project-heading">Highlighted <strong className="purple">Projects</strong></h1>
          <p>A snapshot of offensive tooling, research builds, and product work.</p>
        </div>
        <Row className="project-grid-row">
          {projectData.map(({ title, short, description, tags, ghLink, demoLink }) => (
            <Col md={4} className="project-card" key={title}>
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
