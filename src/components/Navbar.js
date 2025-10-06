import React, { useState, useEffect, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import "./Navbar.css";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMobileMenu = () => setIsExpanded(false);

  return (
    <Navbar
      expanded={isExpanded}
      fixed="top"
      expand="md"
      className={isScrolled ? "navbar colored" : "navbar"}
    >
      <Container>
        <Navbar.Brand className="d-flex navbar-brand-wrap">
          <img
            src={logo}
            className="img-fluid logo"
            alt="Bahaeddine Melki personal logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="navbar-toggle-button"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-md-auto mobile-nav-links" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={closeMobileMenu}>
                <AiOutlineHome style={{ marginBlockEnd: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={closeMobileMenu}>
                <AiOutlineUser style={{ marginBlockEnd: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={closeMobileMenu}>
                <AiOutlineFundProjectionScreen style={{ marginBlockEnd: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={closeMobileMenu}>
                <CgFileDocument style={{ marginBlockEnd: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://eurecom.gitbook.io/330169-cyber-blog/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
              >
                <ImBlog style={{ marginBlockEnd: "2px" }} /> Blog
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
