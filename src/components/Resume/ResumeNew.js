import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Melki_Bahaeddine.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";

const highlights = [
  "Telecommunications engineering student completing the SUP'COM × EURECOM Post-Master’s program in Security of Computer Systems and Communications.",
  "Specialized in offensive security, network and application penetration testing, and adversarial AI research.",
  "Active member of KB4B3T — a Tunisian CTF team competing weekly and sharing practical cybersecurity insights with the local community.",
  "Certified Junior Penetration Tester (eJPT) and TryHackMe PT1, currently preparing for Hack The Box CPTS certification to deepen red-team expertise.",
  "Exploring how AI can both power and defend against cyber attacks.",
  "Open to end-of-studies internship opportunities across Europe in offensive security, red teaming, or AI-driven cyber defense.",
];

function ResumeNew() {
  return (
    <div className="resume-page">
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={8} className="resume-description">
            <h2 className="resume-heading">
              In a Nutshell :
              <span className="emoji" role="img" aria-label="compass">
                {"\u{1F9ED}"}
              </span>
            </h2>
            <ul className="resume-points">
              {highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            style={{ maxWidth: "250px" }}
            aria-label="Download Bahaeddine Melki resume PDF"
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
