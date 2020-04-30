import React from "react";
import { Link } from "react-router-dom";

import "./CourseNavigation.css";

const links = [
  {
    name: "HTML",
    slug: "html",
  },
  {
    name: "CSS",
    slug: "css",
  },
  {
    name: "JavaScript",
    slug: "javascript",
  },
  {
    name: "React",
    slug: "react",
  },
  {
    name: "Node.js",
    slug: "nodejs",
  },
  {
    name: "PHP",
    slug: "php",
  },
  {
    name: "Laravel",
    slug: "laravel",
  },
];

const CourseNavigation = () => {
  return (
    <ul class="site-course-nav">
      {links.map((link) => (
        <li>
          <Link to={`/courses/${link.slug}`}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CourseNavigation;
