import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME INTRODUCE MYSELF
            </h1>
            <p className="home-about-body">
              I'm a highly driven, solution-oriented person with an affinity for{" "}
              CyberSecurity and{" "}
              AI.
              <br />
              <br />I am fluent in languages like{" "}
              Python, C++, and Rust.
              <br />
              <br />
              My fields of interest include:&nbsp;
              <i>
                Pentesting,{" "}
                DevSecOps, and{" "}
                Machine Learning.
              </i>
              <br />
              <br />
              Whenever possible, I enjoy developing and experimenting with{" "}
              malicious applications  in a controlled environment
              to better understand the thought process behind malicious scripts and
              enhance my cybersecurity skills.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ width: "100%", maxWidth: "250px", height: "auto" }}
              />
            </Tilt>
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
            <p>
              Feel free to connect with me.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
