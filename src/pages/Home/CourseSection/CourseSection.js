import React from "react";

import CourseCategory from "../CourseCategory/CourseCategory";

const AllCategories = {
  Courses: [
    {
      id: 1,
      title: "HTML",
      excerpt: "Learn semantic HTML 5, elements and attributes...",
      total: 5,
      image: "logo-html.png",
    },
    {
      id: 2,
      title: "CSS",
      excerpt:
        "Discover the wonderful world of CSS, flex box, grids, variables...",
      total: 5,
      image: "logo-css.png",
    },
    {
      id: 3,
      title: "JavaScript",
      excerpt: "Build functionality into your website using JavaScript...",
      total: 5,
      image: "logo-js.png",
    },
    {
      id: 4,
      title: "React",
      excerpt: "Discover the most used Front End framework on the web!",
      total: 5,
      image: "logo-react.png",
    },
    {
      id: 5,
      title: "Node.js",
      excerpt: "Use JavaScript to build API & server side functionalities",
      total: 5,
      image: "logo-node.png",
    },
    {
      id: 6,
      title: "PHP",
      excerpt: "Before anything was, there was HyperText Preprocessor",
      total: 5,
      image: "logo-php.png",
    },
    {
      id: 7,
      title: "Laravel",
      excerpt: "Build great PHP application using Laravel Framework",
      total: 5,
      image: "logo-laravel.png",
    },
  ],
};

const Courses = () =>
  AllCategories.Courses.map((Course) => (
    <CourseCategory key={Course.id} {...Course} />
  ));

export default Courses;
