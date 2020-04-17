import React from "react";
import Category from "../Category/Category";

const AllCategories = {
  Courses: [
    {
      id: 1,
      title: "HTML",
      excerpt: "Learn semantic HTML 5, elements and attributes...",
      total: 37,
    },
    {
      id: 2,
      title: "CSS",
      excerpt:
        "Discover the wonderful world of CSS, flex box, grids, variables...",
      total: 18,
    },
    {
      id: 3,
      title: "JavaScript",
      excerpt: "Build functionality into your website using JavaScript...",
      total: 22,
    },
    {
      id: 4,
      title: "React",
      excerpt: "Discover the most used Front End framework on the web!",
      total: 3,
    },
    {
      id: 5,
      title: "Node.js",
      excerpt: "Use JavaScript to build API & server side functionalities",
      total: 3,
    },
    {
      id: 6,
      title: "PHP",
      excerpt: "Before anything was, there was HyperText Preprocessor",
      total: 3,
    },
  ],
};

const Courses = () =>
  AllCategories.Courses.map((Course) => <Category {...Course} />);

export default Courses;
