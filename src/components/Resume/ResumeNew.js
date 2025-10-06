import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Melki_Bahaeddine.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";

const highlights = [
  "SUP'COM x EURECOM double-degree post-master specialising in offensive security and AI red teaming.",
  "Co-founded KB4B3T, orchestrating weekly CTF drills, red-team labs, and retro sessions for the Tunisian scene.",
  "Builds bespoke tooling : Discord RAT C2, persistence kits, malware sandboxes ; to sharpen detection and response.",
  "Explores AI safety by stress-testing LLM agents, jailbreak tooling, and guardrail evaluation pipelines.",
  "Ready for a March 2025 offensive security or AI red-team internship anywhere in Europe.",
];

function ResumeNew() {
  return (
    <div className="resume-page">
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={8} className="resume-description">
            <h2 className="resume-heading">
              Current Focus
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
