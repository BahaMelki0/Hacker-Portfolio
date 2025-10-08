import React from "react";
import { Container } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <div className="home-hero-row">
            <div className="home-header">
              <h1 style={{ paddingBlockEnd: "15px" }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  {"\u{1F44B}"}
                </span>
              </h1>
              <h1 className="heading-name">I'm Bahaeddine Melki</h1>
              <p className="heading-tagline">
                Offensive security engineer building Discord C2s and adversarial AI drills for KB4B3T and partner teams.
              </p>
              <div className="typing-wrapper">
                <Type />
              </div>
            </div>
            <div className="home-image-container">
              <img
                src={homeLogo}
                alt="Illustration of Bahaeddine Melki hacking on a laptop"
                className="home-image"
              />
            </div>
          </div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
