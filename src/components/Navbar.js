import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <nav className="mx-nav" role="navigation" aria-label="Main navigation">
      {/* left: identity */}
      <div className="mx-nav-left">
        <Link to="/" className="mx-nav-brand" onClick={() => setOpen(false)}>
          <span className="mx-hl" style={{ fontWeight: 600 }}>▌ bmelki</span>
          <span className="mx-dim mx-nav-sub">@ randorisec : ~ $</span>
        </Link>
      </div>

      {/* center: links (desktop) */}
      <div className="mx-nav-center" role="menubar">
        {LINKS.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            role="menuitem"
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
          ONLINE · Sophia Antipolis · FR
        </span>
      </div>

      {/* hamburger (mobile) */}
      <button
        className="mx-nav-hamburger"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      {/* mobile menu */}
      {open && (
        <div className="mx-nav-mobile" role="menu">
          {LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              role="menuitem"
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
