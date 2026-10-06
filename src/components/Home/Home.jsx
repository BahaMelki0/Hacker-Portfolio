import React from "react";
import HeroTerminal from "../HeroTerminal";
import { useNavigate } from "react-router-dom";
import { usePortfolio } from "../../context/PortfolioContext";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const { data: PORTFOLIO } = usePortfolio();

  return (
    <section className="mx-hero mx-scanlines">
      {/* boot meta */}
      <div className="mx-hero-meta mx-dim">
        <span className="mx-hl">[ system::boot ]</span>
        &nbsp;&nbsp;Cybersecurity engineering &nbsp;·&nbsp; France
      </div>

      {/* glitch name */}
      <h1 className="mx-glitch mx-hero-name" data-text={PORTFOLIO.name}>
        {PORTFOLIO.name}
      </h1>

      <p className="mx-hero-intro">Telecommunications Engineer. Cybersecurity graduate. Builder of security tools.</p>
      <p className="mx-hero-availability">Open to CDI / CDD opportunities in France.</p>

      {/* inline terminal */}
      <div className="mx-panel mx-hero-terminal">
        <div className="mx-panel-head">
          <span className="mx-panel-dots">
            <span /><span /><span />
          </span>
          <span>/dev/tty0 &nbsp;·&nbsp; bmelki@matrix</span>
        </div>
        <div className="mx-hero-terminal-body">
          <HeroTerminal />
        </div>
      </div>

      {/* CTAs */}
      <div className="mx-hero-ctas">
        <button className="mx-btn mx-btn-primary" onClick={() => navigate("/project")}>
          <span>▶</span> View projects
        </button>
        <button className="mx-btn" onClick={() => navigate("/contact")}>
          <span>⌁</span> Contact me
        </button>
      </div>

      {/* scroll hint */}
      <div className="mx-hero-hint mx-dim">
        Security tooling, investigations and research
      </div>
    </section>
  );
}

export default Home;
