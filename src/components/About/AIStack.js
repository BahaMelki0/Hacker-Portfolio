import React from "react";
import {
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import "./stack.css";

const aiFrameworks = [
  { icon: <SiTensorflow />, label: "TensorFlow" },
  { icon: <SiPytorch />, label: "PyTorch" },
  { icon: <SiKeras />, label: "Keras" },
  { icon: <SiScikitlearn />, label: "scikit-learn" },
  { icon: <SiOpencv />, label: "OpenCV" },
  { icon: <FaBrain />, label: "LangChain" },
];

const loopedItems = [...aiFrameworks, ...aiFrameworks];

function AIStack() {
  return (
    <div className="stack-marquee" aria-label="AI Research Toolkit">
      <div className="stack-track">
        {loopedItems.map(({ icon, label }, idx) => (
          <div className="stack-chip" key={`${label}-${idx}`}>
            <span className="stack-icon">{icon}</span>
            <span className="tech-name">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIStack;
