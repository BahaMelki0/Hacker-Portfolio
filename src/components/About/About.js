import React, { useState, useEffect, useRef } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import "./About.css";

function SecHeader({ num, title, sub }) {
  return (
    <div className="mx-sec-header">
      <span className="mx-sec-num">/{num}</span>
      <h2 className="mx-sec-title">{title}</h2>
      <span className="mx-sec-sub">{sub}</span>
    </div>
  );
}

function SkillCard({ skill, index }) {
  const bar = 68 + (skill.length * 3) % 28;
  return (
    <div className="mx-card mx-skill-card">
      <div className="mx-skill-row">
        <span className="mx-hl mx-skill-name">{skill}</span>
        <span className="mx-dim" style={{ fontSize: 10 }}>
          0x{(index + 1).toString(16).padStart(2, "0")}
        </span>
      </div>
      <div className="mx-skill-bar-track">
        <div className="mx-skill-bar" style={{ width: `${bar}%` }} />
      </div>
    </div>
  );
}

function About() {
  const { data: PORTFOLIO } = usePortfolio();
  const [tab, setTab] = useState("Security");
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("mx-revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const tabs = Object.keys(PORTFOLIO.skills);

  return (
    <div className="mx-section">
      <SecHeader num="01" title="about" sub="// the operator" />

      <div className="mx-grid-about">
        {/* left: bio panel */}
        <div ref={addRef} className="mx-reveal">
          <div className="mx-panel">
            <div className="mx-panel-head">
              <span className="mx-panel-dots"><span /><span /><span /></span>
              <span>~/profile/about.md</span>
            </div>
            <div className="mx-about-body">
              <p className="mx-dim mx-about-cmd">
                <span className="mx-hl">$</span> cat about.md
              </p>
              <p className="mx-about-bio mx-hl">{PORTFOLIO.bio}</p>

              <div className="mx-about-kv">
                {PORTFOLIO.profile.map(({ key, val }) => (
                  <React.Fragment key={key}>
                    <span className="mx-dim">{key}</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: val
                          .replace("RandoriSec", '<span class="mx-hl">RandoriSec</span>')
                          .replace("EURECOM × SUP'COM", "<span class=\"mx-hl\">EURECOM × SUP'COM</span>"),
                      }}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* right: skill tabs */}
        <div ref={addRef} className="mx-reveal" style={{ transitionDelay: "120ms" }}>
          {/* tab bar */}
          <div className="mx-tab-bar">
            {tabs.map((t) => (
              <button
                key={t}
                className={`mx-tab-btn ${tab === t ? "mx-tab-active" : ""}`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* skill grid */}
          <div className="mx-grid-2" style={{ marginTop: 0 }}>
            {PORTFOLIO.skills[tab].map((skill, i) => (
              <SkillCard key={skill} skill={skill} index={i} />
            ))}
          </div>

          <p className="mx-dim mx-skill-footer">
            ▸ {PORTFOLIO.skills[tab].length} modules loaded · tab to switch
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
