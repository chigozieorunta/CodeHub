import React from "react";
import Category from "../Category/Category";

const AllCategories = {
  Courses: [
    {
      id: 1,
      title: "HTML",
      excerpt: "Learn semantic HTML 5, elements and attributes...",
      total: 5,
    },
    {
      id: 2,
      title: "CSS",
      excerpt:
        "Discover the wonderful world of CSS, flex box, grids, variables...",
      total: 5,
    },
    {
      id: 3,
      title: "JavaScript",
      excerpt: "Build functionality into your website using JavaScript...",
      total: 5,
    },
    {
      id: 4,
      title: "React",
      excerpt: "Discover the most used Front End framework on the web!",
      total: 5,
    },
    {
      id: 5,
      title: "Node.js",
      excerpt: "Use JavaScript to build API & server side functionalities",
      total: 5,
    },
    {
      id: 6,
      title: "PHP",
      excerpt: "Before anything was, there was HyperText Preprocessor",
      total: 5,
    },
    {
      id: 7,
      title: "Laravel",
      excerpt: "Build great PHP application using Laravel Framework",
      total: 5,
    },
  ],
};

const Courses = () =>
  AllCategories.Courses.map((Course) => (
    <Category key={Course.id} {...Course} />
  ));

export default Courses;
