import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv, SiWeightsandbiases } from "react-icons/si";
import "./stack.css";

const aiFrameworks = [
  { icon: <SiTensorflow />, label: "TensorFlow" },
  { icon: <SiPytorch />, label: "PyTorch" },
  { icon: <SiKeras />, label: "Keras" },
  { icon: <SiScikitlearn />, label: "scikit-learn" },
  { icon: <SiOpencv />, label: "OpenCV" },
];

function AIStack() {
  return (
    <Row className="stack-row">
      {aiFrameworks.map(({ icon, label }) => (
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

export default AIStack;
