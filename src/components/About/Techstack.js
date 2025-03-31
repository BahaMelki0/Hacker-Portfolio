import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython, DiLinux, DiPhp, DiRuby } from "react-icons/di";
import {
  SiMysql,
  SiRust,
  SiGnubash,
  SiWireshark,
  SiTensorflow,
  SiPytorch,
  SiKeras,
} from "react-icons/si";
import "./stack.css";

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
          <DiRuby />
          <span className="tech-name">Ruby</span>
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
          <SiMysql />
          <span className="tech-name">MySQL</span>
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
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiTensorflow />
          <span className="tech-name">TensorFlow</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiPytorch />
          <span className="tech-name">PyTorch</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <SiKeras />
          <span className="tech-name">Keras</span>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
