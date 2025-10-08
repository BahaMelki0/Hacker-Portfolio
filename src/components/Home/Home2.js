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
            <div className="blur-background">
              <h1 className="home-about-heading">LET ME INTRODUCE MYSELF</h1>
              <p className="home-about-body">
                I'm Bahaeddine, a telecommunications engineer finishing the SUP'COM x EURECOM double-degree post-master.
                Years of designing carrier-grade networks taught me to read packet flows the same way I read anatomy in the gym.
              </p>
              <p className="home-about-body">
                Today I pour that mindset into <strong>KB4B3T</strong>: we script Discord-based C2 implants, map Active Directory forests,
                and publish learning playbooks so the Tunisian community can replay our drills instead of copying write-ups.
              </p>
              <p className="home-about-body">
                When I'm not breaking lab machines I'm in the weight room, keeping the discipline that long red-team operations demand.
                I'm actively seeking a March 2025 offensive security or AI red-team internship anywhere in Europe.
              </p>
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
