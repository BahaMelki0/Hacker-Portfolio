import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="mx-footer">
      <div className="mx-footer-inner">
        <span className="mx-dim" style={{ fontSize: 12 }}>
          &copy; MMXXVI &middot; Bahaeddine Melki &middot; all rights unreserved
        </span>
        <span className="mx-dim" style={{ fontSize: 12 }}>
          built with <span className="mx-hl">▌</span> + <span className="mx-hl">█</span> + rain
        </span>
        <span className="mx-dim" style={{ fontSize: 12 }}>
          the system has you &middot; follow the white rabbit ⌁
        </span>
      </div>
    </footer>
  );
}

export default Footer;
