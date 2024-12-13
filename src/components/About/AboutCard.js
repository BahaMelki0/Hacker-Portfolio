import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am Bahaeddine Melki 
            from Tunis, Tunisia.
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed a telecommunications engineering degree at SUP'COM and went on for a post master's degree in cybersecurity at EURECOM
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing some video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing in CTF competitions
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Good hackers hack machines, great hackers hack people."{" "}
          </p>
          <footer className="blockquote-footer">B4h43dd1n3</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
