import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython, DiLinux } from "react-icons/di";
import {
  SiRust,
  SiGnubash,
  SiWireshark,
  SiBurpsuite,
  SiKalilinux,
  SiNmap,
  SiNikto,
  SiMetasploit,
} from "react-icons/si";
import { FaCat, FaDragon, FaProjectDiagram, FaSkullCrossbones, FaBullseye } from "react-icons/fa";
import "./stack.css";

const coreSecurity = [
  { icon: <DiPython />, label: "Python" },
  { icon: <CgCPlusPlus />, label: "C++" },
  { icon: <SiRust />, label: "Rust" },
  { icon: <SiGnubash />, label: "Bash" },
  { icon: <SiKalilinux />, label: "Kali Linux" },
  { icon: <SiMetasploit />, label: "Metasploit" },
  { icon: <SiBurpsuite />, label: "Burp Suite" },
  { icon: <FaCat />, label: "Hashcat" },
  { icon: <FaDragon />, label: "Ghidra" },
  { icon: <FaProjectDiagram />, label: "BloodHound" },
  { icon: <FaSkullCrossbones />, label: "Mimikatz" },
  { icon: <SiWireshark />, label: "Wireshark" },
];

function Techstack() {
  return (
    <Row className="stack-row">
      {coreSecurity.map(({ icon, label }) => (
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

export default Techstack;
