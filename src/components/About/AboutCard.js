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
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed a telecommunications engineering degree at SUP'COM 
            and pursued a post master's degree in cybersecurity at EURECOM.
            <br />
            <br />
            Apart from coding, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Competing in CTF competitions
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Good hackers hack machines, great hackers hack people."{" "}
          </p>
          <footer className="blockquote-footer">B4h43dd1n3</footer>
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
