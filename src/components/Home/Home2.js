import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home2.css"; // Ensure your updated CSS is imported

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <div className="blur-background">
              <h1 className="home-about-heading">LET ME INTRODUCE MYSELF</h1>
              <p className="home-about-body">
                Post-master student in the SUP'COM × EURECOM double-degree program, I split my time between
                <strong> offensive security</strong>, <strong>AI red teaming</strong>, and co-leading{" "}
                <strong>KB4B3T</strong> — the Tunisian CTF crew that drills weekly for mastery rather than medals.
              </p>
              <p className="home-about-body">
                I enjoy building the tooling I need: Discord-based C2 implants, long-lived pentest labs,
                automation for malware analysis, and infrastructure that lets blue teams validate their detections.
              </p>
              <p className="home-about-body">
                Currently preparing for a March 2025 end-of-studies internship anywhere in Europe, ideally on an
                offensive security or AI red-team mission.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul
              className="home-about-social-links"
              aria-label="Social media profiles"
            >
              <li className="social-icons">
                <a
                  href="https://github.com/BahaMelki0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Visit Bahaeddine Melki on GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bahaeddine-melki/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Visit Bahaeddine Melki on LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <p>Feel free to connect with me.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
