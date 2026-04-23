import React, { useEffect, useRef } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import pdf from "../../Assets/Melki_Bahaeddine.pdf";
import "./Resume.css";

function SecHeader({ num, title, sub }) {
  return (
    <div className="mx-sec-header">
      <span className="mx-sec-num">/{num}</span>
      <h2 className="mx-sec-title">{title}</h2>
      <span className="mx-sec-sub">{sub}</span>
    </div>
  );
}

function ResumeNew() {
  const { data: PORTFOLIO } = usePortfolio();
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("mx-revealed"); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <div className="mx-section">
      <SecHeader num="03" title="resume" sub="// career trace" />

      <div className="mx-panel mx-resume-panel">
        {/* panel header with download link */}
        <div className="mx-panel-head">
          <span className="mx-panel-dots"><span /><span /><span /></span>
          <span>~/resume/bahaeddine_melki.log · size 4.2kB</span>
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="mx-link mx-resume-dl"
            aria-label="Download resume PDF"
          >
            ↓ download pdf
          </a>
        </div>

        {/* timeline */}
        <div style={{ padding: "24px 28px" }}>
          {PORTFOLIO.experience.map((ex, i) => (
            <div
              key={i}
              ref={addRef}
              className="mx-reveal mx-resume-entry"
              style={{
                transitionDelay: `${i * 80}ms`,
                borderBottom: i < PORTFOLIO.experience.length - 1
                  ? "1px dashed var(--mx-border)"
                  : "none",
              }}
            >
              <div className="mx-dim mx-resume-date">{ex.date}</div>
              <div>
                <div className="mx-resume-role">
                  <span className="mx-hl">{ex.role}</span>
                  <span className="mx-dim mx-resume-org"> · {ex.org}</span>
                </div>
                <ul className="mx-resume-bullets">
                  {ex.bullets.map((b) => (
                    <li key={b}>
                      <span className="mx-dim">▸</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
