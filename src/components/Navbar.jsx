import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePortfolio } from "../context/PortfolioContext";
import "./Navbar.css";

const LINKS = [
  { label: "home",     to: "/" },
  { label: "about",    to: "/about" },
  { label: "projects", to: "/project" },
  { label: "resume",   to: "/resume" },
  { label: "contact",  to: "/contact" },
];

function NavBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { data: PORTFOLIO } = usePortfolio();

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = event => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <nav className="mx-nav" role="navigation" aria-label="Main navigation">
      {/* left: identity */}
      <div className="mx-nav-left">
        <Link to="/" className="mx-nav-brand" onClick={() => setOpen(false)}>
          <span className="mx-hl" style={{ fontWeight: 600 }}>▌ bmelki</span>
          <span className="mx-dim mx-nav-sub">@ cybersecurity : ~ $</span>
        </Link>
      </div>

      {/* center: links (desktop) */}
      <div className="mx-nav-center">
        {LINKS.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            aria-current={isActive(to) ? "page" : undefined}
            className={`mx-nav-link ${isActive(to) ? "mx-nav-link-active" : ""}`}
          >
            {isActive(to) && <span className="mx-nav-arrow">▸</span>}
            {label}
          </Link>
        ))}
      </div>

      {/* right: status */}
      <div className="mx-nav-right">
        <span className="mx-nav-status">
          <span className="mx-nav-dot">●</span>
          ONLINE · {PORTFOLIO.locale}
        </span>
      </div>

      {/* hamburger (mobile) */}
      <button
        className="mx-nav-hamburger"
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      {/* mobile menu */}
      {open && (
        <div className="mx-nav-mobile" id="mobile-navigation">
          {LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              aria-current={isActive(to) ? "page" : undefined}
              className={`mx-nav-mobile-link ${isActive(to) ? "mx-nav-link-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {isActive(to) && <span className="mx-nav-arrow">▸</span>}
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
