import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span style={{ fontWeight: "bold" }}>Bahaeddine Melki </span> 
            from <span style={{ fontWeight: "bold" }}>Tunis, Tunisia</span>.
            <br />
            Dual-degree post masters student in Security of Computer Systems and Communications with a keen interest in penetration testing. Persistence and continuous learning define my journey as K4v0r1 in CTF competitions, and I aspire to become one of the best penetration testers in the field.            <br />
            <br />

            <br />
            Apart from coding, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Competing in CTF competitions.
            </li>
            <li className="about-activity">
              <ImPointRight /> Working with AI.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Good hackers hack machines, great hackers hack people."{" "}
          </p>
          <footer className="blockquote-footer">K4v0r1_0x</footer>
        </blockquote>

        {/* TryHackMe Section */}
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h3 style={{ marginBottom: "50px" }}>TryHackMe Profile</h3>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1985230"
              style={{
                border: "none",
                width: "75%",
              }}
              title="TryHackMe Badge"
            ></iframe>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
