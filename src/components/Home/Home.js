import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBlockEnd: "15px" }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  {"\u{1F44B}"}
                </span>
              </h1>
              <h1 className="heading-name">I'm Bahaeddine Melki</h1>
              <p className="heading-tagline">
                Cybersecurity post-master (SUP'COM × EURECOM) and KB4B3T co-founder pursuing offensive security & AI red-team work.
              </p>
              <div className="typing-wrapper">
                <Type />
              </div>
            </Col>
            <Col md={5} className="home-image-container">
              <img
                src={homeLogo}
                alt="Illustration of Bahaeddine Melki hacking on a laptop"
                className="img-fluid home-image"
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
