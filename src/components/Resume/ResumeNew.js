import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Melki_Bahaeddine.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";

const highlights = [
  "Telecommunications engineer completing the SUP'COM x EURECOM post-master with a focus on offensive security.",
  "Engineer bespoke tooling for red teams: Discord RAT C2, persistence modules, automated purple-team lab rebuilders.",
  "Lead KB4B3T retrospectives that codify network and application intrusion techniques for the Tunisian community.",
  "Run AI red-team experiments jailbreak suites, LLM guardrail evaluations, and detection tuning playbooks.",
  "Open to March 2025 internship opportunities across Europe in offensive security, red teaming, or AI security.",
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
