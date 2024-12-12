import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // Import the updated CSS

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  // Encoded message example (base64 or hexadecimal)
  const encodedMessage = "2NomdNT25oXRiaZMg6AS3ELVYziFqDiZfGgXaPYYLRfsXmJ8P7VT3uWsexvDKsTzKDrxebQPF2FP6hKAh"
  return (
    <Container fluid className="footer">
      <Row className="footer-container">
        <Col md="12" className="footer-copywright">
          <h3>Designed and Developed by Bahaeddine</h3>
          <p className="footer-encoded">{encodedMessage}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
