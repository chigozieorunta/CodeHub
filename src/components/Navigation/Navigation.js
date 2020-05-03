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
    name: "Log in",
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
