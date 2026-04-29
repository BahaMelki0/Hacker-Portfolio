import React, { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import DecryptText from "../DecryptText";
import "./Projects.css";

const PROJECT_CATS = ["All", "Security", "AI", "Systems", "Web"];

function SecHeader({ num, title, sub }) {
  return (
    <div className="mx-sec-header">
      <span className="mx-sec-num">/{num}</span>
      <h2 className="mx-sec-title">{title}</h2>
      <span className="mx-sec-sub">{sub}</span>
    </div>
  );
}

function ProjectCard({ project }) {
  const { name, cat, year, nda, summary, stack, status, ghLink } = project;
  const statusCls = status === "active" ? "mx-hl" : status === "research" ? "mx-status-amber" : "mx-dim";

  return (
    <div className="mx-card mx-project-card">
      <div className="mx-project-meta mx-dim">
        [{year}] ·{" "}
        <span style={{ color: "var(--mx-green)" }}>{cat.toUpperCase()}</span>
        {" · "}
        <span className={statusCls}>{status}</span>
      </div>
      <div className="mx-project-title-row">
        <h3 className="mx-project-title">
          <DecryptText text={name} trigger="hover" duration={600} />
        </h3>
        <div style={{ flexShrink: 0 }}>
          {nda ? (
            <span className="mx-tag mx-tag-nda">⚠ NDA</span>
          ) : ghLink ? (
            <a href={ghLink} target="_blank" rel="noreferrer" className="mx-link"
              style={{ fontSize: 11 }} aria-label={`Open ${name} on GitHub`}>
              git ↗
            </a>
          ) : null}
        </div>
      </div>
      <p className="mx-project-summary">{summary}</p>
      <div className="mx-project-tags">
        {stack.map((s) => <span key={s} className="mx-tag">{s}</span>)}
      </div>
    </div>
  );
}

function Projects() {
  const { data: PORTFOLIO } = usePortfolio();
  const [cat, setCat] = useState("All");

  const filtered =
    cat === "All" ? PORTFOLIO.projects : PORTFOLIO.projects.filter((p) => p.cat === cat);

  return (
    <div className="mx-section mx-section-tinted">
      <SecHeader num="02" title="projects" sub="// operations log" />

      <div className="mx-filter-bar">
        {PROJECT_CATS.map((c) => {
          const count = c === "All" ? PORTFOLIO.projects.length : PORTFOLIO.projects.filter((p) => p.cat === c).length;
          return (
            <button
              key={c}
              className={`mx-btn mx-filter-btn ${cat === c ? "mx-filter-active" : ""}`}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
            >
              {c}
              <span className="mx-dim" style={{ fontSize: 10, marginLeft: 4 }}>[{count}]</span>
            </button>
          );
        })}
      </div>

      <div className="mx-grid-2" key={cat}>
        {filtered.map((p, i) => (
          <div key={p.id} className="mx-project-item" style={{ animationDelay: `${i * 40}ms` }}>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
