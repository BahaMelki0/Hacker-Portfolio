import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Melki_Bahaeddine.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";

function ResumeNew() {
  return (
    <div className="resume-page">
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={8} className="resume-description">
            <h2 className="resume-heading">
              My Professional Journey{" "}
              <span className="emoji" role="img" aria-label="shield">
                🛡️
              </span>
            </h2>
            <p>
              I specialize in <strong>Cybersecurity</strong> and <strong>AI-driven solutions</strong>, focusing on areas like <strong>Pentesting</strong>, <strong>Cryptography</strong>{" "}
              <span className="emoji" role="img" aria-label="lock">
                🗝️
              </span>{" "}
              and <strong>Digital Forensics</strong> (DFIR). My experience includes designing secure systems, identifying vulnerabilities, and developing automation tools to enhance system security and efficiency.{" "}
              <span className="emoji" role="img" aria-label="laptop">
                💻
              </span>
            </p>
            <p>
              My background includes <strong>Web and Mobile Development</strong>, where I build responsive, secure applications. I enjoy developing end-to-end solutions that integrate modern web technologies with robust backend services.{" "}
              <span className="emoji" role="img" aria-label="mobile">
                📱
              </span>
            </p>
            <p>
              I am also passionate about <strong>Machine Learning</strong>, applying AI models to solve real-world problems and enhance security protocols. My projects blend cryptographic techniques with AI to create innovative, secure solutions.{" "}
              <span className="emoji" role="img" aria-label="brain">
                🧠
              </span>
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download My CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
