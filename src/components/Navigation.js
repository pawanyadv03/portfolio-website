import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    const [, setNavTitle] = useState('Pawan Yadav');

  const handleNavLinkClick = (title, pageTitle) => {
    setNavTitle(title);
    document.title = pageTitle;
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home" onClick={() => handleNavLinkClick('Pawan Yadav', 'My Portfolio')} className="logo-py">
          PY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about" onClick={() => handleNavLinkClick('About', 'My Portfolio - About')}>About</Nav.Link>
            <Nav.Link href="#projects" onClick={() => handleNavLinkClick('Projects', 'My Portfolio - Projects')}>Projects</Nav.Link>
            <Nav.Link href="#skills" onClick={() => handleNavLinkClick('Skills', 'My Portfolio - Skills')}>Skills</Nav.Link>
            <Nav.Link href="#certifications" onClick={() => handleNavLinkClick('Certifications', 'My Portfolio - Certifications')}>Certifications</Nav.Link>
            <Nav.Link href="#contact" onClick={() => handleNavLinkClick('Contact', 'My Portfolio - Contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="blinking-line"></div>
    </>
  );
};

export default Navigation;
