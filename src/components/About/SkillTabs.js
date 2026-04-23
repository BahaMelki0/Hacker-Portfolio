import React, { useState } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython } from "react-icons/di";
import {
  SiRust, SiGnubash, SiWireshark, SiBurpsuite, SiKalilinux,
  SiGithub, SiDocker, SiJupyter, SiAnaconda,
  SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaCat, FaDragon, FaProjectDiagram, FaSkullCrossbones,
  FaTerminal, FaCloud, FaBrain, FaShieldAlt, FaWrench, FaRobot,
} from "react-icons/fa";
import "./SkillTabs.css";

const tabs = [
  {
    id: "security",
    label: "Security",
    icon: <FaShieldAlt />,
    items: [
      { icon: <DiPython />, label: "Python" },
      { icon: <CgCPlusPlus />, label: "C++" },
      { icon: <SiRust />, label: "Rust" },
      { icon: <SiGnubash />, label: "Bash" },
      { icon: <SiKalilinux />, label: "Kali Linux" },
      { icon: <SiBurpsuite />, label: "Burp Suite" },
      { icon: <FaCat />, label: "Hashcat" },
      { icon: <FaDragon />, label: "Ghidra" },
      { icon: <FaProjectDiagram />, label: "BloodHound" },
      { icon: <FaSkullCrossbones />, label: "Mimikatz" },
      { icon: <SiWireshark />, label: "Wireshark" },
    ],
  },
  {
    id: "tools",
    label: "Tooling",
    icon: <FaWrench />,
    items: [
      { icon: <VscVscode />, label: "VS Code" },
      { icon: <SiGithub />, label: "GitHub" },
      { icon: <SiDocker />, label: "Docker" },
      { icon: <SiJupyter />, label: "Jupyter" },
      { icon: <SiAnaconda />, label: "Anaconda" },
      { icon: <FaCloud />, label: "Azure" },
      { icon: <FaTerminal />, label: "tmux" },
      { icon: <FaCloud />, label: "AWS Lab" },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: <FaRobot />,
    items: [
      { icon: <SiTensorflow />, label: "TensorFlow" },
      { icon: <SiPytorch />, label: "PyTorch" },
      { icon: <SiKeras />, label: "Keras" },
      { icon: <SiScikitlearn />, label: "scikit-learn" },
      { icon: <SiOpencv />, label: "OpenCV" },
      { icon: <FaBrain />, label: "LangChain" },
    ],
  },
];

function SkillTabs() {
  const [active, setActive] = useState("security");

  const activeTab = tabs.find((t) => t.id === active);

  return (
    <div className="skill-tabs-wrapper">
      <div className="skill-tabs-header" role="tablist" aria-label="Skill categories">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            className={`skill-tab-btn ${active === tab.id ? "active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            <span className="skill-tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="skill-grid"
        role="tabpanel"
        aria-label={`${activeTab.label} skills`}
        key={active}
      >

        {activeTab.items.map(({ icon, label }) => (
          <div className="skill-chip reveal" key={label}>
            <span className="skill-chip-icon">{icon}</span>
            <span className="skill-chip-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillTabs;
