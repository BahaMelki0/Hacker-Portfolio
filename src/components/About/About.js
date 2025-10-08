import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AIStack from "./AIStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} className="about-text-col">
            <div className="about-blur-card">
              <h1 className="about-heading">Get to know Baha</h1>
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{
              paddingBlockEnd: "20px",
            }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="Illustration of Bahaeddine working on a laptop"
              className="img-fluid"
            />
          </Col>
        </Row>
        <h1 className="project-heading">Core Security Stack</h1>
          <Techstack />
        <h1 className="project-heading">Operational Tooling</h1>
          <Toolstack />
        <h1 className="project-heading">AI Toolkit</h1>
          <AIStack />
      </Container>
    </Container>
  );
}

export default About;
