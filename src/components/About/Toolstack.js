import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscVscode } from "react-icons/vsc";
import {
  SiGithub,
  SiDocker,
  SiJupyter,
  SiAnaconda,
  SiKalilinux,
  SiBurpsuite,
} from "react-icons/si";
import "./stack.css";

const tools = [
  { icon: <VscVscode />, label: "VS Code" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiJupyter />, label: "Jupyter" },
  { icon: <SiAnaconda />, label: "Anaconda" },
];

function Toolstack() {
  return (
    <Row className="stack-row">
      {tools.map(({ icon, label }) => (
        <Col xs={6} md={3} className="tech-icons" key={label}>
          <div>
            {icon}
            <span className="tech-name">{label}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
