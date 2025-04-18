import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBlockStart: "30px",
              paddingBlockEnd: "20px", // Reduced bottom padding
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBlockEnd: "20px" }}>
              Get to know Baha
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              paddingBlockEnd: "20px", // Reduced bottom padding
            }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">Professional SKILLSET</h1>
        <Techstack />
        <h1 className="project-heading">Tools I use</h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
