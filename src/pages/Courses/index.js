import React from "react";

import Navigation from "../../components/Navigation/Navigation";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";

import CourseNavigationBar from "./CourseNavigationBar/CourseNavigationBar";

const Courses = () => {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <CourseNavigationBar classes="site-fixed-nav-course" />
    </>
  );
};

export default Courses;
