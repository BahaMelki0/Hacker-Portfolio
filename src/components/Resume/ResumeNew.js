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
              I specialize in <strong>Cybersecurity</strong> and{" "}
              <strong>AI-driven solutions</strong>, focusing on areas like{" "}
              <strong>Pentesting</strong>, <strong>Cryptography</strong>{" "}
              <span className="emoji" role="img" aria-label="lock">
                🗝️
              </span>{" "}
              and <strong>Digital Forensics</strong> (DFIR). My experience includes designing secure systems, identifying vulnerabilities, and developing automation tools to enhance system security and efficiency.{" "}
              <span className="emoji" role="img" aria-label="laptop">
                💻
              </span>
            </p>
            <p>
              I also have a keen interest in offensive security, with hands-on experience in <strong>pwning</strong> and <strong>malware development</strong>. I analyze vulnerabilities, craft exploits, and reverse-engineer binaries to understand and outsmart system defenses—giving me a comprehensive perspective on both offensive and defensive security.
              <span className="emoji" role="img" aria-label="skull">
                💀
              </span>
            </p>
            <p>
              Additionally, I am passionate about <strong>Machine Learning</strong> and its application in cybersecurity. I develop AI models to detect anomalies, predict security threats, and optimize defensive strategies, blending cryptographic techniques with intelligent systems to create innovative, secure solutions.{" "}
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
