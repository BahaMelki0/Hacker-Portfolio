import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBlockEnd: "15px" }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👾
                </span>
              </h1>
              <h1 className="heading-name">I'm Bahaeddine Melki</h1>
              <div style={{ padding: "50px", textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBlockEnd: "20px" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-image"
                style={{
                  maxBlockSize: "450px",  // Logical equivalent of maxHeight
                  inlineSize: "100%",      // Logical equivalent of width
                  objectFit: "contain",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.filter =
                    "hue-rotate(100deg) saturate(300%) brightness(110%)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter =
                    "hue-rotate(100deg) saturate(200%) brightness(90%)";
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
