import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const links = [
  {
    name: "Home",
    slug: "",
  },
  {
    name: "Courses",
    slug: "courses",
  },
  {
    name: "Sign Up",
    slug: "sign-up",
  },
  {
    name: "Login",
    slug: "login",
  },
];

const Navigation = () => {
  return (
    <ul class="site-main-nav">
      {links.map((link) => (
        <li>
          <Link to={`/${link.slug}`}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

/*import { Navbar, Nav } from "react-bootstrap";

import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar fixed="top" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/courses">Courses</Nav.Link>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;*/
