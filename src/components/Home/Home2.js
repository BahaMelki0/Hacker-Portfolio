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
                I'm a highly driven, solution-oriented person with an affinity for{" "}
                <strong>CyberSecurity</strong> and <strong>AI</strong>.
                <br />
                <br />
                I am fluent in languages like{" "}
                <strong>Python</strong>, <strong>C++</strong>, and <strong>JavaScript</strong>.
                <br />
                <br />
                My fields of interest include:&nbsp;
                <i>
                  <strong>Pentesting</strong>, <strong>DevSecOps</strong>, and{" "}
                  <strong>Machine Learning</strong>.
                </i>
                <br />
                <br />
                Whenever possible, I enjoy developing and experimenting with
                malicious applications in a controlled environment to better
                understand the thought process behind malicious scripts and enhance
                my cybersecurity skills.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BahaMelki0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
