import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <>
      <p className="home-about-body" style={{ marginTop: "0.5rem" }}>
        I’m <strong>Bahaeddine Melki</strong>, a cybersecurity student following the SUP’COM × EURECOM
        Post-Master’s program. My background in network engineering shaped how I approach security —
        structured thinking, low-level visibility, and respect for protocol logic.
      </p>

      <p className="home-about-body">
        I focus on network and application penetration testing across black-box, grey-box and white-box
        scenarios. I tinker in controlled labs and CTF environments — when bored I try to break my own
        assumptions and systems to spot flaws in design and reasoning.
      </p>

      <ul className="about-activity-list">
        <li className="about-activity">
          <ImPointRight /> Hands-on pentesting: network, web apps, and AD security in black/grey/white-box settings.
        </li>
        <li className="about-activity">
          <ImPointRight /> Applying automation and adversarial AI to improve testing depth and detection workloads.
        </li>
        <li className="about-activity">
          <ImPointRight /> Discipline and consistency — principles I train in the gym and apply to my work.
        </li>
      </ul>

      <p style={{ color: "#3fa749", marginTop: "1rem", marginBottom: 0 }}>
        Every system has a story — I just like to read the parts its designer didn’t mean to show.
      </p>

      <div className="thm-embed">
        <iframe
          src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1985230"
          className="thm-iframe"
          title="TryHackMe Badge"
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>
      </div>
    </>
  );
}

export default AboutCard;
