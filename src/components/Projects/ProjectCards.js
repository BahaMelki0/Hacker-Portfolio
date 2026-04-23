import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  FaChartLine,
  FaShieldAlt,
  FaDiscord,
  FaServer,
  FaTools,
  FaRobot,
  FaMapMarkedAlt,
  FaShoppingBag,
  FaGraduationCap,
  FaUserTie,
  FaSave,
  FaProjectDiagram,
  FaDatabase,
  FaFileAlt,
  FaCog,
  FaNetworkWired,
  FaBolt,
  FaLock,
} from "react-icons/fa";
import { SiPython, SiReact, SiFirebase } from "react-icons/si";

const tagIcons = {
  Python: <SiPython />,
  "Time-Series": <FaChartLine />,
  LSTM: <FaChartLine />,
  GRU: <FaChartLine />,
  "Fortune's Algorithm": <FaProjectDiagram />,
  OSM: <FaMapMarkedAlt />,
  Visualization: <FaChartLine />,
  "Zero-Knowledge": <FaShieldAlt />,
  Cryptography: <FaLock />,
  Rust: <FaBolt />,
  "React Native": <SiReact />,
  Firebase: <SiFirebase />,
  Recruitment: <FaUserTie />,
  React: <SiReact />,
  "E-commerce": <FaShoppingBag />,
  CMS: <FaFileAlt />,
  Oracle: <FaDatabase />,
  SQL: <FaDatabase />,
  Academic: <FaGraduationCap />,
  Discord: <FaDiscord />,
  C2: <FaNetworkWired />,
  Persistence: <FaSave />,
  Infrastructure: <FaServer />,
  Automation: <FaCog />,
  Ops: <FaTools />,
  "AI Security": <FaRobot />,
  LLM: <FaRobot />,
  Guardrails: <FaShieldAlt />,
};

const renderTagIcon = (tag) => tagIcons[tag] || <FaBolt />;

function ProjectCards({ title, short, description, tags = [], category, ghLink, demoLink, nda }) {
  return (
    <Card className="project-card-view" data-category={category}>
      <Card.Body>
        <div className="project-card-header">
          <div className="project-card-title-row">
            <Card.Title>{title}</Card.Title>
            {nda && <span className="project-nda-badge">NDA</span>}
          </div>
          {short && <p className="project-short">{short}</p>}
          {tags.length > 0 && (
            <ul className="project-tags" aria-label="Technologies used">
              {tags.map((tag) => (
                <li className="project-tag" key={tag}>
                  <span className="project-tag-icon" aria-hidden="true">
                    {renderTagIcon(tag)}
                  </span>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="project-description">
          <p>{description}</p>
          {(ghLink || demoLink) && (
            <div className="project-links">
              {ghLink && (
                <Button
                  variant="primary"
                  href={ghLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${title} on GitHub`}
                >
                  Code
                </Button>
              )}
              {demoLink && (
                <Button
                  variant="outline-primary"
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open the ${title} demo`}
                >
                  Demo
                </Button>
              )}
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
