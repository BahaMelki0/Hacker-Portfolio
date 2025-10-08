import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <>
      <Card className="quote-card-view">
        <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span style={{ fontWeight: "bold" }}>Bahaeddine Melki</span>, a cybersecurity student following the SUP'COM × EURECOM Post-Master’s program. My background in network engineering shaped how I approach security — structured thinking,
            low-level visibility, and respect for protocol logic.
          </p>

          <p style={{ textAlign: "justify" }}>
            I focus on network and application penetration testing across black-box, grey-box and white-box scenarios. I habitually tinker in
            controlled labs and CTF environments — when bored I try to break my own assumptions and systems to spot flaws in design and reasoning.
            That curiosity helps me turn exploitation paths into practical mitigation advice.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Hands-on pentesting: network, web apps, and AD security in black/grey/white-box settings.
            </li>
            <li className="about-activity">
              <ImPointRight /> Applying automation and adversarial AI to improve testing depth and detection workloads.
            </li>
            <li className="about-activity">
              <ImPointRight /> Discipline and consistency — principles I train in the gym and apply to my life.
            </li>
          </ul>
        <p style={{ color: "#3fa749" }}> Every system has a story — I just like to read the parts its designer didn’t mean to show. </p>      
        </blockquote>

        </Card.Body>
      </Card>

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
