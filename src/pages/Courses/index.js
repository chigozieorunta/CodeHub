import React from "react";

import Navigation from "../../components/Navigation/Navigation";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";
import CourseNavigation from "../../components/CourseNavigation/CourseNavigation";

const Courses = () => {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <CourseNavigation />
    </>
  );
};

export default Courses;
