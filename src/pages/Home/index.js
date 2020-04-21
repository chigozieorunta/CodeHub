import React from "react";
import Landing from "./Landing/Landing";
import Courses from "./Courses/Courses";
import Footer from "../../layouts/Footer/Footer";
import TopNavigation from "./TopNavigation/TopNavigation";

const Home = () => {
  return (
    <>
      <TopNavigation />
      <Landing />
      <Courses />
      <Footer />
    </>
  );
};

export default Home;
