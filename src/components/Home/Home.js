import React from "react";
import Typewriter from "typewriter-effect";
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
        &nbsp;&nbsp;identity: verified &nbsp;·&nbsp; clearance: ops &nbsp;·&nbsp; status:{" "}
        <span className="mx-hl">online</span>
      </div>

      {/* glitch name */}
      <h1 className="mx-glitch mx-hero-name" data-text={PORTFOLIO.name}>
        {PORTFOLIO.name}
      </h1>

      {/* tagline typewriter */}
      <div className="mx-hero-tagline">
        <span className="mx-hl">▶&nbsp;</span>
        <Typewriter
          options={{
            strings: PORTFOLIO.taglines,
            autoStart: true,
            loop: true,
            deleteSpeed: 28,
            delay: 48,
            cursor: "▋",
          }}
        />
      </div>

      {/* inline terminal */}
      <div className="mx-panel mx-hero-terminal">
        <div className="mx-panel-head">
          <span className="mx-panel-dots">
            <span /><span /><span />
          </span>
          <span>/dev/tty0 &nbsp;·&nbsp; bmelki@matrix</span>
        </div>
        <div style={{ padding: "16px 20px" }}>
          <HeroTerminal />
        </div>
      </div>

      {/* CTAs */}
      <div className="mx-hero-ctas">
        <button className="mx-btn mx-btn-primary" onClick={() => navigate("/project")}>
          <span>▶</span> View Operations
        </button>
        <button className="mx-btn" onClick={() => navigate("/contact")}>
          <span>⌁</span> Establish Contact
        </button>
      </div>

      {/* scroll hint */}
      <div className="mx-hero-hint mx-dim">
        ↓ scroll &nbsp;·&nbsp; wake up, neo
      </div>
    </section>
  );
}

export default Home;
