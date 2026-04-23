import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home2.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <div className="terminal-box">
              <div className="terminal-titlebar">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">baha@eurecom ~ whoami</span>
              </div>
              <div className="terminal-body">
                <p className="terminal-prompt">
                  <span>❯</span> cat about.txt
                </p>
                <p className="home-about-body">
                  I’m Bahaeddine — a Post-Master’s student at EURECOM, focused on Offensive Security.
                  Years building carrier-grade networks taught me to read packet flows the way I read training programs: precisely and with discipline.
                </p>
                <p className="home-about-body">
                  I channel that same mindset into <strong>KB4B3T</strong>, our Tunisian CTF team and cybersecurity collective where we play weekly competitions,
                  exchange techniques, and explore real-world attack and defense concepts together.
                </p>
                <p className="home-about-body">
                  Outside the lab I train in the gym — the focus and routine that demands mirrors exactly what long red-team engagements require.
                </p>
                <p className="home-about-body">
                  I'm currently a pentest engineer at <strong>RandoriSec</strong>, part of the forfait pentest team, where I'm expanding the internal
                  offensive arsenal with tooling focused on Azure red team operations — enumerating RBAC assignments, over-privileged service principals,
                  managed identity scopes and conditional access policy gaps to surface exploitable attack paths across Microsoft Entra ID tenants.
                </p>
                <p className="terminal-prompt" style={{ marginTop: "16px", marginBottom: 0 }}>
                  <span>❯</span> <span style={{ animation: "blink 1s step-end infinite" }}>█</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links" aria-label="Social media profiles">
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
            <p>Let's connect.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
