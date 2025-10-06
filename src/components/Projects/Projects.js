import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import dielux from "../../Assets/Projects/dielux.png";
import database from "../../Assets/Projects/database.png";
import opportune from "../../Assets/Projects/opportune.png";
import zksnark from "../../Assets/Projects/zksnark.png";
import voronoi from "../../Assets/Projects/voronoi.png";
import energy from "../../Assets/Projects/energy.png";

const projectData = [
  {
    imgPath: energy,
    title: "Energy Consumption Forecast",
    description:
      "Deep learning pipelines combining GRU/LSTM ensembles with feature engineering to forecast consumption, flag anomalies, and benchmark data-driven energy strategies.",
  },
  {
    imgPath: voronoi,
    title: "Voronoi Diagrams Generator",
    description:
      "Web-based visualiser that turns OpenStreetMap data into interactive Voronoi maps using Fortune's algorithm, aiding spatial analysis and network planning use-cases.",
  },
  {
    imgPath: zksnark,
    title: "ZK-Snark",
    description:
      "Lattice-based polynomial commitment implementation with post-quantum guarantees, fast verification, and transparent setup leveraging FRI-style folding and lattice homomorphism.",
  },
  {
    imgPath: opportune,
    title: "Opportune",
    description:
      "Full-stack mobile platform connecting IT talent and employers with AI-assisted chat, curated feeds, and Firebase-secured messaging to streamline hiring.",
  },
  {
    imgPath: dielux,
    title: "Die Lux",
    description:
      "Luxury fashion storefront built with React, dynamic product galleries, lookbook storytelling, and CMS-powered merchandising for a boutique brand.",
  },
  {
    imgPath: database,
    title: "Student Projects Portal",
    description:
      "Oracle-backed platform cataloguing SUP'COM capstone work with relational modelling, media storage, and granular query/report tooling for faculty oversight.",
  },
  {
    imgPath: dielux,
    title: "Discord RAT C2",
    description:
      "Research-grade remote access tool that provisions Discord channels, supports live tasking, persistence modes, and Defender bypass for controlled red-team drills.",
  },
  {
    imgPath: dielux,
    title: "Offensive Lab Environment",
    description:
      "Self-hosted pentest lab with segmented networks, intentionally vulnerable services, and automation scripts to rehearse exploit chains and blue-team detection tuning.",
  },
  {
    imgPath: dielux,
    title: "AI Red-Team Harness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim nisi at interdum porta et placerat urna.",
  },
];

const cardStyle = { blockSize: "200px", objectFit: "cover" };

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <div className="projects-intro">
          <h1 className="project-heading">Highlighted Projects</h1>
        </div>
        <Row style={{ justifyContent: "center", paddingBlockEnd: "10px" }}>
          {projectData.map(({ imgPath: img, title, description, ghLink, demoLink }) => (
            <Col md={4} className="project-card" key={title}>
              <ProjectCard
                imgPath={img}
                title={title}
                description={description}
                ghLink={ghLink}
                demoLink={demoLink}
                isBlog={false}
                style={cardStyle}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
