import React from "react";
import {
  SiGithub,
  SiDocker,
  SiJupyter,
  SiAnaconda,
  SiKalilinux,
  SiBurpsuite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaTerminal, FaCloud } from "react-icons/fa";
import "./stack.css";

const tools = [
  { icon: <VscVscode />, label: "VS Code" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiJupyter />, label: "Jupyter" },
  { icon: <SiAnaconda />, label: "Anaconda" },
  { icon: <SiKalilinux />, label: "Kali Linux" },
  { icon: <SiBurpsuite />, label: "Burp Suite" },
  { icon: <FaTerminal />, label: "tmux" },
  { icon: <FaCloud />, label: "AWS Lab" },
];

const loopedItems = [...tools, ...tools];

function Toolstack() {
  return (
    <div className="stack-marquee" aria-label="Operational Tooling">
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

export default Toolstack;
