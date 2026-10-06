import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="mx-footer">
      <div className="mx-footer-inner">
        <span className="mx-dim" style={{ fontSize: 12 }}>
          &copy; {new Date().getFullYear()} &middot; Bahaeddine Melki
        </span>
        <span className="mx-dim" style={{ fontSize: 12 }}>
          Security engineering &middot; Cloud &amp; Identity &middot; Detection
        </span>
        <span className="mx-dim" style={{ fontSize: 12 }}>
          Open to CDI / CDD roles in France
        </span>
      </div>
    </footer>
  );
}

export default Footer;
