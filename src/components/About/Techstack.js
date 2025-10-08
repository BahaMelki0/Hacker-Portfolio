import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython } from "react-icons/di";
import {
  SiRust,
  SiGnubash,
  SiWireshark,
  SiBurpsuite,
  SiKalilinux,
} from "react-icons/si";
import { FaCat, FaDragon, FaProjectDiagram, FaSkullCrossbones } from "react-icons/fa";
import "./stack.css";

const coreSecurity = [
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
];

const loopedItems = [...coreSecurity, ...coreSecurity];

function Techstack() {
  return (
    <div className="stack-marquee" aria-label="Core Security Stack">
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

export default Techstack;
