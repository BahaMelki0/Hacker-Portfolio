import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  const encodedMessage =
    "2NomdNT25oXRiaZMg6AS3ELVYziFqDiZfGgXaPYYLRfsXmJ8P7VT3uWsexvDKsTzKDrxebQPF2FP6hKAh";

  return (
    <footer className="footer">
      <Container fluid>
        <Row className="footer-container">
          <Col md={12} className="footer-copywright">
            <h3 className="footer-heading">Designed and Developed by K4v0r1_0x</h3>
              <span className="footer-emoji" role="img" aria-label="hacker emoji">
                👾
              </span>{" "}
              {year}
            <p className="footer-encoded">{encodedMessage}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
