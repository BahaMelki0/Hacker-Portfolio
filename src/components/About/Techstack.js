import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
  DiLinux,
} from "react-icons/di";
import { 
  SiFirebase, 
  SiRust, 
  SiFlutter, 
  SiGnubash, 
  SiWireshark, 
} from "react-icons/si";
import './stack.css';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <CgCPlusPlus />
          <span className="tech-name">C++</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiPython />
          <span className="tech-name">Python</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiJava />
          <span className="tech-name">Java</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiPhp />
          <span className="tech-name">PHP</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiRust />
          <span className="tech-name">Rust</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiReact />
          <span className="tech-name">React</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiFlutter />
          <span className="tech-name">Flutter</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiMongodb />
          <span className="tech-name">MongoDB</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiFirebase />
          <span className="tech-name">Firebase</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiGit />
          <span className="tech-name">Git</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiLinux />
          <span className="tech-name">Linux</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiGnubash />
          <span className="tech-name">Bash</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiWireshark />
          <span className="tech-name">Wireshark</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
