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
              I'm <span style={{ fontWeight: "bold" }}>Bahaeddine Melki</span>, a Tunisian cybersecurity
              engineer pursuing the SUP'COM x EURECOM double-degree post-master. I specialise in offensive
              security and AI red teaming, co-founding <strong>KB4B3T</strong> to push our local scene with
              weekly learning-first CTF drills and retro sessions.
            </p>
            <p style={{ textAlign: "justify" }}>
              My day-to-day lab work swings from engineering Discord-based C2 implants and stealth
              persistence kits to crafting adversarial AI exercises that pressure-test defenders long before
              attackers show up.
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Leading KB4B3T red-team labs and post-mortems.
              </li>
              <li className="about-activity">
                <ImPointRight /> Building tooling (RATs, malware sandboxes, exploit chains) for controlled drills.
              </li>
              <li className="about-activity">
                <ImPointRight /> Stress-testing LLM agents and jailbreak guardrails for AI safety research.
              </li>
            </ul>
            <p style={{ color: "#3fa749" }}>
              "Security isn't luck it's the repetition of difficult practice."
            </p>
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
