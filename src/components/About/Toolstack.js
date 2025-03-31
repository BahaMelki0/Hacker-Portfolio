import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscVscode } from "react-icons/vsc";
import {
  SiGithub,
  SiDocker,
  SiJupyter,
  SiAnaconda,
} from "react-icons/si";
import "./stack.css";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <VscVscode />
          <span className="tech-name">VS Code</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiGithub />
          <span className="tech-name">GitHub</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiDocker />
          <span className="tech-name">Docker</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiJupyter />
          <span className="tech-name">Jupyter</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiAnaconda />
          <span className="tech-name">Anaconda</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
