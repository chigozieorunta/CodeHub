import React from "react";
import Landing from "./Landing/Landing";
import Courses from "./Courses/Courses";
import Footer from "../../layouts/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <Landing />
      <Courses />
      <Footer />
    </>
  );
};

export default Home;
