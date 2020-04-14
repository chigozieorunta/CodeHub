import React from "react";
import Category from "./Category";

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
  ],
};

const Courses = () => {
  return AllCategories.Courses.map((Course) => <Category {...Course} />);
};

export default Courses;
