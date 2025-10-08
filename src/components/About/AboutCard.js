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
              I'm <span style={{ fontWeight: "bold" }}>Bahaeddine Melki</span> a telecom engineer retooling for offensive
              security through the SUP'COM x EURECOM post-master. Network and application penetration testing let me blend
              RF discipline with creative tradecraft.
            </p>
            <p style={{ textAlign: "justify" }}>
              Each week at <strong>KB4B3T</strong> we build the tooling we wish existed: Discord C2 implants, adversarial AI harnesses,
              and purple-team lab scripts. We document everything so the next crew can rerun the attack chains, not just read about them.
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Crafting implants, persistence kits, and automation for controlled red-team exercises.
              </li>
              <li className="about-activity">
                <ImPointRight /> Mapping enterprise environments with BloodHound and custom reconnaissance playbooks.
              </li>
              <li className="about-activity">
                <ImPointRight /> Strength training to keep the mindset sharp and the grind sustainable.
              </li>
            </ul>
            <p style={{ color: "#3fa749" }}>
              "Sharpen your tools, share your notes, repeat." that's the KB4B3T creed.
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
