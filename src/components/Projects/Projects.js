import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dielux from "../../Assets/Projects/dielux.png";
import database from "../../Assets/Projects/database.png";
import opportune from "../../Assets/Projects/opportune.png";
import zksnark from "../../Assets/Projects/zksnark.png";
import voronoi from "../../Assets/Projects/voronoi.png";
import energy from "../../Assets/Projects/energy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I worked on so far.
        </p>
        {/* Replaced paddingBottom with paddingBlockEnd */}
        <Row style={{ justifyContent: "center", paddingBlockEnd: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zksnark}
              isBlog={false}
              title="ZK-Snark"
              description="This project implements a lattice-based polynomial commitment scheme that provides post-quantum security, fast verification, and transparent setup by leveraging techniques like FRI-style folding and lattice homomorphism to significantly reduce proof sizes."
              // Replaced height with blockSize
              style={{ blockSize: "200px", objectFit: "cover" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={energy}
              isBlog={false}
              title="Energy Consumption Prediction"
              description="This project leverages deep learning and machine learning models—including GRU, LSTM, and Random Forest—to predict energy consumption from historical datasets while addressing challenges like limited data size and external variable integration."
              style={{ blockSize: "200px", objectFit: "cover" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opportune}
              isBlog={false}
              title="Opportune"
              description="Oppor’Tune is a comprehensive mobile platform that connects IT job seekers and employers by integrating AI-driven chatbots, real-time technology news, and secure Firebase backend services to streamline the recruitment process."
              style={{ blockSize: "200px", objectFit: "cover" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dielux}
              isBlog={false}
              title="Die Lux"
              description="Used the plant disease dataset from Kaggle and trained an image classifier model using the 'PyTorch' framework, employing CNN and Transfer Learning with 38 classes to detect diseased and healthy leaves with 98% accuracy using a Resnet34 pretrained model."
              style={{ blockSize: "200px", objectFit: "cover" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voronoi}
              isBlog={false}
              title="Voronoi Diagrams Generator"
              description="Implementation of Fortune’s algorithm to generate Voronoi diagrams from geographic data extracted from OpenStreetMap by assigning an age-based metric to each site."
              style={{ blockSize: "200px", objectFit: "cover" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={database}
              isBlog={false}
              title="Students-Projects Database"
              description="Comprehensive design and implementation of a relational database system for managing Sup'COM project data using Oracle, featuring detailed data modeling, SQL query demonstrations, and BLOB image integration."
              style={{ blockSize: "200px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
