import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
/* import { ImBlog } from "react-icons/im"; */
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <div id='logo' className="main-name" style={{fontWeight: '800'}}>MA</div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
          <Nav.Item style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
              <a
                href="#home" style={{textDecoration: 'none', color: 'white'}}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Home
              </a>
            </Nav.Item>

            <Nav.Item style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
              <a
                href="#about-me" style={{textDecoration: 'none', color: 'white'}}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </a>
            </Nav.Item>

            <Nav.Item style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
              <a
                href="#projects" style={{textDecoration: 'none', color: 'white'}}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Projects
              </a>
            </Nav.Item>

            <Nav.Item style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
              <a
                href="#" download={"manishkumar_resume"} style={{textDecoration: 'none', color: 'white'}}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Resume
              </a>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/beebus/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
